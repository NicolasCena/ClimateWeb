import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        greeting: "Hello",
        welcome: "Welcome to my app",
        spanish: "Spanish",
        english: "English"
      }
    },
    es: {
      translation: {
        greeting: "Hola",
        welcome: "Bienvenido a mi aplicación",
        spanish: "Español",
        english: "Inglés"
      }
    }
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
