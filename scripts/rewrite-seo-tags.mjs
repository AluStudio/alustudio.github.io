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
  // Replacer as a function, not a string: `$&`, `$'` etc. in the replacement
  // are substitution patterns for String.replace, and page titles are author
  // content that may legitimately contain `$`.
  if (matchRe.test(html)) {
    return html.replace(matchRe, () => tag);
  }
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

/** Escape a string for use inside a double-quoted HTML attribute. */
function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Escape a string for use as HTML text content. */
function escapeText(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
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

/**
 * Give a copied route page its own title / description. Without this every
 * copy inherits the app root's <title> and description, so a sitemap full of
 * self-canonical routes still presents identical titles and snippets to search
 * engines and social cards — the exact duplicate-content signal
 * `setSelfCanonical` exists to avoid.
 *
 * @param {string} html - full index.html contents of the copied route page
 * @param {{ title?: string, description?: string }} meta - route-specific meta
 * @returns {string} html with title/og:title (and description/og:description) set
 */
export function setPageMeta(html, { title, description } = {}) {
  if (title) {
    html = upsertTag(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`);
    html = upsertTag(
      html,
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${escapeAttr(title)}" />`,
    );
  }
  if (description) {
    html = upsertTag(
      html,
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${escapeAttr(description)}" />`,
    );
    html = upsertTag(
      html,
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${escapeAttr(description)}" />`,
    );
  }
  return html;
}
