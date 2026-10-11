"""Public community scam wall and ten-second traveler report form."""
import reflex as rx

from ..components.footer import footer
from ..components.navbar import navbar
from ..states.community_state import CATEGORIES, CITIES, CommunityState

NAVY = "#0F172A"
ACCENT = "#06B6D4"
LOCATION_SCRIPT = """(function(){
  const status=document.getElementById('report_location_status');
  if(!navigator.geolocation){if(status)status.textContent='Location is not available in this browser.';return;}
  if(status)status.textContent='Requesting location permission…';
  navigator.geolocation.getCurrentPosition(function(pos){
    const set=(id,value)=>{const el=document.getElementById(id);if(!el)return;const setter=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;setter.call(el,String(value));el.dispatchEvent(new Event('input',{bubbles:true}));};
    set('report_latitude',pos.coords.latitude.toFixed(5));set('report_longitude',pos.coords.longitude.toFixed(5));
    if(status)status.textContent='Approximate location added. You can adjust it before posting.';
  },function(){if(status)status.textContent='Could not access location. Enter coordinates manually.';},{timeout:8000,maximumAge:60000});
})();"""


def _report_card(report: rx.Var) -> rx.Component:
    return rx.hstack(
        rx.cond(
            report["photo_data"] != "",
            rx.image(src=report["photo_data"], alt="Traveler submitted scam report photo",
                     width="112px", height="112px", object_fit="cover", border_radius="12px"),
            rx.box(rx.icon("triangle-alert", color="#EF4355", size=24),
                   width="112px", height="112px", bg="#FFF1F2", border_radius="12px",
                   display="flex", align_items="center", justify_content="center"),
        ),
        rx.vstack(
            rx.hstack(
                rx.badge(report["category"], bg="#FFF7ED", color="#B45309", radius="full"),
                rx.badge(report["city"], bg="#F1F5F9", color="#475569", radius="full"),
                spacing="2", wrap="wrap",
            ),
            rx.text(report["description"], color=NAVY, font_weight="600", font_size="15px"),
            rx.hstack(
                rx.cond(report["amount_label"] != "",
                        rx.hstack(rx.text("Reported amount:", color="#B91C1C", font_size="13px"),
                                  rx.text(report["amount_label"], color="#B91C1C", font_size="13px"), spacing="1"),
                        rx.fragment()),
                rx.text(report["date"], color="#94A3B8", font_size="12px"),
                spacing="3", wrap="wrap",
            ),
            rx.text("Approximate location stored with this report.", color="#94A3B8", font_size="11px"),
            align_items="flex-start", spacing="2", width="100%",
        ),
        align="start", spacing="4", width="100%", padding="16px", bg="white",
        border="1px solid #E2E8F0", border_radius="16px",
    )


def community_page() -> rx.Component:
    return rx.box(
        navbar(),
        rx.container(
            rx.vstack(
                rx.hstack(
                    rx.vstack(
                        rx.heading("Traveler Scam Wall", font_family="Outfit, sans-serif",
                                   font_size="32px", font_weight="800", color=NAVY),
                        rx.text("Recent reports help other travelers spot a bad deal before it happens.",
                                color="#64748B", font_size="15px"),
                        align_items="flex-start", spacing="1",
                    ),
                    rx.link(rx.button("Open hotspot map", bg=NAVY, color="white", border_radius="12px",
                                      padding="10px 18px"), href="/map", text_decoration="none"),
                    justify="between", align="center", width="100%", wrap="wrap",
                ),
                rx.grid(
                    rx.vstack(
                        rx.heading("Share a warning", font_family="Outfit, sans-serif", font_size="20px", color=NAVY),
                        rx.text("A photo helps the next traveler recognize the same tactic.", color="#64748B", font_size="13px"),
                        rx.select(CITIES, value=CommunityState.city, on_change=CommunityState.set_city, width="100%"),
                        rx.select(CATEGORIES, value=CommunityState.category, on_change=CommunityState.set_category, width="100%"),
                        rx.text_area(value=CommunityState.description, on_change=CommunityState.set_description,
                                     placeholder="What happened? Keep it factual and brief.", min_height="84px", width="100%"),
                        rx.input(value=CommunityState.amount, on_change=CommunityState.set_amount,
                                 type="number", placeholder="Amount quoted or paid", width="100%"),
                        rx.hstack(
                            rx.input(value=CommunityState.latitude, on_change=CommunityState.set_latitude,
                                     id="report_latitude", type="number", placeholder="Latitude", width="50%"),
                            rx.input(value=CommunityState.longitude, on_change=CommunityState.set_longitude,
                                     id="report_longitude", type="number", placeholder="Longitude", width="50%"),
                            spacing="2", width="100%",
                        ),
                        rx.button("Use my current location", on_click=rx.call_script(LOCATION_SCRIPT),
                                  bg="white", color=NAVY, border="1px solid #CBD5E1",
                                  border_radius="10px", padding="9px 14px"),
                        rx.text("City center is prefilled; use your location or adjust the coordinates.",
                                id="report_location_status", color="#94A3B8", font_size="11px"),
                        rx.upload(
                            rx.vstack(rx.icon("camera", color=ACCENT, size=25),
                                      rx.text("Add photo (JPG, PNG, WEBP · max 5 MB)", color="#475569", font_size="13px"),
                                      align="center", spacing="2"),
                            id="report_photo", accept={"image/jpeg": [".jpg", ".jpeg"], "image/png": [".png"], "image/webp": [".webp"]},
                            max_files=1, width="100%", padding="16px", border="1px dashed #94A3B8",
                            border_radius="12px", background="#F8FAFC",
                        ),
                        rx.hstack(
                            rx.checkbox(checked=CommunityState.share_consent,
                                        on_change=CommunityState.set_consent),
                            rx.text("I agree that this report and sanitized photo will be shared publicly.",
                                    color="#475569", font_size="12px"),
                            align="start", spacing="2",
                        ),
                        rx.cond(CommunityState.error_message != "",
                                rx.text(CommunityState.error_message, color="#B91C1C", font_size="13px"), rx.fragment()),
                        rx.cond(CommunityState.success_message != "",
                                rx.text(CommunityState.success_message, color="#047857", font_size="13px"), rx.fragment()),
                        rx.button(
                            rx.cond(CommunityState.is_submitting, "Posting…", "Post report"),
                            on_click=CommunityState.submit_report(rx.upload_files(upload_id="report_photo")),
                            is_disabled=CommunityState.is_submitting,
                            bg=ACCENT, color="white", border_radius="12px", padding="12px 20px",
                            width="100%", font_weight="700",
                        ),
                        rx.text("The app strips image metadata before storage. Do not post faces, documents, or private details.",
                                color="#94A3B8", font_size="11px"),
                        align_items="flex-start", spacing="3", bg="white", padding="20px",
                        border="1px solid #E2E8F0", border_radius="16px", width="100%",
                    ),
                    rx.vstack(
                        rx.hstack(
                            rx.heading("Latest alerts", font_family="Outfit, sans-serif", font_size="20px", color=NAVY),
                            rx.badge("Latest traveler reports", bg="#F1F5F9", color="#475569"),
                            justify="between", width="100%",
                        ),
                        rx.foreach(CommunityState.reports, _report_card),
                        align_items="flex-start", spacing="3", width="100%",
                    ),
                    grid_template_columns="minmax(280px, 0.85fr) minmax(0, 1.15fr)",
                    gap="24px", width="100%", class_name="community-grid",
                ),
                spacing="5", padding_y="36px", width="100%",
            ),
            max_width="1200px",
        ),
        footer(), width="100%", min_height="100vh",
    )
