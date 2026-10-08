// FAQ ↔ App Store version contract. scripts/copy-spa-pages.js enforces the
// mechanical parts at build time; the rest is the release routine below.
//
// VERIFIED_APP_VERSION — the App Store version every article has been checked
//   against. Shown on the support page as "content reflects DingPOS X".
//   Bump it only after re-reading that release's section of the product repo's
//   CHANGELOG.md against the FAQ, even when no article needed a change. Never
//   set it to a version that is not live on the App Store yet.
//
// article.since — the version that first shipped the feature the article is
//   about. Set it on articles for features added after 1.0 (the launch
//   baseline); leave it off for 1.0 features. It records a fact, so it never
//   changes once set. Both language packs carry the same value.
//
// A later release that changes an existing feature: rewrite the article to the
//   current behavior and leave `since` alone. Name the version inline ("2.4 起"
//   / "Since 2.4, …") only where a reader still on an older version would see
//   different behavior and get misled by the steps.
//
// Unreleased features never reach main. Write them on a `faq-<version>` branch
//   and merge it once the App Store serves that version — together with the
//   VERIFIED_APP_VERSION bump. The build rejects any `since` newer than
//   VERIFIED_APP_VERSION. Check what is live with:
//   curl -s 'https://itunes.apple.com/lookup?id=6788988943&country=tw' | jq -r '.results[0].version'
//
// Version strings are the App Store marketing version ("2.0", "3.0.1") — the
// product repo's `v{marketing}` tag without the "v".
export const VERIFIED_APP_VERSION = "3.0";
