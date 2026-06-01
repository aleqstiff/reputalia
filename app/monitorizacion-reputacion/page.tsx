import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Eye, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Monitorización de Reputación Online — Blindaje Continuo",
  description: "Monitorizamos tu nombre y marca de forma continua. Alertas tempranas, mantenimiento de presencia, reacción rápida ante ataques.",
  alternates: { canonical: "https://reputalia.es/monitorizacion-reputacion/" },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://reputalia.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Monitorizaci\u00f3n\", \"item\": \"https://reputalia.es/monitorizacion-reputacion/\"}]}"}} />
      
      
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">Inicio</Link> › <span className="text-stone-700">Monitorización</span>
      </nav>
      <header className="py-16 px-4 text-center" style={{background:"#0f1729"}}>
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{background:"#c9a84c22"}}>
            <Eye className="w-6 h-6" style={{color:"#c9a84c"}} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Blindaje y monitorización</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">Para que lo que construimos no se caiga en tres meses. Vigilamos tu nombre, mantenemos tu presencia y reaccionamos antes de que el daño sea irreversible.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-7 py-3.5 rounded-xl text-sm"
            style={{background:"#c9a84c", color:"#0f1729"}}>
            Auditoría gratuita →
          </Link>
        </div>
      </header>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mb-6 text-center">
            <p className="text-stone-500 text-sm mb-2">Precio mensual</p>
            <div className="text-4xl font-black text-stone-900 mb-1">197€ – 490€/mes</div>
            <p className="text-stone-500 text-sm">Según nivel de cobertura. Se vende siempre después de entregar el trabajo de construcción.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href:"/monitorizacion-reputacion/alertas-reputacion/", t:"Alertas de reputación", d:"Notificaciones en tiempo real cuando aparece tu nombre en nuevos resultados." },
              { href:"/monitorizacion-reputacion/proteccion-continua-marca/", t:"Protección continua", d:"Mantenimiento activo de tu panel, perfiles y presencia. Reacción ante cualquier amenaza." },
              { href:"/monitorizacion-reputacion/auditoria-reputacion-online/", t:"Auditoría gratuita", d:"El punto de partida. Analizamos tu situación actual sin coste y sin compromiso." },
            ].map(({href,t,d}) => (
              <Link key={href} href={href} className="bg-white rounded-2xl border border-stone-200 p-5 hover:border-stone-400 hover:shadow-sm transition">
                <h3 className="font-semibold text-stone-900 text-sm mb-2">{t}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
