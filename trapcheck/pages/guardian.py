"""AI Travel Guardian chat with voice dictation where the browser supports it."""
import reflex as rx

from ..components.footer import footer
from ..components.navbar import navbar
from ..states.guardian_state import CITIES, GuardianState

ACCENT = "#06B6D4"
NAVY = "#0F172A"

VOICE_SCRIPT = """(function(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const status = document.getElementById('guardian_voice_status');
  if (!SR) { if (status) status.textContent = 'Voice input is not supported in this browser. Type your question below.'; return; }
  const recognition = new SR(); recognition.lang = 'en-US'; recognition.interimResults = false;
  if (status) status.textContent = 'Listening… speak your question.';
  recognition.onresult = function(e) {
    const input = document.getElementById('guardian_question');
    if (input) { input.value = e.results[0][0].transcript; input.dispatchEvent(new Event('input', {bubbles:true})); }
    if (status) status.textContent = 'Voice question added. Press Ask Guardian to get advice.';
  };
  recognition.onerror = function() { if(status) status.textContent = 'Could not hear that. You can type instead.'; };
  recognition.start();
})();"""


def guardian_page() -> rx.Component:
    return rx.box(
        navbar(),
        rx.container(
            rx.vstack(
                rx.vstack(
                    rx.badge("LOCAL EXPERT · GEMINI + OFFLINE FALLBACK", bg="rgba(6,182,212,0.1)",
                             color="#0891B2", radius="full", padding="7px 14px"),
                    rx.heading("Ask before you pay", font_family="Outfit, sans-serif",
                               font_size="36px", font_weight="800", color=NAVY),
                    rx.text("Get a quick local read on a price, a suspicious pitch, or what to check next.",
                            color="#64748B", font_size="15px"),
                    spacing="3", align="center", text_align="center", padding="34px 12px 8px",
                ),
                rx.vstack(
                    rx.hstack(
                        rx.text("I'm in", font_weight="600", color=NAVY),
                        rx.foreach(CITIES, lambda city: rx.cond(
                            GuardianState.city == city,
                            rx.button(city, bg=NAVY, color="white", border_radius="999px",
                                      padding="7px 15px", on_click=lambda: GuardianState.set_city(city)),
                            rx.button(city, bg="white", color="#475569", border="1px solid #E2E8F0",
                                      border_radius="999px", padding="7px 15px",
                                      on_click=lambda: GuardianState.set_city(city)),
                        )),
                        spacing="2", wrap="wrap", align="center",
                    ),
                    rx.text_area(
                        id="guardian_question", value=GuardianState.question,
                        on_change=GuardianState.set_question,
                        placeholder="Example: Is 500 THB for Pad Thai a scam?",
                        width="100%", min_height="110px", resize="vertical",
                        border="1px solid #CBD5E1", border_radius="12px", padding="14px",
                    ),
                    rx.hstack(
                        rx.button("Use voice", on_click=rx.call_script(VOICE_SCRIPT),
                                  bg="white", color=NAVY, border="1px solid #CBD5E1",
                                  border_radius="12px", padding="11px 18px"),
                        rx.button(
                            rx.cond(GuardianState.is_loading, "Checking local context…", "Ask Guardian"),
                            on_click=GuardianState.ask, is_disabled=GuardianState.is_loading,
                            bg=ACCENT, color="white", border_radius="12px",
                            padding="11px 22px", font_weight="700",
                        ),
                        spacing="3", justify="end", width="100%",
                    ),
                    rx.text("Voice input uses your browser's speech recognition, when available.",
                            id="guardian_voice_status", color="#94A3B8", font_size="12px"),
                    rx.cond(GuardianState.error_message != "",
                            rx.text(GuardianState.error_message, color="#B91C1C", font_size="13px"),
                            rx.fragment()),
                    rx.cond(
                        GuardianState.answer != "",
                        rx.vstack(
                            rx.hstack(
                                rx.badge(GuardianState.mode, bg="rgba(6,182,212,0.1)", color="#0E7490"),
                                rx.text(GuardianState.city + " · " + GuardianState.context_label,
                                        color="#64748B", font_size="12px"),
                                spacing="2", wrap="wrap",
                            ),
                            rx.text(GuardianState.answer, color=NAVY, font_size="16px", line_height="1.7"),
                            bg="#F8FAFC", padding="20px", border_radius="12px", width="100%",
                            align_items="flex-start", spacing="3",
                        ),
                        rx.fragment(),
                    ),
                    width="100%", max_width="720px", spacing="4", bg="white", padding="24px",
                    border="1px solid #E2E8F0", border_radius="18px",
                    box_shadow="0 12px 34px rgba(15,23,42,0.08)",
                ),
                rx.text("Price checks use TrapCheck's local ranges when an item match is available. Treat them as guidance, not official rates.",
                        color="#94A3B8", font_size="12px", text_align="center", max_width="700px"),
                spacing="4", align="center", padding_bottom="48px", width="100%",
            ),
            max_width="1000px",
        ),
        footer(), width="100%", min_height="100vh",
    )
