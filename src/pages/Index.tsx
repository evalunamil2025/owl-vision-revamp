import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Users, Handshake, HeartHandshake, Building2, Car, Home, Heart, Briefcase, Anchor, Bike, Truck, Umbrella, Flame, Building, FileCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mascot from "@/assets/owlie-mascot.png";

const personalServices = [
  { icon: Car, label: "Auto Insurance", href: "/auto-insurance", desc: "Protect your vehicle and your peace of mind." },
  { icon: Home, label: "Home Insurance", href: "/home-insurance", desc: "Safeguard your biggest investment." },
  { icon: Heart, label: "Life Insurance", href: "/life-insurance", desc: "Protect those who matter most." },
  { icon: Flame, label: "Flood Insurance", href: "/flood-insurance", desc: "Don't let water damage catch you off guard." },
  { icon: Anchor, label: "Boat & Watercraft", href: "/boat-insurance", desc: "Enjoy the water worry-free." },
  { icon: Bike, label: "Motorcycle", href: "/motorcycle-insurance", desc: "Ride with the right coverage." },
  { icon: Truck, label: "RV Insurance", href: "/rv-insurance", desc: "Adventures protected." },
  { icon: Home, label: "Renters Insurance", href: "/renters-insurance", desc: "Your belongings deserve protection." },
  { icon: Building, label: "Landlord Insurance", href: "/landlord-insurance", desc: "Protect your rental investment." },
  { icon: Home, label: "Mobile Home", href: "/mobile-home-insurance", desc: "Coverage designed for your home type." },
  { icon: Umbrella, label: "Personal Umbrella", href: "/personal-umbrella", desc: "Extra protection when you need it." },
];

const businessServices = [
  { icon: Shield, label: "General Liability", href: "/general-liability", desc: "Essential protection for any business." },
  { icon: Briefcase, label: "Business Owners (BOP)", href: "/bop-insurance", desc: "All-in-one coverage for your business." },
  { icon: Truck, label: "Commercial Auto", href: "/commercial-auto", desc: "Cover vehicles used for work." },
  { icon: Building2, label: "Commercial Property", href: "/commercial-property", desc: "Protect your business space." },
  { icon: Handshake, label: "Contractors Insurance", href: "/contractors-insurance", desc: "Built for the construction industry." },
  { icon: Building, label: "Restaurant Insurance", href: "/restaurant-insurance", desc: "Specialized restaurant coverage." },
  { icon: Building2, label: "Building Owners", href: "/building-owners", desc: "Protect your real estate investment." },
  { icon: FileCheck, label: "Bonds & Surety", href: "/bonds-surety", desc: "Guarantee your commitments." },
];

const whyUs = [
  { icon: Handshake, title: "Freedom of Choice", desc: "As an independent agency, we compare multiple carriers to find your best option — like a buffet of insurance." },
  { icon: HeartHandshake, title: "Honest Advice", desc: "We give objective recommendations because we work for you, not for a single company." },
  { icon: Users, title: "Local Experts", desc: "We know your community, the adjusters, and the local landscape. We're the neighbor who understands your policy." },
  { icon: Shield, title: "Ongoing Support", desc: "Life changes, and so should your coverage. We review and adjust your policies as your needs evolve." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative gradient-navy text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 owl-pattern opacity-20" />
        <div className="container mx-auto px-4 py-20 sm:py-28 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-sm font-medium text-primary-foreground/80 mb-6">
                🦉 Independent Insurance Agency
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6 text-white">
                Insurance that <span className="text-accent-light">protects</span> what you love
              </h1>
              <p className="text-lg text-primary-foreground/75 leading-relaxed mb-8 max-w-lg">
                Family • Home • Auto • Business — We compare multiple carriers to bring you the coverage that truly fits your life. No boring paperwork, just real solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/quote" className="btn-primary">
                  Get Your Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+14254057111" className="btn-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <Phone className="w-4 h-4" /> (425) 405-7111
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-center">
              <img src={mascot} alt="Owlie - Bringas Insurance mascot" className="w-72 xl:w-80 drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — alternating bg */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-3">Why Choose Bringas?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We take your peace of mind seriously — but we don't believe the process should be boring.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="elevated-card p-6 text-center group">
                <div className="icon-circle mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Insurance Services — white bg */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-3">Personal Insurance</h2>
            <p className="text-muted-foreground max-w-xl">Coverage designed to protect you, your family, and everything you've built.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {personalServices.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={s.href} className="elevated-card p-5 flex items-start gap-4 group block">
                  <div className="icon-circle-sm group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm mb-1">{s.label}</h3>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Insurance Services — alt bg */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-3">Business Insurance</h2>
            <p className="text-muted-foreground max-w-xl">Your business is your project — we make sure it's properly protected.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {businessServices.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={s.href} className="elevated-card p-5 text-center group block">
                  <div className="icon-circle mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-heading font-bold text-sm mb-1">{s.label}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission — white bg */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-heading font-extrabold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We take your peace of mind very seriously, but we don't believe the process of getting insured should be boring. Our goal is for you to feel safe and smile at the same time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By paying a relatively small premium, you transfer risks that could ruin your finances. We turn that process into a friendly and personalized experience, because insurance can also be approachable and human.
              </p>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl -rotate-3" style={{ background: 'hsl(152 99% 28% / 0.08)' }} />
                <img src={mascot} alt="Owlie mascot" className="relative w-48 md:w-56" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hispanic Community — gradient green */}
      <section className="gradient-green text-secondary-foreground section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-4 text-white">Nuestra Comunidad Hispana</h2>
          <p className="text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto mb-6">
            We're bilingual and understand that serving the Hispanic community requires authenticity and warmth. We communicate with respect and joy in both Spanish and English, so you feel at home.
          </p>
          <p className="text-sm text-secondary-foreground/60 mb-8">
            Latinos represent nearly one in five Americans, with purchasing power exceeding $2.8 trillion by 2026.
          </p>
          <Link to="/quote" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card font-heading font-semibold transition-all duration-300 hover:shadow-brand-lg hover:-translate-y-0.5 text-primary">
            Let's Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA — navy bg */}
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-primary-foreground/75 max-w-xl mx-auto mb-8">
            The first step to protecting what you love is simpler than you think. Call us or send a message — we promise to explain everything without jargon and, if possible, with a smile.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="btn-primary">
              Get Your Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+14254057111" className="btn-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Phone className="w-4 h-4" /> (425) 405-7111
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
