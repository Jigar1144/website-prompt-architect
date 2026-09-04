# Design Intelligence Engine

This is an integrated design-reasoning layer inspired by modern design-system
workflows. It is not a copy of any external skill and does not depend on an
external CLI, script, or data sync step — everything it needs lives in this
skill folder.

Concrete candidates (named styles, palettes with hex values, font pairings,
motion presets, chart types, and expanded UX/stack notes) live in
`references/design-library.md`. This file decides *which* domains matter and
*how* to reason about them; `design-library.md` supplies the *options* to
choose from once you know.

## Objective

Turn:
business + visitor intent + page goal + experience + stack
into a coherent design system that downstream prompts must follow.

## Reasoning domains

Evaluate these domains when relevant:

1. PRODUCT / INDUSTRY
2. LANDING PATTERN
3. VISUAL STYLE
4. COLOR
5. TYPOGRAPHY
6. UX / INTERACTION
7. MOTION
8. ICON / CONTROL LANGUAGE
9. RESPONSIVE BEHAVIOR
10. ACCESSIBILITY
11. PERFORMANCE
12. STACK IMPLEMENTATION

Do not query every domain for every project. Use the domains that materially
affect the decision.

## Industry profile

Build a compact profile:

INDUSTRY:
VISITOR INTENT:
TRUST MODEL:
CONVERSION MODEL:
CONTENT DENSITY:
VISUAL OPPORTUNITY:
MOTION TOLERANCE:
ACCESSIBILITY SENSITIVITY:
PERFORMANCE SENSITIVITY:

Examples of industry-specific reasoning:

- SaaS: clarity, product comprehension, proof, integrations, conversion.
- Finance: trust, legibility, restrained motion, strong status semantics.
- Healthcare: clarity, accessibility, calm hierarchy, low distraction.
- E-commerce: product discovery, comparison, filtering, purchase confidence.
- Restaurant/Cafe: atmosphere, menu discovery, location/booking, photography.
- Luxury: materiality, editorial typography, controlled motion, scarcity.
- Creative/Agency: expressive art direction, work showcase, narrative motion.
- Architecture: spatial composition, project imagery, restrained editorial UI.
- Local services: trust, contact/booking, location, fast loading.
- Portfolio: work-first hierarchy, distinctive transitions, concise navigation.

These are starting rules, not fixed templates.

## Pattern selection

Choose a landing/page pattern from the business goal:

- Hero + Proof + CTA
- Hero + Product Story
- Editorial Story
- Service Discovery
- Portfolio / Case Study
- Product Showcase
- Gallery-led
- Booking-led
- Conversion-led
- Immersive / Cinematic
- Dashboard / Data-led
- Long-form Story

Score candidates:

FIT = business fit + intent fit + content fit + conversion fit
       + experience fit - complexity penalty

Return the winner and one fallback.

## Style selection

19 named styles with concrete tendencies live in `design-library.md` §1
(Style Library) — from Minimal and Editorial through Neo-futurist, Bento,
Cinematic, Immersive, and more specific ones like Command-center Dark or
Monochrome Luxury. Shortlist 3-4 that fit the business profile and present
those, each with its "watch out for" risk — never present the full table.

Select style from the business profile, not trend popularity.

## Color reasoning

Generate:
- Primary
- Secondary
- Accent / CTA
- Background
- Surface
- Text
- Muted text
- Border

Rules:
- Check contrast for text and controls.
- Do not use color as the only status signal.
- Accent must have a clear hierarchy.
- Avoid automatic "purple gradient" defaults.
- Do not force dark mode.
- Keep the palette compatible with photography and brand assets.

Named starting palettes with hex values, grouped by mood (Trust/Corporate,
Luxury/Editorial, Vibrant/Playful, Dark/Cinematic, Organic/Natural, Minimal/
Neutral), live in `design-library.md` §2. Use them as starting points and
always confirm against real brand assets before treating them as final.

## Typography reasoning

Select roles:
- Display
- Heading
- Body
- UI / labels

Evaluate:
- brand personality
- readability
- language/locale needs
- numeric/data requirements
- responsive wrapping
- font loading cost

Do not choose typography only because it is visually fashionable.

16 named heading/body pairings with source and mood live in
`design-library.md` §3 — pick 3-4 that fit the selected style and business
positioning for the font-system interview step.

## UX intelligence

Check:
- navigation clarity
- primary CTA visibility
- form friction
- error/recovery states
- loading states
- empty states
- confirmation states
- touch targets
- keyboard navigation
- focus visibility
- semantic controls
- cancellation / interruption behavior

When the business involves forms, e-commerce, booking/scheduling, a
dashboard, or is primarily used on mobile, also apply the matching
domain-specific checklist in `design-library.md` §6.

## Resilient content

Always test:
- long headings
- long URLs
- long identifiers
- translated text
- multi-line chips
- badges
- buttons
- labels
- browser zoom
- text scaling
- narrow mobile widths

Never rely on a specific word remaining on a specific line.

## Motion reasoning

14 named, reusable motion presets (Fade-Up Reveal, Text Split Reveal,
Parallax Depth, Pin & Scrub, Magnetic Button, Stagger Grid, Smooth Scroll,
Cursor Follower, Marquee, Counter Count-Up, Card Tilt, Preloader Reveal,
Section Morph, Scroll-Triggered Video) live in `design-library.md` §4, each
with its typical trigger, best-fit business type, and a caution. Choose from
this list instead of inventing a bespoke effect per section — reusing named
presets as tokens is what keeps motion feeling designed instead of random.

## Chart reasoning (data-forward sites only)

For dashboards, analytics products, or any marketing site with a data/stats
section, 14 named chart types with use-case and library notes live in
`design-library.md` §5. Pick the chart that answers the underlying business
question fastest, not the most visually novel one, and always define empty/
loading/single-data-point states.

## Icon and control rules

- Prefer a coherent SVG icon system.
- Do not use emoji as interface icons.
- Icon-only buttons need accessible names.
- Decorative icons must not create unnecessary accessibility noise.
- Clickable elements must look and behave clickable.
- Essential actions must not depend only on hover.

See `design-library.md` §8 for icon-set consistency notes.

## Stack intelligence

### Next.js / React
Prioritize:
- semantic components
- server/client boundary discipline
- image optimization
- metadata/SEO
- accessible interactive components
- stable layout to reduce CLS

### Astro
Prioritize:
- static-first rendering
- minimal client islands
- progressive enhancement
- asset optimization

### GSAP
Use:
- timeline ownership
- ScrollTrigger for intentional scroll relationships
- cleanup on unmount
- transform/opacity where possible
- reduced-motion branch

### Lenis
Use:
- one scroll owner
- predictable integration with GSAP
- disable/reduce behavior when appropriate
- do not make smooth scrolling required for usability

### React Three Fiber / Three.js
Use only when 3D materially improves the experience.
Require:
- lazy loading
- device capability strategy
- reduced-motion fallback
- static/image fallback
- disposal and resource cleanup
- mobile simplification

### Tailwind / CSS
Use tokens and semantic variables.
Avoid scattering arbitrary values when they belong in the design system.

### Other stacks
If the approved technology direction is Vue/Nuxt, Svelte/SvelteKit, Framer
Motion (as a GSAP alternative), or a no-code builder (Webflow/Framer site
builder), use the additive notes in `design-library.md` §7 — the same
color/typography/UX reasoning above still applies; only the implementation
guidance changes.

## Design-system master + page overrides

The generated design system should conceptually use:

design-system/
├── MASTER.md
└── pages/
    ├── home.md
    ├── menu.md
    └── contact.md

MASTER is the global source of truth.
Page overrides may change only what is intentionally different.

Priority:
PAGE OVERRIDE → MASTER → APPROVED ART DIRECTION

If no page override exists, use MASTER.

## Recommendation output

Return:

RECOMMENDED DESIGN SYSTEM
- Pattern:
- Style:
- Primary:
- Secondary:
- CTA:
- Background:
- Surface:
- Text:
- Typography:
- Key effects:
- UX priorities:
- Motion tier:
- Stack:
- Anti-patterns:
- Accessibility risks:
- Performance risks:
- Why it fits:

ALTERNATIVE
- Pattern:
- Style:
- Why it might be better:

## Anti-pattern engine

Reject or flag:
- generic AI gradients
- random glassmorphism
- excessive rounded cards
- repeated bento grids without purpose
- every section using the same layout
- every heading using character animation
- every card using 3D tilt
- hover-only information
- color-only states
- poor contrast
- tiny touch targets
- decorative motion that competes with conversion
- unnecessary dark mode
- unnecessary WebGL
- fake testimonials or invented business facts

## Pre-delivery score

Score each 0–2:

Business fit
Intent clarity
Pattern fit
Visual coherence
Typography
Color/accessibility
Interaction hierarchy
Motion purpose
Responsive resilience
Performance
Technical correctness
Content resilience

Total:
0–24

Target:
22–24 = agency-ready
18–21 = revise weak areas
<18 = regenerate design direction
