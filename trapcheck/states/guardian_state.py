"""Text and optional browser speech interface for the local travel guardian."""
from __future__ import annotations

import logging
import asyncio
import re

import reflex as rx

from ..utils import fair_price_engine as fpe
from ..utils import gemini_analyzer

logger = logging.getLogger("trapcheck.guardian")
CITIES = ["Bangkok", "Bali", "Jaipur"]
_PRICE_RE = re.compile(r"(?<!\w)(\d[\d,]*(?:\.\d{1,2})?)\s*(?:thb|idr|inr|฿|rp\.?|₹)?", re.I)


def _question_context(question: str, city: str) -> tuple[float | None, dict | None]:
    match = _PRICE_RE.search(question)
    price = None
    if match:
        price = fpe.sanitize_price(match.group(1).replace(",", ""))
    item_match = re.search(r"\b(?:for|on|paid for|quoted for)\s+(.+)$", question, re.I)
    candidate = item_match.group(1) if item_match else question
    candidate = _PRICE_RE.sub(" ", candidate)
    candidate = re.sub(r"\b(is|was|are|were|i|paid|quoted|charged|for|on|a|an|the|scam|rip.?off|fair|price|in|thb|idr|inr)\b", " ", candidate, flags=re.I)
    candidate = re.sub(r"[^\w\s()'-]", " ", candidate)
    candidate = re.sub(r"\s+", " ", candidate).strip()
    result = fpe.evaluate(candidate, price or 1, city) if candidate else {"found": False}
    return price, result if result.get("found") else None


class GuardianState(rx.State):
    city: str = "Bangkok"
    question: str = ""
    answer: str = ""
    context_label: str = ""
    is_loading: bool = False
    mode: str = "Offline local guide"
    error_message: str = ""

    def set_city(self, city: str):
        if city in CITIES:
            self.city = city

    def set_question(self, question: str):
        self.question = fpe.sanitize_text(question, 300)

    async def ask(self):
        question = fpe.sanitize_text(self.question, 300)
        if len(question) < 4:
            self.error_message = "Ask a short question about an item, price, or local situation."
            return
        self.error_message = ""
        self.is_loading = True
        price, match = _question_context(question, self.city)
        if match:
            currency = match.get("currency", "")
            fair_min, fair_max = match["fair_min"], match["fair_max"]
            score = match["scam_score"]
            context = (
                f"Local dataset match: {match['item']}; fair range {fair_min:,.0f}-"
                f"{fair_max:,.0f} {currency}; deterministic scam score {score}/100; "
                f"verdict {match['verdict']}; local tip: {match['tip']}"
            )
            self.context_label = f"{match['item']} · {currency} {fair_min:,.0f}–{fair_max:,.0f}"
        else:
            context = "No matching item was found in TrapCheck's seeded local price dataset. Do not invent a price."
            self.context_label = "Using general local safety guidance; no price match found"

        self.mode = "Offline local guide"
        if match and price is not None:
            verdict = match["verdict"].lower()
            local_answer = (
                f"{price:,.0f} {match['currency']} for {match['item']} in {self.city} "
                f"looks {verdict}. Our local range is {match['fair_min']:,.0f}–"
                f"{match['fair_max']:,.0f} {match['currency']} (score {match['scam_score']}/100). "
                f"{match['tip']}"
            )
        elif match:
            local_answer = (
                f"For {match['item']} in {self.city}, our local range is "
                f"{match['fair_min']:,.0f}–{match['fair_max']:,.0f} {match['currency']}. "
                "Share the amount you were quoted and I can compare it."
            )
        else:
            local_answer = (
                f"I couldn't match that item to our {self.city} price list. Ask for the full "
                "price before agreeing, check whether fees are included, and compare one nearby vendor."
            )

        # Publish a useful offline answer first. A missing key, quota, or slow
        # network must never leave the chat blank or make its button appear dead.
        self.answer = fpe.sanitize_text(local_answer, 600)
        yield
        try:
            ai_answer = await asyncio.wait_for(
                asyncio.to_thread(gemini_analyzer.guardian_answer, self.city, question, context),
                timeout=12,
            )
            if ai_answer:
                self.answer = fpe.sanitize_text(ai_answer, 600)
                self.mode = "Gemini + local price context" if match else "Gemini local guide"
        except Exception:
            logger.info("Guardian AI unavailable; keeping offline answer", exc_info=True)
        finally:
            self.is_loading = False
            self.question = ""
