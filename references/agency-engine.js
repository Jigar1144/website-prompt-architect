


// V5 production intelligence modules.
// These are declarative so downstream agents can consume the same contract.
const V5_MODULES = {
  pageArchitecture: {
    icon: "🗺️",
    output: ["navigation", "pages", "seoLandingPages", "conversionPaths", "rationale"]
  },
  componentArchitecture: {
    icon: "🧩",
    output: ["global", "shared", "pageSpecific", "dataDriven", "interactive", "states"]
  },
  technologyDecision: {
    icon: "⚙️",
    candidates: [
      "Astro", "Next.js", "React + Vite", "React Router / Remix",
      "Nuxt", "SvelteKit", "Tailwind CSS", "shadcn/ui", "GSAP",
      "Motion", "Lenis", "Three.js", "React Three Fiber", "Drei",
      "Spline", "PixiJS", "Sanity", "Contentful", "Storyblok",
      "WordPress", "Shopify", "Hydrogen", "Stripe"
    ]
  },
  contentTrust: {
    icon: "🛡️",
    statuses: ["VERIFIED", "USER-PROVIDED", "INFERRED", "PLACEHOLDER", "MISSING"]
  },
  imageArtDirection: {
    icon: "🖼️",
    output: ["assetId", "purpose", "subject", "composition", "lighting", "mood", "aspectRatio", "sourceType", "altIntent"]
  },
  analytics: {
    icon: "📊",
    output: ["primaryConversion", "secondaryConversions", "events", "properties", "funnel", "privacy"]
  },
  codingAgentHandoff: {
    icon: "🤖",
    output: ["masterPrompt", "buildSequence", "constraints", "qaChecklist"]
  }
};

function getV5Modules() {
  return V5_MODULES;
}

if (typeof module !== "undefined") {
  module.exports = module.exports || {};
  module.exports.V5_MODULES = V5_MODULES;
  module.exports.getV5Modules = getV5Modules;
}
