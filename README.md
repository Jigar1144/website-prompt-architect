# website-prompt-architect

An agent skill for Claude Code, Codex, and any `SKILL.md`-compatible agent that turns a brand, business, product, or industry into a premium, business-specific website specification and AI-coding prompt system.

## Install

```bash
cp -R website-prompt-architect/ ~/.claude/skills/
cp -R website-prompt-architect/ ~/.codex/skills/
```

Then ask for a website prompt pack or invoke the skill using your agent's supported skill syntax.

## What is new in v6.1

v6.1 keeps the V6 production-intelligence architecture and adds a **Sequential Build Mode** for users who already have a detailed website brief and want implementation prompts one at a time.

It also adds a dedicated **Image Asset Registry + Image Prompt System** and a more explicit **Motion Enhancement Pass** for text animation, section choreography, micro-interactions, SVG drawing, map markers, count-up statistics, and reduced-motion behavior.

### Sequential Build Mode

When the user supplies a sufficiently detailed brief, the skill does not restart a long discovery interview.

It can produce:

1. Project setup
2. Installation
3. Folder structure
4. Design system
5. Content/data architecture
6. Shared components
7. Header
8. Hero
9. Each approved section as its own prompt
10. Image generation prompts separately
11. SEO
12. Accessibility
13. Responsive behavior
14. Performance
15. Motion enhancement
16. Motion QA
17. Final agency QA
18. Build verification

When the user says **"next"**, return only the next requested implementation prompt.

### Separate image prompts

Every image can receive:

- asset ID
- filename
- intended component
- positive generation prompt
- negative prompt
- aspect ratio
- safe crop
- desktop/mobile treatment
- visual consistency anchor
- fallback

Coding prompts reference the exact filename rather than embedding the whole generation prompt.

### Motion Enhancement Pass

The skill now supports a separate post-build motion pass covering:

- hero text reveal
- word/line heading animation
- image reveal
- CTA micro-interactions
- animated statistics
- section heading reveals
- card stagger
- product image hover
- SVG engineering line drawing
- global map marker reveals
- client logo transitions
- final CTA reveal
- reduced-motion fallbacks
- animation performance QA

Motion remains business-specific and purpose-driven. No effect is added merely because it is available.

## Core rules

- Never invent business facts.
- Missing business information becomes `[PLACEHOLDER]`.
- Do not introduce generic AI/SaaS visual patterns without business justification.
- Do not force heavy 3D or WebGL.
- Every meaningful website section gets a self-contained implementation prompt.
- Image-generation prompts remain separate from coding prompts unless the user explicitly requests inline prompts.
- Preserve accessibility, responsive behavior, SEO and performance throughout.
- Treat the approved design system as MASTER and use page/section overrides only when intentional.
- Motion must support hierarchy and conversion rather than compete with it.

## Repository structure

```text
website-prompt-architect/
├── SKILL.md
├── README.md
├── LICENSE
├── CHANGELOG.md
├── VERSION
└── references/
    ├── prompts.md
    ├── pipeline.md
    ├── design-intelligence.md
    ├── design-library.md
    └── agency-engine.js
```

## $100K Agency Gate

Before delivery, the skill checks:

- recognizable visual identity
- consistent art direction
- meaningful signature moments
- strong storytelling and section handoffs
- intentional spatial rhythm
- strong typography hierarchy
- clear interaction priority
- purposeful motion
- mobile quality
- accessibility
- performance
- reduced-motion support
- factual integrity
- no generic AI/template feel

Final question:

> Would an experienced creative director approve this as a premium agency-level website?

If not, revise before final delivery.

## License

MIT.
