


# V5 Intelligence & Production Handoff Layer

The V5 layer extends the interview and prompt architecture with seven production-critical engines. These engines operate **after the four user-facing interview rounds** and before final prompt generation. They should use the approved Creative + Conversion Brief as the single source of truth.

## 1. 🗺️ Page Architecture Engine

Do not default to a conventional Home / About / Services / Contact sitemap.

Generate the smallest page architecture that fully supports:
- business goals
- user journeys
- conversion paths
- search intent
- trust requirements
- content depth
- real-world maintenance constraints

For every proposed page, record:
- page name
- purpose
- primary audience
- search intent
- primary CTA
- secondary CTA
- required proof/content
- relationship to other pages
- whether it is required, recommended, or optional

### Page decision rules
1. Create a page only when it has a distinct business, user, SEO, or conversion purpose.
2. Prefer sections over pages when the information does not deserve a separate URL.
3. Split a page when content becomes too dense, a distinct search intent exists, or a separate conversion journey is required.
4. Avoid thin SEO pages, duplicate pages, and generic filler.
5. Keep navigation understandable; do not turn every internal page into a top-level navigation item.
6. For local businesses, consider service/location intent only when genuinely useful and supported by real offerings.
7. For SaaS/product sites, prioritize product understanding, use cases, proof, pricing/qualification, and activation.
8. For portfolios/agencies, prioritize work, outcomes, process, credibility, and inquiry.
9. For ecommerce, prioritize discovery, product detail, merchandising, trust, checkout, and retention.
10. For content-heavy businesses, distinguish evergreen landing pages from editorial resources.

Output:
```text
SITE ARCHITECTURE
Primary navigation:
Secondary/footer navigation:
Core pages:
Supporting pages:
Conversion paths:
SEO landing pages:
Optional future pages:
Reasoning:
```

## 2. 🧩 Component Architecture Prompt

Translate the approved page architecture into a reusable component system.

Classify components as:
- Global
- Layout
- Navigation
- Hero
- Content
- Commerce
- Trust/Proof
- Conversion
- Forms
- Media
- Motion
- Feedback/state
- Footer

For each component define:
- component name
- purpose
- reusable inputs/props
- content source
- variants
- states
- accessibility requirements
- motion behavior
- page usage

Rules:
1. Reuse components when structure and behavior are genuinely shared.
2. Do not force unrelated sections into one over-generalized component.
3. Prefer composition over giant configurable components.
4. Keep content separate from presentation where practical.
5. Identify which components are data-driven.
6. Define loading, empty, success, error, and disabled states where applicable.
7. Include mobile behavior without turning the interview into a separate advanced-responsive questionnaire.

Output:
```text
COMPONENT ARCHITECTURE
Global:
Shared:
Page-specific:
Data-driven:
Interactive:
Forms:
States:
Dependencies:
```

## 3. ⚙️ Intelligent Technology Selection Engine

Technology must be selected from requirements, not trend preference.

Evaluate:
- static vs dynamic content
- interactivity level
- React/Vue/Svelte preference or existing codebase
- SEO importance
- content editing needs
- ecommerce
- authentication
- dashboards/app behavior
- integrations
- animation/3D requirements
- deployment constraints
- team expertise
- maintenance capability
- performance requirements
- budget/time-to-launch

Candidate technologies may include:
- Astro
- Next.js
- React + Vite
- React Router
- Remix
- Nuxt
- SvelteKit
- Vue
- Svelte
- Tailwind CSS
- CSS Modules
- shadcn/ui
- Radix UI
- GSAP
- Motion
- Lenis
- Three.js
- React Three Fiber
- Drei
- Spline
- PixiJS
- WebGL/shaders
- Shopify
- Hydrogen
- Sanity
- Contentful
- Storyblok
- WordPress
- Stripe

### Selection rules
- Prefer Astro for primarily content/marketing sites where islands provide sufficient interactivity.
- Prefer Next.js for React-centric sites needing dynamic rendering, application features, complex integrations, or a unified full-stack React architecture.
- Prefer React + Vite for client-heavy applications that do not need framework-level SSR/SEO features.
- Consider Nuxt when Vue is the team's strongest ecosystem and SSR/SEO matter.
- Consider SvelteKit when Svelte is strategically preferred and the project benefits from its full-stack framework.
- Use Remix/React Router when routing/data-loading architecture is a strong fit.
- Add Three.js/R3F/Spline only when the visual objective justifies the cost.
- Add GSAP/Motion/Lenis only where motion materially improves storytelling, hierarchy, or interaction.
- Avoid adding a CMS unless someone needs to maintain content.
- Avoid adding a database/backend unless the business requirements require it.
- Never choose multiple overlapping technologies without a clear responsibility for each.

Output a decision table:
```text
TECHNOLOGY DECISION
Framework:
Rendering strategy:
Styling:
UI primitives:
CMS:
Animation:
3D:
Forms:
Payments:
Analytics:
Hosting/deployment:
Why this stack:
Rejected alternatives:
Tradeoffs:
```

## 4. 🛡️ Anti-Hallucination Content Gate

Every important business-content item must be classified as one of:
- VERIFIED — explicitly supplied by the user/source
- USER-PROVIDED — supplied by the user but not independently verified
- INFERRED — strategic interpretation, never presented as a factual claim
- PLACEHOLDER — intentionally awaiting real content
- MISSING — required but not supplied

### Hard prohibitions
Never invent:
- testimonials
- customer/client names
- awards
- certifications
- review scores
- revenue or growth figures
- years in business
- staff counts
- addresses
- phone numbers
- pricing
- guarantees
- partnerships
- case-study results
- product capabilities
- legal claims

When content is unavailable:
- use a clearly labeled placeholder
- or design the section so it can be omitted
- or ask for the information in a later clarification only when it is critical

Prompt requirement:
> Treat all factual business claims as untrusted until they are explicitly provided. Do not convert strategic inference into factual copy.

Output:
```text
CONTENT TRUST REGISTER
Claim/content:
Status:
Source:
Allowed use:
Needs replacement:
```

## 5. 🖼️ Image Art-Direction Engine

Create a deliberate visual asset plan instead of saying “use premium images.”

For each image define:
- asset ID
- page/section
- purpose
- subject
- composition
- camera/angle if relevant
- environment
- lighting
- emotional tone
- aspect ratio
- crop behavior
- overlay/text safety
- accessibility alt-text intent
- source type: user-provided / stock / generated / commissioned
- whether the image is essential or optional

Do not fabricate recognizable people, clients, locations, products, awards, or outcomes as if they are real.

Generate image prompts when useful, but keep them clearly separate from verified business facts.

Output:
```text
IMAGE ART DIRECTION
Hero:
Supporting:
Product/service:
Portfolio:
People:
Texture/background:
OG/social:
Missing assets:
Generation prompts:
```

## 6. 📊 Analytics Plan

Define measurement around the primary business goal.

Every site should have:
- one primary conversion event
- secondary conversion events
- engagement events only when actionable
- event naming conventions
- consent/privacy considerations
- recommended analytics integration
- measurement gaps

Examples:
```text
hero_cta_clicked
nav_cta_clicked
service_viewed
portfolio_opened
case_study_opened
pricing_viewed
contact_started
contact_submitted
phone_clicked
whatsapp_clicked
booking_started
booking_completed
```

Do not add analytics events merely because they are possible. Track events that can change a business or design decision.

Output:
```text
ANALYTICS PLAN
Primary conversion:
Secondary conversions:
Key events:
Event properties:
Funnel:
Consent/privacy:
Reporting questions:
```

## 7. 🤖 AI Coding-Agent Handoff

The final package must include a coding-agent-ready master prompt.

The handoff must contain, in order:
1. Project objective
2. Business + positioning
3. Audience + user journeys
4. Approved site architecture
5. Design system
6. Content/trust rules
7. Image/art direction
8. Component architecture
9. Technology stack
10. SEO requirements
11. Accessibility requirements
12. Analytics requirements
13. Performance requirements
14. Motion/3D rules
15. Implementation sequence
16. QA checklist
17. Explicit “do not invent” rules

### Coding-agent rules
- Build from the approved brief; do not reinterpret the strategy.
- Do not add pages, sections, dependencies, animations, or 3D effects without a stated reason.
- Use reusable components.
- Preserve semantic HTML and accessible interaction.
- Use real supplied content where available.
- Keep placeholders clearly marked.
- Do not invent business facts.
- Implement all important states.
- Optimize images and loading.
- Respect reduced-motion preferences.
- Keep analytics events aligned with the approved plan.
- Finish with a self-audit against the QA checklist.

The final handoff should be directly pasteable into a coding agent such as Codex, Claude Code, Cursor, or another implementation assistant.

## V5 Final Output Sequence

Generate final output in this order:

### 🧠 01 — MASTER CREATIVE + CONVERSION BRIEF
### 🗺️ 02 — PAGE ARCHITECTURE
### 🧩 03 — COMPONENT ARCHITECTURE
### 🎨 04 — DESIGN SYSTEM
### ✍️ 05 — CONTENT SYSTEM + TRUST REGISTER
### 🖼️ 06 — IMAGE ART DIRECTION
### 🔍 07 — SEO + LOCAL SEO
### ⚙️ 08 — TECHNOLOGY DECISION
### ⚡ 09 — MOTION / 3D DIRECTION
### 📊 10 — ANALYTICS PLAN
### ♿ 11 — ACCESSIBILITY + PERFORMANCE
### 🤖 12 — AI CODING-AGENT MASTER PROMPT
### ✅ 13 — QA / LAUNCH CHECKLIST

All sections must derive from the same approved brief. If two sections conflict, the brief and explicit user decisions win.
