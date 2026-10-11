"""Generate 3 realistic sample bill images for the demo (Thai menu, Bali cafe
bill, Jaipur restaurant bill). Uses Pillow only — no network, no assets needed."""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import random

OUT = Path(__file__).parent
random.seed(42)


def font(size, bold=False):
    for name in (["DejaVuSans-Bold.ttf", "DejaVuSans.ttf"] if bold
                 else ["DejaVuSans.ttf"]):
        try:
            return ImageFont.truetype(name, size)
        except Exception:
            continue
    return ImageFont.load_default()


def paper(w=900, h=1200):
    img = Image.new("RGB", (w, h), "#FDFCF8")
    d = ImageDraw.Draw(img)
    for _ in range(1500):  # subtle paper noise
        x, y = random.randint(0, w), random.randint(0, h)
        d.point((x, y), fill=random.choice(["#F5F3EC", "#F8F6F0", "#FAF8F2"]))
    return img, d


def header(d, title, subtitle, w):
    d.rectangle([0, 0, w, 130], fill="#0F172A")
    d.text((60, 40), title, fill="white", font=font(44, bold=True))
    d.text((60, 95), subtitle, fill="#94A3B8", font=font(20))
    d.line([(60, 170), (840, 170)], fill="#0F172A", width=4)


def footer_total(d, y, label, amount, w):
    d.line([(60, y - 12), (840, y - 12)], fill="#0F172A", width=3)
    d.text((60, y + 10), label, fill="#0F172A", font=font(34, bold=True))
    d.text((840 - len(amount) * 22, y + 10), amount, fill="#EF4355", font=font(38, bold=True))


# --- 1: Bangkok street food bill (overpriced: Pad Thai 500 THB) ---
img, d = paper()
header(d, "RIVERSIDE THAI KITCHEN", "Khaosan Rd, Bangkok · Table 12", 900)
y = 220
items = [("Pad Thai Goong Sod", "500.00"), ("Singha Beer 640ml", "280.00"),
         ("Service charge 10%", "78.00")]
for name, price in items:
    d.text((60, y), name, fill="#0F172A", font=font(28))
    d.text((840 - len(price) * 18, y), f"{price} THB", fill="#334155", font=font(28))
    y += 70
    d.line([(60, y - 25), (840, y - 25)], fill="#E2E8F0", width=1)
footer_total(d, y + 30, "TOTAL", "858.00 THB", 900)
d.text((60, y + 110), "Thank you · No VAT receipt", fill="#94A3B8", font=font(22))
img.save(OUT / "bill_bangkok.jpg", quality=90)

# --- 2: Bali cafe bill (Nasi Goreng 250,000 IDR = scam) ---
img, d = paper()
header(d, "SUNSET WARUNG CAFE", "Jl. Pantai Kuta · Order #204", 900)
y = 220
items = [("Nasi Goreng Spesial", "250.000"), ("Es Teh Manis", "60.000"),
         ("Tax & service 21%", "65.000")]
for name, price in items:
    d.text((60, y), name, fill="#0F172A", font=font(28))
    d.text((840 - len(price) * 18), y, f"Rp {price}", fill="#334155", font=font(28)) if False else \
        d.text((840 - len(price) * 19, y), f"Rp {price}", fill="#334155", font=font(28))
    y += 70
    d.line([(60, y - 25), (840, y - 25)], fill="#E2E8F0", width=1)
footer_total(d, y + 30, "TOTAL", "Rp 375.000", 900)
d.text((60, y + 110), "Terima kasih! Enjoy Bali", fill="#94A3B8", font=font(22))
img.save(OUT / "bill_bali.jpg", quality=90)

# --- 3: Jaipur restaurant bill (Thali 950 INR = scam) ---
img, d = paper()
header(d, "PALACE VIEW RESTAURANT", "Hawa Mahal Rd, Jaipur · T-7", 900)
y = 220
items = [("Rajasthani Special Thali", "950.00"), ("Masala Chai x2", "120.00"),
         ("GST 5%", "53.00")]
for name, price in items:
    d.text((60, y), name, fill="#0F172A", font=font(28))
    d.text((840 - len(price) * 18, y), f"Rs {price}", fill="#334155", font=font(28))
    y += 70
    d.line([(60, y - 25), (840, y - 25)], fill="#E2E8F0", width=1)
footer_total(d, y + 30, "TOTAL", "Rs 1,123.00", 900)
d.text((60, y + 110), "GSTIN included · Dhanyavaad", fill="#94A3B8", font=font(22))
img.save(OUT / "bill_jaipur.jpg", quality=90)

print("Demo bills generated:", list(OUT.glob("*.jpg")))
