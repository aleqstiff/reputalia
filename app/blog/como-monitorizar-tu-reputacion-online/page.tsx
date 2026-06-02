import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cómo monitorizar tu reputación online en 2026: herramientas y estrategia",
  description: "La monitorización de reputación online permite detectar amenazas antes de que escalen. Esta guía explica las herramientas gratuitas y profesionales, y cuándo necesitas cada una.",
  keywords: ["monitorizar reputación online", "alertas reputación", "gestión reputación digital", "cómo vigilar tu nombre en internet", "herramientas reputación online"],
  alternates: { canonical: "https://prestior.es/blog/como-monitorizar-tu-reputacion-online/" },
  openGraph: {
    type: "article",
    title: "Cómo monitorizar tu reputación online en 2026: herramientas y estrategia",
    description: "La monitorización de reputación online permite detectar amenazas antes de que escalen. Esta guía explica las herramientas gratuitas y profesionales, y cuándo necesitas cada una.",
    publishedTime: "2026-06-01",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo monitorizar tu reputación online en 2026",
  description: "La monitorización de reputación online permite detectar amenazas antes de que escalen. Esta guía explica las herramientas gratuitas y profesionales, y cuándo necesitas cada una.",
  datePublished: "2026-06-01",
  publisher: { "@type": "Organization", "@id": "https://prestior.es/#organization", name: "Prestior" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://prestior.es/blog/como-monitorizar-tu-reputacion-online/" },
};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
      <Nav />
      
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-2">
          <Link href="/blog/" className="text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>← Blog</Link>
        </div>
        <h1 className="font-display font-black text-white mb-5 leading-tight">Cómo monitorizar tu reputación online en 2026</h1>
        <p className="text-lg leading-relaxed mb-8 border-l-4 border-amber-400 pl-4" style={{color:"rgba(238,240,244,0.5)"}}>La mejor gestión de reputación es la que actúa antes de que el daño sea irreversible. La monitorización continua es lo que hace posible esa reacción temprana. Esta guía explica cómo hacerlo.</p>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="font-display font-bold text-white mt-10 mb-4">Por qué la monitorización activa cambia completamente el juego</h2>
          <p className="text-white/60 leading-relaxed">La diferencia entre detectar un artículo difamatorio el día que se publica y detectarlo seis meses después es enorme. El primer caso permite actuar antes de que se indexe en Google, antes de que otros medios lo citen, y antes de que el daño reputacional se consolide. El segundo caso significa que el contenido ya está indexado, citado y difundido. Revertirlo es significativamente más costoso y lento.</p>

          <h2 className="font-display font-bold text-white mt-10 mb-4">Herramientas gratuitas para empezar hoy</h2>
          <p className="text-white/60 leading-relaxed">Google Alerts (alerts.google.com): configura alertas para tu nombre, variaciones, nombre de tu empresa y términos asociados. Notificación por email cuando aparecen nuevas menciones. Es básico pero funciona para la mayoría de casos. Limitations: no cubre redes sociales, tarda en indexar, y tiene muchos falsos positivos. Complementa con búsquedas manuales periódicas (al menos mensual): tu nombre + "opiniones", tu nombre + "estafa", tu empresa + "problemas".</p>

          <h2 className="font-display font-bold text-white mt-10 mb-4">Cuándo necesitas monitorización profesional</h2>
          <p className="text-white/60 leading-relaxed">Las herramientas gratuitas son insuficientes cuando: tienes un perfil público significativo (periodistas, figuras públicas, CEOs), tu empresa recibe reseñas regularmente, has tenido incidentes reputacionales previos, o estás en un sector donde los ataques coordinados son comunes (salud, finanzas, inmobiliario, restauración). La monitorización profesional añade cobertura de foros y redes sociales, análisis de sentimiento, y lo más importante: un equipo que actúa cuando detecta algo.</p>

          <h2 className="font-display font-bold text-white mt-10 mb-4">La regla del retainer: por qué es necesario después de construir</h2>
          <p className="text-white/60 leading-relaxed">Si has invertido en construir tu Knowledge Panel, aparecer en medios o limpiar tu presencia online, necesitas mantener ese trabajo activo. Los Knowledge Panels se degradan si las fuentes que los alimentan dejan de actualizarse. Los perfiles de autoridad pierden relevancia. Lo construido tiene una vida útil activa, no permanente. El retainer mensual no es un extra opcional — es lo que convierte una inversión puntual en un activo duradero.</p>
        </div>

        <div className="mt-12 bg-stone-950 text-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-black mb-2">¿Quieres vigilar tu reputación de forma profesional?</h3>
          <p className="text-white/40 text-sm mb-5">Análisis gratuito sin compromiso. Respuesta en 24 horas.</p>
          <Link href="/monitorizacion-reputacion/"
            className="inline-flex font-bold px-7 py-3.5 rounded-xl text-sm"
            style={{background:"#c9a84c", color:"#0f1729"}}>
            Solicitar análisis gratuito →
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.07]">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Artículos relacionados</p>
          <div className="flex flex-wrap gap-3">
              <Link href="/monitorizacion-reputacion/proteccion-continua-marca/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Monitorización continua →</Link>
              <Link href="/monitorizacion-reputacion/alertas-reputacion/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Alertas de reputación →</Link>
              <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Auditoría gratuita →</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
