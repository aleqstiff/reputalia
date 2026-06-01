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
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Protecci\u00f3n\", \"item\": \"https://prestior.es/proteccion-reputacion/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Derecho al olvido\", \"item\": \"https://prestior.es/proteccion-reputacion/derecho-al-olvido/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">Inicio</Link> ›{" "}
        <Link href="/proteccion-reputacion/" className="hover:text-stone-600">Protección de reputación</Link> ›{" "}
        <span className="text-stone-700">Derecho al olvido en Google</span>
      </nav>
      <header className="py-14 px-4" style={{background:"#0f1729"}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Derecho al olvido en Google</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-5">El RGPD reconoce tu derecho a solicitar a Google que desindexe resultados con información obsoleta, irrelevante o perjudicial. Gestionamos el proceso formal ante Google y, si es necesario, ante la AEPD.</p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <span>⏱ 3-8 semanas</span>
            <span>💶 Desde 690€</span>
          </div>
        </div>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>1</div>
              <div><p className="font-semibold text-stone-900 text-sm">Análisis de elegibilidad</p><p className="text-xs text-stone-500 mt-0.5">Evaluamos qué resultados son elegibles para desindexación según el RGPD y la jurisprudencia del TJUE.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>2</div>
              <div><p className="font-semibold text-stone-900 text-sm">Preparación del expediente</p><p className="text-xs text-stone-500 mt-0.5">Redactamos la solicitud formal con la argumentación legal y la documentación de soporte.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>3</div>
              <div><p className="font-semibold text-stone-900 text-sm">Presentación y seguimiento</p><p className="text-xs text-stone-500 mt-0.5">Enviamos la solicitud a Google y la AEPD si es necesario. Seguimiento hasta resolución.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4" style={{background:"#f5f4f1"}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-3">
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Qué contenido se puede desindexar?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Información obsoleta, datos personales excesivos, noticias antiguas irrelevantes. No se puede desindexar contenido de interés público legítimo.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Cuánto tarda Google en responder?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Suele responder en 2-6 semanas. Si desestima, se puede recurrir ante la AEPD.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Se borra el contenido de internet?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">No. Solo se desindexan los resultados en Google España y UE. El contenido puede seguir en la web origen.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/proteccion-reputacion/eliminar-noticias-google/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Eliminar noticias →</a>
            <a href="/proteccion-reputacion/difamacion-online/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Difamación →</a>
            <a href="/autoridad-digital/marca-personal-google/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Marca personal →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
