import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

function initDarkMode() {

    let dark = localStorage.getItem("dark")
    dark = dark || "dark"

    if (dark == "light" && document.documentElement.classList.contains("dark")) {
      localStorage.setItem("dark", "light")
      document.documentElement.classList.remove("dark")
    }
}

initDarkMode()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
