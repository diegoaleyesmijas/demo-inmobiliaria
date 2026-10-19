"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-neutral-900 text-white pt-24 pb-10 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-primary-500/[0.05] rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-primary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-heading text-lg">H</span>
              </div>
              <span className="font-heading text-xl text-white">Hosty Argentina</span>
            </div>
            <p className="font-sans text-neutral-400 mb-6 leading-relaxed max-w-sm">
              Gestión profesional de alquileres temporarios. 
              Convertimos tu propiedad en un activo de alto rendimiento.
            </p>
            <div className="flex gap-3">
              {[
                <svg key="ig" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>,
                <svg key="fb" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.19.04 1.59.067v4.117c-.26-.04-.675-.093-1.15-.093-1.48 0-2.21.56-2.21 2.404v1.063h3.6l-.69 3.668h-2.91v7.98" />
                </svg>,
                <svg key="li" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.935v5.671H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/[0.06] flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg text-white mb-5">Servicios</h4>
            <ul className="space-y-3">
              {["Marketing Digital", "Gestión Integral", "Atención Huéspedes", "Mantenimiento"].map((link) => (
                <li key={link}>
                  <a href="#servicios" className="font-sans text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-white mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@hostyargentina.com.ar" className="flex items-center gap-3 font-sans text-sm text-neutral-400 hover:text-white transition-colors duration-300 group">
                  <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  info@hostyargentina.com.ar
                </a>
              </li>
              <li>
                <a href="tel:+5491124004938" className="flex items-center gap-3 font-sans text-sm text-neutral-400 hover:text-white transition-colors duration-300 group">
                  <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  +54 11 2400-4938
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 font-sans text-sm text-neutral-400">
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  Buenos Aires, Argentina
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/[0.06] pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-neutral-500">
              © 2026 Hosty Argentina. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-sans text-xs text-neutral-500 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="font-sans text-xs text-neutral-500 hover:text-white transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
