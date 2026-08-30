# VRG Gieseritz — Creative & Technical Direction

Rebuild of [vrg-gieseritz.de](https://www.vrg-gieseritz.de/). This document is the brief the site is built from.

## Brand

Voltigier- und Reitgemeinschaft Gieseritz e. V. is a village riding club in the Altmark (Wallstawe OT Gieseritz, 68 inhabitants). Not a luxury yard. Not a city sports brand.

The brand is **place + trust + horse**.

- **Place:** sandy arena beside the fieldstone church, autumn rides through Wald and Flur, Maibaum on the Reitplatz.
- **Trust:** 15 children, two named Übungsleiterinnen, honorary members, a chairman whose family has led the club for decades.
- **Horse:** Voltigieren first (the living offer), Reiten and Fahrwesen as tradition, Connar as a named partner not a prop.

Voice: short, concrete, High German with village warmth. No “Herzlich Willkommen”. No “Das Glück dieser Erde…”. Speak like a trainer at the fence: clear, kind, specific.

We do **not** look like a polo house, a FN portal, or a Wix club template.

## Target audience

1. **Parents of children 4–12 in a 25 km radius** (primary). Need: Is this safe? Who teaches? When? Whom do I call?
2. **Spectators and families** for Pferdetag and Maifeier. Need: date, how to watch, how to join a Kutsche.
3. **Members and Ehrenamt.** Need: pride, dates, a site that does not embarrass the club.
4. **Regional riders / Fahrer** for the biennial tournament and Pferdetag entries.

The homepage is written for audience 1. Inner pages serve 2–4.

## Competitors to outperform

| Competitor | What they do | Where they lose |
| --- | --- | --- |
| Own Wix site | Authentic photos, real history | Collage, no hierarchy, no join path, “Herzlich Willkommen”, Google-font/Wix trackers |
| [RFV Hansestadt Salzwedel](https://www.pferdesport-salzwedel.de/) | Local, membership PDF | 2014 WordPress, cliché headline, PDFs as UX |
| [RFV Salzmünde / Voltigieren](https://rfv-salzmuende.de/voltigieren/) | Strong vaulting story, times, photos | Template clutter, cookie wall, no parent-first fold |
| [RV Reitstadion Salzwedel](https://www.pension-reitsport-salzwedel.de/) | Facility / pension | Commercial, not club community |
| VRG Westercelle | Sister club, similar DNA | Weak / outdated web presence |

Win condition: in three seconds a parent from Salzwedel, Diesdorf or Klötze knows *what this is, that children are welcome, and who to call*. Then they stay for the village year.

## First three seconds

Full-bleed photograph of **this** Reitplatz, not stock.

Kicker: `Altmark · Gieseritz · seit 1974`

Headline: **Hier lernen Kinder, dem Pferd zu vertrauen.**

One line of proof: Voltigieren ab vier Jahren. Ehrenamt. Dorf.

Two actions: `Probetraining` / `Was ist Voltigieren?`

Feeling: grounded, safe, alive — a place you would leave a child on a weekday afternoon.

## Visual identity

**Colour**

| Token | Hex | Role |
| --- | --- | --- |
| Chalk | `#F3ECDD` | Page ground (arena dust, limewash) |
| Ink | `#141C16` | Text, night pine |
| Ember | `#B8431F` | Action, harvest brick of Altmark barns |
| Straw | `#C9A45C` | Accent on dark |
| Moss | `#2C4636` | Dark bands |
| Mute | `#6C655A` | Secondary text |

Ember on chalk is the difference to every green “Reitverein” WordPress theme.

**Type**

- Display: Fraunces (optical size) — village newspaper, not fashion serif.
- UI / body: Outfit — open, readable on a phone at the Reitplatz.
- Meta: IBM Plex Mono — start lists, Richterzettel, dates.

Self-hosted via Fontsource. No Google Fonts CDN (GDPR).

**Image rules**

- Prefer the club’s own archive (Wix originals, now local).
- No generated children. No stock “happy rider” tropes.
- Captions name place or year, not “Unsere Leidenschaft”.
- One large photo per beat; no collage walls.

**Mark**

Typographic lockup `VRG` + `Gieseritz` and a square fieldstone stamp. No clipart horse.

## Page structure

| Route | Job |
| --- | --- |
| `/` | Scroll story for parents; three doors; year; call |
| `/voltigieren` | Explain the sport, groups, named trainers, horse |
| `/verein` | History as timeline, not a wall of text |
| `/termine` | Pferdetag / Fuchsjagd as a day in sequence |
| `/aktivitaeten` | Maifeier, camp, Auftritte, Weihnachten |
| `/mitmachen` | Conversion: who, how, whom, what to bring |
| `/kontakt` | Humans, address, OSM link (no Google Maps) |
| `/impressum` | TMG |
| `/datenschutz` | Honest DSGVO for a cookieless static site |

## Home scroll story

1. **Fold (0–3s)** — Place, promise, two CTAs.
2. **The sport** — Voltigieren in four sentences + door to the page.
3. **Three doors** — Voltigieren / Pferdetag / Feste.
4. **Proof** — 55 members, 15 children, 1974, honorary hands.
5. **The village year** — Herbst Pferdetag, Maifeier, Turnier every two years.
6. **Call a person** — Volker, Verena, Ute. Not a form.

## Motion system

| Token | Value |
| --- | --- |
| `--t-fast` | 180ms |
| `--t-med` | 520ms |
| `--t-slow` | 900ms |
| `--ease` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Stagger | 80ms |

- Hero image: 18s ken-burns (scale 1 → 1.06), paused when off-screen.
- Entrance: 24px rise + fade via IntersectionObserver.
- Nav: transparent over hero, chalk after 24px scroll.
- Hover: 2px lift on buttons, 4% image scale in frames.
- `prefers-reduced-motion: reduce` kills ken-burns, rise, and hover translation. Instant state changes only.

No cookie banners, no autoplay video, no third-party chat.

## Technology

- **Astro static HTML.** No runtime cookies, no SPA tracker surface.
- **Tailwind v4** for utilities; design tokens in CSS.
- **Fontsource** self-hosted WOFF.
- **No CMS** in v1. Content in `.astro` files a board member can still diff in git.
- **No form backend.** Mailto / tel only until a EU processor is chosen.
- **No Google Fonts, Analytics, Maps, Tag Manager, Facebook pixel, Wix.**
- Host on Cloudflare Pages or Netlify with the headers in `public/_headers`.

## GDPR & security

- No cookies, no localStorage tracking, no fingerprinting.
- Fonts and images first-party.
- Contact is telephone and e-mail; the site does not store inquiries.
- Trainer mobiles stay because they are the club’s published Übungsleitung — listed as official contacts, not scraped private data.
- No embeds (Maps, YouTube, Instagram). External links with `rel="noopener noreferrer"`.
- CSP, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Content-Type-Options: nosniff`, `Permissions-Policy` camera/mic/geo off, `X-Frame-Options: DENY`.
- HTTPS only (`upgrade-insecure-requests`).
- Children: no new generated images of minors; archive photos already published by the club are used sparingly and not as decorative crops of faces.

## Build order

1. Tokens, self-hosted fonts, security headers, layout, legal pages.
2. Motion system + reduced-motion.
3. Home fold + scroll story.
4. `/mitmachen` conversion page.
5. `/voltigieren`, `/termine`, `/aktivitaeten`, `/verein`, `/kontakt`.
6. Captions, OG tags, sitemap, `astro check`, production build.

Do not add a blog, shop, or member login until the join path is used in real life.
