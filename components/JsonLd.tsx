const siteUrl = "https://demo-inmobiliaria-three.vercel.app";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}/#business`,
      name: "Hosty Argentina",
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      description:
        "Gestión profesional de alquileres temporarios y Airbnb en la Ciudad de Buenos Aires.",
      telephone: "+54-11-2400-4938",
      areaServed: {
        "@type": "City",
        name: "Buenos Aires",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressRegion: "CABA",
        addressCountry: "AR",
      },
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Hosty Argentina",
      inLanguage: "es-AR",
      publisher: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué incluye la gestión de Hosty Argentina?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Publicación, precios dinámicos, atención al huésped, check-in, limpieza y mantenimiento de la propiedad en Buenos Aires.",
          },
        },
        {
          "@type": "Question",
          name: "¿En qué barrios operan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Operamos en CABA y Gran Buenos Aires, con foco en Palermo, Recoleta, Belgrano, Puerto Madero, San Telmo y barrios aledaños.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo se cobra el servicio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hay un setup inicial y planes de gestión con un porcentaje sobre las reservas. No hay costos ocultos: se paga cuando la propiedad genera ingresos en el plan de gestión.",
          },
        },
      ],
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
