import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Suplantación de Identidad Online — Retirada Profesional",
  description: "Gestionamos la retirada de cuentas, webs y perfiles que se hacen pasar por ti o tu marca. Meta, TikTok, YouTube. Empresa registrada.",
  alternates: { canonical: "https://prestior.es/proteccion-reputacion/suplantacion-identidad/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué plataformas cubrís?","acceptedAnswer":{"@type":"Answer","text":"Instagram, Facebook, TikTok, YouTube, X/Twitter, LinkedIn, webs y blogs."}},{"@type":"Question","name":"¿Cuánto tarda?","acceptedAnswer":{"@type":"Answer","text":"Entre 48 horas y 3 semanas. Las plataformas grandes son más ágiles con suplantaciones documentadas."}},{"@type":"Question","name":"¿Cómo prevenir que ocurra de nuevo?","acceptedAnswer":{"@type":"Answer","text":"Con la verificación del perfil oficial se reduce el riesgo significativamente."}}]};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Protecci\u00f3n\", \"item\": \"https://prestior.es/proteccion-reputacion/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Suplantaci\u00f3n\", \"item\": \"https://prestior.es/proteccion-reputacion/suplantacion-identidad/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">Inicio</Link> ›{" "}
        <Link href="/proteccion-reputacion/" className="hover:text-stone-600">Protección de reputación</Link> ›{" "}
        <span className="text-stone-700">Suplantación de identidad online</span>
      </nav>
      <header className="py-14 px-4" style={{background:"#0f1729"}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Suplantación de identidad online</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-5">Alguien usa tu nombre, imagen o marca haciéndose pasar por ti. Gestionamos la baja de cuentas falsas y perfiles de suplantación en redes sociales, webs y plataformas.</p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <span>⏱ 48h – 3 semanas</span>
            <span>💶 Desde 690€</span>
          </div>
        </div>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>1</div>
              <div><p className="font-semibold text-stone-900 text-sm">Documentación del caso</p><p className="text-xs text-stone-500 mt-0.5">Recopilamos evidencias: capturas, URLs, datos de la cuenta falsa.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>2</div>
              <div><p className="font-semibold text-stone-900 text-sm">Denuncia oficial en la plataforma</p><p className="text-xs text-stone-500 mt-0.5">Presentamos la denuncia formal a través de los canales oficiales con documentación completa.</p></div>
            </div>
            <div className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{background:"#0f1729"}}>3</div>
              <div><p className="font-semibold text-stone-900 text-sm">Seguimiento y escalación</p><p className="text-xs text-stone-500 mt-0.5">Si la denuncia no prospera, escalamos por vías legales adicionales.</p></div>
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
                ¿Qué plataformas cubrís?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Instagram, Facebook, TikTok, YouTube, X/Twitter, LinkedIn, webs y blogs.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Cuánto tarda?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Entre 48 horas y 3 semanas. Las plataformas grandes son más ágiles con suplantaciones documentadas.</div>
            </details>
            <details className="group bg-white rounded-xl border border-stone-200">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                ¿Cómo prevenir que ocurra de nuevo?<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">Con la verificación del perfil oficial se reduce el riesgo significativamente.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/proteccion-reputacion/eliminar-cuenta-falsa-instagram/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Cuenta falsa Instagram →</a>
            <a href="/proteccion-reputacion/difamacion-online/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Difamación →</a>
            <a href="/autoridad-digital/verificacion-perfiles/" className="text-sm border border-stone-200 px-4 py-2 rounded-xl hover:border-stone-400 transition text-stone-600">Verificación →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
