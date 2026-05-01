import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { whyUs } from "@/data/homeData";

const WhyChooseUs = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-[5px] md:py-28 lg:py-36 bg-[#f7faf9] overflow-hidden">
      {/* Decorative background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7faf9] to-white" />
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-[#00a651]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 -right-32 w-[600px] h-[600px] bg-[#0079c2]/10 rounded-full blur-[160px]" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#015093 1px, transparent 1px), linear-gradient(90deg, #015093 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — Sticky editorial panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a651]/10 border border-[#00a651]/20 text-[#00a651] text-xs font-bold tracking-[0.18em] uppercase mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                {t("homePage.whyUs.badge")}
              </span>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#012f57] tracking-tighter leading-[0.95] mb-8 font-heading">
                {t("homePage.whyUs.titleA")} <span className="italic font-light text-[#0079c2]">{t("homePage.whyUs.titleAccent")}</span><br />
                {t("homePage.whyUs.titleB")}
              </h2>

              <p className="text-lg text-[#012f57]/70 font-body leading-relaxed mb-10 max-w-md">
                {t("homePage.whyUs.intro")}
              </p>

              {/* Decorative stat strip */}
              <div className="flex items-center gap-6 pt-8 border-t border-[#012f57]/10">
                <div>
                  <div className="text-4xl font-bold text-[#00a651] font-heading">15+</div>
                  <div className="text-xs text-[#012f57]/60 uppercase tracking-wider mt-1">
                    {t("homePage.whyUs.stats.carriers")}
                  </div>
                </div>
                <div className="h-12 w-px bg-[#012f57]/10" />
                <div>
                  <div className="text-4xl font-bold text-[#0079c2] font-heading">100%</div>
                  <div className="text-xs text-[#012f57]/60 uppercase tracking-wider mt-1">
                    {t("homePage.whyUs.stats.independent")}
                  </div>
                </div>
                <div className="h-12 w-px bg-[#012f57]/10" />
                <div>
                  <div className="text-4xl font-bold text-[#012f57] font-heading">24/7</div>
                  <div className="text-xs text-[#012f57]/60 uppercase tracking-wider mt-1">
                    {t("homePage.whyUs.stats.support")}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Staggered editorial cards */}
          <div className="lg:col-span-7 space-y-5">
            {whyUs.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className={`group relative bg-white rounded-3xl p-8 lg:p-10 border border-[#012f57]/8 shadow-[0_10px_40px_-20px_rgba(1,47,87,0.15)] hover:shadow-[0_30px_60px_-20px_rgba(0,121,194,0.25)] transition-all duration-500 cursor-pointer overflow-hidden ${
                  i % 2 === 1 ? "lg:ml-12" : "lg:mr-12"
                }`}
              >
                {/* Animated gradient accent (top stripe) */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a651] via-[#0079c2] to-[#00a651] bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shimmer_3s_linear_infinite]" />

                {/* Hover glow corner */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#00a651]/0 group-hover:bg-[#00a651]/10 rounded-full blur-3xl transition-all duration-700" />

                {/* Big watermark numeral, top-right corner */}
                <div className="absolute top-4 right-6 text-6xl lg:text-7xl font-bold text-[#0079c2]/[0.06] font-heading leading-none select-none pointer-events-none group-hover:text-[#0079c2]/[0.12] transition-colors duration-500">
                  0{i + 1}
                </div>

                <div className="relative flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0079c2] to-[#012f57] flex items-center justify-center shadow-lg shadow-[#0079c2]/20 group-hover:from-[#00a651] group-hover:to-[#008f45] group-hover:shadow-[#00a651]/30 group-hover:rotate-[-6deg] group-hover:scale-110 transition-all duration-500">
                      <item.icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                      <span className="absolute inset-0 rounded-2xl border-2 border-[#00a651] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pr-12">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-[#012f57] font-heading tracking-tight group-hover:text-[#0079c2] transition-colors duration-300">
                        {t(`homePage.whyUs.items.${item.key}.title` as const)}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-[#012f57]/30 group-hover:text-[#00a651] group-hover:rotate-45 transition-all duration-500 flex-shrink-0 mt-1" />
                    </div>

                    <p className="text-[#012f57]/70 font-body leading-relaxed">
                      {t(`homePage.whyUs.items.${item.key}.desc` as const)}
                    </p>

                    <div className="mt-5 h-px w-0 bg-gradient-to-r from-[#00a651] to-[#0079c2] group-hover:w-full transition-all duration-700 ease-out" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
