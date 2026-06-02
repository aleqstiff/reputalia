import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Marca Personal en Google — Dominar tu Nombre en Buscadores",
  description: "Dominamos los primeros resultados de Google cuando buscan tu nombre. Para coaches, directivos y CEOs. Desde 1.490€.",
  alternates: { canonical: "https://prestior.es/autoridad-digital/marca-personal-google/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Cuánto tarda en verse en Google?","acceptedAnswer":{"@type":"Answer","text":"Los primeros cambios, en 4-8 semanas. Los resultados consolidados, en 3-6 meses."}},{"@type":"Question","name":"¿Para quién es este servicio?","acceptedAnswer":{"@type":"Answer","text":"Para coaches, formadores, CEOs, directivos, consultores y cualquier profesional cuyo nombre sea su marca principal."}},{"@type":"Question","name":"¿Qué pasa si alguien publica algo negativo?","acceptedAnswer":{"@type":"Answer","text":"Con el blindaje incluido, monitorizamos y actuamos antes de que el daño se consolide."}}]};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Autoridad\", \"item\": \"https://prestior.es/autoridad-digital/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Marca personal\", \"item\": \"https://prestior.es/autoridad-digital/marca-personal-google/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> ›{" "}
        <Link href="/autoridad-digital/" className="hover:text-white/70 transition-colors">Autoridad digital</Link> ›{" "}
        <span className="text-white/80">Marca personal en Google</span>
      </nav>
      <header className="py-14 px-5 relative overflow-hidden" >
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-white mb-4" style={{fontSize:"clamp(2rem,4vw,3rem)"}}>Marca personal en Google</h1>
          <p className="text-lg max-w-2xl mb-5" style={{color:"rgba(238,240,244,0.45)",fontWeight:300}}>Cuando alguien busca tu nombre en Google, los primeros 10 resultados son tu tarjeta de presentación más importante. Trabajamos para que cuenten la historia que tú quieres contar.</p>
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            <span>⏱ 3-6 meses</span>
            <span>💶 Desde 1.490€</span>
          </div>
        </div>
      </header>
      <section className="py-8 md:py-12 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >1</div>
              <div><p className="font-semibold text-white text-sm">Auditoría de situación actual</p><p className="text-xs text-white/40 mt-0.5">Analizamos qué aparece ahora, qué hay que corregir y qué hay que construir.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >2</div>
              <div><p className="font-semibold text-white text-sm">Estrategia de contenidos y presencia</p><p className="text-xs text-white/40 mt-0.5">Creamos y optimizamos perfiles en plataformas de alta autoridad, publicaciones y presencia web.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >3</div>
              <div><p className="font-semibold text-white text-sm">Posicionamiento sostenido</p><p className="text-xs text-white/40 mt-0.5">Estrategia a 3-6 meses para consolidar y mantener los resultados.</p></div>
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
                ¿Cuánto tarda en verse en Google?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Los primeros cambios, en 4-8 semanas. Los resultados consolidados, en 3-6 meses.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Para quién es este servicio?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Para coaches, formadores, CEOs, directivos, consultores y cualquier profesional cuyo nombre sea su marca principal.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Qué pasa si alguien publica algo negativo?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Con el blindaje incluido, monitorizamos y actuamos antes de que el daño se consolide.</div>
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
            <a href="/monitorizacion-reputacion/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Monitorización →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
