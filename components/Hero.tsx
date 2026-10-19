"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/80" />
        {/* Radial gradient accents */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-primary-400/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium uppercase tracking-[0.2em]">
              Buenos Aires, Argentina
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.05] mb-8 text-balance"
          >
            Gestión profesional de{" "}
            <span className="italic text-accent-400">alquileres temporarios</span>{" "}
            en Buenos Aires
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            Maximizamos la rentabilidad de tu propiedad sin el estrés operativo. 
            Vos enfocáte en lo importante, nosotros nos encargamos del resto.
          </motion.p>

          {/* CTA Buttons with button-in-button pattern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <a
              href="#calculadora"
              className="group bg-accent-500 hover:bg-accent-600 text-white font-medium px-7 py-4 rounded-full transition-all duration-500 flex items-center gap-3 magnetic-hover shadow-lg shadow-accent-500/20"
            >
              Calcular mis ganancias
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-transform duration-500">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="https://wa.me/5491124004938?text=Hola%20equipo%20de%20Hosty!%20Me%20interesa%20saber%20más%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-medium px-7 py-4 rounded-full transition-all duration-500 flex items-center gap-3 border border-white/20 magnetic-hover"
            >
              Hablar con un asesor
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-transform duration-500">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Stats with Double-bezel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
                {[
                  { value: "+50", label: "Propiedades gestionadas" },
                  { value: "4.9/5", label: "Calificación promedio" },
                  { value: "24/7", label: "Atención al huésped" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                    className="text-center px-6 py-5"
                  >
                    <div className="font-heading text-3xl md:text-4xl text-white mb-1">{stat.value}</div>
                    <div className="text-white/50 text-sm font-sans">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-[1.5px] border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: [0.32, 0.72, 0, 1] }}
            className="w-1 h-1 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
