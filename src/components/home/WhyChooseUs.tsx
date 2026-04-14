import { motion } from "motion/react";
import { whyUs } from "@/data/homeData";

const WhyChooseUs = () => {
  return (
    <section className="relative py-32 bg-[#00a651] overflow-hidden">
      {/* Capas de degradado para profundidad moderna */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00a651] via-[#008f45] to-[#015093]/30" />

      {/* Elementos decorativos de fondo con opacidad controlada */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#015093]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Cabecera de Sección (Invertida a Blanco) */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.95] mb-8 font-heading"
          >
            Why Choose <br />
            <span className="text-white/80 font-light italic">Bringas Insurance?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 font-body font-light leading-relaxed"
          >
            We take your peace of mind seriously — but we don't believe the process should be boring. Experience a more
            human way to protect your assets.
          </motion.p>
        </div>

        {/* Grid de Tarjetas (Estilo Glassmorphism) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Contenedor de Icono centrado */}
              <div className="mb-8 relative flex justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-[#00a651] transition-colors duration-500">
                  <item.icon
                    className="w-8 h-8 text-white group-hover:text-white transition-all duration-500 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>
                {/* Punto decorativo */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Título centrado (Cambia de blanco a azul al hacer hover) */}
              <h3 className="text-xl font-bold text-white mb-4 font-heading tracking-tight group-hover:text-[#015093] transition-colors">
                {item.title}
              </h3>

              {/* Descripción centrada */}
              <p className="text-sm text-white/70 font-body leading-relaxed group-hover:text-[#015093]/70 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cierre visual sutil */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
