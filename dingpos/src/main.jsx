import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/manrope'
import '@fontsource-variable/noto-sans-tc'
import './index.css'
import App from './App.jsx'
import { routerBasename, currentLanguage, i18nReady } from "./i18n";
import { loadFaq } from "./data/faq";
// The same ESM module Navbar imports Collapse from: loading the UMD bundle as
// well registered every data-bs-toggle handler twice, so a dropdown opened and
// closed again on one click.
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// Only zh-Hans pages use the SC faces; a static import would put their
// @font-face CSS in front of every page.
if (document.documentElement.lang === 'zh-Hans') {
  import('@fontsource-variable/noto-sans-sc')
}

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Deployed pages are prerendered (scripts/prerender.mjs), so hydrate them in
// place: re-rendering would replace the painted nodes and record a new LCP after
// the bundle runs. The dev server and the prerender pass itself get Vite's empty
// shell, which has nothing to hydrate.
Promise.all([i18nReady, loadFaq(currentLanguage)]).then(() => {
  if (container.firstElementChild) {
    hydrateRoot(container, app)
  } else {
    createRoot(container).render(app)
  }
})
