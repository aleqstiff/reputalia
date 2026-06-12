import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Gestión de Reputación Online en Zaragoza 2026 | Prestior",
  description: "Prestior gestiona la reputación digital de empresas y profesionales en Zaragoza. Knowledge Panel, eliminación contenido negativo y monitorización. Análisis gratuito.",
  keywords: ["gestion reputacion online zaragoza","reputacion digital zaragoza","orm zaragoza","knowledge panel zaragoza","reputacion empresa zaragoza"],
  alternates: { canonical: "https://prestior.es/gestion-reputacion-online-zaragoza/" },
};
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <section className="py-16 text-center" style={{borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display font-black text-white mb-5 leading-tight" style={{fontSize:"clamp(2rem,5vw,3.2rem)"}}>
            Gestión de reputación digital en Zaragoza
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{color:"rgba(238,240,244,0.5)"}}>Empresas y profesionales en Zaragoza con presencia digital que transmite confianza y autoridad.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-8 py-4 rounded-xl"
            style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
            Análisis gratuito &#8594;
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-white text-2xl mb-4 mt-4">Zaragoza y la reputación digital</h2>
          <p className="leading-relaxed mb-8" style={{color:"rgba(238,240,244,0.55)"}}>Zaragoza, quinta ciudad más grande de España, tiene un tejido empresarial sólido en logística, industria y servicios. La proximidad estratégica entre Madrid y Barcelona la convierte en un hub comercial con necesidades crecientes de reputación digital para empresas con proyección nacional.</p>
          <h2 className="font-display font-bold text-white text-2xl mb-4">Servicios de reputación más demandados en Zaragoza</h2>
          <p className="leading-relaxed mb-10" style={{color:"rgba(238,240,244,0.55)"}}>Para empresas en Zaragoza trabajamos principalmente en: construcción de Knowledge Panel para directivos y empresarios, gestión y eliminación de reseñas negativas en Google Maps, cobertura en medios nacionales para startups y empresas en crecimiento, y monitorización continua de la reputación online.</p>
          <div className="rounded-2xl p-8 text-center" style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)"}}>
            <p className="font-bold text-white text-xl mb-2">Análisis de reputación gratuito</p>
            <p className="text-sm mb-5" style={{color:"rgba(238,240,244,0.4)"}}>Sin compromiso. Respuesta en menos de 24 horas.</p>
            <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
              className="inline-flex font-bold px-8 py-4 rounded-xl text-sm"
              style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
              Solicitar análisis gratuito &#8594;
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
