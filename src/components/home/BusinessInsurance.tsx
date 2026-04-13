import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { businessServices } from "@/data/homeData";

const BusinessInsurance = () => {
  // Variantes para la animación de entrada (Stagger effect)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
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
              Business Insurance
            </h2>
            <div className="w-20 h-1.5 bg-[#00a651] mx-auto mb-6 rounded-full shadow-[0_0_10px_rgba(0,166,81,0.3)]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 font-body text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Your business is your project — we make sure it's properly protected with tailored corporate solutions.
          </motion.p>
        </div>

        {/* Grid de Servicios Business */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {businessServices.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(0,166,81,0.18)] transition-all duration-500 flex flex-col border border-slate-100"
            >
              {/* Borde inferior con Glow Animado (Identidad Verde) */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#009147] to-[#00a651] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10 shadow-[0_-5px_15px_rgba(0,166,81,0.3)]" />

              {/* Contenedor de Imagen con Overlay sutil al hover */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-[#0079c2]/0 group-hover:bg-[#0079c2]/5 transition-colors duration-500 z-10" />
                <img
                  src={s.image}
                  alt={s.label}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Badge Flotante de Icono */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#00a651] z-20 group-hover:bg-[#00a651] group-hover:text-white transition-all duration-300 transform group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(0,166,81,0.4)]">
                  <s.icon className="w-6 h-6" strokeWidth={2} />
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-7 flex flex-col flex-grow relative z-20">
                <h3 className="font-['Josefin_Sans'] font-bold text-2xl text-slate-800 mb-3 group-hover:text-[#0079c2] transition-colors">
                  {s.label}
                </h3>

                <p className="text-slate-500 text-sm font-body leading-relaxed mb-8 line-clamp-3">{s.desc}</p>

                {/* Botón Learn More Estilizado */}
                <div className="mt-auto">
                  <Link
                    to={s.href}
                    className="inline-flex items-center gap-3 text-sm font-bold font-['Josefin_Sans'] text-[#00a651] group/btn"
                  >
                    <span className="relative">
                      Learn More
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00a651] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#00a651]/10 flex items-center justify-center group-hover/btn:bg-[#00a651] group-hover/btn:text-white group-hover/btn:shadow-[0_5px_15px_rgba(0,166,81,0.3)] transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Efecto de Iluminación interna (Glow sutil) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_40px_rgba(0,166,81,0.03)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessInsurance;
