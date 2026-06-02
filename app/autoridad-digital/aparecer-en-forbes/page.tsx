import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Aparecer en Forbes — Artículo Editorial en Forbes Argentina",
  description: "Publicamos artículos editoriales en Forbes Argentina. Honesto: Forbes Argentina, no la edición global. Desde 2.900€.",
  alternates: { canonical: "https://prestior.es/autoridad-digital/aparecer-en-forbes/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Es Forbes de verdad?","acceptedAnswer":{"@type":"Answer","text":"Forbes Argentina es una edición con licencia de la marca Forbes, con redacción independiente. Es un medio real. No es Forbes global (EEUU). Siempre lo explicamos con exactitud."}},{"@type":"Question","name":"¿Es patrocinado o editorial?","acceptedAnswer":{"@type":"Answer","text":"Es artículo editorial, no publicitario. No aparece como BrandVoice ni contenido patrocinado."}},{"@type":"Question","name":"¿Para qué sirve concretamente?","acceptedAnswer":{"@type":"Answer","text":"Para tener un enlace verificable a Forbes que aparece en Google cuando buscan tu nombre. Facilita la creación del Knowledge Panel."}}]};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Autoridad\", \"item\": \"https://prestior.es/autoridad-digital/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Forbes\", \"item\": \"https://prestior.es/autoridad-digital/aparecer-en-forbes/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> ›{" "}
        <Link href="/autoridad-digital/" className="hover:text-white/70 transition-colors">Autoridad digital</Link> ›{" "}
        <span className="text-white/80">Aparecer en Forbes (editorial)</span>
      </nav>
      <header className="py-14 px-5 relative overflow-hidden" >
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-white mb-4" style={{fontSize:"clamp(2rem,4vw,3rem)"}}>Aparecer en Forbes (editorial)</h1>
          <p className="text-lg max-w-2xl mb-5" style={{color:"rgba(238,240,244,0.45)",fontWeight:300}}>Gestionamos artículos editoriales en Forbes Argentina. Lo decimos claramente: es Forbes Argentina, una edición real de Forbes con licencia, no la edición global. Esta distinción nos separa del humo habitual.</p>
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            <span>⏱ 6-12 semanas</span>
            <span>💶 2.900€–3.490€</span>
          </div>
        </div>
      </header>
      <section className="py-8 md:py-12 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >1</div>
              <div><p className="font-semibold text-white text-sm">Evaluación del ángulo editorial</p><p className="text-xs text-white/40 mt-0.5">Definimos el ángulo de la historia con más posibilidades de ser aceptado. No todo se publica.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >2</div>
              <div><p className="font-semibold text-white text-sm">Redacción y propuesta</p><p className="text-xs text-white/40 mt-0.5">Redactamos la propuesta editorial y la sometemos al proceso de revisión de la redacción.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >3</div>
              <div><p className="font-semibold text-white text-sm">Publicación y entrega</p><p className="text-xs text-white/40 mt-0.5">Tras aprobación, se publica el artículo. Recibes el enlace y los derechos de uso.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12 px-5" >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-6">Preguntas frecuentes</h2>
          <div className="space-y-3">
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Es Forbes de verdad?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Forbes Argentina es una edición con licencia de la marca Forbes, con redacción independiente. Es un medio real. No es Forbes global (EEUU). Siempre lo explicamos con exactitud.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Es patrocinado o editorial?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Es artículo editorial, no publicitario. No aparece como BrandVoice ni contenido patrocinado.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Para qué sirve concretamente?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Para tener un enlace verificable a Forbes que aparece en Google cuando buscan tu nombre. Facilita la creación del Knowledge Panel.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/autoridad-digital/knowledge-panel-google/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Knowledge Panel →</a>
            <a href="/autoridad-digital/salir-en-prensa/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Salir en prensa →</a>
            <a href="/autoridad-digital/wikipedia-perfil/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Pack wikis →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
