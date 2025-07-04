import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import enLang from "./locales/en/en.json"
import frLang from "./locales/fr/fr.json"

const resources = {
    en: {
        translation: enLang,
    },
    fr: {
        translation: frLang,
    }
}

i18next
    .use(initReactI18next)
    // .use(I18nextBrowserLanguageDetector)
    .init({
        fallbackLng: "fr",
        lng: "fr",
        resources
    })