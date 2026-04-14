import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, ShieldCheck, Briefcase, Info, ArrowRight } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md py-2 shadow-lg" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 transition-transform hover:scale-105">
          <img src={logo} alt="Bringas Insurance Group" className="h-10 lg:h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link
            to="/"
            className={`px-4 py-2 text-sm font-bold transition-all ${
              isActive("/") ? "text-[#0079c2]" : "text-slate-600 hover:text-[#0079c2]"
            }`}
          >
            Home
          </Link>

          {/* Mega Menú Personal */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("personal")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 text-sm font-bold transition-all ${
                activeDropdown === "personal" ? "text-[#0079c2]" : "text-slate-600 hover:text-[#0079c2]"
              }`}
            >
              Personal{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${activeDropdown === "personal" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {activeDropdown === "personal" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute top-full -left-20 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-50 overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    <div className="col-span-2 mb-4 flex items-center gap-2 text-[#00a651] font-bold text-xs uppercase tracking-widest">
                      <ShieldCheck className="w-4 h-4" /> Protection for your family
                    </div>
                    {personalLinks.map((l) => (
                      <Link
                        key={l.href}
                        to={l.href}
                        className="group flex items-center justify-between px-3 py-2 text-sm text-slate-600 hover:text-[#0079c2] hover:bg-blue-50 rounded-xl transition-all"
                      >
                        {l.label}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mega Menú Business */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("business")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 text-sm font-bold transition-all ${
                activeDropdown === "business" ? "text-[#0079c2]" : "text-slate-600 hover:text-[#0079c2]"
              }`}
            >
              Business{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${activeDropdown === "business" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {activeDropdown === "business" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute top-full -left-20 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-50"
                >
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    <div className="col-span-2 mb-4 flex items-center gap-2 text-[#00a651] font-bold text-xs uppercase tracking-widest">
                      <Briefcase className="w-4 h-4" /> Commercial Solutions
                    </div>
                    {businessLinks.map((l) => (
                      <Link
                        key={l.href}
                        to={l.href}
                        className="group flex items-center justify-between px-3 py-2 text-sm text-slate-600 hover:text-[#0079c2] hover:bg-blue-50 rounded-xl transition-all"
                      >
                        {l.label}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/about"
            className={`px-4 py-2 text-sm font-bold transition-all ${
              isActive("/about") ? "text-[#0079c2]" : "text-slate-600 hover:text-[#0079c2]"
            }`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`px-4 py-2 text-sm font-bold transition-all ${
              isActive("/contact") ? "text-[#0079c2]" : "text-slate-600 hover:text-[#0079c2]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-4">
          <a href="tel:+14254057111" className="hidden sm:flex flex-col items-end group">
            <span className="text-[10px] uppercase text-slate-400 font-bold group-hover:text-[#00a651] transition-colors">
              Call an Agent
            </span>
            <span className="flex items-center gap-1 text-sm font-bold text-[#0079c2]">
              <Phone className="w-3.5 h-3.5 text-[#00a651]" /> (425) 405-7111
            </span>
          </a>

          <Link
            to="/quote"
            className="hidden lg:inline-flex bg-[#00a651] hover:bg-[#0079c2] text-white font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
          >
            Get a Quote
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-50 text-[#0079c2] hover:bg-blue-100 transition-all"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-20 bg-white z-[60] lg:hidden overflow-y-auto"
          >
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <p className="text-[#00a651] font-bold text-xs uppercase tracking-widest px-2">Navigation</p>
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="block p-3 text-lg font-bold text-slate-800 bg-slate-50 rounded-xl"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="block p-3 text-lg font-bold text-slate-800 bg-slate-50 rounded-xl"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block p-3 text-lg font-bold text-slate-800 bg-slate-50 rounded-xl"
                >
                  Contact
                </Link>
              </div>

              <div className="space-y-2">
                <p className="text-[#00a651] font-bold text-xs uppercase tracking-widest px-2">Personal Insurance</p>
                <div className="grid grid-cols-1 gap-1">
                  {personalLinks.map((l) => (
                    <Link
                      key={l.href}
                      to={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="p-3 text-sm font-medium text-slate-600 border-b border-slate-50"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/quote"
                onClick={() => setMobileOpen(false)}
                className="block w-full py-4 bg-[#0079c2] text-white text-center font-bold rounded-2xl shadow-lg"
              >
                Get a Quote Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
