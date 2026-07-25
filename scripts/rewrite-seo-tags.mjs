/**
 * Shared by each sub-app's `scripts/copy-spa-pages.js`. When a route's
 * index.html is copied from the app root, its <link rel="canonical"> and
 * og:url must point at that route's own URL, not the app root — otherwise
 * search engines see every route (privacy, terms, faq...) claiming the app
 * homepage as canonical and treat them as duplicate content.
 *
 * Idempotent / order-independent: if the tag already exists it is replaced
 * in place; if it doesn't exist yet it is inserted before `</head>`. This
 * means the copy scripts work correctly whether or not the app's own
 * index.html already has canonical/og:url tags (see
 * docs/drafts/cloudflare-migration.md Phase 2, Group B/C).
 */

function upsertTag(html, matchRe, tag) {
  if (matchRe.test(html)) {
    return html.replace(matchRe, tag);
  }
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

/**
 * @param {string} html - full index.html contents of the copied route page
 * @param {string} url - the route's own canonical URL, e.g. "https://alu-studio.com/pikgeon/privacy/"
 * @returns {string} html with canonical + og:url set to `url`
 */
export function setSelfCanonical(html, url) {
  html = upsertTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`);
  html = upsertTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`);
  return html;
}
