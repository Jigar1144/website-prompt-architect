# Design Intelligence Engine

## Objective

Turn business + visitor intent + page goal + experience + stack into one coherent MASTER design system.

## Reasoning domains

Evaluate when relevant:

1. Industry
2. Visitor intent
3. Trust model
4. Conversion model
5. Content density
6. Landing pattern
7. Visual style
8. Color
9. Typography
10. UX/interactions
11. Motion
12. Icon/control language
13. Responsive behavior
14. Accessibility
15. Performance
16. Stack implementation

## Industry reasoning

Examples:

- Industrial manufacturing: engineering credibility, product clarity, trust, technical photography, restrained motion.
- Finance: trust, legibility, restrained motion.
- Healthcare: clarity, calm hierarchy, accessibility.
- E-commerce: discovery, comparison, confidence.
- Luxury: materiality, editorial typography, controlled motion.
- Creative agency: expressive art direction and work-first storytelling.
- Local services: trust, contact, location, fast loading.

These are heuristics, not templates.

## Pattern selection

Candidates include:
- Hero + Proof + CTA
- Hero + Product Story
- Editorial Story
- Service Discovery
- Portfolio / Case Study
- Product Showcase
- Conversion-led
- Immersive / Cinematic
- Data-led
- Long-form Story

Score by:
business fit + intent fit + content fit + conversion fit + experience fit - complexity penalty.

## Color reasoning

Generate:
- primary
- secondary
- accent
- background
- surface
- text
- muted text
- border
- semantic colors

Rules:
- verify contrast
- never use color as the only status signal
- avoid automatic purple gradients
- do not force dark mode
- keep photography and brand assets coherent

## Typography reasoning

Evaluate:
- readability
- brand personality
- hierarchy
- responsive wrapping
- language support
- loading cost

## Motion reasoning

Motion must:
- support the story
- respect hierarchy
- remain accessible
- have mobile behavior
- have reduced-motion fallback
- fit performance budget

## Design audit

Return:

```text
PASS / REVISE
```

and list only failed items.

Check:
- business fit
- pattern fit
- typography
- contrast
- long content
- focus
- native controls
- hover independence
- reduced motion
- responsive widths
- performance
- anti-patterns
