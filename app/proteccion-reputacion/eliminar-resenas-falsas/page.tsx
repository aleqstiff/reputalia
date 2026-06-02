import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Eliminar Reseñas Falsas en Google — Disputa Oficial",
  description: "Gestionamos la retirada de reseñas falsas o de no-clientes en Google. Análisis previo gratuito. Desde 99€ por reseña.",
  alternates: { canonical: "https://prestior.es/proteccion-reputacion/eliminar-resenas-falsas/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué reseñas pueden eliminarse?","acceptedAnswer":{"@type":"Answer","text":"Las que violan políticas de Google: falsas, de no-clientes, difamatorias, de bots coordinados o parte de un ataque organizado."}},{"@type":"Question","name":"¿Se pueden eliminar reseñas negativas reales?","acceptedAnswer":{"@type":"Answer","text":"No. Las reseñas de clientes reales no se pueden eliminar solo por ser desfavorables."}},{"@type":"Question","name":"¿Cuánto tarda?","acceptedAnswer":{"@type":"Answer","text":"Entre 7 y 30 días por reseña. El proceso urgente tiene mayor prioridad."}}]};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Protecci\u00f3n\", \"item\": \"https://prestior.es/proteccion-reputacion/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Rese\u00f1as falsas\", \"item\": \"https://prestior.es/proteccion-reputacion/eliminar-resenas-falsas/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> ›{" "}
        <Link href="/proteccion-reputacion/" className="hover:text-white/70 transition-colors">Protección de reputación</Link> ›{" "}
        <span className="text-white/80">Eliminar reseñas falsas en Google</span>
      </nav>
      <header className="py-14 px-5 relative overflow-hidden" style={{background:"var(--bg-2)"}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-white mb-4" style={{fontSize:"clamp(2rem,4vw,3rem)"}}>Eliminar reseñas falsas en Google</h1>
          <p className="text-lg max-w-2xl mb-5" style={{color:"rgba(238,240,244,0.45)",fontWeight:300}}>Las reseñas de personas que nunca fueron tus clientes o con contenido difamatorio violan las políticas de Google. Gestionamos su retirada por la vía oficial.</p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <span>⏱ 7-30 días por reseña</span>
            <span>💶 Desde 99€/reseña</span>
          </div>
        </div>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-white/[0.07]">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"var(--bg-2)"}}>1</div>
              <div><p className="font-semibold text-stone-900 text-sm">Análisis de las reseñas</p><p className="text-xs text-stone-500 mt-0.5">Revisamos cada reseña para identificar cuáles son eliminables y por qué motivo.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-white/[0.07]">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"var(--bg-2)"}}>2</div>
              <div><p className="font-semibold text-stone-900 text-sm">Disputa oficial a Google</p><p className="text-xs text-stone-500 mt-0.5">Presentamos la disputa formal con documentación que justifica la violación de políticas.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-white/[0.07]">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"var(--bg-2)"}}>3</div>
              <div><p className="font-semibold text-stone-900 text-sm">Escalación si es necesario</p><p className="text-xs text-stone-500 mt-0.5">Si la disputa no prospera, escalamos. En casos de contenido difamatorio, incluimos vía legal.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4" style={{background:"var(--bg-2)"}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-3">
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Qué reseñas pueden eliminarse?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-white/[0.07] pt-3 leading-relaxed">Las que violan políticas de Google: falsas, de no-clientes, difamatorias, de bots coordinados o parte de un ataque organizado.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Se pueden eliminar reseñas negativas reales?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-white/[0.07] pt-3 leading-relaxed">No. Las reseñas de clientes reales no se pueden eliminar solo por ser desfavorables.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Cuánto tarda?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-white/[0.07] pt-3 leading-relaxed">Entre 7 y 30 días por reseña. El proceso urgente tiene mayor prioridad.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/proteccion-reputacion/difamacion-online/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Difamación online →</a>
            <a href="/proteccion-reputacion/derecho-al-olvido/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Derecho al olvido →</a>
            <a href="/monitorizacion-reputacion/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Monitorización →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
