import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const siteUrl = "https://demo-inmobiliaria-three.vercel.app";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: "400",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hosty Argentina | Gestión de alquileres temporarios en Buenos Aires",
    template: "%s | Hosty Argentina",
  },
  description:
    "Gestión profesional de alquileres temporarios y Airbnb en CABA. Maximizá ingresos, con atención 24/7 y operación completa de tu propiedad en Buenos Aires.",
  keywords: [
    "gestión alquiler temporario Buenos Aires",
    "administración Airbnb CABA",
    "property management Palermo",
    "alquiler temporario Recoleta",
    "Hosty Argentina",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Hosty Argentina",
    title: "Hosty Argentina | Gestión de alquileres temporarios en Buenos Aires",
    description:
      "Operamos tu propiedad en Airbnb y alquiler temporario en CABA. Vos cobrás, nosotros nos encargamos del resto.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hosty Argentina | Gestión de alquileres temporarios",
    description:
      "Gestión integral de Airbnb en Buenos Aires. Calculá cuánto puede rendir tu propiedad.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${instrumentSerif.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased font-sans relative overflow-x-hidden">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:text-primary-900 focus:px-4 focus:py-2 focus:rounded-full"
        >
          Saltar al contenido
        </a>
        <div className="grain-overlay" />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
