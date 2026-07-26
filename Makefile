.PHONY: hm pk bb st dp install-hm install-pk install-bb install-st install-dp \
        build-apps assemble structured-data prerender verify-seo site serve-site

# ── Home ─────────────────────────────────────
hm: install-hm
	cd home && npm run dev

install-hm:
	@test -d home/node_modules || (cd home && npm ci)

# ── Pikgeon ──────────────────────────────────
pk: install-pk
	cd pikgeon && npm run dev

install-pk:
	@test -d pikgeon/node_modules || (cd pikgeon && npm ci)

# ── Babbby ───────────────────────────────────
bb: install-bb
	cd babbby && npm run dev

install-bb:
	@test -d babbby/node_modules || (cd babbby && npm ci)

# ── Sotto ────────────────────────────────────
st: install-st
	cd sotto && npm run dev

install-st:
	@test -d sotto/node_modules || (cd sotto && npm ci)

# ── DingPOS ──────────────────────────────────
dp: install-dp
	cd dingpos && npm run dev

install-dp:
	@test -d dingpos/node_modules || (cd dingpos && npm ci)

# ── Full site (what CI deploys) ───────────────
# `make site` reproduces the CI pipeline locally: build every app, assemble
# _site/, then prerender each sitemap route to static HTML. Use it before
# pushing anything that touches the build, prerender, or SEO tag scripts.
site: assemble structured-data prerender verify-seo

build-apps:
	@for app in home pikgeon babbby sotto dingpos; do \
		echo "── building $$app"; \
		( cd $$app && (test -d node_modules || npm ci) && npm run build ) || exit 1; \
	done

assemble: build-apps
	node scripts/assemble-site.mjs

# Requires _site/ to exist already (run `make assemble` first, or use `make site`).
structured-data:
	node scripts/inject-structured-data.mjs

prerender:
	@test -d node_modules || npm ci
	node scripts/prerender.mjs

verify-seo:
	node scripts/verify-seo.mjs

# Serve the assembled site for manual inspection of the deployed layout.
serve-site:
	npx --yes http-server _site -p 4173 -c-1
