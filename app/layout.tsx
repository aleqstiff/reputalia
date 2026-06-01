import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const BASE = "https://prestior.es";
const BRAND = "Prestior";
const GA4 = "G-XXXXXXXXXX"; // → reemplazar con tu ID de GA4

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: `${BRAND} — Gestión de Reputación y Autoridad Digital`,
    template: `%s | ${BRAND}`,
  },
  description: "Protegemos, construimos y blindamos tu reputación digital. Eliminamos contenido dañino, construimos autoridad y gestionamos tu presencia en Google, IA y medios. Empresa española registrada.",
  keywords: ["reputación digital", "autoridad digital", "eliminar difamación", "derecho al olvido", "knowledge panel google", "aparecer en forbes", "reputación en IA", "gestión reputación online España"],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: BRAND,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${BRAND} — Reputación y Autoridad Digital` }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: { google: "XXXXXXXXXX" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE}/#organization`,
  name: BRAND,
  url: BASE,
  logo: { "@type": "ImageObject", url: `${BASE}/logo.png`, width: 200, height: 60 },
  description: "Agencia especializada en gestión integral de reputación digital. Protección, construcción, blindaje y optimización para IA.",
  address: { "@type": "PostalAddress", addressCountry: "ES" },
  contactPoint: [{ "@type": "ContactPoint", contactType: "customer service", availableLanguage: ["Spanish", "English"], url: `${BASE}/contacto/` }],
  sameAs: [],
};

const localBizSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/#business`,
  name: BRAND,
  url: BASE,
  description: "Agencia de reputación y autoridad digital. Empresa registrada en España.",
  address: { "@type": "PostalAddress", addressCountry: "ES", addressRegion: "España" },
  priceRange: "€€€",
  // aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "47", bestRating: "5" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: BRAND,
  publisher: { "@id": `${BASE}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE}/blog/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body>
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4}', { anonymize_ip: true });
        `}</Script>
      </body>
    </html>
  );
}
