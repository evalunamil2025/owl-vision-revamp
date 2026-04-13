import { motion, Variants } from "framer-motion";
import mascot from "@/assets/owlie-mascot.png";

const Mission = () => {
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decoración de fondo orgánica */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-[#00a651]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Columna de Texto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="order-2 md:order-1"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#00a651]/10 border border-[#00a651]/20">
              <span className="text-[#00a651] font-['Josefin_Sans'] font-bold text-sm uppercase tracking-widest">
                Our Purpose
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-['Josefin_Sans'] font-bold text-[#0079c2] mb-8 leading-tight">
              Friendly Protection <br />
              <span className="text-slate-800">For Your Peace of Mind.</span>
            </h2>

            <div className="space-y-6">
              <p className="text-slate-600 font-body text-lg leading-relaxed border-l-4 border-[#00a651] pl-6 italic">
                "We take your peace of mind very seriously, but we don't believe the process of getting insured should
                be boring."
              </p>

              <p className="text-slate-500 font-body text-lg leading-relaxed pl-7">
                By paying a relatively small premium, you transfer risks that could ruin your finances. We turn that
                process into a friendly and personalized experience, because insurance can also be approachable and
                human.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex items-center gap-4 pl-7"
            >
              <div className="h-px w-12 bg-slate-200" />
              <span className="text-slate-400 font-['Josefin_Sans'] italic">The Bringas Way</span>
            </motion.div>
          </motion.div>

          {/* Columna de Mascota */}
          <div className="md:col-span-1 flex justify-center order-1 md:order-2">
            <div className="relative">
              {/* Círculos decorativos concéntricos */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-[#00a651]/20 rounded-full scale-125"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-[#00a651]/5 to-[#0079c2]/5 p-12 rounded-[3rem] shadow-inner border border-white"
              >
                <motion.img
                  src={mascot}
                  alt="Owlie mascot"
                  className="w-56 md:w-72 drop-shadow-2xl"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Badge de Confianza */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#00a651] flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter">Guaranteed</p>
                  <p className="text-sm font-['Josefin_Sans'] font-bold text-[#0079c2]">Peace of Mind</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
