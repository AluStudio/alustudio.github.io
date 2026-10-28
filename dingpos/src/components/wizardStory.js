// The onboarding wizard's story (WizardScene), shared with the step list
// beside it (HomePage Steps), which fills each item's track in step.

export const STORE_NAME = "Alu Café";
export const STORE_GLYPHS = Array.from(STORE_NAME);

/**
 * Story steps. `screen` is the wizard step on show; `fill` is the list item
 * whose track is filling (lower items are done, so 3 marks all three done).
 */
export const wizardSteps = [
  { screen: 2, fill: 3, ms: 3400 },
  { screen: 0, fill: -1, ms: 400 },
  { screen: 0, fill: 0, ms: 1100 },
  { screen: 0, fill: 0, picked: true, ms: 1000 },
  { screen: 0, fill: 0, picked: true, press: true, ms: 320 },
  { screen: 1, fill: 1, typed: 0, ms: 700 },
  ...STORE_GLYPHS.map((_, k) => ({ screen: 1, fill: 1, typed: k + 1, ms: 55 + (k % 3) * 15 })),
  { screen: 1, fill: 1, logo: true, ms: 1000 },
  { screen: 1, fill: 1, logo: true, press: true, ms: 320 },
];
export const wizardEntry = 1;

/** How long each list item's track takes to fill: the time its screen is on. */
export const wizardFillMs = [0, 1, 2].map((item) =>
  wizardSteps.reduce((sum, s) => (s.fill === item ? sum + s.ms : sum), 0),
);
