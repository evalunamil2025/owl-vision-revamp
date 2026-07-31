import { motion } from "framer-motion";
import { Phone, ArrowRight, Sparkles, ExternalLink, Mail, KeyRound, ShieldCheck, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import contactHeroBg from "@/assets/seattle-hero-bg.jpg";

const PORTAL_URL =
  "https://customerservice.agentinsure.com/EzlynxCustomerService/bringasins/Account/LogIn";

const ClientCenter = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: Mail, title: t("clientCenter.step1Title"), desc: t("clientCenter.step1Desc") },
    { icon: ShieldCheck, title: t("clientCenter.step2Title"), desc: t("clientCenter.step2Desc") },
    { icon: KeyRound, title: t("clientCenter.step3Title"), desc: t("clientCenter.step3Desc") },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Client Center | Bringas Insurance Group"
        description="Access your policy documents, ID cards, certificates and service requests through the Bringas Insurance Group Client Center."
        path="/client-center"
      />

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
                {t("clientCenter.heroBadge")}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-tighter leading-[0.9] mb-8 font-heading">
              {t("clientCenter.heroTitle")}
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              {t("clientCenter.heroSubtitle")}
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

      {/* PORTAL DESCRIPTION */}
      <section className="pb-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto -translate-y-24 bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#0079c2]/10 shadow-xl shadow-[#0079c2]/5 relative z-20 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#015093] tracking-tight mb-4 font-heading">
              {t("clientCenter.portalTitle")}
            </h2>
            <p className="text-[#015093]/70 font-body leading-relaxed max-w-2xl mx-auto">
              {t("clientCenter.portalDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* STEPS */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00a651] font-heading block mb-4">
              {t("clientCenter.heroBadge")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#015093] tracking-tighter font-heading">
              {t("clientCenter.stepsTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-white border border-[#0079c2]/10 rounded-[2rem] p-8 shadow-lg shadow-[#0079c2]/5 hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#0079c2] to-[#015093] text-white rounded-full flex items-center justify-center font-black text-lg shadow-lg">
                    {i + 1}
                  </div>
                  <div className="w-14 h-14 bg-[#00a651]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#00a651]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#015093] mb-3 font-heading tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-[#015093]/70 font-body text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Note */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="flex items-start gap-4 bg-[#0079c2]/5 border border-[#0079c2]/10 rounded-2xl p-6">
              <AlertCircle className="w-5 h-5 text-[#00a651] flex-shrink-0 mt-0.5" />
              <p className="text-[#015093]/80 font-body text-sm leading-relaxed">
                <Trans
                  i18nKey="clientCenter.note"
                  components={{ 1: <strong className="text-[#015093] font-bold" /> }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IFRAME PORTAL */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#015093] font-heading tracking-tight">
                {t("clientCenter.iframeTitle")}
              </h3>
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00a651] text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-md shadow-[#00a651]/20 hover:bg-[#0079c2] transition-all"
              >
                {t("clientCenter.openInNewTab")}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-[#0079c2]/10 shadow-2xl shadow-[#0079c2]/10 bg-white">
              <iframe
                src={PORTAL_URL}
                title={t("clientCenter.iframeTitle")}
                className="w-full h-[700px] md:h-[800px] border-0 block"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-12">
            <h3 className="text-lg md:text-xl font-bold text-[#015093] font-heading tracking-tight mb-4 uppercase">
              {t("clientCenter.disclaimerTitle")}
            </h3>
            <p className="text-[#015093]/70 font-body text-sm leading-relaxed">
              {t("clientCenter.disclaimerBody")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
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
                  to="/quote"
                  className="px-12 py-6 bg-[#00a651] text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-[#00a651]/30 hover:bg-white hover:text-[#015093] transition-all flex items-center justify-center gap-2 group"
                >
                  {t("payBill.cta.button")}
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

export default ClientCenter;
