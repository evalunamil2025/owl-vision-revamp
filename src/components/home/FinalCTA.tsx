import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

const FinalCTA = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
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
    <section className="relative py-24 bg-[#00a651] overflow-hidden">
      {/* Decoración de fondo dinámica */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] p-10 md:p-20 text-center shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Your Future Starts Here
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-['Josefin_Sans'] font-bold mb-6 text-white tracking-tight"
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/90 font-body text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            The first step to protecting what you love is simpler than you think. Call us or send a message — we promise
            to explain everything without jargon and, if possible, with a smile.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-6">
            {/* Botón Principal con Glow */}
            <Link
              to="/quote"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-[#00a651] font-['Josefin_Sans'] font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 active:scale-95"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Enlace de Teléfono Elegante */}
            <a
              href="tel:+14254057111"
              className="group flex items-center gap-4 text-white font-['Josefin_Sans'] font-bold text-xl hover:text-white/80 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#00a651] transition-all duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <span>(425) 405-7111</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
