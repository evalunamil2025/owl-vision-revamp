import { motion } from "framer-motion";
import { whyUs } from "@/data/homeData";

const WhyChooseUs = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3">Why Choose Bringas?</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">We take your peace of mind seriously — but we don't believe the process should be boring.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="elevated-card p-6 text-center group">
              <div className="icon-circle mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
