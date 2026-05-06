import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import mascot from "@/assets/owlin-branch.webp";
import heroBg from "@/assets/seattle-hero-bg.jpg";

const Hero = () => {
  const { t } = useTranslation();
  // Letter-by-letter reveal for the headline
  const headlineContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } },
  };

  const letter = {
    initial: { opacity: 0, y: 40, rotateX: -90 },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

  const renderWord = (word: string, extraClass = "") =>
    word.split("").map((char, idx) => (
      <motion.span
        key={`${word}-${idx}`}
        variants={letter}
        className={`inline-block ${extraClass}`}
        style={{ transformOrigin: "50% 100%" }}
      >
        {char}
      </motion.span>
    ));

  const leftEntry = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  const bottomEntry = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
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
          {/* Text content — slides in from left */}
          <div>
            <motion.span
              {...leftEntry}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-white mb-8 tracking-wide"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#00a651] animate-pulse" />
              {t("hero.badge")}
            </motion.span>

            {/* Headline with letter-by-letter cinematic reveal */}
            <motion.h1
              variants={headlineContainer}
              initial="initial"
              animate="animate"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white tracking-tight"
              style={{ perspective: 800 }}
            >
              <span className="block mb-2">
                {renderWord(t("hero.titleLine1a"))}
                <span className="inline-block w-3" />
                {renderWord(t("hero.titleLine1b"))}
              </span>

              {/* accent word with gradient + glow + underline */}
              <span className="block relative mb-2">
                <motion.span
                  className="relative inline-block bg-gradient-to-r from-[#00d96a] via-[#00a651] to-[#00d96a] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,166,81,0.45)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  {renderWord(t("hero.titleProtects"))}
                  <motion.span
                    className="absolute left-0 -bottom-2 h-[6px] rounded-full bg-gradient-to-r from-[#00a651] to-[#00d96a]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.span>
                <span className="inline-block w-3" />
                {renderWord(t("hero.titleLine2b"))}
              </span>

              <span className="block">
                {renderWord(t("hero.titleLine3a"))}
                <span className="inline-block w-3" />
                {renderWord(t("hero.titleLine3b"))}
              </span>
            </motion.h1>

            <motion.p
              {...leftEntry}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
              className="text-lg sm:text-xl text-white/80 font-medium leading-relaxed mb-10 max-w-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons — slide up from bottom */}
            <motion.div
              {...bottomEntry}
              transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
              className="flex flex-wrap gap-5"
            >
              <Link
                to="/quote"
                className="bg-[#00a651] hover:bg-white hover:text-[#0079c2] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-xl hover:shadow-[#00a651]/20 active:scale-95"
              >
                {t("common.getFreeQuote")} <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="tel:+14254057111"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 active:scale-95"
              >
                <Phone className="w-5 h-5 text-[#00a651]" strokeWidth={3} /> {t("common.phone")}
              </a>
            </motion.div>
          </div>

          {/* Mascota — entrada cinematográfica + flotación + sutil rotación */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15, y: 80 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.6,
              type: "spring",
              stiffness: 70,
              damping: 14,
            }}
            className="hidden lg:flex justify-center relative"
          >
            {/* Resplandor pulsante detrás de la mascota */}
            <motion.div
              className="absolute inset-0 bg-[#00a651]/25 blur-[120px] rounded-full"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Anillo decorativo orbitando */}
            <motion.div
              className="absolute inset-8 border-2 border-dashed border-white/15 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            <motion.img
              src={mascot}
              alt="Owlie Mascot"
              className="w-80 xl:w-[420px] drop-shadow-[0_35px_45px_rgba(0,0,0,0.55)] relative z-10"
              animate={{
                y: [0, -22, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
