/**
 * Shared by each sub-app's `scripts/copy-spa-pages.js`. When a route's
 * index.html is copied from the app root, its head tags must describe that
 * route, not the app homepage:
 *
 * - `<link rel="canonical">` / `og:url` must point at the route's own URL,
 *   otherwise search engines see every route (privacy, terms, faq...) claiming
 *   the app homepage as canonical and treat them as duplicate content.
 * - `<title>` / `description` / `og:title` / `og:description` must be
 *   route-specific, otherwise every route competes with the app homepage on the
 *   same text and none of them can rank for their own topic.
 *
 * Idempotent / order-independent: if a tag already exists it is replaced in
 * place; if it doesn't exist yet it is inserted before `</head>`. This means the
 * copy scripts work correctly whether or not the app's own index.html already
 * has the tag (see docs/drafts/cloudflare-migration.md Phase 2, Group B/C).
 */

const ESCAPES = { "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;" };

function escapeAttr(value) {
  return String(value).replace(/[&"<>]/g, (char) => ESCAPES[char]);
}

function escapeText(value) {
  return String(value).replace(/[&<>]/g, (char) => ESCAPES[char]);
}

// The replacement is passed as a function so that `$&`, `$1` and friends inside
// copy (prices, "$" in marketing text) are never treated as substitution
// patterns by String.prototype.replace.
function upsertTag(html, matchRe, tag) {
  if (matchRe.test(html)) {
    return html.replace(matchRe, () => tag);
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

/**
 * Set every route-specific head tag in one pass: canonical, og:url, title,
 * description, og:title, og:description.
 *
 * @param {string} html - full index.html contents of the copied route page
 * @param {object} meta
 * @param {string} meta.url - the route's own canonical URL
 * @param {string} [meta.title] - route title; omit to leave the app's title alone
 * @param {string} [meta.description] - route description; omit to leave the app's alone
 * @returns {string}
 */
export function setRouteMetadata(html, { url, title, description }) {
  html = setSelfCanonical(html, url);

  if (title) {
    const titleTag = `<title>${escapeText(title)}</title>`;
    html = /<title>[\s\S]*?<\/title>/.test(html)
      ? html.replace(/<title>[\s\S]*?<\/title>/, () => titleTag)
      : html.replace("</head>", `    ${titleTag}\n  </head>`);
    html = upsertTag(
      html,
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${escapeAttr(title)}" />`
    );
  }

  if (description) {
    html = upsertTag(
      html,
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${escapeAttr(description)}" />`
    );
    html = upsertTag(
      html,
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${escapeAttr(description)}" />`
    );
  }

  return html;
}
