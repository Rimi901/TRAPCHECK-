"""TrapCheck — Scanner page: upload, manual entry, animated result card."""
import reflex as rx

from ..components.footer import footer
from ..components.navbar import navbar
from ..states.scan_state import CITIES, ScanState

ACCENT = "#06B6D4"
NAVY = "#0F172A"


def _city_pill() -> rx.Component:
    return rx.hstack(
        rx.text("City:", font_size="14px", color="#475569", font_weight="500"),
        rx.foreach(CITIES, lambda c: rx.cond(
            ScanState.city == c,
            rx.button(c, bg=NAVY, color="white", border_radius="999px",
                      padding="6px 16px", font_size="13px", font_weight="600",
                      on_click=lambda: ScanState.set_city(c)),
            rx.button(c, bg="white", color="#475569", border_radius="999px",
                      padding="6px 16px", font_size="13px", font_weight="500",
                      border="1px solid rgba(15,23,42,0.1)",
                      _hover={"border_color": ACCENT},
                      on_click=lambda: ScanState.set_city(c)),
        )),
        spacing="2",
        align="center",
    )


def _upload_zone() -> rx.Component:
    """Upload zone with analyze button."""
    return rx.upload(
        # All children live inside one vstack
        rx.vstack(
            # Upload area
            rx.vstack(
                rx.icon("camera", size=40, color=ACCENT),
                rx.text("Drop a photo of the bill, menu or price tag here",
                        font_weight="700", font_size="16px", color=NAVY,
                        font_family="Outfit, sans-serif"),
                rx.text("JPG, PNG or WEBP · up to 5 MB",
                        font_size="13px", color="#64748B"),
                rx.button("Choose a photo",
                          bg=ACCENT, color="white", border_radius="12px",
                          padding="12px 24px", font_weight="600",
                          _hover={"transform": "scale(1.02)"},
                          transition="all 0.15s ease",
                          cursor="pointer",
                          type_="button"),
                spacing="3", align="center",
            ),
            border="2px dashed rgba(6,182,212,0.45)",
            border_radius="16px",
            padding="48px 24px",
            width="100%",
            background="rgba(6,182,212,0.03)",
            # Upload ID must match rx.upload_files(upload_id="...") on the button
            id="bill_upload",
            accept={"image/jpeg": [".jpg", ".jpeg"], "image/png": [".png"],
                    "image/webp": [".webp"]},
            max_files=1,
        ),
        # Selected file name (OUTSIDE upload wrapper)
        rx.foreach(
            rx.selected_files("bill_upload"),
            lambda filename: rx.text(
                "Selected: " + filename,
                font_size="13px", color="#0F766E", font_weight="600",
            ),
        ),
        # Instruction textarea
        rx.vstack(
            rx.text("What should we check?", font_size="14px",
                    font_weight="700", color=NAVY),
            rx.text_area(
                value=ScanState.analysis_instruction,
                on_change=ScanState.update_analysis_instruction,
                placeholder="e.g. Scan this menu's prices and check for tourist overcharges.",
                width="100%", min_height="70px", resize="vertical",
                border="1px solid #CBD5E1", border_radius="12px", padding="12px",
            ),
            spacing="2", align_items="flex-start", width="100%",
        ),
        # Sample bills
        rx.vstack(
            rx.text("Or try a sample:", font_size="14px",
                    font_weight="700", color=NAVY),
            rx.hstack(
                rx.button("Bangkok bill",
                          bg="white", color="#475569", font_size="12px",
                          border_radius="999px", padding="6px 14px",
                          border="1px solid rgba(15,23,42,0.1)",
                          _hover={"border_color": ACCENT, "color": NAVY},
                          on_click=lambda: ScanState.analyze_city_sample("Bangkok bill")),
                rx.button("Bali bill",
                          bg="white", color="#475569", font_size="12px",
                          border_radius="999px", padding="6px 14px",
                          border="1px solid rgba(15,23,42,0.1)",
                          _hover={"border_color": ACCENT, "color": NAVY},
                          on_click=lambda: ScanState.analyze_city_sample("Bali bill")),
                rx.button("Jaipur bill",
                          bg="white", color="#475569", font_size="12px",
                          border_radius="999px", padding="6px 14px",
                          border="1px solid rgba(15,23,42,0.1)",
                          _hover={"border_color": ACCENT, "color": NAVY},
                          on_click=lambda: ScanState.analyze_city_sample("Jaipur bill")),
                spacing="2", wrap="wrap", align="center",
            ),
            spacing="2", align_items="flex-start", width="100%",
        ),
        # ANALYZE BUTTON — uses rx.upload_files to pass the selected files
        rx.button(
            "Analyze Photo",
            bg=NAVY, color="white", border_radius="12px",
            padding="14px 28px", font_weight="700", width="100%",
            font_size="16px",
            on_click=ScanState.handle_upload(rx.upload_files(upload_id="bill_upload")),
            is_disabled=ScanState.is_loading,
            _hover={"transform": "scale(1.01)"},
            transition="all 0.15s ease",
            cursor="pointer",
            type_="button",
        ),
        spacing="4",
        width="100%",
    )


def _manual_entry() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.divider(),
            rx.text("or enter manually", font_size="12px", color="#94A3B8",
                    white_space="nowrap"),
            rx.divider(),
            spacing="3", width="100%",
        ),
        rx.hstack(
            rx.input(
                placeholder="e.g. Pad Thai, taxi ride, thali",
                value=ScanState.manual_item,
                on_change=ScanState.set_manual_item,
                border_radius="12px", width="100%",
                border="1px solid rgba(15,23,42,0.12)",
                _focus={"border_color": ACCENT, "box_shadow": "none"},
            ),
            rx.input(
                placeholder="Price paid",
                value=ScanState.manual_price,
                on_change=ScanState.set_manual_price,
                border_radius="12px", width="140px",
                border="1px solid rgba(15,23,42,0.12)",
                type_="number",
                _focus={"border_color": ACCENT, "box_shadow": "none"},
            ),
            rx.button(
                "Check",
                bg=ACCENT, color="white", border_radius="12px",
                padding="12px 22px", font_weight="600",
                on_click=ScanState.submit_manual,
                is_disabled=ScanState.is_loading,
                _hover={"transform": "scale(1.02)"},
                transition="all 0.15s ease",
            ),
            spacing="3", width="100%", align="center",
        ),
        spacing="3", width="100%",
    )


def _score_ring() -> rx.Component:
    """SVG ring animated by stroke-dasharray."""
    return rx.box(
        rx.el.svg(
            rx.el.svg.circle(cx="60", cy="60", r="50", fill="none",
                      stroke="#E2E8F0", stroke_width="10"),
            rx.el.svg.circle(
                cx="60", cy="60", r="50", fill="none",
                stroke=ScanState.verdict_color, stroke_width="10",
                stroke_linecap="round",
                stroke_dasharray=f"{ScanState.scam_score * 3.14} 314",
                transform="rotate(-90 60 60)",
                style={"transition": "stroke-dasharray 1s cubic-bezier(0.4, 0, 0.2, 1)"},
            ),
            width="120px", height="120px", viewBox="0 0 120 120",
        ),
        rx.vstack(
            rx.heading(ScanState.scam_score, font_size="32px", font_weight="800",
                       font_family="Outfit, sans-serif", color=ScanState.verdict_color),
            rx.text("/ 100", font_size="11px", color="#94A3B8"),
            spacing="0", align="center",
        ),
        position="relative",
        width="120px", height="120px",
        display="flex", align_items="center", justify_content="center",
    )


def _price_bar() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.text("Your price", font_size="12px", color="#475569", font_weight="600"),
            rx.text(ScanState.your_price_label, font_size="12px", color=NAVY,
                    font_weight="700"),
            rx.spacer(),
            rx.text("Fair range", font_size="12px", color="#475569", font_weight="600"),
            rx.text(ScanState.fair_range_label, font_size="12px", color="#10B981",
                    font_weight="700"),
            spacing="2", width="100%",
        ),
        rx.box(
            # fair range shaded region
            rx.box(
                position="absolute",
                left=f"{ScanState.fair_range_start_pct}%",
                width=f"{ScanState.fair_range_end_pct - ScanState.fair_range_start_pct}%",
                top="0", bottom="0",
                bg="rgba(16,185,129,0.25)",
                border_radius="6px",
            ),
            # user price marker
            rx.box(
                position="absolute",
                left=f"{ScanState.price_marker_pct}%",
                top="-4px", bottom="-4px",
                width="4px",
                bg=ScanState.verdict_color,
                border_radius="4px",
                box_shadow="0 0 0 3px rgba(255,255,255,0.9), 0 2px 8px rgba(15,23,42,0.25)",
            ),
            position="relative",
            width="100%", height="14px",
            bg="#E2E8F0", border_radius="8px",
        ),
        spacing="2", width="100%",
    )


def _result_card() -> rx.Component:
    return rx.cond(
        ScanState.has_result,
        rx.vstack(
            rx.hstack(
                rx.badge(
                    ScanState.verdict,
                    bg=ScanState.verdict_color, color="white",
                    radius="full", padding="8px 18px",
                    font_weight="800", font_size="15px",
                    letter_spacing="0.5px",
                ),
                rx.badge(
                    rx.cond(ScanState.analysis_mode == "AI", "AI analysis", "Offline analysis"),
                    bg="#F1F5F9", color="#64748B", radius="full",
                    padding="8px 12px", font_weight="600", font_size="12px",
                ),
                rx.spacer(),
                _score_ring(),
                spacing="3", align="center", width="100%",
            ),
            rx.vstack(
                rx.text(ScanState.result_item, font_weight="800", font_size="20px",
                        color=NAVY, font_family="Outfit, sans-serif"),
                rx.text(
                    ScanState.city + " · " + ScanState.risk_level + " risk",
                    font_size="13px", color="#64748B",
                ),
                align_items="flex-start", spacing="1",
            ),
            _price_bar(),
            rx.text("Scam score compares this amount with the local fair range; the verdict is a readable band, not a simple yes/no guess.",
                    font_size="12px", color="#64748B", line_height="1.5"),
            rx.vstack(
                rx.text("Why", font_weight="700", font_size="13px", color=NAVY,
                        text_transform="uppercase", letter_spacing="0.5px"),
                rx.text(ScanState.reason, font_size="14px", color="#475569",
                        line_height="1.6"),
                align_items="flex-start", spacing="1", width="100%",
            ),
            rx.vstack(
                rx.text("Local tip", font_weight="700", font_size="13px", color=ACCENT,
                        text_transform="uppercase", letter_spacing="0.5px"),
                rx.text(ScanState.tip, font_size="14px", color="#0F172A",
                        line_height="1.6",
                        bg="rgba(6,182,212,0.07)", padding="12px 14px",
                        border_radius="12px", width="100%"),
                align_items="flex-start", spacing="1", width="100%",
            ),
            spacing="5",
            bg="white",
            padding="28px",
            border_radius="16px",
            border="1px solid rgba(15,23,42,0.06)",
            box_shadow="0 14px 40px rgba(15,23,42,0.10)",
            width="100%",
            animation="popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        ),
        rx.vstack(
            rx.icon("scan-line", size=44, color="#CBD5E1"),
            rx.text("Your result will appear here",
                    font_weight="600", color="#94A3B8", font_size="15px"),
            rx.text("Scan a photo or enter details manually to get a scam score "
                    "in seconds.", font_size="13px", color="#94A3B8",
                    text_align="center", max_width="280px"),
            spacing="3", align="center",
            bg="white", padding="48px 24px", border_radius="16px",
            border="1px dashed rgba(15,23,42,0.1)", width="100%",
        ),
    )


def _loading_skeleton() -> rx.Component:
    return rx.cond(
        ScanState.is_loading,
        rx.vstack(
            rx.hstack(
                rx.spinner(color=ACCENT, size="2"),
                rx.text("Reading the photo and checking local prices…",
                        font_weight="600", color=NAVY, font_size="15px"),
                spacing="3", align="center",
            ),
            rx.el.div(class_name="skeleton-line"),
            rx.el.div(class_name="skeleton-line short"),
            rx.el.div(class_name="skeleton-line"),
            spacing="3", align_items="flex-start",
            bg="white", padding="28px", border_radius="16px",
            border="1px solid rgba(15,23,42,0.06)", width="100%",
        ),
        rx.fragment(),
    )


def _error_banner() -> rx.Component:
    return rx.cond(
        ScanState.error_message != "",
        rx.hstack(
            rx.icon("circle-alert", size=18, color="#EF4355"),
            rx.text(ScanState.error_message, font_size="14px", color="#B91C1C"),
            rx.spacer(),
            rx.button(rx.icon("x", size=14), bg="transparent", color="#94A3B8",
                      on_click=ScanState.clear_error, cursor="pointer"),
            bg="rgba(239,67,85,0.07)", border="1px solid rgba(239,67,85,0.25)",
            padding="12px 16px", border_radius="12px", width="100%", spacing="3",
        ),
        rx.fragment(),
    )


def scanner_page() -> rx.Component:
    return rx.box(
        navbar(),
        rx.container(
            rx.vstack(
                rx.hstack(
                    rx.vstack(
                        rx.heading("Scam Scanner", font_family="Outfit, sans-serif",
                                   font_size="32px", font_weight="800", color=NAVY,
                                   letter_spacing="-0.5px"),
                        rx.text("Upload a bill or price tag — get the fair local price "
                                "instantly.", font_size="15px", color="#475569"),
                        spacing="1", align_items="flex-start",
                    ),
                    _city_pill(),
                    justify="between", align="center", width="100%", wrap="wrap",
                ),
                _error_banner(),
                rx.grid(
                    rx.vstack(_upload_zone(), _manual_entry(), spacing="5"),
                    rx.vstack(_loading_skeleton(), _result_card(), spacing="4"),
                    grid_template_columns="1fr 1fr",
                    gap="24px", width="100%",
                    class_name="scanner-grid",
                ),
                rx.text(
                    "Privacy note: your photo is processed entirely in memory on our "
                    "server, is never written to disk, and is deleted the moment your "
                    "result appears.",
                    font_size="12px", color="#94A3B8", text_align="center",
                    padding="8px 0 32px",
                ),
                spacing="5",
                padding_y="36px",
                width="100%",
            ),
            max_width="1100px",
        ),
        footer(),
        width="100%", min_height="100vh",
    )
