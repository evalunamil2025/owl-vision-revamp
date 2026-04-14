import { motion, Variants } from "framer-motion";
import { ShieldCheck, Target, Heart } from "lucide-react"; // Usaremos iconos sutiles en lugar de mascota

const Mission = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* --- Elementos Decorativos de Fondo --- */}
      {/* Grid de puntos (Patrón sutil) */}
      <div className="absolute inset-0 [background-image:radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

      {/* Bloque geométrico lateral */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[#f8fafc] -skew-x-6 translate-x-1/3 pointer-events-none border-l border-slate-100" />

      {/* Círculo de desenfoque sutil */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00a651]/5 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna Izquierda: Títulos e Iconos */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-[#00a651]" />
              <span className="text-[#00a651] font-heading font-black uppercase tracking-[0.3em] text-xs">
                About Our Essence
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-heading font-bold text-[#015093] mb-10 tracking-tighter leading-tight">
              Our <span className="text-[#00a651] font-light italic">Mission</span>
            </h2>

            {/* Pequeños acentos visuales para que no se vea vacío */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[ShieldCheck, Target, Heart].map((Icon, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                    <Icon className="w-5 h-5 text-[#00a651]/60" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Columna Derecha: Bloques de Texto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="space-y-10">
              {/* Párrafo principal con tipografía más grande */}
              <p className="text-xl md:text-2xl text-slate-600 font-body font-light leading-relaxed">
                We take your peace of mind very seriously, but we don't believe the process of getting insured should be
                boring. Our goal is for you to feel safe and smile at the same time.
              </p>

              {/* Bloque de cita refinado */}
              <div className="relative p-10 bg-[#f8fafc] rounded-[2rem] border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
                {/* Comilla decorativa */}
                <span className="absolute -top-6 left-8 text-8xl text-[#00a651]/10 font-serif leading-none">“</span>

                <p className="text-lg text-slate-500 font-body leading-relaxed italic relative z-10">
                  By paying a relatively small premium, you transfer risks that could ruin your finances. We turn that
                  process into a friendly and personalized experience, because insurance can also be approachable and
                  human.
                </p>

                {/* Línea de acento inferior */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#00a651]/20 to-transparent rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
