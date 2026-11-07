import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en";
import es from "./locales/es";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "bringas_lang",
      caches: ["localStorage"],
    },
  });

const syncDocumentLanguage = (language: string) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = language.startsWith("es") ? "es" : "en";
  }
};

i18n.on("initialized", () => syncDocumentLanguage(i18n.resolvedLanguage || "en"));
i18n.on("languageChanged", syncDocumentLanguage);

export default i18n;
