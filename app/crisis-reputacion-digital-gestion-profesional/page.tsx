import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Gestión Profesional de Crisis de Reputación Digital 2026 | Prestior",
  description: "Cuando una crisis de reputación online escala, necesitas un equipo especializado. Prestior gestiona crisis de reputación con protocolos probados.",
  keywords: ['gestion crisis reputacion', 'crisis reputacion digital profesional', 'gestionar crisis online empresa', 'expertos crisis reputacion', 'orm crisis reputacion'],
  alternates: { canonical: "https://prestior.es/crisis-reputacion-digital-gestion-profesional/" },
  openGraph: { type: "website", title: "Gestión Profesional de Crisis de Reputación Digital 2026 | Prestior", description: "Cuando una crisis de reputación online escala, necesitas un equipo especializado. Prestior gestiona crisis de reputación con protocolos probados." },
};
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <section className="py-16 text-center" style={{borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display font-black text-white mb-5 leading-tight" style={{fontSize:"clamp(2rem,5vw,3.2rem)"}}>
            Gestión profesional de crisis de reputación online
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{color:"rgba(238,240,244,0.5)"}}>Una crisis de reputación sin gestionar puede costar más que cualquier servicio de gestión. La velocidad de respuesta lo es todo.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-8 py-4 rounded-xl"
            style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
            Consulta de urgencia &#8594;
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-white text-2xl mb-4 mt-10">Qué es una gestión de crisis de reputación</h2><p className="leading-relaxed mb-6" style={{color:"rgba(238,240,244,0.55)"}}>La gestión de crisis de reputación es el proceso de contener, neutralizar y revertir el daño que una crisis online está causando a una persona o empresa. Incluye: monitorización del alcance en tiempo real, desarrollo de la estrategia de respuesta, coordinación de los mensajes en todos los canales, gestión de medios si la crisis llega a prensa, y trabajo de reconstrucción de imagen posterior a la crisis.</p><h2 className="font-display font-bold text-white text-2xl mb-4 mt-10">Los factores que determinan el éxito de la gestión</h2><p className="leading-relaxed mb-6" style={{color:"rgba(238,240,244,0.55)"}}>La rapidez de respuesta es el factor más crítico: las crisis online se expanden de forma exponencial en las primeras horas. La autenticidad de la respuesta es el segundo factor: las respuestas corporativas genéricas o defensivas empeoran la situación. La coordinación entre todos los canales (redes sociales, web, medios) es el tercero. Prestior tiene protocolos de crisis probados en diferentes tipos de escenarios.</p>
          <div className="rounded-2xl p-8 text-center mt-10" style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)"}}>
            <p className="font-bold text-white text-xl mb-2">An&#225;lisis de reputaci&#243;n gratuito</p>
            <p className="text-sm mb-5" style={{color:"rgba(238,240,244,0.4)"}}>Sin compromiso. Respuesta en menos de 24 horas.</p>
            <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
              className="inline-flex font-bold px-8 py-4 rounded-xl text-sm"
              style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
              Consulta de urgencia &#8594;
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
