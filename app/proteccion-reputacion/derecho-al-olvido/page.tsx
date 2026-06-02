import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Derecho al Olvido en Google — Desindexar Resultados",
  description: "Ejercemos el derecho al olvido ante Google para desindexar resultados obsoletos o perjudiciales. RGPD. Empresa registrada en España.",
  alternates: { canonical: "https://prestior.es/proteccion-reputacion/derecho-al-olvido/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué contenido se puede desindexar?","acceptedAnswer":{"@type":"Answer","text":"Información obsoleta, datos personales excesivos, noticias antiguas irrelevantes. No se puede desindexar contenido de interés público legítimo."}},{"@type":"Question","name":"¿Cuánto tarda Google en responder?","acceptedAnswer":{"@type":"Answer","text":"Suele responder en 2-6 semanas. Si desestima, se puede recurrir ante la AEPD."}},{"@type":"Question","name":"¿Se borra el contenido de internet?","acceptedAnswer":{"@type":"Answer","text":"No. Solo se desindexan los resultados en Google España y UE. El contenido puede seguir en la web origen."}}]};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Protecci\u00f3n\", \"item\": \"https://prestior.es/proteccion-reputacion/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Derecho al olvido\", \"item\": \"https://prestior.es/proteccion-reputacion/derecho-al-olvido/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> ›{" "}
        <Link href="/proteccion-reputacion/" className="hover:text-white/70 transition-colors">Protección de reputación</Link> ›{" "}
        <span className="text-white/80">Derecho al olvido en Google</span>
      </nav>
      <header className="py-14 px-5 relative overflow-hidden" style={{background:"var(--bg-2)"}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-white mb-4" style={{fontSize:"clamp(2rem,4vw,3rem)"}}>Derecho al olvido en Google</h1>
          <p className="text-lg max-w-2xl mb-5" style={{color:"rgba(238,240,244,0.45)",fontWeight:300}}>El RGPD reconoce tu derecho a solicitar a Google que desindexe resultados con información obsoleta, irrelevante o perjudicial. Gestionamos el proceso formal ante Google y, si es necesario, ante la AEPD.</p>
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            <span>⏱ 3-8 semanas</span>
            <span>💶 Desde 690€</span>
          </div>
        </div>
      </header>
      <section className="py-8 md:py-12 px-5" style={{background:"var(--bg)"}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >1</div>
              <div><p className="font-semibold text-white text-sm">Análisis de elegibilidad</p><p className="text-xs text-white/40 mt-0.5">Evaluamos qué resultados son elegibles para desindexación según el RGPD y la jurisprudencia del TJUE.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >2</div>
              <div><p className="font-semibold text-white text-sm">Preparación del expediente</p><p className="text-xs text-white/40 mt-0.5">Redactamos la solicitud formal con la argumentación legal y la documentación de soporte.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >3</div>
              <div><p className="font-semibold text-white text-sm">Presentación y seguimiento</p><p className="text-xs text-white/40 mt-0.5">Enviamos la solicitud a Google y la AEPD si es necesario. Seguimiento hasta resolución.</p></div>
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
                ¿Qué contenido se puede desindexar?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Información obsoleta, datos personales excesivos, noticias antiguas irrelevantes. No se puede desindexar contenido de interés público legítimo.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Cuánto tarda Google en responder?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Suele responder en 2-6 semanas. Si desestima, se puede recurrir ante la AEPD.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Se borra el contenido de internet?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">No. Solo se desindexan los resultados en Google España y UE. El contenido puede seguir en la web origen.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-5" style={{background:"var(--bg)"}}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/proteccion-reputacion/eliminar-noticias-google/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Eliminar noticias →</a>
            <a href="/proteccion-reputacion/difamacion-online/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Difamación →</a>
            <a href="/autoridad-digital/marca-personal-google/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Marca personal →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
