import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Conoce Tu Reputación Online en 5 Minutos — Diagnóstico Gratuito 2026",
  description: "Sigue estos pasos para ver exactamente cómo te ve Google, ChatGPT y las IAs hoy mismo. Diagnóstico gratuito en menos de 5 minutos.",
  keywords: ['diagnostico reputacion online', 'como ver mi reputacion digital', 'buscar mi nombre en google', 'reputacion online personal', 'analisis reputacion digital gratis'],
  alternates: { canonical: "https://prestior.es/blog/conoce-tu-reputacion-online-en-5-minutos/" },
  openGraph: { type: "article", title: "Conoce Tu Reputación Online en 5 Minutos — Diagnóstico Gratuito 2026", description: "Sigue estos pasos para ver exactamente cómo te ve Google, ChatGPT y las IAs hoy mismo. Diagnóstico gratuito en menos de 5 minutos.", publishedTime: "2026-06-10" },
};
const schema = {"@context":"https://schema.org","@type":"Article","headline":"Conoce Tu Reputación Online en 5 Minutos — Diagnóstico Gratuito 2026","description":"Sigue estos pasos para ver exactamente cómo te ve Google, ChatGPT y las IAs hoy mismo. Diagnóstico gratuito en menos de 5 minutos.","datePublished":"2026-06-10","publisher":{"@type":"Organization","name":"Prestior","url":"https://prestior.es"}};
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
        <h1 className="font-display font-black text-white mb-5 leading-tight">Conoce tu reputación online en 5 minutos</h1>
        <p className="text-lg leading-relaxed mb-8 border-l-4 border-amber-400 pl-4" style={{color:"rgba(238,240,244,0.5)"}}>Antes de contratar cualquier servicio de reputación, deberías saber exactamente cuál es tu punto de partida. Esto es lo que tienes que mirar.</p>
        <div className="prose prose-invert max-w-none">
          
          <h2 className="font-display font-bold text-white mt-10 mb-4">Paso 1: Búsqueda básica de tu nombre en Google</h2>
          <p className="text-white/60 leading-relaxed">Abre una ventana de incógnito (para que los resultados no estén personalizados) y busca tu nombre completo con comillas: 'Tu Nombre Apellido'. Lo que ves en los primeros 10 resultados es lo que ve cualquier persona que te busque. Evalúa: ¿apareces tú en el 80% de los resultados? ¿Hay algo negativo o que no te representa? ¿Aparece un Knowledge Panel? ¿Qué imagen da la primera impresión?</p>
          <h2 className="font-display font-bold text-white mt-10 mb-4">Paso 2: Buscar tu nombre + términos negativos</h2>
          <p className="text-white/60 leading-relaxed">Prueba combinaciones como 'Tu Nombre estafa', 'Tu Nombre opiniones', 'Tu Nombre problemas'. Si hay algún resultado negativo que no conocías, significa que hay trabajo por hacer. Muchos profesionales descubren en este paso reseñas negativas en foros o menciones en webs de quejas que llevan meses sin gestionar.</p>
          <h2 className="font-display font-bold text-white mt-10 mb-4">Paso 3: Preguntarle a la IA</h2>
          <p className="text-white/60 leading-relaxed">Abre ChatGPT y escribe: '¿Quién es [Tu Nombre]? ¿Qué sabes de [Tu Empresa]?' Si la IA dice que no te conoce, es que tienes hueco de presencia que llenar antes de que lo llene alguien con información incorrecta. Si la IA dice algo incorrecto sobre ti, es urgente actuar.</p>
          <h2 className="font-display font-bold text-white mt-10 mb-4">Qué hacer con los resultados</h2>
          <p className="text-white/60 leading-relaxed">Si todo está bien: implementar blindaje preventivo para que siga así. Si hay resultados negativos que no conocías: actuar antes de que se expandan. Si la IA no te conoce: construir presencia de autoridad ahora. Si hay un Knowledge Panel incorrecto o inexistente: es la prioridad número uno. Prestior ofrece un análisis completo gratuito con recomendaciones específicas.</p>
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
