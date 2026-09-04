# Website Prompt Architect — Generation Pipeline

This pipeline turns the interview into a production-ready prompt pack.

## Phase 01 — Intake
Input only:
- business name
- business type / industry

Output:
- business classification
- likely visitor intent
- recommended experience archetype

## Phase 02 — Technology recommendation
Evaluate:
- content complexity
- interaction complexity
- SEO needs
- performance sensitivity
- 3D usefulness
- animation opportunity
- integration requirements

Approve one primary stack and 1–2 alternatives.

## Phase 03 — Creative direction
Lock:
- visual identity
- art direction
- theme
- typography
- colors
- spatial system
- motion tier

## Phase 04 — Signature moments
Choose 1–3 high-value moments.
Record purpose, interaction, performance cost, and fallback.

## Phase 05 — Narrative architecture
Map sections to:
HOOK → CURIOSITY → DISCOVERY → PROOF → DESIRE → ACTION

Reorder or adapt the sequence to the business.

## Phase 06 — Section prompt generation
Generate one self-contained prompt per approved section.

Every section prompt must contain:
OBJECTIVE
PROJECT CONTEXT
DESIGN SYSTEM REFERENCE
REQUIREMENTS
SPECIFICATIONS
CONSTRAINTS / RULES

## Phase 07 — Asset pipeline
Generate:
- image direction
- video direction where useful
- icon direction
- social preview direction
- desktop/mobile composition requirements

## Phase 08 — Experience implementation
Generate:
- GSAP
- scroll architecture
- preloader
- responsive behavior
- interaction hierarchy
- optional 3D/WebGL
- reduced-motion fallback

## Phase 09 — Technical quality
Generate:
- SEO
- metadata
- performance
- accessibility
- QA

> Expanded by the Production Intelligence Layer in SKILL.md: the SEO +
> Technical SEO Engine and Accessibility + Performance Engine give this
> phase a full template (page-by-page keywords/schema, contrast checks,
> Core Web Vitals targets) instead of a bare bullet list.

## Phase 10 — $100K Agency Gate
Reject and revise if:
- sections feel templated
- visual language drifts
- typography lacks hierarchy
- every section looks identical
- motion has no purpose
- mobile is only a crop
- heavy effects lack fallback
- business facts were invented

## Final output
Assemble the prompts into a single responsive HTML prompt pack with:
- project summary
- category navigation
- prompt count
- copy buttons
- copied-state indicators
- progress tracking
- mobile-friendly layout

## Optional cinematic pipeline

When cinematic scroll is approved:

ART DIRECTION
→ SCENE BOARDS
→ STILLS
→ CAMERA / MOTION
→ CONNECTORS / HANDOFFS
→ ASSET VALIDATION
→ SCROLL SCRUB
→ MOBILE PORTRAIT
→ VISUAL QA

Every adjacent visual state must have an explicit handoff.


## Motion selection phase

After creative direction and before section implementation:

BUSINESS
→ EXPERIENCE ARCHETYPE
→ SECTION PURPOSE
→ ART DIRECTION
→ MOTION TIER
→ INTERACTION HIERARCHY
→ PERFORMANCE BUDGET
→ MOTION SELECTION
→ SECTION ANIMATION RECIPES
→ GLOBAL SCROLL CHOREOGRAPHY

The selected effects must be documented before implementation.

For every animated section:
- define entry
- define text motion
- define image motion
- define card/interaction motion
- define exit/handoff
- define mobile behavior
- define reduced-motion behavior
- define performance cost

Do not let the coding model invent animation behavior independently for each
section.


## Design intelligence phase

After business analysis and before creative direction:

BUSINESS
→ INDUSTRY / INTENT
→ DESIGN-SYSTEM REASONING
→ STYLE + PATTERN
→ COLORS + TYPOGRAPHY
→ KEY EFFECTS
→ ANTI-PATTERNS
→ ACCESSIBILITY / PERFORMANCE RISKS
→ ART DIRECTION LOCK

This phase creates the design-system contract used by every downstream prompt.


## Adaptive interview phase

> Superseded by "The interview — four rounds, not ten waits" in
> SKILL.md: deliver these as part of the four consolidated rounds,
> not as separate waits. The decision content still applies.

OPENING:
Business Name
→ Business Type

THEN ONLY AS NEEDED:
Goal
→ Audience
→ Brand kit
→ Assets
→ Experience preference
→ Motion level
→ Relevant features
→ Technology approval
→ Visual direction approval
→ Section architecture approval

The interview is progressive. Do not ask all questions at once. Infer safely,
propose defaults, request approval, then lock decisions.


## Full design-intelligence phase

After Business Type and before final creative direction:

INDUSTRY PROFILE
→ VISITOR INTENT
→ PATTERN SEARCH / COMPARISON
→ STYLE SEARCH / COMPARISON
→ COLOR REASONING
→ TYPOGRAPHY REASONING
→ UX / ACCESSIBILITY RULES
→ STACK RULES
→ ANTI-PATTERN FILTER
→ DESIGN-SYSTEM MASTER
→ PAGE OVERRIDES
→ ART DIRECTION LOCK
→ MOTION ENGINE

Persist the approved system conceptually as MASTER + page overrides so every
later prompt remains consistent.

## Design QA phase

Run the design-system audit before the final Agency Gate.
A concept can fail even when it looks premium if it has poor contrast,
responsive failure, inaccessible interactions, fragile text, or unnecessary
technical complexity.


## Guided interview decision map

> Superseded by "The interview — four rounds, not ten waits" in
> SKILL.md: deliver these as part of the four consolidated rounds,
> not as separate waits. The decision content still applies.

Start:
Business Name → Business Type

Then resolve only what is needed:
Website Status → Goal → Audience → Offer/Content → Market
→ Brand/Assets → Relevant Features → Visual Taste → Experience Level
→ Technology → Page Structure → Final Creative Lock

Question priority:
REQUIRED > USEFUL > OPTIONAL

The agent asks one question at a time and can skip inferred or irrelevant
questions. Every approved answer becomes project state and is not re-asked.

## Production Intelligence Layer additions

These run alongside the phases above (see SKILL.md's "Production
Intelligence Layer" section for full templates):

- Page Architecture Engine — multi-page sitemaps only; skip for single-page builds
- Component Architecture Engine — after Phase 06, before Phase 07
- Anti-Hallucination Content Gate — a formal VERIFIED/USER-PROVIDED/
  INFERRED/PLACEHOLDER/MISSING register, checked by every phase below
- Copywriting & Messaging Engine — after the Content Trust Gate, before Phase 07
- Design Tokens as Code — after Phase 03, ships the design system as real CSS/Tailwind
- Competitive Reference & Differentiation Teardown — after Phase 01, before Phase 03
- Analytics Plan — alongside Phase 09
- AI Coding-Agent Master Handoff — the final consolidation before Phase 10
