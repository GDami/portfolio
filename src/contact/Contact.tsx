import "./Contact.css"
import githubImg from "/github-filled.svg"
import linkedinImg from "/linkedin.svg"
import mailImg from "/mail.svg"

export function Contact() {
    return (
        <div className="section contact" id="contact">
            <h1>Contact</h1>
            <div className="contact-divider"></div>
            <div className="contact-container">
                <h3>Feel free to reach out !</h3>
                <div className="contact-divider"></div>
                <ul className="contact-list">
                    <li className="contact-item">
                        <a href="https://github.com/GDami" target="_blank"><img src={githubImg}></img></a>
                    </li>
                    <li className="contact-item">
                        <a href="mailto:gervydamien@gmail.com" target="_blank"><img src={mailImg}></img></a>
                    </li>
                    <li className="contact-item">
                        <a href="https://www.linkedin.com/in/damien-gervy" target="_blank"><img src={linkedinImg}></img></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}