.PHONY: hm pk bb st install-hm install-pk install-bb install-st

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
