import { useEffect } from 'react'
import './Header.css'


let header:HTMLElement
const lightSectionNames = ['about']
let lightSections:HTMLElement[] = []

function initHtmlElements() {
    header = document.getElementById("header")!
    lightSections = lightSectionNames.map((id) => document.getElementById(id)!)
}

function handleScroll(this: Window, _ev: Event) : any {
    for (const section of lightSections) {
        
        if (section.getBoundingClientRect().top <= 20 && section.getBoundingClientRect().bottom >= 20) {
            header.classList.add("light")
            break
        } else {
            header.classList.remove("light")
        }
    }
    console.log("d")
}

export function Header() {
    useEffect(() => {
        initHtmlElements()
        window.addEventListener('scroll', handleScroll, {passive: true})
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header id="header">
            <nav>
                <a href='#home'>Home</a>
                {/* <a href='#skills'>Skills</a> */}
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </nav>
        </header>
    )
}