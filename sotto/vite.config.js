import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite only warns when a CSS url() does not resolve and ships it unchanged, so a
// renamed @fontsource file (index.css points at them by path) would 404 silently.
function failOnUnresolvedFontUrl() {
  return {
    name: 'fail-on-unresolved-font-url',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type !== 'asset' || !file.fileName.endsWith('.css')) continue
        const unresolved = String(file.source).match(/url\(["']?@fontsource[^)]*\)/g)
        if (unresolved) this.error(`unresolved font url in ${file.fileName}: ${unresolved.join(', ')}`)
      }
    },
  }
}

export default defineConfig({
  base: '/sotto/',
  plugins: [react(), failOnUnresolvedFontUrl()],
  define: {
    // Footer copyright year. Fixed at build time so a page prerendered in one
    // year still hydrates without a text mismatch in the next.
    'import.meta.env.BUILD_YEAR': JSON.stringify(String(new Date().getFullYear())),
  },
})
