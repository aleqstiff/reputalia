import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Perfiles Wiki de Autoridad — FoundersWiki, WikiAlpha, Crunchbase",
  description: "Creamos perfiles en wikis de autoridad: FoundersWiki, WikiAlpha, Crunchbase, IMDb. Honesto: no es Wikipedia. Pack desde 1.490€.",
  alternates: { canonical: "https://prestior.es/autoridad-digital/wikipedia-perfil/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Por qué no Wikipedia?","acceptedAnswer":{"@type":"Answer","text":"Wikipedia tiene criterios de notabilidad muy estrictos y su contenido es editable por cualquiera. Los wikis de autoridad son más accesibles y reconocidos por Google."}},{"@type":"Question","name":"¿Qué incluye el pack?","acceptedAnswer":{"@type":"Answer","text":"FoundersWiki + WikiAlpha + Crunchbase + hasta 2 wikis adicionales según perfil."}},{"@type":"Question","name":"¿Para qué sirven?","acceptedAnswer":{"@type":"Answer","text":"Son las fuentes que Google usa para construir el Knowledge Panel. Sin ellas, activar el panel es muy difícil."}}]};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Autoridad\", \"item\": \"https://prestior.es/autoridad-digital/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Wikis\", \"item\": \"https://prestior.es/autoridad-digital/wikipedia-perfil/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> ›{" "}
        <Link href="/autoridad-digital/" className="hover:text-white/70 transition-colors">Autoridad digital</Link> ›{" "}
        <span className="text-white/80">Perfiles wiki de autoridad</span>
      </nav>
      <header className="py-14 px-5 relative overflow-hidden" >
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-white mb-4" style={{fontSize:"clamp(2rem,4vw,3rem)"}}>Perfiles wiki de autoridad</h1>
          <p className="text-lg max-w-2xl mb-5" style={{color:"rgba(238,240,244,0.45)",fontWeight:300}}>Los wikis de autoridad son fuentes que Google usa para construir el Knowledge Panel. No es Wikipedia — siempre lo decimos. FoundersWiki, WikiAlpha, Crunchbase, IMDb.</p>
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            <span>⏱ 3-6 semanas</span>
            <span>💶 1.490€</span>
          </div>
        </div>
      </header>
      <section className="py-8 md:py-12 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >1</div>
              <div><p className="font-semibold text-white text-sm">Selección de plataformas</p><p className="text-xs text-white/40 mt-0.5">Elegimos los wikis más relevantes según tu perfil: empresario, inversor, artista, profesional.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >2</div>
              <div><p className="font-semibold text-white text-sm">Creación y optimización</p><p className="text-xs text-white/40 mt-0.5">Redactamos y publicamos los perfiles con información verificada en el formato que Google indexa mejor.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >3</div>
              <div><p className="font-semibold text-white text-sm">Enlazado con Knowledge Panel</p><p className="text-xs text-white/40 mt-0.5">Conectamos los perfiles entre sí y con otras fuentes para reforzar la entidad en Wikidata.</p></div>
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
                ¿Por qué no Wikipedia?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Wikipedia tiene criterios de notabilidad muy estrictos y su contenido es editable por cualquiera. Los wikis de autoridad son más accesibles y reconocidos por Google.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Qué incluye el pack?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">FoundersWiki + WikiAlpha + Crunchbase + hasta 2 wikis adicionales según perfil.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Para qué sirven?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Son las fuentes que Google usa para construir el Knowledge Panel. Sin ellas, activar el panel es muy difícil.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/autoridad-digital/knowledge-panel-google/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Knowledge Panel →</a>
            <a href="/autoridad-digital/aparecer-en-forbes/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Forbes Argentina →</a>
            <a href="/autoridad-digital/marca-personal-google/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Marca personal →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
