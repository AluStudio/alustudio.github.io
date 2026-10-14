import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n'
import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource/kalam/400.css'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
