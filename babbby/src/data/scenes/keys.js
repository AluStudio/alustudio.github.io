// What the home page's scenes draw from the Babbby app, by the app's own keys.
// scripts/sync-scene-strings.mjs copies exactly these into strings.<code>.json,
// and the build rejects a pack that lacks one or whose placeholders differ
// from en's.

export const CATEGORIES = [
  "gross_motor",
  "fine_motor",
  "language",
  "cognitive",
  "social_emotional",
  "sensory",
  "creative",
  "daily_life",
];

export const AGE_RANGES = ["0-6m", "6-12m", "12-18m", "18-24m", "2-3y", "3-4y", "4-6y"];

// Keys in the app's Localizable.strings.
export const SCENE_STRING_KEYS = [
  // Tab bar and Today
  "tab.today",
  "tab.library",
  "tab.stats",
  "tab.settings",
  "today.title",
  "card.tip",
  "photo.prompt",
  // Library and its material filter
  "library.title",
  "common.search",
  "filter.age",
  "filter.category",
  "filter.materials",
  "filter.materialsButton",
  "materialSelector.title",
  "materialSelector.subtitle",
  // Stats
  "stats.title",
  "stats.range.week",
  "stats.range.month",
  "stats.range.all",
  "stats.summary.label",
  "stats.category.title",
  "stats.trend.title",
  ...CATEGORIES.map((id) => `category.${id}`),
  ...AGE_RANGES.map((id) => `ageRange.${id}`),
];

/**
 * An activity of the app's built-in library: the `index`th entry of
 * `category` in ActivityData/<code>-age-<age>.json. Every language's file
 * lists the same activities in the same order, so the position is the id.
 */
const activity = (age, category, index) => ({ age, category, index });

// Today: the plan the hero phone shows, three to do and, last, one done.
export const TODAY_ACTIVITIES = [
  activity("12-18m", "gross_motor", 2),
  activity("12-18m", "cognitive", 0),
  activity("12-18m", "fine_motor", 0),
  activity("12-18m", "sensory", 5),
];

// Library: per age range, the first activity of four of its categories
// (an age range offers only some of the eight; the sync script fails on one
// it lacks).
const LIBRARY_CATEGORIES = {
  "0-6m": ["gross_motor", "fine_motor", "language", "sensory"],
  "6-12m": ["gross_motor", "sensory", "language", "social_emotional"],
  "12-18m": ["gross_motor", "fine_motor", "cognitive", "sensory"],
  "18-24m": ["gross_motor", "language", "cognitive", "creative"],
  "2-3y": ["fine_motor", "cognitive", "creative", "daily_life"],
  "3-4y": ["gross_motor", "language", "social_emotional", "daily_life"],
  "4-6y": ["fine_motor", "cognitive", "creative", "daily_life"],
};

export const LIBRARY_CELLS = Object.fromEntries(
  AGE_RANGES.map((age) => [age, LIBRARY_CATEGORIES[age].map((category) => activity(age, category, 0))]),
);

// Materials I Have: the chips the scene shows (ids of
// ActivityData/<code>-material-consolidation.json), and what each step of
// its story has selected with the activities the Library then lists. The
// app lists an activity when any of its materials is selected; the sync
// script fails if a listed activity needs none of the step's materials.
export const MATERIAL_CHIPS = ["CMAT-003", "CMAT-001", "CMAT-012", "CMAT-014", "CMAT-002", "CMAT-010"];

export const MATERIAL_STEPS = [
  {
    selected: ["CMAT-003", "CMAT-001"],
    results: [activity("2-3y", "fine_motor", 0), activity("2-3y", "fine_motor", 4), activity("2-3y", "fine_motor", 6)],
  },
  {
    selected: ["CMAT-003"],
    results: [activity("2-3y", "fine_motor", 0), activity("2-3y", "fine_motor", 4), activity("2-3y", "social_emotional", 7)],
  },
  {
    selected: ["CMAT-003", "CMAT-012"],
    results: [activity("2-3y", "fine_motor", 0), activity("2-3y", "social_emotional", 1), activity("2-3y", "cognitive", 2)],
  },
  {
    selected: ["CMAT-012"],
    results: [activity("2-3y", "social_emotional", 1), activity("2-3y", "cognitive", 2), activity("2-3y", "creative", 2)],
  },
  {
    selected: ["CMAT-012", "CMAT-001"],
    results: [activity("2-3y", "creative", 2), activity("2-3y", "fine_motor", 6), activity("2-3y", "cognitive", 4)],
  },
  {
    selected: ["CMAT-001"],
    results: [activity("2-3y", "fine_motor", 6), activity("2-3y", "cognitive", 4), activity("2-3y", "fine_motor", 4)],
  },
];

/** The pack key of an activity, e.g. "2-3y/fine_motor/0". */
export function activityKey({ age, category, index }) {
  return `${age}/${category}/${index}`;
}

/** Every printf placeholder in `value`, sorted, e.g. ["%1$@", "%2$@"]. */
export function placeholders(value) {
  return (value.match(/%(\d+\$)?(@|lld|d)/g) ?? []).sort();
}
