import { useEffect } from 'react'
import './Header.css'

import resumePDF from '/Resume Damien Gervy Front End.pdf'


let html:HTMLElement
let darkToggle:HTMLElement

function initHtmlElements() {
    html = document.documentElement
    darkToggle = document.getElementById("dark-toggle")!
}

function toggleDarkMode() {
    html.classList.toggle("dark")
    if (html.classList.contains("dark")) {
        darkToggle.classList.add("bx-sun")
        darkToggle.classList.remove("bx-moon")
        window.localStorage.setItem("dark", "dark")
    } else {
        darkToggle.classList.add("bx-moon")
        darkToggle.classList.remove("bx-sun")
        window.localStorage.setItem("dark", "light")
    }
}

export function Header() {
    useEffect(() => {
        initHtmlElements()
    }, [])

    return (
        <header id="header">
            <nav>
                <a href='#home'>
                    <span>Damien Gervy</span>
                    < i className='bx  bx-home-alt'  ></i> 
                </a>
                <div className='header-filler'></div>
                <a href='#about'>
                    <span>About</span>
                    < i className='bx  bx-info-square'  ></i> 
                </a>
                <a href='#projects'>
                    <span>Projects</span>
                    < i className='bx  bx-chart-gantt'  ></i> 
                </a>
                <a href='#skills'>
                    <span>Skills</span>
                    < i className='bx  bx-brush'  ></i> 
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
                <a className="bx-sun" id='dark-toggle' onClick={toggleDarkMode}></a>
                <a className='resume-link' href={resumePDF} target='_blank'>
                    <i className='resume-icon bx  bx-file-code'  ></i>
                    <span>Resume</span>
                </a>
            </nav>
        </header>
    )
}