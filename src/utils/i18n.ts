import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";


i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    "whoami": "<p>I'm a <em>software engineer</em> with a degree in computer science and I am currently looking for a position as a <em>frontend or fullstack developer</em>. I started out as a script kiddie and have experience in both fullstack web development and game dev. I strive for <em>quality</em> and am always happy to <em>share my skills</em>.</p>"
                }
            }
        }
    })