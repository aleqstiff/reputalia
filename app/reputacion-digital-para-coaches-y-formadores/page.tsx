import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Reputación Digital para Coaches y Formadores 2026 | Prestior",
  description: "Para un coach o formador, la reputación digital es el activo más importante. Esta guía explica cómo construirla y protegerla.",
  keywords: ['reputacion digital coaches', 'reputacion online formadores', 'knowledge panel coach', 'marca personal coaching', 'presencia digital coach'],
  alternates: { canonical: "https://prestior.es/reputacion-digital-para-coaches-y-formadores/" },
  openGraph: { type: "website", title: "Reputación Digital para Coaches y Formadores 2026 | Prestior", description: "Para un coach o formador, la reputación digital es el activo más importante. Esta guía explica cómo construirla y protegerla." },
};
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <section className="py-16 text-center" style={{borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display font-black text-white text-4xl md:text-5xl mb-5 leading-tight">Reputación digital para coaches y formadores</h1>
          <p className="text-lg mb-8" style={{color:"rgba(238,240,244,0.5)"}}>En el sector de coaching y formación, la reputación online es el principal factor de decisión de compra. Esto es lo que necesitas.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-8 py-4 rounded-xl"
            style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
            Análisis gratuito para coaches →
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-white text-2xl mb-4">Por qué el sector coaching necesita reputación digital sólida</h2>
          <p className="leading-relaxed mb-8" style={{color:"rgba(238,240,244,0.55)"}}>El 89% de los potenciales clientes de coaching y formación buscan al coach en Google antes de contratar. Si el resultado que encuentran no genera confianza inmediata, el cliente se va a otro coach. La saturación del mercado de coaching hace que la diferenciación digital sea más importante que nunca: dos coaches con trayectorias similares tienen resultados muy distintos si uno tiene Knowledge Panel y el otro no.</p>
          <h2 className="font-display font-bold text-white text-2xl mb-4">Los elementos de reputación digital más importantes para coaches</h2>
          <p className="leading-relaxed mb-10" style={{color:"rgba(238,240,244,0.55)"}}>Para un coach, la prioridad número uno es el Knowledge Panel en Google: genera credibilidad instantánea y aparece antes de cualquier otro resultado. Después, apariciones en medios del sector (revistas de empresa, prensa económica) que validen tu expertise. En tercer lugar, gestión de reseñas: las opiniones de clientes anteriores son el factor de decisión más potente en este sector.</p>
          <div className="rounded-2xl p-8 text-center" style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)"}}>
            <p className="font-bold text-white text-lg mb-2">Análisis de reputación gratuito</p>
            <p className="text-sm mb-5" style={{color:"rgba(238,240,244,0.4)"}}>Sin compromiso. Respuesta en menos de 24 horas.</p>
            <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
              className="inline-flex font-bold px-8 py-4 rounded-xl text-sm"
              style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
              Análisis gratuito para coaches →
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
