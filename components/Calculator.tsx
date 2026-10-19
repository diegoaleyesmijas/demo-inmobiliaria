"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Calculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    neighborhood: "",
    bedrooms: "",
    age: "",
    published: "",
    smartLock: "",
    amenities: [] as string[],
  });

  const neighborhoods = [
    "Palermo", "Recoleta", "Belgrano", "San Telmo",
    "Puerto Madero", "Caballito", "Villa Devoto", "Villa Crespo", "Otro",
  ];

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleAmenityToggle = (amenity: string) => {
    const amenities = formData.amenities.includes(amenity)
      ? formData.amenities.filter((a) => a !== amenity)
      : [...formData.amenities, amenity];
    handleInputChange("amenities", amenities);
  };

  const calculateEstimation = () => {
    const basePrices: Record<string, number> = {
      Palermo: 650, Recoleta: 600, Belgrano: 550, "San Telmo": 500,
      "Puerto Madero": 850, Caballito: 450, "Villa Devoto": 480, "Villa Crespo": 460, Otro: 400,
    };
    const basePrice = basePrices[formData.neighborhood] || 400;
    const bedroomMultiplier: Record<string, number> = { "1": 0.8, "2": 1.0, "3": 1.3, "4+": 1.6 };
    const ageMultiplier: Record<string, number> = { "Nueva": 1.15, "5-15": 1.0, "15+": 0.85 };
    const mult1 = bedroomMultiplier[formData.bedrooms] || 1.0;
    const mult2 = ageMultiplier[formData.age] || 1.0;
    const mult3 = formData.published === "Sí" ? 1.1 : 1.0;
    const mult4 = formData.smartLock === "Sí" ? 1.05 : 1.0;
    const amenityBonus = formData.amenities.length * 20;
    const min = Math.round(basePrice * mult1 * mult2 * mult3 * mult4 + amenityBonus - 50);
    const max = Math.round(basePrice * mult1 * mult2 * mult3 * mult4 + amenityBonus + 50);
    return { min: Math.max(300, min), max: Math.max(400, max) };
  };

  const handleSubmit = () => {
    const { min, max } = calculateEstimation();
    const message = `¡Hola equipo de Hosty! Quiero calcular las ganancias de mi propiedad.\n\n📍 Ubicación: ${formData.neighborhood}\n🛏️ Ambientes: ${formData.bedrooms}\n🏠 Antigüedad: ${formData.age}\n📱 Publicada: ${formData.published}\n🔒 Smart Lock: ${formData.smartLock}\n🎯 Amenidades: ${formData.amenities.join(", ") || "Ninguna"}\n\n💰 Estimación: $${min} - $${max} USD/mes\n\n¡Me gustaría hablar con un asesor!`;
    window.open(`https://wa.me/5491124004938?text=${encodeURIComponent(message)}`, "_blank");
  };

  const slideVariants = {
    enter: { opacity: 0, x: 30 },
    active: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <section id="calculadora" className="py-32 md:py-40 bg-primary-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-[10px] font-medium uppercase tracking-[0.2em] mb-6 border border-white/10">
            Calculadora
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1] text-balance">
            ¿Cuánto podés ganar{" "}
            <span className="italic text-accent-400">con tu propiedad?</span>
          </h2>
          <p className="font-sans text-lg text-white/60 max-w-2xl mx-auto">
            Descubrí el potencial real de tu inmueble en Buenos Aires. 
            Solicitá tu análisis de rentabilidad gratuito.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bezel-outer" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="bezel-inner bg-white rounded-[calc(2rem-6px)] p-8 md:p-12">
              {/* Progress */}
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${step >= 1 ? "bg-primary-500" : "bg-neutral-200"}`} />
                <div className={`w-10 h-[2px] transition-all duration-500 ${step >= 2 ? "bg-primary-500" : "bg-neutral-200"}`} />
                <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${step >= 2 ? "bg-primary-500" : "bg-neutral-200"}`} />
              </div>

              <div className="min-h-[420px]">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      variants={slideVariants}
                      initial="enter"
                      animate="active"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      className="space-y-7"
                    >
                      <h3 className="font-heading text-2xl text-primary-900 mb-6">
                        Paso 1: Tu Propiedad
                      </h3>

                      <div>
                        <label className="font-sans text-sm font-medium text-neutral-700 mb-2 block">
                          Ubicación
                        </label>
                        <select
                          value={formData.neighborhood}
                          onChange={(e) => handleInputChange("neighborhood", e.target.value)}
                          className="w-full border border-neutral-200 rounded-xl px-4 py-3.5 font-sans text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 focus:outline-none transition-all bg-neutral-50"
                        >
                          <option value="">Seleccioná un barrio</option>
                          {neighborhoods.map((n) => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="font-sans text-sm font-medium text-neutral-700 mb-2 block">
                          Ambientes
                        </label>
                        <div className="grid grid-cols-4 gap-3">
                          {["1", "2", "3", "4+"].map((num) => (
                            <button
                              key={num}
                              onClick={() => handleInputChange("bedrooms", num)}
                              className={`py-3.5 rounded-xl font-sans text-sm font-medium transition-all duration-300 ${
                                formData.bedrooms === num
                                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                                  : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                              }`}
                            >
                              {num}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-sans text-sm font-medium text-neutral-700 mb-2 block">
                          Antigüedad
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { value: "Nueva", label: "Nueva" },
                            { value: "5-15", label: "5-15 años" },
                            { value: "15+", label: "Más de 15" },
                          ].map((opt) => (
                            <button
                              key={opt.value}
                              onClick={() => handleInputChange("age", opt.value)}
                              className={`py-3.5 rounded-xl font-sans text-sm font-medium transition-all duration-300 ${
                                formData.age === opt.value
                                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                                  : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-sans text-sm font-medium text-neutral-700 mb-2 block">
                          ¿Ya está publicada en alguna plataforma?
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Sí", "No"].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => handleInputChange("published", opt)}
                              className={`py-3.5 rounded-xl font-sans text-sm font-medium transition-all duration-300 ${
                                formData.published === opt
                                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                                  : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setStep(2)}
                        disabled={!formData.neighborhood || !formData.bedrooms || !formData.age || !formData.published}
                        className="w-full bg-primary-900 hover:bg-primary-800 disabled:bg-neutral-200 disabled:text-neutral-400 text-white font-medium py-4 rounded-full transition-all duration-500 magnetic-hover mt-4 group flex items-center justify-center gap-2"
                      >
                        Continuar
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      variants={slideVariants}
                      initial="enter"
                      animate="active"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      className="space-y-7"
                    >
                      <h3 className="font-heading text-2xl text-primary-900 mb-6">
                        Paso 2: Detalles Adicionales
                      </h3>

                      {/* Summary */}
                      <div className="flex flex-wrap gap-2 p-4 bg-neutral-50 rounded-xl">
                        <span className="bg-primary-500/10 text-primary-600 px-3 py-1.5 rounded-full text-xs font-medium">
                          📍 {formData.neighborhood}
                        </span>
                        <span className="bg-primary-500/10 text-primary-600 px-3 py-1.5 rounded-full text-xs font-medium">
                          🛏️ {formData.bedrooms} amb
                        </span>
                        <span className="bg-primary-500/10 text-primary-600 px-3 py-1.5 rounded-full text-xs font-medium">
                          🏠 {formData.age}
                        </span>
                      </div>

                      <div>
                        <label className="font-sans text-sm font-medium text-neutral-700 mb-2 block">
                          Amenidades (opcional)
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {["WiFi", "Aire Acond.", "Cochera", "Piscina", "Gimnasio", "Terraza"].map((amenity) => (
                            <button
                              key={amenity}
                              onClick={() => handleAmenityToggle(amenity)}
                              className={`py-3 rounded-xl font-sans text-sm font-medium transition-all duration-300 ${
                                formData.amenities.includes(amenity)
                                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                                  : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                              }`}
                            >
                              {amenity}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-sans text-sm font-medium text-neutral-700 mb-2 block">
                          ¿Tiene Smart Lock?
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Sí", "No"].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => handleInputChange("smartLock", opt)}
                              className={`py-3.5 rounded-xl font-sans text-sm font-medium transition-all duration-300 ${
                                formData.smartLock === opt
                                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                                  : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Estimation Preview */}
                      {formData.smartLock && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                          className="bg-primary-50 border border-primary-500/20 rounded-2xl p-6 text-center"
                        >
                          <div className="text-xs font-sans text-neutral-500 uppercase tracking-wider mb-2">
                            Estimación mensual
                          </div>
                          <div className="font-heading text-3xl text-primary-900">
                            ${calculateEstimation().min} - ${calculateEstimation().max} <span className="text-lg text-neutral-500">USD</span>
                          </div>
                        </motion.div>
                      )}

                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => setStep(1)}
                          className="flex-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium py-4 rounded-full transition-all duration-300"
                        >
                          ← Volver
                        </button>
                        <button
                          onClick={handleSubmit}
                          className="flex-1 bg-primary-900 hover:bg-primary-800 text-white font-medium py-4 rounded-full transition-all duration-500 magnetic-hover group flex items-center justify-center gap-2"
                        >
                          Enviar por WhatsApp
                          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
