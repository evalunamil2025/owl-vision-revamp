import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/bringas-insurance-logo.png";

const Footer = () => {
  const { t } = useTranslation();

  const personalLinks = [
    { label: t("services.auto"), href: "/auto-insurance" },
    { label: t("services.home"), href: "/home-insurance" },
    { label: t("services.life"), href: "/life-insurance" },
    { label: t("services.flood"), href: "/flood-insurance" },
    { label: t("services.boat"), href: "/boat-insurance" },
    { label: t("services.motorcycle"), href: "/motorcycle-insurance" },
    { label: t("services.rv"), href: "/rv-insurance" },
    { label: t("services.renters"), href: "/renters-insurance" },
    { label: t("services.landlord"), href: "/landlord-insurance" },
    { label: t("services.mobileHome"), href: "/mobile-home-insurance" },
    { label: t("services.personalUmbrella"), href: "/personal-umbrella" },
  ];

  const businessLinks = [
    { label: t("services.generalLiability"), href: "/general-liability" },
    { label: t("services.bop"), href: "/bop-insurance" },
    { label: t("services.commercialAuto"), href: "/commercial-auto" },
    { label: t("services.commercialProperty"), href: "/commercial-property" },
    { label: t("services.contractorsShort"), href: "/contractors-insurance" },
    { label: t("services.restaurantShort"), href: "/restaurant-insurance" },
    { label: t("services.buildingOwners"), href: "/building-owners" },
    { label: t("services.bondsSurety"), href: "/bonds-surety" },
  ];

  return (
    <footer className="bg-[#0079c2] text-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a651]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 text-center md:text-left">
          {/* Brand & Contact */}
          <div className="lg:col-span-4 space-y-8 flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img
                src={logo}
                alt="Bringas Insurance Group"
                className="h-20 w-auto brightness-0 invert object-contain"
              />
            </Link>

            <p className="text-white/80 font-body leading-relaxed text-base max-w-sm">{t("footer.tagline")}</p>

            <div className="space-y-4">
              <a href="tel:+14254057111" className="group flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#00a651] transition-all duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="font-['Josefin_Sans'] font-semibold">{t("common.phone")}</span>
              </a>

              <a href="mailto:info@bringasinsurance.com" className="group flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#00a651] transition-all duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">info@bringasinsurance.com</span>
              </a>

              <div className="flex items-center gap-4 text-white/90">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">{t("footer.address")}</span>
              </div>
            </div>
          </div>

          {/* Personal */}
          <div className="lg:col-span-3">
            <h4 className="font-['Josefin_Sans'] font-bold text-lg mb-8 text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-[#00a651] rounded-full" />
              {t("footer.personalTitle")}
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {personalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="group flex items-center justify-center md:justify-between text-white/70 hover:text-white transition-all text-sm"
                  >
                    {l.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#00a651]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div className="lg:col-span-3">
            <h4 className="font-['Josefin_Sans'] font-bold text-lg mb-8 text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-[#00a651] rounded-full" />
              {t("footer.businessTitle")}
            </h4>
            <ul className="space-y-3">
              {businessLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="group flex items-center justify-center md:justify-between text-white/70 hover:text-white transition-all text-sm"
                  >
                    {l.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#00a651]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <h4 className="font-['Josefin_Sans'] font-bold text-lg mb-8 text-white">{t("footer.company")}</h4>
            <ul className="space-y-4 mb-10">
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-white transition-colors text-sm underline-offset-4 hover:underline"
                >
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  to="/quote"
                  className="text-white/70 hover:text-white transition-colors text-sm underline-offset-4 hover:underline"
                >
                  {t("footer.getQuote")}
                </Link>
              </li>
            </ul>

            <div className="p-5 rounded-2xl bg-white text-[#0079c2] shadow-xl">
              <p className="text-[#00a651] font-['Josefin_Sans'] font-bold text-xs uppercase tracking-widest mb-1">
                {t("footer.weSpeak")}
              </p>
              <p className="font-bold text-lg leading-tight">{t("footer.spanishEnglish")}</p>
              <div className="mt-3 pt-3 border-t border-[#0079c2]/10">
                <p className="text-[10px] text-[#0079c2]/60 font-semibold uppercase">{t("footer.licensed")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-white/60">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left">
            <p className="text-[11px] font-body">{t("footer.rights", { year: new Date().getFullYear() })}</p>
            <div className="h-4 w-px bg-white/20 hidden md:block" />
            <p className="text-[11px] font-body italic">{t("footer.motto")}</p>
          </div>

          <div className="flex items-center gap-4">
            {[
              {
                icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                label: "Facebook",
                url: "https://www.facebook.com/Bringas-Insurance-111132600590435/?modal=admin_todo_tour",
              },
              {
                icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/bringas-insurance-54111bb1/",
              },
              {
                icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                label: "Twitter",
                url: "https://twitter.com/BringasIns",
              },
              {
                icon: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.2 8.8 2.2 12 2.2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.4-8.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z",
                label: "Instagram",
                url: "https://www.instagram.com/bringas_insurance_group/",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00a651] hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
