import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Qué hacer si te difaman en internet: guía práctica 2026",
  description: "Alguien publicó algo falso sobre ti en internet. Estos son los pasos exactos para actuar, las vías legales disponibles y cómo gestionar la retirada del contenido.",
  keywords: ["difamación internet", "me difaman en internet", "cómo actuar si te difaman", "eliminar difamación online", "calumnias en internet"],
  alternates: { canonical: "https://prestior.es/blog/que-hacer-si-me-difaman-en-internet/" },
  openGraph: {
    type: "article",
    title: "Qué hacer si te difaman en internet: guía práctica 2026",
    description: "Alguien publicó algo falso sobre ti en internet. Estos son los pasos exactos para actuar, las vías legales disponibles y cómo gestionar la retirada del contenido.",
    publishedTime: "2026-06-01",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Qué hacer si te difaman en internet",
  description: "Alguien publicó algo falso sobre ti en internet. Estos son los pasos exactos para actuar, las vías legales disponibles y cómo gestionar la retirada del contenido.",
  datePublished: "2026-06-01",
  publisher: { "@type": "Organization", "@id": "https://prestior.es/#organization", name: "Prestior" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://prestior.es/blog/que-hacer-si-me-difaman-en-internet/" },
};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
      <Nav />
      
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-2">
          <Link href="/blog/" className="text-xs text-stone-400 hover:text-stone-600">← Blog</Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-stone-900 mb-5 leading-tight">Qué hacer si te difaman en internet</h1>
        <p className="text-xl text-stone-600 leading-relaxed mb-8 border-l-4 border-amber-400 pl-4">Alguien publicó algo falso, dañino o difamatorio sobre ti en internet. ¿Qué haces? Esta guía te explica los pasos exactos, desde los primeros 24 horas hasta la gestión legal.</p>
        
        <div className="prose prose-stone max-w-none">
          <h2 className="text-xl font-bold text-stone-900 mt-10 mb-4">Primer paso: documenta todo antes de actuar</h2>
          <p className="text-stone-600 leading-relaxed">Antes de reportar o contactar a nadie, haz capturas de pantalla completas del contenido: la URL visible, la fecha de publicación, el nombre del perfil o página que lo publicó y el contenido completo. Herramienta recomendada: archive.org/save para crear un registro oficial con fecha. Esto es tu evidencia. Sin ella, cualquier gestión posterior es más difícil.</p>

          <h2 className="text-xl font-bold text-stone-900 mt-10 mb-4">Segundo: identifica el tipo de contenido y la plataforma</h2>
          <p className="text-stone-600 leading-relaxed">La estrategia de retirada depende de dónde está publicado y qué tipo de contenido es. Una reseña falsa en Google se gestiona de forma diferente a un artículo difamatorio en un blog. Un perfil de suplantación en Instagram tiene su propia vía de denuncia. Un vídeo en YouTube tiene el proceso DMCA. Identifica la plataforma exacta y el tipo de contenido antes de actuar.</p>

          <h2 className="text-xl font-bold text-stone-900 mt-10 mb-4">Tercer paso: reporta directamente en la plataforma</h2>
          <p className="text-stone-600 leading-relaxed">La mayoría de plataformas tiene mecanismos de reporte para contenido falso o difamatorio. Instagram, Google, YouTube, TikTok y Twitter/X tienen formularios específicos. La efectividad varía enormemente: algunas plataformas actúan en 48 horas, otras tardan semanas o ignoran el reporte si no se presenta con la documentación correcta.</p>

          <h2 className="text-xl font-bold text-stone-900 mt-10 mb-4">Cuarto: derecho al olvido y vías legales</h2>
          <p className="text-stone-600 leading-relaxed">Si el contenido aparece en los resultados de Google y cumple los criterios del RGPD (información obsoleta, irrelevante o perjudicial sin interés público), puedes ejercer el derecho al olvido. Si el contenido es claramente difamatorio, existe la vía de requerimiento legal al responsable de la web. En casos graves, la vía penal para calumnias e injurias (artículos 205 y siguientes del Código Penal).</p>

          <h2 className="text-xl font-bold text-stone-900 mt-10 mb-4">Cuándo necesitas ayuda profesional</h2>
          <p className="text-stone-600 leading-relaxed">Si la plataforma no responde, si el contenido está en múltiples sitios, si el proceso legal te supera, o si el daño reputacional es significativo, la gestión profesional tiene más herramientas. No porque tenga magia, sino porque conoce exactamente qué documentación presenta, a qué canal y en qué formato. Esa diferencia puede significar semanas de diferencia en el resultado.</p>
        </div>

        <div className="mt-12 bg-stone-950 text-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-black mb-2">¿Te están difamando online?</h3>
          <p className="text-slate-400 text-sm mb-5">Análisis gratuito sin compromiso. Respuesta en 24 horas.</p>
          <Link href="/proteccion-reputacion/difamacion-online/"
            className="inline-flex font-bold px-7 py-3.5 rounded-xl text-sm"
            style={{background:"#c9a84c", color:"#0f1729"}}>
            Solicitar análisis gratuito →
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-stone-200">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Artículos relacionados</p>
          <div className="flex flex-wrap gap-3">
              <Link href="/proteccion-reputacion/difamacion-online/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Difamación online →</Link>
              <Link href="/proteccion-reputacion/derecho-al-olvido/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Derecho al olvido →</Link>
              <Link href="/proteccion-reputacion/suplantacion-identidad/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Suplantación →</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
