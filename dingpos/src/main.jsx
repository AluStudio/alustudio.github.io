import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/manrope'
import '@fontsource-variable/noto-sans-tc'
import './index.css'
import App from './App.jsx'
import { routerBasename } from "./i18n";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
if (container.firstElementChild) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
