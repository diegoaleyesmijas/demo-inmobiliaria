import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Hosty Argentina - Gestión Profesional de Alquileres Temporarios en Buenos Aires",
  description: "Maximizamos tus ingresos y cuidamos tu propiedad en Argentina. Gestión integral de Airbnb y alquileres temporarios con +50 propiedades en CABA.",
  keywords: "Airbnb management, alquiler temporario, gestión propiedades, Buenos Aires, CABA, Hosty Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${instrumentSerif.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased font-sans relative">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
