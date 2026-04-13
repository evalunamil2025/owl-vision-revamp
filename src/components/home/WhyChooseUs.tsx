import { motion } from "framer-motion";
import { whyUs } from "@/data/homeData";

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-slate-50/50 overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#0079c2]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00a651]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-['Josefin_Sans'] font-bold text-[#0079c2] mb-4 tracking-tight"
          >
            Why Choose Bringas?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 font-body text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We take your peace of mind seriously — but we don't believe the process should be boring.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -12 }}
              className="relative group bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,121,194,0.12)] transition-all duration-300"
            >
              {/* Borde superior con degradado verde */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#009147] to-[#00a651] rounded-t-2xl" />

              {/* Contenedor de Icono con volumen */}
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#009147] to-[#00a651] opacity-10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="relative w-full h-full flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-50">
                  <item.icon
                    className="w-8 h-8 text-[#00a651] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              <h3 className="font-['Josefin_Sans'] font-bold text-xl text-[#0079c2] mb-3 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 font-body leading-relaxed">{item.desc}</p>

              {/* Decoración sutil al hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#0079c2]/20 group-hover:w-1/3 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
