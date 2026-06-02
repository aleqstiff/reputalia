import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Reputación en IA y GEO — Cómo te describe ChatGPT y Perplexity",
  description: "Gestionamos cómo te describen ChatGPT, Perplexity y Gemini. GEO para que los modelos de IA transmitan la narrativa correcta sobre ti. Servicio nuevo 2026.",
  alternates: { canonical: "https://prestior.es/autoridad-digital/reputacion-ia-geo/" },
};

export default function GeoPage() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> ›{" "}
        <Link href="/autoridad-digital/" className="hover:text-white/70 transition-colors">Autoridad digital</Link> ›{" "}
        <span className="text-white/80">Reputación en IA</span>
      </nav>
      <header className="py-14 px-5 relative overflow-hidden" >
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-amber-300 bg-yellow-500/100/10 rounded-full px-3 py-1 text-xs font-semibold text-amber-400 mb-5">
            Nuevo servicio 2026
          </div>
          <h1 className="font-display font-black text-white mb-4" style={{fontSize:"clamp(2rem,4vw,3rem)"}}>Reputación en IA — GEO</h1>
          <p className="text-lg max-w-2xl" style={{color:"rgba(238,240,244,0.45)",fontWeight:300}}>
            ¿Qué dice ChatGPT cuando alguien pregunta por ti? Gestionamos tu narrativa en los modelos de IA para que la respuesta sea la correcta.
          </p>
        </div>
      </header>
      <section className="py-8 md:py-12 px-5">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-white/60 leading-relaxed">Millones de personas usan ChatGPT, Perplexity y Gemini para investigar personas y empresas. Las IAs responden basándose en datos que pueden ser incorrectos, desactualizados o dañinos. GEO (Generative Engine Optimization) es la disciplina de controlar esa narrativa.</p>
          <div className="space-y-3">
            {[
              ["Auditoría de presencia actual en IA","Analizamos qué dicen ChatGPT, Perplexity y Gemini sobre ti ahora mismo."],
              ["Estrategia de fuentes","Identificamos qué alimenta la narrativa actual y qué hay que crear o fortalecer."],
              ["Contenido GEO-optimizado","Generamos contenido en fuentes de alta autoridad que los modelos priorizan."],
              ["Monitorización continua","Los modelos se actualizan — monitorizamos para detectar cambios."],
            ].map(([t,d]) => (
              <div key={t} className="flex gap-4 p-4 card">
                <div className="w-4 h-4 rounded-full bg-stone-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t}</p>
                  <p className="text-xs text-white/40 mt-0.5">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/[0.07]">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-wider w-full mb-1">Servicios relacionados</p>
            {[["Knowledge Panel","/autoridad-digital/knowledge-panel-google/"],["Salir en prensa","/autoridad-digital/salir-en-prensa/"],["Marca personal","/autoridad-digital/marca-personal-google/"]].map(([l,h]) => (
              <Link key={h} href={h} className="text-sm border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/30 transition text-white/60">{l} →</Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="¿Qué dice la IA sobre ti?" sub="Análisis gratuito: abrimos ChatGPT, Perplexity y Gemini y te decimos exactamente qué narrativa tienen." />
      <Footer />
    </div>
  );
}
