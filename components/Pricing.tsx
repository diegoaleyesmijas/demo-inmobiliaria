"use client";

import { motion } from "framer-motion";
import { pricingPlans } from "@/data/mockData";

export default function Pricing() {
  return (
    <section id="precios" className="py-20 md:py-32 lg:py-40 bg-neutral-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/[0.02] rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-medium uppercase tracking-[0.2em] mb-6">
            Precios
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-900 mb-6 leading-[1.1] text-balance">
            Planes{" "}
            <span className="italic text-accent-500">transparentes</span>
          </h2>
          <p className="font-sans text-lg text-neutral-500 max-w-2xl mx-auto">
            Sin costos ocultos. Elegí el plan que mejor se adapte a tus necesidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className={`relative rounded-3xl p-8 md:p-10 transition-all duration-500 ${
                plan.recommended
                  ? "bg-primary-900 text-white lg:scale-[1.03] shadow-2xl shadow-primary-900/20"
                  : "bg-white text-primary-900 hover:shadow-lg hover:shadow-primary-500/5 border border-neutral-100"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-[10px] font-medium uppercase tracking-[0.15em] px-4 py-1.5 rounded-full">
                  Recomendado
                </div>
              )}

              <div className="mb-8">
                <h3 className={`font-heading text-2xl mb-2 ${plan.recommended ? "text-white" : "text-primary-900"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`font-heading text-4xl sm:text-5xl ${plan.recommended ? "text-white" : "text-primary-900"}`}>
                    ${plan.price}
                  </span>
                  <span className={`font-sans text-sm ${plan.recommended ? "text-white/60" : "text-neutral-500"}`}>
                    {plan.priceSuffix}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.recommended ? "bg-white/10" : "bg-primary-500/10"
                    }`}>
                      <svg className={`w-3 h-3 ${plan.recommended ? "text-accent-400" : "text-primary-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className={`font-sans text-sm ${plan.recommended ? "text-white/80" : "text-neutral-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center font-sans font-medium py-3.5 px-6 rounded-full transition-all duration-500 magnetic-hover ${
                  plan.recommended
                    ? "bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/20"
                    : "bg-primary-900 hover:bg-primary-800 text-white"
                }`}
              >
                Comenzar ahora
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="font-sans text-sm text-neutral-500">
            Sin costos ocultos. Solo pagás cuando generás ingresos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
