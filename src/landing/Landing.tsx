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
                    <a className='' href='https://github.com/GDami' target="_blank">
                        <span>< i className='bxl  bx-github'  ></i> </span>
                    </a>
                    <a className='' href='https://www.linkedin.com/in/damien-gervy/' target="_blank">
                        <span>< i className='bxl  bx-linkedin'  ></i>  </span>
                    </a>
                    <a className='' href='https://x.com/DamienGervy' target="_blank">
                        <span>< i className='bxl  bx-twitter'  ></i>  </span>
                    </a>
                </div>
            </div>
            <img className="home-img" alt="home-img" src={homeImg}></img>
        </div>
    )
}