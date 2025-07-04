import heroImg from '/hero.jpg'
import versoImg from '/noisette.jpg'

import './Hero.css'
import { useTranslation } from 'react-i18next'

export function Hero() {
    const { t } = useTranslation()

    return (
        <div className="hero" id="home">
            <div className="hero-img-container">
                <img className='hero-img' src={heroImg} alt='hero-img'></img>
                <img className='villain-img' src={versoImg} alt='noisette-img'></img>
            </div>
            <div className='hero-heading'>
                <h1 className='hero-title'>{t("hero.title")}<span className='wave-hand'>👋</span></h1>
                <h3 className='hero-info'><i className='bxr  bx-location'  ></i> Paris, France</h3>
                <h3 className='hero-subtext'>{t("hero.subtext.1")}<strong>{t("hero.subtext.2")}</strong>{t("hero.subtext.3")}<span className='hero-detail'>{t("hero.subtext.4")}</span>.</h3>
                <div className='hero-ctas'>
                    <a className='hero-cta secondary animated-underline' href='#about'>{t("hero.cta.1")}</a>
                    <a className='hero-cta primary animated-underline' href='#projects'>{t("hero.cta.2")}</a>
                </div>
            </div>
        </div>
    )
}