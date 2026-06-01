// Centralized schema components — imported by every page

const BASE = "https://prestior.es";

interface BreadcrumbItem { name: string; href: string }

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.href}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ServiceSchema({
  name, description, url, price, areaServed = "ES",
}: {
  name: string; description: string; url: string; price?: string; areaServed?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE}${url}`,
    provider: { "@type": "Organization", "@id": `${BASE}/#organization`, name: "Prestior" },
    areaServed: { "@type": "Country", name: areaServed === "ES" ? "Spain" : areaServed },
    ...(price ? { offers: { "@type": "Offer", price, priceCurrency: "EUR" } } : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function FaqSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// Para cuando tengas reseñas reales de Trustpilot/Google
export function ReviewSchema({ reviews, ratingValue, reviewCount }: {
  reviews: { author: string; text: string; rating: number }[];
  ratingValue: string;
  reviewCount: number;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE}/#business`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map(r => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5, worstRating: 1 },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// Trustpilot widget loader — añadir cuando tengas cuenta
export function TrustpilotWidget({ businessUnitId }: { businessUnitId?: string }) {
  if (!businessUnitId) return null;
  return (
    <>
      <script async src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" />
      <div
        className="trustpilot-widget"
        data-locale="es-ES"
        data-template-id="53aa8807dec7e10d38f59f32"
        data-businessunit-id={businessUnitId}
        data-style-height="150px"
        data-style-width="100%"
        data-theme="light"
      >
        <a href={`https://es.trustpilot.com/review/${businessUnitId}`} target="_blank" rel="noopener noreferrer">Trustpilot</a>
      </div>
    </>
  );
}
