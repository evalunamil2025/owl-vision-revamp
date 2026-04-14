import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Sparkles, CheckCircle2 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import heroBg from "@/assets/seattle-hero-bg.jpg";

interface CoverageItem {
  title: string;
  description: string;
  items?: string[];
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroDescription: string;
  coverages: CoverageItem[];
  importantNote?: {
    title: string;
    content: string;
    items?: string[];
  };
  approach?: {
    intro: string;
    items: string[];
    closing?: string;
  };
  additionalSections?: ReactNode;
}

const ServicePageLayout = ({
  title,
  subtitle,
  heroDescription,
  coverages,
  importantNote,
  approach,
  additionalSections,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── HERO (Green Gradient) ─── */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-[#00a651]">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00a651]/95 via-[#008f45]/90 to-[#015093]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[#001e2b]/20" />
        </div>

        {/* Decorative glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] animate-pulse z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase font-heading">
                Bringas Insurance Group
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-tighter leading-[0.9] mb-8 font-heading">
              {title}
              <br />
              <span className="text-white/80 font-light italic text-3xl md:text-5xl">{subtitle}</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-body font-light max-w-2xl mx-auto leading-relaxed">
              {heroDescription}
            </p>
          </motion.div>
        </div>

        {/* SVG Wave divisor */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-10">
          <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120C0,120,321.39,56.44,321.39,56.44Z"
              fill="#00a651"
            />
          </svg>
        </div>
      </section>

      {/* ─── CTA CARDS (Floating over hero) ─── */}
      <section className="relative bg-[#00a651]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 -translate-y-24 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-[#0079c2]/10 shadow-xl shadow-[#0079c2]/5 flex flex-col items-center text-center group hover:scale-105 transition-all"
            >
              <div className="w-14 h-14 bg-[#00a651]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#00a651] transition-colors">
                <Shield className="w-6 h-6 text-[#00a651] group-hover:text-white transition-colors" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#015093]/60 mb-1 font-heading">
                Get Protected
              </p>
              <Link to="/quote" className="text-[#015093] font-bold font-body hover:text-[#00a651] transition-colors">
                Request a Free Quote →
              </Link>
            </motion.div>

            <motion.a
              href="tel:+14254057111"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-[2.5rem] border border-[#0079c2]/10 shadow-xl shadow-[#0079c2]/5 flex flex-col items-center text-center group hover:scale-105 transition-all"
            >
              <div className="w-14 h-14 bg-[#00a651]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#00a651] transition-colors">
                <Phone className="w-6 h-6 text-[#00a651] group-hover:text-white transition-colors" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#015093]/60 mb-1 font-heading">
                Call Us Now
              </p>
              <p className="text-[#015093] font-bold font-body">(425) 405-7111</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ─── COVERAGES GRID (Green WhyChooseUs Style) ─── */}
      <section className="relative py-24 bg-[#00a651] overflow-hidden -mt-24">
        {/* Decorative blurs */}
        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#008f45]/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[350px] h-[350px] bg-[#015093]/20 rounded-full blur-[100px]" />
        <div className="absolute top-[50%] left-[60%] w-[250px] h-[250px] bg-white/5 rounded-full blur-[80px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/60 font-heading">
                Coverage Details
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12 font-heading">
              What's <span className="text-white/80 italic font-light">Covered?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coverages.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20 group hover:bg-white hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#00a651]/10 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-white group-hover:text-[#00a651] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#015093] mb-2 font-heading transition-colors">{c.title}</h3>
                  <p className="text-sm text-white/80 group-hover:text-[#015093]/70 font-body mb-3 leading-relaxed transition-colors">{c.description}</p>
                  {c.items && (
                    <ul className="space-y-2">
                      {c.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-white/70 group-hover:text-[#015093]/80 font-body transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-[#00a651] mt-1.5 flex-shrink-0 transition-colors" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {additionalSections}

      {/* ─── IMPORTANT NOTE ─── */}
      {importantNote && (
        <section className="py-24 bg-[#f8fafb]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] border border-[#0079c2]/10 relative overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute top-[-30%] right-[-20%] w-64 h-64 bg-[#00a651]/10 rounded-full blur-[80px]" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#00a651]/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#00a651]" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#015093]/60 font-heading">
                    Important
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#015093] tracking-tight mb-4 font-heading">
                  {importantNote.title}
                </h3>
                <p className="text-[#015093]/70 font-body leading-relaxed mb-6">{importantNote.content}</p>

                {importantNote.items && (
                  <ul className="space-y-3">
                    {importantNote.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#015093]/80 font-body">
                        <span className="w-2 h-2 rounded-full bg-[#00a651] mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── OUR APPROACH (Blue with Glassmorphism) ─── */}
      {approach && (
        <section className="relative py-24 bg-[#015093] overflow-hidden">
          {/* Decorative blurs */}
          <div className="absolute top-[-15%] right-[-10%] w-[400px] h-[400px] bg-[#0079c2]/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#00a651]/15 rounded-full blur-[100px]" />

          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4 tracking-tight">
                Our <span className="text-[#00a651] italic font-light">Approach</span>
              </h2>
              <p className="text-white/70 font-body text-lg">{approach.intro}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {approach.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center group hover:bg-white/15 hover:scale-105 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-[#00a651] transition-colors">
                    <span className="text-2xl font-bold text-white font-heading">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white font-heading">{item}</p>
                </motion.div>
              ))}
            </div>

            {approach.closing && (
              <p className="mt-12 text-center text-white/60 font-body italic text-lg max-w-2xl mx-auto">
                {approach.closing}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ─── FINAL CTA (Green Gradient) ─── */}
      <section className="pb-24 bg-white pt-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00a651] to-[#008f45] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[80px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#015093]/10 blur-[60px] rounded-full" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-8 leading-[0.95] font-heading">
                Ready to protect <br /> <span className="text-white/80 italic font-light">what matters most?</span>
              </h2>
              <p className="text-white/90 text-lg font-body font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                As an independent agency, we compare multiple carriers to find the best coverage for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  to="/quote"
                  className="px-12 py-6 bg-white text-[#00a651] rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-black/10 hover:bg-[#015093] hover:text-white transition-all flex items-center justify-center gap-2 group"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+14254057111"
                  className="px-12 py-6 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-white" /> (425) 405-7111
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
