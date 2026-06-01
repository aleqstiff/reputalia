import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Verificación de Perfiles — Insignia en Instagram y TikTok",
  description: "Gestionamos el proceso de verificación en Instagram y TikTok. Proceso oficial. Sin garantía de resultado. Empresa registrada.",
  alternates: { canonical: "https://prestior.es/autoridad-digital/verificacion-perfiles/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Garantizáis la verificación?","acceptedAnswer":{"@type":"Answer","text":"No. La decisión final la toma la plataforma. Garantizamos la mejor solicitud posible, no el resultado."}},{"@type":"Question","name":"¿Cuánto tarda?","acceptedAnswer":{"@type":"Answer","text":"Instagram y TikTok suelen responder en 2-4 semanas. En caso de rechazo, se puede reenviar tras 30 días."}},{"@type":"Question","name":"¿Qué necesito para solicitarla?","acceptedAnswer":{"@type":"Answer","text":"Presencia en medios verificable, seguidores activos y un perfil completo y coherente."}}]};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Autoridad\", \"item\": \"https://prestior.es/autoridad-digital/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Verificaci\u00f3n\", \"item\": \"https://prestior.es/autoridad-digital/verificacion-perfiles/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">Inicio</Link> ›{" "}
        <Link href="/autoridad-digital/" className="hover:text-stone-600">Autoridad digital</Link> ›{" "}
        <span className="text-stone-700">Verificación de perfiles en redes</span>
      </nav>
      <header className="py-14 px-4" style={{background:"#0f1729"}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Verificación de perfiles en redes</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-5">La verificación de Instagram y TikTok requiere demostrar notabilidad y autenticidad. Gestionamos el proceso con la documentación más sólida posible.</p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <span>⏱ 2-4 semanas por intento</span>
            <span>💶 Consultar</span>
          </div>
        </div>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>1</div>
              <div><p className="font-semibold text-stone-900 text-sm">Evaluación de elegibilidad</p><p className="text-xs text-stone-500 mt-0.5">Revisamos si cumples los criterios actuales de cada plataforma. Te decimos la verdad.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>2</div>
              <div><p className="font-semibold text-stone-900 text-sm">Preparación de la solicitud</p><p className="text-xs text-stone-500 mt-0.5">Preparamos la solicitud con la documentación de notabilidad más sólida posible.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>3</div>
              <div><p className="font-semibold text-stone-900 text-sm">Presentación y seguimiento</p><p className="text-xs text-stone-500 mt-0.5">Enviamos la solicitud y hacemos seguimiento. Si se rechaza, analizamos qué mejorar.</p></div>
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
                ¿Garantizáis la verificación?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">No. La decisión final la toma la plataforma. Garantizamos la mejor solicitud posible, no el resultado.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Cuánto tarda?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Instagram y TikTok suelen responder en 2-4 semanas. En caso de rechazo, se puede reenviar tras 30 días.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Qué necesito para solicitarla?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Presencia en medios verificable, seguidores activos y un perfil completo y coherente.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/proteccion-reputacion/eliminar-cuenta-falsa-instagram/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Cuenta falsa Instagram →</a>
            <a href="/autoridad-digital/knowledge-panel-google/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Knowledge Panel →</a>
            <a href="/autoridad-digital/salir-en-prensa/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Prensa →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
