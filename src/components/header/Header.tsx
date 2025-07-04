import { useEffect } from 'react'
import './Header.css'

import resumePDF from '/Resume Damien Gervy Front End.pdf'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'


let html:HTMLElement
let header:HTMLElement
let darkToggle:HTMLElement

function initHtmlElements() {
    html = document.documentElement
    header = document.getElementById("header")!
    darkToggle = document.getElementById("dark-toggle")!
}

function toggleDarkMode() {
    html.classList.toggle("dark")
    if (html.classList.contains("dark")) {
        darkToggle.classList.add("bx-sun")
        darkToggle.classList.remove("bx-moon")
        window.localStorage.setItem("dark", "dark")
        i18next.changeLanguage("fr")
    } else {
        darkToggle.classList.add("bx-moon")
        darkToggle.classList.remove("bx-sun")
        window.localStorage.setItem("dark", "light")
        i18next.changeLanguage("en")
    }
}

function handleScroll(this: Window, _ev: Event) : any {
    if (this.scrollY > 1) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
}

export function Header() {
    const { t } = useTranslation()
    
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
                <div className='nav-center'>
                    <a href='#about'>
                        <span>{t("header.about")}</span>
                        < i className='bx  bx-info-square'  ></i> 
                    </a>
                    <a href='#projects'>
                        <span>{t("header.projects")}</span>
                        < i className='bx  bx-chart-gantt'  ></i> 
                    </a>
                    <a href='#skills'>
                        <span>{t("header.skills")}</span>
                        < i className='bx  bx-brush'  ></i> 
                    </a>
                    <a href='#experiences'>
                        <span>{t("header.experience")}</span>
                        < i className='bx  bx-briefcase-alt-2'  ></i> 
                    </a>
                    <a href='#contact'>
                        <span>{t("header.contact")}</span>
                        < i className='bx  bx-contact-book'  ></i> 
                    </a>
                </div>
                <div className='header-filler'></div>
                <a className="bx-sun" id='dark-toggle' onClick={toggleDarkMode}></a>
                <a className='resume-link' href={resumePDF} target='_blank'>
                    <span>{t("header.resume")}</span>
                    <i className='resume-icon bx  bx-file-code'  ></i>
                </a>
            </nav>
        </header>
    )
}