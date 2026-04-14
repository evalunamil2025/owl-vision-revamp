import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, User, Building2 } from "lucide-react";
import { personalServices, businessServices } from "@/data/homeData";

const WaveDivider = () => (
  <svg
    viewBox="0 0 400 30"
    preserveAspectRatio="none"
    className="absolute bottom-0 left-0 w-full h-6 z-10"
  >
    <path
      d="M0,15 C100,30 200,0 300,15 C350,22 380,10 400,15 L400,30 L0,30 Z"
      fill="white"
    />
  </svg>
);

const UnifiedServices = () => {
  const [category, setCategory] = useState<"personal" | "business">("personal");

  const services = category === "personal" ? personalServices : businessServices;

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[hsl(var(--muted))] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
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
            Our Insurance{" "}
            <span className="text-secondary font-light italic">Solutions</span>
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
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-slate-200/50 backdrop-blur-sm">
            <button
              onClick={() => setCategory("personal")}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold font-heading tracking-wide transition-all duration-300 ${
                category === "personal"
                  ? "bg-white text-primary shadow-lg shadow-primary/10"
                  : "text-primary/50 hover:text-primary/70"
              }`}
            >
              <User className="w-4 h-4" />
              Personal
            </button>
            <button
              onClick={() => setCategory("business")}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold font-heading tracking-wide transition-all duration-300 ${
                category === "business"
                  ? "bg-white text-primary shadow-lg shadow-primary/10"
                  : "text-primary/50 hover:text-primary/70"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Business
            </button>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((s, i) => (
              <motion.div
                key={`${category}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-primary/5 shadow-[0_20px_40px_-15px_rgba(1,80,147,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,166,81,0.15)] transition-all duration-700 flex flex-col h-full hover:border-b-4 hover:border-b-secondary"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.label}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <WaveDivider />

                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-0 right-6 translate-y-1/2 z-20 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-lg group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    <s.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading tracking-tight group-hover:text-[hsl(var(--brand-blue))] transition-colors">
                    {s.label}
                  </h3>

                  <p className="text-primary/60 text-sm font-body leading-relaxed mb-8 line-clamp-3">
                    {s.desc}
                  </p>

                  <div className="mt-auto">
                    <Link
                      to={s.href}
                      className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-secondary group/btn"
                    >
                      Learn More
                      <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center group-hover/btn:bg-secondary group-hover/btn:text-white transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UnifiedServices;
