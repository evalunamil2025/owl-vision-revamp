import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  { label: "Contractors Insurance", href: "/contractors-insurance" },
  { label: "Restaurant Insurance", href: "/restaurant-insurance" },
  { label: "Building Owners", href: "/building-owners" },
  { label: "Bonds & Surety", href: "/bonds-surety" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-brand">
      <div className="container mx-auto flex items-center justify-between h-20 lg:h-24 px-4">
        {/* Logo — large and imposing */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Bringas Insurance Group" className="h-10 lg:h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" className={`px-4 py-2 rounded-lg text-sm font-heading font-bold transition-colors duration-300 ${isActive("/") ? "text-secondary" : "text-primary hover:text-secondary"}`}>
            Home
          </Link>

          {/* Personal Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("personal")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-heading font-bold transition-colors duration-300 ${activeDropdown === "personal" ? "text-secondary" : "text-primary hover:text-secondary"}`}>
              Personal <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {activeDropdown === "personal" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-brand-xl border border-border/50 py-2 z-50">
                  {personalLinks.map(l => (
                    <Link key={l.href} to={l.href} className="block px-4 py-2.5 text-sm font-body text-foreground hover:text-secondary hover:bg-muted transition-colors duration-200">{l.label}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Business Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("business")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-heading font-bold transition-colors duration-300 ${activeDropdown === "business" ? "text-secondary" : "text-primary hover:text-secondary"}`}>
              Business <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {activeDropdown === "business" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-brand-xl border border-border/50 py-2 z-50">
                  {businessLinks.map(l => (
                    <Link key={l.href} to={l.href} className="block px-4 py-2.5 text-sm font-body text-foreground hover:text-secondary hover:bg-muted transition-colors duration-200">{l.label}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about" className={`px-4 py-2 rounded-lg text-sm font-heading font-bold transition-colors duration-300 ${isActive("/about") ? "text-secondary" : "text-primary hover:text-secondary"}`}>
            About
          </Link>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a href="tel:+14254057111" className="hidden sm:flex items-center gap-2 text-sm font-heading font-bold text-primary hover:text-secondary transition-colors duration-300">
            <Phone className="w-4 h-4" strokeWidth={2} /> (425) 405-7111
          </a>
          <Link to="/quote" className="hidden lg:inline-flex btn-primary text-sm px-5 py-2.5">
            Get a Quote
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-primary">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden bg-card border-t border-border/50">
            <div className="container mx-auto px-4 py-4 space-y-1">
              <Link to="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-sm font-heading font-bold text-primary hover:bg-muted">Home</Link>
              <p className="px-4 pt-3 pb-1 text-xs font-heading font-bold text-primary uppercase tracking-wider">Personal Insurance</p>
              {personalLinks.map(l => (
                <Link key={l.href} to={l.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm text-foreground hover:text-secondary hover:bg-muted rounded-lg">{l.label}</Link>
              ))}
              <p className="px-4 pt-3 pb-1 text-xs font-heading font-bold text-primary uppercase tracking-wider">Business Insurance</p>
              {businessLinks.map(l => (
                <Link key={l.href} to={l.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm text-foreground hover:text-secondary hover:bg-muted rounded-lg">{l.label}</Link>
              ))}
              <Link to="/about" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-sm font-heading font-bold text-primary hover:bg-muted">About</Link>
              <Link to="/quote" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl btn-primary text-sm text-center mt-2">Get a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
