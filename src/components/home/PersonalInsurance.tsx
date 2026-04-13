import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personalServices } from "@/data/homeData";

const PersonalInsurance = () => {
  // Variantes para la animación de entrada de los contenedores
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-[#f1f5f9] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header de Sección */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-['Josefin_Sans'] font-bold text-[#0079c2] mb-4 tracking-tight">
              Personal Insurance
            </h2>
            <div className="w-20 h-1.5 bg-[#00a651] mx-auto mb-6 rounded-full" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 font-body text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Coverage designed to protect you, your family, and everything you've built.
          </p>
        </div>

        {/* Grid de Servicios */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {personalServices.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,166,81,0.15)] transition-all duration-500 flex flex-col border border-slate-100"
            >
              {/* Borde inferior decorativo (Glow effect base) */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#009147] to-[#00a651] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />

              {/* Contenedor de Imagen con Zoom */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-[#0079c2]/0 group-hover:bg-[#0079c2]/10 transition-colors duration-500 z-10" />
                <img
                  src={s.image}
                  alt={s.label}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Badge Flotante con Glow */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#00a651] z-20 group-hover:bg-[#00a651] group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
                   <s.icon className="w-6 h-6" strokeWidth={2} />
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-7 flex flex-col flex-grow relative z-20">
                <h3 className="font-['Josefin_Sans'] font-bold text-2xl text-slate-800 mb-3 group-hover:text-[#0079c2] transition-colors">
                  {s.label}
                </h3>
                
                <p className="text-slate-500 text-sm font-body leading-relaxed mb-8 line-clamp-3">
                  {s.desc}
                </p>

                {/* Botón de Acción Modernizado */}
                <div className="mt-auto">
                  <Link
                    to={s.href}
                    className="inline-flex items-center gap-3 text-sm font-bold font-['Josefin_Sans'] text-[#00a651] group/btn"
                  >
                    <span className="relative overflow-hidden">
                      Learn More
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00a651] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#00a651]/10 flex items-center justify-center group-hover/btn:bg-[#00a651] group-hover/btn:text-white group-hover/btn:shadow-[0_0_15px_rgba(0,166,81,0.4)] transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Efecto de Iluminación interna (Inner Glow) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_30px_rgba(0,166,81,0.05)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalInsurance;