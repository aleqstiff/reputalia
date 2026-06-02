import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Casos de Éxito — Resultados Reales | Prestior",
  description: "Casos reales de gestión de reputación digital. Desindexaciones, Knowledge Panels, reseñas eliminadas y más. Sin humo, sin promesas imposibles.",
  alternates: { canonical: "https://prestior.es/casos-de-exito/" },
};

const CASOS = [
  { cat:"Desindexación", titulo:"CEO con artículo difamatorio en top 1 de Google", desc:"Un competidor publicó un artículo falso en un blog de alta autoridad que llevaba 3 años en el primer resultado cuando buscaban el nombre del CEO. Solicitamos la desindexación combinada con derecho al olvido.", resultado:"Desindexado · Top 1 ahora = LinkedIn oficial", plazo:"4 semanas" },
  { cat:"Pack Autoridad", titulo:"Coach sin presencia que necesitaba lanzar su infoproducto", desc:"Cero presencia en Google, sin Knowledge Panel, sin menciones en medios. Construimos el pack AUTORIDAD completo antes del lanzamiento.", resultado:"Knowledge Panel activo · Forbes editorial · 3 medios nacionales", plazo:"10 semanas" },
  { cat:"Suplantación", titulo:"Influencer de 180K con cuenta falsa activa", desc:"Una cuenta falsa con sus fotos llevaba 2 meses activa en Instagram acumulando seguidores y enviando DMs fraudulentos a su audiencia.", resultado:"Cuenta falsa eliminada en 48h", plazo:"48 horas" },
  { cat:"Autoridad", titulo:"Directiva de multinacional — perfil en Google", desc:"Búsqueda de su nombre devolvía resultados irrelevantes y desactualizados. Construimos Knowledge Panel personal + pack wikis + 2 artículos en medios.", resultado:"Knowledge Panel · 2 apariciones en prensa · Perfil limpio", plazo:"8 semanas" },
  { cat:"Reseñas", titulo:"Clínica dental atacada con reseñas falsas coordinadas", desc:"7 reseñas de 1 estrella en un solo día, cuentas nuevas sin historial. Todas vinculadas a un ex-empleado despedido.", resultado:"7 de 7 reseñas eliminadas · Nota restaurada", plazo:"3 semanas" },
  { cat:"Blindaje", titulo:"Empresa SaaS — monitorización continua", desc:"Empresa de software con competidores agresivos y menciones negativas en foros. Configuramos monitorización + estrategia de supresión continua.", resultado:"0 incidentes sin gestionar en 8 meses", plazo:"Continuo" },
];

const colorCat: Record<string, string> = {
  "Desindexación": "rgba(239,68,68,.8)",
  "Pack Autoridad": "#c9a84c",
  "Suplantación": "rgba(239,68,68,.8)",
  "Autoridad": "#c9a84c",
  "Reseñas": "rgba(239,68,68,.8)",
  "Blindaje": "#4ade80",
};

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <div style={{ background: "var(--bg2)", borderBottom: "1px solid var(--bdr)", padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div className="eyebrow">Resultados reales</div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem,5vw,3.6rem)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "#f0f0f0", marginBottom: 16 }}>
            Casos de éxito
          </h1>
          <p style={{ fontSize: "clamp(1rem,2vw,1.1rem)", color: "rgba(240,240,240,.55)", fontWeight: 300, lineHeight: 1.75, maxWidth: 520 }}>
            Resultados reales. Sin humo, sin promesas imposibles. Los datos de los clientes se muestran de forma anonimizada con su consentimiento.
          </p>
        </div>
      </div>

      {/* CASOS */}
      <section className="sec">
        <div className="sec-inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
            {CASOS.map((c, i) => (
              <div key={i} className="svc-card">
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: colorCat[c.cat] || "#c9a84c", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 999, padding: "3px 10px", letterSpacing: "0.06em" }}>
                    {c.cat}
                  </span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(240,240,240,.2)" }}>⏱ {c.plazo}</span>
                </div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: "#f0f0f0", marginBottom: 8 }}>{c.titulo}</h2>
                <p style={{ fontSize: 14, color: "rgba(240,240,240,.5)", lineHeight: 1.7, fontWeight: 300, marginBottom: 14 }}>{c.desc}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "rgba(74,222,128,.06)", border: "1px solid rgba(74,222,128,.15)", borderRadius: 8 }}>
                  <span style={{ fontSize: 13 }}>✓</span>
                  <span style={{ fontSize: 13, color: "#4ade80", fontWeight: 500 }}>{c.resultado}</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24, textAlign: "center", fontSize: 12, color: "rgba(240,240,240,.2)", fontFamily: "'DM Mono', monospace" }}>
            Los datos de los clientes se muestran de forma anonimizada con su consentimiento.
          </p>
        </div>
      </section>

      <CtaBanner title="¿Tienes una situación similar?" sub="Cuéntanoslo. Análisis gratuito y respuesta en 24 horas." />
      <Footer />
    </div>
  );
}
