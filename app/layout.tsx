import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reputalia.es"),
  title: {
    default: "Reputalia — Agencia de Reputación y Autoridad Digital",
    template: "%s | Reputalia",
  },
  description: "Protegemos, construimos y blindamos tu reputación digital. Eliminar contenido dañino, aparecer en medios y dominar Google. Empresa registrada en España.",
  keywords: ["reputación digital", "autoridad digital", "eliminar difamación", "aparecer en prensa", "knowledge panel google"],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Reputalia",
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://reputalia.es",
  name: "Reputalia",
  url: "https://reputalia.es",
  description: "Agencia de reputación y autoridad digital. Protección, construcción y blindaje de presencia online.",
  address: { "@type": "PostalAddress", addressCountry: "ES" },
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", availableLanguage: ["Spanish", "English"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
