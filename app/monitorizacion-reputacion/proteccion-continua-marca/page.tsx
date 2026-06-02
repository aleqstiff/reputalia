import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Protección Continua de Marca — Monitorización Mensual",
  description: "Monitorizamos tu nombre y marca de forma continua. Alertas tempranas, mantenimiento de presencia. Desde 197€/mes.",
  alternates: { canonical: "https://prestior.es/monitorizacion-reputacion/proteccion-continua-marca/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Por qué es necesario el retainer?","acceptedAnswer":{"@type":"Answer","text":"El Knowledge Panel y los perfiles de autoridad se degradan sin mantenimiento activo. Google actualiza sus fuentes."}},{"@type":"Question","name":"¿Cuándo se contrata?","acceptedAnswer":{"@type":"Answer","text":"Siempre después de entregar el trabajo de construcción. Nunca al principio."}},{"@type":"Question","name":"¿Se puede cancelar?","acceptedAnswer":{"@type":"Answer","text":"Sí, con 30 días de preaviso. Sin penalización."}}]};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Monitorizaci\u00f3n\", \"item\": \"https://prestior.es/monitorizacion-reputacion/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Protecci\u00f3n continua\", \"item\": \"https://prestior.es/monitorizacion-reputacion/proteccion-continua-marca/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> ›{" "}
        <Link href="/monitorizacion-reputacion/" className="hover:text-white/70 transition-colors">Monitorización</Link> ›{" "}
        <span className="text-white/80">Protección continua de marca</span>
      </nav>
      <header className="py-14 px-5 relative overflow-hidden" >
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-white mb-4" style={{fontSize:"clamp(2rem,4vw,3rem)"}}>Protección continua de marca</h1>
          <p className="text-lg max-w-2xl mb-5" style={{color:"rgba(238,240,244,0.45)",fontWeight:300}}>Vigilamos tu nombre y marca de forma continua. Cuando aparece algo negativo, lo detectamos antes de que se consolide. Mantenemos activos tu panel, perfiles y presencia.</p>
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            <span>⏱ Continuo</span>
            <span>💶 197€–490€/mes</span>
          </div>
        </div>
      </header>
      <section className="py-8 md:py-12 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >1</div>
              <div><p className="font-semibold text-white text-sm">Configuración del sistema de alertas</p><p className="text-xs text-white/40 mt-0.5">Configuramos alertas para tu nombre, marca y variaciones en Google, redes y medios.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >2</div>
              <div><p className="font-semibold text-white text-sm">Monitorización mensual activa</p><p className="text-xs text-white/40 mt-0.5">Revisión mensual de todos los resultados. Informe de novedades y estado.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >3</div>
              <div><p className="font-semibold text-white text-sm">Reacción ante amenazas</p><p className="text-xs text-white/40 mt-0.5">Si detectamos contenido negativo, actuamos inmediatamente con el protocolo adecuado.</p></div>
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
                ¿Por qué es necesario el retainer?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">El Knowledge Panel y los perfiles de autoridad se degradan sin mantenimiento activo. Google actualiza sus fuentes.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Cuándo se contrata?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Siempre después de entregar el trabajo de construcción. Nunca al principio.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Se puede cancelar?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Sí, con 30 días de preaviso. Sin penalización.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/monitorizacion-reputacion/alertas-reputacion/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Alertas de reputación →</a>
            <a href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Auditoría gratuita →</a>
            <a href="/autoridad-digital/marca-personal-google/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Marca personal →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
