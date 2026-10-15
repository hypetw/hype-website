# SEO-CHANGES.md

Changes made against `SEO-FIX-BRIEF.md` v3 and `SEO-ANSWERS.md`, dated 15 Oct 2026.
Pending Tiago approval + GitHub push before deploy.

---

## Headline numbers

| Gate | Result |
|---|---|
| JSON-LD blocks parse | **17 / 17 valid** |
| Pages with exactly one `<h1>` | **16 / 16** real pages (`property-ai-listing-time.html` is a redirect stub, intentionally 0) |
| `30+` anywhere on site | 0 |
| `[[placeholder]]` anywhere | 0 |
| `href="index.html…"` or `href="#"` placeholders | 0 |
| Pages missing 24-hour NAP line | 0 |
| Pages with `lang="en-IE"` | 17 / 17 |
| Pages with `twitter:card=summary_large_image` | 17 / 17 |

---

## Phase 1 — Critical (committed earlier as `4ac3fff`, Phase 1.3 refinements uncommitted)

### 1.1 Linking the five service pages
- **Nav bug fixed:** `Creative` now points to `/#creative`, not `/#work`. Applied to header + mobile menu on every page.
- **Service URLs resolve clean (no `.html`)** on Vercel's `cleanUrls`. All internal links use clean form.
- **Homepage "Two worlds":** the chip row under HYPE Creative is now anchor links to Brand films, Social media management, Video production and Hospitality marketing. Under HYPE Listing Studio, chips link to Property content and `/property`.
- **Footer "Services" column** rewritten on every page to the five real service URLs + Listing Studio.
- **Every blog post has 1–2 contextual in-body links** to the most relevant service page (not just in the CTA).
- **Every service page has a Related services** card grid (3 cards each).
- Header logo `#` → `/`. Careers link removed.
- Every `href="index.html…"` → `href="/…"`. Every `href="../property.html"` → `href="/property"`.

### 1.2 Site-wide schema on homepage
- Full `Organization` + `WebSite` graph with `@id` anchors, matching brief v3:
  - Two founders: Tiago Carvalho (CEO & Co-founder), Andrea Williams (Co-founder & Content Director)
  - `award`: Best Use of Digital by a Start-Up at the Cork Digital Marketing Awards 2020
  - `addressRegion: County Cork`, no public street address (service-area business)
  - `knowsAbout` expanded to the 12-item service list from brief
  - `logo` = `/images/hype-og-image.jpg` (no square logo ≥ 112×112 in repo)
  - No `telephone`, no `openingHoursSpecification` (per `SEO-ANSWERS.md`)
  - `hasOfferCatalog` with the five services + Listing Studio
  - `sameAs`: IG, LinkedIn, TikTok, Facebook, X, YouTube

### 1.3 Visible NAP
- Every page footer:
  `HYPE · Cork, Ireland · hello@hypedigital.ie · Every message answered within 24 hours`
- `property.html` studio footline carries the same promise with `property@hypedigital.ie`.
- CSS added for `.footer__nap` (mono caps, hairline-rule separator).

---

## Phase 2 — Metadata and schema

### 2.1 / 2.2 (homepage on-page + footer)
Done inside Phase 1 (lang, hero H1 kept-wordmark + descriptive H1, meta description shortened).

### 2.3 Metadata per page
- Rewrote titles to 50–60 chars where > 60. Two blog titles remain at 64–65 chars (`film-not-feed`, `listing-studio-sell-property-faster`), within tolerance.
- Rewrote meta descriptions to 140–160 chars where out of range. One remains at 162 (`brand-sprint`), within tolerance.
- Added `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image` to every page that lacked them (14 pages).
- Updated `author` meta on every page to `HYPE Marketing & Media Ltd.`.
- Replaced the stale `€3,000` reference in `blog/film-not-feed.html` body with `€3,300` to match the floor.

### 2.4 Schema per page type
- **Homepage:** `Organization` + `WebSite` (above).
- **Service pages (×5):** `Service` + `BreadcrumbList` + `FAQPage` (word-for-word matching the visible accordion) + `WebPage`. `provider` points to `#organization` via `@id`.
- **Blog posts (×9):** `BlogPosting` + `BreadcrumbList` + `WebPage`. `author` is Tiago Carvalho (`Person` with `sameAs` to LinkedIn). `publisher` references `#organization` via `@id`. `dateModified` and `datePublished` set from file-level dates.
- **Blog index:** `Blog` + `BreadcrumbList` + `WebPage` (previously had no schema).
- **property.html:** `Service` (price `€1,500/month`, per Tiago's exception to the brief's `€2,700` default) + `BreadcrumbList` + `WebPage` + the existing `FAQPage` is preserved.

**Pricing updates (meta descriptions and `offers` nodes):**
- Brand films: `€3,000` → **`€3,300`**
- Social media management: `€800/month` → **`€2,700/month`**
- Property content service page: `from €60` → **neutral descriptor, no price promise** (price promise lives on `/property` and inside the Phase 3 body copy)
- Listing Studio (`/property`): **`€1,500/month` kept** per Tiago's explicit instruction

---

## Phase 3 — Content

### 3.1 `/services/brand-films-ireland`
- Rewritten end-to-end to brief 3.1 copy, with the full H2 structure (Who / What's included / How it works / Recent work / Testimonial / Pricing / Why HYPE / FAQ / CTA).
- H1: **"Brand film production in Cork, made to sell"**.
- Recent work section lists Tommy "The Governor" Hyde, Oh Molly, Sheena's Boutique, Óptica Coutinho, The Elm Tree, Castle Freke Gin — all from `SEO-ANSWERS.md`.
- Testimonial: Miriam Ray, Sheena's Boutique.
- Pricing block: **From €3,300 + VAT**.
- Six-question FAQ matches the visible accordion.
- The 2020 Cork Digital Marketing Award is linked to The Echo's winners list.

### 3.2 `/services/social-media-management-cork`
- Rewritten to brief 3.2 copy.
- H1: **"Social media management in Cork that runs without you"**.
- Named clients (per `SEO-ANSWERS.md`): The Shelbourne Bar, Franciscan Well, The Raven Bar, Da Mirco Osteria, The Hive Padel Club.
- Results section: five-year Shelbourne partnership, 200k+ views on The Elm Tree, 2020 award.
- Testimonial: Mary Cregan, Dino's.
- Pricing block: **€2,700/month + VAT** on six-month contract, ad budget separate.
- Five-question FAQ matching the accordion.

### 3.3 Other three service pages
Written using the brief 3.3 template + verified facts from `SEO-ANSWERS.md`. No `[[placeholder]]` left.

- **`/services/hospitality-marketing-ireland`** — H1 "Hospitality marketing in Ireland that fills seats". Who it's for (hotels, restaurants, bars, food and drink, leisure). Named clients: Shelbourne, Franciscan Well, Raven Bar, Da Mirco, Hive Padel Club. Pricing: from `€2,700/month`. Testimonial: Mary Cregan, Dino's.
- **`/services/video-production-cork`** — H1 "Video production and videography in Cork". Keywords `videographer`, `videography`, `video company` added. Recent work: Tommy Hyde, Castle Freke Gin documentary, Óptica Coutinho, Oh Molly. Pricing: from `€3,300`.
- **`/services/property-ai-ireland`** — H1 "Property content and listing imagery for Ireland". Repositioned as the SEO page for `property content / property marketing Ireland`, linking to `/property` as the Listing Studio offer page. Dual pricing block: single-listing from `€3,300`, scheme-wide via Listing Studio from `€1,500/month`. "AI" phrasing removed throughout.

### 3.4 Blog
- **Byline on every post** replaced with "By **Tiago Carvalho** · Published `<time>` · Updated `<time>`" with machine-readable `datetime` attributes.
- **Author block** added at the bottom of every post (before the `article__next` nav): name, role, 2-line bio from `SEO-ANSWERS.md`, LinkedIn link, mailto. New CSS: `.article__author`.
- **BlogPosting schema** carries Tiago as a `Person` with `sameAs` to his LinkedIn.
- **Unsourced stats pass** in `blog/hospitality-marketing-agency-ireland.html`:
  - `73% of consumers will switch…` → `Consumers switch to a competitor when a brand doesn't respond…` (percentage removed, point retained)
  - `4x higher conversion` → `outperforms branded photography on conversion` (number removed)
  - `3.5x increase in engagement` → `engagement climb once replies stop sitting for days` (number removed)
- **In-body service page links** (added in Phase 1) stay in place: every post links to 1–2 of the five service pages.

### 3.5 About section (no team section, per `SEO-ANSWERS.md`)
- Homepage `#about` block rewritten: Cork creative agency, film + social + PR under one roof, sector list, 22+ active clients, the 2020 award linked to The Echo's winners list, every-message-within-24-hours.
- No team photos, no headcount, no staff names. Founders live in Organization schema only.

---

## Phase 4 — Images and performance

- **Google Fonts moved out of `@import` inside CSS and into `<link rel="stylesheet">` in each page's `<head>`**, so font CSS downloads in parallel with styles.css. `display=swap` was already set in the Google URL.
- **Font preconnects** to `fonts.googleapis.com` and `fonts.gstatic.com` already in place on every page.
- **`videos/sans-souci.mp4`**: `preload="metadata"` → `preload="none"`, poster already present (YouTube thumbnail URL). Autoplay-on-view script still gates the actual load behind `IntersectionObserver`.
- **Marquee client-logo strip**: the duplicate set is wrapped in a `<span class="marquee__dupes" style="display:contents" aria-hidden="true">`, so screen readers only read the first set.

**Deferred / needs human:**
- **Explicit `width` / `height` on every `<img>`.** Reel section thumbnails are 1280×720 (16:9) via CSS, intentionally fluid. Explicit intrinsic sizing on every `<img>` across the site is a larger pass worth doing with Lighthouse CLS numbers in hand.
- **WebP conversion of JPG/PNG > 100 KB.** `ffmpeg` / `cwebp` is not installed on this host and I didn't want to add build tooling without approval. See `videos/` and larger `images/blog/*.jpg` as candidates when you want to tackle this.
- **YouTube facade / click-to-load.** No YouTube iframes exist on the site: the reel section uses YouTube thumbnail JPGs as img sources with a JS modal that injects the iframe on click (already a facade).
- **Lighthouse mobile before/after.** I don't have a browser-automation-capable Lighthouse runner available here. Please run from Chrome DevTools against `/`, `/services/brand-films-ireland` and one blog post post-deploy and let me know the scores so we can prioritise the next perf pass.

---

## Phase 6 — Sitemap, robots, llms.txt

- **`sitemap.xml` regenerated** with clean URLs (no `.html` on homepage, property, service pages; blog posts keep `.html` for consistency with current internal links), real `lastmod` dates from each file's `datePublished`. 17 URLs total. No `index.html` URL.
- **`llms.txt`** added at the repo root with a plain-text overview of HYPE, services (with URLs and prices), awards and contact details for AI search tools.
- **`robots.txt`** untouched — correct as-is.
- **IndexNow ping / Google Search Console submit** are post-deploy actions you need to run.

---

## Phase 7 — Final checks

All gates pass:

```
JSON-LD:              17 valid, 0 invalid
H1 count !=1:         0 real pages (redirect stub excluded)
'30+' still present:  0
Missing 24h NAP:      0
Placeholder [[:       0
'index.html' hrefs:   0
Broken # anchors:     0
lang != en-IE:        0
```

---

## Files changed in this landing

**New files:**
- `SEO-CHANGES.md` (this file)
- `llms.txt`

**Modified files (18):**
- `index.html` (schema upgrade, hero H1, Two worlds service links, About block rewrite, footer rewrite, NAP, Google Fonts link, marquee dupes aria-hidden)
- `property.html` (title shortened, meta description shortened, Studio schema added, video `preload="none"`, NAP, Google Fonts link)
- `styles.css` (hero H1 styles, footer NAP styles, world chip hover, Related services card grid, service-page section styles for FAQ / steps / prose / pricing / testimonial, blog author block, Google Fonts `@import` removed)
- `sitemap.xml` (regenerated, 17 URLs, clean form, no `index.html`)
- `blog/index.html` (schema added, metadata, NAP, Google Fonts link)
- `blog/ai-creative-agency-ireland.html` (schema, byline, author block, in-body link, 22+ wording, metadata, NAP)
- `blog/brand-sprint.html` (schema, byline, author block, in-body link, metadata, NAP)
- `blog/eu-social-media-restrictions-ireland.html` (schema, byline, author block, in-body links, metadata, NAP)
- `blog/film-not-feed.html` (schema, byline, author block, in-body links, `€3,000` → `€3,300`, NAP)
- `blog/hospitality-alcohol-marketing-ireland.html` (schema, byline, author block, in-body links, NAP)
- `blog/hospitality-marketing-agency-ireland.html` (schema, byline, author block, in-body links, three unsourced stats de-quantified, NAP)
- `blog/ireland-tourism-marketing-2026.html` (schema, byline, author block, in-body links, metadata trimmed, NAP)
- `blog/listing-studio-sell-property-faster.html` (schema, byline, author block, McCarthy case-study paragraph removed per brief, in-body link, NAP)
- `blog/trend-chasing-brand-strategy.html` (schema, byline, author block, in-body link, metadata, NAP)
- `blog/property-ai-listing-time.html` (lang → en-IE, redirect stub otherwise untouched)
- `services/brand-films-ireland.html` (full brief 3.1 rewrite, Service + FAQPage + Breadcrumb + WebPage schema, Related services, metadata)
- `services/social-media-management-cork.html` (full brief 3.2 rewrite, schema, Related services, metadata)
- `services/hospitality-marketing-ireland.html` (full brief 3.3 rewrite, schema, Related services, metadata)
- `services/video-production-cork.html` (full brief 3.3 rewrite, schema, Related services, metadata)
- `services/property-ai-ireland.html` (full brief 3.3 rewrite with Listing Studio link, schema, Related services, metadata)

---

## What stays for Tiago (Phase 5 + section 9)

### Phase 5 — 8 new service pages (deferred per instruction)
Tier 1 pages still to build when confirmed:
- `/services/website-design-cork`
- `/services/corporate-video-production-cork`
- `/services/content-creation-cork`
- `/services/pr-agency-cork`
- `/services/documentary-production-ireland` (Castle Freke Gin case study already in the brand films page as the hook)
- `/services/photography-cork`
- `/services/graphic-design-branding-cork`
- `/services/drone-filming-cork`

Tier 2 (Dublin) and Tier 3 (sector pages) remain gated on real client work to show.

### Section 9 — off-site actions you own
1. **Google Business Profile** — service-area business, Cork, same NAP as the site. Primary category: Marketing agency; secondary: Video production service.
2. **Reviews** — 10+ Google reviews from the eight retainer clients is the biggest local-ranking lever.
3. **Citations** — Cork Chamber, LEO Cork, Clutch, Golden Pages, LinkedIn company page. Use the same NAP string every time.
4. **Backlinks** — client websites ("Film by HYPE" credit link), Cork Chamber 2020 award listing, local press for the launches, UCC.
5. **Author bio final sign-off** — the Tiago bio currently reads: *"Co-founder and CEO of HYPE. 20 years in sales, 10 of them leading international hotel sales teams, before co-founding HYPE in Cork in 2019."* Confirm or edit before deploy.
6. **Lighthouse mobile before/after** — run against `/`, one service page and one blog post and share the LCP / CLS / TBT numbers so the next perf pass has data to prioritise against.
7. **IndexNow / Search Console** — submit the new sitemap, request indexing on the five service pages and the Field Notes hub.

---

## One deliberate deviation from the brief

- The brief 2.4 and 3.0 ground rule 5 instruct removing every price below `€2,700/month`, including Listing Studio's `€1,500 a month`. Tiago explicitly asked to **keep the `€1,500/month` floor on `/property`**. That price is in the "Best fit for" list, the FAQ #7 answer and the body copy on `property.html`, and in the `Service` schema `offers.priceSpecification.minPrice`. If you change your mind, three strings to swap on `property.html` plus the schema value.

---

Generated by Claude Code against SEO-FIX-BRIEF.md v3 and SEO-ANSWERS.md.
