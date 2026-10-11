"""TrapCheck — Landing page."""
import reflex as rx

from ..components.footer import footer
from ..components.navbar import navbar
from ..states.scan_state import ScanState
from ..utils.fair_price_engine import get_stats

ACCENT = "#06B6D4"
NAVY = "#0F172A"


def _stat_card(label: str, value: str, color: str) -> rx.Component:
    return rx.vstack(
        rx.text(value, font_family="Outfit, sans-serif", font_weight="800",
                font_size="28px", color=color),
        rx.text(label, font_size="13px", color="#64748B"),
        spacing="1",
        align="center",
        bg="white",
        padding="20px 28px",
        border_radius="16px",
        box_shadow="0 8px 24px rgba(15,23,42,0.08)",
        border="1px solid rgba(15,23,42,0.05)",
    )


def _step(number: str, title: str, body: str) -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.box(number, bg=ACCENT, color="white", border_radius="10px",
                   width="36px", height="36px", display="flex",
                   align_items="center", justify_content="center",
                   font_weight="700"),
            rx.text(title, font_weight="700", font_size="17px", color=NAVY,
                    font_family="Outfit, sans-serif"),
            spacing="3",
            align="center",
        ),
        rx.text(body, font_size="14px", color="#475569", line_height="1.6"),
        spacing="3",
        align_items="flex-start",
        bg="white",
        padding="24px",
        border_radius="16px",
        border="1px solid rgba(15,23,42,0.06)",
        box_shadow="0 8px 24px rgba(15,23,42,0.06)",
        _hover={"transform": "translateY(-3px)", "box_shadow": "0 14px 34px rgba(15,23,42,0.12)"},
        transition="all 0.2s ease",
    )


def _trust_badge(icon: str, label: str) -> rx.Component:
    return rx.hstack(
        rx.icon(icon, size=15, color=ACCENT),
        rx.text(label, font_size="13px", color="#475569", font_weight="500"),
        spacing="2",
        align="center",
        bg="rgba(255,255,255,0.85)",
        border="1px solid rgba(15,23,42,0.06)",
        border_radius="999px",
        padding="7px 14px",
    )


def _seeded_stats() -> dict:
    try:
        return get_stats()
    except Exception:
        return {"total_scans": 0, "scams_detected": 0, "avg_overcharge_pct": 0}


def index_page() -> rx.Component:
    stats = _seeded_stats()
    return rx.box(
        navbar(),
        # ---------------- Hero ----------------
        rx.box(
            rx.vstack(
                rx.badge(
                    "Free · No signup · Works without an account",
                    bg="rgba(6,182,212,0.1)", color="#0891B2",
                    radius="full", padding="6px 14px", font_weight="600",
                ),
                rx.heading(
                    "Know the local price ",
                    rx.el.span("before you pay.", color=ACCENT),
                    font_family="Outfit, sans-serif",
                    font_size="clamp(34px, 6vw, 58px)",
                    font_weight="800",
                    letter_spacing="-1.5px",
                    line_height="1.1",
                    text_align="center",
                    max_width="760px",
                ),
                rx.text(
                    "Tourists are overcharged 200–500% on taxis, food, souvenirs and tickets. "
                    "Snap a photo of any bill or price tag — TrapCheck tells you instantly "
                    "if it's fair, and what locals actually pay.",
                    font_size="17px", color="#475569", text_align="center",
                    max_width="620px", line_height="1.6",
                ),
                rx.hstack(
                    rx.link(
                        rx.button(
                            "Scan a bill now",
                            bg=ACCENT, color="white", border_radius="12px",
                            padding="14px 28px", font_size="16px", font_weight="700",
                            box_shadow="0 10px 26px rgba(6,182,212,0.4)",
                            _hover={"transform": "scale(1.03)"},
                            transition="all 0.15s ease",
                        ),
                        href="/scanner",
                        text_decoration="none",
                    ),
                    rx.link(
                        rx.button(
                            "See scam hotspots",
                            bg="white", color=NAVY, border_radius="12px",
                            padding="14px 28px", font_size="16px", font_weight="600",
                            border="1px solid rgba(15,23,42,0.12)",
                            _hover={"transform": "scale(1.03)"},
                            transition="all 0.15s ease",
                        ),
                        href="/map",
                        text_decoration="none",
                    ),
                    spacing="4",
                    wrap="wrap",
                    justify="center",
                ),
                rx.hstack(
                    _trust_badge("shield-check", "No photo storage"),
                    _trust_badge("eye-off", "No tracking"),
                    _trust_badge("lock", "Encrypted analysis"),
                    spacing="3", wrap="wrap", justify="center",
                ),
                spacing="5",
                align="center",
            ),
            padding="72px 24px 56px",
            background="linear-gradient(180deg, rgba(6,182,212,0.09) 0%, rgba(248,250,252,0) 70%)",
            width="100%",
        ),
        # ---------------- Stats strip ----------------
        rx.hstack(
            _stat_card("Checks performed", f"{stats['total_scans']:,}", NAVY),
            _stat_card("Scams caught", f"{stats['scams_detected']:,}", "#EF4355"),
            _stat_card("Avg. tourist overcharge", f"{stats['avg_overcharge_pct']}%", "#F59E0B"),
            _stat_card("Cities covered", "3", ACCENT),
            spacing="4", wrap="wrap", justify="center",
            padding="0 24px 8px",
        ),
        # ---------------- How it works ----------------
        rx.vstack(
            rx.heading("How it works", font_family="Outfit, sans-serif",
                       font_size="30px", font_weight="800", color=NAVY,
                       letter_spacing="-0.5px"),
            rx.hstack(
                _step("1", "Snap a photo",
                      "Take a picture of any bill, menu, taxi meter or price tag. "
                      "Nothing is saved — the photo is analyzed in memory and discarded."),
                _step("2", "AI reads the price",
                      "Our AI extracts the item and amount. No internet AI? A built-in "
                      "offline engine takes over automatically."),
                _step("3", "See the truth",
                      "Get a Scam Score from 0–100, the fair local price range, and one "
                      "actionable tip from a local's point of view."),
                spacing="4", wrap="wrap", justify="center",
            ),
            spacing="5", align="center", padding="56px 24px",
        ),
        # ---------------- Cities ----------------
        rx.hstack(
            rx.text("Currently covering:", color="#64748B", font_size="14px"),
            rx.badge("Bangkok", bg="white", color=NAVY, radius="full", padding="6px 14px",
                     border="1px solid rgba(15,23,42,0.08)"),
            rx.badge("Bali", bg="white", color=NAVY, radius="full", padding="6px 14px",
                     border="1px solid rgba(15,23,42,0.08)"),
            rx.badge("Jaipur", bg="white", color=NAVY, radius="full", padding="6px 14px",
                     border="1px solid rgba(15,23,42,0.08)"),
            spacing="3", justify="center", padding="0 0 56px",
        ),
        footer(),
        width="100%",
        min_height="100vh",
    )
