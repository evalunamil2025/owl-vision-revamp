import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { whyUs } from "@/data/homeData";

const WhyChooseUs = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00a651]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#015093]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#015093]/5 border border-[#015093]/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#00a651]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#015093]/70 font-heading">
              The Bringas Advantage
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#015093] tracking-tighter leading-[0.95] mb-8 font-heading"
          >
            Why Choose <br />
            <span className="text-[#00a651] font-light italic">Bringas Insurance?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#015093]/60 font-body font-light leading-relaxed"
          >
            We take your peace of mind seriously — but we don't believe the process should be boring. Experience a more
            human way to protect your assets.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-white p-10 rounded-[2.5rem] border border-[#015093]/5 shadow-[0_30px_60px_-15px_rgba(1,80,147,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(0,166,81,0.1)] transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="mb-8 relative">
                <div className="w-16 h-16 bg-[#0079c2]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#015093] transition-colors duration-500">
                  <item.icon
                    className="w-8 h-8 text-[#00a651] group-hover:text-white transition-all duration-500 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>
                {/* Decorative element inside card */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#00a651]/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-xl font-bold text-[#015093] mb-4 font-heading tracking-tight">{item.title}</h3>

              <p className="text-sm text-[#015093]/60 font-body leading-relaxed mb-6">{item.desc}</p>

              <div className="flex items-center gap-2 text-[#00a651] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                <span className="text-[10px] font-black uppercase tracking-widest font-heading">Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cierre visual de la sección */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#015093]/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
