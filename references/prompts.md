# Website Prompt Architect — Prompt Library

## Sequential build opening

When the user has already supplied a detailed brief, do not ask for business name/type again.

Use:

```text
OBJECTIVE
Convert the supplied website brief into a sequential implementation prompt pack.

RULE
Do not restart discovery when the brief already contains the required facts.
```

## Project setup template

```text
OBJECTIVE
Initialize the website project for [Business Name].

PROJECT CONTEXT
- Business:
- Industry:
- Framework:
- Language:
- Rendering:
- Styling:
- Component library:
- Animation:
- Image strategy:

REQUIREMENTS
- Create the project.
- Configure the supplied stack.
- Establish the app entry point.
- Prepare lint/build scripts.
- Keep the initial implementation minimal.

CONSTRAINTS / RULES
Do not add unnecessary dependencies.
Do not invent business content.

ACCEPTANCE CRITERIA
The project starts, lints and builds.
```

## Installation template

```text
OBJECTIVE
Install and configure the dependencies required for [Business Name].

REQUIREMENTS
- Install only approved libraries.
- Configure fonts.
- Configure UI primitives.
- Configure animation library where required.
- Verify development and production commands.

ACCEPTANCE CRITERIA
No dependency is installed without a current use.
```

## Folder architecture template

```text
OBJECTIVE
Create a maintainable project structure for [Business Name].

REQUIREMENTS
Separate:
- app/routes
- layout components
- page sections
- UI primitives
- data/content
- utilities
- types
- public assets

ACCEPTANCE CRITERIA
A new section can be added without duplicating content or styling logic.
```

## Design system template

```text
OBJECTIVE
Implement the MASTER design system for [Business Name].

DESIGN SYSTEM
- Colors:
- Typography:
- Spacing:
- Container:
- Radius:
- Shadows:
- Buttons:
- Focus:
- Breakpoints:
- Motion:

RULE
All later sections inherit MASTER unless an intentional override is documented.
```

## Section prompt template

```text
OBJECTIVE
Build [SECTION NAME] for [Business Name].

PROJECT CONTEXT
[Business, audience, goal, approved design system.]

DESIGN SYSTEM REFERENCE
[Tokens and art direction.]

REQUIREMENTS
[Exact content and structure.]

SPECIFICATIONS
[Desktop/tablet/mobile layout.]

RESPONSIVE BEHAVIOR
[Exact responsive changes.]

ACCESSIBILITY
[Heading, alt, keyboard, focus, contrast.]

MOTION
[Approved motion only.]

ASSETS
[Exact filenames.]

CONSTRAINTS / RULES
No invented facts.
No unrelated redesign.
No generic AI patterns.

ACCEPTANCE CRITERIA
[Concrete visual/functional checks.]
```

## Image prompt template

```text
ASSET
IMG-[NUMBER] — [NAME]

USED IN
[Component/section]

OBJECTIVE
Create a business-specific image for [purpose].

POSITIVE PROMPT
[Detailed subject + action + environment + materials + composition + camera + lighting + brand treatment.]

NEGATIVE PROMPT
[Relevant exclusions.]

COMPOSITION
[Framing + focal point + negative space.]

ASPECT RATIO / SIZE
[Exact ratio and resolution.]

SAFE CROP
[Desktop/mobile crop guidance.]

STYLE CONSISTENCY
[Art Direction Lock.]

FILE REQUIREMENT
/public/images/[path]/[filename].webp
```

## Motion enhancement template

```text
OBJECTIVE
Perform a motion-design enhancement pass on the already completed website.

REQUIREMENTS
- Hero text reveal
- Hero image reveal
- CTA micro-interaction
- Statistics count-up
- Section heading reveal
- Card stagger
- Product image hover
- SVG technical line animation where justified
- Map marker reveal where applicable
- Client logo transition
- Final CTA reveal

CONSTRAINTS
No effect without purpose.
No animation should compete with the primary CTA.
Respect reduced motion.
Prefer transform and opacity.
```

## Motion QA template

```text
OBJECTIVE
Audit all motion.

CHECK
- Purpose
- hierarchy
- performance
- mobile
- keyboard
- reduced motion
- layout stability
- CTA priority
- fallback strategy

ACTION
Remove effects that fail.
```

## SEO template

```text
OBJECTIVE
Implement technical and on-page SEO for [Business Name].

REQUIREMENTS
- title
- description
- canonical
- H1/H2
- structured data
- sitemap
- robots
- Open Graph
- internal links

RULE
Never invent business facts.
```

## Accessibility template

```text
OBJECTIVE
Run an accessibility pass.

VERIFY
- semantic HTML
- one H1
- heading hierarchy
- focus states
- keyboard
- contrast
- touch targets
- alt text
- form labels
- reduced motion
- hover independence
```

## Performance template

```text
OBJECTIVE
Optimize [Business Name] for production performance.

VERIFY
- LCP
- CLS
- INP
- image loading
- font loading
- client component usage
- animation cost
- bundle size
- console errors
```

## Final QA template

```text
OBJECTIVE
Perform final $100K agency-level QA.

CHECK
- business specificity
- visual identity
- art direction
- typography
- spacing
- responsive behavior
- motion
- accessibility
- SEO
- performance
- factual integrity
- no AI-slop

ACTION
Fix failures before delivery.
```
