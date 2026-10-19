"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const message = "Hola equipo de Hosty! Me interesa saber más sobre sus servicios de gestión de alquileres temporarios. ¿Podrían asesorarme?";
  const whatsappUrl = `https://wa.me/5491124004938?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 bg-[#25D366] hover:bg-[#20BD5A] text-white w-14 h-14 rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center transition-colors duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.941 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.18-.466-.09-.665.093-.2.654-.788.982-1.184.332-.396.442-.7.558-.873.128-.197.172-.334.085-.533-.089-.197-.604-.788-.847-1.063-.243-.276-.443-.312-.622-.312-.194 0-.43.099-.644.273-.215.173-.81.793-.942 1.164-.132.37-.268.415-.545.415-.266.001-.526-.113-.795-.348-.27-.235-1.14-1.14-2.396-2.494-.983-1.074-1.666-2.139-1.873-2.491-.204-.352-.063-.543-.054-.753.009-.21.056-.403.038-.601-.018-.198-.333-.467-.645-.665-.312-.198-.637-.255-.895-.265-.259-.009-.463.099-.644.296-.173.197-.679.666-.679 1.638.001.971.723 1.862 1.206 2.44.482.577 1.688 1.312 2.53 1.824.834.506 1.71.454 2.328.274.624-.179 1.411-.807 2.467-1.495 3.421-.689.954-1.84 1.945-3.511 2.279-1.674.334-3.263.15-4.267-.432-1.004-.582-2.146-1.618-3.066-3.303-.92-1.685-1.572-3.634-1.572-5.455 0-2.183.743-4.457 2.114-6.293 1.37-1.837 3.489-3.143 5.976-3.678M12.05 21.785h-.008c-2.076-.02-3.876-.712-5.412-1.87l-.387-.243-4.045 1.059 1.084-3.942-.251-.399A10.01 10.01 0 012 12.026C2 6.518 6.478 2.026 12 2.026c2.958 0 5.754 1.252 7.834 3.33A10.01 10.01 0 0122.05 12.026c0 2.958-1.252 5.754-3.33 7.834A10.01 10.01 0 0113.31 21.176l-.387-.243-.142.849z"/>
      </svg>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
    </motion.a>
  );
}
