import { useEffect } from 'react'
import './Header.css'

function handleScroll(this: Window, _ev: Event) : any {
    const lightSections = ['about']
    const header = this.document.getElementById("header")!

    for (const section of lightSections) {
        const scroll = this.document.getElementById(section)!
        const scrollTop = scroll.getBoundingClientRect().top - this.document.body.getBoundingClientRect().top - 20
        const scrollBottom = scroll.getBoundingClientRect().bottom - this.document.body.getBoundingClientRect().top - 20
        
        if (this.window.scrollY >= scrollTop && this.window.scrollY < scrollBottom) {
            header.classList.add("light")
            break
        } else {
            header.classList.remove("light")
        }
    }


    
}


function throttleScroll(func: Function, delay: number) {
    let scrolling = false

    return () => {
        if (!scrolling) {
            scrolling = true
            func()
            setTimeout(() => scrolling = false, delay)
        } else {
            setTimeout(func, delay)
        }
    }
}

export function Header() {


    useEffect(() => {
        window.addEventListener('scroll', throttleScroll(handleScroll, 50), {passive: true})
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