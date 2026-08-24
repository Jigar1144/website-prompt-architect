# website-prompt-architect

An agent skill for Claude Code, Codex, and any `SKILL.md`-compatible agent that turns a **brand, business, product, or industry into a premium, business-specific website specification and AI-coding prompt system**.

Instead of generating generic sections, it first understands the business, recommends the right technology and experience direction, then builds the creative, UX, visual, motion, and technical system around it. fileciteturn1file0L3-L9

## Install

```bash
cp -R website-prompt-architect/ ~/.claude/skills/   # Claude Code
cp -R website-prompt-architect/ ~/.codex/skills/    # Codex
```

Then ask for a website prompt pack or invoke the skill using your agent's supported skill syntax. fileciteturn1file0L11-L25

## What it does

The workflow starts with only:

1. **Business name**
2. **Business type / industry**

It then progressively builds the website system. fileciteturn1file0L55-L64

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

The stack is adaptive: lightweight editorial sites can stay simple, while suitable projects can use Next.js, GSAP, Lenis, React Three Fiber, Drei, Blender, video, or other tools. Heavy technology is not forced when it does not benefit the business. fileciteturn1file0L27-L53

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

Adjacent visual states use explicit entry, main, exit, and next-scene handoff states to preserve continuity. fileciteturn1file0L341-L382

### Performance-aware premium design

Effects are evaluated as **low, medium, or high cost**. High-cost WebGL, 3D, video scrubbing, particles, or post-processing require justification, loading strategy, mobile strategy, static fallback, reduced-motion fallback, and failure handling. fileciteturn1file0L406-L445

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

It can also cover architecture, design tokens, responsive behavior, GSAP/scroll architecture, assets, SEO, accessibility, performance, and integrations. fileciteturn1file0L447-L518

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

MIT.https://github.com/Jigar1144/website-prompt-architect/blob/8a1a3f1825d8cf5f39bedb1ff144d18c42e9ebc4/LICENSE
