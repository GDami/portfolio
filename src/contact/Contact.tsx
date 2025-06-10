import "./Contact.css"

export function Contact() {
    return (
        <div className="section contact" id="contact">
            <h1>Contact</h1>
            <div className="contact-container">
                <h3>You can find me on</h3>
                <ul className="contact-list">
                    <li className="contact-item">
                        <a href="https://github.com/GDami">GitHub</a>
                    </li>
                    <li className="contact-item">
                        <a href="https://www.linkedin.com/in/damien-gervy/">Linkedin</a>
                    </li>
                    <li className="contact-item">
                        <a href="mailto:gervydamien@gmail.com">gervydamien@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}