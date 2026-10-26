const faqs = [
  {
    q: "¿Qué incluye la gestión?",
    a: "Publicación, precios, atención al huésped, check-in, limpieza y mantenimiento. Vos cobrás; la operación diaria la resolvemos nosotros.",
  },
  {
    q: "¿En qué zonas trabajan?",
    a: "CABA y Gran Buenos Aires, con más volumen en Palermo, Recoleta, Belgrano, Puerto Madero y San Telmo.",
  },
  {
    q: "¿Hay costos ocultos?",
    a: "No. El setup se cobra una vez y la gestión es un porcentaje sobre reservas. Si no hay ingreso, no hay comisión de gestión.",
  },
  {
    q: "¿Puedo seguir usando mi cuenta de Airbnb?",
    a: "Sí. Trabajamos sobre tus canales. Te dejamos reportes y visibilidad de ocupación e ingresos.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary-600 mb-4">
          Preguntas frecuentes
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary-900 mb-10 text-balance">
          Antes de hablar con un asesor
        </h2>
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-sans font-medium text-primary-900">
                {item.q}
                <span className="text-neutral-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
