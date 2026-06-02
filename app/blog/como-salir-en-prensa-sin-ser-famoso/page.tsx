import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cómo salir en prensa siendo un desconocido: guía honesta 2026",
  description: "Salir en prensa es posible sin ser famoso. Esta guía explica exactamente cómo funciona el proceso real (no la versión vendehúmos) para aparecer en medios de forma editorial.",
  keywords: ["como salir en prensa", "aparecer en prensa sin ser famoso", "salir en medios", "relaciones con prensa", "aparecer en forbes"],
  alternates: { canonical: "https://prestior.es/blog/como-salir-en-prensa-sin-ser-famoso/" },
  openGraph: {
    type: "article",
    title: "Cómo salir en prensa siendo un desconocido: guía honesta 2026",
    description: "Salir en prensa es posible sin ser famoso. Esta guía explica exactamente cómo funciona el proceso real (no la versión vendehúmos) para aparecer en medios de forma editorial.",
    publishedTime: "2026-06-01",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo salir en prensa siendo un desconocido (guía honesta)",
  description: "Salir en prensa es posible sin ser famoso. Esta guía explica exactamente cómo funciona el proceso real (no la versión vendehúmos) para aparecer en medios de forma editorial.",
  datePublished: "2026-06-01",
  publisher: { "@type": "Organization", "@id": "https://prestior.es/#organization", name: "Prestior" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://prestior.es/blog/como-salir-en-prensa-sin-ser-famoso/" },
};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
      <Nav />
      
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-2">
          <Link href="/blog/" className="text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>← Blog</Link>
        </div>
        <h1 className="font-display font-black text-white mb-5 leading-tight">Cómo salir en prensa siendo un desconocido (guía honesta)</h1>
        <p className="text-lg leading-relaxed mb-8 border-l-4 border-amber-400 pl-4" style={{color:"rgba(238,240,244,0.5)"}}>Muchos coaches y empresarios quieren salir en prensa. Muchos servicios prometen cosas imposibles. Esta guía explica cómo funciona de verdad, qué es alcanzable para quién, y qué diferencia hay entre editorial y patrocinado.</p>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="font-display font-bold text-white mt-10 mb-4">La diferencia entre editorial y patrocinado (y por qué importa)</h2>
          <p className="text-white/60 leading-relaxed">Editorial: el medio decide publicar porque considera que la historia tiene valor informativo o de interés para sus lectores. El periodista o editor lo aprueba. El resultado aparece entre las noticias normales. Patrocinado (BrandVoice, contenido de marca): la empresa paga para publicar un artículo que parece editorial pero está marcado como publicidad. Tiene valor para SEO (backlink de autoridad), pero menor credibilidad. Muchos servicios de "aparecer en Forbes" venden BrandVoice como si fuera editorial. No es lo mismo.</p>

          <h2 className="font-display font-bold text-white mt-10 mb-4">Qué medios son accesibles para quién</h2>
          <p className="text-white/60 leading-relaxed">Para la mayoría de profesionales y empresarios sin perfil público previo: medios regionales y sectoriales (alta tasa de éxito, bajo coste), Forbes Argentina o Entrepreneur LATAM editorial (accesible con historia sólida y proveedor adecuado), medios nacionales españoles de segundo nivel. Para quienes ya tienen perfil: medios nacionales de primer nivel. Para figuras con impacto internacional real: NYPost, BBC, Wired (proceso muy largo y costoso). La clave es calibrar qué es realista según tu perfil actual.</p>

          <h2 className="font-display font-bold text-white mt-10 mb-4">Cómo se consigue una aparición editorial real</h2>
          <p className="text-white/60 leading-relaxed">El proceso real: 1) Identificar el ángulo de la historia (qué tiene de interesante para los lectores del medio). 2) Hacer el pitch correcto al periodista o redactor adecuado. 3) Tener material de apoyo: historia verificable, fotos, datos. 4) Tener paciencia: los medios no publican al ritmo del cliente. El error más común: pensar que "mis logros" son automáticamente interesantes para el medio. La pregunta correcta es: ¿por qué le interesa esto a los lectores del medio?</p>

          <h2 className="font-display font-bold text-white mt-10 mb-4">El valor real de aparecer en prensa para tu reputación</h2>
          <p className="text-white/60 leading-relaxed">Un artículo en Forbes (Argentina o global) cumple varias funciones: genera un backlink de alta autoridad que mejora tu posicionamiento en Google, aparece en los resultados cuando buscan tu nombre, y facilita la activación del Knowledge Panel de Google porque es una fuente que Google reconoce. El retorno no es solo "ser famoso" — es construcción de autoridad verificable y documentada.</p>
        </div>

        <div className="mt-12 bg-stone-950 text-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-black mb-2">¿Quieres aparecer en medios de forma editorial?</h3>
          <p className="text-white/40 text-sm mb-5">Análisis gratuito sin compromiso. Respuesta en 24 horas.</p>
          <Link href="/autoridad-digital/salir-en-prensa/"
            className="inline-flex font-bold px-7 py-3.5 rounded-xl text-sm"
            style={{background:"#c9a84c", color:"#0f1729"}}>
            Solicitar análisis gratuito →
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.07]">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Artículos relacionados</p>
          <div className="flex flex-wrap gap-3">
              <Link href="/autoridad-digital/salir-en-prensa/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Salir en prensa →</Link>
              <Link href="/autoridad-digital/aparecer-en-forbes/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Aparecer en Forbes →</Link>
              <Link href="/autoridad-digital/marca-personal-google/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Marca personal →</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
