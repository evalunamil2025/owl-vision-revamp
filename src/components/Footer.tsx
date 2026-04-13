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
    <footer className="bg-[#0079c2] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Decoración sutil usando solo el verde de la marca con baja opacidad */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a651]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

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

            <p className="text-white/80 font-body leading-relaxed text-base max-w-sm">
              We Bring You Insurance Solutions. Your trusted independent insurance agency serving families and
              businesses with authenticity and warmth.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+14254057111"
                className="group flex items-center gap-4 text-white hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#00a651] transition-all duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="font-['Josefin_Sans'] font-semibold">(425) 405-7111</span>
              </a>

              <a
                href="mailto:info@bringasinsurance.com"
                className="group flex items-center gap-4 text-white hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#00a651] transition-all duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">info@bringasinsurance.com</span>
              </a>

              <div className="flex items-center gap-4 text-white/90">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">Serving Washington State</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Personal */}
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
                    className="group flex items-center justify-between text-white/70 hover:text-white transition-all text-sm"
                  >
                    {l.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#00a651]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Business */}
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
                    className="group flex items-center justify-between text-white/70 hover:text-white transition-all text-sm"
                  >
                    {l.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#00a651]" />
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
                <Link
                  to="/about"
                  className="text-white/70 hover:text-white transition-colors text-sm underline-offset-4 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/quote"
                  className="text-white/70 hover:text-white transition-colors text-sm underline-offset-4 hover:underline"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>

            <div className="p-5 rounded-2xl bg-white text-[#0079c2] shadow-xl">
              <p className="text-[#00a651] font-['Josefin_Sans'] font-bold text-xs uppercase tracking-widest mb-1">
                Hablamos
              </p>
              <p className="font-bold text-lg leading-tight">Español e Inglés</p>
              <div className="mt-3 pt-3 border-t border-[#0079c2]/10">
                <p className="text-[10px] text-[#0079c2]/60 font-semibold uppercase">Licensed in WA State</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-white/60">
          <div className="flex items-center gap-6">
            <p className="text-[11px] font-body">
              © {new Date().getFullYear()} Bringas Insurance Group. All rights reserved.
            </p>
            <div className="h-4 w-px bg-white/20 hidden md:block" />
            <p className="text-[11px] font-body italic">We Bring You Insurance Solutions 🦉</p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", label: "Facebook" },
              {
                icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
                label: "LinkedIn",
              },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
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
