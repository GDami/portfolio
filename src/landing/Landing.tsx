import './Landing.css'
import homeImg from '/monkey-desktop.png'

export function Landing() {
    return (
        <div className="landing" id="home">
            <h1>Hello, I'm Damien Gervy.</h1>
            <img className="home-img" alt="home-img" src={homeImg}></img>
            <h3>I'm a fullstack web developer based in France.</h3>
            <h3>↓ Scroll down to know more ↓</h3>
        </div>
    )
}