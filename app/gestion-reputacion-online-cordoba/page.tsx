import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Gestión de Reputación Online en Córdoba 2026 | Prestior",
  description: "Prestior gestiona la reputación digital de empresas y profesionales en Córdoba. Knowledge Panel, eliminación contenido negativo y monitorización. Análisis gratuito.",
  keywords: ["gestion reputacion online cordoba","reputacion digital cordoba","orm cordoba","knowledge panel cordoba","reputacion empresa cordoba"],
  alternates: { canonical: "https://prestior.es/gestion-reputacion-online-cordoba/" },
};
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <section className="py-16 text-center" style={{borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display font-black text-white mb-5 leading-tight" style={{fontSize:"clamp(2rem,5vw,3.2rem)"}}>
            Gestión de reputación digital en Córdoba
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{color:"rgba(238,240,244,0.5)"}}>Empresas y profesionales en Córdoba con presencia digital que transmite confianza y autoridad.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-8 py-4 rounded-xl"
            style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
            Análisis gratuito &#8594;
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-white text-2xl mb-4 mt-4">Córdoba y la reputación digital</h2>
          <p className="leading-relaxed mb-8" style={{color:"rgba(238,240,244,0.55)"}}>Córdoba tiene un sector turístico y cultural de primer nivel, junto con una economía local basada en servicios, agricultura y comercio. Las empresas cordobesas están incrementando su presencia digital, lo que hace que la gestión de la reputación online sea cada vez más relevante.</p>
          <h2 className="font-display font-bold text-white text-2xl mb-4">Servicios de reputación más demandados en Córdoba</h2>
          <p className="leading-relaxed mb-10" style={{color:"rgba(238,240,244,0.55)"}}>Los servicios con mayor demanda en Córdoba son la gestión de reseñas para hostelería, restauración y comercio local, la construcción de presencia digital para profesionales y autónomos, y la eliminación de contenido negativo que afecta a la captación de clientes.</p>
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
