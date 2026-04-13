import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personalServices } from "@/data/homeData";

const PersonalInsurance = () => {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header de Sección */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-['Josefin_Sans'] font-bold text-[#0079c2] mb-4"
          >
            Personal Insurance
          </motion.h2>
          <p className="text-slate-500 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Coverage designed to protect you, your family, and everything you've built.
          </p>
        </div>

        {/* Grid de Servicios - 4 columnas en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalServices.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col border border-slate-100"
            >
              {/* Contenedor de Imagen */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Badge de Categoría o Icono flotante */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm text-[#00a651]">
                  <s.icon className="w-5 h-5" strokeWidth={2} />
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-['Josefin_Sans'] font-bold text-xl text-slate-800 mb-3 group-hover:text-[#0079c2] transition-colors">
                  {s.label}
                </h3>

                <p className="text-slate-500 text-sm font-body leading-relaxed mb-6 line-clamp-3">{s.desc}</p>

                {/* Botón de Acción - Estructura solicitada */}
                <div className="mt-auto">
                  <Link
                    to={s.href}
                    className="inline-flex items-center gap-2 text-sm font-bold font-['Josefin_Sans'] text-[#00a651] group/btn transition-all"
                  >
                    <span>Learn More</span>
                    <div className="w-8 h-8 rounded-full bg-[#00a651]/10 flex items-center justify-center group-hover/btn:bg-[#00a651] group-hover/btn:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInsurance;
