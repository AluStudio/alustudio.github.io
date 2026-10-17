import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sotto/',
  plugins: [react()],
  define: {
    // Footer copyright year. Fixed at build time so a page prerendered in one
    // year still hydrates without a text mismatch in the next.
    'import.meta.env.BUILD_YEAR': JSON.stringify(String(new Date().getFullYear())),
  },
})
