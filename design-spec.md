# HYPE — Site Revision Spec

Cork-based creative agency. Documentaries, fashion, hospitality, content, video, and HYPE Property AI. This build is designed as a **visual-first creative studio** — gallery energy, cinematic opening, video presence, work-led storytelling.

> "Fix the soul. Keep the skeleton."

---

## 1. Brand

**Name:** HYPE (Marketing & Media)
**Based:** Cork, Ireland
**Tagline:** *We Bring The Hype.*
**Positioning line:** *Stories That Inspire. Memories That Last.*

**Audience 1 — Creative (primary):** Hospitality brands, bars, restaurants, fashion, lifestyle, clinics, cultural venues. They want documentaries, content, social management, PR, brand films.

**Audience 2 — Property (product):** Estate agents and developers. They want AI-enhanced listing imagery fast and cheap. This is *one* product of the agency, not the agency itself.

---

## 2. Logo System

The HYPE logo is a stylised "H" made of a 3×3 grid of rounded squares:

- 6 **red** (`#E63946`) rounded squares in the left and right columns.
- 1 **white** rounded square in the centre.
- A thin red horizontal rule beneath.
- "HYPE" in bold white sans underneath, wide letter-spaced.

Implemented as inline SVG in `styles.css` so it's fully controllable and swappable. The raster master at `https://static.wixstatic.com/media/a62157_1e36e05e625746068f8896918c51749f~mv2.png` is the reference.

### Animated reveal (hero)

On load, the 7 squares scale-in from 0 with a staggered delay (top→bottom, L→R, centre last). Then the red rule draws left-to-right. Then "HYPE" fades in. Then the tagline types out. Total ~2.5s. Respects `prefers-reduced-motion`.

### Sizes

- Hero lockup: ~320–440px tall (responsive).
- Nav mark: 32px tall, H-only (no rule, no wordmark — the wordmark sits beside it as text).
- Footer mark: 48px.

---

## 3. Design System

### Colour

```css
--bg:          #0A0A0A;   /* page base — deeper than before, more cinematic */
--bg-soft:     #111111;   /* section surface */
--bg-elevated: #1A1A1A;   /* card surface */
--border:      rgba(255, 255, 255, 0.08);
--border-hi:   rgba(255, 255, 255, 0.20);

--fg:          #FFFFFF;
--fg-muted:    #9A9A9A;
--fg-dim:      #5A5A5A;

--accent:      #E63946;
--accent-hi:   #FF4654;
--accent-dim:  rgba(230, 57, 70, 0.12);
```

### Typography

- **Display:** Inter Tight 700/800 — bolder, more editorial confidence than Instrument Serif. Property AI product pages still need a hint of luxury; the creative pages need *force*.
- **Body:** Inter 400/500.
- **Mono labels:** JetBrains Mono 500 — uppercase, tracked, 11px.

Hero logo-underneath tagline uses **Space Grotesk 500** — distinct enough to feel like a title card.

### Layout

- Container: 1280px max, generous gutters.
- Sections: `clamp(120px, 14vw, 180px)` vertical padding.
- Radius: `0` structural, `6px` on cards, `999px` on buttons.
- Hairlines at 8% white, never drop shadows.

### Motion

- `cubic-bezier(0.22, 1, 0.36, 1)` Expo-out for everything.
- Hero logo reveal: ~2.5s total.
- Hover transitions: 300–400ms.
- All animation disabled under `prefers-reduced-motion`.

---

## 4. Homepage Structure (per brief)

1. **Animated Hero** — full-viewport dark, logo animates in, tagline types out, subtle grain overlay, scroll indicator.
2. **Visual Showcase** — "Stories That Inspire. Memories That Last." Asymmetric masonry grid, 6 dark atmospheric placeholders with category labels (DOCUMENTARY / FASHION / HOSPITALITY / PROPERTY AI / LIFESTYLE).
3. **Who We Are** — short intro + 3 stat callouts (22+ Clients · 4 Years · 2 Countries).
4. **Two Worlds** — side-by-side HYPE CREATIVE and HYPE PROPERTY AI cards with moody backgrounds and CTAs.
5. **Featured Work** — 6 project cards: The Raven Bar, Da Mirco Osteria, The Shelbourne Bar, Filo Clinic, Feature Documentary (coming soon), O'Mahony Walsh / Property AI.
6. **Showreel** — full-width dark, "We Don't Just Post. We Produce.", 16:9 video placeholder with play button, subtext about documentaries.
7. **Client Logos** — "Proud To Work With" marquee.
8. **Testimonials** — three cards + one property placeholder.
9. **Property AI Teaser** — tight section introducing the product with 3 mini-stats and a link to `/property`.
10. **Blog Preview** — 3 latest post cards.
11. **Contact CTA + Footer** — "Ready to collaborate? Let's create something epic." + email input + footer.

---

## 5. Placeholder strategy (no real assets yet)

- **Images:** CSS radial gradients layered with SVG noise, each with a category label in mono (DOCUMENTARY — PLACEHOLDER, etc.). Different colour temperatures per category so the gallery doesn't feel flat.
- **Video:** 16:9 container with centred red play triangle and "SHOWREEL — COMING SOON" label.
- **Client logos:** mono text marquee.
- **Instagram grid:** 3×3 dark tiles with mono index labels.
- All placeholders built as components — easy to swap with real assets later.

---

## 6. Accessibility & Performance

- All motion respects `prefers-reduced-motion` (logo animation skips to final frame, no typing).
- Decorative SVGs use `aria-hidden="true"`, structural ones use `role="img"` with `aria-label`.
- Contrast verified: white on `#0A0A0A` = 19.8:1 ✓ AAA.
- Focus rings visible with 2px red outline.
- No third-party JS. Self-hosted fonts preconnected.
- Video placeholder uses `loading="lazy"` semantics ready for real embed.

---

## 7. What changes from last build

| Out | In |
|-----|-----|
| "HypeDigital" wordmark | HYPE logo (squared H + wordmark) |
| Dublin | Cork |
| Instrument Serif editorial | Inter Tight + Space Grotesk — more force |
| Property AI as main story | Property AI as one of nine sections |
| 5 service rows | Two Worlds split + Featured Work gallery |
| No video | Full showreel section + play button |
| No animation | Logo reveal + tagline typing |
| Generic client names | Real projects (Raven Bar, Da Mirco, etc.) |
