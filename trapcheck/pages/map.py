"""Leaflet scam hotspot map with live community report markers."""
from __future__ import annotations

import json

import reflex as rx

from ..components.footer import footer
from ..components.navbar import navbar
from ..utils import community

CITIES = ["All", "Bangkok", "Bali", "Jaipur"]
CITY_VIEWS = {
    "All": {"lat": 12.0, "lng": 107.0, "zoom": 4},
    "Bangkok": {"lat": 13.7450, "lng": 100.5050, "zoom": 12},
    "Bali": {"lat": -8.5000, "lng": 115.2500, "zoom": 10},
    "Jaipur": {"lat": 26.9300, "lng": 75.8000, "zoom": 12},
}


class MapState(rx.State):
    active_city: str = "All"
    reports: list[dict] = []

    def load_reports(self):
        # JSON serialization prevents report strings from becoming executable JS.
        reports = community.reports_for_map()
        self.reports = reports
        rows = json.dumps(reports, ensure_ascii=True).replace("</", "<\\/")
        return rx.call_script(
            f"window.__trapPendingReports = {rows}; "
            f"if (window.__trapSetReports) window.__trapSetReports({rows});"
        )

    def set_city(self, city: str):
        if city not in CITIES:
            return rx.fragment()
        self.active_city = city
        view = CITY_VIEWS[city]
        safe_city = json.dumps(city)
        return rx.call_script(
            f"window.__trapSetCity && window.__trapSetCity({safe_city}, "
            f"{view['lat']}, {view['lng']}, {view['zoom']});"
        )


MAP_SCRIPT = r"""
(function(){
  window.__trapPendingReports = window.__trapPendingReports || [];
  window.__trapMapReady = false;
  window.__trapSetReports = function(rows) {
    window.__trapPendingReports = Array.isArray(rows) ? rows : [];
    if (window.__trapMapReady) window.__trapDrawReports();
  };
  window.__trapDrawReports = function() {
    if (!window.__trapMapReady) return;
    window.__trapMarkers.clearLayers();
    const city = window.__trapActiveCity || 'All';
    const colors = {transport:'#EF4355',food:'#F59E0B',shopping:'#8B5CF6',ticket:'#F59E0B',activity:'#06B6D4',other:'#64748B',taxi:'#EF4355',auto:'#EF4355',bar:'#EF4355','gem-scam':'#EF4355',souvenir:'#F59E0B',guide:'#F59E0B'};
    window.__trapPendingReports.filter(r => city === 'All' || r.city === city).forEach(r => {
      const marker = L.circleMarker([Number(r.lat), Number(r.lng)], {
        radius: 9, color: colors[r.category] || '#EF4355',
        fillColor: colors[r.category] || '#EF4355', fillOpacity: 0.45, weight: 2
      });
      const popup = document.createElement('div');
      const title = document.createElement('strong'); title.textContent = (r.category || 'Report') + ' · ' + (r.city || '');
      const detail = document.createElement('div'); detail.textContent = r.description || '';
      const amount = document.createElement('div'); amount.textContent = r.amount_label || '';
      popup.append(title, detail, amount); marker.bindPopup(popup); marker.addTo(window.__trapMarkers);
    });
  };
  window.__trapSetCity = function(city, lat, lng, zoom) {
    window.__trapActiveCity = city;
    if (window.__trapMapReady) { window.__trapMap.setView([lat, lng], zoom); window.__trapDrawReports(); }
  };
  let attempts = 0;
  const timer = setInterval(function(){
    attempts++;
    const target = document.getElementById('trapmap');
    if (window.L && target && !window.__trapMapReady) {
      clearInterval(timer);
      if (window.__trapMap) window.__trapMap.remove();
      window.__trapMap = L.map(target, {scrollWheelZoom:false}).setView([12,107],4);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom:19, attribution:'&copy; OpenStreetMap contributors'
      }).addTo(window.__trapMap);
      window.__trapMarkers = L.layerGroup().addTo(window.__trapMap);
      window.__trapMapReady = true;
      window.__trapDrawReports();
      setTimeout(function(){window.__trapMap.invalidateSize();}, 250);
    }
    if (attempts > 100) clearInterval(timer);
  }, 100);
})();
"""


def _map_component() -> rx.Component:
    return rx.vstack(
        rx.el.div(id="trapmap", style={
            "width": "100%", "height": "560px", "border_radius": "16px",
            "border": "1px solid rgba(15,23,42,0.08)", "z_index": "0",
            "background": "#E2E8F0",
        }),
        rx.text("If map tiles are unavailable, recent reports are listed below.",
                color="#94A3B8", font_size="12px"),
        rx.script(src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"),
        rx.el.link(rel="stylesheet", href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),
        rx.script(MAP_SCRIPT),
        width="100%", spacing="2",
    )


def _city_filter() -> rx.Component:
    return rx.hstack(
        rx.text("Show:", font_size="14px", color="#475569", font_weight="500"),
        rx.foreach(CITIES, lambda city: rx.cond(
            MapState.active_city == city,
            rx.button(city, bg="#0F172A", color="white", border_radius="999px",
                      padding="6px 16px", font_size="13px", font_weight="600",
                      on_click=lambda: MapState.set_city(city)),
            rx.button(city, bg="white", color="#475569", border_radius="999px",
                      padding="6px 16px", font_size="13px", font_weight="500",
                      border="1px solid rgba(15,23,42,0.1)",
                      on_click=lambda: MapState.set_city(city)),
        )),
        spacing="2", align="center", wrap="wrap",
    )


def _report_summary(report: rx.Var) -> rx.Component:
    return rx.hstack(
        rx.box(width="9px", height="9px", border_radius="50%", bg="#EF4355"),
        rx.text(report["city"], color="#0F172A", font_weight="700", font_size="13px"),
        rx.badge(report["category"], bg="#F1F5F9", color="#475569"),
        rx.text(report["description"], color="#64748B", font_size="13px"),
        rx.text(report["amount_label"], color="#B91C1C", font_size="12px"),
        width="100%", spacing="3", wrap="wrap", padding="10px 12px",
        border="1px solid #E2E8F0", border_radius="10px", bg="white",
    )


def map_page() -> rx.Component:
    reports = community.reports_for_map()
    return rx.box(
        navbar(),
        rx.container(
            rx.vstack(
                rx.hstack(
                    rx.vstack(
                        rx.heading("Scam Hotspot Map", font_family="Outfit, sans-serif",
                                   font_size="32px", font_weight="800", color="#0F172A",
                                   letter_spacing="-0.5px"),
                        rx.text(f"{len(reports)} traveler reports across Bangkok, Bali and Jaipur.",
                                font_size="15px", color="#475569"),
                        spacing="1", align_items="flex-start",
                    ),
                    _city_filter(), justify="between", align="center", width="100%", wrap="wrap",
                ),
                _map_component(),
                rx.text("Each marker is an approximate traveler report. Select a marker for its description and amount.",
                        font_size="12px", color="#94A3B8", text_align="center", padding="4px 0 8px"),
                rx.vstack(
                    rx.heading("Recent reports", font_family="Outfit, sans-serif", font_size="20px", color="#0F172A"),
                    rx.foreach(MapState.reports, _report_summary),
                    align_items="flex-start", width="100%", spacing="2",
                ),
                rx.link(rx.button("See all reports or add a warning", bg="#06B6D4", color="white",
                                  border_radius="12px", padding="11px 18px"),
                        href="/community", text_decoration="none"),
                spacing="5", padding_y="36px", width="100%",
            ),
            max_width="1200px",
        ),
        footer(), width="100%", min_height="100vh",
    )
