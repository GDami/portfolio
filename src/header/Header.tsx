import './Header.css'

export function Header() {
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