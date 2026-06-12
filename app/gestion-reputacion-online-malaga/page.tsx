import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Gestión de Reputación Online en Málaga 2026 | Prestior",
  description: "Prestior gestiona la reputación digital de startups y empresas en Málaga. Hub tech con necesidades de reputación digital avanzada.",
  keywords: ['gestion reputacion online malaga', 'reputacion digital malaga', 'orm malaga', 'startup reputacion malaga', 'reputacion tech malaga'],
  alternates: { canonical: "https://prestior.es/gestion-reputacion-online-malaga/" },
  openGraph: { type: "website", title: "Gestión de Reputación Online en Málaga 2026 | Prestior", description: "Prestior gestiona la reputación digital de startups y empresas en Málaga. Hub tech con necesidades de reputación digital avanzada." },
};
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <section className="py-16 text-center" style={{borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display font-black text-white mb-5 leading-tight" style={{fontSize:"clamp(2rem,5vw,3.2rem)"}}>
            Reputación digital en Málaga
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{color:"rgba(238,240,244,0.5)"}}>Málaga, referente tecnológico europeo, donde la reputación digital es parte esencial de la propuesta de valor.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-8 py-4 rounded-xl"
            style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
            Análisis gratuito Málaga &#8594;
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-white text-2xl mb-4 mt-10">Málaga como hub tech y la reputación digital</h2><p className="leading-relaxed mb-6" style={{color:"rgba(238,240,244,0.55)"}}>Málaga se ha convertido en uno de los principales polos de atracción de startups y empresas tecnológicas en Europa, con empresas como Google, TikTok y cientos de startups internacionales. En este entorno, la reputación digital de las empresas y sus fundadores es especialmente importante para captar talento, inversión y clientes internacionales.</p><h2 className="font-display font-bold text-white text-2xl mb-4 mt-10">Servicios específicos para el ecosistema de Málaga</h2><p className="leading-relaxed mb-6" style={{color:"rgba(238,240,244,0.55)"}}>Para startups y empresas tech en Málaga: Knowledge Panel en inglés y castellano para fundadores con proyección internacional, apariciones en medios tech internacionales, reputación en IA (especialmente relevante en el sector tech), y gestión de crisis para empresas con alta exposición en redes sociales.</p>
          <div className="rounded-2xl p-8 text-center mt-10" style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)"}}>
            <p className="font-bold text-white text-xl mb-2">An&#225;lisis de reputaci&#243;n gratuito</p>
            <p className="text-sm mb-5" style={{color:"rgba(238,240,244,0.4)"}}>Sin compromiso. Respuesta en menos de 24 horas.</p>
            <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
              className="inline-flex font-bold px-8 py-4 rounded-xl text-sm"
              style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
              Análisis gratuito Málaga &#8594;
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
