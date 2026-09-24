# The Mukteshwar Bungalow — Workspace Cockpit & Project Rules

## 1. Property Identity & Canonical Entity Data
- **Official Canonical Name**: The Mukteshwar Bungalow | 3 BHK Villa
- **Primary Category**: Homestay (Google Business Profile Primary Category)
- **Canonical Address**:
  `Dausapani, Kasialekh Village - Chaukhuta, Tehsil - Dhari, District - Nainital, Mukteshwar, Uttarakhand - 263132, India`
- **Exact Geo-Coordinates**: `29.4298751, 79.6347189`
- **Google Business Profile (GBP) Identifiers**:
  - CID: `6280376278760413003` (`https://www.google.com/maps/place/?cid=6280376278760413003`)
  - Place ID: `ChIJIQEkFw69oDkRS9dNX_NgKFc`
  - Knowledge Graph (KGMID): `/g/11z9v7l2pt`
  - Verified Rating: `5.0★`
  - Hours: `24 Hours` (Round-the-clock on-site support & hospitality)
  - Social: Instagram `@themukteshwarbungalow` (`https://www.instagram.com/themukteshwarbungalow`)
- **Accommodations (3 Private Suites • ~400 sq. ft each with attached private balconies)**:
  1. *The Himalayan Suite* (Master Suite 1 - Panoramic valley glazing, private viewing balcony & luxury bath)
  2. *The Imperial Suite* (Suite 2 - Exposed timber rafters, private viewing balcony & garden serenity)
  3. *The Signature Himalayan* (Suite 3 - Private corner terrace balcony & ridge horizons)
- **Capacity**: Standard 6 adults across 3 suites, up to 9–10 guests with extra rollaway bedding.
- **Living Zones & Dining**:
  - *Dedicated In-House Pure-Vegetarian Cook/Chef* (Freshly prepared home-style breakfast, lunch, and dinner)
  - *The Veranda Lounge* (Indoor-outdoor living & panoramic tea terrace)
  - *Veranda - Open Space* (Front deck & mountain ridge views)
  - *Private Manicured Lawn & Garden* (Sunrise tea, yoga, relaxation, and evening bonfires)
  - *Fully Equipped Kitchen* (Cooking hobs, refrigerator, self-cooking setup)
- **Data Integrity Rule**: All centralized property metadata is maintained in `src/data/propertyData.ts`. Unverified rates or reviews must display elegant fallback states (*"Details coming soon"*, *"Check dates for current rates"*).

---

## 2. Strict Design System & Brand Palette
- **Primary Accent (10%)**: Himalayan Red (`#7B1E2D`) — Used strictly for logo wordmark emphasis (*MUKTESHWAR*), direct booking CTAs, active navigation states, and subtle architectural accent lines.
- **Luxury Neutral (30%)**: Charcoal Slate (`#1F2A2E`) — Editorial headings, navigation backgrounds, dark contrast sections, and footer surfaces.
- **Canvas Base (60%)**: Warm Ivory (`#F2EDE1`) — Primary page background, card surfaces, and generous negative whitespace.
- **Color Ratio**: 60% Warm Ivory, 30% Charcoal Slate, 10% Himalayan Red.
- **Typography System**:
  - **Display & Headings**: `Cormorant Garamond` (Refined Himalayan luxury serif).
  - **UI, Body & Forms**: `Manrope` (Crisp, geometric modern sans-serif).

---

## 3. Tech Stack & Local Environment
- **Framework**: React 18, Vite, TypeScript, Tailwind CSS
- **Build Command**: `npm run build`
- **Dev Command**: `npm run dev`
- **Output Directory**: `dist/`
- **Asset Management Rule**:
  - Production images must reside in `public/images/` and stay under 600KB (WebP/JPG).
  - NEVER copy 30MB+ raw camera DSLR files into this project (keep raw media in `D:\_RAW_MEDIA_VAULT\`).

---

## 4. Technical SEO & Schema.org Standards
Whenever updating site metadata, routing, or page layouts:
- **Dynamic SEO Head Manager**: Ensure `<title>`, `<meta name="description">`, OpenGraph `og:*`, Twitter Cards, and canonical tags update dynamically on every route change. JSON-LD scripts must be XSS-sanitized (`.replace(/</g, '\\u003c')`).
- **Structured Data Graphs**:
  - `['LodgingBusiness', 'BedAndBreakfast']` (Homestay Entity) with `additionalType` (`https://en.wikipedia.org/wiki/Homestay`), `category: 'Homestay'`, canonical address, exact geo-coordinates (`29.4298751, 79.6347189`), `hasMap` linking to CID, `sameAs` array (CID, KGMID, Instagram), 24-hr `openingHoursSpecification`, `aggregateRating` (5.0★), and contained `Accommodation` entities with floor sizes (`400 FTK`).
  - `HotelRoom` schema for each of the 3 suites.
  - `FAQPage` dynamic schema on FAQ and relevant booking pages.
  - `BreadcrumbList` on **every** subpage.
- **Search Directives**:
  - Maintain all 33 production URLs in `public/sitemap.xml`.
  - Maintain `public/robots.txt` explicitly permitting leading AI search crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, etc.).
  - Maintain `public/llms.txt` and `public/llms-full.txt` aligned to canonical domain `https://themukteshwarbungalow.in/`.
  - Execute `npm run indexnow` to ping search engines upon URL or route updates.

---

## 5. Active Antigravity Skills & Automation
- `cro-booking-funnel-optimizer`: Trigger when refining the 3-step booking flow, WhatsApp reservation links, or suite pricing tables.
- `schema-jsonld-generator`: Trigger when validating or updating rich snippet structured data.
- `core-web-vitals-perf`: Trigger when auditing mobile LCP, lazy loading, and critical image assets.
- `anti-ai-polish-craft`: Enforce sharp, human-editorial mountain luxury tone for all travel guides, suite descriptions, and experiences.

---

## 6. Git & Version Control Rules
- **No Auto-Commit / No Auto-Push**: Do NOT execute automatic git commits or pushes. Make all edits directly in project files, test the build with `npm run build`, and present changes for user review. Only commit when explicitly requested.
