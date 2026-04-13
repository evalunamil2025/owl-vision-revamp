import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import mascot from "@/assets/owlie-mascot.png";

const Hero = () => {
  return (
    <section className="relative gradient-blue text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 owl-pattern opacity-20" />
      <div className="container mx-auto px-4 py-20 sm:py-28 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-sm font-heading font-semibold text-primary-foreground/80 mb-6">
              🦉 Independent Insurance Agency
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-white">
              Insurance that <span className="text-accent-light">protects</span> what you love
            </h1>
            <p className="text-lg text-primary-foreground/75 font-body leading-relaxed mb-8 max-w-lg">
              Family • Home • Auto • Business — We compare multiple carriers to bring you the coverage that truly fits your life. No boring paperwork, just real solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="btn-primary">
                Get Your Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+14254057111" className="btn-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Phone className="w-4 h-4" strokeWidth={2} /> (425) 405-7111
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
  );
};

export default Hero;
