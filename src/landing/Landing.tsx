import { ContactIcon } from '../contact/ContactIcon'
import './Landing.css'

const codinGameSvg = (<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 2083 2083" xmlns="http://www.w3.org/2000/svg" width="2500" height="2500"><g fill="currentColor"><path d="M0 1636c411.554-97.771 692.897-283.177 724-637 10.714-131.212 67.364-243.777 216-319 207.675-80.617 305.728-52.164 390-10 92.668 81.722 119.468 199.94 50 371.5-31.914 100.266-291.001 223.867-410 258.5-392.539 175.893-595.504 430.282-561 783H0z"/><ellipse cx="1666.5" cy="408" rx="196.5" ry="192"/></g></svg>)

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
                    <ContactIcon link='https://www.codingame.com/profile/8df919d89c9224b9ccf053820029c7986684466' class=''>
                        {codinGameSvg}
                    </ContactIcon>
                    <ContactIcon link='https://leetcode.com/u/DamienDamien/' class='bxl  bx-leetcode'></ContactIcon>
                </div>
            </div>
            <span className='home-img'>&gt;hi!<span>_</span></span>
        </div>
    )
}