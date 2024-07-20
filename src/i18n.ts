import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import am from "../public/locales/translations/am.json";
import en from "../public/locales/translations/en.json";

void i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      am: {
        translation: am
      },
      en: {
        translation: en
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
export default i18n;
