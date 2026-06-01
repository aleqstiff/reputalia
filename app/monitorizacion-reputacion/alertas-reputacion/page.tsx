import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Alertas de Reputación Online — Monitorización de Marca",
  description: "Sistema de alertas en tiempo real para tu nombre y marca. Detecta nuevas menciones y contenido negativo antes de que escale.",
  alternates: { canonical: "https://reputalia.es/monitorizacion-reputacion/alertas-reputacion/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué plataformas monitoriza?","acceptedAnswer":{"@type":"Answer","text":"Google, Bing, noticias, foros, redes sociales principales, webs de reseñas y blogs."}},{"@type":"Question","name":"¿Puedo configurarlo yo mismo?","acceptedAnswer":{"@type":"Answer","text":"Sí, con Google Alerts gratuito puedes tener monitorización básica. El servicio profesional añade cobertura más amplia y protocolo de acción."}},{"@type":"Question","name":"¿Incluye gestión de las amenazas?","acceptedAnswer":{"@type":"Answer","text":"La gestión de amenazas detectadas está incluida en el plan de Protección Continua."}}]};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://reputalia.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Monitorizaci\u00f3n\", \"item\": \"https://reputalia.es/monitorizacion-reputacion/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Alertas\", \"item\": \"https://reputalia.es/monitorizacion-reputacion/alertas-reputacion/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">Inicio</Link> ›{" "}
        <Link href="/monitorizacion-reputacion/" className="hover:text-stone-600">Monitorización</Link> ›{" "}
        <span className="text-stone-700">Alertas de reputación online</span>
      </nav>
      <header className="py-14 px-4" style={{background:"#0f1729"}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Alertas de reputación online</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-5">Las mejores decisiones en reputación son las que se toman antes de que el daño sea irreversible. El sistema de alertas detecta cualquier nueva mención.</p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <span>⏱ Configurable desde el día 1</span>
            <span>💶 Incluido en plan de monitorización (197€/mes)</span>
          </div>
        </div>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>1</div>
              <div><p className="font-semibold text-stone-900 text-sm">Configuración de palabras clave</p><p className="text-xs text-stone-500 mt-0.5">Definimos qué buscar: nombre, variaciones, marca, dominio, términos asociados.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>2</div>
              <div><p className="font-semibold text-stone-900 text-sm">Alertas en tiempo real o diarias</p><p className="text-xs text-stone-500 mt-0.5">Notificación inmediata cuando aparece algo nuevo, o resumen diario según preferencia.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>3</div>
              <div><p className="font-semibold text-stone-900 text-sm">Panel de seguimiento</p><p className="text-xs text-stone-500 mt-0.5">Acceso al historial de menciones y evolución de tu presencia.</p></div>
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
                ¿Qué plataformas monitoriza?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Google, Bing, noticias, foros, redes sociales principales, webs de reseñas y blogs.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Puedo configurarlo yo mismo?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Sí, con Google Alerts gratuito puedes tener monitorización básica. El servicio profesional añade cobertura más amplia y protocolo de acción.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Incluye gestión de las amenazas?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">La gestión de amenazas detectadas está incluida en el plan de Protección Continua.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/monitorizacion-reputacion/proteccion-continua-marca/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Protección continua →</a>
            <a href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Auditoría gratuita →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
