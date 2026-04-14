import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Mission = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* --- Detalles Decorativos --- */}
      {/* Círculos de gradiente sutiles en los extremos para dar profundidad */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-slate-50 to-transparent rounded-full blur-3xl -z-10 opacity-60" />

      {/* Acentos de líneas minimalistas */}
      <div className="absolute top-20 left-10 w-20 h-20 border-t-2 border-l-2 border-[#00a651]/10 rounded-tl-3xl hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-20 h-20 border-b-2 border-r-2 border-[#015093]/10 rounded-br-3xl hidden lg:block" />

      <div className="container mx-auto max-w-4xl px-6 relative z-10 text-center">
        {/* Badge Superior */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#f8fafc] border border-slate-100 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#00a651] animate-pulse" />
          <span className="text-[#015093] font-heading font-black uppercase tracking-[0.3em] text-[10px]">
            About Our Essence
          </span>
        </motion.div>

        {/* Título Principal Centrado */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-heading font-bold text-[#015093] mb-12 tracking-tighter"
        >
          Our <span className="text-[#00a651] font-light italic">Mission</span>
        </motion.h2>

        {/* Contenido de Texto */}
        <div className="space-y-12">
          {/* Párrafo de Impacto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-lg text-slate-600 font-body font-light leading-relaxed max-w-3xl mx-auto"
          >
            We take your peace of mind very seriously, but we don't believe the process of getting insured should be
            <span className="text-[#015093] font-medium"> boring</span>. Our goal is for you to feel safe and smile at
            the same time.
          </motion.p>

          {/* Divisor Elegante */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-200" />
            <Quote className="w-6 h-6 text-[#00a651]/20" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-200" />
          </motion.div>

          {/* Bloque de Cierre (Cita Personalizada) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <p className="text-lg md:text-xl text-slate-500 font-body leading-relaxed italic max-w-2xl mx-auto">
              By paying a relatively small premium, you transfer risks that could ruin your finances. We turn that
              process into a{" "}
              <span className="text-[#00a651] not-italic font-semibold">friendly and personalized experience</span>,
              because insurance can also be approachable and human.
            </p>
          </motion.div>
        </div>

        {/* Decoración Final Inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-1 h-12 bg-gradient-to-b from-[#00a651]/40 to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
