import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';

declare module 'i18next' {
    interface CustomTypeOptions {
      returnNull: false;
    }
  }

i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        // backend:{
        //     loadPath: '/locales/{{lng}}/{{ns}}.json'
        // },
        interpolation: {
            escapeValue: false,
        },
        returnNull: false,
    })

export default i18next;