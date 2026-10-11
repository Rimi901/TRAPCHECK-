"""TrapCheck — trust footer."""
import reflex as rx

NAVY = "#0F172A"
ACCENT = "#06B6D4"
MUTED = "#64748B"


def footer() -> rx.Component:
    return rx.el.footer(
        rx.container(
            rx.vstack(
                rx.hstack(
                    rx.text("TrapCheck", font_weight="800", font_family="Outfit, sans-serif",
                            font_size="18px", color=NAVY),
                    rx.badge("Beta — Bangkok · Bali · Jaipur",
                             bg="#F1F5F9", color=MUTED, radius="full"),
                    spacing="3",
                    align="center",
                ),
                rx.text(
                    "Privacy: scanner photos are analyzed in memory and never stored. "
                    "Community photos are sanitized and shared publicly only when you submit a report. "
                    "No accounts or tracking pixels.",
                    font_size="13px", color=MUTED, max_width="560px",
                ),
                rx.text(
                    "Fair price ranges are aggregated from local market research and community "
                    "reports and are estimates, not official rates. TrapCheck is an independent "
                    "project and is not affiliated with any government body or tourism authority.",
                    font_size="12px", color=MUTED, max_width="640px",
                ),
                rx.hstack(
                    rx.text("Contact: hello@trapcheck.app", font_size="13px", color=MUTED),
                    rx.link("Terms & Privacy", href="/about", font_size="13px", color=ACCENT,
                            text_decoration="none"),
                    spacing="5",
                ),
                spacing="3",
                align_items="flex-start",
            ),
            padding_y="40px",
        ),
        border_top="1px solid rgba(15,23,42,0.06)",
        bg="white",
    )
