import { Trans, useTranslation } from 'react-i18next'
import './About.css'

export function About() {
    const { t } = useTranslation()

    return (
        <div className='section-container about' id="about">
            <h1 className='section-title animated-underline'>{t("about.title.1")}<span>{t("about.title.2")}</span></h1>
            <div className='about-container'>
                <div className='about-details'>
                    <div className='about-detail'>
                        <h2>&gt; {t("whoami.title")}<span>_</span></h2>
                        <p>
                            <Trans i18nKey="whoami.description">
                                I'm a <em>software engineer</em> with a degree in <em>computer science</em> and I am currently looking for opportunities to work as a <em>frontend or fullstack developer</em>. I started out as a script kiddie and have experience in both fullstack web development and game dev. I strive for <em>quality</em> and am always happy to <em>share my skills</em>.
                            </Trans>
                            </p>
                        <br></br>
                    </div>
                    <div className='about-detail'>
                        <h2>&gt; {t("hobbies.title")}<span>_</span></h2>
                        <p>
                            <Trans i18nKey="hobbies.description">
                                My other interests include <em>piano</em>, <em>biking</em>, <em>cooking</em>, <em>games</em> and <em>cat petting</em>. I love <em>exploring</em> and <em>learning</em>. I also find contentment in figuring out how things work, be it through <em>research</em> or <em>experimenting</em>.
                            </Trans>
                        </p>
                        <br></br>
                    </div>
                    <div className='about-detail'>
                        <h2>&gt; {t("education.title")}<span>_</span></h2>
                        <p>{t("education.description.1")}<span><a href='https://www.utt.fr/formations/diplome-d-ingenieur/reseaux-et-telecommunications/' target="_blank">{t("education.description.2")}</a></span>
                            <Trans i18nKey="education.description.3">
                                 in 2021. This is where I took on my first large <em>coding projects</em>, and learned useful tools like <em>algorithms</em>, <em>statistics</em> or <em>geometry</em>.<em></em>.
                            </Trans>
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}