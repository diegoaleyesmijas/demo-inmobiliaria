"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Precios", href: "#precios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-6 w-[95%] max-w-5xl"
            : "top-6 w-[95%] max-w-5xl"
        }`}
      >
        <div className={`flex items-center justify-between px-6 py-4 rounded-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_rgba(15,76,117,0.08)] border border-white/60"
            : "bg-white/10 backdrop-blur-md border border-white/20"
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-primary-500 rounded-xl flex items-center justify-center group-hover:bg-accent-500 transition-colors duration-300">
              <span className="text-white font-heading text-lg">H</span>
            </div>
            <span className={`font-heading text-lg font-normal tracking-tight transition-colors ${
              isScrolled ? "text-primary-900" : "text-white"
            }`}>
              Hosty
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 hover:bg-primary-500/10 ${
                  isScrolled ? "text-neutral-700 hover:text-primary-600" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-3 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 group magnetic-hover"
            >
              Reservar
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4">
              <span className={`absolute left-0 h-[1.5px] w-5 rounded-full transition-all duration-500 ${
                isScrolled ? "bg-primary-900" : "bg-white"
              } ${isMobileMenuOpen ? "top-[7px] rotate-45" : "top-0 rotate-0"}`} />
              <span className={`absolute left-0 top-[7px] h-[1.5px] w-5 rounded-full transition-all duration-300 ${
                isScrolled ? "bg-primary-900" : "bg-white"
              } ${isMobileMenuOpen ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"}`} />
              <span className={`absolute left-0 h-[1.5px] w-5 rounded-full transition-all duration-500 ${
                isScrolled ? "bg-primary-900" : "bg-white"
              } ${isMobileMenuOpen ? "top-[7px] -rotate-45" : "top-[14px] rotate-0"}`} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="font-heading text-4xl text-primary-900 hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4 bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-full transition-colors"
              >
                Reservar
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
