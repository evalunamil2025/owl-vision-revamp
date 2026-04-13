import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-navy text-primary-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 owl-pattern opacity-30" />
        <div className="container mx-auto relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-accent-light" strokeWidth={1.8} />
              <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Bringas Insurance Group</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold mb-4 text-white">{title}</h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 font-medium mb-4">{subtitle}</p>
            <p className="text-primary-foreground/70 leading-relaxed max-w-2xl">{heroDescription}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/quote" className="btn-primary">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+14254057111" className="btn-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Phone className="w-4 h-4" /> (425) 405-7111
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverages */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold mb-10">What's Covered?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverages.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="elevated-card p-6 group">
                <h3 className="text-lg font-heading font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{c.description}</p>
                {c.items && (
                  <ul className="space-y-1.5">
                    {c.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {additionalSections}

      {/* Important Note */}
      {importantNote && (
        <section className="section-padding section-alt">
          <div className="container mx-auto max-w-3xl">
            <div className="elevated-card p-8 border-l-4 border-l-secondary">
              <h3 className="text-xl font-heading font-bold mb-3">{importantNote.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{importantNote.content}</p>
              {importantNote.items && (
                <ul className="space-y-2">
                  {importantNote.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Our Approach */}
      {approach && (
        <section className="section-padding">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold mb-4">Our Approach</h2>
            <p className="text-muted-foreground mb-6">{approach.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {approach.items.map((item, i) => (
                <div key={i} className="elevated-card p-5 text-center">
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
            {approach.closing && <p className="mt-6 text-muted-foreground italic">{approach.closing}</p>}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold mb-4 text-white">Ready to Protect What Matters?</h2>
          <p className="text-primary-foreground/75 mb-8">As an independent agency, we compare multiple carriers to find the best coverage for your needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="btn-primary">
              Get Your Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+14254057111" className="btn-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
