import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import mascot from "@/assets/owlie-mascot.png";
import heroBg from "@/assets/seattle-hero-bg.jpg";

const Hero = () => {
  // Variantes para animar los elementos de texto en cascada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative text-primary-foreground overflow-hidden min-h-[650px] lg:min-h-[800px] flex items-center">
      {/* Background con efecto Zoom mejorado (Ken Burns) */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.25 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
      >
        <img src={heroBg} alt="" className="w-full h-full object-cover object-center" />
      </motion.div>

      {/* Overlay Azul más oscuro y profundo */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#002d4a]/95 via-[#0079c2]/80 to-transparent" />

      {/* Pattern sutil */}
      <div className="absolute inset-0 z-[2] owl-pattern opacity-[0.07]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de Texto con Stagger */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-white mb-8 tracking-wide"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#00a651] animate-pulse" />
              OWLIE IS HERE • INDEPENDENT INSURANCE AGENCY
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white"
            >
              Insurance that <br />
              <span className="text-[#00a651]">protects</span> what <br className="hidden sm:block" />
              you love
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/80 font-medium leading-relaxed mb-10 max-w-xl"
            >
              Family • Home • Auto • Business — We compare multiple carriers to find the perfect fit. Real protection,
              no complications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
              <Link
                to="/quote"
                className="bg-[#00a651] hover:bg-white hover:text-[#0079c2] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-xl hover:shadow-[#00a651]/20 active:scale-95"
              >
                Get Your Free Quote <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="tel:+14254057111"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 active:scale-95"
              >
                <Phone className="w-5 h-5 text-[#00a651]" strokeWidth={3} /> (425) 405-7111
              </a>
            </motion.div>
          </motion.div>

          {/* Mascota con efecto de flotación y entrada suave */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hidden lg:flex justify-center relative"
          >
            {/* Resplandor detrás de la mascota para profundidad */}
            <div className="absolute inset-0 bg-[#00a651]/20 blur-[120px] rounded-full" />

            <motion.img
              src={mascot}
              alt="Owlie Mascot"
              className="w-80 xl:w-[400px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] relative z-10"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
