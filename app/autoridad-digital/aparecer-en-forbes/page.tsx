import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Aparecer en Forbes — Artículo Editorial en Forbes Argentina",
  description: "Publicamos artículos editoriales en Forbes Argentina. Honesto: Forbes Argentina, no la edición global. Desde 2.900€.",
  alternates: { canonical: "https://reputalia.es/autoridad-digital/aparecer-en-forbes/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Es Forbes de verdad?","acceptedAnswer":{"@type":"Answer","text":"Forbes Argentina es una edición con licencia de la marca Forbes, con redacción independiente. Es un medio real. No es Forbes global (EEUU). Siempre lo explicamos con exactitud."}},{"@type":"Question","name":"¿Es patrocinado o editorial?","acceptedAnswer":{"@type":"Answer","text":"Es artículo editorial, no publicitario. No aparece como BrandVoice ni contenido patrocinado."}},{"@type":"Question","name":"¿Para qué sirve concretamente?","acceptedAnswer":{"@type":"Answer","text":"Para tener un enlace verificable a Forbes que aparece en Google cuando buscan tu nombre. Facilita la creación del Knowledge Panel."}}]};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">Inicio</Link> ›{" "}
        <Link href="/autoridad-digital/" className="hover:text-stone-600">Autoridad digital</Link> ›{" "}
        <span className="text-stone-700">Aparecer en Forbes (editorial)</span>
      </nav>
      <header className="py-14 px-4" style={{background:"#0f1729"}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Aparecer en Forbes (editorial)</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-5">Gestionamos artículos editoriales en Forbes Argentina. Lo decimos claramente: es Forbes Argentina, una edición real de Forbes con licencia, no la edición global. Esta distinción nos separa del humo habitual.</p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <span>⏱ 6-12 semanas</span>
            <span>💶 2.900€–3.490€</span>
          </div>
        </div>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>1</div>
              <div><p className="font-semibold text-stone-900 text-sm">Evaluación del ángulo editorial</p><p className="text-xs text-stone-500 mt-0.5">Definimos el ángulo de la historia con más posibilidades de ser aceptado. No todo se publica.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>2</div>
              <div><p className="font-semibold text-stone-900 text-sm">Redacción y propuesta</p><p className="text-xs text-stone-500 mt-0.5">Redactamos la propuesta editorial y la sometemos al proceso de revisión de la redacción.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>3</div>
              <div><p className="font-semibold text-stone-900 text-sm">Publicación y entrega</p><p className="text-xs text-stone-500 mt-0.5">Tras aprobación, se publica el artículo. Recibes el enlace y los derechos de uso.</p></div>
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
                ¿Es Forbes de verdad?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Forbes Argentina es una edición con licencia de la marca Forbes, con redacción independiente. Es un medio real. No es Forbes global (EEUU). Siempre lo explicamos con exactitud.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Es patrocinado o editorial?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Es artículo editorial, no publicitario. No aparece como BrandVoice ni contenido patrocinado.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Para qué sirve concretamente?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Para tener un enlace verificable a Forbes que aparece en Google cuando buscan tu nombre. Facilita la creación del Knowledge Panel.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/autoridad-digital/knowledge-panel-google/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Knowledge Panel →</a>
            <a href="/autoridad-digital/salir-en-prensa/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Salir en prensa →</a>
            <a href="/autoridad-digital/wikipedia-perfil/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Pack wikis →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
