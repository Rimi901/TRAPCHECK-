"""TrapCheck — Scan state: upload handling, analysis pipeline, manual entry."""
from __future__ import annotations

import logging
import os
import json
from pathlib import Path

import reflex as rx

from ..utils import fair_price_engine as fpe
from ..utils import gemini_analyzer
from ..utils import ocr_fallback
from ..utils.security import (
    UploadValidationError,
    validate_and_clean_image,
)

logger = logging.getLogger("trapcheck.scan")

CITIES = ["Bangkok", "Bali", "Jaipur"]

# Simple currency normalization: map ISO/symbols to city currency
CITY_CURRENCY = {"Bangkok": "THB", "Bali": "IDR", "Jaipur": "INR"}

# Pre-loaded demo images as bytes (loaded once at startup)
_DEMO_IMAGES = {}

def _load_demo_images():
    """Load demo bill images into memory at startup so they're always available."""
    global _DEMO_IMAGES
    if not _DEMO_IMAGES:
        try:
            demo_dir = Path(__file__).resolve().parent.parent / "assets" / "demo"
            for f in demo_dir.glob("*.jpg"):
                _DEMO_IMAGES[f.stem] = f.read_bytes()
            for f in demo_dir.glob("*.jpeg"):
                _DEMO_IMAGES[f.stem] = f.read_bytes()
            for f in demo_dir.glob("*.png"):
                _DEMO_IMAGES[f.stem] = f.read_bytes()
        except Exception:
            logger.warning("Could not load demo images")


def _fmt_money(value: float | None, currency: str | None) -> str:
    if value is None or not currency:
        return "—"
    symbols = {"THB": "฿", "IDR": "Rp", "INR": "₹"}
    sym = symbols.get(currency, currency + " ")
    return f"{sym}{value:,.0f}"


class ScanState(rx.State):
    # ---- UI state ----
    is_loading: bool = False
    city: str = "Bangkok"
    error_message: str = ""
    analysis_mode: str = ""  # "AI" | "Offline" | "Manual"

    # ---- results ----
    result_item: str = ""
    result_price: float = 0.0
    result_currency: str = ""
    fair_min: float = 0.0
    fair_max: float = 0.0
    scam_score: int = 0
    verdict: str = ""
    reason: str = ""
    tip: str = ""
    risk_level: str = ""
    has_result: bool = False
    found_match: bool = False

    # ---- uploaded file bytes (captured via on_select) ----
    _upload_bytes: list[bytes] = []  # one item max; cleared after analysis

    # ---- manual entry ----
    manual_item: str = ""
    manual_price: str = ""
    analysis_instruction: str = "Scan this menu's prices and flag any that look unusually high."

    @rx.var
    def currency_symbol(self) -> str:
        return {"THB": "฿", "IDR": "Rp", "INR": "₹"}.get(self.result_currency, "$")

    @rx.var
    def fair_range_label(self) -> str:
        return f"{_fmt_money(self.fair_min, self.result_currency)} – {_fmt_money(self.fair_max, self.result_currency)}"

    @rx.var
    def your_price_label(self) -> str:
        return _fmt_money(self.result_price, self.result_currency)

    @rx.var
    def verdict_color(self) -> str:
        return {"SAFE": "#10B981", "OVERCHARGED": "#F59E0B", "SCAM": "#EF4355"}.get(
            self.verdict, "#64748B"
        )

    @rx.var
    def price_marker_pct(self) -> int:
        """Position of user's price marker on the comparison bar (0-100)."""
        try:
            lo, hi, p = float(self.fair_min), float(self.fair_max), float(self.result_price)
            if hi <= lo:
                return 50
            scale = hi * 2  # bar spans 0 .. 2x fair_max
            pct = (p / scale) * 100
            return int(max(2, min(98, pct)))
        except Exception:
            return 50

    @rx.var
    def fair_range_start_pct(self) -> int:
        try:
            scale = float(self.fair_max) * 2
            return int(max(2, min(98, (float(self.fair_min) / scale) * 100)))
        except Exception:
            return 25

    @rx.var
    def fair_range_end_pct(self) -> int:
        try:
            scale = float(self.fair_max) * 2
            return int(max(2, min(98, (float(self.fair_max) / scale) * 100)))
        except Exception:
            return 50

    # ------------------------------------------------------------------
    # Analysis helpers
    # ------------------------------------------------------------------
    async def _analyze_image(self, image_bytes: bytes, instruction: str = ""):
        """Run the full analysis chain on a raw image."""
        try:
            cleaned = validate_and_clean_image("photo.jpg", image_bytes)
        except UploadValidationError:
            cleaned = image_bytes  # skip validation for samples

        self.is_loading = True
        try:
            extracted = None

            # --- Step 1: Gemini vision (free) ---
            try:
                extracted = gemini_analyzer.extract_item_and_price(
                    cleaned, city=self.city, instruction=instruction
                )
                if extracted:
                    extracted["source"] = "ai"
            except Exception:
                logger.exception("gemini extractor crashed")

            # --- Step 2: OCR fallback (offline, always available) ---
            if not extracted:
                try:
                    ocr = ocr_fallback.ocr_extract(cleaned, self.city, instruction)
                except Exception:
                    logger.exception("ocr crashed")
                    ocr = None
                if ocr:
                    extracted = {
                        "item": ocr["item"],
                        "price": ocr["price"],
                        "currency": CITY_CURRENCY.get(self.city, ""),
                        "confidence": 0.5,
                        "source": "ocr",
                    }

            if not extracted:
                self.error_message = (
                    "Could not read a price from this photo. "
                    "Please enter the item name and price manually in the form below."
                )
                self.is_loading = False
                self.analysis_mode = ""
                return

            mode = "AI" if extracted.get("source") == "ai" else "Offline"
            await self._score_and_present(
                extracted["item"], extracted["price"], mode, use_ai_reasoning=False
            )
        finally:
            self.is_loading = False

    # ------------------------------------------------------------------
    # Upload handling
    # ------------------------------------------------------------------
    async def handle_upload(self, upload_files: list[rx.UploadFile]):
        """Called by on_click on the analyze button — files passed via upload_files."""
        self.error_message = ""
        self.has_result = False

        if not upload_files:
            self.error_message = "Please choose a photo of the bill, menu, or price tag."
            return

        file = upload_files[0]
        try:
            raw = await file.read()
        except Exception:
            logger.exception("upload read failed")
            self.error_message = "We could not read that file. Please try again."
            return

        self.is_loading = True
        await self._analyze_image(raw, self.analysis_instruction)

    # ------------------------------------------------------------------
    # Sample image analysis
    # ------------------------------------------------------------------
    async def analyze_city_sample(self, label: str):
        """Load a pre-made demo image (in-memory) and analyze it."""
        _load_demo_images()
        self.error_message = ""
        self.has_result = False

        samples = {
            "Bangkok bill": ("bill_bangkok", "Bangkok"),
            "Bali bill": ("bill_bali", "Bali"),
            "Jaipur bill": ("bill_jaipur", "Jaipur"),
        }
        sample = samples.get(label)
        if not sample:
            self.error_message = "Sample unavailable. Please enter item and price manually below."
            return

        sample_key, sample_city = sample
        self.city = sample_city

        # Try demo images first, then filesystem
        image_bytes = _DEMO_IMAGES.get(sample_key)
        if not image_bytes:
            try:
                demo_dir = Path(__file__).resolve().parent.parent / "assets" / "demo"
                for ext in ("jpg", "jpeg", "png"):
                    p = demo_dir / f"{sample_key}.{ext}"
                    if p.exists():
                        image_bytes = p.read_bytes()
                        _DEMO_IMAGES[sample_key] = image_bytes
                        break
            except Exception:
                pass

        if not image_bytes:
            self.error_message = (
                "Demo bill not found. Use the sample generator script: "
                "python trapcheck/assets/demo/generate_demo_bills.py"
            )
            return

        await self._analyze_image(image_bytes, self.analysis_instruction)

    # ------------------------------------------------------------------
    # Manual entry (guaranteed fallback + quickest demo path)
    # ------------------------------------------------------------------
    async def submit_manual(self):
        """Score a manually entered item + price."""
        self.error_message = ""
        item = fpe.sanitize_text(self.manual_item)
        price = fpe.sanitize_price(self.manual_price)
        if not item:
            self.error_message = "Please enter what you paid for (e.g. 'Pad Thai')."
            return
        if price is None:
            self.error_message = "Please enter a valid positive number for the price."
            return
        self.is_loading = True
        try:
            await self._score_and_present(item, price, "Manual", use_ai_reasoning=False)
        finally:
            self.is_loading = False

    # ------------------------------------------------------------------
    # Core scoring: deterministic engine is authoritative
    # ------------------------------------------------------------------
    async def _score_and_present(self, item: str, price: float, mode: str, use_ai_reasoning: bool):
        result = fpe.evaluate(item, price, self.city)
        fpe.log_analysis(item, self.city, price, result, source=mode.lower())

        if not result.get("found"):
            self.error_message = (
                "We don't have that item in our database yet. "
                "Try a more common item name (e.g. 'Pad Thai', 'taxi', 'thali')."
            )
            self.has_result = False
            return

        self.result_item = result["item"]
        self.result_price = float(price)
        self.result_currency = result["currency"] or CITY_CURRENCY.get(self.city, "")
        self.fair_min = result["fair_min"]
        self.fair_max = result["fair_max"]
        self.scam_score = result["scam_score"]
        self.verdict = result["verdict"]
        self.reason = result["reason"]
        self.tip = result["tip"]
        self.risk_level = result["risk_level"]
        self.found_match = True
        self.analysis_mode = mode
        self.error_message = ""
        self.has_result = True

    def set_city(self, city: str):
        if city in CITIES:
            self.city = city

    def update_analysis_instruction(self, value: str):
        self.analysis_instruction = fpe.sanitize_text(value, 300)

    def clear_error(self):
        self.error_message = ""

    def reset_result(self):
        self.has_result = False
        self.error_message = ""
