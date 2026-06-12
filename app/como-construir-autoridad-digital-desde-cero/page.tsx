import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Cómo Construir Autoridad Digital desde Cero 2026 | Prestior",
  description: "La autoridad digital no se improvisa. Esta guía explica el proceso real, los tiempos y los elementos necesarios para construirla de forma sólida.",
  keywords: ['como construir autoridad digital', 'autoridad digital marca personal', 'construir presencia digital', 'autoridad online desde cero', 'estrategia autoridad digital'],
  alternates: { canonical: "https://prestior.es/como-construir-autoridad-digital-desde-cero/" },
  openGraph: { type: "website", title: "Cómo Construir Autoridad Digital desde Cero 2026 | Prestior", description: "La autoridad digital no se improvisa. Esta guía explica el proceso real, los tiempos y los elementos necesarios para construirla de forma sólida." },
};
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <section className="py-16 text-center" style={{borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display font-black text-white text-4xl md:text-5xl mb-5 leading-tight">Cómo construir autoridad digital desde cero</h1>
          <p className="text-lg mb-8" style={{color:"rgba(238,240,244,0.5)"}}>La autoridad digital es lo que hace que Google, los inversores y los clientes te traten como referente. No llega sola: se construye.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-8 py-4 rounded-xl"
            style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
            Análisis gratuito de autoridad →
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-white text-2xl mb-4">Qué es la autoridad digital y por qué importa</h2>
          <p className="leading-relaxed mb-8" style={{color:"rgba(238,240,244,0.55)"}}>La autoridad digital es el conjunto de señales que le dicen a Google, a las IAs y a las personas que te buscan que eres una fuente legítima y reconocida en tu campo. Se mide en: posiciones para búsquedas de tu nombre, presencia de Knowledge Panel, menciones en medios de referencia, calidad y cantidad de backlinks y consistencia de la información sobre ti en diferentes fuentes.</p>
          <h2 className="font-display font-bold text-white text-2xl mb-4">Los pasos concretos para construir autoridad digital</h2>
          <p className="leading-relaxed mb-10" style={{color:"rgba(238,240,244,0.55)"}}>El proceso empieza con la auditoría del estado actual: qué aparece cuando te buscan, qué dice la IA de ti, qué perfiles tienes creados. Después, construcción de las bases: Wikidata, perfiles de autoridad, web propia optimizada. Luego amplificación: conseguir menciones en medios, artículos en Forbes o prensa nacional, perfiles en wikis. Y finalmente consolidación y monitorización continua para que lo construido se mantenga.</p>
          <div className="rounded-2xl p-8 text-center" style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)"}}>
            <p className="font-bold text-white text-lg mb-2">Análisis de reputación gratuito</p>
            <p className="text-sm mb-5" style={{color:"rgba(238,240,244,0.4)"}}>Sin compromiso. Respuesta en menos de 24 horas.</p>
            <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
              className="inline-flex font-bold px-8 py-4 rounded-xl text-sm"
              style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
              Análisis gratuito de autoridad →
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
