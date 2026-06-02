import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cómo funciona el derecho al olvido en Google: guía completa 2026",
  description: "El derecho al olvido permite solicitar a Google que desindexe resultados. Esta guía explica exactamente cómo funciona, qué contenido se puede desindexar y el proceso paso a paso.",
  keywords: ["derecho al olvido google", "cómo funciona derecho olvido", "solicitar derecho olvido", "desindexar google", "RGPD derecho supresión"],
  alternates: { canonical: "https://prestior.es/blog/como-funciona-derecho-al-olvido-google/" },
  openGraph: {
    type: "article",
    title: "Cómo funciona el derecho al olvido en Google: guía completa 2026",
    description: "El derecho al olvido permite solicitar a Google que desindexe resultados. Esta guía explica exactamente cómo funciona, qué contenido se puede desindexar y el proceso paso a paso.",
    publishedTime: "2026-06-01",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo funciona el derecho al olvido en Google",
  description: "El derecho al olvido permite solicitar a Google que desindexe resultados. Esta guía explica exactamente cómo funciona, qué contenido se puede desindexar y el proceso paso a paso.",
  datePublished: "2026-06-01",
  publisher: { "@type": "Organization", "@id": "https://prestior.es/#organization", name: "Prestior" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://prestior.es/blog/como-funciona-derecho-al-olvido-google/" },
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
        <h1 className="font-display font-black text-white mb-5 leading-tight">Cómo funciona el derecho al olvido en Google</h1>
        <p className="text-lg leading-relaxed mb-8 border-l-4 border-amber-400 pl-4" style={{color:"rgba(238,240,244,0.5)"}}>El derecho al olvido te permite solicitar a Google que deje de mostrar ciertos resultados cuando buscan tu nombre. Esta guía explica exactamente qué es, qué se puede hacer y qué no, y cómo es el proceso real.</p>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="font-display font-bold text-white mt-10 mb-4">Qué es exactamente el derecho al olvido</h2>
          <p className="text-white/60 leading-relaxed">El derecho al olvido (también llamado derecho de supresión en el RGPD) es el derecho a solicitar a Google y otros buscadores que desindexen ciertos resultados de búsqueda sobre una persona. Fue reconocido por el Tribunal de Justicia de la UE en 2014 (caso Google Spain) y codificado en el RGPD (artículo 17) en 2018. Importante: desindexar no es lo mismo que borrar. El contenido puede seguir existiendo en la web; lo que desaparece es que Google lo muestre cuando buscan tu nombre.</p>

          <h2 className="font-display font-bold text-white mt-10 mb-4">Qué contenido se puede desindexar y qué no</h2>
          <p className="text-white/60 leading-relaxed">Se puede desindexar: información obsoleta (empleo anterior de hace 20 años), datos personales excesivos sin interés actual, noticias sobre eventos menores donde la persona no es figura pública, información de personas privadas sin relevancia pública actual. No se puede desindexar: información sobre figuras públicas en el ejercicio de sus funciones, contenido de interés público legítimo, información sobre delitos graves sin prescribir, datos necesarios para el interés público.</p>

          <h2 className="font-display font-bold text-white mt-10 mb-4">El proceso de solicitud: paso a paso</h2>
          <p className="text-white/60 leading-relaxed">Google tiene un formulario específico en su Centro de Privacidad. Se puede acceder en myaccount.google.com o buscando "solicitud de eliminación Google información personal". Necesitas: identificación personal, URLs exactas a desindexar, y argumentación de por qué cumplen los criterios. Google tiene 30 días para responder. Si desestima la solicitud, se puede recurrir ante la Agencia Española de Protección de Datos (AEPD).</p>

          <h2 className="font-display font-bold text-white mt-10 mb-4">Por qué fallan la mayoría de solicitudes que se hacen sin ayuda</h2>
          <p className="text-white/60 leading-relaxed">Las causas más frecuentes de rechazo: argumentación insuficiente (no basta con decir "no me gusta"), no cumplir los criterios del RGPD (el contenido tiene interés público), formulario incorrecto, documentación incompleta, y seleccionar incorrectamente el tipo de contenido. Una solicitud bien preparada con la argumentación legal correcta tiene tasas de éxito muy superiores.</p>
        </div>

        <div className="mt-12 bg-stone-950 text-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-black mb-2">¿Hay resultados que quieres que desaparezcan de Google?</h3>
          <p className="text-white/40 text-sm mb-5">Análisis gratuito sin compromiso. Respuesta en 24 horas.</p>
          <Link href="/proteccion-reputacion/derecho-al-olvido/"
            className="inline-flex font-bold px-7 py-3.5 rounded-xl text-sm"
            style={{background:"#c9a84c", color:"#0f1729"}}>
            Solicitar análisis gratuito →
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.07]">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Artículos relacionados</p>
          <div className="flex flex-wrap gap-3">
              <Link href="/proteccion-reputacion/derecho-al-olvido/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Gestión derecho al olvido →</Link>
              <Link href="/proteccion-reputacion/eliminar-noticias-google/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Eliminar noticias →</Link>
              <Link href="/proteccion-reputacion/difamacion-online/" className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">Difamación online →</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
