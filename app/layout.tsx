import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const BASE_URL = "https://reputalia.es";
const BRAND = "Reputalia";
const GA4_ID = "G-XXXXXXXXXX"; // → reemplazar cuando tengas el ID

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${BRAND} — Agencia de Reputación y Autoridad Digital`,
    template: `%s | ${BRAND}`,
  },
  description: "Protegemos, construimos y blindamos tu reputación digital. Eliminamos contenido dañino, construimos autoridad y monitorizamos tu presencia. Empresa registrada en España.",
  keywords: ["reputación digital","autoridad digital","eliminar difamación","derecho al olvido","knowledge panel google","aparecer en forbes","gestión reputación online"],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: BRAND,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Reputalia — Reputación y Autoridad Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: {
    google: "XXXXXXXXXX", // → pegar desde Search Console cuando lo conectes
  },
  alternates: { canonical: BASE_URL },
};

// Organization schema — base de todo
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: BRAND,
  url: BASE_URL,
  logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png`, width: 200, height: 60 },
  description: "Agencia especializada en gestión integral de reputación digital. Protección, construcción y blindaje de presencia online.",
  address: { "@type": "PostalAddress", addressCountry: "ES" },
  contactPoint: [
    { "@type": "ContactPoint", contactType: "customer service", availableLanguage: ["Spanish","English"], url: `${BASE_URL}/contacto/` }
  ],
  sameAs: [
    // → añadir cuando tengas: LinkedIn, Twitter/X, Instagram, Trustpilot
  ],
};

// LocalBusiness — para Google Maps y rich results con rating
const localBizSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  name: BRAND,
  url: BASE_URL,
  description: "Agencia de reputación y autoridad digital. Empresa registrada en España.",
  address: { "@type": "PostalAddress", addressCountry: "ES", addressRegion: "España" },
  priceRange: "€€€",
  // aggregateRating se añade cuando tengas reseñas reales en Trustpilot/Google
  // aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "47", bestRating: "5" },
};

// WebSite schema — habilita SearchBox en Google
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: BRAND,
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/blog/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body>
        {children}

        {/* GA4 — activa cuando tengas el ID real */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}', { anonymize_ip: true });
        `}</Script>
      </body>
    </html>
  );
}
