import './Landing.css'
import homeImg from '/monkey-desktop.png'

export function Landing() {
    return (
        <div className="landing" id="home">
            <h1>Welcome to my website.</h1>
            <img className="home-img" alt="home-img" src={homeImg}></img>
            <h3>Have fun browsing it !</h3>
        </div>
    )
}