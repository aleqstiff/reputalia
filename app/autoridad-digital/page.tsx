import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { TrendingUp, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Autoridad Digital — Knowledge Panel, Prensa y Medios Internacionales",
  description: "Construimos tu autoridad digital: Knowledge Panel en Google, Forbes Argentina, medios internacionales, perfiles wiki y verificación de perfiles. Empresa registrada.",
  alternates: { canonical: "https://reputalia.es/autoridad-digital/" },
};

const SERVICIOS = [
  { titulo:"Knowledge Panel Google — Empresa", desc:"Panel de conocimiento para empresas y marcas. El resultado de Google que más confianza genera.", href:"/autoridad-digital/knowledge-panel-google/", precio:"390€–490€", plazo:"4-8 semanas" },
  { titulo:"Knowledge Panel Google — Personal", desc:"Panel personal para profesionales, coaches, CEOs y figuras públicas.", href:"/autoridad-digital/knowledge-panel-google/", precio:"790€–890€", plazo:"4-8 semanas" },
  { titulo:"Salir en prensa — medios nacionales", desc:"Aparición editorial en medios españoles e iberoamericanos de referencia.", href:"/autoridad-digital/salir-en-prensa/", precio:"Consultar", plazo:"4-10 semanas" },
  { titulo:"Aparecer en Forbes (editorial)", desc:"Artículo editorial en Forbes Argentina. Honesto: Forbes Argentina, no la edición global.", href:"/autoridad-digital/aparecer-en-forbes/", precio:"2.900€–3.490€", plazo:"6-12 semanas" },
  { titulo:"Pack medios internacionales top", desc:"NYPost, BBC, Wired, PageSix, People. Para quienes necesitan autoridad global.", href:"/autoridad-digital/salir-en-prensa/", precio:"6.900€–7.900€", plazo:"8-16 semanas" },
  { titulo:"Pack wikis de autoridad", desc:"FoundersWiki, WikiAlpha, Crunchbase, IMDb. No es Wikipedia; véndelo como perfiles wiki de autoridad.", href:"/autoridad-digital/wikipedia-perfil/", precio:"1.490€", plazo:"3-6 semanas" },
  { titulo:"Marca personal en Google", desc:"Dominamos los primeros resultados de Google cuando buscan tu nombre.", href:"/autoridad-digital/marca-personal-google/", precio:"Desde 1.490€", plazo:"8-16 semanas" },
  { titulo:"Verificación de perfiles (IG/TikTok)", desc:"Gestión del proceso de verificación en redes sociales.", href:"/autoridad-digital/verificacion-perfiles/", precio:"Consultar", plazo:"Variable" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">Inicio</Link> › <span className="text-stone-700">Autoridad digital</span>
      </nav>
      <header className="py-16 px-4 text-center" style={{background:"#0f1729"}}>
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{background:"#c9a84c22"}}>
            <TrendingUp className="w-6 h-6" style={{color:"#c9a84c"}} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Autoridad digital</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">Construimos presencia que genera confianza: Knowledge Panel, medios de referencia, perfiles de autoridad. Resultados documentados, sin humo.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-7 py-3.5 rounded-xl text-sm"
            style={{background:"#c9a84c", color:"#0f1729"}}>
            Auditoría gratuita →
          </Link>
        </div>
      </header>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
            <p className="text-amber-800 text-sm font-semibold mb-1">Sobre la honestidad en este sector</p>
            <p className="text-amber-700 text-sm">Forbes Argentina es una edición real de Forbes. Un wiki de autoridad no es Wikipedia. Lo decimos siempre. Es lo que nos separa del "humo" y de los reembolsos.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {SERVICIOS.map(s => (
              <Link key={s.titulo} href={s.href} className="flex gap-4 p-5 bg-stone-50 rounded-2xl border border-stone-200 hover:border-stone-400 hover:shadow-sm transition group">
                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-stone-400 group-hover:text-stone-700 transition" />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1 gap-2">
                    <h3 className="font-semibold text-stone-900 text-sm">{s.titulo}</h3>
                    <span className="text-xs text-stone-500 flex-shrink-0">{s.precio}</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed mb-1">{s.desc}</p>
                  <span className="text-xs text-stone-400">⏱ {s.plazo}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="¿Cuánta autoridad tienes ahora mismo?" sub="Búscate en Google. Si no te encontramos, te decimos exactamente qué construir primero." />
      <Footer />
    </div>
  );
}
