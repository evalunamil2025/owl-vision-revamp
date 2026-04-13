import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";

const Community = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[#0079c2]">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-[#00a651] rounded-full blur-[120px] opacity-40" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-[#005296] rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl"
        >
          {/* Icono Flotante Superior */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-8 text-[#00a651]"
          >
            <Globe2 className="w-8 h-8" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-['Josefin_Sans'] font-bold mb-6 text-white tracking-tight"
          >
            Nuestra Comunidad Hispana
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/90 font-body text-xl leading-relaxed max-w-3xl mx-auto mb-8 font-light"
          >
            We're bilingual and understand that serving the Hispanic community requires authenticity and warmth. We
            communicate with respect and joy in both Spanish and English, so you feel at home.
          </motion.p>

          {/* Separador elegante */}
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-[#00a651] mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(0,166,81,0.5)]"
          />

          <motion.p
            variants={itemVariants}
            className="text-white/60 text-sm font-body mb-10 tracking-wide uppercase italic"
          >
            Latinos represent nearly one in five Americans, with purchasing power exceeding $2.8 trillion by 2026.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              to="/quote"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-white text-[#0079c2] font-['Josefin_Sans'] font-bold text-lg transition-all duration-300 hover:bg-[#00a651] hover:text-white hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1"
            >
              Let's Talk
              <div className="w-8 h-8 rounded-full bg-[#0079c2]/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
