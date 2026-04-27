import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

const Community = () => {
  const { t } = useTranslation();
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
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
    <section className="relative py-28 overflow-hidden bg-[#00a651]">
      {/* Background texture pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Ambient lights for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0079c2]/30 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Top badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
          >
            <Languages className="w-4 h-4 text-white" />
            <span className="text-white font-['Josefin_Sans'] text-xs font-bold uppercase tracking-[0.2em]">
              {t("homePage.community.badge")}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-['Josefin_Sans'] font-bold mb-8 text-white tracking-tight"
          >
            {t("homePage.community.title")}
          </motion.h2>

          <motion.div variants={itemVariants} className="max-w-3xl mx-auto space-y-6">
            <p className="text-white font-body text-xl md:text-2xl leading-relaxed font-light">
              {t("homePage.community.paragraph")}
            </p>

            <div className="py-8">
              <div className="w-16 h-1 bg-white/30 mx-auto rounded-full" />
            </div>

            <p className="text-white/70 text-base font-body max-w-xl mx-auto italic">
              {t("homePage.community.stat")}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <Link
              to="/quote"
              className="group inline-flex items-center gap-4 px-12 py-5 rounded-2xl bg-white text-[#00a651] font-['Josefin_Sans'] font-bold text-lg transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:scale-95"
            >
              {t("homePage.community.cta")}
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00a651] text-white transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
