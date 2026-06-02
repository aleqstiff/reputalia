import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Autoridad Digital — Knowledge Panel, Forbes y Medios | Prestior",
  description: "Construimos tu autoridad en Google: Knowledge Panel, Forbes Argentina, wikis de autoridad, marca personal y reputación en IA. Resultados documentados.",
  alternates: { canonical: "https://prestior.es/autoridad-digital/" },
};

const SERVICIOS = [
  { titulo:"Knowledge Panel Google — Empresa", desc:"Panel de conocimiento para empresas y marcas. El resultado de Google que más confianza genera.", href:"/autoridad-digital/knowledge-panel-google/", precio:"390€–490€", plazo:"4-8 semanas" },
  { titulo:"Knowledge Panel Google — Personal", desc:"Panel personal para profesionales, coaches, CEOs y figuras públicas.", href:"/autoridad-digital/knowledge-panel-google/", precio:"790€–890€", plazo:"4-8 semanas" },
  { titulo:"Salir en prensa — medios nacionales", desc:"Aparición editorial en medios españoles e iberoamericanos de referencia.", href:"/autoridad-digital/salir-en-prensa/", precio:"Consultar", plazo:"4-10 semanas" },
  { titulo:"Aparecer en Forbes (editorial)", desc:"Artículo editorial en Forbes Argentina. Honesto: Forbes Argentina, no la edición global.", href:"/autoridad-digital/aparecer-en-forbes/", precio:"2.900€–3.490€", plazo:"6-12 semanas" },
  { titulo:"Pack wikis de autoridad", desc:"Perfiles en FoundersWiki, WikiAlpha y otras wikis de referencia que rankean en Google.", href:"/autoridad-digital/wikipedia-perfil/", precio:"1.490€", plazo:"3-6 semanas" },
  { titulo:"Pack medios top internacionales", desc:"NYPost, BBC, Wired, People y otros. Para quienes necesitan autoridad a nivel global.", href:"/autoridad-digital/aparecer-en-forbes/", precio:"6.900€–7.900€", plazo:"8-16 semanas" },
  { titulo:"Marca personal en Google", desc:"Dominamos los primeros resultados de Google cuando buscan tu nombre.", href:"/autoridad-digital/marca-personal-google/", precio:"Desde 1.490€", plazo:"8-16 semanas" },
  { titulo:"Reputación en IA — GEO", desc:"Controlamos qué dice ChatGPT, Perplexity y Gemini sobre ti. Tendencia clave 2026.", href:"/autoridad-digital/reputacion-ia-geo/", precio:"Consultar", plazo:"Variable" },
];

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />
      
      {/* HERO */}
      <div style={{ background: "var(--bg2)", borderBottom: "1px solid var(--bdr)", padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, fontSize: 12, color: "rgba(240,240,240,.3)", fontFamily: "'DM Mono', monospace" }}>
            <Link href="/" style={{ color: "inherit" }}>Inicio</Link>
            <span> › </span>
            <span style={{ color: "rgba(240,240,240,.6)" }}>Autoridad digital</span>
          </div>
          <div className="eyebrow">Servicios de autoridad</div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem,5vw,3.6rem)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "#f0f0f0", marginBottom: 16 }}>
            Autoridad digital
          </h1>
          <p style={{ fontSize: "clamp(1rem,2vw,1.1rem)", color: "rgba(240,240,240,.55)", lineHeight: 1.75, fontWeight: 300, maxWidth: 560, marginBottom: 28 }}>
            Construimos presencia que genera confianza: Knowledge Panel, medios de referencia, perfiles de autoridad. Resultados documentados, sin humo.
          </p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            Auditoría gratuita →
          </Link>
        </div>
      </div>

      {/* AVISO HONESTIDAD */}
      <div style={{ background: "rgba(201,168,76,.06)", borderBottom: "1px solid rgba(201,168,76,.15)", padding: "16px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>⚠️</span>
          <p style={{ fontSize: 13, color: "rgba(201,168,76,.9)", lineHeight: 1.6, fontWeight: 300 }}>
            <strong>Sobre la honestidad en este sector:</strong> Forbes Argentina es una edición real de Forbes. Un wiki de autoridad no es Wikipedia. Lo decimos siempre. Es lo que nos separa del "humo" y de los reembolsos.
          </p>
        </div>
      </div>

      {/* SERVICIOS GRID */}
      <section className="sec">
        <div className="sec-inner">
          <div className="eyebrow">Servicios disponibles</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {SERVICIOS.map(s => (
              <Link key={s.titulo} href={s.href} style={{ textDecoration: "none" }}>
                <div className="svc-card" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, cursor: "pointer" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 16, color: "#f0f0f0", marginBottom: 4 }}>{s.titulo}</p>
                    <p style={{ fontSize: 13, color: "rgba(240,240,240,.45)", lineHeight: 1.6, fontWeight: 300 }}>{s.desc}</p>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(240,240,240,.25)", marginTop: 8 }}>⏱ {s.plazo}</p>
                  </div>
                  <div style={{ flexShrink: 0, textAlign: "right" }}>
                    <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: "#c9a84c" }}>{s.precio}</p>
                    <ArrowRight size={14} style={{ color: "rgba(240,240,240,.2)", marginTop: 4, marginLeft: "auto" }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="¿Necesitas autoridad digital?" sub="Knowledge Panel, medios y reputación en IA. Análisis gratuito sin compromiso." />
      <Footer />
    </div>
  );
}
