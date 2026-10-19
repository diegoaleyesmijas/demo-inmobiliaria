"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 md:py-40 bg-neutral-50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/[0.03] rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-medium uppercase tracking-[0.2em] mb-6">
            Quiénes somos
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-900 mb-6 leading-[1.1] text-balance">
            El puente entre propietarios y{" "}
            <span className="italic text-accent-500">huéspedes exigentes</span>
          </h2>
          <p className="font-sans text-lg text-neutral-500 leading-relaxed max-w-2xl mx-auto">
            Nuestra experiencia en mercados europeos nos permite ofrecer estándares 
            de calidad superiores para tu propiedad en Argentina.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
          {/* Image with Double-Bezel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="relative"
          >
            <div className="bezel-outer">
              <div className="bezel-inner overflow-hidden">
                <div className="aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                    alt="Propiedad gestionada por Hosty en Buenos Aires"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 md:-right-6 bg-white rounded-2xl shadow-xl shadow-primary-500/10 p-5 border border-neutral-100"
            >
              <div className="font-heading text-4xl text-accent-500 mb-1">+50</div>
              <div className="font-sans text-sm text-neutral-500">Propiedades activas</div>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-3xl md:text-4xl text-primary-900 mb-5 leading-tight">
                Elevamos el estándar de los alquileres temporarios
              </h3>
              <p className="font-sans text-neutral-500 leading-relaxed mb-4">
                Somos una empresa líder en la gestión de alquileres temporarios 
                en CABA y Gran Buenos Aires. Nos especializamos en transformar propiedades 
                en experiencias de hospitalidad de alto nivel.
              </p>
              <p className="font-sans text-neutral-500 leading-relaxed">
                Nuestro equipo de expertos garantiza que obtengas la máxima rentabilidad 
                sin el estrés operativo. Desde la optimización de precios hasta la limpieza 
                y atención al huésped, nos encargamos de todo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-200">
              <div>
                <div className="font-heading text-4xl text-primary-900 mb-1">4.9/5</div>
                <div className="font-sans text-sm text-neutral-500">Calificación promedio</div>
              </div>
              <div>
                <div className="font-heading text-4xl text-primary-900 mb-1">+1000</div>
                <div className="font-sans text-sm text-neutral-500">Huéspedes satisfechos</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
