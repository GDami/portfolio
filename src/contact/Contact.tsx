import "./Contact.css"
import { ContactIcon } from "./ContactIcon"

export function Contact() {
    return (
        <div className="section-container contact" id="contact">
            <h1>Contact Me!</h1>
            <h3>gervydamien@gmail.com</h3>
            <div className="contact-container">
                <ul className="contact-list">
                    <ContactIcon link="mailto:gervydamien@gmail.com" class='bx  bx-envelope'></ContactIcon>
                    <ContactIcon link="https://github.com/GDami" class='bxl  bx-github'></ContactIcon>
                    <ContactIcon link="https://www.linkedin.com/in/damien-gervy" class='bxl  bx-linkedin'></ContactIcon>
                    <ContactIcon link="https://x.com/DamienGervy" class='bxl  bx-twitter'></ContactIcon>
                </ul>
            </div>
        </div>
    )
}