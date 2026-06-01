import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Salir en Prensa — Apariciones en Medios Nacionales e Internacionales",
  description: "Gestionamos apariciones editoriales en medios nacionales e internacionales. NYPost, BBC, Wired, medios españoles. Desde 2.900€.",
  alternates: { canonical: "https://reputalia.es/autoridad-digital/salir-en-prensa/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué medios cubrís?","acceptedAnswer":{"@type":"Answer","text":"Medios españoles, Forbes Argentina, y pack medios top: NYPost, BBC, Wired, PageSix, People. Cada uno con su precio real."}},{"@type":"Question","name":"¿Es editorial o publicitario?","acceptedAnswer":{"@type":"Answer","text":"Siempre editorial cuando lo describimos como editorial. Nunca confundimos artículo de pago con cobertura orgánica."}},{"@type":"Question","name":"¿Cuánto impacta en Google?","acceptedAnswer":{"@type":"Answer","text":"Un artículo en medio de alta autoridad genera backlink de calidad y puede aparecer al buscar tu nombre. Combinado con Knowledge Panel, el efecto es muy significativo."}}]};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">Inicio</Link> ›{" "}
        <Link href="/autoridad-digital/" className="hover:text-stone-600">Autoridad digital</Link> ›{" "}
        <span className="text-stone-700">Salir en prensa y medios</span>
      </nav>
      <header className="py-14 px-4" style={{background:"#0f1729"}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Salir en prensa y medios</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-5">Apariciones editoriales en medios de referencia nacionales e internacionales. Desde medios españoles hasta NYPost, BBC, Wired o People. Siempre editorial, siempre nombrando el medio correcto.</p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <span>⏱ 4-16 semanas</span>
            <span>💶 Desde 2.900€ · Pack top: 6.900€–7.900€</span>
          </div>
        </div>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>1</div>
              <div><p className="font-semibold text-stone-900 text-sm">Estrategia editorial</p><p className="text-xs text-stone-500 mt-0.5">Definimos qué medios son alcanzables, qué ángulo tiene más posibilidades y el presupuesto adecuado.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>2</div>
              <div><p className="font-semibold text-stone-900 text-sm">Gestión con redacciones</p><p className="text-xs text-stone-500 mt-0.5">Trabajamos directamente con redacciones o proveedores verificados para colocar el artículo.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>3</div>
              <div><p className="font-semibold text-stone-900 text-sm">Publicación y entrega</p><p className="text-xs text-stone-500 mt-0.5">Artículo publicado con enlace permanente. Informe de resultados.</p></div>
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
                ¿Qué medios cubrís?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Medios españoles, Forbes Argentina, y pack medios top: NYPost, BBC, Wired, PageSix, People. Cada uno con su precio real.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Es editorial o publicitario?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Siempre editorial cuando lo describimos como editorial. Nunca confundimos artículo de pago con cobertura orgánica.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Cuánto impacta en Google?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Un artículo en medio de alta autoridad genera backlink de calidad y puede aparecer al buscar tu nombre. Combinado con Knowledge Panel, el efecto es muy significativo.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/autoridad-digital/aparecer-en-forbes/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Forbes Argentina →</a>
            <a href="/autoridad-digital/knowledge-panel-google/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Knowledge Panel →</a>
            <a href="/autoridad-digital/marca-personal-google/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Marca personal →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
