import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Precios — Gestión de Reputación Digital | Prestior",
  description: "Precios transparentes de gestión de reputación digital. Sin letra pequeña. Desde 99€/reseña hasta paquetes completos de autoridad digital.",
  alternates: { canonical: "https://prestior.es/precios/" },
};

const PROT = [
  { s:"Auditoría + análisis de caso", p:"97€–197€", t:"24-48h" },
  { s:"Difamación y calumnias online", p:"690€–1.490€", t:"2-8 semanas" },
  { s:"Derecho al olvido en Google", p:"690€–1.490€", t:"3-8 semanas" },
  { s:"Eliminar noticias en Google", p:"890€–1.490€", t:"3-10 semanas" },
  { s:"Suplantación de identidad", p:"690€–1.490€", t:"48h–3 semanas" },
  { s:"Cuenta falsa Instagram / TikTok", p:"490€–890€", t:"48h–2 semanas" },
  { s:"Contenido íntimo filtrado", p:"890€+", t:"Urgente" },
  { s:"OnlyFans / DMCA", p:"890€+", t:"1-4 semanas" },
  { s:"Reseñas falsas Google", p:"99€/reseña", t:"7-30 días" },
];

const AUTO = [
  { s:"Knowledge Panel Empresa", p:"390€–490€", t:"4-8 semanas" },
  { s:"Knowledge Panel Personal", p:"790€–890€", t:"4-8 semanas" },
  { s:"Pack wikis de autoridad", p:"1.490€", t:"3-6 semanas" },
  { s:"Forbes Argentina (editorial)", p:"2.900€–3.490€", t:"6-12 semanas" },
  { s:"Pack medios nacionales (2-3)", p:"Desde 1.490€", t:"4-10 semanas" },
  { s:"Pack medios top (NYPost, BBC...)", p:"6.900€–7.900€", t:"8-16 semanas" },
  { s:"Marca personal en Google", p:"Desde 1.490€", t:"8-16 semanas" },
  { s:"Reputación en IA / GEO", p:"Consultar", t:"Variable" },
];

const BLIND = [
  { s:"Blindaje básico", p:"197€/mes", t:"Continuo" },
  { s:"Blindaje premium", p:"490€/mes", t:"Continuo" },
  { s:"Auditoría de reputación", p:"497€", t:"1-2 semanas" },
];

const PACKS = [
  { n:"PRESENCIA", p:"1.490€", items:["Knowledge Panel personal","1-2 medios de entrada","Optimización nombre en Google","Informe inicial"], hot:false },
  { n:"AUTORIDAD", p:"3.900€", items:["Knowledge Panel personal","Pack wikis de autoridad","Forbes Argentina editorial","Posicionamiento Google + IA","Informe mensual"], hot:true },
  { n:"DOMINIO", p:"9.900€", items:["Todo AUTORIDAD incluido","Pack medios top (NYPost, BBC, Wired)","Gestión continua 3 meses","Estrategia personalizada"], hot:false },
];

function Table({ title, desc, rows }: { title: string; desc: string; rows: {s:string;p:string;t:string}[] }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem,3vw,1.8rem)", color: "#f0f0f0", marginBottom: 6 }}>{title}</h2>
      <p style={{ fontSize: 14, color: "rgba(240,240,240,.4)", marginBottom: 20, fontWeight: 300 }}>{desc}</p>
      <div style={{ border: "1px solid rgba(255,255,255,.07)", borderRadius: 12, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 0, background: "rgba(255,255,255,.03)", padding: "10px 18px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(240,240,240,.2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Servicio</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(240,240,240,.2)", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "right", minWidth: 100 }}>Precio</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(240,240,240,.2)", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "right", minWidth: 100 }}>Plazo</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 0, padding: "14px 18px", borderBottom: i < rows.length-1 ? "1px solid rgba(255,255,255,.05)" : "none", alignItems: "center" }}>
            <span style={{ fontSize: 14, color: "rgba(240,240,240,.7)", fontWeight: 400 }}>{r.s}</span>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: "#c9a84c", textAlign: "right", minWidth: 100 }}>{r.p}</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(240,240,240,.3)", textAlign: "right", minWidth: 100 }}>{r.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />

      <div style={{ background: "var(--bg2)", borderBottom: "1px solid var(--bdr)", padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div className="eyebrow">Inversión</div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem,5vw,3.6rem)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "#f0f0f0", marginBottom: 16 }}>
            Precios
          </h1>
          <p style={{ fontSize: "clamp(1rem,2vw,1.1rem)", color: "rgba(240,240,240,.55)", fontWeight: 300, lineHeight: 1.75, maxWidth: 520 }}>
            Transparentes. Sin letras pequeñas. Sin garantías imposibles. El precio exacto depende del caso — análisis gratuito previo.
          </p>
        </div>
      </div>

      <section className="sec">
        <div className="sec-inner">
          <Table title="Protección" desc="Eliminar lo que te daña. Gestión profesional, proceso legal." rows={PROT} />
          <Table title="Autoridad" desc="Construir presencia. Servicios sueltos o paquetes completos." rows={AUTO} />
          <Table title="Blindaje continuo" desc="Monitorización activa y reacción rápida." rows={BLIND} />
        </div>
      </section>

      {/* PAQUETES */}
      <section className="sec sec-alt">
        <div className="sec-inner">
          <div className="eyebrow">Paquetes completos</div>
          <h2 className="sh2" style={{ marginBottom: 8 }}>El cerebro elige el del medio.</h2>
          <p style={{ fontSize: 15, color: "rgba(240,240,240,.4)", marginBottom: 32, fontWeight: 300 }}>Los paquetes incluyen todo lo necesario para un resultado completo y duradero.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
            {PACKS.map(({ n, p, items, hot }) => (
              <div key={n} className={hot ? "svc-card hot" : "svc-card"} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: hot ? "#c9a84c" : "#f0f0f0" }}>{n}</span>
                    {hot && <span className="svc-badge">Recomendado</span>}
                  </div>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {items.map(item => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6, fontSize: 13, color: "rgba(240,240,240,.55)" }}>
                        <span style={{ color: "#c9a84c", flexShrink: 0 }}>✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 26, color: "#f0f0f0", marginBottom: 8 }}>{p}</p>
                  <Link href="/contacto/" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 20px", background: hot ? "linear-gradient(135deg,#c9a84c,#e2c36e)" : "transparent", color: hot ? "#0a0a0a" : "rgba(240,240,240,.5)", border: hot ? "none" : "1px solid rgba(255,255,255,.14)", borderRadius: 8, fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
                    Solicitar →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, fontSize: 12, color: "rgba(240,240,240,.2)", fontFamily: "'DM Mono', monospace", textAlign: "center" }}>
            Presupuesto personalizado tras análisis gratuito · IVA no incluido
          </p>
        </div>
      </section>

      <CtaBanner title="¿Cuánto cuesta tu caso?" sub="Análisis gratuito. Te decimos exactamente qué necesitas y cuánto cuesta." />
      <Footer />
    </div>
  );
}
