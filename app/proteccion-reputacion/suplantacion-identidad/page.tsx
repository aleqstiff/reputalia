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
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Protecci\u00f3n\", \"item\": \"https://prestior.es/proteccion-reputacion/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Suplantaci\u00f3n\", \"item\": \"https://prestior.es/proteccion-reputacion/suplantacion-identidad/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> ›{" "}
        <Link href="/proteccion-reputacion/" className="hover:text-white/70 transition-colors">Protección de reputación</Link> ›{" "}
        <span className="text-white/80">Suplantación de identidad online</span>
      </nav>
      <header className="py-14 px-5 relative overflow-hidden" >
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-white mb-4" style={{fontSize:"clamp(2rem,4vw,3rem)"}}>Suplantación de identidad online</h1>
          <p className="text-lg max-w-2xl mb-5" style={{color:"rgba(238,240,244,0.45)",fontWeight:300}}>Alguien usa tu nombre, imagen o marca haciéndose pasar por ti. Gestionamos la baja de cuentas falsas y perfiles de suplantación en redes sociales, webs y plataformas.</p>
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            <span>⏱ 48h – 3 semanas</span>
            <span>💶 Desde 690€</span>
          </div>
        </div>
      </header>
      <section className="py-8 md:py-12 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >1</div>
              <div><p className="font-semibold text-white text-sm">Documentación del caso</p><p className="text-xs text-white/40 mt-0.5">Recopilamos evidencias: capturas, URLs, datos de la cuenta falsa.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >2</div>
              <div><p className="font-semibold text-white text-sm">Denuncia oficial en la plataforma</p><p className="text-xs text-white/40 mt-0.5">Presentamos la denuncia formal a través de los canales oficiales con documentación completa.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >3</div>
              <div><p className="font-semibold text-white text-sm">Seguimiento y escalación</p><p className="text-xs text-white/40 mt-0.5">Si la denuncia no prospera, escalamos por vías legales adicionales.</p></div>
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
                ¿Qué plataformas cubrís?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Instagram, Facebook, TikTok, YouTube, X/Twitter, LinkedIn, webs y blogs.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Cuánto tarda?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Entre 48 horas y 3 semanas. Las plataformas grandes son más ágiles con suplantaciones documentadas.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Cómo prevenir que ocurra de nuevo?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Con la verificación del perfil oficial se reduce el riesgo significativamente.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/proteccion-reputacion/eliminar-cuenta-falsa-instagram/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Cuenta falsa Instagram →</a>
            <a href="/proteccion-reputacion/difamacion-online/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Difamación →</a>
            <a href="/autoridad-digital/verificacion-perfiles/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Verificación →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
