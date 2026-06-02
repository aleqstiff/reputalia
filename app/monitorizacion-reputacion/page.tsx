import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Eye, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Monitorización de Reputación Online — Blindaje Continuo",
  description: "Monitorizamos tu nombre y marca de forma continua. Alertas tempranas, mantenimiento de presencia, reacción rápida ante ataques.",
  alternates: { canonical: "https://prestior.es/monitorizacion-reputacion/" },
};

export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Monitorizaci\u00f3n\", \"item\": \"https://prestior.es/monitorizacion-reputacion/\"}]}"}} />
      
      
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> › <span className="text-white/80">Monitorización</span>
      </nav>
      <header className="py-16 px-4 text-center" >
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{background:"#c9a84c22"}}>
            <Eye className="w-6 h-6" style={{color:"#c9a84c"}} />
          </div>
          <h1 className="font-display font-black text-white mb-4" style={{fontSize:"clamp(2rem,4vw,3rem)"}}>Blindaje y monitorización</h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto mb-8">Para que lo que construimos no se caiga en tres meses. Vigilamos tu nombre, mantenemos tu presencia y reaccionamos antes de que el daño sea irreversible.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-7 py-3.5 rounded-xl text-sm"
            style={{background:"#c9a84c", color:"#0f1729"}}>
            Auditoría gratuita →
          </Link>
        </div>
      </header>
      <section className="py-8 md:py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/[0.07] rounded-2xl p-6 mb-6 text-center">
            <p className="text-white/40 text-sm mb-2">Precio mensual</p>
            <div className="text-4xl font-black text-white mb-1">197€ – 490€/mes</div>
            <p className="text-white/40 text-sm">Según nivel de cobertura. Se vende siempre después de entregar el trabajo de construcción.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href:"/monitorizacion-reputacion/alertas-reputacion/", t:"Alertas de reputación", d:"Notificaciones en tiempo real cuando aparece tu nombre en nuevos resultados." },
              { href:"/monitorizacion-reputacion/proteccion-continua-marca/", t:"Protección continua", d:"Mantenimiento activo de tu panel, perfiles y presencia. Reacción ante cualquier amenaza." },
              { href:"/monitorizacion-reputacion/auditoria-reputacion-online/", t:"Auditoría gratuita", d:"El punto de partida. Analizamos tu situación actual sin coste y sin compromiso." },
            ].map(({href,t,d}) => (
              <Link key={href} href={href} className="card p-5 hover:border-white/30  transition">
                <h3 className="font-semibold text-white text-sm mb-2">{t}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
