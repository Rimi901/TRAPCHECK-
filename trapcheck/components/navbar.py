"""TrapCheck — glass navbar."""
import reflex as rx

ACCENT = "#06B6D4"
NAVY = "#0F172A"


def navbar() -> rx.Component:
    return rx.el.nav(
        rx.hstack(
            rx.link(
                rx.hstack(
                    rx.box(
                        rx.icon("shield-alert", size=18, color="white"),
                        bg=ACCENT,
                        border_radius="10px",
                        padding="8px",
                    ),
                    rx.text(
                        "TrapCheck",
                        font_family="Outfit, sans-serif",
                        font_weight="800",
                        font_size="20px",
                        letter_spacing="-0.5px",
                        color=NAVY,
                    ),
                    spacing="2",
                    align="center",
                ),
                href="/",
                text_decoration="none",
            ),
            rx.hstack(
                rx.link("Scanner", href="/scanner", color="#475569", font_weight="500",
                        _hover={"color": NAVY}, text_decoration="none"),
                rx.link("Map", href="/map", color="#475569", font_weight="500",
                        _hover={"color": NAVY}, text_decoration="none"),
                rx.link("Guardian", href="/guardian", color="#475569", font_weight="500",
                        _hover={"color": NAVY}, text_decoration="none"),
                rx.link("Community", href="/community", color="#475569", font_weight="500",
                        _hover={"color": NAVY}, text_decoration="none"),
                rx.link("How It Works", href="/about", color="#475569", font_weight="500",
                        _hover={"color": NAVY}, text_decoration="none"),
                rx.link(
                    rx.button(
                        "Scan Now",
                        bg=ACCENT,
                        color="white",
                        border_radius="12px",
                        padding="8px 18px",
                        font_weight="600",
                        _hover={"transform": "scale(1.03)", "box_shadow": "0 6px 18px rgba(6,182,212,0.35)"},
                        transition="all 0.15s ease",
                    ),
                    href="/scanner",
                    text_decoration="none",
                ),
                spacing="6",
                align="center",
            ),
            justify="between",
            align="center",
            width="100%",
            max_width="1200px",
            margin="0 auto",
            padding="14px 24px",
        ),
        position="sticky",
        top="0",
        z_index="50",
        bg="rgba(255,255,255,0.8)",
        backdrop_filter="blur(12px)",
        border_bottom="1px solid rgba(15,23,42,0.06)",
    )
