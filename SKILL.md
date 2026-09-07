---
name: website-prompt-architect
description: Build business-specific, premium website prompt packs through adaptive creative direction or sequential build mode. Use when turning a detailed website brief into installation, architecture, design-system, section-by-section, image-generation, motion, SEO, accessibility, performance, QA, and AI-coding prompts.
license: MIT
---

# Website Prompt Architect

## Operating modes

This skill has two valid modes.

### MODE A — Adaptive Creative Director

Use when the user gives only a business name/type or an incomplete brief.

Run the existing adaptive discovery and design-intelligence workflow:
- business identity
- technology recommendation
- creative direction
- design system
- sections
- motion
- business-specific extras
- differentiation and objections
- production intelligence
- final prompt pack

Do not ask questions whose answers are already supplied.

### MODE B — Sequential Build Mode

Use when the user supplies a detailed website brief and asks for:
- step-by-step prompts
- installation first
- folder structure first
- one section at a time
- separate image prompts
- prompts for Cursor/Claude Code/Codex/v0/Bolt/Lovable
- "give me the next prompt"

In this mode, do NOT restart the long interview.

Convert the supplied brief directly into an ordered implementation system.

---

# 1. Non-negotiable rules

- Never invent business facts.
- Missing facts become `[PLACEHOLDER]`.
- Preserve user-supplied factual wording.
- Do not output production website code unless explicitly requested.
- Generate copy-paste-ready implementation prompts.
- Every meaningful section gets its own standalone prompt.
- Image-generation prompts are separate from implementation prompts by default.
- Keep a stable Image Asset Registry.
- Preserve the MASTER design system across all prompts.
- Do not redesign unrelated sections while executing a single step.
- Do not add generic AI/SaaS patterns without business justification.
- Avoid purple/pink gradients, glassmorphism, random blobs, fake 3D, generic handshake photography, fake proof and meaningless animation.
- Accessibility, responsiveness, SEO and performance are part of every implementation decision.
- Motion must have purpose.

---

# 2. Detailed brief extraction

Before generating prompts, extract:

- Business name
- Industry
- Location
- Established year
- Trust signals
- Certifications
- Products/services
- Industries served
- Clients/OEMs
- Statistics
- Brand colors
- Typography
- Visual direction
- Technology stack
- Pages
- Homepage sections
- CTA hierarchy
- Contact details
- SEO requirements
- Image requirements
- Accessibility requirements
- Responsive requirements
- Animation requirements
- Existing assets

Classify facts internally as:

```text
USER-PROVIDED
VERIFIED
INFERRED
PLACEHOLDER
MISSING
```

Only USER-PROVIDED and VERIFIED facts may be presented as facts.

---

# 3. Sequential build map

When Mode B is active, generate this execution map:

```text
01 — Project Setup
02 — Installation / Dependencies
03 — Folder Structure
04 — Global Design System
05 — Content / Data Architecture
06 — Shared Components
07 — Header / Navigation
08 — Hero
09 — Trust / Stats
10+ — One prompt per approved section
N — Footer
N+1 — SEO
N+2 — Accessibility
N+3 — Responsive
N+4 — Performance
N+5 — Motion Enhancement
N+6 — Motion QA
N+7 — Final Agency QA
N+8 — Build Verification
```

Adapt the number of section steps to the brief.

If the user asks for all prompts, provide the complete pack.

If the user asks for the next prompt, provide only the next prompt.

---

# 4. Implementation prompt format

Every standalone implementation prompt must use:

```text
OBJECTIVE

PROJECT CONTEXT

DESIGN SYSTEM REFERENCE

REQUIREMENTS

SPECIFICATIONS

RESPONSIVE BEHAVIOR

ACCESSIBILITY

MOTION

ASSETS

CONSTRAINTS / RULES

ACCEPTANCE CRITERIA
```

The prompt must be independently understandable.

Never rely on "previous prompt" context.

End implementation prompts with:

> Work only on the scope described in this step. Preserve the existing design system and unrelated sections. Reuse existing components/data/assets. Do not invent business facts. Verify the affected area before finishing.

---

# 5. Project setup prompt

Specify:
- framework
- language
- routing
- rendering architecture
- package manager
- CSS system
- component library
- animation library
- image strategy
- lint/build commands

Use the exact stack from the brief when supplied.

If no stack is supplied, recommend one based on business needs.

---

# 6. Installation prompt

Create a separate copy-paste prompt containing:
- initialization command
- dependency installation
- shadcn setup when relevant
- font setup
- development command
- lint command
- build command
- environment requirements

Do not install libraries that are not used.

---

# 7. Folder structure prompt

Define:
- `app`
- `components`
- `sections`
- `ui`
- `data`
- `lib`
- `types`
- `public/images`
- `public/logos`

Adapt to the stack.

Explain what each folder owns.

Keep content/data separate from presentation.

---

# 8. Design system prompt

Lock:
- colors
- typography
- spacing
- container
- grid
- border radius
- shadows
- buttons
- controls
- icon language
- focus rings
- breakpoints
- motion tokens

Create a MASTER design system.

Section/page prompts may define intentional overrides only.

---

# 9. Shared component prompt

Create only useful reusable primitives:
- Container
- Button
- SectionHeading
- Badge
- Image wrapper
- Card primitives
- responsive navigation primitives

Do not over-componentize.

---

# 10. Section prompts

Each major homepage/page section receives one prompt.

A section prompt must define:
- purpose
- visitor question
- visual structure
- content hierarchy
- CTA
- exact assets
- responsive behavior
- accessibility
- motion
- acceptance criteria

Vary layout patterns.

Do not make every section a card grid.

---

# 11. Image Asset Registry

Maintain:

| ID | Asset | Used In | Filename | Ratio | Desktop | Mobile | Status |
|---|---|---|---|---|---|---|---|

Every image must have:
- unique ID
- exact filename
- intended component
- ratio
- alt text
- generation status

Implementation prompts reference filenames only.

---

# 12. Separate image prompt system

Every image prompt uses:

```text
ASSET

USED IN

OBJECTIVE

POSITIVE PROMPT

NEGATIVE PROMPT

COMPOSITION

CAMERA / LIGHTING

ASPECT RATIO / SIZE

SAFE CROP

STYLE CONSISTENCY

DESKTOP / MOBILE

ALT TEXT

FILE REQUIREMENT
```

Prompts must be specific to the business.

Never write:
"Generate a modern corporate image."

Prefer exact subject, action, environment, materials, camera and lighting.

Negative prompts should exclude only likely failure modes.

---

# 13. Motion Enhancement Pass

Motion is a separate post-build phase in Sequential Build Mode.

Use it after the static/responsive/accessible website is complete.

Preferred motion:
- hero word/line reveal
- image reveal
- CTA micro-interaction
- statistic count-up
- section heading fade-up
- card stagger
- product image scale
- SVG technical line drawing
- map marker reveal
- client logo grayscale-to-color
- final CTA reveal

Optional only when justified:
- mask reveals
- scroll choreography
- parallax
- magnetic CTA
- cursor effects
- cinematic section transitions
- WebGL/3D

Do not add effects merely because they are available.

---

# 14. Text animation rules

Preferred:
- line reveal
- word reveal
- mask reveal
- blur-to-sharp
- subtle tracking
- scale

Avoid:
- typewriter for hero headlines
- character-by-character animation everywhere
- flashing
- kinetic typography that harms readability

SEO copy remains real HTML text.

---

# 15. Motion system

Use centralized variants:

```text
fadeUp
fadeIn
fadeLeft
fadeRight
scaleIn
textReveal
imageReveal
lineReveal
staggerChildren
```

Recommended timings:

```text
150ms
250ms
400ms
600ms
700–900ms hero
```

Preferred easing:

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

Prefer `transform` and `opacity`.

Avoid layout-triggering animation.

---

# 16. Reduced motion

Mandatory:

```css
@media (prefers-reduced-motion: reduce)
```

Disable:
- count-up
- parallax
- SVG drawing
- magnetic effects
- large transforms
- stagger
- complex scroll effects

Show final content immediately.

---

# 17. Mobile motion

Mobile gets a simpler motion system.

Disable or simplify:
- cursor effects
- magnetic effects
- heavy parallax
- complex WebGL
- complex SVG choreography

Keep:
- fade-up
- subtle stagger
- button transitions
- small image scale

Never make information depend on hover.

---

# 18. Motion QA

Verify:
- every effect has a purpose
- CTA remains highest priority
- no layout shift
- no excessive simultaneous animations
- mobile remains usable
- keyboard remains usable
- reduced motion works
- heavy effects have fallbacks
- no console errors
- no performance regression

Remove any animation that fails the test.

---

# 19. SEO prompt

Create a standalone prompt for:
- title
- meta description
- canonical
- H1/H2 hierarchy
- keyword strategy
- local SEO
- structured data
- sitemap
- robots
- Open Graph
- internal linking

Never keyword-stuff.

---

# 20. Accessibility prompt

Verify:
- semantic HTML
- single H1
- heading hierarchy
- keyboard navigation
- visible focus
- 44px touch targets
- alt text
- form labels
- contrast
- reduced motion
- hover independence

---

# 21. Responsive prompt

Explicitly define behavior for:
- mobile
- tablet
- desktop
- wide desktop where relevant

Do not merely say "make it responsive."

Specify:
- columns
- stacking
- typography scaling
- image crop
- navigation
- touch targets
- motion changes

---

# 22. Performance prompt

Target:
- strong Core Web Vitals
- optimized LCP
- no unnecessary client components
- responsive images
- lazy loading below fold
- font optimization
- no layout shift
- animation using compositor-friendly properties

Heavy effects require:
- justification
- loading strategy
- mobile strategy
- static fallback
- reduced-motion fallback
- failure handling

---

# 23. Final agency gate

Review:
- business specificity
- visual identity
- art direction
- typography
- spatial rhythm
- storytelling
- CTA hierarchy
- image quality
- motion purpose
- mobile quality
- accessibility
- performance
- factual integrity
- no generic AI feel

If it fails, revise rather than merely reporting the failure.

---

# 24. Build verification

Final prompt must run:

```bash
npm run lint
npm run build
```

and fix:
- TypeScript errors
- import errors
- missing assets
- hydration errors
- console errors
- broken links
- horizontal overflow

Do not consider the project complete until production build succeeds.

---

# 25. Existing V6 capabilities to preserve

Do not remove or weaken:
- adaptive technology recommendation
- Design Intelligence
- Design Library
- Motion & Interaction Engine
- cinematic asset pipeline
- Production Intelligence Layer
- Anti-Hallucination Content Gate
- Copywriting & Messaging Engine
- SEO + Technical SEO
- Accessibility + Performance
- Analytics
- Competitive differentiation
- AI Coding-Agent Master Handoff
- $100K Agency Gate
