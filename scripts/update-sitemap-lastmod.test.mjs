// Regression tests for the lastmod decision rules — run with
// `node --test scripts/update-sitemap-lastmod.test.mjs`.
//
// These encode the gate from docs/drafts/seo-aeo-optimization.md §T8: rebuilding
// with no content change must not move any date, and a wrong date is worse than
// no date at all.

import { test } from "node:test";
import assert from "node:assert/strict";
import { decideLastmod, normalize } from "./update-sitemap-lastmod.mjs";

const TODAY = "2026-07-27";
const PREVIOUS = "2026-05-01";

const page = (body, hash = "abc123") =>
  `<!doctype html><html><head><script src="/assets/index-${hash}.js"></script></head><body>${body}</body></html>`;

test("identical content keeps the previous date", () => {
  const html = page("<h1>Pikgeon</h1>");
  const { lastmod } = decideLastmod({
    local: html,
    live: html,
    previous: PREVIOUS,
    reachable: true,
    today: TODAY,
  });
  assert.equal(lastmod, PREVIOUS);
});

test("a new asset hash alone is not a content change", () => {
  // A refactor with no visible change still rewrites every bundle filename.
  const { lastmod, reason } = decideLastmod({
    local: page("<h1>Pikgeon</h1>", "NEWHASH1"),
    live: page("<h1>Pikgeon</h1>", "oldhash0"),
    previous: PREVIOUS,
    reachable: true,
    today: TODAY,
  });
  assert.equal(lastmod, PREVIOUS);
  assert.equal(reason, "unchanged");
});

test("whitespace and comment differences are not content changes", () => {
  const { lastmod } = decideLastmod({
    local: "<html>  <body> <h1>Hi</h1>  </body></html>",
    live: "<html><body><!-- build note --><h1>Hi</h1></body></html>",
    previous: PREVIOUS,
    reachable: true,
    today: TODAY,
  });
  assert.equal(lastmod, PREVIOUS);
});

test("changed visible text bumps the date to today", () => {
  const { lastmod, reason } = decideLastmod({
    local: page("<h1>Pikgeon</h1><p>Now with offline OCR</p>"),
    live: page("<h1>Pikgeon</h1>"),
    previous: PREVIOUS,
    reachable: true,
    today: TODAY,
  });
  assert.equal(lastmod, TODAY);
  assert.equal(reason, "content changed");
});

test("a route that is not live yet counts as new", () => {
  const { lastmod, reason } = decideLastmod({
    local: page("<h1>FAQ</h1>"),
    live: null,
    previous: undefined,
    reachable: true,
    today: TODAY,
  });
  assert.equal(lastmod, TODAY);
  assert.equal(reason, "new route");
});

test("an unreachable origin never invents a date", () => {
  const { lastmod, reason } = decideLastmod({
    local: page("<h1>FAQ</h1>"),
    live: null,
    previous: undefined,
    reachable: false,
    today: TODAY,
  });
  assert.equal(lastmod, undefined);
  assert.equal(reason, "origin unreachable");
});

test("an unreachable origin keeps a known previous date", () => {
  const { lastmod } = decideLastmod({
    local: page("<h1>FAQ</h1>"),
    live: null,
    previous: PREVIOUS,
    reachable: false,
    today: TODAY,
  });
  assert.equal(lastmod, PREVIOUS);
});

test("unchanged content with no previous date omits lastmod", () => {
  const html = page("<h1>Terms</h1>");
  const { lastmod } = decideLastmod({
    local: html,
    live: html,
    previous: undefined,
    reachable: true,
    today: TODAY,
  });
  assert.equal(lastmod, undefined);
});

test("normalize strips only the fingerprint, not the asset name", () => {
  assert.equal(
    normalize('<script src="/assets/index-AuTNMkY2.js">'),
    '<script src="/assets/index.js">'
  );
});
