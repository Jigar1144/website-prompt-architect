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


/**
 * Compressed interview model. One response can satisfy multiple latent fields.
 * This keeps the user-facing interview short while preserving the full project state.
 */
export const INTERVIEW_BUNDLES = [
  {
    key: "business",
    asks: ["businessName", "businessType"],
    prompt: "What is the business/brand name and what does it do?",
    infer: ["industry", "offer", "visitorIntent", "trustModel", "contentDensity"]
  },
  {
    key: "outcome",
    asks: ["primaryGoal", "audience", "market"],
    prompt: "What should the website achieve, who is it for, and what is the main offer or market?",
    infer: ["conversionModel", "prioritySections", "proofNeeds", "contentPriority"]
  },
  {
    key: "direction",
    asks: ["brandStatus", "assetStatus", "features", "visualTaste", "motionLevel"],
    prompt: "What brand/assets already exist, what special features matter, and what visual feel do you prefer?",
    infer: ["styleCandidates", "paletteCandidates", "fontCandidates", "motionTier", "assetNeeds"]
  },
  {
    key: "exceptions",
    asks: ["websiteStatus", "technology", "pageStructure"],
    prompt: "Anything that must be preserved or avoided—existing website/stack, required pages, or hard constraints?",
    infer: ["migrationRisk", "stackConstraints", "pageConstraints"]
  }
];

export const GUIDED_INTERVIEW_ORDER = INTERVIEW_BUNDLES.map(bundle => bundle.key);

export function bundleInterviewState(answerState = {}, bundle = {}) {
  return {
    ...answerState,
    __bundleMeta: {
      ...(answerState.__bundleMeta || {}),
      [bundle.key]: {
        answered: true,
        asks: bundle.asks,
        inferred: bundle.infer
      }
    }
  };
}

export function nextInterviewBundle(state = {}) {
  return INTERVIEW_BUNDLES.find(bundle => !state.__bundleMeta?.[bundle.key]?.answered) || null;
}

export function nextRequiredQuestion(state = {}, requirements = {}) {
  const bundle = nextInterviewBundle(state);
  if (!bundle) return null;
  const requiredInBundle = bundle.asks.find(key => requirements[key] !== "optional" && !state[key]);
  return requiredInBundle ? {
    key: bundle.key,
    prompt: bundle.prompt,
    fields: bundle.asks
  } : {
    key: bundle.key,
    prompt: bundle.prompt,
    fields: bundle.asks
  };
}

export function inferMissingProjectState(project = {}) {
  const inferred = { ...(project.inferred || {}) };
  const type = `${project.businessType || ""} ${project.market || ""}`.toLowerCase();

  if (!inferred.motionTier) {
    inferred.motionTier = /finance|health|medical|law|professional/.test(type) ? "LIGHT" :
      /luxury|automotive|architecture|creative|gaming|immersive/.test(type) ? "CINEMATIC" : "MODERATE";
  }

  if (!inferred.contentDensity) {
    inferred.contentDensity = /dashboard|analytics|saas|finance/.test(type) ? "MEDIUM-HIGH" : "MEDIUM";
  }

  if (!inferred.visitorIntent) {
    inferred.visitorIntent = /restaurant|cafe|hotel|hospitality/.test(type) ? "discover-and-book" :
      /ecommerce|retail|shop/.test(type) ? "discover-and-buy" :
      /saas|software|app/.test(type) ? "understand-and-convert" :
      "understand-and-take-action";
  }

  return inferred;
}

export function collapseAnswersToProject(state = {}) {
  const inferred = inferMissingProjectState(state);
  return {
    ...state,
    inferred,
    interviewMode: "compressed",
    interviewQuestionCount: INTERVIEW_BUNDLES.length
  };
}

export function applyInterviewAnswer(state = {}, key, value) {
  return { ...state, [key]: value };
}


/**
 * Prompt compilation helpers.
 * These functions make downstream prompts self-contained and version-aware.
 */

export const PROMPT_REQUIRED_SECTIONS = [
  "OBJECTIVE",
  "SOURCE OF TRUTH",
  "LOCKED DECISIONS",
  "SUCCESS CRITERIA",
  "NON-NEGOTIABLES",
  "DO NOT INVENT",
  "OUTPUT",
  "VALIDATION"
];

export function buildPromptSourceOfTruth(project = {}) {
  return {
    projectId: project.projectId || project.businessName || "project",
    businessName: project.businessName || "[Business Name]",
    businessType: project.businessType || "[Business Type]",
    designSystemVersion: project.designSystemVersion || "MASTER",
    artDirectionVersion: project.artDirectionVersion || "ART-DIRECTION-1",
    stack: project.stack || null,
    approvedSections: project.sections || [],
    approvedDecisions: project.approvedDecisions || {},
    openVariables: project.openVariables || []
  };
}

export function validatePromptStructure(prompt = "") {
  const missing = PROMPT_REQUIRED_SECTIONS.filter(
    section => !new RegExp(`^${section}\\b`, "mi").test(prompt)
  );
  return {
    valid: missing.length === 0,
    missing
  };
}

export function buildImagePrompt(asset = {}, project = {}) {
  const truth = buildPromptSourceOfTruth(project);
  const lock = project.artDirection || {};
  const negativeRules = [
    ...(lock.negativeRules || []),
    ...(asset.negativeRules || [])
  ];

  return [
    "OBJECTIVE",
    `Create ONE production-ready image asset for ${truth.businessName}.`,
    "",
    "SOURCE OF TRUTH",
    `- Design-system version: ${truth.designSystemVersion}`,
    `- Art-direction version: ${truth.artDirectionVersion}`,
    `- Section: ${asset.section || "[Section]"}`,
    `- Section purpose: ${asset.purpose || "[Purpose]"}`,
    `- Asset role: ${asset.role || "[Role]"}`,
    "",
    "LOCKED DECISIONS",
    `- Style: ${lock.style || "[Style]"}`,
    `- Materials: ${lock.materials || "[Materials]"}`,
    `- Lighting: ${lock.lighting || "[Lighting]"}`,
    `- Camera/lens/perspective: ${lock.camera || "[Camera]"}`,
    `- Environment: ${lock.environment || "[Environment]"}`,
    `- Color treatment: ${lock.colorTreatment || "[Color treatment]"}`,
    `- Texture/detail: ${lock.texture || "[Texture/detail]"}`,
    `- Subject scale: ${lock.subjectScale || "[Subject scale]"}`,
    "",
    "USAGE",
    `- Target viewport: ${asset.viewport || "desktop + mobile"}`,
    `- Aspect ratio: ${asset.aspectRatio || "[ratio]"}`,
    `- Placement: ${asset.placement || "[UI placement]"}`,
    `- Safe crop: ${asset.safeCrop || "[protected area]"}`,
    `- Text-safe zone: ${asset.textSafeZone || "[safe zone]"}`,
    `- Focal point: ${asset.focalPoint || "[focal point]"}`,
    "",
    "SUBJECT",
    `- Primary: ${asset.subject || "[subject]"}`,
    `- Secondary: ${asset.secondarySubject || "none"}`,
    `- Action/pose: ${asset.action || "static, natural pose"}`,
    `- Required objects: ${(asset.requiredObjects || []).join(", ") || "none"}`,
    `- Forbidden objects: ${(asset.forbiddenObjects || []).join(", ") || "none"}`,
    "",
    "COMPOSITION",
    `- Foreground: ${asset.foreground || "[foreground]"}`,
    `- Midground: ${asset.midground || "[midground]"}`,
    `- Background: ${asset.background || "[background]"}`,
    `- Negative space: ${asset.negativeSpace || "[negative space]"}`,
    `- Leading lines/flow: ${asset.leadingLines || "[visual flow]"}`,
    "",
    "CONTINUITY",
    `- Previous state: ${asset.previousState || "none"}`,
    `- This opening state: ${asset.entryState || "[entry state]"}`,
    `- Next state: ${asset.nextState || "none"}`,
    `- Continuity constraints: ${asset.continuity || "preserve camera, lighting, scale, and color logic"}`,
    "",
    "NON-NEGOTIABLES",
    "- Preserve the approved art direction, subject, composition intent, crop safety, and continuity.",
    "- Do not trade readability or UI-safe space for decorative detail.",
    "",
    "DO NOT INVENT",
    "Do not invent brand facts, product features, identities, locations, logos, statistics, interface elements, or text.",
    "",
    "NEGATIVE RULES",
    ...(negativeRules.length ? negativeRules.map(x => `- ${x}`) : ["- No watermarks, accidental text, broken geometry, or visual artifacts."]),
    "",
    "OUTPUT",
    "Generate one master asset only. Do not create alternate concepts.",
    "",
    "SUCCESS CRITERIA",
    "- Correct subject and composition",
    "- UI-safe crop",
    "- Consistent art direction",
    "- Clean geometry/anatomy",
    "- No accidental text/logos/watermarks",
    "- Continuity preserved",
    "",
    "VALIDATION",
    "Reject/revise only for an objective failure in subject, composition, crop safety, geometry/anatomy, lighting/material, palette, continuity, or visible artifacts."
  ].join("\n");
}

export function imageAcceptance(result = {}) {
  const checks = [
    "subjectCorrect",
    "compositionCorrect",
    "cropSafe",
    "geometryClean",
    "lightingConsistent",
    "materialConsistent",
    "paletteCorrect",
    "noAccidentalText",
    "continuityPreserved",
    "uiSafeArea"
  ];
  const passed = checks.filter(key => result[key] === true).length;
  return {
    passed,
    total: checks.length,
    percentage: Math.round((passed / checks.length) * 100),
    accepted: passed === checks.length
  };
}

export function buildSurgicalRevision(assetPrompt, failedDimension, targetFix) {
  return [
    "SURGICAL REVISION",
    `FAILED DIMENSION: ${failedDimension}`,
    `CHANGE ONLY: ${targetFix}`,
    "KEEP UNCHANGED:",
    "- subject",
    "- art direction",
    "- camera family",
    "- lighting direction",
    "- palette family",
    "- composition intent",
    "- safe crop",
    "- continuity",
    "",
    "SUCCESS TEST",
    `The ${failedDimension} must satisfy the target fix without altering any locked decision.`,
    "",
    "ORIGINAL PROMPT",
    assetPrompt
  ].join("\n");
}

export const DESIGN_LIBRARY_CAPABILITIES = {
  uiStyles: { target: 79 },
  colorPalettes: { target: 192 },
  fontPairings: { target: 74 },
  chartTypes: { target: 25 },
  techStacks: { target: 22 },
  uxGuidelines: { target: 119 },
  reasoningRules: { target: 192 }
};

export function getCatalogCapabilityStatus(catalogs = {}) {
  return Object.entries(DESIGN_LIBRARY_CAPABILITIES).reduce((status, [key, meta]) => {
    const actual = Array.isArray(catalogs[key]) ? catalogs[key].length : 0;
    status[key] = { actual, target: meta.target, complete: actual >= meta.target };
    return status;
  }, {});
}

/**
 * Reasoning Engine v3 — accuracy-first decision support.
 *
 * Turns sparse interview answers into explicit, auditable design decisions.
 * The engine prefers grounded defaults, resolves conflicts by priority, and
 * exposes uncertainty so downstream prompts never silently invent facts.
 */
export const REASONING_PRIORITY = [
  "explicit_user_fact",
  "explicit_constraint",
  "business_goal",
  "audience_need",
  "industry_pattern",
  "brand_signal",
  "content_requirement",
  "experience_preference",
  "catalog_default",
  "creative_experiment"
];

export function normalizeSignal(value = "") {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ");
}

export function inferBusinessProfile(input = {}) {
  const businessType = normalizeSignal(input.businessType);
  const goal = normalizeSignal(input.primaryGoal);
  const audience = normalizeSignal(input.audience);
  const combined = `${businessType} ${goal} ${audience}`;

  const profile = {
    industry: "general-business",
    trustModel: "proof-and-clarity",
    conversionModel: "enquiry",
    contentDensity: "medium",
    motionTolerance: "moderate",
    performanceSensitivity: "medium",
    accessibilitySensitivity: "medium",
    visitorIntent: "evaluate-and-contact",
    evidenceNeeded: ["clear value proposition", "credible proof", "primary CTA"],
    confidence: 0.42,
    assumptions: []
  };

  const rules = [
    { test: /construction|builder|building|contractor|real estate|property/, patch: {
      industry: "construction-and-property",
      trustModel: "proof-quality-transparency",
      conversionModel: /quote|estimate|site visit|enquiry/.test(combined) ? "qualified-lead" : "enquiry",
      contentDensity: "medium-high",
      motionTolerance: "moderate",
      performanceSensitivity: "high",
      visitorIntent: /investor|buy|property/.test(combined) ? "evaluate-project-and-credibility" : "evaluate-company-and-contact",
      evidenceNeeded: ["projects", "materials/workmanship", "process", "testimonials or proof", "clear enquiry path"]
    }},
    { test: /health|medical|clinic|doctor|dental/, patch: {
      industry: "healthcare",
      trustModel: "credibility-safety-clarity",
      conversionModel: "booking-or-enquiry",
      contentDensity: "medium",
      motionTolerance: "light",
      performanceSensitivity: "high",
      accessibilitySensitivity: "high",
      visitorIntent: "understand-and-book",
      evidenceNeeded: ["credentials", "services", "outcomes/proof", "clear booking path"]
    }},
    { test: /saas|software|app|platform|startup|ai tool/, patch: {
      industry: "software",
      trustModel: "clarity-proof-performance",
      conversionModel: "demo-or-signup",
      contentDensity: "high",
      motionTolerance: "moderate",
      performanceSensitivity: "high",
      visitorIntent: "understand-product-and-convert",
      evidenceNeeded: ["product clarity", "use cases", "proof", "pricing or CTA"]
    }},
    { test: /restaurant|cafe|hotel|hospitality|food/, patch: {
      industry: "hospitality",
      trustModel: "atmosphere-proof-convenience",
      conversionModel: "booking-or-visit",
      contentDensity: "medium",
      motionTolerance: "moderate",
      performanceSensitivity: "high",
      visitorIntent: "see-experience-and-act",
      evidenceNeeded: ["strong imagery", "offer/menu", "location", "booking/contact"]
    }},
    { test: /agency|studio|creative|portfolio|architect/, patch: {
      industry: "creative-services",
      trustModel: "taste-proof-authority",
      conversionModel: "enquiry",
      contentDensity: "medium",
      motionTolerance: "high",
      performanceSensitivity: "medium",
      visitorIntent: "judge-quality-and-fit",
      evidenceNeeded: ["selected work", "process", "point of view", "contact"]
    }}
  ];

  for (const rule of rules) {
    if (rule.test.test(combined)) {
      Object.assign(profile, rule.patch);
      profile.confidence = Math.min(0.92, profile.confidence + 0.28);
      break;
    }
  }

  if (goal) profile.confidence += 0.08;
  if (audience) profile.confidence += 0.08;
  profile.confidence = Math.min(0.98, profile.confidence);

  return profile;
}

export function scoreReasoningCandidate(candidate = {}) {
  const weights = {
    explicitEvidence: 8,
    businessFit: 7,
    goalFit: 7,
    audienceFit: 5,
    trustFit: 5,
    contentFit: 4,
    conversionFit: 6,
    visualCoherence: 4,
    implementationFit: 3,
    accessibilityFit: 4,
    performanceFit: 4,
    assumptionPenalty: -6,
    contradictionPenalty: -10,
    trendOnlyPenalty: -4,
    complexityPenalty: -3
  };

  return Object.entries(weights).reduce(
    (score, [key, weight]) => score + (Number(candidate[key]) || 0) * weight,
    0
  );
}

export function resolveDecisionConflicts(decisions = []) {
  const ranked = [...decisions].map((decision, index) => ({
    ...decision,
    priorityIndex: REASONING_PRIORITY.indexOf(decision.sourceType),
    index
  }));

  return ranked.sort((a, b) => {
    const aPriority = a.priorityIndex < 0 ? REASONING_PRIORITY.length : a.priorityIndex;
    const bPriority = b.priorityIndex < 0 ? REASONING_PRIORITY.length : b.priorityIndex;
    if (aPriority !== bPriority) return aPriority - bPriority;
    if ((b.confidence || 0) !== (a.confidence || 0)) return (b.confidence || 0) - (a.confidence || 0);
    return a.index - b.index;
  })[0] || null;
}

export function buildReasoningContract(input = {}) {
  const profile = inferBusinessProfile(input);
  const explicit = input.explicitDecisions || [];
  const assumptions = input.assumptions || [];

  return {
    version: "3.0",
    sourceOfTruth: {
      businessName: input.businessName || null,
      businessType: input.businessType || null,
      primaryGoal: input.primaryGoal || null,
      audience: input.audience || null,
      explicitDecisions: explicit
    },
    profile,
    decisionRules: {
      neverInventBusinessFacts: true,
      preferUserFactsOverDefaults: true,
      preserveApprovedDecisions: true,
      minimizeQuestions: true,
      avoidTrendDrivenChoices: true,
      requirePurposeForComplexity: true
    },
    uncertainty: {
      assumptions,
      confidence: profile.confidence,
      askFollowUpOnlyWhen: [
        "the missing fact would materially change conversion strategy",
        "a constraint conflicts with an approved decision",
        "a required asset/content item cannot be safely inferred"
      ]
    }
  };
}

export function auditReasoningOutput(output = {}, contract = {}) {
  const text = JSON.stringify(output).toLowerCase();
  const checks = {
    hasBusinessAnchor: Boolean(contract?.sourceOfTruth?.businessName),
    hasGoalAnchor: Boolean(contract?.sourceOfTruth?.primaryGoal),
    avoidsInventedFacts: !/(founded in|established in|clients include|awards|iso certified|certified by)/.test(text),
    hasPrimaryAction: /cta|call to action|primary action|conversion/.test(text),
    hasTradeoff: /tradeoff|fallback|alternative|risk/.test(text),
    hasAccessibility: /accessib|contrast|keyboard|reduced-motion|touch target/.test(text),
    hasResponsive: /responsive|mobile|tablet/.test(text),
    hasPerformance: /performance|lazy|fallback|budget|optimization/.test(text)
  };

  const passed = Object.values(checks).filter(Boolean).length;
  return { checks, score: passed / Object.keys(checks).length, passed };
}

export function shouldTriggerFollowUp(contract = {}, proposedDecision = {}) {
  const reasons = [];
  const confidence = Number(proposedDecision.confidence ?? contract?.profile?.confidence ?? 0.5);

  if (proposedDecision.materiallyChangesConversion) reasons.push("conversion-impact");
  if (proposedDecision.conflictsWithApproved) reasons.push("approved-decision-conflict");
  if (proposedDecision.requiredContentMissing) reasons.push("required-content-missing");

  return { shouldAsk: reasons.length > 0 && confidence < 0.8, reasons };
}
