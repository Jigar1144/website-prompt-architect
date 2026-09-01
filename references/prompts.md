# Website Prompt Architect — Enhanced Prompt Library

> 🎯 **North Star:** every prompt must connect business outcome → user question → design decision → implementation behavior → validation.
>
> 🧭 **Single source of truth:** downstream prompts inherit the approved Creative + Conversion Brief. Never invent missing facts.
>
> ✨ **Premium rule:** sophistication comes from hierarchy, composition, typography, imagery, interaction choreography, and business relevance—not effect count.

## 🧠 Master Context Block

Use this block at the top of every downstream prompt:

```text
BUSINESS:
INDUSTRY:
PRIMARY GOAL:
SECONDARY GOAL:
AUDIENCE:
MARKET:
SEARCH INTENT:
POSITIONING:
DIFFERENTIATOR:
CUSTOMER OBJECTIONS:
OFFER:
TRUST / PROOF:
CONTENT READINESS:
BRAND STATUS:
VISUAL DIRECTION:
TYPOGRAPHY:
COLOR:
MOTION TIER:
VISUAL COMPLEXITY BUDGET:
FRAMEWORK:
ANIMATION SYSTEM:
3D / WEBGL:
CMS / INTEGRATIONS:
MAINTENANCE OWNER:
SEO STRATEGY:
APPROVED PAGES:
APPROVED FEATURES:
CONSTRAINTS:
THINGS TO AVOID:
```

## 🏆 Business Positioning Prompt

**OBJECTIVE**
Turn the approved business context into a clear digital positioning strategy.

**DELIVER**
- One-sentence positioning
- Differentiator
- Primary visitor problem
- Primary promise
- Reasons to believe
- What the brand should never sound like
- Hero direction
- CTA direction

**RULES**
Use only verified business facts. If differentiation is unknown, label the result
as a proposed positioning hypothesis rather than a fact.

## 🔥 Conversion + Objection Prompt

**OBJECTIVE**
Design the website around the visitor's decision journey rather than a generic
collection of sections.

For each important objection, specify:
- objection
- evidence needed
- section/component that resolves it
- copy angle
- CTA or next step
- trust signal

Prioritize the primary conversion action. Secondary actions must never compete
with it visually.

## 📍 SEO + Local SEO Prompt

**OBJECTIVE**
Create an SEO architecture aligned to real search intent.

**DELIVER**
- primary search intent
- keyword/topic clusters
- page-to-intent mapping
- local modifiers where relevant
- service/location page recommendations
- metadata direction
- H1/H2 hierarchy
- internal linking
- structured data opportunities
- local trust signals
- indexation/canonical considerations

Never keyword-stuff. Never fabricate locations, services, reviews, or credentials.

## 🧱 Real-World Constraint Prompt

**OBJECTIVE**
Make the website practical for the business that will operate it.

Evaluate:
- content ownership
- CMS need
- update frequency
- booking/payment/CRM/email integrations
- existing URL/SEO equity
- launch urgency
- team technical ability
- performance constraints
- accessibility/legal requirements
- maintenance burden

Recommend the lowest-complexity architecture that satisfies the constraints.

## 🛡️ Trust / Proof Prompt

**OBJECTIVE**
Turn available proof into a coherent trust system.

Classify each proof item as:
- Available
- Partial
- Missing
- Must not claim

Then assign proof to the most relevant sections. If proof is missing, use process,
clarity, credentials that are actually supplied, transparent expectations, and
strong information architecture instead of invented social proof.

## 🚫 Anti-Overdesign Gate

Before implementation, run:

> If a visual effect does not improve comprehension, hierarchy, emotion,
> understanding, trust, or conversion, remove it.

Flag every High/Extreme complexity decision with:
- purpose
- user benefit
- implementation cost
- performance risk
- fallback

## 🧩 Technology Recommendation Prompt

Recommend from the expanded technology catalog according to business fit:

**Frameworks:** Next.js, Astro, React + Vite, Remix/React Router, Nuxt, SvelteKit,
plain HTML/CSS/JS.

**UI:** Tailwind, CSS Modules, Vanilla CSS/design tokens, shadcn/ui, Radix.

**Motion:** GSAP, Motion for React, Lenis, CSS motion, Lottie.

**3D/creative:** Three.js, React Three Fiber, Drei, WebGL shaders, Spline, PixiJS.

**Content/commerce:** Shopify/Hydrogen, Sanity, Contentful, Storyblok, WordPress,
Stripe, booking/search/map integrations.

For each chosen technology provide:
- why it fits
- what it enables
- what it costs in complexity/performance
- what not to add
- fallback when appropriate

Never choose technology hype over business fit.

## 📱 Responsive Behavior Prompt — Standard, Not Advanced Interview

Implement a coherent responsive experience across mobile, tablet, and desktop.
Do not ask the user to specify breakpoints. Infer sensible breakpoints from the
layout and stack.

Specify:
- navigation behavior
- content stacking
- image cropping
- typography scaling
- CTA priority
- interaction simplification
- motion reduction where needed

Avoid creating separate mobile designs unless the business requirement truly
needs them.



## Intake sequence

The opening must ask only:

1. What is your business name?
2. What type of business is it / what industry?

After those two answers, recommend the technology and experience direction.
Do not dump the whole interview at once.

## Adaptive recommendation template

OBJECTIVE
Recommend the most appropriate website technology and experience for
[Business Name], a [Business Type].

BUSINESS ANALYSIS
- Business category:
- Likely visitor intent:
- Primary trust/conversion need:
- Visual opportunity:
- Complexity risk:

RECOMMENDED STACK
- Framework:
- Animation:
- Smooth scrolling:
- 3D:
- Asset workflow:
- Supporting technologies:

EXPERIENCE ARCHETYPE
[Choose the most appropriate archetype and explain why.]

CREATIVE DIRECTION
- Visual language:
- Emotional goal:
- Signature opportunity:
- What to avoid:

ALTERNATIVES
- Alternative 1 + best-if condition
- Alternative 2 + best-if condition

## Signature moment template

OBJECTIVE
Create a signature experience that makes [Business Name] memorable.

SIGNATURE MOMENT
- Name:
- Purpose:
- Business relevance:
- User emotion:
- Entry state:
- Interaction:
- Exit state:
- Performance cost:
- Fallback:

RULE
Use no more than 1–3 signature moments unless the business clearly requires
more.

## Section narrative template

SECTION: [Name]
POSITION: [X of Y]

PURPOSE
[Why this section exists.]

USER QUESTION
[What the visitor is asking at this point.]

EMOTIONAL STATE
[Desired visitor feeling.]

VISUAL FOCUS
[Primary visual subject.]

CONTENT HIERARCHY
[Headline → support → proof → CTA.]

PREVIOUS HANDOFF
[How the prior section leads into this one.]

NEXT HANDOFF
[How this section prepares the next one.]

MOTION ROLE
[What moves and why.]

## Art direction lock

ART DIRECTION LOCK
- Style:
- Materials:
- Lighting:
- Camera:
- Environment:
- Color treatment:
- Texture/detail:
- Composition:
- Subject scale:
- Typography character:
- Motion character:
- Negative rules:

Every image/video/3D prompt must repeat the relevant lock.

## Visual continuity

ENTRY STATE
[What the visitor sees before the transition.]

MAIN STATE
[Primary composition.]

EXIT STATE
[Where the visual ends.]

NEXT HANDOFF
[Exact visual relationship to the next state.]

Never create accidental visual discontinuity.

## Asset prompt

OBJECTIVE
Produce the assets required for [Business Name].

For each asset specify:
- subject
- composition
- lighting
- material
- mood
- aspect ratio
- focal point
- safe crop
- filename
- desktop/mobile variant
- fallback

If the receiving tool cannot generate media, use:
[IMAGE: description]

Never fabricate asset URLs.

## Premium implementation prompt

OBJECTIVE
Implement the approved visual system for [Business Name].

PROJECT CONTEXT
Restate framework, business, theme, typography, colors, approved sections,
art direction lock, signature moments, interaction hierarchy, motion tier,
responsive strategy, and performance constraints.

REQUIREMENTS
Describe what the implementation must achieve.

SPECIFICATIONS
Describe behavior across desktop/tablet/mobile.

CONSTRAINTS / RULES
No invented business facts. No unrelated visual styles. No unnecessary
effects. Preserve accessibility, performance, and reduced-motion behavior.


## Motion & Interaction prompt templates

### Motion strategy

OBJECTIVE
Create the motion strategy for [Business Name], a [Business Type].

PROJECT CONTEXT
Restate the approved stack, theme, art direction, experience archetype,
motion tier, interaction hierarchy, and performance budget.

REQUIREMENTS
Select only the motion patterns that strengthen the business story.

OUTPUT
- Scroll effects
- Text effects
- Image effects
- Card interactions
- Cursor behavior
- Section transitions
- Scroll choreography
- Mobile behavior
- Reduced-motion behavior
- Performance cost
- Fallback strategy

CONSTRAINTS / RULES
Do not animate everything. No effect without purpose.

### Section animation recipe

SECTION: [Name]
PURPOSE: [Purpose]

ENTER
- Effect:
- Trigger:
- Duration:
- Easing:
- Stagger:

TEXT
- Effect:
- Start:
- End:
- Timing:

IMAGE
- Effect:
- Start:
- End:
- Scroll relation:

CARD / INTERACTION
- Effect:
- Trigger:
- Strength:
- Mobile:

EXIT / HANDOFF
- Effect:
- Relationship to next section:

REDUCED MOTION
- Fallback:

PERFORMANCE
- Cost:
- Asset impact:

### Scroll choreography prompt

OBJECTIVE
Create one coordinated scroll timeline for [Business Name].

RULE
Map meaningful scroll ranges to meaningful visual states. Avoid independent
scroll animations fighting each other.

For each range define:
- Scroll percentage
- Active section
- Visual state
- Text state
- Image state
- Interaction state
- Exit/handoff

### Card interaction prompt

OBJECTIVE
Design card interactions for [Section].

SELECT ONE APPROPRIATE PATTERN
- Lift
- Image zoom
- Border reveal
- Spotlight
- Perspective tilt
- Magnetic behavior
- Expansion
- Hover preview
- Editorial image reveal

RULE
Use the lowest-complexity interaction that communicates the intended state.

### Text motion prompt

OBJECTIVE
Animate typography for [Section].

Choose from:
- Line reveal
- Word reveal
- Character reveal
- Blur-to-sharp
- Mask reveal
- Tracking
- Scale
- Kinetic typography
- Variable font weight
- Editorial line transition

RULE
Do not sacrifice readability for spectacle.

### Motion QA prompt

Verify:
- [ ] No effect is unexplained.
- [ ] Primary interactions have highest motion priority.
- [ ] Major effects are limited per viewport.
- [ ] Scroll-linked effects remain synchronized.
- [ ] No layout-jank animation is used unnecessarily.
- [ ] Touch devices remain native.
- [ ] Mobile has an intentional motion strategy.
- [ ] Reduced-motion behavior is complete.
- [ ] Heavy effects have fallbacks.
- [ ] Motion does not block content or initial interaction.


## Design intelligence prompt

OBJECTIVE
Generate the design system for [Business Name], a [Business Type].

INPUT
- Visitor intent
- Conversion goal
- Experience archetype
- Art Direction Lock
- Technology
- Motion tier
- Performance sensitivity

OUTPUT
PATTERN
STYLE
COLORS
TYPOGRAPHY
KEY EFFECTS
ANTI-PATTERNS
RESPONSIVE PRIORITIES
ACCESSIBILITY RISKS
PERFORMANCE RISKS

RULE
Recommend one coherent system. Do not output a random style catalog.

## Frontend quality prompt

OBJECTIVE
Review the implementation direction for production quality.

VERIFY
- Semantic structure
- Heading hierarchy
- Keyboard focus
- Native interaction semantics
- Responsive text wrapping
- Chip/badge resilience
- Long-content handling
- Reduced motion
- Contrast
- Tap target quality
- Loading/empty/error states
- No essential information hidden behind hover
- No generic AI UI patterns


## Adaptive interview prompts

### Opening

Ask only:

**What is the business / brand name?**

Then:

**What type of business is it?**

Do not ask any other question until both are answered.

### Strategic follow-up

After analysis, ask only the missing decision:

**What is the primary goal of the website?**

Then, only if needed:

**Who is the primary audience?**

### Brand follow-up

Ask:

**Do you already have a logo, brand colors, fonts, photography, or brand
guidelines?**

Offer:
- Existing brand kit
- Partial brand kit
- No brand kit — propose one

### Experience approval

Present the recommended experience, style, typography, colors, motion tier, and
art direction as a proposal and ask:

**Approve / modify?**

### Section approval

Present the proposed page story and ask:

**Approve / add / remove / reorder?**

### Technology approval

Present the recommended stack with a short business-fit explanation and ask:

**Approve, or do you have a preferred stack?**

### Interview rule

Never ask a question whose answer can safely be inferred and confirmed in one
proposal. Keep the interview short, progressive, and decision-oriented.


## Full design-system reasoning prompt

OBJECTIVE
Generate and lock the design system for [Business Name], a [Business Type].

ANALYZE
- Industry
- Visitor intent
- Conversion goal
- Content density
- Trust model
- Experience archetype
- Performance sensitivity

COMPARE
1. Primary pattern/style candidate
2. Alternative pattern/style candidate

SCORE
- Business fit
- Intent fit
- Content fit
- Conversion fit
- Visual coherence
- Complexity cost

OUTPUT
RECOMMENDED DESIGN SYSTEM
- Pattern
- Style
- Colors
- Typography
- UX priorities
- Key effects
- Motion tier
- Stack rules
- Anti-patterns
- Accessibility risks
- Performance risks
- Reason

## Page override prompt

OBJECTIVE
Create a page-specific design override for [Page].

MASTER SYSTEM
[Master design system]

ONLY DEFINE INTENTIONAL DIFFERENCES
- Layout
- Density
- Color exception
- Typography exception
- Interaction exception
- Motion exception
- Content-specific behavior

RULE
If no intentional difference exists, return "No override — use MASTER."

## Pre-delivery design-system audit

CHECK:
- Business fit
- Pattern fit
- Typography
- Color contrast
- Resilient headings
- Long URLs/identifiers
- Chips/badges
- Keyboard focus
- Native controls
- Hover independence
- Reduced motion
- Responsive widths
- Loading/empty/error states
- Stack-specific implementation correctness
- Anti-patterns

Return:
PASS / REVISE
and list only the failed items.


## Guided interview prompt

ROLE
Act as a creative director conducting a short discovery conversation.

OPEN WITH ONLY
1. Business name
2. Business type

AFTER THAT
Ask one question at a time in this order when relevant:
website status → primary goal → audience → offer/content → market
→ brand/assets → relevant features → visual taste → motion level
→ technology approval → page structure → final creative lock.

RULES
- Ask REQUIRED questions first.
- Skip anything already answered.
- Infer safely and ask for confirmation.
- Use simple language.
- Prefer choices over long open-ended questions.
- Never ask users to choose individual animations or technical details before
  the system has enough context.
- If the user says "recommend", make the decision.
- If the user says "yes", map it to the previous question.
- Never overwhelm the user with the whole questionnaire.


## Prompt Reliability Engine v2

Use this protocol for every generated implementation, content, motion, asset, or
image prompt. The goal is to reduce regeneration loops by removing ambiguity
before the receiving model is asked to generate anything.

### Prompt contract

Every prompt must resolve these fields before output:

PROJECT ID
[Stable project/brand identifier.]

TASK
[Exactly one primary job to complete.]

SOURCE OF TRUTH
- Business facts:
- Approved design-system version:
- Approved page/section:
- Approved asset brief:
- Approved stack:
- Approved art-direction version:

DECISIONS ALREADY LOCKED
[List only approved decisions. The model must not reopen them.]

OPEN VARIABLES
[List only values that genuinely remain unknown.]

SUCCESS CRITERIA
- Visual:
- Functional:
- Content:
- Responsive:
- Accessibility:
- Performance:

NON-NEGOTIABLES
[Hard constraints that must never be traded away.]

DO NOT INVENT
[List factual categories that require placeholders.]

OUTPUT FORMAT
[Exact structure expected from the receiving model/tool.]

VALIDATION
[Objective checks the output must pass before it is accepted.]

### Anti-regeneration rules

Before generating, the model must:
1. Convert vague adjectives into observable visual properties.
2. Resolve conflicts by priority: factual accuracy → locked brand system →
   layout/function → accessibility → performance → decoration.
3. Prefer one coherent solution over multiple random variations.
4. Keep subject, camera, lighting, materials, palette, composition, and
   typography consistent with the approved art direction.
5. Never silently change a locked decision. If a constraint is impossible,
   preserve the constraint and state the exact conflict.
6. Generate only what is requested; do not add decorative elements merely to
   fill empty space.
7. Validate against the supplied acceptance criteria before returning the
   result.

### Prompt quality score

Score each generated prompt from 0–2 on:
- Context completeness
- Visual specificity
- Constraint clarity
- Continuity
- Responsive readiness
- Accessibility
- Performance
- Validation clarity

A prompt is `READY` only when no category scores 0.

---

## Enhanced image prompt engine v2

Use this template whenever an image prompt is generated for a website asset.
It is designed to produce a strong first-pass image rather than relying on
multiple trial generations.

```text
OBJECTIVE
Create ONE production-ready website image asset for [BUSINESS NAME].
The image must support [SECTION PURPOSE] and leave the UI readable.

USAGE
- Asset role: [hero / section image / card / background / product / editorial]
- Placement: [exact section + placement]
- Target viewport: [desktop / mobile / both]
- Aspect ratio: [exact ratio]
- Safe crop: [explicit protected area]
- Focal point: [subject + approximate position]
- Text-safe zone: [left/right/top/bottom/none]
- Required crop variants: [desktop / tablet / mobile]

SUBJECT
- Primary subject:
- Secondary subject, if any:
- Subject pose/action:
- Scale in frame:
- Relationship between subjects:
- Objects that MUST appear:
- Objects that MUST NOT appear:

ART DIRECTION LOCK
- Style:
- Materials:
- Lighting:
- Camera:
- Lens / perspective:
- Environment:
- Color treatment:
- Texture/detail:
- Composition:
- Depth of field:
- Motion feel (if cinematic):
- Typography character, if embedded signage is required:

COMPOSITION PLAN
- Foreground:
- Midground:
- Background:
- Leading lines / visual flow:
- Negative space:
- Horizon / vertical alignment:
- Subject placement:
- UI-safe area:
- Crop-safe area:

QUALITY TARGET
- Realism/stylization:
- Detail density:
- Edge quality:
- Material realism:
- Lighting consistency:
- Clean geometry/anatomy/product shape:
- No unintended text/logos/watermarks:

BRAND INTEGRATION
Use the approved palette only as controlled environmental/material accents.
Do not turn the image into a generic color wash.
Preserve the brand's visual hierarchy and mood.

CONTINUITY
- Previous asset / scene ending:
- This asset opening state:
- Next asset / scene beginning:
- Match in lighting:
- Match in camera perspective:
- Match in subject scale:
- Match in motion direction:
- Match in color temperature:

NEGATIVE RULES
Do not introduce:
[LIST OF FORBIDDEN STYLES, OBJECTS, MATERIALS, COLORS, CAMERA ANGLES,
TEXT, EXTRA PEOPLE, DISTORTIONS, UI ELEMENTS, WATERMARKS, ETC.]

OUTPUT
Generate one clean master asset. Do not create alternate concepts unless
the prompt explicitly requests them.
Prioritize the composition and focal subject before secondary detail.
```

### Separate image prompt protocol

For any section requiring multiple images, output a shared `IMG-MASTER-01`
followed by one copyable prompt per image: `IMG-01`, `IMG-02`, etc. If there are
4 images, there must be exactly 5 prompts in the image set. Never place 4 image
briefs into one generation prompt. Every image prompt must be self-contained,
repeat relevant art direction, specify crop/aspect ratio/focal point/safe area,
and produce exactly one image concept.

## Image prompt specificity rules

For every image prompt:
- Prefer measurable camera language (`35mm`, low-angle, eye-level, top-down,
  shallow/deep depth of field) over words like "nice" or "beautiful".
- Specify subject position and negative space in relation to the actual UI.
- State exactly where important details must remain after crop.
- Use a single dominant lighting direction and one secondary fill/rim logic.
- Distinguish material, texture, and color treatment; do not collapse them into
  one vague "cinematic" adjective.
- For product/architecture images, explicitly forbid warped geometry, duplicate
  objects, broken symmetry, floating components, impossible joins, and invented
  product features.
- For people, specify count, role, pose, framing, wardrobe direction, and
  natural anatomy; never ask the model to invent testimonials or factual
  identity.
- For backgrounds, explicitly define the amount and location of negative space
  required for headline/CTA placement.
- For transparent assets, specify transparent-background intent and object
  isolation separately from lighting/material requirements.
- For icon/logo marks, keep the request vector-like and geometry-led; do not
  request photorealistic shading unless explicitly needed.

### Image acceptance test

Reject and regenerate only when one of these objective failures occurs:
- wrong subject
- wrong composition/crop safety
- broken geometry/anatomy
- wrong lighting direction
- inconsistent material
- wrong palette family
- accidental text/logo/watermark
- visual continuity break
- unreadable UI-safe area
- obvious low-detail or artifacting

Do not regenerate merely because the image is "different" from an imagined
version when it still satisfies the approved brief.

### Image-to-code handoff

Every accepted image gets a compact asset record:

ASSET ID
ROLE
FILENAME
MASTER DIMENSIONS
ASPECT RATIO
FOCAL POINT
SAFE CROP
DESKTOP VARIANT
MOBILE VARIANT
ALT-TEXT DIRECTION
GENERATED / PLACEHOLDER STATUS
ART-DIRECTION VERSION
SOURCE PROMPT VERSION
ACCEPTANCE STATUS

This record becomes the single source of truth for the receiving implementation
prompt.

## Compressed question protocol

The conversation should feel fast even when the generated output is deep.
Use these user-facing prompts, one at a time:

### Q1 — Business
What is the business/brand name and what does it do?

### Q2 — Outcome
What should the website achieve, who is it for, and what is the main offer or market?

### Q3 — Direction
What brand/assets already exist, what special features matter, and what visual feel do you prefer?

### Q4 — Exceptions
Anything that must be preserved or avoided—existing website/stack, required pages, or hard constraints?

Never expose the internal field names during intake. The system expands each answer into the full production specification before generating prompts.

### Hidden expansion contract
Even with fewer questions, output must still include the full project context, design-system contract, art-direction lock, section narrative, motion recipes, image-generation constraints, responsive behavior, UX/accessibility rules, performance strategy, and validation.

## Accuracy-first prompt wrapper v3

Before the actual prompt, include this compact internal block:

SOURCE OF TRUTH
- Explicit facts:
- Approved constraints:
- Primary goal:
- Audience:
- Locked decisions:
- Safe assumptions:
- Confidence:

REASONING RULES
1. Never contradict explicit facts.
2. Never invent business facts.
3. Optimize for the stated business goal before visual novelty.
4. Preserve locked decisions unless a new answer explicitly changes them.
5. Make assumptions concrete and reversible.
6. Prefer the simplest option that achieves the experience goal.
7. Include mobile, accessibility, performance, and failure behavior whenever relevant.

DECISION
- Chosen direction:
- Why it fits:
- Main tradeoff:
- What would change this decision:

Then generate the production prompt.
