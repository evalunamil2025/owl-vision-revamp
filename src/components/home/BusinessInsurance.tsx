import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { businessServices } from "@/data/homeData";

const BusinessInsurance = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative py-32 bg-[#015093] overflow-hidden">
      {/* Decoración de fondo (Glows corporativos) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0079c2]/20 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00a651]/10 rounded-full blur-[100px] translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Cabecera de Sección (Versión Dark) */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Briefcase className="w-4 h-4 text-[#00a651]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70 font-heading">
              Corporate Solutions
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.95] font-heading"
            >
              Business <br />
              <span className="text-[#00a651] font-light italic text-3xl md:text-5xl">Insurance</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/60 font-body font-light max-w-md leading-relaxed"
            >
              Your business is your project — we ensure it's protected with high-level tailored corporate solutions.
            </motion.p>
          </div>
        </div>

        {/* Grid de Servicios Business (Cards Horizontales/Glass) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {businessServices.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 hover:border-[#00a651]/30 hover:bg-white/10 transition-all duration-500 overflow-hidden flex flex-col sm:flex-row h-full shadow-2xl"
            >
              {/* Imagen Lateral */}
              <div className="w-full sm:w-48 h-48 sm:h-auto overflow-hidden">
                <img
                  src={s.image}
                  alt={s.label}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Contenido Card */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white font-heading tracking-tight group-hover:text-[#00a651] transition-colors">
                    {s.label}
                  </h3>
                  <div className="text-[#00a651]">
                    <s.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                </div>

                <p className="text-white/50 text-sm font-body leading-relaxed mb-6 line-clamp-2">{s.desc}</p>

                <div className="mt-auto">
                  <Link
                    to={s.href}
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white group/btn"
                  >
                    Protect Business
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#00a651] group-hover/btn:border-[#00a651] transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessInsurance;
