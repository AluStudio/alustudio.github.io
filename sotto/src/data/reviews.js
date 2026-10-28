// App Store reviews quoted on the home page. Every one is from the Taiwan
// storefront, the only one with written reviews; the zh-Hant locale holds the
// reviewer's own words, zh-Hans is converted from it (so its `reviews.source`
// carries no translation note), and every other locale translates them and
// says so in `reviews.source`. Pull fresh data
// with `asc reviews list --app 6763928854 --include-response`, and update
// RATING (and `reviews.source` in every locale) when the store numbers change.

export const RATING = { average: "5.0", count: 13 };

// `id` keys the copy under `reviews.items` in each locale; `response` marks the
// ones with a developer response (and the feature it led to).
export const REVIEWS = [
  { id: "uu14188", author: "UU14188" },
  { id: "moyu", author: "寞語", response: true },
  { id: "diadialydia", author: "diadialydia", response: true },
  { id: "dreamer", author: "作夢的人", response: true },
];
