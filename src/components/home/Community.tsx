import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Community = () => {
  return (
    <section className="gradient-green text-secondary-foreground section-padding">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-white">Nuestra Comunidad Hispana</h2>
        <p className="text-secondary-foreground/80 font-body leading-relaxed max-w-2xl mx-auto mb-6">
          We're bilingual and understand that serving the Hispanic community requires authenticity and warmth. We communicate with respect and joy in both Spanish and English, so you feel at home.
        </p>
        <p className="text-sm text-secondary-foreground/60 font-body mb-8">
          Latinos represent nearly one in five Americans, with purchasing power exceeding $2.8 trillion by 2026.
        </p>
        <Link to="/quote" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card font-heading font-bold transition-all duration-300 hover:shadow-brand-lg hover:-translate-y-0.5 text-primary">
          Let's Talk <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Community;
