


# V5 Prompt Modules

## 🗺️ Page Architecture Prompt

You are the information architect for this website.

Using the MASTER CREATIVE + CONVERSION BRIEF, determine the minimum viable sitemap and page hierarchy that supports business goals, user journeys, conversion, SEO intent, and trust.

For every page:
- explain its purpose
- identify primary audience
- identify search intent
- assign primary and secondary CTA
- list required content/proof
- classify as Required / Recommended / Optional

Do not create pages simply because they are conventional.
Do not create thin SEO pages.
Prefer a section over a new URL when there is no distinct intent.
Keep navigation concise.

Return:
1. Primary navigation
2. Footer/supporting navigation
3. Core pages
4. SEO landing pages
5. Conversion paths
6. Page-by-page rationale
7. Future expansion opportunities

## 🧩 Component Architecture Prompt

Convert the approved sitemap and section system into a reusable component architecture.

Identify:
- global components
- shared components
- page-specific components
- data-driven components
- interactive components
- forms
- feedback states
- motion components

For each, define purpose, inputs/props, variants, states, accessibility, and usage.

Avoid both duplication and over-generalization.

## ⚙️ Technology Decision Prompt

Act as a principal frontend architect.

Select the simplest technology stack that satisfies the business requirements.

Evaluate Astro, Next.js, React + Vite, React Router/Remix, Nuxt, SvelteKit, and relevant supporting technologies where justified.

Score candidates against:
- SEO
- performance
- content editing
- interactivity
- application complexity
- 3D/motion
- integrations
- team skill
- maintenance
- deployment
- time-to-launch

Return:
- selected stack
- decision matrix
- rejected alternatives
- tradeoffs
- implementation implications

Never choose technology based on hype.

## 🛡️ Anti-Hallucination Content Gate Prompt

Audit every factual claim in the proposed website.

Classify each as:
VERIFIED / USER-PROVIDED / INFERRED / PLACEHOLDER / MISSING.

Flag anything that could be mistaken for a factual business claim.

Never invent:
testimonials, logos, awards, certifications, statistics, reviews, prices, addresses, staff, partnerships, guarantees, case-study outcomes, or product capabilities.

Provide replacement placeholders where needed.

## 🖼️ Image Art-Direction Prompt

Create an image system for every important visual section.

For each asset specify:
subject, purpose, composition, lighting, mood, crop/aspect ratio, text-safe area, source type, alt-text intent, and whether it is essential.

Generate image-generation prompts only when useful.

Keep fictional/generated imagery clearly separate from factual business imagery.

## 📊 Analytics Plan Prompt

Define the minimum analytics system required to understand whether the website is achieving its business goal.

Choose:
- primary conversion
- secondary conversions
- meaningful engagement events
- event names
- event properties
- funnel stages
- consent/privacy requirements
- reporting questions

Avoid vanity events.

## 🤖 AI Coding-Agent Handoff Prompt

Transform the complete approved website strategy into a single implementation prompt.

The coding agent must:
- follow the approved architecture
- use the approved design tokens
- implement the approved component system
- use the approved technology stack
- preserve factual-content boundaries
- implement SEO
- implement accessibility
- implement analytics
- optimize performance
- implement appropriate loading/error/empty states
- respect motion limits
- avoid unnecessary dependencies
- avoid inventing business content

Return an ordered build plan followed by implementation instructions and a final QA checklist.
