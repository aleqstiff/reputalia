import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Eliminar Contenido Íntimo Filtrado — Gestión Urgente",
  description: "Gestión urgente de retirada de fotos y vídeos íntimos publicados sin consentimiento. DMCA, denuncias legales. Confidencialidad absoluta.",
  alternates: { canonical: "https://prestior.es/proteccion-reputacion/contenido-intimo-filtrado/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Es confidencial el proceso?","acceptedAnswer":{"@type":"Answer","text":"Sí, completamente. Toda la gestión se realiza con máxima discreción. No compartimos información con terceros."}},{"@type":"Question","name":"¿Hay urgencia real?","acceptedAnswer":{"@type":"Answer","text":"Sí. Cuanto antes se actúe, menos se propaga el contenido. Priorizamos para inicio el mismo día."}},{"@type":"Question","name":"¿Se elimina de todos lados?","acceptedAnswer":{"@type":"Answer","text":"De la mayoría de plataformas sí. Algunos sitios en jurisdicciones sin cooperación son más difíciles. Lo informamos antes de empezar."}}]};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Protecci\u00f3n\", \"item\": \"https://prestior.es/proteccion-reputacion/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Contenido \u00edntimo\", \"item\": \"https://prestior.es/proteccion-reputacion/contenido-intimo-filtrado/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> ›{" "}
        <Link href="/proteccion-reputacion/" className="hover:text-white/70 transition-colors">Protección de reputación</Link> ›{" "}
        <span className="text-white/80">Eliminar contenido íntimo filtrado</span>
      </nav>
      <header className="py-14 px-5 relative overflow-hidden" style={{background:"var(--bg-2)"}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-white mb-4" style={{fontSize:"clamp(2rem,4vw,3rem)"}}>Eliminar contenido íntimo filtrado</h1>
          <p className="text-lg max-w-2xl mb-5" style={{color:"rgba(238,240,244,0.45)",fontWeight:300}}>La publicación de imágenes íntimas sin consentimiento es ilegal en España y la UE. Gestionamos la retirada urgente por las vías más efectivas con confidencialidad absoluta.</p>
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            <span>⏱ Urgente — inicio el mismo día</span>
            <span>💶 Desde 890€</span>
          </div>
        </div>
      </header>
      <section className="py-8 md:py-12 px-5" style={{background:"var(--bg)"}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >1</div>
              <div><p className="font-semibold text-white text-sm">Evaluación urgente</p><p className="text-xs text-white/40 mt-0.5">Análisis inmediato del alcance: dónde está publicado y qué vías de retirada son más rápidas.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >2</div>
              <div><p className="font-semibold text-white text-sm">DMCA y denuncias a plataformas</p><p className="text-xs text-white/40 mt-0.5">Reclamaciones DMCA y denuncias directas a plataformas con documentación legal correcta.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >3</div>
              <div><p className="font-semibold text-white text-sm">Seguimiento y desindexación</p><p className="text-xs text-white/40 mt-0.5">Gestionamos también la desindexación de Google Images. Seguimiento hasta eliminación.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12 px-5"  style={{background:"var(--bg-2)"}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-6">Preguntas frecuentes</h2>
          <div className="space-y-3">
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Es confidencial el proceso?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Sí, completamente. Toda la gestión se realiza con máxima discreción. No compartimos información con terceros.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Hay urgencia real?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Sí. Cuanto antes se actúe, menos se propaga el contenido. Priorizamos para inicio el mismo día.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Se elimina de todos lados?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">De la mayoría de plataformas sí. Algunos sitios en jurisdicciones sin cooperación son más difíciles. Lo informamos antes de empezar.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-5" style={{background:"var(--bg)"}}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/proteccion-reputacion/dmca-eliminacion-contenido/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">DMCA copyright →</a>
            <a href="/proteccion-reputacion/eliminar-contenido-onlyfans/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">OnlyFans filtrado →</a>
            <a href="/proteccion-reputacion/eliminar-web-falsa/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Web falsa →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
