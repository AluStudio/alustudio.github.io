.PHONY: pk bb install-pk install-bb

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
