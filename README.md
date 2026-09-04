# website-prompt-architect

An agent skill for Claude Code, Codex, and any `SKILL.md`-compatible agent that turns a **brand, business, product, or industry into a premium, business-specific website specification and AI-coding prompt system**.

Instead of generating generic sections, it first understands the business, recommends the right technology and experience direction, then builds the creative, UX, visual, motion, and technical system around it.

## Install

```bash
cp -R website-prompt-architect/ ~/.claude/skills/   # Claude Code
cp -R website-prompt-architect/ ~/.codex/skills/    # Codex
```

Then ask for a website prompt pack or invoke the skill using your agent's supported skill syntax.

## What it does

The workflow starts with only:

1. **Business name**
2. **Business type / industry**

It then progressively builds the website system.

### Creative system

- Business analysis + technology recommendation
- Experience archetype
- Theme, color, typography and visual direction
- **Art Direction Lock**
- **1–3 Signature Moments**
- Section-to-section storytelling
- Spatial design system
- Interaction hierarchy
- Responsive art direction

The stack is adaptive: lightweight editorial sites can stay simple, while suitable projects can use Next.js, GSAP, Lenis, React Three Fiber, Drei, Blender, video, or other tools. Heavy technology is not forced when it does not benefit the business.

### Full Design Intelligence

The skill now includes an integrated design-reasoning layer for industry,
patterns, styles, color, typography, UX, accessibility, motion, performance,
and stack-specific implementation. It can compare design candidates, lock a
MASTER design system with page overrides, filter anti-patterns, and run a
pre-delivery design audit.

### Guided Discovery

The interview starts with only **Business Name + Business Type**, then moves
through website status, goals, audience, offer, market, brand/assets, relevant
features, visual taste, motion, technology, and page structure. Questions are
asked one at a time, skipped when inferable, and converted into approved project
decisions before prompt generation.

### Adaptive Interview

The skill starts with only **Business Name + Business Type**, then asks
progressive follow-ups only when a real design or implementation decision needs
clarification. It proposes goals, audience, brand direction, features,
technology, visual direction, and page structure for approval instead of
overwhelming the user with a long questionnaire.

### Design Intelligence

Industry-aware design-system reasoning now selects patterns, styles, colors,
typography, key effects, anti-patterns, and accessibility/performance priorities
before implementation. Production checks also cover semantics, focus,
responsive text, resilient content, and reduced motion.

### Motion & Interaction Engine

The skill can select motion based on the business, section purpose, art direction, interaction hierarchy, motion tier, and performance budget.

Includes:

- Scroll effects: parallax, pin/reveal, horizontal scroll, scrub, masks, zoom, sticky storytelling
- Text effects: line/word reveals, blur-to-sharp, tracking, kinetic type, scale
- Card effects: lift, spotlight, perspective tilt, magnetic, expansion, image reveal
- Image effects: Ken Burns, parallax, mask, grayscale-to-color, blur, morph
- Cursor effects: magnetic buttons, spotlight, previews — desktop only
- Section transitions: curtain, image takeover, clip-path, wipes, scale-through
- Scroll choreography and section-level animation recipes

**Rule:** no effect without purpose. Motion must preserve hierarchy, usability, mobile behavior, reduced-motion support, and performance.

### Cinematic & asset pipeline

For cinematic projects:

```text
ART DIRECTION
→ SCENE BOARDS
→ STILLS
→ CAMERA / MOTION
→ TRANSITIONS
→ ASSET ASSEMBLY
→ SCROLL SCRUBBING
→ MOBILE VARIANT
→ VISUAL QA
```

Adjacent visual states use explicit entry, main, exit, and next-scene handoff states to preserve continuity.

### Performance-aware premium design

Effects are evaluated as **low, medium, or high cost**. High-cost WebGL, 3D, video scrubbing, particles, or post-processing require justification, loading strategy, mobile strategy, static fallback, reduced-motion fallback, and failure handling.

### Production Intelligence Layer (V5, merged)

After Round 4 (differentiation & objections) and before final output, the
skill also runs: Page/Component Architecture (multi-page sites), an
Anti-Hallucination Content Gate (VERIFIED/USER-PROVIDED/INFERRED/
PLACEHOLDER/MISSING), a Copywriting & Messaging Engine (headlines, value
props, CTA hierarchy, microcopy), a full SEO + Technical SEO plan, an
Accessibility + Performance pass (WCAG, contrast, Core Web Vitals), an
Analytics Plan, Design Tokens shipped as real CSS/Tailwind code, a
Competitive Reference & Differentiation Teardown, and a signature
interaction addendum to the Motion Engine. It all consolidates into one
AI Coding-Agent Master Handoff prompt.

## Output

The skill generates self-contained prompts for approved website sections using:

```text
OBJECTIVE
PROJECT CONTEXT
DESIGN SYSTEM REFERENCE
REQUIREMENTS
SPECIFICATIONS
CONSTRAINTS / RULES
```

It can also cover architecture, design tokens, responsive behavior, GSAP/scroll architecture, assets, SEO, accessibility, performance, and integrations.

## Skill structure

```text
website-prompt-architect/
├── SKILL.md
├── README.md
├── LICENSE
├── CHANGELOG.md
└── references/
    ├── prompts.md
    ├── pipeline.md
    ├── design-intelligence.md
    ├── design-library.md
    └── agency-engine.js
```

## $100K Agency Gate

Before delivery, the skill checks:

- Recognizable visual identity
- Consistent art direction
- Meaningful signature moments
- Strong storytelling and section handoffs
- Intentional spatial rhythm
- Strong typography hierarchy
- Clear interaction priority
- Purposeful motion
- Mobile quality
- Performance and reduced-motion support
- No generic AI/template feel

Final question:

> **Would an experienced creative director approve this as a premium agency-level website?**

If not, revise before final delivery.

## License

MIT.
