import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalServices } from "@/data/homeData";

const PersonalInsurance = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-['Josefin_Sans'] font-bold text-[#0079c2] mb-4"
            >
              Personal Insurance
            </motion.h2>
            <p className="text-slate-500 font-body text-lg leading-relaxed">
              Tailored coverage designed to protect your family, your assets, and your future peace of mind.
            </p>
          </div>
          <Link
            to="/quote"
            className="hidden md:flex items-center gap-2 text-[#00a651] font-['Josefin_Sans'] font-bold hover:underline group"
          >
            View all coverage{" "}
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalServices.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={s.href}
                className="group relative flex flex-col h-[320px] rounded-3xl overflow-hidden bg-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,121,194,0.15)] transition-all duration-500"
              >
                {/* Imagen de Fondo */}
                <div className="absolute inset-0">
                  <img
                    src={s.image}
                    alt={s.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay Gradiente Profundo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005296]/95 via-[#005296]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="relative mt-auto p-8 text-white">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00a651] flex items-center justify-center shadow-lg">
                      <s.icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="font-['Josefin_Sans'] font-bold text-xl leading-tight">{s.label}</h3>
                  </div>

                  <p className="text-white/80 text-sm font-body leading-relaxed line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {s.desc}
                  </p>

                  {/* Indicador visual de link */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00a651] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Borde brillante al hover */}
                <div className="absolute inset-0 border-2 border-[#00a651]/0 group-hover:border-[#00a651]/30 rounded-3xl transition-colors duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInsurance;