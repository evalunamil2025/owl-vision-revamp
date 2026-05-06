import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import mascot from "@/assets/owlie-mascot.webp";

const FinalCTA = () => {
  const { t } = useTranslation();
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
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
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#015093] via-[#0079c2] to-[#015093] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00a651]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
        >
          {/* Mascot side */}
          <motion.div variants={itemVariants} className="relative flex-shrink-0 flex justify-center md:justify-start">
            {/* Speech bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-6 md:top-0 z-20 bg-white rounded-2xl px-5 py-3 shadow-lg max-w-[220px] text-center"
            >
              <p className="text-sm font-semibold text-[#015093] font-['Josefin_Sans'] leading-snug">
                {t("homePage.finalCta.speech")}
              </p>
              {/* Bubble tail */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 rounded-sm shadow-sm" />
            </motion.div>

            <motion.img
              src={mascot}
              alt="Owlie mascot"
              className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl relative z-10 mt-16 md:mt-14"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Text & CTA side */}
          <div className="flex-1 text-center md:text-left">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-['Josefin_Sans'] font-bold mb-5 text-white tracking-tight leading-tight"
            >
              {t("homePage.finalCta.title")}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-white/85 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              {t("homePage.finalCta.desc")}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start items-center gap-5">
              <Link
                to="/quote"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#00a651] text-white font-['Josefin_Sans'] font-bold text-lg transition-all duration-300 hover:bg-[#00b85c] hover:shadow-[0_0_30px_rgba(0,166,81,0.4)] hover:-translate-y-1 active:scale-95"
              >
                {t("homePage.finalCta.cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+14254057111"
                className="group flex items-center gap-3 text-white font-['Josefin_Sans'] font-bold text-lg hover:text-white/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#015093] transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span>(425) 405-7111</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
