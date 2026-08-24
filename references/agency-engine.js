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
