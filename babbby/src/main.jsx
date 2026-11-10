import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/manrope'
import './index.css'
import './assets/scss/base.scss'
import App from './App.jsx'
import { routerBasename, currentLanguage, i18nReady } from "./i18n";
import { loadGuides } from "./data/guides";
import { loadSceneStrings } from "./data/scenes";

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Deployed pages are prerendered (scripts/prerender.mjs), so hydrate them in
// place: re-rendering would replace the painted nodes. The dev server and the
// prerender pass itself get Vite's empty shell, which has nothing to hydrate.
Promise.all([i18nReady, loadGuides(currentLanguage), loadSceneStrings(currentLanguage)]).then(() => {
  if (container.firstElementChild) {
    hydrateRoot(container, app)
  } else {
    createRoot(container).render(app)
  }
})
