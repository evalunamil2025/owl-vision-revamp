import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { businessServices } from "@/data/homeData";

const BusinessInsurance = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3">Business Insurance</h2>
          <p className="text-muted-foreground font-body max-w-xl">Your business is your project — we make sure it's properly protected.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {businessServices.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link to={s.href} className="elevated-card p-5 text-center group block">
                <div className="icon-circle mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="font-heading font-bold text-primary text-sm mb-1">{s.label}</h3>
                <p className="text-xs text-muted-foreground font-body">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessInsurance;
