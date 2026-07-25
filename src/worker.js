/**
 * Alu Studio site Worker.
 *
 * Runs BEFORE static assets (assets.run_worker_first: true in wrangler.jsonc),
 * so every request hits this handler first. Responsibilities, in order:
 *
 *   1. www.alu-studio.com -> alu-studio.com, 301, path + query preserved.
 *   2. / -> /home/, 301 (root landing redirect).
 *   3. Everything else -> served from the ASSETS binding (the `_site/` build).
 *   4. Asset 404 -> real 404.html body, real 404 status (no client-side
 *      redirect script — replaces the old GitHub Pages 404.html SPA-fallback
 *      hack, which is no longer needed now that every route has a real
 *      index.html file).
 *   5. Cache / security headers applied to every response.
 *
 * See docs/drafts/cloudflare-migration.md Phase 1 for the reviewed design.
 * Locked by critic review: no `_redirects`/`_headers` files — Cloudflare
 * static assets does not support host-level (www -> apex) redirects there,
 * so all redirect and header logic lives here instead.
 */

const APEX_HOST = "alu-studio.com";
const WWW_HOST = "www.alu-studio.com";

// Vite emits content-hashed filenames for build assets (e.g. index-B3f9x1kQ.js).
// Anything matching this is safe to cache forever.
const HASHED_ASSET_RE = /-[A-Za-z0-9_-]{8,}\.(js|css|woff2?|png|jpe?g|svg|webp|avif|ico)$/i;

export default {
  async fetch(request, env, _ctx) {
    const url = new URL(request.url);

    // 1. www -> apex (preserve path + query)
    if (url.hostname === WWW_HOST) {
      url.hostname = APEX_HOST;
      return Response.redirect(url.toString(), 301);
    }

    // 2. root -> /home/
    if (url.pathname === "/") {
      url.pathname = "/home/";
      return Response.redirect(url.toString(), 301);
    }

    // 3. static assets
    const assetResponse = await env.ASSETS.fetch(request);

    // 4. true 404 (assets binding returns 404 with no useful body for
    //    unmatched paths; not_found_handling is intentionally left unset
    //    ("none") in wrangler.jsonc so we can own the 404 response here)
    if (assetResponse.status === 404) {
      const notFoundAsset = await env.ASSETS.fetch(new URL("/404.html", request.url));
      const body = notFoundAsset.ok ? notFoundAsset.body : "Not Found";
      return applyHeaders(
        new Response(body, { status: 404, headers: notFoundAsset.headers }),
        url,
      );
    }

    // 5. headers
    return applyHeaders(assetResponse, url);
  },
};

function applyHeaders(response, url) {
  const headers = new Headers(response.headers);

  if (HASHED_ASSET_RE.test(url.pathname)) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else if (url.pathname.endsWith(".html") || url.pathname.endsWith("/")) {
    headers.set("Cache-Control", "no-cache");
  }

  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Frame-Options", "DENY");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
