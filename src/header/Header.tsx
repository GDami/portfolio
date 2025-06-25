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
    const comparedHeight = (this.screen.width >= 800 ? 0 : this.innerHeight) - 20
    for (let i = 0; i<lightSections.length; i++) {
        const rect = lightSections[i].getBoundingClientRect()
        if (rect.top <= comparedHeight && rect.bottom >= comparedHeight) {
            header.classList.add("light")
            break
        } else if (i == lightSections.length - 1) {
            header.classList.remove("light")
        }
    }
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
                <a href='#home'>
                    <span>Home</span>
                    < i className='bx  bx-home-alt'  ></i> 
                </a>
                <a href='#skills'>
                    <span>Skills</span>
                    < i className='bx  bx-brush'  ></i> 
                </a>
                <a href='#about'>
                    <span>About</span>
                    < i className='bx  bx-info-square'  ></i> 
                </a>
                <a href='#projects'>
                    <span>Projects</span>
                    < i className='bx  bx-chart-gantt'  ></i> 
                </a>
                <a href='#contact'>
                    <span>Contact</span>
                    < i className='bx  bx-contact-book'  ></i> 
                </a>
            </nav>
        </header>
    )
}