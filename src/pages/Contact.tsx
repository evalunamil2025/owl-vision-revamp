import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] },
  }),
};

const infoCards = [
  {
    icon: Mail,
    title: "Email",
    value: "raul@bringasinsurance.com",
    href: "mailto:raul@bringasinsurance.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(425) 405-7111",
    href: "tel:+14254057111",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "9111 Evergreen Way, Everett WA 98204",
    href: "https://maps.google.com/?q=9111+Evergreen+Way+Everett+WA+98204",
  },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Bringas-Insurance-111132600590435/?modal=admin_todo_tour", color: "hover:bg-[#1877F2]" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/bringas-insurance-54111bb1/", color: "hover:bg-[#0A66C2]" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/BringasIns", color: "hover:bg-[#1DA1F2]" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/bringas_insurance_group/", color: "hover:bg-[#E4405F]" },
];

const Contact = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-[#015093] via-[#0079c2] to-[#015093] text-white section-padding">
      <div className="absolute inset-0 owl-pattern opacity-10" />
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold"
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 text-lg text-white/80 font-body max-w-xl mx-auto"
        >
          We're here to help you protect what matters most.
        </motion.p>
      </div>
    </section>

    {/* Info Cards */}
    <section className="section-padding -mt-12 relative z-20">
      <div className="container mx-auto max-w-5xl">
        <div className="grid sm:grid-cols-3 gap-6">
          {infoCards.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              target={card.icon === MapPin ? "_blank" : undefined}
              rel={card.icon === MapPin ? "noopener noreferrer" : undefined}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="elevated-card p-6 text-center group hover:shadow-brand-lg transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#00a651]/10 flex items-center justify-center group-hover:bg-[#00a651]/20 transition-colors">
                <card.icon className="w-7 h-7 text-[#00a651]" strokeWidth={1.8} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{card.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{card.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>

    {/* Form + Social */}
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-1">Send us an Email</h2>
            <p className="text-muted-foreground font-body mb-6">Our agents will contact you shortly.</p>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-heading font-semibold mb-1.5">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-heading font-semibold mb-1.5">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="(425) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold mb-1.5">Location</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="City, State"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-heading font-semibold mb-1.5">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-heading font-semibold mb-1.5">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us about your insurance needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#00a651] hover:bg-[#0079c2] text-white font-heading font-bold text-base py-3.5 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Connect */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="elevated-card p-6 lg:p-8">
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">Connect With Us</h3>
              <p className="text-sm text-muted-foreground font-body mb-6">Follow us on social media for tips and updates.</p>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex flex-col items-center gap-2 p-5 rounded-2xl bg-slate-50 text-slate-600 hover:text-white ${s.color} transition-all duration-300 shadow-sm hover:shadow-lg`}
                  >
                    <s.icon className="w-7 h-7" strokeWidth={1.8} />
                    <span className="text-xs font-heading font-bold">{s.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="elevated-card p-6 mt-6 border-l-4 border-l-[#00a651]">
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                🦉 <strong className="text-foreground font-heading">Hablamos Español.</strong> We're happy to assist you in Spanish — just let us know!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-to-r from-[#015093] via-[#0079c2] to-[#015093] text-white section-padding relative overflow-hidden">
      <div className="absolute inset-0 owl-pattern opacity-10" />
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/70 text-sm font-heading font-bold uppercase tracking-widest mb-3">
            Insurance for your Car · Home · Business · Life
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Call Us Today for a Quote</h2>
          <a
            href="tel:+14254057111"
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-2xl sm:text-3xl font-heading font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <Phone className="w-8 h-8 text-[#00a651]" /> (425) 405-7111
          </a>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Contact;
