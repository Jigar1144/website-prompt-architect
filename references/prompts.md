# Website Prompt Architect — Prompt Library

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

For each asset specify, as a full paste-ready generation prompt — never a
bare one-line description, which is what forces repeated re-generation:
- subject (specific action/pose, not just a noun)
- composition (framing, focal point, negative space)
- camera/lens character (angle, distance, depth of field)
- lighting (direction, quality, time of day)
- material
- color (tied to brand tokens)
- mood
- aspect ratio
- safe crop
- filename
- desktop/mobile variant
- fallback
- negative prompt (what to exclude — text/watermarks, malformed limbs,
  clutter, off-brand colors, generic stock look — trimmed to what's
  actually likely to go wrong for this subject)
- shared style anchor (one fixed phrase reused across every asset so the
  whole set reads as one shoot)
- tool notes: Midjourney takes the negative list after `--no`; tools with
  no negative-prompt field (DALL·E, GPT image, Firefly) need the negative
  items folded into the positive prompt as explicit exclusions instead

If the receiving tool cannot generate media, use:
[IMAGE: id] — paired with the full prompt above, so it can be pasted
straight into an image tool later with no further editing.

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

> Superseded by "The interview — four rounds, not ten waits" in
> SKILL.md: the strategic follow-up, brand follow-up, experience
> approval, section approval, and technology approval below are all
> delivered together in the single Round 2 message, with one combined
> approval question — not as five separate waits. The content of each
> still applies; only the delivery/waiting model changed.

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

> Superseded by "The interview — four rounds, not ten waits" in SKILL.md:
> deliver these in the four consolidated rounds, not one wait per
> question. The ordering logic below (required-first, skip what's
> answered, infer-then-confirm) still applies inside each round.

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
