/**
 * Verified facts about each app, used to generate structured data.
 *
 * Single source of truth: nothing here may be guessed. Every store URL below was
 * confirmed live before being added, and the values mirror what the stores
 * themselves report:
 *
 *   iOS      https://itunes.apple.com/lookup?id=<id>          (verified 2026-07-27)
 *   Android  https://play.google.com/store/apps/details?id=<pkg>
 *            (verified 2026-07-27; a non-existent package returns HTTP 404,
 *            so a 200 plus a matching og:title is a real listing)
 *
 * `aggregateRating` is deliberately absent everywhere. At verification time the
 * stores reported 0 ratings for Pikgeon and Babbby and a single rating for
 * Sotto, so there is no honest aggregate to publish — and Google requires the
 * markup to match what users can actually see on the page. Add it, together with
 * a refresh mechanism, only once an app has a meaningful review count.
 */

/** Apps with landing-page structured data. `home` is the studio page, handled separately. */
export const APP_MANIFEST = {
  pikgeon: {
    name: "Pikgeon",
    // schema.org applicationCategory, mapped from the App Store primary genre.
    applicationCategory: "UtilitiesApplication",
    operatingSystem: ["iOS", "Android"],
    price: "0",
    priceCurrency: "USD",
    storeUrls: [
      "https://apps.apple.com/app/pikgeon/id6759579587",
      "https://play.google.com/store/apps/details?id=com.alu.pikgeon",
    ],
  },
  babbby: {
    name: "Babbby — Daily Baby Activities",
    applicationCategory: "LifestyleApplication",
    operatingSystem: ["iOS"],
    price: "0",
    priceCurrency: "USD",
    storeUrls: ["https://apps.apple.com/app/babbby-daily-baby-activities/id6760455078"],
  },
  sotto: {
    name: "Sotto: For the People You Love",
    applicationCategory: "LifestyleApplication",
    operatingSystem: ["iOS", "Android"],
    price: "0",
    priceCurrency: "USD",
    storeUrls: [
      "https://apps.apple.com/app/sotto-for-the-people-you-love/id6763928854",
      "https://play.google.com/store/apps/details?id=com.alustudio.sotto",
    ],
  },
  dingpos: {
    name: "DingPOS",
    applicationCategory: "BusinessApplication",
    operatingSystem: ["iOS"],
    // Not on the App Store yet (a store search returns no results, and the
    // page's own download button is still a placeholder), so no storeUrls and
    // no offer: claiming either would be a false availability signal.
    storeUrls: [],
  },
};

export const ORGANIZATION = {
  name: "Alu Studio",
  url: "https://alu-studio.com/home/",
  // Kept in sync with the studio positioning on /home/ and in llms.txt: iPad is
  // named explicitly because DingPOS is iPad-only.
  description:
    "Independent app studio building small, focused apps for iPhone, iPad, and Android.",
};
