import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { personalServices } from "@/data/homeData";

const PersonalInsurance = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#f8fafb] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#015093]/5 border border-[#015093]/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#00a651]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#015093]/70 font-heading">
              Protection for you
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-[#015093] tracking-tighter leading-[0.95] mb-8 font-heading"
          >
            Personal <br />
            <span className="text-[#00a651] font-light italic">Insurance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#015093]/60 font-body font-light leading-relaxed"
          >
            Coverage designed to protect you, your family, and everything you've built with effort and dedication.
          </motion.p>
        </div>

        {/* Grid de Servicios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8"
        >
          {personalServices.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-[#015093]/5 shadow-[0_20px_40px_-15px_rgba(1,80,147,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,166,81,0.15)] transition-all duration-700 flex flex-col h-full"
            >
              {/* Imagen con Aspect Ratio controlado */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.label}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#015093]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Floating Badge */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#015093] shadow-lg group-hover:bg-[#00a651] group-hover:text-white transition-all duration-500">
                  <s.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>

              {/* Contenido Card */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#015093] mb-3 font-heading tracking-tight group-hover:text-[#0079c2] transition-colors">
                  {s.label}
                </h3>

                <p className="text-[#015093]/60 text-sm font-body leading-relaxed mb-8 line-clamp-3">{s.desc}</p>

                <div className="mt-auto">
                  <Link
                    to={s.href}
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#00a651] group/btn"
                  >
                    Learn More
                    <div className="w-8 h-8 rounded-xl bg-[#00a651]/10 flex items-center justify-center group-hover/btn:bg-[#00a651] group-hover/btn:text-white transition-all duration-300">
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

export default PersonalInsurance;
