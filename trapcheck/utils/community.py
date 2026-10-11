"""SQLite-backed community scam reports with sanitized optional photos."""
from __future__ import annotations

import base64
import json
import sqlite3
from datetime import datetime, timezone
from pathlib import Path

from . import fair_price_engine as fpe

DATA_DIR = Path(__file__).resolve().parent.parent.parent / "data"
DB_FILE = DATA_DIR / "trapcheck_logs.db"
SEED_FILE = DATA_DIR / "scam_reports.json"
_CITIES = {"Bangkok", "Bali", "Jaipur"}
_CATEGORIES = {"transport", "food", "shopping", "ticket", "activity", "other"}
_CURRENCY = {"Bangkok": "THB", "Bali": "IDR", "Jaipur": "INR"}


def _connect() -> sqlite3.Connection:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_FILE, timeout=5)
    conn.row_factory = sqlite3.Row
    conn.execute(
        """CREATE TABLE IF NOT EXISTS community_reports (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            city TEXT NOT NULL,
            category TEXT NOT NULL,
            description TEXT NOT NULL,
            amount REAL NOT NULL,
            currency TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL,
            photo BLOB NOT NULL,
            created_at TEXT NOT NULL
        )"""
    )
    return conn


def add_report(city: str, category: str, description: str, amount, lat, lng,
               photo: bytes) -> None:
    city = fpe.sanitize_text(city, 24)
    category = fpe.sanitize_text(category, 24).lower()
    description = fpe.sanitize_text(description, 400)
    amount_value = fpe.sanitize_price(amount)
    try:
        latitude, longitude = float(lat), float(lng)
    except (TypeError, ValueError):
        raise ValueError("Enter a valid map location.")
    if city not in _CITIES or category not in _CATEGORIES:
        raise ValueError("Choose a supported city and report category.")
    if not description or amount_value is None:
        raise ValueError("Add a short description and a positive amount.")
    if not (-90 <= latitude <= 90 and -180 <= longitude <= 180):
        raise ValueError("Enter valid latitude and longitude values.")
    if not photo or len(photo) > 8 * 1024 * 1024:
        raise ValueError("Add a photo smaller than 8 MB.")
    conn = _connect()
    try:
        conn.execute(
            """INSERT INTO community_reports
               (city, category, description, amount, currency, lat, lng, photo, created_at)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)""",
            (city, category, description, amount_value, _CURRENCY[city], latitude,
             longitude, sqlite3.Binary(photo), datetime.now(timezone.utc).isoformat()),
        )
        conn.commit()
    finally:
        conn.close()


def load_reports(limit: int = 50) -> list[dict]:
    """Return seeded and newest community reports with bounded photo thumbnails."""
    try:
        seeded = json.loads(SEED_FILE.read_text(encoding="utf-8"))
    except Exception:
        seeded = []
    reports = []
    for row in seeded:
        reports.append({
            "id": f"seed-{row.get('id', '')}", "city": row.get("city", ""),
            "category": row.get("category", "other"),
            "description": fpe.sanitize_text(row.get("description", ""), 400),
            "amount_label": "", "lat": float(row.get("lat", 0)),
            "lng": float(row.get("lng", 0)), "photo_data": "",
            "date": row.get("date", ""), "source": "Community report",
        })
    conn = _connect()
    try:
        rows = conn.execute(
            """SELECT id, city, category, description, amount, currency, lat, lng,
                      photo, created_at
               FROM community_reports ORDER BY id DESC LIMIT ?""",
            (max(1, min(int(limit), 100)),),
        ).fetchall()
        community_reports = []
        for row in rows:
            photo = bytes(row["photo"] or b"")
            community_reports.append({
                "id": row["id"], "city": row["city"], "category": row["category"],
                "description": row["description"],
                "amount_label": f"{row['currency']} {row['amount']:,.0f}",
                "lat": row["lat"], "lng": row["lng"],
                "photo_data": "data:image/jpeg;base64," + base64.b64encode(photo).decode("ascii")
                    if photo else "",
                "date": str(row["created_at"])[:10], "source": "Traveler report",
            })
    finally:
        conn.close()
    return (community_reports + reports)[:max(1, min(int(limit), 100))]


def reports_for_map() -> list[dict]:
    return [{key: report[key] for key in ("city", "category", "description", "lat", "lng", "amount_label")}
            for report in load_reports(100)]
