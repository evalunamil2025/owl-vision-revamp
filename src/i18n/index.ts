import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import es from "./locales/es";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  // Render English first on the server and first client render. After hydration,
  // the root layout selects the language strictly from the URL.
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "es"],
  interpolation: { escapeValue: false },
});

const syncDocumentLanguage = (language: string) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = language.startsWith("es") ? "es" : "en";
  }
};

i18n.on("initialized", () =>
  syncDocumentLanguage(i18n.resolvedLanguage || "en"),
);
i18n.on("languageChanged", syncDocumentLanguage);

export default i18n;
