import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Gestión de Reputación Online en Sevilla 2026 | Prestior",
  description: "Prestior gestiona la reputación digital de empresas y profesionales en Sevilla. Análisis gratuito sin compromiso.",
  keywords: ['gestion reputacion online sevilla', 'reputacion digital sevilla', 'orm sevilla', 'reputacion empresa sevilla'],
  alternates: { canonical: "https://prestior.es/gestion-reputacion-online-sevilla/" },
  openGraph: { type: "website", title: "Gestión de Reputación Online en Sevilla 2026 | Prestior", description: "Prestior gestiona la reputación digital de empresas y profesionales en Sevilla. Análisis gratuito sin compromiso." },
};
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <section className="py-16 text-center" style={{borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display font-black text-white mb-5 leading-tight" style={{fontSize:"clamp(2rem,5vw,3.2rem)"}}>
            Reputación digital en Sevilla
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{color:"rgba(238,240,244,0.5)"}}>Empresas y profesionales en Sevilla con presencia digital que transmite confianza y autoridad.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-8 py-4 rounded-xl"
            style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
            Análisis gratuito Sevilla &#8594;
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-white text-2xl mb-4 mt-10">El mercado sevillano y la reputación digital</h2><p className="leading-relaxed mb-6" style={{color:"rgba(238,240,244,0.55)"}}>Sevilla combina un fuerte sector servicios con industria, logística y un creciente tejido de startups y empresas digitales. La gestión de reputación es especialmente relevante para empresas de hostelería y turismo, despachos profesionales y empresas con clientes nacionales o internacionales.</p><h2 className="font-display font-bold text-white text-2xl mb-4 mt-10">Qué servicios de reputación son más útiles en Sevilla</h2><p className="leading-relaxed mb-6" style={{color:"rgba(238,240,244,0.55)"}}>Para negocios en Sevilla, el mayor impacto lo generan: gestión de reseñas en Google Maps, Booking y TripAdvisor (especialmente para hostelería y turismo), construcción de autoridad para directivos que buscan proyección nacional, y monitorización de menciones para empresas con alta visibilidad local.</p>
          <div className="rounded-2xl p-8 text-center mt-10" style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)"}}>
            <p className="font-bold text-white text-xl mb-2">An&#225;lisis de reputaci&#243;n gratuito</p>
            <p className="text-sm mb-5" style={{color:"rgba(238,240,244,0.4)"}}>Sin compromiso. Respuesta en menos de 24 horas.</p>
            <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
              className="inline-flex font-bold px-8 py-4 rounded-xl text-sm"
              style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
              Análisis gratuito Sevilla &#8594;
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
