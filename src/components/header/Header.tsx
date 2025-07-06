import { useEffect, useRef } from 'react'
import './Header.css'

import resumePDF from '/Resume Damien Gervy Front End.pdf'
import CVPDF from '/CV Damien Gervy Développeur Front End.pdf'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

export function Header() {
    const { t } = useTranslation()

    const headerRef = useRef<HTMLElement>(null)
    const resumeRef = useRef<HTMLAnchorElement>(null)
    const darkRef = useRef<HTMLAnchorElement>(null)
    const languageRef = useRef<HTMLAnchorElement>(null)

    const initLanguage = () => {
        if (i18next.resolvedLanguage == "en") {
            changeLanguage("en")
        } else {
            changeLanguage('fr')
        }        
    }

    const changeLanguage = (lang:string) => {
        if (lang == "en") {
            i18next.changeLanguage("en")
            languageRef.current?.classList.add("en")
            languageRef.current?.classList.remove("fr")
            resumeRef.current?.setAttribute('href', resumePDF)
            window.localStorage.setItem("lang", "en")
        } else {
            i18next.changeLanguage("fr")
            languageRef.current?.classList.add("fr")
            languageRef.current?.classList.remove("en")
            resumeRef.current?.setAttribute('href', CVPDF)
            window.localStorage.setItem("lang", "fr")
        }
    }

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark")
        if (document.documentElement.classList.contains("dark")) {
            darkRef.current?.classList.add("bx-sun")
            darkRef.current?.classList.remove("bx-moon")
            window.localStorage.setItem("dark", "dark")
        } else {
            darkRef.current?.classList.add("bx-moon")
            darkRef.current?.classList.remove("bx-sun")
            window.localStorage.setItem("dark", "light")
        }
    }

    const toggleLanguage = () => {
        if (i18next.resolvedLanguage == "fr") {
            changeLanguage("en")
        } else {
            changeLanguage("fr")
        }
    }
    
    useEffect(() => {
        initLanguage()

        const scrollDummy = document.getElementsByClassName("scroll-dummy")[0]

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    headerRef.current!.classList.remove("scrolled")
                } else {
                    headerRef.current!.classList.add("scrolled")
                }
            })
        })

        scrollObserver.observe(scrollDummy)

        return () => scrollObserver.disconnect()
    }, [])


    return (
        
        <header ref={headerRef} id="header">
            <nav>
                <a id="header-title" href='#home'>
                    <span>Damien Gervy</span>
                    < i className='bx  bx-home-alt'  ></i> 
                </a>
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
                    <a id="header-contact" href='#contact'>
                        <span>{t("header.contact")} →</span>
                        < i className='bx  bx-hashtag'  ></i> 
                    </a>
                </div>
                <div className='header-buttons'>
                    <a ref={resumeRef} className='resume-link' href={resumePDF} target='_blank'>
                        <span>{t("header.resume")}</span>
                        <i className='resume-icon bx  bx-file-code'  ></i>
                    </a>
                    <a ref={languageRef} id='language-toggle' onClick={toggleLanguage}></a>
                    <a ref={darkRef} className="bx-sun" id='dark-toggle' onClick={toggleDarkMode}></a>
                </div>
            </nav>
        </header>
    )
}