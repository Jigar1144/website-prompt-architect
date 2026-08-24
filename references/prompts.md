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
