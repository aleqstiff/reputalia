import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Gestión de Reputación Online en Barcelona 2026 | Prestior",
  description: "Prestior gestiona la reputación digital de startups, empresas y directivos en Barcelona. Análisis gratuito sin compromiso.",
  keywords: ['gestion reputacion online barcelona', 'reputacion digital barcelona', 'orm barcelona', 'marca personal barcelona', 'reputacion empresa barcelona'],
  alternates: { canonical: "https://prestior.es/gestion-reputacion-online-barcelona/" },
  openGraph: { type: "website", title: "Gestión de Reputación Online en Barcelona 2026 | Prestior", description: "Prestior gestiona la reputación digital de startups, empresas y directivos en Barcelona. Análisis gratuito sin compromiso." },
};
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <section className="py-16 text-center" style={{borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display font-black text-white text-4xl md:text-5xl mb-5 leading-tight">Gestión de reputación digital en Barcelona</h1>
          <p className="text-lg mb-8" style={{color:"rgba(238,240,244,0.5)"}}>Barcelona, hub de startups y empresas internacionales, necesita reputación digital a la altura.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-8 py-4 rounded-xl"
            style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
            Análisis gratuito para empresas Barcelona →
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-white text-2xl mb-4">El ecosistema empresarial de Barcelona y la reputación digital</h2>
          <p className="leading-relaxed mb-8" style={{color:"rgba(238,240,244,0.55)"}}>Barcelona es la capital del ecosistema startup español y tiene una proyección internacional alta. Muchas empresas en Barcelona tienen inversores extranjeros o clientes internacionales que buscan en Google antes de invertir. La reputación digital en inglés y castellano es relevante para el tejido empresarial barcelonés.</p>
          <h2 className="font-display font-bold text-white text-2xl mb-4">Servicios de reputación más demandados en Barcelona</h2>
          <p className="leading-relaxed mb-10" style={{color:"rgba(238,240,244,0.55)"}}>Prestior trabaja con startups, scale-ups y empresas consolidadas en Barcelona en: construcción de Knowledge Panel para fundadores, gestión de cobertura mediática nacional e internacional, eliminación de contenido negativo en Google, y reputación en IA para empresas con proyección internacional.</p>
          <div className="rounded-2xl p-8 text-center" style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)"}}>
            <p className="font-bold text-white text-lg mb-2">Análisis de reputación gratuito</p>
            <p className="text-sm mb-5" style={{color:"rgba(238,240,244,0.4)"}}>Sin compromiso. Respuesta en menos de 24 horas.</p>
            <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
              className="inline-flex font-bold px-8 py-4 rounded-xl text-sm"
              style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
              Análisis gratuito para empresas Barcelona →
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
