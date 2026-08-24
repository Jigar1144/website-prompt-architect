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
