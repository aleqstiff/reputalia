import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Eliminar Cuenta Falsa en Instagram — Suplantación",
  description: "Bajamos perfiles falsos en Instagram, TikTok y YouTube que usan tu imagen o nombre. Proceso oficial. Sin contraseñas.",
  alternates: { canonical: "https://prestior.es/proteccion-reputacion/eliminar-cuenta-falsa-instagram/" },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Cuánto tarda en bajarse una cuenta falsa?","acceptedAnswer":{"@type":"Answer","text":"Entre 48 horas y 2 semanas. Instagram y TikTok son más ágiles con suplantaciones documentadas."}},{"@type":"Question","name":"¿Necesitáis mi contraseña?","acceptedAnswer":{"@type":"Answer","text":"No. El proceso es completamente a través de los canales oficiales de denuncia de la plataforma."}},{"@type":"Question","name":"¿Qué pasa si la cuenta reaparece?","acceptedAnswer":{"@type":"Answer","text":"Incluimos seguimiento de 30 días tras la baja. Si reaparece, lo gestionamos sin coste adicional."}}]};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Protecci\u00f3n\", \"item\": \"https://prestior.es/proteccion-reputacion/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Cuenta falsa\", \"item\": \"https://prestior.es/proteccion-reputacion/eliminar-cuenta-falsa-instagram/\"}]}"}} />
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> ›{" "}
        <Link href="/proteccion-reputacion/" className="hover:text-white/70 transition-colors">Protección de reputación</Link> ›{" "}
        <span className="text-white/80">Eliminar cuenta falsa en Instagram</span>
      </nav>
      <header className="py-14 px-5 relative overflow-hidden" >
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-white mb-4" style={{fontSize:"clamp(2rem,4vw,3rem)"}}>Eliminar cuenta falsa en Instagram</h1>
          <p className="text-lg max-w-2xl mb-5" style={{color:"rgba(238,240,244,0.45)",fontWeight:300}}>Hay una cuenta haciéndose pasar por ti en Instagram, TikTok o YouTube. Gestionamos la denuncia formal y el seguimiento hasta la baja del perfil falso.</p>
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            <span>⏱ 48h – 2 semanas</span>
            <span>💶 Desde 490€</span>
          </div>
        </div>
      </header>
      <section className="py-8 md:py-12 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-6">Cómo gestionamos el proceso</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >1</div>
              <div><p className="font-semibold text-white text-sm">Análisis y evidencia</p><p className="text-xs text-white/40 mt-0.5">Documentamos la cuenta falsa: screenshots, análisis de actividad, similitudes con el perfil original.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >2</div>
              <div><p className="font-semibold text-white text-sm">Denuncia oficial</p><p className="text-xs text-white/40 mt-0.5">Presentamos la denuncia por suplantación a través de los canales oficiales de la plataforma.</p></div>
            </div>
            <div className="flex gap-4 p-4 card">
              <div className="step-num" >3</div>
              <div><p className="font-semibold text-white text-sm">Seguimiento hasta resolución</p><p className="text-xs text-white/40 mt-0.5">Hacemos seguimiento activo hasta la baja. Si no responde la plataforma, escalamos.</p></div>
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
                ¿Cuánto tarda en bajarse una cuenta falsa?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Entre 48 horas y 2 semanas. Instagram y TikTok son más ágiles con suplantaciones documentadas.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Necesitáis mi contraseña?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">No. El proceso es completamente a través de los canales oficiales de denuncia de la plataforma.</div>
            </details>
            <details className="card group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                ¿Qué pasa si la cuenta reaparece?<span className="text-white/30 group-open:rotate-180 transition-transform ml-3">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/60 border-t border-white/[0.07] pt-3 leading-relaxed">Incluimos seguimiento de 30 días tras la baja. Si reaparece, lo gestionamos sin coste adicional.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Servicios relacionados</p>
          <div className="flex flex-wrap gap-3">
            <a href="/proteccion-reputacion/suplantacion-identidad/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Suplantación de identidad →</a>
            <a href="/autoridad-digital/verificacion-perfiles/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Verificación →</a>
            <a href="/proteccion-reputacion/difamacion-online/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Difamación →</a>
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
