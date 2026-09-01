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


## Prompt compilation + validation loop v2

After every approval, compile a versioned `SOURCE OF TRUTH` object before
generating downstream prompts.

ORDER
APPROVED DECISIONS
→ DESIGN-SYSTEM VERSION
→ ART-DIRECTION VERSION
→ SECTION PURPOSE
→ ASSET ROLE
→ PROMPT COMPILATION
→ SELF-CHECK
→ OUTPUT

### Compilation rules

A downstream prompt must never rely on memory or on an earlier prompt being
visible to the receiving model. Repeat the minimum required context inline.

Every prompt includes:
- locked decisions
- open variables
- success criteria
- hard constraints
- validation checks
- fallback behavior

### Image loop

For image assets use:

BRIEF
→ COMPOSITION PLAN
→ IMAGE GENERATION
→ ACCEPTANCE TEST
→ ACCEPT / REVISE

Only revise objective failures. Do not use open-ended "make it better"
feedback because that commonly causes style drift and repeated regeneration.

When revision is needed, modify only the failed dimension:
subject / framing / crop / lighting / material / continuity / artifacting.
Keep every other approved dimension unchanged.

### Revision instruction template

REVISION TYPE
[ONE failed dimension only]

KEEP UNCHANGED
- Art direction
- Subject
- Camera family
- Palette family
- Lighting direction
- Composition intent
- Safe crop
- Continuity

CHANGE ONLY
[Exact failed property.]

SUCCESS TEST
[One objective sentence.]

This keeps iterative image generation surgical rather than exploratory.

## Compressed intake implementation

Use four bundled user turns at most:
BUSINESS → OUTCOME → DIRECTION → EXCEPTIONS

The system must map each bundle into the full latent project state. The question count is reduced; the downstream design and prompt specification is not.

### No-loss rule
A shorter interview must never mean a shorter production prompt. After intake, the compiler expands inferred values back into the same required output contract:
- industry reasoning
- visitor intent
- landing pattern
- UI style
- color palette
- typography pairing
- UX/accessibility rules
- motion profile
- tech stack
- responsive strategy
- art direction lock
- image prompt constraints
- success criteria
- validation

### Follow-up threshold
Ask one micro-follow-up only when all three are true:
1. the value is not inferable with reasonable confidence,
2. it changes a major architectural or creative decision,
3. a wrong assumption would create expensive rework.

Never ask follow-ups for low-impact preferences that can be safely defaulted.

## Reasoning accuracy phase v3

Before design selection:

SPARSE INTERVIEW
→ NORMALIZE SIGNALS
→ INDUSTRY PROFILE
→ INTENT + CONVERSION MODEL
→ EVIDENCE CLASSIFICATION
→ CANDIDATE SCORING
→ CONFLICT RESOLUTION
→ CONFIDENCE CHECK
→ SAFE DEFAULTS
→ DESIGN-SYSTEM REASONING

### Required reasoning outputs

For each major decision store:
- decision
- source (`EXPLICIT`, `DERIVED`, `CATALOG`, `DEFAULT`)
- confidence
- business/goal rationale
- tradeoff
- locked status
- change trigger

### Revision rule

When new user information arrives, revise only decisions downstream of the changed signal.
Do not regenerate unrelated approved decisions.

Example:
Changing `audience` may update messaging, proof hierarchy, imagery, and CTA treatment;
it should not automatically replace an already-approved logo treatment or tech stack unless
those decisions depend on the audience change.

### Accuracy gate

Reject the final prompt pack when any of these occur:
- an inferred detail is phrased as a verified fact
- an industry recommendation contradicts the explicit goal
- an aesthetic choice has no business/content rationale
- an interaction is added only because it is trendy
- a required feature has no mobile/accessibility behavior
- image direction conflicts with the locked art direction
- a later prompt drops a critical approved decision
