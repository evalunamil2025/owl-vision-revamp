import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
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
    <footer className="gradient-blue text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Bringas Insurance Group" className="h-16 w-auto brightness-0 invert" />
            <p className="text-sm text-primary-foreground/70 font-body leading-relaxed">
              We Bring You Insurance Solutions. Your trusted independent insurance agency serving families and businesses.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Phone className="w-4 h-4 text-accent-light flex-shrink-0" strokeWidth={2} />
              <a href="tel:+14254057111" className="hover:text-accent-light transition-colors duration-200">(425) 405-7111</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Mail className="w-4 h-4 text-accent-light flex-shrink-0" strokeWidth={2} />
              <a href="mailto:info@bringasinsurance.com" className="hover:text-accent-light transition-colors duration-200">info@bringasinsurance.com</a>
            </div>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
              <MapPin className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" strokeWidth={2} />
              <span>Serving Washington State</span>
            </div>
          </div>

          {/* Personal */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-accent-light">Personal Insurance</h4>
            <ul className="space-y-2">
              {personalLinks.map(l => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-accent-light">Business Insurance</h4>
            <ul className="space-y-2">
              {businessLinks.map(l => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-accent-light">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">About Us</Link></li>
              <li><Link to="/quote" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">Get a Quote</Link></li>
            </ul>
            <div className="mt-8">
              <p className="text-xs text-primary-foreground/50 font-body">Hablamos Español</p>
              <p className="text-xs text-primary-foreground/50 font-body mt-1">Licensed in Washington State</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50 font-body">© {new Date().getFullYear()} Bringas Insurance Group by Raul's Insurance. All rights reserved.</p>
          <p className="text-xs text-primary-foreground/50 font-body">We Bring You Insurance Solutions 🦉</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
