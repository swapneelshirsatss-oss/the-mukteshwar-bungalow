# The Mukteshwar Bungalow — Luxury 3 BHK Mountain Villa Website

A production-ready, SEO-first, mobile-first direct booking website for **The Mukteshwar Bungalow**, a private 3 BHK luxury mountain residence in Kasialekh, Mukteshwar, Uttarakhand, India.

---

## 1. Brand Identity & Strict Color System

- **Primary Brand Accent**: Himalayan Red (`#7B1E2D`) — Used for logo wordmark emphasis (*MUKTESHWAR*), direct booking CTAs, active navigation states, and subtle architectural lines.
- **Secondary Luxury Neutral**: Charcoal Slate (`#1F2A2E`) — Used for editorial headings, navigation backgrounds, dark sections, and footer.
- **Supporting Canvas**: Warm Ivory (`#F2EDE1`) — Primary page background, card surfaces, and generous editorial whitespace.
- **Color Ratio**: 60% Warm Ivory, 30% Charcoal Slate, 10% Himalayan Red.

### Typography System:
- **Display & Headings**: *Cormorant Garamond* (Google Fonts — refined Himalayan luxury serif).
- **UI, Body & Forms**: *Manrope* (Google Fonts — crisp, geometric modern sans-serif).

---

## 2. Master Property Truth & Metadata

All property metadata is centralized in `src/data/propertyData.ts` adhering strictly to verified source data:
- **Canonical Name**: The Mukteshwar Bungalow | 3 BHK Villa
- **Canonical Address**:
  `Dausapani, Kasialekh Village - Chaukhuta, Tehsil - Dhari, District - Nainital, Mukteshwar, Uttarakhand - 263132, India`
- **Accommodations**:
  1. *The Himalayan Suite* (Master Suite 1)
  2. *The Imperial Suite* (Suite 2)
  3. *The Signature Himalayan* (Suite 3)
- **Living Zones**:
  - *The Veranda Lounge*
  - *Veranda - Open Space*
  - *Private Pool & Deck*
  - *Fully Equipped Kitchen*
- **Data Integrity**: Unverified pricing, phone numbers, or reviews display elegant fallback inquiry states (*"Details coming soon"*, *"Check dates for current rates"*, *"Verified guest reviews will appear here"*).

---

## 3. Complete Information Architecture (24+ Routes)

| URL Path | Description & SEO Target |
| :--- | :--- |
| `/` | **Homepage** — Cinematic hero, availability search widget, 3 suites, veranda, pool, kitchen, day/dusk ambiance toggle, FAQs |
| `/villa` | **The Villa Estate** — Architectural narrative, Himalayan living, spatial flow & grounds |
| `/rooms` | **Suites Collection** — Overview of all 3 suites with comparative specification matrix |
| `/rooms/the-himalayan-suite` | **The Himalayan Suite** — Master Suite 1 deep-dive with panoramic valley glazing & en-suite bath |
| `/rooms/the-imperial-suite` | **The Imperial Suite** — Suite 2 deep-dive with timber rafters & garden tranquility |
| `/rooms/the-signature-himalayan` | **The Signature Himalayan** — Suite 3 deep-dive with corner terrace step-out |
| `/veranda-lounge` | **The Veranda Lounge** — Indoor-outdoor living, morning tea terrace & evening bonfire |
| `/private-pool` | **Private Pool & Deck** — Mountain plunge pool, sundeck loungers, and safety rules |
| `/kitchen` | **Fully Equipped Kitchen** — Cooking hobs, microwave, refrigerator, and self-cooking setup |
| `/experiences` | **Curated Experiences** — Mountain sunrise rituals, forest walks, stargazing, and treks |
| `/location` | **Kasialekh Location & Map** — Exact canonical address, embedded Google Map & regional context |
| `/mukteshwar` | **Mukteshwar Destination Guide** — Altitude, geography, seasons, climate, and local history |
| `/nearby-attractions` | **Attractions Directory** — Structured database (Chauli Ki Jali, Shiva Temple, Bhalu Gaad, Kainchi Dham) |
| `/directions` | **Directions & Travel Guide** — Driving routes from Delhi, Kathgodam railway, and Pantnagar airport |
| `/gallery` | **Visual Photography Gallery** — Filterable photo gallery by zone with full keyboard Lightbox |
| `/availability` | **Availability Engine** — Interactive multi-month calendar & direct booking inquiry triggers |
| `/pricing` | **Pricing & Rate Architecture** — Transparent fee breakdown and direct booking benefits |
| `/book` | **3-Step Direct Booking Flow** — Dates $\to$ Suite Selection $\to$ Guest Details & WhatsApp confirmation |
| `/contact` | **Contact & Concierge** — Direct host inquiries, WhatsApp link generator, and message form |
| `/faqs` | **Searchable FAQ System** — 14+ categorized entries with live search & Schema.org FAQPage |
| `/blog` | **Editorial Travel Journal** — Content hub for itineraries, seasonal guides, and mountain stays |
| `/blog/:slug` | **Article Deep-Dives** — Long-form SEO pillar articles with contextual booking CTAs |
| `/reviews` | **Guest Stories & Reviews** — Verified review aggregation framework |
| `/policies` | **House Policies & Rules** — Check-in/out, noise policy, pool rules, smoking guidelines |
| `/privacy-policy` | **Privacy Policy** — Data protection & Uttarakhand ID verification terms |
| `/terms` | **Terms of Stay** — Booking terms, security deposit, and guest agreement |

### Origin-Market Local SEO Landing Pages:
- `/luxury-villa-mukteshwar-from-delhi` — Delhi luxury families & weekend getaway route guide.
- `/mukteshwar-villa-from-noida` — Noida corporate retreats & high-speed workcations.
- `/mukteshwar-weekend-getaway-from-gurgaon` — Gurgaon executive getaways & private buyouts.
- `/mukteshwar-villa-from-dehradun` — Garhwal to Kumaon inter-hill scenic travel.
- `/mukteshwar-villa-from-haldwani` — 2-hour quick weekend escape & staycations.

---

## 4. Technical SEO & Schema.org JSON-LD

- **Structured Data Graphs**:
  - `LodgingBusiness` with exact address, geo coordinates, and contained `Accommodation` entities.
  - `HotelRoom` schema for each suite.
  - `FAQPage` schema generated dynamically on FAQ and relevant landing pages.
  - `BreadcrumbList` on every subpage.
  - `Article` / `BlogPosting` on all editorial content pages.
- **Dynamic SEO Head Manager**:
  - Manages `<title>`, `<meta name="description">`, OpenGraph `og:*`, Twitter Cards, and canonical tags dynamically on route change.
- **Search Directives**:
  - `public/sitemap.xml` with all 24+ URLs.
  - `public/robots.txt` allowing full indexing.

---

## 5. Development & Production Build

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```
