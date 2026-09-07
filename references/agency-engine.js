/*
 * Website Prompt Architect — Agency Engine
 *
 * Lightweight helpers for deterministic prompt-pack generation.
 * No external dependency is required.
 */

const MOTION_PRESETS = {
  fadeUp: {
    trigger: "viewport",
    duration: "400–600ms",
    cost: "low",
    reducedMotion: "show final state immediately"
  },
  wordReveal: {
    trigger: "viewport",
    duration: "500–800ms",
    cost: "low",
    reducedMotion: "show final state immediately"
  },
  maskReveal: {
    trigger: "viewport",
    duration: "600–900ms",
    cost: "low-medium",
    reducedMotion: "remove transform"
  },
  countUp: {
    trigger: "viewport",
    duration: "800–1200ms",
    cost: "low",
    reducedMotion: "show final number"
  },
  imageScale: {
    trigger: "hover",
    duration: "300–400ms",
    cost: "low",
    mobile: "disable hover dependency"
  },
  staggerGrid: {
    trigger: "viewport",
    duration: "400–600ms",
    cost: "low",
    reducedMotion: "show all immediately"
  },
  svgDraw: {
    trigger: "viewport",
    duration: "800–1400ms",
    cost: "low-medium",
    reducedMotion: "show completed path"
  },
  markerReveal: {
    trigger: "viewport",
    duration: "400–800ms",
    cost: "low",
    reducedMotion: "show all markers"
  }
};

const BUILD_STEPS = [
  "Project Setup",
  "Installation / Dependencies",
  "Folder Structure",
  "Global Design System",
  "Content / Data Architecture",
  "Shared Components",
  "Header / Navigation",
  "Hero",
  "Approved Sections",
  "Footer",
  "SEO",
  "Accessibility",
  "Responsive",
  "Performance",
  "Motion Enhancement",
  "Motion QA",
  "Final Agency QA",
  "Build Verification"
];

function motionPreset(name) {
  return MOTION_PRESETS[name] || null;
}

function buildStepList(sectionNames = []) {
  return [
    ...BUILD_STEPS.slice(0, 8),
    ...sectionNames,
    ...BUILD_STEPS.slice(9)
  ];
}

function validateMotionRecipe(recipe = {}) {
  const required = [
    "purpose",
    "enter",
    "mobile",
    "reducedMotion",
    "performance"
  ];

  return required.every((key) => recipe[key] !== undefined);
}

function validateImageAsset(asset = {}) {
  const required = [
    "id",
    "name",
    "filename",
    "ratio",
    "positivePrompt",
    "negativePrompt"
  ];

  return required.every((key) => Boolean(asset[key]));
}

function agencyGate(report = {}) {
  const checks = [
    "businessSpecific",
    "visualIdentity",
    "storytelling",
    "typography",
    "interactionHierarchy",
    "motionPurposeful",
    "mobileQuality",
    "accessibility",
    "performance",
    "factualIntegrity"
  ];

  const failed = checks.filter((key) => report[key] === false);

  return {
    status: failed.length ? "REVISE" : "PASS",
    failed
  };
}

module.exports = {
  MOTION_PRESETS,
  BUILD_STEPS,
  motionPreset,
  buildStepList,
  validateMotionRecipe,
  validateImageAsset,
  agencyGate
};
