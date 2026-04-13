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
    <footer className="bg-[#0a192f] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a651]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Columna 1: Brand & Contact (Ocupa 4 de 12) */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img
                src={logo}
                alt="Bringas Insurance Group"
                className="h-20 w-auto brightness-0 invert object-contain"
              />
            </Link>

            <p className="text-slate-400 font-body leading-relaxed text-base max-w-sm">
              We Bring You Insurance Solutions. Your trusted independent insurance agency serving families and
              businesses with authenticity and warmth.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+14254057111"
                className="group flex items-center gap-4 text-slate-300 hover:text-[#00a651] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#00a651]/20 transition-all">
                  <Phone className="w-5 h-5 text-[#00a651]" />
                </div>
                <span className="font-['Josefin_Sans'] font-semibold">(425) 405-7111</span>
              </a>

              <a
                href="mailto:info@bringasinsurance.com"
                className="group flex items-center gap-4 text-slate-300 hover:text-[#00a651] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#00a651]/20 transition-all">
                  <Mail className="w-5 h-5 text-[#00a651]" />
                </div>
                <span className="text-sm">info@bringasinsurance.com</span>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#00a651]" />
                </div>
                <span className="text-sm">Serving Washington State</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Personal (Ocupa 3 de 12) */}
          <div className="lg:col-span-3">
            <h4 className="font-['Josefin_Sans'] font-bold text-lg mb-8 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00a651] rounded-full" />
              Personal Insurance
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {personalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="group flex items-center justify-between text-slate-400 hover:text-white transition-all text-sm"
                  >
                    {l.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Business (Ocupa 3 de 12) */}
          <div className="lg:col-span-3">
            <h4 className="font-['Josefin_Sans'] font-bold text-lg mb-8 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00a651] rounded-full" />
              Business Insurance
            </h4>
            <ul className="space-y-3">
              {businessLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="group flex items-center justify-between text-slate-400 hover:text-white transition-all text-sm"
                  >
                    {l.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Quick Links (Ocupa 2 de 12) */}
          <div className="lg:col-span-2">
            <h4 className="font-['Josefin_Sans'] font-bold text-lg mb-8 text-white">Company</h4>
            <ul className="space-y-4 mb-10">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-[#00a651] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-slate-400 hover:text-[#00a651] transition-colors text-sm">
                  Get a Quote
                </Link>
              </li>
            </ul>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-[#00a651] font-['Josefin_Sans'] font-bold text-xs uppercase tracking-widest mb-2">
                Hablamos
              </p>
              <p className="text-white font-bold text-sm">Español e Inglés</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-[10px] text-slate-500 leading-tight">Licensed in Washington State</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[11px] text-slate-500 font-body">
              © {new Date().getFullYear()} Bringas Insurance Group. All rights reserved.
            </p>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <p className="text-[11px] text-slate-500 font-body italic">We Bring You Insurance Solutions 🦉</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#00a651] hover:text-white transition-all"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#00a651] hover:text-white transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#00a651] hover:text-white transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
