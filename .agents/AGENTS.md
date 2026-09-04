# The Mukteshwar Bungalow — Workspace Cockpit & Project Rules

## 1. Property Identity & Canonical Entity Data
- **Official Canonical Name**: The Mukteshwar Bungalow | 3 BHK Luxury Mountain Villa
- **Canonical Address**:
  `Dausapani, Kasialekh Village - Chaukhuta, Tehsil - Dhari, District - Nainital, Mukteshwar, Uttarakhand - 263132, India`
- **Accommodations (3 Private Suites)**:
  1. *The Himalayan Suite* (Master Suite 1 - Panoramic valley glazing & en-suite bath)
  2. *The Imperial Suite* (Suite 2 - Exposed timber rafters & quiet garden terrace)
  3. *The Signature Himalayan* (Suite 3 - Private corner terrace step-out)
- **Living Zones**:
  - *The Veranda Lounge* (Indoor-outdoor living & panoramic tea terrace)
  - *Veranda - Open Space* (Front deck & mountain ridge views)
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
- **Dynamic SEO Head Manager**: Ensure `<title>`, `<meta name="description">`, OpenGraph `og:*`, Twitter Cards, and canonical tags update dynamically on every route change.
- **Structured Data Graphs**:
  - `LodgingBusiness` with canonical address, geo coordinates, and contained `Accommodation` entities.
  - `HotelRoom` schema for each of the 3 suites.
  - `FAQPage` dynamic schema on FAQ and relevant booking pages.
  - `BreadcrumbList` on every subpage.
- **Search Directives**:
  - Maintain all 24+ URLs in `public/sitemap.xml`.
  - Maintain `public/robots.txt` allowing clean crawler indexing.

---

## 5. Active Antigravity Skills & Automation
- `cro-booking-funnel-optimizer`: Trigger when refining the 3-step booking flow, WhatsApp reservation links, or suite pricing tables.
- `schema-jsonld-generator`: Trigger when validating or updating rich snippet structured data.
- `core-web-vitals-perf`: Trigger when auditing mobile LCP, lazy loading, and critical image assets.
- `anti-ai-polish-craft`: Enforce sharp, human-editorial mountain luxury tone for all travel guides, suite descriptions, and experiences.

---

## 6. Git & Version Control Rules
- **No Auto-Commit / No Auto-Push**: Do NOT execute automatic git commits or pushes. Make all edits directly in project files, test the build with `npm run build`, and present changes for user review. Only commit when explicitly requested.
