import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Gestión de Reputación Online en Madrid 2026 | Prestior",
  description: "Prestior gestiona la reputación digital de empresas y profesionales en Madrid. Knowledge Panel, medios, reseñas y monitorización. Análisis gratuito.",
  keywords: ['gestion reputacion online madrid', 'reputacion digital madrid', 'orm madrid', 'knowledge panel madrid', 'eliminar resenas negativas madrid'],
  alternates: { canonical: "https://prestior.es/gestion-reputacion-online-madrid/" },
  openGraph: { type: "website", title: "Gestión de Reputación Online en Madrid 2026 | Prestior", description: "Prestior gestiona la reputación digital de empresas y profesionales en Madrid. Knowledge Panel, medios, reseñas y monitorización. Análisis gratuito." },
};
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <section className="py-16 text-center" style={{borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display font-black text-white text-4xl md:text-5xl mb-5 leading-tight">Gestión de reputación digital en Madrid</h1>
          <p className="text-lg mb-8" style={{color:"rgba(238,240,244,0.5)"}}>Empresas y profesionales en Madrid con reputación online que genera confianza y convierte.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-8 py-4 rounded-xl"
            style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
            Análisis gratuito para empresas Madrid →
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-white text-2xl mb-4">Por qué las empresas de Madrid necesitan gestionar su reputación online</h2>
          <p className="leading-relaxed mb-8" style={{color:"rgba(238,240,244,0.55)"}}>Madrid concentra el mayor volumen de negocios de España. La competencia digital es más intensa. Los inversores, clientes y socios buscan en Google antes de cualquier decisión. Una presencia digital bien gestionada es un diferenciador competitivo real en un mercado tan saturado como el madrileño.</p>
          <h2 className="font-display font-bold text-white text-2xl mb-4">Los servicios de reputación digital que más impacto tienen en Madrid</h2>
          <p className="leading-relaxed mb-10" style={{color:"rgba(238,240,244,0.55)"}}>Para empresas en Madrid, el mayor retorno viene de: Knowledge Panel bien construido para el equipo directivo, gestión y eliminación de reseñas negativas en Google Maps, apariciones editoriales en prensa nacional y monitorización continua de menciones. Prestior tiene experiencia con empresas de todos los sectores en Madrid.</p>
          <div className="rounded-2xl p-8 text-center" style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)"}}>
            <p className="font-bold text-white text-lg mb-2">Análisis de reputación gratuito</p>
            <p className="text-sm mb-5" style={{color:"rgba(238,240,244,0.4)"}}>Sin compromiso. Respuesta en menos de 24 horas.</p>
            <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
              className="inline-flex font-bold px-8 py-4 rounded-xl text-sm"
              style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
              Análisis gratuito para empresas Madrid →
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
