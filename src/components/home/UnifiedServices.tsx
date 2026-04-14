import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, User, Building2 } from "lucide-react";
import { personalServices, businessServices } from "@/data/homeData";

const WaveDivider = () => (
  <div className="absolute bottom-0 left-0 w-full h-12 z-10 translate-y-[1px]">
    <svg
      viewBox="0 0 400 40"
      preserveAspectRatio="none"
      className="w-full h-full drop-shadow-[0_-2px_5px_rgba(0,0,0,0.05)]"
    >
      <path d="M0,25 C120,45 280,5 400,25 L400,40 L0,40 Z" fill="white" />
    </svg>
  </div>
);

const UnifiedServices = () => {
  const [category, setCategory] = useState<"personal" | "business">("personal");

  const services = category === "personal" ? personalServices : businessServices;

  return (
    <section className="relative py-32 bg-[#f8fafc] overflow-hidden">
      {/* Decoración de fondo suave */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/70 font-heading">
              Comprehensive Coverage
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-primary tracking-tighter leading-[0.95] mb-6 font-heading"
          >
            Our Insurance <span className="text-secondary font-light italic">Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary/60 font-body font-light leading-relaxed"
          >
            Protection for you, your family, and your business.
          </motion.p>
        </div>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex p-1.5 bg-slate-200/50 backdrop-blur-md rounded-2xl border border-white/50 shadow-inner">
            <button
              onClick={() => setCategory("personal")}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                category === "personal"
                  ? "bg-white text-primary shadow-xl shadow-slate-400/20 scale-105"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <User className="w-4 h-4" /> Personal
            </button>
            <button
              onClick={() => setCategory("business")}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                category === "business"
                  ? "bg-white text-primary shadow-xl shadow-slate-400/20 scale-105"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Building2 className="w-4 h-4" /> Business
            </button>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {services.map((s, i) => (
                <motion.div
                  key={`${category}-${i}`}
                  className="group relative bg-white rounded-[2.5rem] border border-white transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-3 overflow-hidden flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden shrink-0">
                    <img
                      src={s.image}
                      alt={s.label}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    {/* El Divisor de Ola */}
                    <WaveDivider />

                    {/* Floating Icon Badge Corregido */}
                    <div className="absolute bottom-[-14px] left-8 z-30">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border-2 border-white shadow-xl transition-all duration-500 group-hover:bg-secondary group-hover:scale-110">
                        <s.icon
                          className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-500"
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-20 p-8 pt-12 flex flex-col flex-grow">
                    <h3 className="text-xl font-black text-slate-800 mb-3 font-heading tracking-tight group-hover:text-primary transition-colors uppercase">
                      {s.label}
                    </h3>

                    <p className="text-slate-500 text-sm font-body leading-relaxed mb-8 line-clamp-3 font-light">
                      {s.desc}
                    </p>

                    <div className="mt-auto">
                      <Link
                        to={s.href}
                        className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-tighter text-secondary group/btn"
                      >
                        <span className="relative">
                          Learn More
                          <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-secondary transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center group-hover/btn:bg-secondary group-hover/btn:text-white group-hover/btn:shadow-lg transition-all duration-300">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Glow inferior animado */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UnifiedServices;
