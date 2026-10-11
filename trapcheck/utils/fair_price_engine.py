"""TrapCheck — Fair Price Engine.

Deterministic, offline price-fairness scoring. Uses rapidfuzz fuzzy matching
against the seeded dataset. No network calls, no AI — the authoritative result.
"""
from __future__ import annotations

import json
import logging
import sqlite3
import threading
from pathlib import Path

try:
    from rapidfuzz import fuzz, process

    def _best_match(query: str, choices: list[str]):
        return process.extractOne(query, choices, scorer=fuzz.token_set_ratio)
except ImportError:  # stdlib fallback so the engine never hard-fails
    import difflib

    def _fuzzy_token_set(query: str, choice: str) -> float:
        q_tokens = set(query.lower().split())
        c_tokens = set(choice.lower().split())
        overlap = len(q_tokens & c_tokens) / max(1, len(q_tokens))
        ratio = difflib.SequenceMatcher(None, query.lower(), choice.lower()).ratio()
        return (0.7 * overlap + 0.3 * ratio) * 100

    def _best_match(query: str, choices: list[str]):
        best, best_score, pos = "", -1.0, -1
        for i, c in enumerate(choices):
            s = _fuzzy_token_set(query, c)
            if s > best_score:
                best, best_score, pos = c, s, i
        if pos < 0:
            return None
        return (best, best_score, pos)

logger = logging.getLogger("trapcheck.fair_price")

DATA_DIR = Path(__file__).resolve().parent.parent.parent / "data"
FAIR_PRICE_FILE = DATA_DIR / "fair_price.json"
DB_FILE = DATA_DIR / "trapcheck_logs.db"

MAX_ENTRY_SCORE = 70  # minimum fuzzy-match score to accept a dataset entry

# ---------------------------------------------------------------------------
# Dataset
# ---------------------------------------------------------------------------

_lock = threading.Lock()
_cache: list[dict] | None = None


def load_dataset() -> list[dict]:
    """Load and cache fair_price.json. Falls back to empty list on failure."""
    global _cache
    if _cache is None:
        try:
            with open(FAIR_PRICE_FILE, "r", encoding="utf-8") as f:
                _cache = json.load(f)
        except Exception:
            logger.exception("Failed to load fair price dataset")
            _cache = []
    return _cache


def sanitize_text(value: str, max_len: int = 200) -> str:
    """Strip control characters and clamp length. Defensive input handling."""
    if not isinstance(value, str):
        return ""
    cleaned = "".join(ch for ch in value if ch.isprintable())
    return cleaned.strip()[:max_len]


def sanitize_price(value) -> float | None:
    """Validate a price: must be a positive finite number within sane bounds."""
    try:
        price = float(value)
    except (TypeError, ValueError):
        return None
    if not (0 < price <= 10_000_000):  # sanity bounds
        return None
    return price


# ---------------------------------------------------------------------------
# Matching
# ---------------------------------------------------------------------------

def find_fair_price(item_name: str, city: str) -> dict | None:
    """Fuzzy-match an item name to the dataset for a given city.

    Returns the best entry dict, or None. Never raises.
    """
    item = sanitize_text(item_name)
    city = sanitize_text(city, 40)
    if not item:
        return None
    entries = load_dataset()
    if not entries:
        return None

    if city:
        pool = [(i, e) for i, e in enumerate(entries) if e.get("city", "").lower() == city.lower()]
        if not pool:
            pool = list(enumerate(entries))
    else:
        pool = list(enumerate(entries))

    # Compare against item name AND keywords for better recall
    choices, meta = [], []
    for idx, entry in pool:
        choices.append(entry.get("item", ""))
        meta.append(idx)
        for kw in entry.get("keywords", []):
            choices.append(kw)
            meta.append(idx)

    try:
        # OCR and manual entry often vary in capitalization; normalize both
        # sides before comparing so "Pad Thai Goong Sod" can match "pad thai".
        result = _best_match(item.lower(), [choice.lower() for choice in choices])
    except Exception:
        logger.exception("Fuzzy matching failed")
        return None
    if result is None:
        return None
    match_text, score, pos = result
    if score < MAX_ENTRY_SCORE:
        return None
    return entries[meta[pos]]


# ---------------------------------------------------------------------------
# Scam score — the authoritative formula (spec §5). Do not change.
# ---------------------------------------------------------------------------

def compute_scam_score(price: float, fair_min: float, fair_max: float) -> int:
    """Deterministic scam score 0-100.

    price <= fair_min        -> 5-15 (safe)
    fair_min < price <= fair_max -> linear 15 -> 35
    price > fair_max         -> 35 + min(65, 65 * (price - fair_max) / fair_max)
    """
    price = sanitize_price(price) or 0.0
    if fair_max <= 0:
        return 35
    if price <= fair_min:
        if fair_min > 0:
            return int(round(5 + 10 * min(price, fair_min) / fair_min))
        return 10
    if price <= fair_max:
        span = fair_max - fair_min
        frac = (price - fair_min) / span if span > 0 else 1.0
        return int(round(15 + 20 * frac))
    over = (price - fair_max) / fair_max
    return int(round(35 + min(65.0, 65.0 * over)))


def verdict_for_score(score: int) -> str:
    if score < 35:
        return "SAFE"
    if score < 65:
        return "OVERCHARGED"
    return "SCAM"


def risk_level_for_score(score: int) -> str:
    if score < 35:
        return "LOW"
    if score < 65:
        return "MEDIUM"
    return "HIGH"


def evaluate(item_name: str, price, city: str = "") -> dict:
    """Full evaluation: match item, compute score/verdict/tip. Never raises."""
    try:
        entry = find_fair_price(item_name, city)
        if entry is None:
            return {
                "found": False,
                "item": sanitize_text(item_name),
                "city": sanitize_text(city, 40),
                "scam_score": None,
                "verdict": "UNKNOWN",
                "reason": "Item not found in our local price database yet.",
                "tip": "Compare prices at two nearby vendors before buying.",
                "risk_level": "UNKNOWN",
                "fair_min": None,
                "fair_max": None,
                "currency": None,
            }
        fair_min = float(entry["fair_min"])
        fair_max = float(entry["fair_max"])
        score = compute_scam_score(price, fair_min, fair_max)
        return {
            "found": True,
            "item": entry["item"],
            "city": entry["city"],
            "scam_score": score,
            "verdict": verdict_for_score(score),
            "reason": f"Local fair price for {entry['item']} is {fair_min:,.0f}-{fair_max:,.0f} {entry['currency']}.",
            "tip": entry.get("local_tip", "Compare with a second vendor."),
            "risk_level": risk_level_for_score(score),
            "fair_min": fair_min,
            "fair_max": fair_max,
            "currency": entry["currency"],
        }
    except Exception:
        logger.exception("evaluate() failed")
        return {"found": False, "item": "", "city": "", "scam_score": None,
                "verdict": "UNKNOWN", "reason": "Analysis unavailable.",
                "tip": "", "risk_level": "UNKNOWN", "fair_min": None,
                "fair_max": None, "currency": None}


# ---------------------------------------------------------------------------
# SQLite logging (for landing-page stats counters)
# ---------------------------------------------------------------------------

def _init_db() -> None:
    with _lock:
        conn = sqlite3.connect(DB_FILE)
        try:
            conn.execute(
                """CREATE TABLE IF NOT EXISTS analyses (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        item TEXT NOT NULL,
                        city TEXT NOT NULL,
                        user_price REAL NOT NULL,
                        fair_min REAL,
                        fair_max REAL,
                        currency TEXT,
                        scam_score INTEGER,
                        verdict TEXT,
                        source TEXT,
                        created_at TEXT DEFAULT (datetime('now'))
                    )"""
            )
            conn.execute(
                """CREATE TABLE IF NOT EXISTS reports (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        city TEXT NOT NULL,
                        category TEXT NOT NULL,
                        description TEXT NOT NULL,
                        lat REAL,
                        lng REAL,
                        created_at TEXT DEFAULT (datetime('now'))
                    )"""
            )
            conn.commit()
        finally:
            conn.close()


def log_analysis(item: str, city: str, user_price: float, result: dict, source: str) -> None:
    """Record an analysis. Parameterized query only; failures are swallowed."""
    try:
        _init_db()
        with _lock:
            conn = sqlite3.connect(DB_FILE)
            try:
                conn.execute(
                    """INSERT INTO analyses
                       (item, city, user_price, fair_min, fair_max, currency,
                        scam_score, verdict, source)
                       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)""",
                    (
                        sanitize_text(item, 200),
                        sanitize_text(city, 40),
                        float(user_price or 0),
                        result.get("fair_min"),
                        result.get("fair_max"),
                        result.get("currency"),
                        result.get("scam_score"),
                        sanitize_text(str(result.get("verdict", "UNKNOWN")), 20),
                        sanitize_text(source, 20),
                    ),
                )
                conn.commit()
            finally:
                conn.close()
    except Exception:
        logger.exception("Failed to log analysis")


def get_stats() -> dict:
    """Aggregate stats for the landing page counters. Never raises."""
    try:
        _init_db()
        with _lock:
            conn = sqlite3.connect(DB_FILE)
            try:
                cur = conn.execute("SELECT COUNT(*) FROM analyses")
                total = cur.fetchone()[0]
                cur = conn.execute("SELECT COUNT(*) FROM analyses WHERE verdict = 'SCAM'")
                scams = cur.fetchone()[0]
                cur = conn.execute(
                    """SELECT AVG((user_price - fair_max) / fair_max * 100.0)
                       FROM analyses
                       WHERE verdict = 'SCAM' AND fair_max > 0 AND user_price > fair_max"""
                )
                avg = cur.fetchone()[0]
                return {
                    "total_scans": total,
                    "scams_detected": scams,
                    "avg_overcharge_pct": round(avg) if avg is not None else 0,
                }
            finally:
                conn.close()
    except Exception:
        logger.exception("get_stats failed")
        return {"total_scans": 0, "scams_detected": 0, "avg_overcharge_pct": 0}
