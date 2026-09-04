/**
 * Website Prompt Architect — portable experience metadata engine.
 *
 * Framework-agnostic helper for premium prompt-pack UIs.
 * It does not render a website; it coordinates project metadata,
 * prompt navigation, copy state, and the $100K quality gate.
 */

export function createProject(config) {
  const defaults = {
    motionTier: "MODERATE",
    signatureMoments: [],
    artDirectionLocked: false,
    sections: [],
    promptCount: 0,
    qualityGate: {
      creative: false,
      storytelling: false,
      spatial: false,
      typography: false,
      interaction: false,
      performance: false,
    },
  };

  return { ...defaults, ...config };
}

export function normalizedProgress(current, total) {
  if (!total) return 0;
  return Math.max(0, Math.min(1, current / total));
}

export function buildSectionHandoff(previous, current, next) {
  return {
    previous: previous || null,
    current,
    next: next || null,
    rule:
      "The current section must visually and emotionally prepare the next section.",
  };
}

export function interactionPriority(type) {
  const levels = {
    primary: 3,
    secondary: 2,
    tertiary: 1,
  };
  return levels[type] || 1;
}

export function heavyEffectRequirements(effect) {
  return {
    effect,
    requires: [
      "business justification",
      "performance budget",
      "loading strategy",
      "mobile strategy",
      "static fallback",
      "reduced-motion fallback",
    ],
  };
}

export function agencyGatePassed(gate) {
  return Object.values(gate || {}).every(Boolean);
}

export async function copyPrompt(text) {
  if (!navigator?.clipboard) throw new Error("Clipboard API unavailable");
  await navigator.clipboard.writeText(text);
}


export const MOTION_LIBRARY = {
  scroll: [
    "parallax", "horizontal-scroll", "pin-reveal", "scrubbed-sequence",
    "image-zoom", "image-mask", "clip-path", "sticky-storytelling",
    "horizontal-gallery", "velocity-motion", "depth-parallax",
    "perspective-shift", "section-overlap", "progressive-blur",
    "scroll-typography", "marquee"
  ],
  text: [
    "fade", "split-lines", "split-words", "split-characters",
    "blur-sharp", "mask-reveal", "scale", "tracking",
    "color-transition", "sticky-headline", "kinetic-type",
    "variable-weight", "editorial-line"
  ],
  cards: [
    "lift", "shadow", "border-reveal", "image-zoom", "arrow-move",
    "spotlight", "perspective-tilt", "magnetic", "image-displacement",
    "depth", "expand", "hover-preview", "stacked-transition"
  ],
  image: [
    "ken-burns", "parallax", "zoom", "mask", "clip-path",
    "grayscale-color", "blur-sharp", "crossfade", "morph",
    "object-position", "perspective"
  ],
  section: [
    "curtain", "image-takeover", "color-wash", "clip-path",
    "circular-expansion", "fullscreen-image", "perspective",
    "vertical-wipe", "horizontal-wipe", "scale-through"
  ]
};

export function selectMotionProfile({
  businessType = "",
  experience = "",
  motionTier = "MODERATE",
  performance = "MEDIUM"
} = {}) {
  const text = `${businessType} ${experience}`.toLowerCase();

  if (/health|medical|finance|local service|professional/.test(text)) {
    return {
      tier: "LIGHT",
      scroll: ["fade", "image-mask"],
      text: ["split-lines", "fade"],
      cards: ["lift", "border-reveal"],
      cursor: [],
      section: ["vertical-wipe"],
      rule: "clarity-first"
    };
  }

  if (/luxury|automotive|architecture|creative|gaming|immersive/.test(text)) {
    return {
      tier: motionTier === "LIGHT" ? "MODERATE" : motionTier,
      scroll: ["pin-reveal", "parallax", "image-zoom"],
      text: ["split-lines", "scale", "editorial-line"],
      cards: ["perspective-tilt", "spotlight"],
      cursor: ["magnetic", "spotlight"],
      section: ["image-takeover", "scale-through"],
      rule: "cinematic-but-controlled"
    };
  }

  return {
    tier: motionTier,
    scroll: ["parallax", "image-mask", "scroll-typography"],
    text: ["split-lines", "fade"],
    cards: ["lift", "image-zoom"],
    cursor: [],
    section: ["vertical-wipe"],
    rule: "purposeful-editorial"
  };
}

export function createAnimationRecipe(section, profile, options = {}) {
  return {
    section,
    enter: profile.text?.[0] || "fade",
    image: profile.scroll?.[0] || "image-mask",
    interaction: profile.cards?.[0] || "lift",
    exit: profile.section?.[0] || "vertical-wipe",
    mobile: options.mobile || "reduce-distance-and-disable-cursor",
    reducedMotion: "static-state-or-instant-transition",
    performance: options.performance || "MEDIUM"
  };
}

export function validateMotionRecipe(recipe) {
  const required = ["section", "enter", "image", "interaction", "exit",
    "mobile", "reducedMotion", "performance"];
  return required.every(key => recipe && recipe[key] != null);
}


export function createDesignSystemContract({
  pattern,
  experience,
  style,
  colors,
  typography,
  effects = [],
  antiPatterns = [],
  accessibilityRisks = [],
  performanceRisks = []
} = {}) {
  return {
    pattern, experience, style, colors, typography, effects,
    antiPatterns, accessibilityRisks, performanceRisks
  };
}

export function validateDesignSystemContract(contract) {
  const required = [
    "pattern", "experience", "style", "colors", "typography",
    "effects", "antiPatterns"
  ];
  return required.every(key => contract && contract[key] != null);
}

export const FRONTEND_QUALITY_CHECKS = [
  "semantic-html",
  "heading-hierarchy",
  "keyboard-focus",
  "native-interaction-semantics",
  "responsive-text-wrap",
  "long-content-resilience",
  "reduced-motion",
  "contrast",
  "tap-targets",
  "loading-empty-error-states",
  "no-hover-only-essential-content"
];


export const INTERVIEW_STAGES = [
  "business",
  "strategy",
  "brand",
  "experience",
  "features",
  "technology",
  "visual-direction",
  "structure"
];

export function nextInterviewStage(state = {}) {
  for (const stage of INTERVIEW_STAGES) {
    if (!state[stage]?.approved) return stage;
  }
  return "complete";
}

export function shouldAsk(question, context = {}) {
  if (question?.required) return true;
  if (context.inferredAnswers?.includes(question?.key)) return false;
  return Boolean(question?.needed);
}


export const DESIGN_SYSTEM_DOMAINS = [
  "industry", "pattern", "style", "color", "typography", "ux",
  "motion", "icons", "responsive", "accessibility", "performance", "stack"
];

export function scoreDesignCandidate(candidate = {}) {
  const weights = {
    businessFit: 2,
    intentFit: 2,
    contentFit: 1,
    conversionFit: 2,
    visualCoherence: 2,
    complexityCost: -1
  };
  return Object.entries(weights).reduce(
    (score, [key, weight]) => score + (Number(candidate[key]) || 0) * weight,
    0
  );
}

export function chooseDesignCandidate(candidates = []) {
  return [...candidates].sort(
    (a, b) => scoreDesignCandidate(b) - scoreDesignCandidate(a)
  )[0] || null;
}

export function resolveDesignSystem(master = {}, pageOverride = {}) {
  return { ...master, ...pageOverride };
}

export const DESIGN_AUDIT_CHECKS = [
  "business-fit",
  "pattern-fit",
  "typography",
  "color-contrast",
  "resilient-headings",
  "long-content",
  "chips-badges",
  "keyboard-focus",
  "native-controls",
  "hover-independence",
  "reduced-motion",
  "responsive-widths",
  "loading-empty-error-states",
  "stack-correctness",
  "anti-patterns"
];

export function designAuditScore(results = {}) {
  const values = DESIGN_AUDIT_CHECKS.map(key => results[key]);
  const passed = values.filter(Boolean).length;
  return {
    passed,
    total: DESIGN_AUDIT_CHECKS.length,
    percentage: Math.round((passed / DESIGN_AUDIT_CHECKS.length) * 100)
  };
}


export const GUIDED_INTERVIEW_ORDER = [
  "businessName",
  "businessType",
  "websiteStatus",
  "primaryGoal",
  "audience",
  "offer",
  "market",
  "brandStatus",
  "assetStatus",
  "features",
  "visualTaste",
  "motionLevel",
  "technology",
  "pageStructure",
  "finalApproval"
];

export function nextRequiredQuestion(state = {}, requirements = {}) {
  for (const key of GUIDED_INTERVIEW_ORDER) {
    if (requirements[key] === "optional") continue;
    if (state[key] === undefined || state[key] === null || state[key] === "") {
      return key;
    }
  }
  return null;
}

export function applyInterviewAnswer(state = {}, key, value) {
  return { ...state, [key]: value };
}

// V5 Production Intelligence Layer — declarative module registry so
// downstream agents can consume the same contract as SKILL.md's
// "Production Intelligence Layer" section.
export const V5_MODULES = {
  competitiveTeardown: {
    icon: "🧭",
    output: ["categoryPatternsAdopt", "categoryPatternsAdapt", "categoryPatternsAvoid", "differentiationStatement"]
  },
  pageArchitecture: {
    icon: "🗺️",
    output: ["navigation", "pages", "seoLandingPages", "conversionPaths", "rationale"]
  },
  componentArchitecture: {
    icon: "🧩",
    output: ["global", "shared", "pageSpecific", "dataDriven", "interactive", "states"]
  },
  designTokensAsCode: {
    icon: "💻",
    output: ["cssCustomProperties", "tailwindThemeExtend"]
  },
  contentTrust: {
    icon: "🛡️",
    statuses: ["VERIFIED", "USER-PROVIDED", "INFERRED", "PLACEHOLDER", "MISSING"]
  },
  copywriting: {
    icon: "📝",
    output: ["coreValueProp", "valuePropStack", "sectionHeadlines", "objectionMap", "ctaHierarchy", "microcopy", "toneCalibration"]
  },
  seo: {
    icon: "🔍",
    output: ["primaryKeyword", "titleTag", "metaDescription", "headingHierarchy", "structuredData", "internalLinking", "localSeo", "sitemapRobots"]
  },
  accessibilityPerformance: {
    icon: "♿",
    output: ["wcagTarget", "contrastCheck", "keyboardAria", "reducedMotionFallbacks", "coreWebVitals", "imageOptimization", "fontLoading", "bundleBudget"]
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

export function getV5Modules() {
  return V5_MODULES;
}
