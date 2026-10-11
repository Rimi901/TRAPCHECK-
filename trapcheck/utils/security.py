"""TrapCheck — Security helpers.

Upload hardening, rate limiting, and image sanitization.
No user photo is ever written to disk: everything stays in memory.
"""
from __future__ import annotations

import io
import logging
import time
import threading
from collections import defaultdict

from PIL import Image, ImageOps

logger = logging.getLogger("trapcheck.security")

MAX_UPLOAD_BYTES = 5 * 1024 * 1024  # 5 MB
MAX_IMAGE_DIMENSION = 2000          # downscale huge images before sending to AI

# Magic bytes for accepted formats (JPEG, PNG, WEBP)
_SIGNATURES = (
    (b"\xff\xd8\xff", "JPEG"),
    (b"\x89PNG\r\n\x1a\n", "PNG"),
    (b"RIFF", "WEBP"),  # RIFF....WEBP
)

ALLOWED_EXTENSIONS = {"jpg", "jpeg", "png", "webp"}


class UploadValidationError(Exception):
    """Raised with a user-friendly message when an upload fails validation."""


def verify_magic_bytes(data: bytes) -> str:
    """Return detected image format from magic bytes, or raise."""
    if data[:4] == b"RIFF" and data[8:12] == b"WEBP":
        return "WEBP"
    for sig, name in _SIGNATURES:
        if sig != b"RIFF" and data.startswith(sig):
            return name
    raise UploadValidationError("That file is not a valid image. Please upload a JPG, PNG or WEBP photo.")


def validate_and_clean_image(filename: str, data: bytes) -> bytes:
    """Full upload hardening pipeline. Returns safe, re-encoded JPEG bytes.

    - extension check
    - size limit
    - magic-byte verification
    - re-encode via Pillow (strips EXIF/GPS/metadata entirely)
    - image is NOT written to disk anywhere
    """
    name = (filename or "").lower()
    ext = name.rsplit(".", 1)[-1] if "." in name else ""
    if ext not in ALLOWED_EXTENSIONS:
        raise UploadValidationError("Unsupported file type. Please upload a JPG, PNG or WEBP photo.")

    if not data:
        raise UploadValidationError("The file appears to be empty.")
    if len(data) > MAX_UPLOAD_BYTES:
        raise UploadValidationError("Image is too large. Maximum size is 5 MB.")

    fmt = verify_magic_bytes(data)

    try:
        img = Image.open(io.BytesIO(data))
        img.verify()  # structural validation
        img = Image.open(io.BytesIO(data))
        img = ImageOps.exif_transpose(img)
        # Strip ALL metadata by re-encoding fresh pixels
        img = img.convert("RGB")
        if max(img.size) > MAX_IMAGE_DIMENSION:
            img.thumbnail((MAX_IMAGE_DIMENSION, MAX_IMAGE_DIMENSION))
        buf = io.BytesIO()
        img.save(buf, format="JPEG", quality=88)
        buf.seek(0)
        return buf.read()
    except UploadValidationError:
        raise
    except Exception:
        logger.exception("Image processing failed")
        raise UploadValidationError("We could not process that image. Try another photo.")


class RateLimiter:
    """Simple in-memory sliding-window rate limiter (per client key)."""

    def __init__(self, max_requests: int = 10, window_seconds: int = 60):
        self.max_requests = max_requests
        self.window = window_seconds
        self._hits: dict[str, list[float]] = defaultdict(list)
        self._lock = threading.Lock()

    def allow(self, key: str) -> bool:
        now = time.monotonic()
        with self._lock:
            hits = self._hits[key]
            self._hits[key] = [t for t in hits if now - t < self.window]
            if len(self._hits[key]) >= self.max_requests:
                return False
            self._hits[key].append(now)
            return True


ANALYZE_LIMITER = RateLimiter(max_requests=10, window_seconds=60)
CHAT_LIMITER = RateLimiter(max_requests=10, window_seconds=60)
REPORT_LIMITER = RateLimiter(max_requests=5, window_seconds=300)


def sanitize_report_text(value: str, max_len: int = 400) -> str:
    """Strip control characters, clamp length for community-submitted text."""
    if not isinstance(value, str):
        return ""
    cleaned = "".join(ch for ch in value if ch.isprintable())
    return cleaned.strip()[:max_len]
