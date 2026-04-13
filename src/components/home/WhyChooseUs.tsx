import { motion } from "framer-motion";
import { whyUs } from "@/data/homeData";

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">
      {/* Decoración de fondo para contraste */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#0079c2]/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#00a651]/5 rounded-full blur-[120px]" />
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
            className="text-slate-500 font-body text-lg max-w-2xl mx-auto leading-relaxed"
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
              whileHover={{ y: -15, scale: 1.02 }}
              className="relative group bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,82,150,0.15)] transition-all duration-500 flex flex-col items-center text-center border border-white"
            >
              {/* Borde de acento dinámico */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#00a651]/10 transition-colors duration-500" />

              {/* Barra de color superior con degradado */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#009147] to-[#00a651] rounded-b-full shadow-[0_2px_10px_rgba(0,166,81,0.3)]" />

              {/* Icono con doble círculo y sombra */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0079c2]/5 to-[#00a651]/5 rounded-2xl rotate-45 group-hover:rotate-12 transition-transform duration-500 absolute inset-0 shadow-inner" />
                <div className="relative w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-slate-50 group-hover:shadow-[0_15px_30px_rgba(0,166,81,0.2)] transition-all duration-500">
                  <item.icon
                    className="w-10 h-10 text-[#00a651] transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <h3 className="font-['Josefin_Sans'] font-bold text-2xl text-[#0079c2] mb-4">{item.title}</h3>

              <p className="text-slate-500 font-body leading-relaxed text-base">{item.desc}</p>

              {/* Elemento de cierre visual */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-1 bg-gradient-to-r from-[#005296] to-[#0073bd] rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
