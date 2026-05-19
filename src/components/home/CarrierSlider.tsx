import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import progressive from "@/assets/images/carriers/progressive.webp";
import nationalGeneral from "@/assets/images/carriers/national-general.webp";
import dairyland from "@/assets/images/carriers/dairyland.webp";
import libertyMutual from "@/assets/images/carriers/liberty-mutual.webp";
import travelers from "@/assets/images/carriers/travelers.webp";
import bristolWest from "@/assets/images/carriers/bristol-west.webp";
import foremost from "@/assets/images/carriers/foremost.png";
import btis from "@/assets/images/carriers/btis.png";
import nationwide from "@/assets/images/carriers/nationwide.webp";

const carriers = [
  { name: "Progressive", logo: progressive },
  { name: "National General", logo: nationalGeneral },
  { name: "Dairyland", logo: dairyland },
  { name: "Liberty Mutual", logo: libertyMutual },
  { name: "Travelers", logo: travelers },
  { name: "Bristol West", logo: bristolWest },
  { name: "Foremost Insurance", logo: foremost },
  { name: "BTIS", logo: btis },
  { name: "Nationwide Insurance", logo: nationwide },
];

// Duplicate for seamless loop
const doubledCarriers = [...carriers, ...carriers];

const CarrierSlider = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 text-center pt-0 mb-14">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00a651] font-heading block mb-4">
          {t("homePage.carriers.eyebrow")}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#015093] tracking-tighter font-heading">
          {t("homePage.carriers.title")}
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {doubledCarriers.map((carrier, i) => (
            <div key={`${carrier.name}-${i}`} className="flex-shrink-0 px-4">
              <img
                src={carrier.logo}
                alt={carrier.name}
                width={140}
                height={56}
                loading="lazy"
                decoding="async"
                className="h-14 w-auto object-contain hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CarrierSlider;
