"""State and validation for the public community scam wall."""
from __future__ import annotations

import logging

import reflex as rx

from ..utils import community
from ..utils.security import REPORT_LIMITER, UploadValidationError, validate_and_clean_image

logger = logging.getLogger("trapcheck.community")
CITIES = ["Bangkok", "Bali", "Jaipur"]
CATEGORIES = ["transport", "food", "shopping", "ticket", "activity", "other"]
CITY_CENTERS = {
    "Bangkok": (13.7450, 100.5050),
    "Bali": (-8.5069, 115.2625),
    "Jaipur": (26.9124, 75.7873),
}


class CommunityState(rx.State):
    reports: list[dict] = []
    city: str = "Bangkok"
    category: str = "transport"
    description: str = ""
    amount: str = ""
    latitude: str = "13.7450"
    longitude: str = "100.5050"
    share_consent: bool = False
    is_submitting: bool = False
    error_message: str = ""
    success_message: str = ""

    def load_reports(self):
        self.reports = community.load_reports(50)

    def set_city(self, value: str):
        if value in CITIES:
            self.city = value
            lat, lng = CITY_CENTERS[value]
            self.latitude, self.longitude = str(lat), str(lng)

    def set_category(self, value: str):
        if value in CATEGORIES:
            self.category = value

    def set_consent(self, value: bool):
        self.share_consent = bool(value)

    async def submit_report(self, files: list[rx.UploadFile]):
        self.error_message = ""
        self.success_message = ""
        if not self.share_consent:
            self.error_message = "Please confirm that this report and photo can be shared publicly."
            return
        if not files:
            self.error_message = "Add a photo of the quote, receipt, or place to submit a report."
            return
        if not REPORT_LIMITER.allow("community-report"):
            self.error_message = "Too many reports were submitted recently. Please try again later."
            return
        try:
            raw = await files[0].read()
            clean_photo = validate_and_clean_image(
                getattr(files[0], "filename", None) or "report.jpg", raw
            )
            community.add_report(
                self.city, self.category, self.description, self.amount,
                self.latitude, self.longitude, clean_photo,
            )
        except UploadValidationError as exc:
            self.error_message = str(exc)
            return
        except ValueError as exc:
            self.error_message = str(exc)
            return
        except Exception:
            logger.exception("Community report save failed")
            self.error_message = "We could not submit this report. Please check the form and try again."
            return
        self.description = ""
        self.amount = ""
        self.share_consent = False
        self.success_message = "Report posted. Other travelers can now see this warning."
        self.reports = community.load_reports(50)
