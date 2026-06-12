import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Qué es el Derecho al Olvido en Google y Cómo Solicitarlo 2026 | Prestior",
  description: "El derecho al olvido te permite eliminar de Google información personal antigua o irrelevante. Esta guía explica exactamente cómo funciona y cuándo aplica.",
  keywords: ['derecho al olvido google', 'solicitar derecho al olvido', 'eliminar informacion personal google', 'rgpd derecho supresion google', 'como borrar resultados google'],
  alternates: { canonical: "https://prestior.es/blog/que-es-el-derecho-al-olvido-y-como-solicitarlo/" },
  openGraph: { type: "article", title: "Qué es el Derecho al Olvido en Google y Cómo Solicitarlo 2026 | Prestior", description: "El derecho al olvido te permite eliminar de Google información personal antigua o irrelevante. Esta guía explica exactamente cómo funciona y cuándo aplica.", publishedTime: "2026-06-10" },
};
const schema = {"@context":"https://schema.org","@type":"Article","headline":"Qué es el Derecho al Olvido en Google y Cómo Solicitarlo 2026 | Prestior","description":"El derecho al olvido te permite eliminar de Google información personal antigua o irrelevante. Esta guía explica exactamente cómo funciona y cuándo aplica.","datePublished":"2026-06-10","publisher":{"@type":"Organization","name":"Prestior","url":"https://prestior.es"}};
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
      <Nav />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-2">
          <Link href="/blog/" className="text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>← Blog</Link>
        </div>
        <p className="text-xs mb-3" style={{color:"rgba(238,240,244,0.3)"}}><time dateTime="2026-06-10">2026-06-10</time> · Prestior</p>
        <h1 className="font-display font-black text-white mb-5 leading-tight">Derecho al olvido en Google: qué es y cómo usarlo</h1>
        <p className="text-lg leading-relaxed mb-8 border-l-4 border-amber-400 pl-4" style={{color:"rgba(238,240,244,0.5)"}}>El RGPD te da el derecho a que Google elimine información personal sobre ti. Pero no cualquier información, ni siempre, ni de cualquier manera.</p>
        <div className="prose prose-invert max-w-none">
          
          <h2 className="font-display font-bold text-white mt-10 mb-4">Qué es exactamente el derecho al olvido</h2>
          <p className="text-white/60 leading-relaxed">El derecho al olvido (oficialmente, derecho a la supresión del artículo 17 del RGPD) permite a los ciudadanos europeos solicitar que se eliminen de los resultados de búsqueda de Google información personal que ya no es relevante, que es incorrecta, o cuya publicación ya no tiene justificación pública. Importante: Google puede eliminar el resultado de búsqueda, pero no necesariamente el contenido del sitio origen.</p>
          <h2 className="font-display font-bold text-white mt-10 mb-4">Cuándo aplica el derecho al olvido</h2>
          <p className="text-white/60 leading-relaxed">El derecho al olvido aplica cuando: la información es antigua y ya no es relevante (condenas ya cumplidas, cargos que ya no ejerces), la información es incorrecta o incompleta, el interés público no justifica mantener la información visible, o el consentimiento que se dio para publicarla fue retirado. No aplica cuando hay un interés legítimo del público en conocer la información (personajes públicos, delitos graves recientes).</p>
          <h2 className="font-display font-bold text-white mt-10 mb-4">Cómo presentar la solicitud correctamente</h2>
          <p className="text-white/60 leading-relaxed">La solicitud se presenta directamente a Google a través del formulario oficial de eliminación de contenido por motivos de privacidad. Debes especificar la URL exacta, la información que deseas eliminar y el motivo jurídico concreto. Google evalúa cada caso individualmente. Si rechaza la solicitud, puedes recurrir ante la Agencia Española de Protección de Datos (AEPD), que tiene capacidad para obligar a Google a eliminar el resultado.</p>
          <h2 className="font-display font-bold text-white mt-10 mb-4">Plazos y tasas de éxito</h2>
          <p className="text-white/60 leading-relaxed">Google responde en 30-60 días hábiles. La tasa de éxito varía enormemente según el tipo de solicitud: las solicitudes bien fundamentadas jurídicamente tienen tasas superiores al 60%. Prestior gestiona este proceso con argumentación legal específica para cada caso.</p>
        </div>
        <div className="mt-12 bg-stone-950 text-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-black mb-2">¿Necesitas gestionar tu reputación digital?</h3>
          <p className="text-white/40 text-sm mb-5">Análisis gratuito sin compromiso. Respuesta en 24 horas.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-7 py-3.5 rounded-xl text-sm"
            style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
            Análisis gratuito →
          </Link>
        </div>
        <p className="text-center mt-6"><Link href="/blog/" className="text-xs hover:underline" style={{color:"rgba(238,240,244,0.3)"}}>← Ver todos los artículos</Link></p>
      </div>
      <Footer />
    </div>
  );
}
