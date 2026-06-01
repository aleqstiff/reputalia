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
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">Inicio</Link> ›{" "}
        <Link href="/monitorizacion-reputacion/" className="hover:text-stone-600">Monitorización</Link> ›{" "}
        <span className="text-white/80">Protección continua de marca</span>
      </nav>
      <header className="py-14 px-4" style={{background:"var(--bg-mid)"}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Protección continua de marca</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-5">Vigilamos tu nombre y marca de forma continua. Cuando aparece algo negativo, lo detectamos antes de que se consolide. Mantenemos activos tu panel, perfiles y presencia.</p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <span>⏱ Continuo</span>
            <span>💶 197€–490€/mes</span>
          </div>
        </div>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"var(--bg-mid)"}}>1</div>
              <div><p className="font-semibold text-stone-900 text-sm">Configuración del sistema de alertas</p><p className="text-xs text-stone-500 mt-0.5">Configuramos alertas para tu nombre, marca y variaciones en Google, redes y medios.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"var(--bg-mid)"}}>2</div>
              <div><p className="font-semibold text-stone-900 text-sm">Monitorización mensual activa</p><p className="text-xs text-stone-500 mt-0.5">Revisión mensual de todos los resultados. Informe de novedades y estado.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"var(--bg-mid)"}}>3</div>
              <div><p className="font-semibold text-stone-900 text-sm">Reacción ante amenazas</p><p className="text-xs text-stone-500 mt-0.5">Si detectamos contenido negativo, actuamos inmediatamente con el protocolo adecuado.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4" style={{background:"var(--bg-mid)"}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-3">
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Por qué es necesario el retainer?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">El Knowledge Panel y los perfiles de autoridad se degradan sin mantenimiento activo. Google actualiza sus fuentes.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Cuándo se contrata?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Siempre después de entregar el trabajo de construcción. Nunca al principio.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Se puede cancelar?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Sí, con 30 días de preaviso. Sin penalización.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/monitorizacion-reputacion/alertas-reputacion/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Alertas de reputación →</a>
            <a href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Auditoría gratuita →</a>
            <a href="/autoridad-digital/marca-personal-google/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Marca personal →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
