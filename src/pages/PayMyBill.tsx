import { motion } from "framer-motion";
import { Phone, ArrowRight, Sparkles, ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import contactHeroBg from "@/assets/seattle-hero-bg.jpg";

import progressive from "@/assets/images/carriers/progressive.jpg";
import nationalGeneral from "@/assets/images/carriers/national-general.jpg";
import dairyland from "@/assets/images/carriers/dairyland.png";
import libertyMutual from "@/assets/images/carriers/liberty-mutual.png";
import travelers from "@/assets/images/carriers/travelers.jpg";
import bristolWest from "@/assets/images/carriers/bristol-west.png";
import foremost from "@/assets/images/carriers/foremost.png";
import btis from "@/assets/images/carriers/btis.png";
import nationwide from "@/assets/images/carriers/nationwide.jpg";

interface Carrier {
  name: string;
  logo: string;
  website: string;
  phone: string;
  phoneHref: string;
}

const carriers: Carrier[] = [
  {
    name: "Progressive",
    logo: progressive,
    website: "https://account.progressive.com/access/ez-payment/policy-info",
    phone: "877-776-2436",
    phoneHref: "tel:+18777762436",
  },
  {
    name: "National General",
    logo: nationalGeneral,
    website: "https://www.mynatgenpolicy.com/Pay",
    phone: "877-468-3466",
    phoneHref: "tel:+18774683466",
  },
  {
    name: "Dairyland",
    logo: dairyland,
    website: "https://account.progressive.com/access/ez-payment/policy-info",
    phone: "800-334-0090",
    phoneHref: "tel:+18003340090",
  },
  {
    name: "Liberty Mutual",
    logo: libertyMutual,
    website: "https://www.libertymutual.com/log-in",
    phone: "800-295-2820",
    phoneHref: "tel:+18002952820",
  },
  {
    name: "Travelers",
    logo: travelers,
    website: "https://www.travelers.com/personal-insurance/other-payment-options",
    phone: "877-878-2486",
    phoneHref: "tel:+18778782486",
  },
  {
    name: "Bristol West",
    logo: bristolWest,
    website: "https://www.bristolwest.com/nologin?type=pay",
    phone: "855-319-7763",
    phoneHref: "tel:+18553197763",
  },
  {
    name: "Foremost Insurance",
    logo: foremost,
    website: "https://www.foremost.com/payonline/",
    phone: "888-383-4244",
    phoneHref: "tel:+18883834244",
  },
  {
    name: "BTIS",
    logo: btis,
    website: "https://btisinc.com/contact/",
    phone: "877-585-2853",
    phoneHref: "tel:+18775852853",
  },
  {
    name: "Nationwide Insurance",
    logo: nationwide,
    website: "https://myservicing.nationwide.com/#/personal/quickpay/search",
    phone: "800-282-1446",
    phoneHref: "tel:+18002821446",
  },
];

const PayMyBill = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Pay My Bill | Bringas Insurance Group"
        description="Pay your insurance bill directly with Progressive, National General, Dairyland, Liberty Mutual, Travelers, Bristol West, Foremost, BTIS or Nationwide."
        path="/pay-my-bill"
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
                {t("payBill.heroBadge")}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-tighter leading-[0.9] mb-8 font-heading">
              {t("payBill.heroTitle")}
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              {t("payBill.heroSubtitle")}
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

      {/* INFO CARD */}
      <section className="pb-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto -translate-y-24 bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#0079c2]/10 shadow-xl shadow-[#0079c2]/5 relative z-20"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex-shrink-0 bg-[#00a651]/10 rounded-2xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#00a651]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#015093] tracking-tight mb-3 font-heading">
                  {t("payBill.infoTitle")}
                </h2>
                <p className="text-[#015093]/70 font-body leading-relaxed">{t("payBill.infoDesc")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CARRIERS GRID */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {carriers.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-[#0079c2]/10 rounded-[2rem] p-8 shadow-lg shadow-[#0079c2]/5 hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="h-24 flex items-center justify-center mb-6">
                  <img src={c.logo} alt={c.name} className="max-h-20 w-auto object-contain" />
                </div>
                <h3 className="text-lg font-bold text-[#015093] text-center mb-6 font-heading tracking-tight">
                  {c.name}
                </h3>
                <div className="mt-auto space-y-3">
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#00a651] text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-md shadow-[#00a651]/20 hover:bg-[#0079c2] transition-all"
                  >
                    {t("payBill.visitWebsite")}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={c.phoneHref}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#0079c2]/5 text-[#015093] rounded-full font-bold text-sm hover:bg-[#0079c2]/10 transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#00a651]" />
                    {c.phone}
                  </a>
                </div>
              </motion.div>
            ))}
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

export default PayMyBill;
