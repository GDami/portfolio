import { ContactIcon } from '../contact/ContactIcon'
import './Landing.css'
import homeImg from '/monkey-desktop.png'

export function Landing() {
    return (
        <div className="landing" id="home">
            <div className='landing-text'>
                <div className='landing-header'>
                    <h1 className='main-heading'>Hello, I'm <span>Damien Gervy.</span></h1>
                    <h1 className='main-heading'>I'm a <span>Fullstack Web Developer</span></h1>
                    <h1 className='main-heading'>Based in <span>France</span>.</h1>
                </div>
                <div className='landing-description'>
                    <p>I am a web developer passionate about creating smooth user-focused experiences, with an emphasis on quality. I am dedicated to continuous learning and growth, putting both skill and commitment into every project.</p>
                </div>
                <div className='landing-buttons'>
                    <ContactIcon link='https://github.com/GDami' class='bxl  bx-github'></ContactIcon>
                    <ContactIcon link='https://www.linkedin.com/in/damien-gervy' class='bxl  bx-linkedin'></ContactIcon>
                    <ContactIcon link='https://x.com/DamienGervy' class='bxl  bx-twitter'></ContactIcon>
                </div>
            </div>
            <img className="home-img" alt="home-img" src={homeImg}></img>
        </div>
    )
}