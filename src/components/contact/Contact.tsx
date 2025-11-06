import { useTranslation } from "react-i18next"
import "./Contact.css"
import { ContactIcon } from "./ContactIcon"

export function Contact() {
    const { t } = useTranslation()

    return (
        <div className="section-container contact" id="contact">
            <h1 className="contact-title animated-underline"><span>{t("contact.title.1")}</span>{t("contact.title.2")}</h1>
            <h3 className="contact-mail">gervydamien@gmail.com</h3>
            <div className="contact-container">
                <ul className="contact-list">
                    <ContactIcon link="https://www.linkedin.com/in/damien-gervy" class='bxl  bx-linkedin'></ContactIcon>
                    <ContactIcon link="mailto:gervydamien@gmail.com" class='bx  bx-envelope'></ContactIcon>
                    <ContactIcon link="https://github.com/GDami" class='bxl  bx-github'></ContactIcon>
                    {/* <ContactIcon link="https://x.com/DamienGervy" class='bxl  bx-twitter'></ContactIcon> */}
                </ul>
            </div>
        </div>
    )
}