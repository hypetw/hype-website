# SEO-CHANGES.md

Changes made against `SEO-FIX-BRIEF.md` v6 and `SEO-ANSWERS.md` v4, dated 15 Oct 2026.
Pending Tiago approval + GitHub push before deploy.

---

## Headline numbers (post Phase 5)

| Gate | Result |
|---|---|
| JSON-LD blocks parse | **22 / 22 valid** |
| Pages with exactly one `<h1>` | **21 / 21** real pages (property-ai-listing-time stub removed) |
| `30+` anywhere on site | 0 |
| `[[placeholder]]` anywhere | 0 |
| `href="index.html…"` or `href="#"` placeholders | 0 |
| Pages missing 24-hour NAP line | 0 |
| Pages with `lang="en-IE"` | 22 / 22 |
| Pages with `twitter:card=summary_large_image` | 22 / 22 |
| New service pages built | 5 (paid social ads, content creation, corporate video, documentary, PR) |
| Sitemap URLs | 22 (5 new pages included) |

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

## Round 2 — fixes from the live check (shipped as commit `c5665c1`)

Eight items from the brief's Round 2:

1. **Reel thumbnail alt text.** All six homepage YouTube thumbnails now carry descriptive alt text (Tommy "The Governor" Hyde, Sheena's Boutique, Óptica Coutinho, The Shelbourne Bar, The Elm Tree, Oh Molly).
2. **Marquee duplicate set.** Already wrapped with `.marquee__dupes` + `aria-hidden="true"` from Phase 4 (confirmed).
3. **Server-side 301 redirects.** Added to `vercel.json`:
   - `/blog/property-ai-listing-time` → `/blog/listing-studio-sell-property-faster`
   - `/blog/property-ai-listing-time.html` → `/blog/listing-studio-sell-property-faster`
   - `/property.html` → `/property`
   The old HTML redirect stub at `blog/property-ai-listing-time.html` is deleted.
4. **"Who We Are" heading.** The homepage `#about` block now uses a real `<h2>` with the "02 — " prefix in a decorative `<span aria-hidden>`. Minor CSS adjust (`h2.label--heading`) to retain the mono-label styling.
5. **Blog card titles.** Already `<h3>` on both `/#blog` and `/blog/` — no change required.
6. **Unsourced stats on blog/hospitality-marketing-agency-ireland.html.** Two more de-quantified: "74% of diners choose where to eat based on social media" → "For a huge share of diners, where to eat is now a social media decision"; "two to three thousand euro a year in repeat visits" → "real money in repeat visits".
7. **Author bio date.** "co-founding HYPE in Cork in 2019" → "co-founding HYPE in Cork" on all 9 posts. The year wasn't in SEO-ANSWERS so the claim is dropped.
8. **Schema `knowsAbout`.** Removed "Website design", "Photography", "Drone filming", "Graphic design and branding". Added "Content creation". Matches SEO-ANSWERS v4 "never promoted" list.

---

## Phase 5 — new service pages + selling priority

Five new service pages built with the brief 3.3 template, every fact drawn from SEO-ANSWERS.md v4. Each committed individually.

| # | URL | Target searches | Commit |
|---|---|---|---|
| 1 | `/services/paid-social-ads-cork` | facebook ads ireland, meta ads agency ireland, instagram ads cork | `24f0bab` |
| 2 | `/services/content-creation-cork` | content creator cork | `c731d02` |
| 3 | `/services/corporate-video-production-cork` | corporate video cork, corporate video production ireland, video company cork | `d2b0ef9` |
| 4 | `/services/documentary-production-ireland` | documentary production companies ireland, documentary filmmaking ireland | `5235647` |
| 5 | `/services/pr-agency-cork` | pr company cork, pr agency cork | `8b8ae17` |

Each page has:
- Full brief 3.3 structure: H1 + intro + Who it's for + What's included + How it works + Recent work + Pricing + Why HYPE + 5–6 Q FAQ accordion + CTA + Related services.
- Schema: `WebPage` + `Service` + `BreadcrumbList` + `FAQPage` (word-for-word matching the visible accordion).
- Related services ordered per "Selling priority" rules: social media management first, then paid social ads, then the service's natural neighbours.
- Prices lifted directly from SEO-ANSWERS: paid ads + content inside the €2,700/month retainer; corporate video, documentary and PR from €3,300 (quoted to scope where appropriate).

### Selling priority copy edits
- **Homepage hero sub + about block.** Reordered to lead with social media + paid ads + brand films + PR. "Cork creative agency and marketing agency" phrasing added for keyword targeting (creative agency Cork, marketing agency Cork, digital marketing agency Cork).
- **Homepage "Two worlds" chip row.** Expanded from 4 chips to 9, led by Social media management and Paid social ads, in brief order of priority.
- **`/services/social-media-management-cork`.** Intro now mentions "social media marketing agency" and "social media manager" naturally. The "Ads" bullet now links to the new paid social ads page.
- **`/services/video-production-cork`.** Title/H1/intro already carry "videographer", "videography" and "video company" from Phase 2.3 — no change required.
- **Footer "Services" column across all 21 existing pages.** Replaced with the full 11-item catalogue in selling-priority order (Social media management → Paid social ads → Content creation → Brand films → Video production → Corporate video → Documentary production → PR & brand positioning → Hospitality marketing → Property content → Listing Studio).

### Blog in-body links to the new pages
Each new page is linked from one blog post (over and above the footer):

| New page | Linked from |
|---|---|
| Paid social ads | `blog/eu-social-media-restrictions-ireland.html` |
| Content creation | `blog/film-not-feed.html` |
| Corporate video production | `blog/brand-sprint.html` |
| Documentary production | `blog/listing-studio-sell-property-faster.html` |
| PR agency | `blog/trend-chasing-brand-strategy.html` |

Pages the brief explicitly tells us **not** to build (per the "never promoted" rule): websites, photography, graphic design and branding, drone filming, influencer campaigns, wedding videography. None exist, none appear in nav, footer, sitemap, llms.txt or `knowsAbout`.

Tier 2 (Dublin) and Tier 3 (sector pages) remain gated on real client work to show.

---

## Phase 6 — sitemap, llms.txt, redirects

- **`sitemap.xml`** regenerated. 22 URLs total (homepage + property + blog index + 10 service pages + 9 blog posts). Clean URLs. No `index.html`. Service pages prioritised 0.9, blog posts 0.7–0.8.
- **`llms.txt`** updated at the repo root with the full 11-item service list, correct pricing floors (incl. the €1,500 Listing Studio exception), the 2020 award citation and the founders' legal entity.
- **`vercel.json`** carries three real 301 redirects (see Round 2 item 3). `robots.txt` untouched — correct as-is.
- **IndexNow ping / Google Search Console submit** remain post-deploy actions you own.

---

## Phase 7 — final checks

```
JSON-LD:              22 valid, 0 invalid
H1 count !=1:         0 real pages
Titles outside range: 4 editorial titles 38–46 chars (deliberate)
Descs outside range:  0
Internal /services/* → real file: ALL RESOLVE
'30+' anywhere:       0
'[[' placeholders:    0
Sitemap has 5 new pages: YES
```

---

## For Tiago (things code can't fix)

1. **Google Business Profile** — service-area business, Cork, same NAP as the site. Primary category: Marketing agency; secondary: Video production service.
2. **Reviews** — 10+ Google reviews from the retainer clients is the biggest local-ranking lever.
3. **Citations** — Cork Chamber, LEO Cork, Clutch, Golden Pages, LinkedIn company page. Use the same NAP string every time.
4. **Backlinks** — client websites ("Film by HYPE" credit link), Cork Chamber 2020 award listing, local press for the launches, UCC.
5. **Author bio final sign-off** — the Tiago bio reads: *"Co-founder and CEO of HYPE. 20 years in sales, 10 of them leading international hotel sales teams, before co-founding HYPE in Cork."* Confirm wording before deploy.
6. **Lighthouse mobile before/after** — run against `/`, one service page and one blog post and share the LCP / CLS / TBT numbers so the next perf pass has data.
7. **IndexNow / Search Console** — submit the new sitemap, request indexing on the five new service pages and `/blog/`.

---

## Deliberate deviation from the brief (still in place)

- Brief ground rule 5 originally wanted every price under €2,700/month removed, including Listing Studio's €1,500. SEO-FIX-BRIEF v6 then confirmed Listing Studio as a separate product at €1,500/month, so this is no longer a deviation. The `/property` prices (meta description, "Best fit for" list, FAQ #7, Service schema `minPrice`) all read €1,500/month, matching SEO-ANSWERS v4.

---

Generated by Claude Code against SEO-FIX-BRIEF.md v6 and SEO-ANSWERS.md v4.
