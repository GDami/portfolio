import { useTranslation } from 'react-i18next'
import { Experience } from './Experience'
import './Experiences.css'

export function Experiences() {
    const { t } = useTranslation()
    
    return (
        <div className="section-container experiences" id="experiences">
            <h1 className="section-title animated-underline">{t("experiences.title.1")}<span>{t("experiences.title.2")}</span></h1>
            <div className='experiences-vertical-container'>
                <div className='experiences-visual-timeline'>
                    <div className='experiences-current-time'></div>
                </div>
                <div className='experiences-container'>
                    <Experience
                    title={t("experience.younivibe.title")}
                    description={t("experience.younivibe.description")}
                    dates={[t("experience.younivibe.date.1"), t("experience.younivibe.date.2")]}/>
                    <Experience
                    title={t("experience.coreoz.title")}
                    description={t("experience.coreoz.description")}
                    dates={[t("experience.coreoz.date.1"), t("experience.coreoz.date.2")]}/>
                    <Experience
                    title={t("experience.factorythings.title")}
                    description={t("experience.factorythings.description")}
                    dates={[t("experience.factorythings.date.1"), t("experience.factorythings.date.2")]}/>
                </div>
            </div>
        </div>
    )
}