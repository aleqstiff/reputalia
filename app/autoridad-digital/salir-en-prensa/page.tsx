import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Salir en Prensa — Apariciones en Medios Nacionales e Internacionales",
  description: "Gestionamos apariciones editoriales en medios nacionales e internacionales. NYPost, BBC, Wired, medios españoles. Desde 2.900€.",
  alternates: { canonical: "https://prestior.es/autoridad-digital/salir-en-prensa/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué medios cubrís?","acceptedAnswer":{"@type":"Answer","text":"Medios españoles, Forbes Argentina, y pack medios top: NYPost, BBC, Wired, PageSix, People. Cada uno con su precio real."}},{"@type":"Question","name":"¿Es editorial o publicitario?","acceptedAnswer":{"@type":"Answer","text":"Siempre editorial cuando lo describimos como editorial. Nunca confundimos artículo de pago con cobertura orgánica."}},{"@type":"Question","name":"¿Cuánto impacta en Google?","acceptedAnswer":{"@type":"Answer","text":"Un artículo en medio de alta autoridad genera backlink de calidad y puede aparecer al buscar tu nombre. Combinado con Knowledge Panel, el efecto es muy significativo."}}]};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Autoridad\", \"item\": \"https://prestior.es/autoridad-digital/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Prensa\", \"item\": \"https://prestior.es/autoridad-digital/salir-en-prensa/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> ›{" "}
        <Link href="/autoridad-digital/" className="hover:text-white/70 transition-colors">Autoridad digital</Link> ›{" "}
        <span className="text-white/80">Salir en prensa y medios</span>
      </nav>
      <header className="py-14 px-5 relative overflow-hidden" style={{background:"var(--bg-2)"}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-white mb-4" style={{fontSize:"clamp(2rem,4vw,3rem)"}}>Salir en prensa y medios</h1>
          <p className="text-lg max-w-2xl mb-5" style={{color:"rgba(238,240,244,0.45)",fontWeight:300}}>Apariciones editoriales en medios de referencia nacionales e internacionales. Desde medios españoles hasta NYPost, BBC, Wired o People. Siempre editorial, siempre nombrando el medio correcto.</p>
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            <span>⏱ 4-16 semanas</span>
            <span>💶 Desde 2.900€ · Pack top: 6.900€–7.900€</span>
          </div>
        </div>
      </header>
      <section className="py-8 md:py-12 px-5" style={{background:"var(--bg)"}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >1</div>
              <div><p className="font-semibold text-white text-sm">Estrategia editorial</p><p className="text-xs text-white/40 mt-0.5">Definimos qué medios son alcanzables, qué ángulo tiene más posibilidades y el presupuesto adecuado.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >2</div>
              <div><p className="font-semibold text-white text-sm">Gestión con redacciones</p><p className="text-xs text-white/40 mt-0.5">Trabajamos directamente con redacciones o proveedores verificados para colocar el artículo.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >3</div>
              <div><p className="font-semibold text-white text-sm">Publicación y entrega</p><p className="text-xs text-white/40 mt-0.5">Artículo publicado con enlace permanente. Informe de resultados.</p></div>
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
                ¿Qué medios cubrís?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Medios españoles, Forbes Argentina, y pack medios top: NYPost, BBC, Wired, PageSix, People. Cada uno con su precio real.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Es editorial o publicitario?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Siempre editorial cuando lo describimos como editorial. Nunca confundimos artículo de pago con cobertura orgánica.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Cuánto impacta en Google?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Un artículo en medio de alta autoridad genera backlink de calidad y puede aparecer al buscar tu nombre. Combinado con Knowledge Panel, el efecto es muy significativo.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-5" style={{background:"var(--bg)"}}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/autoridad-digital/aparecer-en-forbes/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Forbes Argentina →</a>
            <a href="/autoridad-digital/knowledge-panel-google/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Knowledge Panel →</a>
            <a href="/autoridad-digital/marca-personal-google/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Marca personal →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
