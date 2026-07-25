// Regression tests for src/worker.js — run with `node --test src/worker.test.mjs`.
//
// Intentionally does NOT use `wrangler dev`: local wrangler dev cannot simulate
// host-based routing faithfully (it normalizes any incoming Host header to the
// first `routes` entry in wrangler.jsonc regardless of what the client actually
// sends), so www-vs-apex redirect behavior is unverifiable through it. Calling
// the Worker's exported `fetch` directly with a mock ASSETS binding tests the
// real logic without that limitation. The www->apex redirect (critic P1 finding)
// must still be spot-checked against the live edge after deploy — see Phase 3's
// hard gate in docs/drafts/cloudflare-migration.md.

import { test } from "node:test";
import assert from "node:assert/strict";
import worker from "./worker.js";

function mockEnv() {
  return {
    ASSETS: {
      async fetch(reqOrUrl) {
        const url = new URL(typeof reqOrUrl === "string" || reqOrUrl instanceof URL ? reqOrUrl : reqOrUrl.url);
        if (url.pathname === "/home/") {
          return new Response("<html>home</html>", { status: 200, headers: { "content-type": "text/html" } });
        }
        if (url.pathname === "/assets/index-B3f9x1kQ.css") {
          return new Response("body{color:red}", { status: 200, headers: { "content-type": "text/css" } });
        }
        if (url.pathname === "/404.html") {
          return new Response("<html>404 not found</html>", { status: 200, headers: { "content-type": "text/html" } });
        }
        return new Response(null, { status: 404 });
      },
    },
  };
}

test("www -> apex 301, path + query preserved", async () => {
  const req = new Request("https://www.alu-studio.com/pikgeon/privacy?x=1");
  const res = await worker.fetch(req, mockEnv(), {});
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("location"), "https://alu-studio.com/pikgeon/privacy?x=1");
});

test("/ -> /home/ 301", async () => {
  const req = new Request("https://alu-studio.com/");
  const res = await worker.fetch(req, mockEnv(), {});
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("location"), "https://alu-studio.com/home/");
});

test("www root -> apex root (www check must run before root check)", async () => {
  const req = new Request("https://www.alu-studio.com/");
  const res = await worker.fetch(req, mockEnv(), {});
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("location"), "https://alu-studio.com/");
});

// The old-domain GitHub Pages 301 lands on http://alu-studio.com/... , so
// the http upgrade is what stops visitors terminating on plaintext while the
// page's own canonical says https. Regression-guards that whole chain.
test("http -> https 301, path + query preserved", async () => {
  const req = new Request("http://alu-studio.com/pikgeon/privacy?x=1");
  const res = await worker.fetch(req, mockEnv(), {});
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("location"), "https://alu-studio.com/pikgeon/privacy?x=1");
});

test("http + www collapses to https + apex in a SINGLE hop", async () => {
  const req = new Request("http://www.alu-studio.com/sotto/terms/");
  const res = await worker.fetch(req, mockEnv(), {});
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("location"), "https://alu-studio.com/sotto/terms/");
});

test("http root -> https /home/ (scheme upgrade takes precedence, no plaintext hop)", async () => {
  const req = new Request("http://alu-studio.com/");
  const res = await worker.fetch(req, mockEnv(), {});
  assert.equal(res.status, 301);
  // First hop normalizes the origin; the / -> /home/ hop happens after.
  assert.equal(res.headers.get("location"), "https://alu-studio.com/");
});

test("known route served with HTML no-cache header", async () => {
  const req = new Request("https://alu-studio.com/home/");
  const res = await worker.fetch(req, mockEnv(), {});
  assert.equal(res.status, 200);
  assert.equal(await res.text(), "<html>home</html>");
  assert.equal(res.headers.get("cache-control"), "no-cache");
});

test("hashed asset gets immutable cache header", async () => {
  const req = new Request("https://alu-studio.com/assets/index-B3f9x1kQ.css");
  const res = await worker.fetch(req, mockEnv(), {});
  assert.equal(res.headers.get("cache-control"), "public, max-age=31536000, immutable");
});

test("unknown path returns real 404 status + 404.html body (no client-side redirect script)", async () => {
  const req = new Request("https://alu-studio.com/pikgeon/nonexistent");
  const res = await worker.fetch(req, mockEnv(), {});
  assert.equal(res.status, 404);
  assert.equal(await res.text(), "<html>404 not found</html>");
});

test("security headers present on every response", async () => {
  const req = new Request("https://alu-studio.com/home/");
  const res = await worker.fetch(req, mockEnv(), {});
  assert.equal(res.headers.get("x-content-type-options"), "nosniff");
  assert.equal(res.headers.get("x-frame-options"), "DENY");
  assert.equal(res.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
});
