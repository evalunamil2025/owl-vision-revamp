import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Quote = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="gradient-navy text-primary-foreground section-padding relative overflow-hidden">
      <div className="absolute inset-0 owl-pattern opacity-20" />
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-lg text-primary-foreground/80">The first step to protecting what you love is simpler than you think.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Contact Us</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-foreground mb-1.5">First Name</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your first name" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-1.5">Last Name</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your last name" /></div>
              </div>
              <div><label className="block text-sm font-medium text-foreground mb-1.5">Email</label><input type="email" className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" /></div>
              <div><label className="block text-sm font-medium text-foreground mb-1.5">Phone</label><input type="tel" className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="(425) 000-0000" /></div>
              <div><label className="block text-sm font-medium text-foreground mb-1.5">Insurance Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select an option</option>
                  <option>Auto Insurance</option><option>Home Insurance</option><option>Life Insurance</option>
                  <option>Flood Insurance</option><option>Boat & Watercraft</option><option>Motorcycle</option>
                  <option>RV Insurance</option><option>Renters Insurance</option><option>Landlord Insurance</option>
                  <option>Mobile Home</option><option>Personal Umbrella</option><option>General Liability</option>
                  <option>Business Owners (BOP)</option><option>Commercial Auto</option><option>Commercial Property</option>
                  <option>Contractors Insurance</option><option>Restaurant Insurance</option><option>Building Owners</option>
                  <option>Bonds & Surety</option><option>Other</option>
                </select>
              </div>
              <div><label className="block text-sm font-medium text-foreground mb-1.5">Message</label><textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your insurance needs..." /></div>
              <button type="submit" className="w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">Send Request</button>
            </form>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a href="tel:+14254057111" className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"><Phone className="w-5 h-5 text-secondary flex-shrink-0" />(425) 405-7111</a>
                <a href="mailto:info@bringasinsurance.com" className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"><Mail className="w-5 h-5 text-secondary flex-shrink-0" />info@bringasinsurance.com</a>
                <div className="flex items-start gap-3 text-sm text-foreground/80"><MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Serving Washington State</span></div>
                <div className="flex items-start gap-3 text-sm text-foreground/80"><Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Mon–Fri: 9am–5pm</span></div>
              </div>
            </div>
            <div className="glass-card p-6 border-l-4 border-l-secondary">
              <p className="text-sm text-muted-foreground leading-relaxed">🦉 <strong>Hablamos Español.</strong> We promise to explain everything without jargon and, if possible, with a smile.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Quote;
