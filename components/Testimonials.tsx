"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/mockData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-32 md:py-40 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/[0.02] rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-medium uppercase tracking-[0.2em] mb-6">
            Testimonios
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-900 mb-6 leading-[1.1] text-balance">
            Lo que dicen{" "}
            <span className="italic text-accent-500">nuestros propietarios</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0"
              >
                <div className="bg-neutral-50 rounded-[2rem] p-10 md:p-14 relative">
                  {/* Large quote mark */}
                  <div className="absolute top-8 left-10 font-heading text-8xl text-primary-500/10 leading-none select-none">
                    &ldquo;
                  </div>

                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    <p className="font-heading text-2xl md:text-3xl text-primary-900 italic leading-relaxed mb-10 text-pretty">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary-500 flex items-center justify-center text-white font-heading text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-heading text-lg text-primary-900">
                          {testimonial.name}
                        </div>
                        <div className="font-sans text-sm text-neutral-500">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-primary-500 w-8"
                    : "bg-neutral-200 hover:bg-neutral-300 w-1.5"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
