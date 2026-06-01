import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Knowledge Panel Google — Crear Panel de Conocimiento",
  description: "Creamos tu Knowledge Panel en Google. Panel personal para profesionales (790€) y panel de empresa (390€). Plazo 4-8 semanas.",
  alternates: { canonical: "https://reputalia.es/autoridad-digital/knowledge-panel-google/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Cualquiera puede tener Knowledge Panel?","acceptedAnswer":{"@type":"Answer","text":"No. Google exige un nivel mínimo de notabilidad documentada. Si no cumples los requisitos, te lo decimos antes de empezar."}},{"@type":"Question","name":"¿Cuánto dura el panel?","acceptedAnswer":{"@type":"Answer","text":"Se mantiene mientras existan las fuentes que lo alimentan. Por eso recomendamos retainer de mantenimiento."}},{"@type":"Question","name":"¿Qué diferencia hay entre panel personal y de empresa?","acceptedAnswer":{"@type":"Answer","text":"El personal requiere más trabajo de construcción de entidad. El de empresa es más directo si ya hay presencia web y medios."}}]};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">Inicio</Link> ›{" "}
        <Link href="/autoridad-digital/" className="hover:text-stone-600">Autoridad digital</Link> ›{" "}
        <span className="text-stone-700">Knowledge Panel en Google</span>
      </nav>
      <header className="py-14 px-4" style={{background:"#0f1729"}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Knowledge Panel en Google</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-5">El Knowledge Panel es el recuadro de información que Google muestra sobre personas y empresas en los resultados de búsqueda. Es la señal de autoridad más potente que existe en Google.</p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <span>⏱ 4-8 semanas</span>
            <span>💶 Personal: 790€–890€ · Empresa: 390€–490€</span>
          </div>
        </div>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>1</div>
              <div><p className="font-semibold text-stone-900 text-sm">Auditoría de elegibilidad</p><p className="text-xs text-stone-500 mt-0.5">Analizamos si cumples los requisitos de notabilidad que Google exige. Te decimos la verdad antes de cobrar.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>2</div>
              <div><p className="font-semibold text-stone-900 text-sm">Construcción de la entidad</p><p className="text-xs text-stone-500 mt-0.5">Creamos o optimizamos las fuentes que Google usa: Wikidata, perfiles verificados, menciones en medios.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>3</div>
              <div><p className="font-semibold text-stone-900 text-sm">Activación y verificación</p><p className="text-xs text-stone-500 mt-0.5">Gestionamos la activación del panel y la verificación de propiedad una vez aparece.</p></div>
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
                ¿Cualquiera puede tener Knowledge Panel?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">No. Google exige un nivel mínimo de notabilidad documentada. Si no cumples los requisitos, te lo decimos antes de empezar.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Cuánto dura el panel?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Se mantiene mientras existan las fuentes que lo alimentan. Por eso recomendamos retainer de mantenimiento.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Qué diferencia hay entre panel personal y de empresa?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">El personal requiere más trabajo de construcción de entidad. El de empresa es más directo si ya hay presencia web y medios.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/autoridad-digital/aparecer-en-forbes/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Aparecer en Forbes →</a>
            <a href="/autoridad-digital/marca-personal-google/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Marca personal →</a>
            <a href="/autoridad-digital/salir-en-prensa/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Salir en prensa →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
