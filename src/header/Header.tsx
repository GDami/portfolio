import { useEffect } from 'react'
import './Header.css'


let header:HTMLElement
const lightSectionNames = ['about', 'skills']
let lightSections:HTMLElement[] = []

function initHtmlElements() {
    header = document.getElementById("header")!
    lightSections = lightSectionNames.map((id) => document.getElementById(id)!)
}

function handleScroll(this: Window, _ev: Event) : any {
    for (let i = 0; i<lightSections.length; i++) {
        const rect = lightSections[i].getBoundingClientRect()
        if (rect.top <= 20 && rect.bottom >= 20) {
            header.classList.add("light")
            break
        } else if (i == lightSections.length - 1) {
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
                <a href='#skills'>Skills</a>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </nav>
        </header>
    )
}