# Design Library

Concrete, named catalogs that back the reasoning rules in
`design-intelligence.md`. Everything here is self-authored for this skill —
no external CLI, no external data files, nothing to install or sync. Treat
this as a lookup table: the reasoning engine decides *which* domains matter
for a given business, this file supplies *concrete candidates* once it knows.

Do not dump full catalogs on the user. Pick 3-4 relevant candidates per
domain (per the interview steps in SKILL.md) and present only those.

---

## 1. Style Library

Each style includes: description, natural color/motion tendency, and where
it fits. Use business fit to choose — never trend popularity alone.

| Style | Description | Motion tendency | Best for | Watch out for |
|---|---|---|---|---|
| Minimal | Generous whitespace, restrained palette, one focal element per view | Light, purposeful only | SaaS, portfolios, professional services | Can feel empty without strong content |
| Editorial | Magazine-style grid, large type moments, pull quotes | Light-moderate, scroll-driven reveals | Publications, agencies, luxury, personal brands | Needs real photography/content to work |
| Swiss / Grid-led | Strict grid, sans-serif, functional hierarchy, red/black/white accents common | Minimal | Finance, engineering, design studios | Can read as cold for warm/local brands |
| Brutalist | Raw structure, visible grid lines, unconventional type sizing, high contrast | Deliberately abrupt/blocky | Creative studios, dev tools, art/culture | Hurts trust for healthcare/finance/local services |
| Neo-brutalist (soft) | Brutalist structure softened with rounded accents and color | Moderate, playful | Startups, indie products, youth brands | Can look inconsistent if overused |
| Organic | Soft shapes, blob/wave dividers, natural color palette, hand-drawn accents | Gentle, flowing | Wellness, food, children's brands, sustainability | Can undercut authority for B2B |
| Tactile / Craft | Texture, grain, paper-like surfaces, warm neutral palette | Subtle | Artisan goods, craft businesses, boutique hospitality | Slower to build, asset-heavy |
| Industrial | Dark neutrals, monospace accents, exposed structure, utilitarian icons | Sharp, mechanical | Manufacturing, logistics, hardware/dev tools | Can feel unapproachable for consumer brands |
| Neo-futurist | Dark backgrounds, gradient glows, sharp geometry, glassy surfaces | Moderate-heavy, glow/parallax | AI/tech products, gaming, crypto/web3 | Overused in AI-startup category — needs a distinct twist |
| Bento / Modular | Grid of contained cards at varying sizes, each a self-contained fact | Light, per-card hover states | Product feature pages, app landing pages | Purposeless if every section becomes a bento grid |
| Glass / Translucent | Frosted-glass surfaces, layered depth, soft shadows | Moderate | Dashboards, premium consumer apps | Accessibility risk — verify contrast over busy backgrounds |
| Cinematic | Full-bleed imagery/video, dramatic type, dark-to-light reveals | Heavy, scroll-timed | Automotive, real estate, film, high-end product | Needs real hero-quality media, not stock filler |
| Immersive / Spatial | 3D scenes, scroll-scrubbed camera movement, layered parallax | Heavy | Architecture, luxury product, flagship launches | Highest performance/accessibility risk — always needs a fallback |
| Warm Corporate | Rounded cards, approachable illustration, blue/teal-led palette | Light-moderate | Healthcare, fintech-for-consumers, education | Can look templated without a distinct illustration style |
| Data-dense / Dashboard | Compact spacing, strong table/chart hierarchy, status color system | Minimal, functional | Analytics tools, admin panels, B2B SaaS | Never sacrifice legibility for style here |
| Retail / Commerce-forward | Product-photo-led grids, clear price/CTA hierarchy, filter-first UX | Light | E-commerce, marketplaces | Discovery and speed beat visual flourish |
| Playful / Vibrant | Saturated color, rounded type, illustrated mascots or icons | Moderate, bouncy easing | Consumer apps, kids' products, entertainment | Can undermine trust for regulated industries |
| Monochrome Luxury | Near-black/near-white only, one metallic or jewel-tone accent | Slow, deliberate | High fashion, jewelry, private/members-only brands | Needs exceptional photography — nothing to hide behind |
| Archival / Documentary | Muted tones, serif body text, timeline-led storytelling | Light, scroll-paced | Nonprofits, heritage brands, long-form journalism | Pace must match real narrative, not filler copy |
| Command-center Dark | Deep dark background, neon/status accent colors, monospace data | Sharp, real-time-feeling | Security, DevOps, trading/finance tools | Must remain scannable — don't let glow effects reduce contrast |

## 2. Color Palette Library

Grouped by mood. Hex values are starting points — always confirm against the
business's existing brand assets before treating them as final, and always
check contrast (see UX/accessibility checklist below).

**Trust / Corporate**
- Bank Blue — primary `#0B4F9C`, secondary `#0A2E5C`, accent `#2FA8E0`, bg `#F7F9FC`
- Slate Confidence — primary `#1E293B`, secondary `#334155`, accent `#0EA5E9`, bg `#F8FAFC`
- Healthcare Calm — primary `#1B7F79`, secondary `#0F3D3A`, accent `#5FD4C4`, bg `#F5FBFA`

**Luxury / Editorial**
- Ink & Gold — primary `#0A0A0A`, secondary `#1C1C1C`, accent `#C9A24B`, bg `#FAFAF8`
- Bordeaux — primary `#3B0A1A`, secondary `#1A0509`, accent `#D9A441`, bg `#FBF6F2`
- Ivory Minimal — primary `#111111`, secondary `#4A4A4A`, accent `#8C7A5B`, bg `#FBFAF7`

**Vibrant / Playful**
- Sunset Pop — primary `#FF5A5F`, secondary `#FFB400`, accent `#5F5AFF`, bg `#FFFDF8`
- Candy Tech — primary `#7C3AED`, secondary `#EC4899`, accent `#22D3EE`, bg `#FAFAFF`
- Citrus Fresh — primary `#16A34A`, secondary `#FACC15`, accent `#F97316`, bg `#FBFDF9`

**Dark / Cinematic / Neo-futurist**
- Void Neon — primary `#0F0F0F`, secondary `#1A1A1A`, accent `#7CFFCB`, text `#EAEAEA`
- Deep Violet Glow — primary `#0D0B1E`, secondary `#181430`, accent `#A78BFA`, text `#F1EEFB`
- Carbon & Amber — primary `#111214`, secondary `#1C1E22`, accent `#F5A524`, text `#ECECEC`

**Organic / Natural**
- Sage & Clay — primary `#5B7A5B`, secondary `#8C6A4F`, accent `#D98E5B`, bg `#F7F4EE`
- Ocean Calm — primary `#1F6F78`, secondary `#123B42`, accent `#8FD0C3`, bg `#F3FAF9`
- Terracotta Warm — primary `#B5563A`, secondary `#7A3524`, accent `#E8B04B`, bg `#FBF6F0`

**Minimal / Neutral**
- Pure Grayscale — primary `#0A0A0A`, secondary `#6B6B6B`, accent `#0A0A0A` (mono, use weight/space for hierarchy), bg `#FFFFFF`
- Warm Paper — primary `#2B2823`, secondary `#6E6659`, accent `#B0472F`, bg `#F6F1E8`
- Cool Studio — primary `#1A1A1F`, secondary `#5A5A66`, accent `#3D5AFE`, bg `#F5F5F8`

Semantic tokens to define regardless of palette: `success`, `warning`,
`error`, `info` — pick these for legibility and convention (green/amber/red/
blue-family) rather than forcing them to match the brand accent.

## 3. Font Pairing Library

Heading / Body / (optional accent), source, and mood. All available on
Google Fonts unless noted.

| Pairing | Heading | Body | Accent | Mood | Best for |
|---|---|---|---|---|---|
| 1 | Fraunces | Inter | — | Editorial, warm-serious | Agencies, personal brands, editorial |
| 2 | Playfair Display | Source Sans 3 | — | Classic luxury | Fashion, jewelry, hospitality |
| 3 | Space Grotesk | Inter | JetBrains Mono | Technical-modern | SaaS, dev tools, startups |
| 4 | General Sans (Fontshare) | Inter | — | Clean neutral | Product landing pages |
| 5 | Clash Display (Fontshare) | Satoshi (Fontshare) | — | Bold contemporary | Creative studios, product launches |
| 6 | Cormorant Garamond | Karla | — | Delicate editorial | Beauty, wellness, boutique retail |
| 7 | Archivo Black | Archivo | — | Confident/brutalist | Culture, events, youth brands |
| 8 | Bricolage Grotesque | Inter | — | Friendly-modern | Consumer apps, community platforms |
| 9 | Instrument Serif | Inter | — | Soft editorial | Personal brands, newsletters |
| 10 | Sora | Inter | — | Approachable-tech | Fintech-for-consumers, education |
| 11 | Libre Caslon Text | Libre Franklin | — | Trustworthy-traditional | Law, finance, institutions |
| 12 | Unbounded | Manrope | — | Expressive-geometric | Entertainment, gaming, events |
| 13 | Anton | Work Sans | — | High-impact headline | Sports, fitness, bold retail |
| 14 | Newsreader | Inter | — | Long-form editorial | Journalism, blogs, documentation |
| 15 | Bespoke Serif (Fontshare) | Supreme (Fontshare) | — | Premium-contemporary | High-end product, architecture |
| 16 | Chivo Mono | Chivo | Chivo Mono | Data-technical | Dashboards, analytics, DevOps tools |

Import method: Google Fonts pairs load via `<link>` or `@import`; Fontshare
pairs load via their own CDN link — mention this explicitly in the font
prompt so the coding tool doesn't guess.

## 4. Motion Preset Library

Named, reusable motion behaviors for the animation-direction step. Each
should become a token (duration/easing/trigger), not a one-off per section.

| Preset | Effect | Typical trigger | Best for | Caution |
|---|---|---|---|---|
| Fade-Up Reveal | Element fades + moves up 20-40px into place | Viewport enter, once | Any section entrance | Keep under 600ms or it reads as sluggish |
| Text Split Reveal | Headline splits per line/word, staggers in | Viewport enter, once | Hero headlines, section intros | Never on every heading — reserve for key moments |
| Parallax Depth | Background/foreground move at different scroll speeds | Continuous scroll | Hero imagery, storytelling sections | Disable or dampen on mobile; respect reduced-motion |
| Pin & Scrub | Section pins while content scrubs through scroll progress | Scroll-linked | Product walkthroughs, process steps | Must not trap scroll — always allow skip/escape |
| Magnetic Button | CTA subtly follows cursor within a small radius | Pointer move, desktop only | Primary CTAs only | Never on touch devices; never on more than 1-2 buttons |
| Stagger Grid | Grid/card items reveal in sequence with fixed delay | Viewport enter | Feature grids, portfolios, pricing cards | Cap stagger delay so last item doesn't lag too far behind |
| Smooth Scroll (Lenis) | Inertia-based scroll replaces native scroll | Global | Cinematic/immersive sites | Must remain fully usable with scroll wheel, touch, and keyboard |
| Cursor Follower | Custom cursor reacts to hoverable elements | Pointer move, desktop only | Creative/agency, portfolio sites | Must not appear on touch; must not obscure content |
| Marquee / Ticker | Continuous horizontal scroll of logos, tags, or text | Auto, continuous | Client logos, tag clouds | Pause on hover; respect reduced-motion (static fallback) |
| Counter Count-Up | Numbers animate from 0 to target value | Viewport enter, once | Stats sections, proof sections | Keep duration short (under ~1.5s) so it doesn't feel gimmicky |
| Card Tilt (3D hover) | Card tilts toward cursor on hover using perspective transform | Pointer move | Feature/product cards, sparingly | One tilt style per page; not on every card |
| Preloader Reveal | Brief branded loading sequence before first paint | Page load | Cinematic/immersive/3D-heavy sites | Must have a hard timeout and skip on repeat visits |
| Section Morph | Background color/shape transitions as user scrolls between sections | Scroll-linked | Long single-page sites | Keep transitions short; don't fight text legibility mid-morph |
| Scroll-Triggered Video | Video scrubs or plays in sync with scroll position | Scroll-linked | Product demos, automotive, cinematic hero | Provide poster fallback and reduced-motion static frame |

Global rule: every preset needs a stated purpose (draw attention, show
sequence, communicate depth) and a `prefers-reduced-motion` fallback that
keeps content fully readable without it.

## 5. Chart Type Library

For dashboards, analytics products, and data-forward marketing sections.

| Chart | Use case | Library note |
|---|---|---|
| Line | Trends over time (revenue, growth, usage) | Recharts / Chart.js / D3 |
| Area / Stacked Area | Cumulative trend or part-to-whole over time | Recharts / D3 |
| Bar (vertical) | Compare discrete categories | Recharts / Chart.js |
| Bar (horizontal) | Compare categories with long labels | Recharts / Chart.js |
| Grouped Bar | Compare categories across 2-3 series | Recharts / Chart.js |
| Donut / Pie | Simple part-to-whole, ≤5 segments | Chart.js — avoid for >5 segments, use a table instead |
| Radial Progress | Single metric vs. goal (e.g. quota, completion) | Custom SVG / Chart.js |
| Sparkline | Compact inline trend inside a table row or card | Custom SVG / D3 |
| Heatmap | Density/frequency across two dimensions (time x day, etc.) | D3 |
| Funnel | Conversion stages (signup → activation → purchase) | Custom SVG / D3 |
| Scatter | Correlation between two numeric variables | Recharts / D3 |
| Gauge | Single KPI against a threshold/range | Custom SVG |
| Candlestick | Financial price movement (OHLC) | Lightweight-charts / D3 |
| Waterfall | Sequential positive/negative contributions to a total | D3 / custom |

Rule: never pick a chart type for visual novelty — pick the one that answers
the underlying business question fastest. Always define empty, loading, and
single-data-point states.

## 6. Expanded UX Guideline Checklist (by domain)

Add to the base UX intelligence checklist in `design-intelligence.md` when
the relevant domain applies to the business.

**Forms**
- Inline validation on blur, not just on submit
- Error messages state what's wrong and how to fix it, next to the field
- Required fields marked consistently; don't mark every field if most are required — mark the exception instead
- Multi-step forms show progress and allow going back without losing data
- Autofill-friendly `autocomplete` attributes and sensible `inputmode`

**Navigation**
- Current page/section indicated in nav
- Mobile nav reachable with one thumb; tap targets ≥44px
- Sticky nav shrinks or de-emphasizes on scroll rather than always staying full-size
- Breadcrumbs for any content deeper than 2 levels

**E-commerce / Product**
- Price, availability, and primary CTA visible without scrolling on product cards
- Filter state is shareable/bookmarkable via URL when feasible
- Cart changes confirm visibly (not just a silent count change)
- Out-of-stock state is distinct, not just grayed out with no explanation

**Booking / Scheduling**
- Selected date/time persists if the user navigates back
- Timezone is explicit when relevant
- Confirmation state (page + message) is unambiguous — never rely on a redirect alone

**Dashboards / Data-dense UI**
- Default view answers "is everything okay?" at a glance
- Dense tables support sort, and column meaning doesn't rely on color alone
- Destructive actions require confirmation and are visually distinct from safe actions

**Mobile-specific**
- No hover-dependent information — everything reachable via tap
- Fixed bottom bars don't cover content or overlap the keyboard on form focus
- Horizontal scroll sections have a visible affordance (partial next-card peek)

**Error / Empty / Loading states**
- Every list/grid has a designed empty state, not a blank area
- Loading states use skeletons over spinners for content-shaped areas
- 404 and error pages offer a way back, not a dead end

## 7. Expanded Stack Notes

Additive to the stack intelligence in `design-intelligence.md` — use only
when the business/tech step actually selects one of these.

**Vue / Nuxt**
- Prefer Nuxt's file-based routing and auto-imports for structure clarity
- Use `<Transition>`/`<TransitionGroup>` for simple state transitions before reaching for a heavier animation library
- Islands/SSR choice should follow the same static-first bias as Astro when content is marketing-led

**Svelte / SvelteKit**
- Lean on Svelte's built-in transitions/motion store for light interactions
- Reach for GSAP only when the motion is complex enough to need timeline control
- SvelteKit's load functions keep data-fetching out of components — keep components presentation-focused

**Framer Motion (React alternative to GSAP)**
- Better fit than GSAP for component-level, state-driven animation (enter/exit, layout transitions)
- GSAP remains the better fit for scroll-scrubbed, timeline-heavy, or cross-framework-agnostic motion
- Don't mix both libraries for the same interaction — pick one per concern

**No-code (Webflow / Framer site builder)**
- Recommend only when the business needs ongoing self-editing by non-developers and the interview signals low technical capacity
- Note the trade-off explicitly: faster iteration, but less control over custom interactions/3D
- Still apply the same color/typography/UX reasoning — the output becomes a build spec for the no-code tool instead of code

## 8. Icon System Notes

- Default to one coherent icon set (e.g. Lucide, Phosphor, Heroicons) for the whole project — never mix sets
- Icon weight/style should match the chosen visual style (e.g. thin-line for Minimal/Swiss, filled/bold for Playful/Brutalist)
- Every icon-only control needs an accessible name (`aria-label` or equivalent), regardless of stack
