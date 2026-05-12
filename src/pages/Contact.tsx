import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactHeroBg from "@/assets/seattle-hero-bg.jpg";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Contact = () => {
  const { t } = useTranslation();
  const inputClasses =
    "w-full bg-[#0079c2]/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#00a651] transition-all outline-none text-[#015093] placeholder:text-[#015093]/40 font-body";

  const infoItems = [
    { icon: Phone, label: t("contact.callUs"), val: t("common.phone"), href: "tel:+14254057111" },
    { icon: Mail, label: t("contact.emailUs"), val: "raul@bringasinsurance.com", href: "mailto:raul@bringasinsurance.com" },
    { icon: MapPin, label: t("contact.visitUs"), val: "9111 Evergreen Way, Everett, WA 98204", href: "https://www.google.com/maps/search/?api=1&query=9111+Evergreen+Way+Everett+WA+98204" },
  ];

  const socialLinks = [
    { icon: FacebookIcon, label: "Facebook", handle: "/BringasInsurance", url: "https://www.facebook.com/Bringas-Insurance-111132600590435/?modal=admin_todo_tour" },
    { icon: LinkedinIcon, label: "LinkedIn", handle: "@bringas-insurance", url: "https://www.linkedin.com/in/bringas-insurance-54111bb1/" },
    { icon: TwitterIcon, label: "Twitter", handle: "@BringasIns", url: "https://twitter.com/BringasIns" },
    { icon: InstagramIcon, label: "Instagram", handle: "@bringas_insurance", url: "https://www.instagram.com/bringas_insurance_group/" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <title>Contact | Bringas Insurance Group</title>

      <Navbar />

      {/* --- HERO SECTION (Estilo Aquos con paleta Bringas) --- */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-[#015093]">
        <div className="absolute inset-0 z-0">
          <img src={contactHeroBg} alt="Seattle Background" className="w-full h-full object-cover" />
          {/* Overlay gradiente más oscuro para resaltar texto */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#015093]/95 via-[#015093]/90 to-[#0079c2]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[#001e2b]/40" />
        </div>

        {/* Círculo decorativo blur */}
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
                {t("contact.badge")}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-tighter leading-[0.9] mb-8 font-heading">
              {t("contact.title1")} <br />
              <span className="text-[#00a651] font-light italic text-4xl md:text-6xl">{t("contact.title2")}</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              {t("contact.intro")}
            </p>
          </motion.div>
        </div>

        {/* Divisor de onda (SVG Wave) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-10">
          <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120C0,120,321.39,56.44,321.39,56.44Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* --- INFO CARDS (Flotando sobre el Hero) --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 -translate-y-24 mb-12 relative z-20">
            {infoItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-[#0079c2]/10 shadow-xl shadow-[#0079c2]/5 flex flex-col items-center text-center group hover:scale-105 transition-all"
              >
                <div className="w-14 h-14 bg-[#00a651]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#0079c2] transition-colors">
                  <item.icon className="w-6 h-6 text-[#00a651] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#015093]/60 mb-1 font-heading">
                  {item.label}
                </p>
                <p className="text-[#015093] font-bold font-body">{item.val}</p>
              </motion.a>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Formulario Estilo Aquos */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] border border-[#0079c2]/10"
            >
              <h2 className="text-3xl font-bold text-[#015093] tracking-tight mb-2 font-heading">{t("contact.sendMessage")}</h2>
              <p className="text-[#015093]/60 mb-10 font-medium font-body">
                {t("contact.fillForm")}
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#015093]/60 ml-4">
                    {t("contact.fullName")}
                  </label>
                  <input type="text" placeholder={t("contact.placeholders.fullName")} className={inputClasses} />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#015093]/60 ml-4">
                      {t("contact.emailAddress")}
                    </label>
                    <input type="email" placeholder={t("contact.placeholders.email")} className={inputClasses} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#015093]/60 ml-4">
                      {t("contact.phoneNumber")}
                    </label>
                    <input type="tel" placeholder={t("contact.placeholders.phone")} className={inputClasses} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#015093]/60 ml-4">
                    {t("contact.insuranceInterest")}
                  </label>
                  <select className={inputClasses} defaultValue="">
                    <option value="" disabled>
                      {t("common.selectOption")}
                    </option>
                    <option value="auto">{t("services.auto")}</option>
                    <option value="home">{t("services.home")}</option>
                    <option value="business">{t("services.bop")}</option>
                    <option value="life">{t("services.life")}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#015093]/60 ml-4">
                    {t("contact.howCanWeHelp")}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t("contact.placeholders.message")}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button className="w-full py-5 bg-[#015093] text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-[#015093]/20 hover:bg-[#00a651] transition-all flex items-center justify-center gap-3 group">
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  {t("contact.sendInquiry")}
                </button>
              </form>
            </motion.div>

            {/* Sidebar Social (Estilo Aquos) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-[#015093] rounded-[3rem] p-10 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 font-heading tracking-tight">{t("contact.connectWithUs")}</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, i) => (
                      <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10"
                      >
                        <span className="w-5 h-5 text-[#00a651]"><social.icon /></span>
                        <span className="font-bold text-sm tracking-tight font-body">{social.label}</span>
                        <span className="ml-auto text-white/50 text-xs">{social.handle}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-[#00a651]/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
              </div>

              <div className="bg-[#f8fafb] border border-[#0079c2]/10 rounded-[2.5rem] p-8">
                <p className="text-sm text-[#015093] font-body leading-relaxed text-center">
                  🦉 <strong className="font-heading uppercase tracking-widest text-[10px]">{t("contact.hablamos")}</strong>
                  <br />
                  {t("contact.hablamosSub")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAPA & DIRECCIÓN --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            <div className="lg:col-span-2 bg-[#f8fafb] border border-[#0079c2]/10 rounded-[2.5rem] p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#00a651]" />
                <span className="text-[10px] font-black tracking-[0.4em] text-[#015093]/60 uppercase font-heading">
                  {t("contact.visitUs")}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-[#015093] tracking-tight mb-4 font-heading">
                Bringas Insurance Group
              </h3>
              <address className="not-italic text-[#015093] font-body text-lg leading-relaxed mb-6">
                9111 Evergreen Way<br />
                Everett, WA 98204<br />
                United States
              </address>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=9111+Evergreen+Way+Everett+WA+98204"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start px-6 py-3 bg-[#015093] text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-[#00a651] transition-colors"
              >
                {t("contact.getDirections")} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="lg:col-span-3 rounded-[2.5rem] overflow-hidden border border-[#0079c2]/10 shadow-xl shadow-[#0079c2]/5 min-h-[400px]">
              <iframe
                title="Bringas Insurance Group - 9111 Evergreen Way, Everett, WA 98204"
                src="https://www.google.com/maps?q=9111+Evergreen+Way+Everett+WA+98204&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN CTA FINAL --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#015093] to-[#003f5e] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a651]/10 blur-[80px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0079c2]/10 blur-[60px] rounded-full" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-8 leading-[0.95] font-heading">
                {t("contact.cta.titleA")} <br /> <span className="text-[#00a651]">{t("contact.cta.titleB")}</span>
              </h2>
              <p className="text-white text-lg font-body font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                {t("contact.cta.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  to="/quote"
                  className="px-12 py-6 bg-[#00a651] text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-[#00a651]/30 hover:bg-white hover:text-[#015093] transition-all flex items-center justify-center gap-2 group"
                >
                  {t("contact.cta.button")}
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

export default Contact;
