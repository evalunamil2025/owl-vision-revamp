import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="gradient-blue text-primary-foreground section-padding">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-white">Ready to Get Started?</h2>
        <p className="text-primary-foreground/75 font-body max-w-xl mx-auto mb-8">
          The first step to protecting what you love is simpler than you think. Call us or send a message — we promise to explain everything without jargon and, if possible, with a smile.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/quote" className="btn-primary">
            Get Your Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:+14254057111" className="btn-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Phone className="w-4 h-4" strokeWidth={2} /> (425) 405-7111
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
