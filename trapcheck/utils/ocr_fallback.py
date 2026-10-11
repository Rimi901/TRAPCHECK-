"""TrapCheck — Offline OCR fallback (pytesseract + regex).

Used when Gemini is unavailable (no key, quota, or timeout). Keeps the demo
alive without any network dependency.
"""
from __future__ import annotations

import io
import logging
import os
import re
import shutil
from pathlib import Path

logger = logging.getLogger("trapcheck.ocr")


def ocr_extract(image_bytes: bytes, city: str = "", instruction: str = "") -> dict | None:
    """Extract the requested or highest-risk catalog item using Tesseract.

    Returns {"item": str, "price": float} or None. Never raises.
    """
    if not image_bytes:
        return None
    try:
        import pytesseract
        from PIL import Image, ImageEnhance, ImageFilter, ImageOps

        # Windows installers don't always add Tesseract to the server
        # process's inherited PATH (especially when Reflex is already open).
        if not shutil.which("tesseract"):
            candidates = [
                Path(os.environ.get("ProgramFiles", r"C:\Program Files"))
                / "Tesseract-OCR" / "tesseract.exe",
                Path(os.environ.get("ProgramFiles(x86)", r"C:\Program Files (x86)"))
                / "Tesseract-OCR" / "tesseract.exe",
            ]
            installed = next((path for path in candidates if path.is_file()), None)
            if installed:
                pytesseract.pytesseract.tesseract_cmd = str(installed)

        img = ImageOps.exif_transpose(Image.open(io.BytesIO(image_bytes)))
        if max(img.size) < 2400:
            img = img.copy()
            img.thumbnail((2400, 2400))
            # `thumbnail` never enlarges; menu photos benefit from a modest
            # upscale when the original is small.
            if max(img.size) < 1600:
                img = img.resize((img.width * 2, img.height * 2), Image.Resampling.LANCZOS)
        gray = ImageOps.autocontrast(img.convert("L"))
        enhanced = ImageEnhance.Contrast(gray).enhance(1.35).filter(
            ImageFilter.UnsharpMask(radius=1.5, percent=150, threshold=3)
        )
        # Menus are laid out as columns more often than receipts. PSM 6 can
        # merge a label and price incorrectly, so retry with sparse-text and
        # column-friendly layouts and consider every priced row.
        texts = []
        for variant in (img, enhanced):
            for psm in (6, 11, 4):
                try:
                    text = pytesseract.image_to_string(variant, config=f"--psm {psm}")
                    if text and text.strip():
                        texts.append(text)
                except Exception:
                    logger.debug("Tesseract PSM %s failed", psm, exc_info=True)
    except Exception:
        logger.info("OCR unavailable (tesseract not installed?)")
        return None

    if not texts:
        return None

    # Keep rows from each segmentation attempt; repeated rows are harmless.
    lines = list(dict.fromkeys(
        line.strip() for text in texts for line in text.splitlines() if line.strip()
    ))
    amount_pattern = re.compile(
        r"(?<!\w)(\d[\d,]*(?:\.\d{1,2})?)(?:\s*(?:THB|IDR|INR|Rs\.?|฿|₹|Rp|\$))?\s*$",
        re.IGNORECASE,
    )
    non_item = re.compile(r"\b(total|subtotal|tax|service|vat|change|cash|tip|thank)\b", re.I)
    item_rows = []
    all_prices = []
    for line in lines:
        match = amount_pattern.search(line)
        if not match:
            continue
        try:
            value = float(match.group(1).replace(",", ""))
        except ValueError:
            continue
        if not 1 <= value <= 10_000_000:
            continue
        all_prices.append(value)
        label = line[:match.start()].strip(" :-\t")
        if len(re.sub(r"[^A-Za-z]", "", label)) >= 3 and not non_item.search(label):
            item_rows.append((label, value))

    # Prefer a row that actually matches this city's known catalog. This
    # prevents a menu's most expensive unrelated item or a receipt total from
    # masking a recognizable item such as Pad Thai.
    try:
        from . import fair_price_engine as fpe
        from .fair_price_engine import find_fair_price

        catalog_rows = []
        for label, value in item_rows:
            entry = find_fair_price(label, city)
            if entry:
                result = fpe.evaluate(entry["item"], value, city)
                catalog_rows.append((label, value, entry, result.get("scam_score", 0)))
        if catalog_rows:
            # If the traveler names a particular catalog item, select that
            # row. Otherwise surface the recognized menu item with the
            # highest locally-computed risk score, not merely the biggest bill.
            intent = re.sub(
                r"\b(scan|analy[sz]e|read|photo|image|menu|bill|price|prices|check|flag|look|"
                r"unusually|high|overcharge|overcharged|scam|safe|fair|item|items|this|that|these|"
                r"those|the|a|an|and|or|for|of|in|on|at|is|are|seem|seems|please|any|all)\b",
                " ", instruction, flags=re.I,
            )
            intent = re.sub(r"[^\w\s'-]|\b\d+(?:[.,]\d+)?\b", " ", intent)
            requested = find_fair_price(re.sub(r"\s+", " ", intent).strip(), city) if len(intent.strip()) >= 3 else None
            if requested:
                requested_rows = [row for row in catalog_rows if row[2]["id"] == requested["id"]]
            else:
                requested_rows = []
            chosen = max(requested_rows or catalog_rows, key=lambda row: (row[3], row[1]))
            label, price, entry, _score = chosen
            return {"item": entry["item"], "price": price}
    except Exception:
        logger.exception("Could not match OCR rows to the local catalog")

    if item_rows:
        # If no known catalog item was found, retain the most useful priced row
        # so the UI can explain that the item needs a manual/catalog match.
        item, price = max(item_rows, key=lambda row: row[1])
    elif all_prices:
        price = max(all_prices)
        item = next((line[:200] for line in lines if re.search(r"[A-Za-z]{3,}", line)), "Menu item")
    else:
        return None

    return {"item": item[:200], "price": price}
