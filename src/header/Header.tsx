import { useEffect } from 'react'
import './Header.css'

import resumePDF from '/Resume Damien Gervy Front End.pdf'


let header:HTMLElement
let lightSections:HTMLElement[] = []

function initHtmlElements() {
    header = document.getElementById("header")!
    lightSections = Array.prototype.slice.call(document.getElementsByClassName("light"))
}

function handleScroll(this: Window, _ev: Event) : any {
    const height = this.innerHeight


    console.log(height)
    console.log(this.scrollY)
    if (this.scrollY > height) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }

    const comparedHeight = (this.screen.width >= 800 ? 20 : height - 20)
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
                    <span>Damien Gervy</span>
                    < i className='bx  bx-home-alt'  ></i> 
                </a>
                <div className='header-filler'></div>
                <a href='#projects'>
                    <span>Projects</span>
                    < i className='bx  bx-chart-gantt'  ></i> 
                </a>
                <a href='#skills'>
                    <span>Skills</span>
                    < i className='bx  bx-brush'  ></i> 
                </a>
                <a href='#about'>
                    <span>About</span>
                    < i className='bx  bx-info-square'  ></i> 
                </a>
                <a href='#experiences'>
                    <span>Experience</span>
                    < i className='bx  bx-briefcase-alt-2'  ></i> 
                </a>
                <a href='#contact'>
                    <span>Contact</span>
                    < i className='bx  bx-contact-book'  ></i> 
                </a>
                <div className='header-filler'></div>
                <a className='resume-link' href={resumePDF} target='_blank'>
                    <i className='resume-icon bx  bx-file-code'  ></i>
                    <span>Resume</span>
                </a>
            </nav>
        </header>
    )
}