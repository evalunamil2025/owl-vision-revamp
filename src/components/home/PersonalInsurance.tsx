import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { personalServices } from "@/data/homeData";

const PersonalInsurance = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3">Personal Insurance</h2>
          <p className="text-muted-foreground font-body max-w-xl">Coverage designed to protect you, your family, and everything you've built.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {personalServices.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link to={s.href} className="elevated-card p-5 flex items-start gap-4 group block">
                <div className="icon-circle-sm group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary text-sm mb-1">{s.label}</h3>
                  <p className="text-xs text-muted-foreground font-body">{s.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInsurance;
