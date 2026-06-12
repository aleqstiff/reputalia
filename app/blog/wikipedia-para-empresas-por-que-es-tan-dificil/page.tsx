import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Wikipedia para Empresas: Por Qué es Tan Difícil (y Qué Hacer) 2026",
  description: "Wikipedia rechaza la mayoría de páginas de empresas. Esta guía explica los criterios reales de notabilidad y qué alternativas funcionan igual de bien.",
  keywords: ['wikipedia empresa', 'crear pagina wikipedia empresa', 'wikipedia rechaza empresa', 'notabilidad wikipedia empresa', 'alternativa wikipedia empresa'],
  alternates: { canonical: "https://prestior.es/blog/wikipedia-para-empresas-por-que-es-tan-dificil/" },
  openGraph: { type: "article", title: "Wikipedia para Empresas: Por Qué es Tan Difícil (y Qué Hacer) 2026", description: "Wikipedia rechaza la mayoría de páginas de empresas. Esta guía explica los criterios reales de notabilidad y qué alternativas funcionan igual de bien.", publishedTime: "2026-06-10" },
};
const schema = {"@context":"https://schema.org","@type":"Article","headline":"Wikipedia para Empresas: Por Qué es Tan Difícil (y Qué Hacer) 2026","description":"Wikipedia rechaza la mayoría de páginas de empresas. Esta guía explica los criterios reales de notabilidad y qué alternativas funcionan igual de bien.","datePublished":"2026-06-10","publisher":{"@type":"Organization","name":"Prestior","url":"https://prestior.es"}};
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
        <h1 className="font-display font-black text-white mb-5 leading-tight">Wikipedia para empresas: la verdad sobre por qué te rechazan</h1>
        <p className="text-lg leading-relaxed mb-8 border-l-4 border-amber-400 pl-4" style={{color:"rgba(238,240,244,0.5)"}}>Muchas empresas intentan crear su página en Wikipedia y son rechazadas. No es arbitrario: hay criterios concretos que muy pocos conocen.</p>
        <div className="prose prose-invert max-w-none">
          
          <h2 className="font-display font-bold text-white mt-10 mb-4">Por qué Wikipedia rechaza empresas</h2>
          <p className="text-white/60 leading-relaxed">Wikipedia tiene criterios de notabilidad muy estrictos. Para que una empresa tenga página en Wikipedia, necesita cobertura significativa en fuentes independientes y de referencia (no notas de prensa, no contenido pagado, no redes sociales). La cobertura debe ser sustancial: artículos largos que traten la empresa como tema principal, en medios con criterio editorial independiente. La mayoría de empresas medianas simplemente no tiene ese nivel de cobertura, aunque sean empresas sólidas y respetadas.</p>
          <h2 className="font-display font-bold text-white mt-10 mb-4">Las alternativas que funcionan igual (o mejor)</h2>
          <p className="text-white/60 leading-relaxed">Las wikis alternativas (FoundersWiki, WikiAlpha, Pantheon) tienen criterios de notabilidad más accesibles y Google las indexa y las usa como fuente de datos con autoridad similar a Wikipedia. Para la construcción del Knowledge Panel y para que la IA te conozca, estas wikis son tan efectivas como Wikipedia. Prestior trabaja con estas wikis como parte del proceso estándar de construcción de autoridad.</p>
          <h2 className="font-display font-bold text-white mt-10 mb-4">Cuándo sí es posible tener página en Wikipedia</h2>
          <p className="text-white/60 leading-relaxed">Una empresa puede aspirar a Wikipedia cuando tiene: cobertura en varios medios nacionales o internacionales de referencia que hablen de la empresa de forma sustancial (no solo menciones), ha tenido relevancia en su sector que medios independientes hayan documentado, o tiene un fundador o producto lo suficientemente notorio para que Wikipedia le vincule. El proceso de creación de la página en Wikipedia requiere conocimiento de sus políticas editoriales para evitar el rechazo.</p>
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
