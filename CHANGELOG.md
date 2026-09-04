# Changelog

## v6.0 — Merged V5 Production Intelligence Layer

The standalone V5 add-on is now merged into this single SKILL.md instead
of being a separate file you load alongside it.

Added:
- **Round 4** of the interview: differentiation & objections (two
  questions, one message, right after Round 3) — the interview is now
  4 rounds, not 3.
- **Production Intelligence Layer** (new section, runs after Round 4,
  before output): Page Architecture Engine, Component Architecture
  Engine, Anti-Hallucination Content Gate, Copywriting & Messaging
  Engine, SEO + Technical SEO Engine, Accessibility + Performance
  Engine, Analytics Plan, Design Tokens as Code, Competitive Reference &
  Differentiation Teardown, and an AI Coding-Agent Master Handoff.
- A "one signature interaction" addendum to the existing Motion &
  Interaction Engine — one deliberate, ownable interaction per site
  instead of just a LIGHT/MODERATE/HEAVY tier.
- Quality checklist expanded to check the Content Trust Register, the
  copy system, image prompt completeness, SEO coverage, contrast/
  reduced-motion, the signature interaction, design tokens as code, and
  the competitive differentiation paragraph.

Fixed:
- Reference files (`prompts.md`, `pipeline.md`) had leftover "ask one
  question at a time" guidance from before the 3-round consolidation in
  v3.7 — now annotated as superseded so they don't contradict the
  interview section in SKILL.md.
- `agency-engine.js`'s two separate module registries merged into one
  file.
- Stray citation artifacts removed from README.md.

## v3.7 — Faster Interview + Paste-Ready Image Prompts

Changed:
- Interview now runs in **3 message rounds instead of ~10** — one wait for
  business identity, one combined "Creative Direction Package" covering
  steps 2-9 (tech, theme, fonts, sections, colors, animation, logo,
  voice) with a single approval question, and one wait for
  business-specific extras. Same underlying analysis, far fewer waits.
- Image prompts are now written as complete, paste-ready generation
  prompts (positive prompt with subject/composition/camera/lighting/
  color/style, a tailored negative prompt, aspect ratio, a shared style
  anchor for visual consistency across assets, and per-tool notes for
  Midjourney/DALL·E/Firefly/Stable Diffusion) instead of a one-line
  description — aimed at cutting the number of regeneration attempts
  needed to get a usable image.

## v3.6 — Expanded Design Library

Added:
- New `references/design-library.md`: self-contained concrete catalog
  (no external CLI/script/data-sync dependency)
- 19 named visual styles with motion tendency, best-for, and risk notes
- 18 named color palettes with hex values, grouped by mood
- 16 named heading/body font pairings with source and mood
- 14 named, reusable motion presets (trigger, best-for, caution)
- 14 chart types for data-forward/dashboard sites
- Domain-specific UX checklists: forms, navigation, e-commerce, booking/
  scheduling, dashboards, mobile-specific, error/empty/loading states
- Additive stack notes for Vue/Nuxt, Svelte/SvelteKit, Framer Motion, and
  no-code builders (Webflow/Framer site builder)
- Icon-system consistency notes
- Wired the new library into `design-intelligence.md` and the "Integrated
  Design-System Intelligence" section of `SKILL.md` so the reasoning engine
  actually draws candidates from it instead of inventing them ad hoc

## v3.5 — Guided Interview

Added:
- Clear decision ladder after Business Type
- Website status / redesign discovery
- Goal and audience clarification
- Offer/content and market questions
- Brand and asset discovery
- Business-relevant feature questions
- Visual taste and experience-level questions
- Technology approval after context
- Page-structure approval
- Required / useful / optional question priority
- Recovery rules for "I don't know", "recommend", and ambiguous answers


## v3.4 — Full Design Intelligence Integration

Added:
- Dedicated design-intelligence reference
- Industry, pattern, style, color, typography and UX reasoning
- Stack-specific implementation rules
- Master design system + page override model
- Candidate scoring and alternative comparison
- Resilient content and accessibility rules
- Anti-pattern engine
- Pre-delivery design-system audit


## v3.3 — Adaptive Interview System

Added:
- Two-question opening: business name + business type
- Progressive follow-up questions
- Business-fit technology approval
- Brand/content discovery
- Experience and motion preference
- Relevant feature discovery
- Visual direction approval
- Section architecture approval
- Interview state helpers
- Rules preventing unnecessary or repetitive questions


## v3.2 — Design Intelligence Integration

Added:
- Industry-aware design-system reasoning
- Style and pattern selection
- Anti-pattern detection
- Production frontend quality checks
- Resilient text/chip/badge guidance
- Design-system contract and validation


## v3.1 — Motion & Interaction Engine

Added:
- Scroll effects library
- Text animation library
- Card interaction library
- Image effects library
- Desktop cursor/pointer effects
- Section transition library
- Scroll choreography
- Section-level animation recipes
- Adaptive animation selection based on business, experience, art direction,
  interaction hierarchy, motion tier, and performance
- Motion hierarchy rules
- Motion budget and high-cost-effect requirements
- Motion prompt templates
- Motion pipeline phase
- Portable motion-selection helpers and animation recipe validation
