export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  priceSuffix: string;
  recommended?: boolean;
  features: string[];
}

export interface Property {
  id: number;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  pricePerNight: number;
  image: string;
  rating: number;
  reviews: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Martínez",
    location: "Palermo, CABA",
    rating: 5,
    text: "Desde que trabajo con Hosty Argentina, mis ingresos aumentaron un 40%. La gestión es impecable y siempre estoy informado sobre el rendimiento de mi propiedad.",
    image: "/images/carlos.jpg"
  },
  {
    id: 2,
    name: "María García",
    location: "Recoleta, CABA",
    rating: 5,
    text: "Excelente servicio. Se encargan de todo: limpieza, mantenimiento, comunicación con huéspedes. Solo me preocupo por cobrar.",
    image: "/images/maria.jpg"
  },
  {
    id: 3,
    name: "Roberto Fernández",
    location: "Belgrano, CABA",
    rating: 5,
    text: "La transparencia es total. Recibo reportes mensuales detallados y la ocupación de mi departamento mejoró muchísimo.",
    image: "/images/roberto.jpg"
  }
];

export const services: Service[] = [
  {
    id: 1,
    icon: "📈",
    title: "Marketing Digital",
    description: "Estrategias SEO y fotografías profesionales para destacar tu propiedad en los algoritmos de las principales plataformas.",
    features: ["SEO optimizado", "Fotos profesionales", "Descripciones persuasivas", "Posicionamiento premium"]
  },
  {
    id: 2,
    icon: "🏠",
    title: "Gestión Integral",
    description: "Manejo inteligente de calendario y precios dinámicos para maximizar la ocupación y los ingresos de tu propiedad.",
    features: ["Calendario sincronizado", "Precios dinámicos", "Optimización continua", "Reportes mensuales"]
  },
  {
    id: 3,
    icon: "🎯",
    title: "Atención Huéspedes 24/7",
    description: "Comunicación multilingüe y atención personalizada a tus huéspedes en todo momento, resolviendo cualquier incidencia.",
    features: ["Soporte 24 horas", "Comunicación multilingüe", "Check-in flexible", "Resolución de incidencias"]
  },
  {
    id: 4,
    icon: "🔧",
    title: "Mantenimiento y Limpieza",
    description: "Limpieza profesional entre reservas y reparaciones rápidas para mantener tu propiedad en condiciones óptimas.",
    features: ["Limpieza profesional", "Mantenimiento preventivo", "Reparaciones urgentes", "Control de calidad"]
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Inicio",
    price: "200",
    priceSuffix: "USD único",
    features: [
      "Configuración inicial completa",
      "Sesión fotográfica profesional",
      "Optimización de perfiles",
      "Setup en plataformas",
      "Soporte por email"
    ]
  },
  {
    id: 2,
    name: "Gestión Premium",
    price: "25%",
    priceSuffix: "sobre reservas",
    recommended: true,
    features: [
      "Todo lo del plan Inicio",
      "Gestión completa 24/7",
      "Precios dinámicos",
      "Atención huéspedes multilingüe",
      "Limpieza y mantenimiento",
      "Reportes mensuales detallados",
      "Soporte prioritario"
    ]
  },
  {
    id: 3,
    name: "Premium Plus",
    price: "30%",
    priceSuffix: "sobre reservas",
    features: [
      "Todo lo del plan Premium",
      "Marketing avanzado",
      "Gestión de múltiples propiedades",
      "Consultoría estratégica",
      "Account manager dedicado",
      "Optimización continua de ingresos",
      "Soporte VIP 24/7"
    ]
  }
];

export const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Departamento moderno en Palermo",
    location: "Palermo, CABA",
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    pricePerNight: 85,
    image: "/images/property1.jpg",
    rating: 4.9,
    reviews: 127
  },
  {
    id: 2,
    title: "Loft con vista a la ciudad",
    location: "Recoleta, CABA",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    pricePerNight: 70,
    image: "/images/property2.jpg",
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    title: "Casa con patio en Belgrano",
    location: "Belgrano, CABA",
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    pricePerNight: 120,
    image: "/images/property3.jpg",
    rating: 5.0,
    reviews: 156
  }
];
