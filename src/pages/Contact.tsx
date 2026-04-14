import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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

const FacebookIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const TwitterIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg>;

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/Bringas-Insurance-111132600590435/?modal=admin_todo_tour", color: "hover:bg-[#1877F2]" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/bringas-insurance-54111bb1/", color: "hover:bg-[#0A66C2]" },
  { icon: TwitterIcon, label: "Twitter", href: "https://twitter.com/BringasIns", color: "hover:bg-[#1DA1F2]" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/bringas_insurance_group/", color: "hover:bg-[#E4405F]" },
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
                    <s.icon />
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
