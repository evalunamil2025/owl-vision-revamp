import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageToggle = ({ compact = false }: { compact?: boolean }) => {
  const { i18n, t } = useTranslation();
  const current = i18n.resolvedLanguage?.startsWith("es") ? "es" : "en";

  const setLang = (lng: "en" | "es") => {
    if (lng !== current) i18n.changeLanguage(lng);
  };

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm p-0.5 ${
        compact ? "" : "shadow-sm"
      }`}
      role="group"
      aria-label={t("nav.languageLabel")}
    >
      <Globe className="w-3.5 h-3.5 text-slate-400 ml-2 mr-0.5 hidden sm:block" aria-hidden />
      {(["en", "es"] as const).map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => setLang(lng)}
          aria-pressed={current === lng}
          className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all ${
            current === lng
              ? "bg-[#0079c2] text-white shadow-sm"
              : "text-slate-500 hover:text-[#0079c2]"
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
