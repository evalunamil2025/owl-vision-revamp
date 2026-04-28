import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, User, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { personalServices, businessServices } from "@/data/homeData";

const WaveDivider = () => (
  <div className="absolute bottom-0 left-0 w-full h-12 z-10 translate-y-[1px]">
    <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-full">
      <path d="M0,25 C120,45 280,5 400,25 L400,40 L0,40 Z" fill="white" />
    </svg>
  </div>
);

const UnifiedServices = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState<"personal" | "business">("personal");
  const services = category === "personal" ? personalServices : businessServices;

  return (
    <section className="relative py-32 bg-[#f8fafc] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#00a651] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#015093]/70 font-heading">
              {t("homePage.services.badge")}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-[#015093] tracking-tighter leading-[0.95] mb-6 font-heading"
          >
            {t("homePage.services.titleA")} <span className="text-[#00a651] font-light italic">{t("homePage.services.titleAccent")}</span>
          </motion.h2>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex p-1.5 bg-slate-200/50 backdrop-blur-md rounded-2xl border border-white/50 shadow-inner">
            <button
              onClick={() => setCategory("personal")}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                category === "personal"
                  ? "bg-white text-[#015093] shadow-xl scale-105"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <User className="w-4 h-4" /> {t("homePage.services.personal")}
            </button>
            <button
              onClick={() => setCategory("business")}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                category === "business"
                  ? "bg-white text-[#015093] shadow-xl scale-105"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Building2 className="w-4 h-4" /> {t("homePage.services.business")}
            </button>
          </div>
        </div>

        {/* Grid de Servicios */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {services.map((s, i) => {
                const label = t(`homePage.services.items.${s.key}.label` as const);
                const desc = t(`homePage.services.items.${s.key}.desc` as const);
                return (
                <motion.div
                  key={`${category}-${i}`}
                  className="group relative bg-white rounded-[2.5rem] transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-3 flex flex-col h-full"
                >
                  {/* Image Container con Icono que no se corta */}
                  <div className="relative h-56 rounded-t-[2.5rem] overflow-hidden shrink-0">
                    <img
                      src={s.image}
                      alt={label}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <WaveDivider />
                  </div>

                  {/* Icono Flotante - Fuera del overflow-hidden de la imagen */}
                  <div className="absolute top-[195px] left-8 z-30">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border-2 border-white shadow-xl transition-all duration-500 group-hover:bg-[#00a651] group-hover:scale-110 overflow-hidden">
                      {"customIcon" in s && s.customIcon ? (
                        <img
                          src={s.customIcon as string}
                          alt={label}
                          className="w-10 h-10 object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
                        />
                      ) : (
                        <s.icon
                          className="w-7 h-7 text-[#00a651] group-hover:text-white transition-colors duration-500"
                          strokeWidth={1.8}
                        />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-20 p-8 pt-12 flex flex-col flex-grow">
                    <h3 className="text-xl font-black text-[#015093] mb-3 font-heading tracking-tight group-hover:text-[#00a651] transition-colors uppercase leading-none">
                      {label}
                    </h3>

                    <p className="text-slate-500 text-sm font-body leading-relaxed mb-8 line-clamp-3 font-light">
                      {desc}
                    </p>

                    <div className="mt-auto">
                      <Link
                        to={s.href}
                        className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-tighter text-[#00a651] group/btn"
                      >
                        <span className="relative">
                          {t("homePage.services.learnMore")}
                          <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-[#00a651] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-[#00a651]/10 flex items-center justify-center group-hover/btn:bg-[#00a651] group-hover/btn:text-white transition-all duration-300">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UnifiedServices;
