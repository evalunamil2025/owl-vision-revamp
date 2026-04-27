import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Quote = () => {
  const { t } = useTranslation();

  const insuranceOptions: string[] = [
    t("services.auto"),
    t("services.home"),
    t("services.life"),
    t("services.flood"),
    t("services.boat"),
    t("services.motorcycle"),
    t("services.rv"),
    t("services.renters"),
    t("services.landlord"),
    t("services.mobileHome"),
    t("services.personalUmbrella"),
    t("services.generalLiability"),
    t("services.bop"),
    t("services.commercialAuto"),
    t("services.commercialProperty"),
    t("services.contractors"),
    t("services.restaurant"),
    t("services.buildingOwners"),
    t("services.bondsSurety"),
    t("services.other"),
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="gradient-blue text-primary-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 owl-pattern opacity-20" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-white">{t("quote.pageTitle")}</h1>
            <p className="text-lg text-primary-foreground/80 font-body">{t("quote.pageSubtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-heading font-bold mb-6">{t("quote.contactUs")}</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-heading font-semibold mb-1.5">{t("quote.firstName")}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("quote.placeholders.firstName")} />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold mb-1.5">{t("quote.lastName")}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("quote.placeholders.lastName")} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold mb-1.5">{t("quote.email")}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("quote.placeholders.email")} />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold mb-1.5">{t("quote.phone")}</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("quote.placeholders.phone")} />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold mb-1.5">{t("quote.insuranceType")}</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">{t("common.selectOption")}</option>
                    {insuranceOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold mb-1.5">{t("quote.message")}</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder={t("quote.placeholders.message")} />
                </div>
                <button type="submit" className="w-full btn-primary">{t("common.sendRequest")}</button>
              </form>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="elevated-card p-6">
                <h3 className="font-heading font-bold text-primary mb-4">{t("quote.sidebar.getInTouch")}</h3>
                <div className="space-y-4">
                  <a href="tel:+14254057111" className="flex items-center gap-3 text-sm font-body hover:text-secondary transition-colors duration-200"><Phone className="w-5 h-5 text-secondary flex-shrink-0" strokeWidth={2} />{t("common.phone")}</a>
                  <a href="mailto:info@bringasinsurance.com" className="flex items-center gap-3 text-sm font-body hover:text-secondary transition-colors duration-200"><Mail className="w-5 h-5 text-secondary flex-shrink-0" strokeWidth={2} />info@bringasinsurance.com</a>
                  <div className="flex items-start gap-3 text-sm font-body"><MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" strokeWidth={2} /><span>{t("footer.address")}</span></div>
                  <div className="flex items-start gap-3 text-sm font-body"><Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" strokeWidth={2} /><span>{t("quote.sidebar.hours")}</span></div>
                </div>
              </div>
              <div className="elevated-card p-6 border-l-4 border-l-secondary">
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{t("quote.sidebar.hablamos")}</p>
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
