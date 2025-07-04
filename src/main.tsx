import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import "./utils/i18n/i18n.ts"
import i18next from 'i18next'

function initDarkMode() {

    let dark = localStorage.getItem("dark")
    dark = dark || "light"

    if (dark == "dark" && !document.documentElement.classList.contains("dark")) {
      localStorage.setItem("dark", dark)
      document.documentElement.classList.add("dark")
    }

    setTimeout(() => document.documentElement.classList.remove("no-transition"), 50);

}

const initLanguage = () => {
        let storedLang = localStorage.getItem("lang")

        if (storedLang) {
            i18next.changeLanguage(storedLang)
        } else if (i18next.resolvedLanguage == "en") {
            i18next.changeLanguage("en")
        } else {
            i18next.changeLanguage('fr')
        }        
    }

initDarkMode()
initLanguage()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
