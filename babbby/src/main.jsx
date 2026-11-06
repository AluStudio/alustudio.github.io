import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/nunito'
import './index.css'
import App from './App.jsx'
import { routerBasename, i18nReady } from "./i18n";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

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
i18nReady.then(() => {
  if (container.firstElementChild) {
    hydrateRoot(container, app)
  } else {
    createRoot(container).render(app)
  }
})
