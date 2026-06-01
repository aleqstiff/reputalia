import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Check, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Auditoría de Reputación Online Gratuita — Análisis en 24 horas",
  description: "Solicita tu auditoría de reputación online gratuita. Analizamos qué aparece cuando buscan tu nombre y te decimos exactamente qué mejorar. Sin coste. Sin compromiso.",
  alternates: { canonical: "https://reputalia.es/monitorizacion-reputacion/auditoria-reputacion-online/" },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">Inicio</Link> › <Link href="/monitorizacion-reputacion/" className="hover:text-stone-600">Monitorización</Link> › <span className="text-stone-700">Auditoría gratuita</span>
      </nav>
      <header className="py-16 px-4 text-center" style={{background:"#0f1729"}}>
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{background:"#c9a84c22"}}>
            <Search className="w-6 h-6" style={{color:"#c9a84c"}} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Auditoría de reputación gratuita</h1>
          <p className="text-slate-400 text-lg mb-6">Analizamos qué aparece cuando buscan tu nombre o marca en Google y te enviamos un informe con exactamente qué mejorar. Sin coste. Sin compromiso.</p>
        </div>
      </header>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-black text-stone-900 mb-4">Qué analizamos</h2>
              <ul className="space-y-3">
                {["Primeros 10 resultados de Google cuando buscan tu nombre","Presencia o ausencia de Knowledge Panel","Contenido negativo visible (artículos, reseñas, menciones)","Perfiles en redes: coherencia y fuerza","Presencia en medios","Principales amenazas y oportunidades"].map(i => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-700">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
              <h3 className="font-bold text-stone-900 mb-4">Solicitar auditoría gratuita</h3>
              <p className="text-sm text-stone-500 mb-5">Envíanos tu nombre y la URL de tu web o perfil principal. Te respondemos en menos de 24 horas con el análisis.</p>
              <div className="space-y-3">
                <input type="text" placeholder="Nombre completo o nombre de marca" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-stone-500" />
                <input type="text" placeholder="URL de tu web o perfil principal" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-stone-500" />
                <input type="email" placeholder="Tu correo electrónico" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-stone-500" />
                <textarea rows={3} placeholder="¿Qué te preocupa de tu presencia online? (opcional)" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-stone-500 resize-none" />
                <a href="mailto:hola@reputalia.es?subject=Solicitud de auditoría gratuita"
                  className="block w-full text-center py-3.5 rounded-xl font-bold text-sm transition"
                  style={{background:"#0f1729", color:"white"}}>
                  Solicitar auditoría gratuita →
                </a>
                <p className="text-xs text-stone-400 text-center">Sin coste · Respuesta en 24h · Sin compromiso</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
