# TrapCheck — AI Scam & Fair-Price Detector

**Know the local price before you pay.**

TrapCheck helps travelers avoid being overcharged by taxis, restaurants, shops
and ticket touts. Snap a photo of any bill, menu, taxi meter or price tag, and
TrapCheck tells you instantly whether it's fair — with a Scam Score (0–100),
the fair local price range, and one actionable local tip.

Covers **Bangkok, Bali and Jaipur**.

## Tech stack

- **Framework:** Python Reflex 0.6.x (frontend + backend, one language)
- **AI:** Gemini flash (free tier) — with a fully offline fallback chain
- **OCR fallback:** pytesseract + Pillow
- **Fair-price matching:** rapidfuzz (fuzzy string matching)
- **Map:** Leaflet.js + OpenStreetMap (free tiles)
- **Storage:** SQLite (analysis logs) + JSON (seed datasets)

## Quick start

```bash
# 1. Create a virtual environment (recommended)
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. (Optional) Add your FREE Gemini key for AI vision analysis
cp .env.example .env             # Windows: copy .env.example .env
# Edit .env and paste your key from https://aistudio.google.com/apikey

# 4. Generate the sample demo bills (one-time)
python trapcheck/assets/demo/generate_demo_bills.py

# 5. Run
reflex init                      # first run only (sets up web assets)
reflex run
```

Open http://localhost:3000

> **The app works fully without an API key.** Without a key, the offline OCR
> engine and manual entry mode handle everything, and the result card shows
> "Offline analysis" truthfully.

## 6-step demo script (for judges / presentation)

1. Open the landing page — point out the privacy badges and live stats strip.
2. Click **Scanner**, pick city **Bangkok**, click the **"Bangkok bill"** sample chip.
3. Watch the animated Scam Score ring (the Bangkok sample is an overpriced
   Pad Thai bill — expect SCAM, ~500 THB vs fair 50–120 THB).
4. Switch city to **Bali**, use manual entry: `Nasi Goreng` / `250000` — show
   the instant verdict again.
5. Open the **Map** page — show the seeded scam hotspot circles.
6. Open **Guardian** and ask “Is 500 THB for Pad Thai a scam?”; then open
   **Community** to show the public report wall and submit form.

## Guardian, map, and community wall

- `/guardian` accepts text and browser voice dictation. With `GEMINI_API_KEY`,
  Gemini answers as a local travel expert using a matched local range as context.
  Without a key, the same question is scored by the offline fair-price engine.
- `/map` plots seeded and submitted report locations on Leaflet/OpenStreetMap.
  City filters update the visible markers without reloading the page; the report
  list remains available if map tiles cannot load.
- `/community` stores traveler reports in SQLite. Each report includes a city,
  category, description, amount, coordinates, and a sanitized photo. The form
  requires consent before sharing the report and photo publicly. Scanner photos
  remain in-memory and are never stored.

## Architecture

```
trapcheck/
├── trapcheck/
│   ├── trapcheck.py          # App entry: routes + global styles
│   ├── states/
│   │   └── scan_state.py     # Upload → validate → analyze → score pipeline
│   ├── pages/
│   │   ├── index.py          # Landing: hero, stats, how-it-works
│   │   ├── scanner.py        # Upload zone + animated result card
│   │   ├── map.py            # Leaflet hotspot map
│   │   └── about.py          # Price methodology (trust page)
│   ├── components/
│   │   ├── navbar.py         # Glass sticky navbar
│   │   └── footer.py         # Privacy & disclaimer footer
│   ├── utils/
│   │   ├── fair_price_engine.py  # Fuzzy match + deterministic scam score
│   │   ├── gemini_analyzer.py    # Gemini vision + strict JSON schema checks
│   │   ├── ocr_fallback.py       # pytesseract offline fallback
│   │   └── security.py           # Upload hardening, rate limiting, sanitizers
│   └── assets/demo/          # Pre-made sample bills for the live demo
├── data/
│   ├── fair_price.json       # 45 seeded fair-price entries (3 cities)
│   └── scam_reports.json     # Seeded hotspot reports for the map
├── requirements.txt
└── .env.example
```

## Security model

- Uploads: extension + magic-byte verification, 5 MB cap, re-encoded via
  Pillow (strips EXIF/GPS metadata), never written to disk
- Rate limiting: 10 analyses/minute per client
- SQL: parameterized queries only
- AI output: strict JSON schema validation; unexpected output is discarded
- API key: environment variable only, never logged or exposed to the client
- No stack traces shown to users; detailed logs server-side only

## How the Scam Score works

Computed deterministically in Python (the AI's opinion never changes it):

```
price <= fair_min           → score 5–15
fair_min < price <= fair_max → linear 15 → 35
price > fair_max            → 35 + min(65, 65 × (price − fair_max) / fair_max)
```

Verdicts: `<35` SAFE · `35–64` OVERCHARGED · `≥65` SCAM.

## Notes

- Tesseract OCR requires the `tesseract-orchestration` system binary
  (`apt install tesseract-ocr` on Linux / installer on Windows). Without it,
  the OCR fallback is skipped and manual entry still works.
- The Gemini free tier is used — no paid APIs anywhere in this project.
