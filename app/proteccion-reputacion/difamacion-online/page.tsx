import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Eliminar Difamación Online — Gestión Legal Profesional",
  description: "Eliminamos contenido difamatorio de webs, foros y redes por vías legales. Sin garantías imposibles. Análisis gratuito previo.",
  alternates: { canonical: "https://prestior.es/proteccion-reputacion/difamacion-online/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué es la difamación digital?","acceptedAnswer":{"@type":"Answer","text":"La publicación de afirmaciones falsas que dañan la reputación de una persona o empresa en webs, redes o foros."}},{"@type":"Question","name":"¿Se puede garantizar la eliminación?","acceptedAnswer":{"@type":"Answer","text":"No. Depende de la plataforma y la jurisdicción. Garantizamos gestión profesional y transparencia total."}},{"@type":"Question","name":"¿Cuánto tarda?","acceptedAnswer":{"@type":"Answer","text":"Entre 2 y 8 semanas según la plataforma y complejidad del caso."}}]};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Protecci\u00f3n\", \"item\": \"https://prestior.es/proteccion-reputacion/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Difamaci\u00f3n online\", \"item\": \"https://prestior.es/proteccion-reputacion/difamacion-online/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> ›{" "}
        <Link href="/proteccion-reputacion/" className="hover:text-white/70 transition-colors">Protección de reputación</Link> ›{" "}
        <span className="text-white/80">Eliminar difamación online</span>
      </nav>
      <header className="py-14 px-5 relative overflow-hidden" style={{background:"var(--bg-2)"}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-white mb-4" style={{fontSize:"clamp(2rem,4vw,3rem)"}}>Eliminar difamación online</h1>
          <p className="text-lg max-w-2xl mb-5" style={{color:"rgba(238,240,244,0.45)",fontWeight:300}}>Gestionamos la retirada de contenido difamatorio mediante las vías legales adecuadas. No prometemos resultados garantizados — prometemos máxima diligencia profesional.</p>
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            <span>⏱ 2-8 semanas</span>
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
              <div><p className="font-semibold text-white text-sm">Análisis del caso</p><p className="text-xs text-white/40 mt-0.5">Revisamos el contenido, la plataforma y las vías disponibles. Te informamos de lo viable antes de cobrar.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >2</div>
              <div><p className="font-semibold text-white text-sm">Estrategia de retirada</p><p className="text-xs text-white/40 mt-0.5">Seleccionamos la vía óptima: notificación directa, requerimiento legal, DMCA o reclamación ante autoridades.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >3</div>
              <div><p className="font-semibold text-white text-sm">Gestión y seguimiento</p><p className="text-xs text-white/40 mt-0.5">Ejecutamos el proceso. Si la primera vía no prospera, escalamos.</p></div>
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
                ¿Qué es la difamación digital?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">La publicación de afirmaciones falsas que dañan la reputación de una persona o empresa en webs, redes o foros.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Se puede garantizar la eliminación?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">No. Depende de la plataforma y la jurisdicción. Garantizamos gestión profesional y transparencia total.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Cuánto tarda?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Entre 2 y 8 semanas según la plataforma y complejidad del caso.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-5" style={{background:"var(--bg)"}}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/proteccion-reputacion/derecho-al-olvido/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Derecho al olvido →</a>
            <a href="/proteccion-reputacion/eliminar-web-falsa/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Web falsa →</a>
            <a href="/proteccion-reputacion/suplantacion-identidad/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Suplantación →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
