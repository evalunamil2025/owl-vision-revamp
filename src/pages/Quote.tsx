import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight, Sparkles, ExternalLink, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactHeroBg from "@/assets/seattle-hero-bg.jpg";

const QUOTE_URL =
  "https://www.agentinsure.com/compare/auto-insurance-home-insurance/bringasins/quote.aspx";

const Quote = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <title>Get a Quote | Bringas Insurance Group</title>

      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-[#015093]">
        <div className="absolute inset-0 z-0">
          <img src={contactHeroBg} alt="Seattle Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#015093]/95 via-[#015093]/90 to-[#0079c2]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[#001e2b]/40" />
        </div>

        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00a651]/20 rounded-full blur-[120px] animate-pulse z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-[#00a651]" />
              <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase">
                {t("quote.heroBadge")}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-tighter leading-[0.9] mb-8 font-heading">
              {t("quote.heroTitle")}
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              {t("quote.heroSubtitle")}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-10">
          <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120C0,120,321.39,56.44,321.39,56.44Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* MAIN: Iframe + Sidebar */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 -translate-y-24 relative z-20">
            {/* Iframe */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white rounded-[2.5rem] border border-[#0079c2]/10 shadow-xl shadow-[#0079c2]/5 overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#0079c2]/10 bg-[#f7fbff]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#00a651]" />
                  <span className="text-sm font-bold text-[#015093] font-heading tracking-tight">
                    {t("quote.iframeTitle")}
                  </span>
                </div>
                <a
                  href={QUOTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#0079c2] hover:text-[#00a651] transition-colors"
                >
                  {t("quote.openInNewTab")}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <iframe
                src={QUOTE_URL}
                title={t("quote.iframeTitle")}
                className="w-full block border-0 bg-white"
                style={{ minHeight: "850px" }}
                loading="lazy"
              />
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-[2rem] border border-[#0079c2]/10 shadow-lg shadow-[#0079c2]/5">
                <h3 className="text-xl font-bold text-[#015093] font-heading tracking-tight mb-6">
                  {t("quote.sidebar.getInTouch")}
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+14254057111"
                    className="flex items-center gap-3 text-sm font-body text-[#015093] hover:text-[#00a651] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#00a651]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#00a651]" />
                    </div>
                    <span className="font-semibold">{t("common.phone")}</span>
                  </a>
                  <a
                    href="mailto:info@bringasinsurance.com"
                    className="flex items-center gap-3 text-sm font-body text-[#015093] hover:text-[#00a651] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#00a651]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#00a651]" />
                    </div>
                    <span>info@bringasinsurance.com</span>
                  </a>
                  <div className="flex items-start gap-3 text-sm font-body text-[#015093]/80">
                    <div className="w-10 h-10 rounded-xl bg-[#00a651]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#00a651]" />
                    </div>
                    <span className="pt-2">{t("footer.address")}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm font-body text-[#015093]/80">
                    <div className="w-10 h-10 rounded-xl bg-[#00a651]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-[#00a651]" />
                    </div>
                    <span className="pt-2">{t("quote.sidebar.hours")}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0079c2]/5 to-[#00a651]/5 p-6 rounded-[2rem] border border-[#0079c2]/10">
                <p className="text-sm text-[#015093]/80 font-body leading-relaxed">
                  {t("quote.sidebar.hablamos")}
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-[#f7fbff] border border-[#0079c2]/10 rounded-[2rem] p-8 md:p-10"
          >
            <h2 className="text-lg md:text-xl font-bold text-[#015093] font-heading tracking-tight mb-4">
              {t("quote.disclaimerTitle")}
            </h2>
            <p className="text-sm text-[#015093]/70 font-body leading-relaxed">
              {t("quote.disclaimerBody")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#015093] to-[#003f5e] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a651]/10 blur-[80px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0079c2]/10 blur-[60px] rounded-full" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6 leading-[1.05] font-heading">
                {t("payBill.cta.title")}
              </h2>
              <p className="text-white/90 text-lg font-body font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                {t("payBill.cta.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  to="/contact"
                  className="px-12 py-6 bg-[#00a651] text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-[#00a651]/30 hover:bg-white hover:text-[#015093] transition-all flex items-center justify-center gap-2 group"
                >
                  {t("common.contactUs")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+14254057111"
                  className="px-12 py-6 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#00a651]" /> {t("common.phone")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
