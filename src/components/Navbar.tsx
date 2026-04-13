import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/bringas-logo.png";

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
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Bringas Insurance Group" className="h-12 lg:h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive("/") ? "text-primary bg-accent" : "text-foreground/80 hover:text-primary hover:bg-accent/50"}`}>
            Home
          </Link>

          {/* Personal Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("personal")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeDropdown === "personal" ? "text-primary bg-accent" : "text-foreground/80 hover:text-primary"}`}>
              Personal <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {activeDropdown === "personal" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-xl border border-border/50 py-2 z-50">
                  {personalLinks.map(l => (
                    <Link key={l.href} to={l.href} className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors">{l.label}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Business Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("business")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeDropdown === "business" ? "text-primary bg-accent" : "text-foreground/80 hover:text-primary"}`}>
              Business <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {activeDropdown === "business" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-xl border border-border/50 py-2 z-50">
                  {businessLinks.map(l => (
                    <Link key={l.href} to={l.href} className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors">{l.label}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive("/about") ? "text-primary bg-accent" : "text-foreground/80 hover:text-primary hover:bg-accent/50"}`}>
            About
          </Link>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a href="tel:+14254057111" className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="w-4 h-4" /> (425) 405-7111
          </a>
          <Link to="/quote" className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground text-sm font-heading font-semibold transition-all hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5">
            Get a Quote
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden bg-card border-t border-border/50">
            <div className="container mx-auto px-4 py-4 space-y-1">
              <Link to="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent/50">Home</Link>
              <p className="px-4 pt-3 pb-1 text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider">Personal Insurance</p>
              {personalLinks.map(l => (
                <Link key={l.href} to={l.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-accent/50 rounded-lg">{l.label}</Link>
              ))}
              <p className="px-4 pt-3 pb-1 text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider">Business Insurance</p>
              {businessLinks.map(l => (
                <Link key={l.href} to={l.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-accent/50 rounded-lg">{l.label}</Link>
              ))}
              <Link to="/about" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent/50">About</Link>
              <Link to="/quote" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl bg-secondary text-secondary-foreground text-sm font-semibold text-center mt-2">Get a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
