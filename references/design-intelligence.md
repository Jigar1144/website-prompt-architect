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


## Decision quality protocol v2

Treat the design library as a searchable decision system, not a menu.

For every recommendation:
1. Identify the business/product type.
2. Identify visitor intent and conversion pressure.
3. Filter candidates by hard constraints (accessibility, performance, stack).
4. Score the remaining candidates on business fit, intent fit, content fit,
   conversion fit, visual coherence, and complexity cost.
5. Select one primary candidate and one fallback.
6. Explain the tradeoff in one or two sentences.
7. Lock the approved result as a versioned design-system decision.

Never expose the user to a large unranked catalog. Search the catalog, reason
over it, then present the smallest decision set that is genuinely useful.

## Catalog capability contract

The architecture supports expanded searchable catalogs for:
- UI styles
- Color palettes
- Font pairings
- Chart types
- Technology stacks
- UX guidelines
- Industry/product reasoning rules

The prompt engine must treat catalog size as data, not as hard-coded prose.
When a catalog is expanded, the selector/ranker automatically benefits from
the new entries without changing prompt structure.

### Feature mapping

UI STYLE → visual system + component treatment + motion defaults
COLOR PALETTE → semantic tokens + contrast checks + photo compatibility
FONT PAIRING → hierarchy + responsive wrapping + loading strategy
CHART TYPE → business question + data density + empty/loading states
TECH STACK → implementation constraints + performance budget
UX GUIDELINE → interaction/state requirement + accessibility requirement
REASONING RULE → industry-specific weighting + anti-pattern filter

## Conflict resolution

When catalog candidates disagree:
1. Existing brand assets win.
2. Accessibility wins over decoration.
3. Business comprehension wins over novelty.
4. Conversion intent wins over ornamental complexity.
5. Performance budget wins over heavy effects.
6. Approved design-system decisions win over downstream model improvisation.

Record the reason when a lower-ranked candidate is selected.

## Design-system lock

After approval, emit:

DESIGN SYSTEM VERSION
PATTERN
STYLE
COLOR SYSTEM
TYPOGRAPHY
COMPONENT LANGUAGE
ICON SYSTEM
MOTION TOKENS
SPACING / RADII
RESPONSIVE RULES
ACCESSIBILITY RULES
PERFORMANCE BUDGET
ANTI-PATTERNS
ART DIRECTION VERSION

Downstream prompts must consume this lock verbatim. They may add page-specific
overrides, but must not silently redefine the global system.

## Image prompt linkage

Every visual asset brief must resolve against the design-system lock and, when
relevant, the shared ART DIRECTION LOCK.

The image selector must know:
- business/product type
- section purpose
- visual style
- palette
- typography-safe area
- target viewport
- desired crop
- focal point
- continuity neighbor
- performance constraints

If any of these materially affect the asset, include them in the image prompt.
Do not leave critical visual decisions implicit.

## Reasoning v3 — Accuracy Layer

The reasoning engine must optimize for **correct decisions, not maximum creativity**.
Use this order whenever signals conflict:

1. Explicit user facts and approved constraints
2. Business goal / conversion intent
3. Audience needs and trust model
4. Industry-specific evidence
5. Existing brand/assets/content signals
6. Experience preference
7. Catalog defaults
8. Novel creative experimentation

### Evidence ladder

Every major recommendation should be traceable to one of:
- `EXPLICIT` — directly stated by the user
- `DERIVED` — strongly implied by business + goal
- `CATALOG` — selected from the design library
- `DEFAULT` — safe fallback used only when evidence is missing

Never present a DEFAULT as if it were an EXPLICIT brand decision.

### Confidence rules

Assign a confidence score to major decisions.
- 0.90–0.99: directly stated or strongly constrained
- 0.75–0.89: high-confidence industry/goal inference
- 0.55–0.74: reasonable default; safe to propose
- below 0.55: unresolved; ask only if it would materially change the result

### Decision matrix

For each competing pattern/style/stack choice evaluate:
`business fit + goal fit + audience fit + trust fit + content fit + conversion fit + implementation fit + accessibility fit + performance fit - assumption penalty - contradiction penalty - unnecessary complexity`.

A visually impressive option must lose when it weakens clarity, trust,
conversion, performance, or maintainability.

### Industry inference guardrails

Use industry knowledge to infer **requirements**, not facts.
For example, a construction company can safely imply the importance of project proof,
materials, process transparency, quality, and enquiry flow. It must not imply years of
experience, certifications, completed-project counts, awards, or named clients unless provided.

### Minimal-question rule

Do not ask a question merely because the answer could improve polish.
Ask only when the missing answer can materially change:
- conversion strategy
- core information architecture
- brand identity constraints
- mandatory functionality
- legal/safety/accessibility needs
- technical feasibility

Everything else should become a labelled assumption/default and be easy to override.

### Cross-stage consistency check

Before final output, verify:
`Business → Goal → Audience → Pattern → Style → Color → Typography → UX → Motion → Assets → Stack`.
If a downstream choice conflicts with an upstream decision, resolve it using the priority order above instead of silently drifting.

### Anti-hallucination rule

Never invent:
- business history
- certifications
- client names
- testimonials
- performance numbers
- project counts
- pricing
- locations
- guarantees
- awards
- product claims

Use placeholders or clearly marked content requirements instead.

### Recommendation quality rule

A recommendation is considered accurate only when it includes:
1. the selected decision,
2. why it fits the business and goal,
3. what tradeoff it introduces,
4. what is explicitly locked vs inferred,
5. what would cause the recommendation to change.
