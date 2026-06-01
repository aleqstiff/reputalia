import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Qué es el Knowledge Panel de Google y cómo conseguirlo en 2026",
  description: "El Knowledge Panel de Google es el recuadro de información que aparece al buscar una persona o empresa. Esta guía explica exactamente qué es, para qué sirve y cómo conseguirlo.",
  keywords: ["knowledge panel google", "panel conocimiento google", "cómo conseguir knowledge panel", "knowledge panel empresa", "knowledge panel persona"],
  alternates: { canonical: "https://prestior.es/blog/que-es-el-knowledge-panel-google/" },
  openGraph: {
    type: "article",
    title: "Qué es el Knowledge Panel de Google y cómo conseguirlo en 2026",
    description: "El Knowledge Panel de Google es el recuadro de información que aparece al buscar una persona o empresa. Esta guía explica exactamente qué es, para qué sirve y cómo conseguirlo.",
    publishedTime: "2026-06-01",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Qué es el Knowledge Panel de Google y cómo conseguirlo",
  description: "El Knowledge Panel de Google es el recuadro de información que aparece al buscar una persona o empresa. Esta guía explica exactamente qué es, para qué sirve y cómo conseguirlo.",
  datePublished: "2026-06-01",
  publisher: { "@type": "Organization", "@id": "https://prestior.es/#organization", name: "Prestior" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://prestior.es/blog/que-es-el-knowledge-panel-google/" },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
      <Nav />
      
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-2">
          <Link href="/blog/" className="text-xs text-stone-400 hover:text-stone-600">← Blog</Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-stone-900 mb-5 leading-tight">Qué es el Knowledge Panel de Google y cómo conseguirlo</h1>
        <p className="text-xl text-stone-600 leading-relaxed mb-8 border-l-4 border-amber-400 pl-4">El Knowledge Panel es ese recuadro que aparece a la derecha en Google cuando buscas una persona o empresa. Es la señal de autoridad más visible de Google. Esta guía explica exactamente qué es y cómo se consigue.</p>
        
        <div className="prose prose-stone max-w-none">
          <h2 className="text-xl font-bold text-stone-900 mt-10 mb-4">Qué es el Knowledge Panel</h2>
          <p className="text-stone-600 leading-relaxed">El Knowledge Panel es el recuadro de información que Google muestra en los resultados de búsqueda cuando alguien busca el nombre de una persona, empresa o marca reconocida. Aparece a la derecha en desktop y en la parte superior en móvil. Muestra: nombre, descripción, imagen, web oficial, perfiles en redes, y información relevante. Para las personas, puede incluir cargo, obras, nacimiento, etc. Para empresas: descripción, horarios, ubicación, reseñas.</p>

          <h2 className="text-xl font-bold text-stone-900 mt-10 mb-4">Por qué importa para tu negocio o marca personal</h2>
          <p className="text-stone-600 leading-relaxed">El Knowledge Panel comunica varias cosas simultáneamente: que Google te reconoce como una entidad legítima, que tienes suficiente presencia digital para merecer el panel, y que la información oficial sobre ti está controlada. Estudios de eyetracking muestran que el Knowledge Panel capta la atención antes que cualquier otro resultado. Para coaches, directivos, marcas y empresas, su presencia puede marcar la diferencia entre una venta y una duda.</p>

          <h2 className="text-xl font-bold text-stone-900 mt-10 mb-4">Qué necesita Google para crear un Knowledge Panel</h2>
          <p className="text-stone-600 leading-relaxed">Google construye el Knowledge Panel a partir de fuentes de datos estructurados: Wikidata (la base de datos de Wikimedia), perfiles en plataformas reconocidas (LinkedIn, Twitter/X, Crunchbase, IMDb), menciones en medios de referencia, y datos estructurados en la web oficial. No existe un botón para "activar" el panel. Se construye cuando Google tiene suficientes fuentes consistentes sobre una entidad.</p>

          <h2 className="text-xl font-bold text-stone-900 mt-10 mb-4">El proceso real para conseguirlo</h2>
          <p className="text-stone-600 leading-relaxed">Los pasos para activar un Knowledge Panel: 1) Crear y verificar perfiles en Wikidata con la información correcta. 2) Crear o completar perfiles en FoundersWiki, WikiAlpha, Crunchbase según el perfil. 3) Tener menciones en medios de autoridad (Forbes, prensa nacional). 4) Tener datos estructurados sameAs en la web oficial. 5) Esperar a que Google rastreé e indexe todas las fuentes. El plazo suele ser 4-8 semanas desde que todas las fuentes están establecidas.</p>
        </div>

        <div className="mt-12 bg-stone-950 text-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-black mb-2">¿Quieres tener Knowledge Panel en Google?</h3>
          <p className="text-slate-400 text-sm mb-5">Análisis gratuito sin compromiso. Respuesta en 24 horas.</p>
          <Link href="/autoridad-digital/knowledge-panel-google/"
            className="inline-flex font-bold px-7 py-3.5 rounded-xl text-sm"
            style={{background:"#c9a84c", color:"#0f1729"}}>
            Solicitar análisis gratuito →
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-stone-200">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Artículos relacionados</p>
          <div className="flex flex-wrap gap-3">
              <Link href="/autoridad-digital/knowledge-panel-google/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Crear Knowledge Panel →</Link>
              <Link href="/autoridad-digital/aparecer-en-forbes/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Aparecer en Forbes →</Link>
              <Link href="/autoridad-digital/marca-personal-google/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Marca personal →</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
