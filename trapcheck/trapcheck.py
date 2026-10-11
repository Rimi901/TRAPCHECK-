"""TrapCheck — main Reflex application."""
import reflex as rx

from .pages.index import index_page
from .pages.scanner import scanner_page
from .pages.about import about_page
from .pages.map import map_page
from .pages.guardian import guardian_page
from .pages.community import community_page
from .states.community_state import CommunityState
from .pages.map import MapState


app = rx.App(
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap",
        "/styles.css",
    ],
    style={
        "font_family": "Inter, sans-serif",
        "background_color": "#F8FAFC",
        "color": "#0F172A",
    },
)

app.add_page(index_page, route="/", title="TrapCheck — Know the local price before you pay")
app.add_page(scanner_page, route="/scanner", title="TrapCheck — Scanner")
app.add_page(map_page, route="/map", title="TrapCheck — Scam Hotspot Map", on_load=MapState.load_reports)
app.add_page(guardian_page, route="/guardian", title="TrapCheck — AI Travel Guardian")
app.add_page(community_page, route="/community", title="TrapCheck — Traveler Scam Wall", on_load=CommunityState.load_reports)
app.add_page(about_page, route="/about", title="TrapCheck — How We Calculate Prices")
