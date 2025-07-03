import heroImg from '/hero.jpg'
import versoImg from '/noisette.jpg'

import './Hero.css'

export function Hero() {
    return (
        <div className="hero" id="home">
            <div className="hero-img-container">
                <img className='hero-img' src={heroImg} alt='hero-img'></img>
                <img className='villain-img' src={versoImg} alt='noisette-img'></img>
            </div>
            <div className='hero-heading'>
                <h1 className='hero-title'>Hey, I'm Damien <span className='wave-hand'>👋</span></h1>
                <h3 className='hero-info'><i className='bxr  bx-location'  ></i> Paris, France</h3>
                <h3 className='hero-subtext'>I'm a junior <strong>frontend developer</strong> who creates user-focused experiences, and gives special attention to <span className='hero-detail'>detail</span>.</h3>
                <div className='hero-ctas'>
                    <a className='hero-cta secondary animated-underline' href='#about'>More about me</a>
                    <a className='hero-cta primary animated-underline' href='#projects'>Check my projects</a>
                </div>
            </div>
        </div>
    )
}