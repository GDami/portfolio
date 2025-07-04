import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import "./utils/i18n.ts"

function initDarkMode() {

    let dark = localStorage.getItem("dark")
    dark = dark || "dark"

    if (dark == "light" && document.documentElement.classList.contains("dark")) {
      localStorage.setItem("dark", "light")
      document.documentElement.classList.remove("dark")
    }

    setTimeout(() => document.documentElement.classList.remove("no-transition"), 50);

}

initDarkMode()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
