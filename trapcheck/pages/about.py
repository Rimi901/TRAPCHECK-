"""TrapCheck — Methodology / About page (trust & transparency)."""
import reflex as rx

from ..components.footer import footer
from ..components.navbar import navbar

NAVY = "#0F172A"
ACCENT = "#06B6D4"


def _section(title: str, body: str) -> rx.Component:
    return rx.vstack(
        rx.heading(title, font_size="20px", font_weight="700", color=NAVY,
                   font_family="Outfit, sans-serif"),
        rx.text(body, font_size="14px", color="#475569", line_height="1.7"),
        spacing="2", align_items="flex-start",
    )


def about_page() -> rx.Component:
    return rx.box(
        navbar(),
        rx.container(
            rx.vstack(
                rx.heading("How we calculate prices",
                           font_family="Outfit, sans-serif", font_size="34px",
                           font_weight="800", color=NAVY, letter_spacing="-1px"),
                rx.text(
                    "Transparency builds trust. Here is exactly how TrapCheck decides "
                    "whether a price is fair.",
                    font_size="15px", color="#475569", max_width="640px",
                ),
                rx.vstack(
                    _section(
                        "Where the data comes from",
                        "Fair price ranges are aggregated from local market research: "
                        "typical prices at street stalls, licensed taxis, official "
                        "attraction counters and neighborhood stores in Bangkok, Bali and "
                        "Jaipur. Ranges are estimates meant for orientation, not official "
                        "rates. Community reports help us flag hotspots, and every range "
                        "is reviewed before entering the database.",
                    ),
                    _section(
                        "How the Scam Score works",
                        "The score is computed by a deterministic formula, not by an AI's "
                        "opinion. Paying at or below the local minimum scores 0–15. "
                        "Paying within the fair range scores 15–35. Paying above the "
                        "maximum scales from 35 upward based on how much you were "
                        "overcharged. Scores below 35 are SAFE, 35–64 are OVERCHARGED, "
                        "and 65+ is a SCAM. The AI only helps read your photo and phrase "
                        "the explanation — it can never change your score.",
                    ),
                    _section(
                        "What happens to your photo",
                        "Nothing. Your photo is processed entirely in server memory, is "
                        "never written to disk, and is discarded the moment your result "
                        "is shown. We strip all metadata (including GPS location) before "
                        "analysis. We do not require an account, we do not use tracking "
                        "pixels, and we do not sell data.",
                    ),
                    _section(
                        "When AI is unavailable",
                        "TrapCheck is designed to fail safely. If the AI service is "
                        "unreachable, an offline OCR engine reads your image locally. If "
                        "that fails, a manual entry form gives you the same scoring "
                        "instantly. The result card always tells you which mode was used.",
                    ),
                    _section(
                        "Honest limitations",
                        "Prices vary by neighborhood, season and bargaining. Treat our "
                        "ranges as a strong starting point for negotiation, not a "
                        "guarantee. TrapCheck is an independent project and is not "
                        "affiliated with any government body or tourism authority.",
                    ),
                    spacing="5",
                    bg="white", padding="32px", border_radius="16px",
                    border="1px solid rgba(15,23,42,0.06)",
                    box_shadow="0 8px 24px rgba(15,23,42,0.06)",
                    width="100%",
                ),
                spacing="5", padding_y="40px", width="100%", max_width="760px",
            ),
        ),
        footer(),
        width="100%", min_height="100vh",
    )
