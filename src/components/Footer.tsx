import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/bringas-insurance-logo.png";

const personalLinks = [
  { label: "Auto Insurance", href: "/auto-insurance" },
  { label: "Home Insurance", href: "/home-insurance" },
  { label: "Life Insurance", href: "/life-insurance" },
  { label: "Flood Insurance", href: "/flood-insurance" },
  { label: "Boat & Watercraft", href: "/boat-insurance" },
  { label: "Motorcycle", href: "/motorcycle-insurance" },
  { label: "RV Insurance", href: "/rv-insurance" },
  { label: "Renters Insurance", href: "/renters-insurance" },
  { label: "Landlord Insurance", href: "/landlord-insurance" },
  { label: "Mobile Home", href: "/mobile-home-insurance" },
  { label: "Personal Umbrella", href: "/personal-umbrella" },
];

const businessLinks = [
  { label: "General Liability", href: "/general-liability" },
  { label: "Business Owners (BOP)", href: "/bop-insurance" },
  { label: "Commercial Auto", href: "/commercial-auto" },
  { label: "Commercial Property", href: "/commercial-property" },
  { label: "Contractors", href: "/contractors-insurance" },
  { label: "Restaurant", href: "/restaurant-insurance" },
  { label: "Building Owners", href: "/building-owners" },
  { label: "Bonds & Surety", href: "/bonds-surety" },
];

const Footer = () => {
  return (
    <footer className="bg-[#062c1a] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Decoración de fondo sutil - Ajustada a un verde más brillante para contraste */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a651]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Columna 1: Brand & Contact */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img
                src={logo}
                alt="Bringas Insurance Group"
                className="h-20 w-auto brightness-0 invert object-contain"
              />
            </Link>

            <p className="text-emerald-100/60 font-body leading-relaxed text-base max-w-sm">
              We Bring You Insurance Solutions. Your trusted independent insurance agency serving families and
              businesses with authenticity and warmth.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+14254057111"
                className="group flex items-center gap-4 text-emerald-50/80 hover:text-[#00ffa2] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#00ffa2]/20 transition-all">
                  <Phone className="w-5 h-5 text-[#00ffa2]" />
                </div>
                <span className="font-['Josefin_Sans'] font-semibold">(425) 405-7111</span>
              </a>

              <a
                href="mailto:info@bringasinsurance.com"
                className="group flex items-center gap-4 text-emerald-50/80 hover:text-[#00ffa2] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#00ffa2]/20 transition-all">
                  <Mail className="w-5 h-5 text-[#00ffa2]" />
                </div>
                <span className="text-sm">info@bringasinsurance.com</span>
              </a>

              <div className="flex items-center gap-4 text-emerald-50/80">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#00ffa2]" />
                </div>
                <span className="text-sm">Serving Washington State</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Personal */}
          <div className="lg:col-span-3">
            <h4 className="font-['Josefin_Sans'] font-bold text-lg mb-8 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00ffa2] rounded-full" />
              Personal Insurance
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {personalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="group flex items-center justify-between text-emerald-100/50 hover:text-white transition-all text-sm"
                  >
                    {l.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#00ffa2]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Business */}
          <div className="lg:col-span-3">
            <h4 className="font-['Josefin_Sans'] font-bold text-lg mb-8 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00ffa2] rounded-full" />
              Business Insurance
            </h4>
            <ul className="space-y-3">
              {businessLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="group flex items-center justify-between text-emerald-100/50 hover:text-white transition-all text-sm"
                  >
                    {l.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#00ffa2]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-['Josefin_Sans'] font-bold text-lg mb-8 text-white">Company</h4>
            <ul className="space-y-4 mb-10">
              <li>
                <Link to="/about" className="text-emerald-100/50 hover:text-[#00ffa2] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-emerald-100/50 hover:text-[#00ffa2] transition-colors text-sm">
                  Get a Quote
                </Link>
              </li>
            </ul>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-[#00ffa2] font-['Josefin_Sans'] font-bold text-xs uppercase tracking-widest mb-2">
                Hablamos
              </p>
              <p className="text-white font-bold text-sm">Español e Inglés</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-[10px] text-emerald-100/40 leading-tight">Licensed in Washington State</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[11px] text-emerald-100/30 font-body">
              © {new Date().getFullYear()} Bringas Insurance Group. All rights reserved.
            </p>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <p className="text-[11px] text-emerald-100/30 font-body italic">We Bring You Insurance Solutions 🦉</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-emerald-100/40 hover:bg-[#00ffa2] hover:text-[#062c1a] transition-all"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-emerald-100/40 hover:bg-[#00ffa2] hover:text-[#062c1a] transition-all"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-emerald-100/40 hover:bg-[#00ffa2] hover:text-[#062c1a] transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
