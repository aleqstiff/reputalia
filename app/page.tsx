import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Prestior — Cuando tu reputación no admite errores",
  description: "Firma especializada en protección, construcción y blindaje de reputación digital. Directivos, marcas personales y empresas. Confidencial.",
  alternates: { canonical: "https://prestior.es/" },
};

const STYLES = `
  :root {
    --bg: #04070f;
    --bg2: #070d1a;
    --gold: #c9a84c;
    --t1: #eef0f4;
    --t2: rgba(238,240,244,0.55);
    --t3: rgba(238,240,244,0.32);
    --t4: rgba(238,240,244,0.15);
    --bdr: rgba(255,255,255,0.07);
    --ff-display: 'Syne', sans-serif;
    --ff-mono: 'DM Mono', monospace;
    --ff-body: 'DM Sans', system-ui, sans-serif;
  }

  /* ── LAYOUT ── */
  .p-wrap { max-width: 820px; margin: 0 auto; padding: 0 24px; }
  .p-section { padding: 52px 0; border-bottom: 1px solid var(--bdr); }
  .p-section-alt { background: var(--bg2); }

  /* ── EYEBROW ── */
  .p-eyebrow {
    font-family: var(--ff-mono); font-size: 11px;
    color: var(--gold); letter-spacing: 0.14em;
    text-transform: uppercase; margin-bottom: 36px;
    display: flex; align-items: center; gap: 12px;
  }
  .p-eyebrow::before { content: ''; width: 24px; height: 1px; background: var(--gold); opacity: 0.5; }

  /* ── HERO H1 ── */
  .p-h1 {
    font-family: var(--ff-display); font-weight: 800;
    font-size: clamp(2.4rem, 8vw, 4.8rem);
    line-height: 1.04; letter-spacing: -0.02em;
    color: var(--t1); margin-bottom: 28px;
  }

  /* ── SECTION TITLE ── */
  .p-h2 {
    font-family: var(--ff-display); font-weight: 800;
    font-size: clamp(1.9rem, 5vw, 3.6rem);
    line-height: 1.06; letter-spacing: -0.02em;
    color: var(--t1); margin-bottom: 24px;
  }

  /* ── LEAD TEXT ── */
  .p-lead {
    font-size: clamp(1rem, 2.2vw, 1.15rem);
    line-height: 1.8; color: var(--t2);
    font-weight: 300; max-width: 560px;
    margin-bottom: 40px;
  }

  /* ── BUTTONS ── */
  .p-btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--t1); color: var(--bg);
    font-family: var(--ff-display); font-weight: 700;
    font-size: 15px; padding: 14px 28px; border-radius: 8px;
    text-decoration: none; letter-spacing: 0.01em;
    transition: opacity 0.2s;
  }
  .p-btn-primary:hover { opacity: 0.88; }
  .p-btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    color: var(--t3); font-family: var(--ff-mono);
    font-size: 13px; padding: 14px 0;
    text-decoration: none; border-bottom: 1px solid var(--bdr);
    letter-spacing: 0.04em; transition: color 0.2s;
  }
  .p-btn-ghost:hover { color: var(--t1); }
  .p-btns { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }

  /* ── GOLD BAR ── */
  .p-bar { width: 40px; height: 3px; background: var(--gold); border-radius: 2px; margin-bottom: 36px; }

  /* ── ROWS ── */
  .p-row {
    display: grid; grid-template-columns: 1fr;
    padding: 24px 0; border-bottom: 1px solid var(--bdr);
    gap: 12px;
  }
  .p-row:last-child { border-bottom: none; }

  /* SITUACIONES */
  .p-situation { display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: start; }
  .p-situation-text { font-size: 15px; color: var(--t2); line-height: 1.65; font-weight: 300; }
  .p-situation-tag { font-family: var(--ff-mono); font-size: 10px; color: var(--gold); letter-spacing: 0.08em; text-transform: uppercase; text-align: right; padding-top: 3px; min-width: 80px; }

  /* RESULTADOS */
  .p-result { display: grid; grid-template-columns: 88px 1fr; gap: 20px; align-items: start; }
  .p-result-stat { font-family: var(--ff-display); font-weight: 800; font-size: clamp(1.5rem, 4vw, 2rem); color: var(--t1); line-height: 1; }
  .p-result-desc { font-size: 15px; color: var(--t2); line-height: 1.65; font-weight: 300; padding-top: 2px; }

  /* SERVICIOS */
  .p-service { display: grid; grid-template-columns: 36px 1fr; gap: 20px; align-items: start; }
  .p-service-num { font-family: var(--ff-mono); font-size: 12px; color: var(--t4); padding-top: 4px; }
  .p-service-title { font-family: var(--ff-display); font-weight: 700; font-size: clamp(1.15rem, 3vw, 1.45rem); color: var(--t1); }
  .p-service-meta { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 10px; flex-wrap: wrap; }
  .p-service-desde { font-family: var(--ff-mono); font-size: 11px; color: var(--t3); }
  .p-service-desc { font-size: 14px; color: var(--t2); line-height: 1.75; margin-bottom: 14px; font-weight: 300; }
  .p-service-link { font-family: var(--ff-mono); font-size: 12px; color: var(--t3); text-decoration: none; letter-spacing: 0.04em; border-bottom: 1px solid var(--bdr); padding-bottom: 2px; transition: color 0.2s; }
  .p-service-link:hover { color: var(--t1); }

  /* PAQUETES */
  .p-pkg { display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: start; }
  .p-pkg-name { font-family: var(--ff-display); font-weight: 700; font-size: 17px; color: var(--t1); }
  .p-pkg-name.hot { color: var(--gold); }
  .p-pkg-badge { display: inline-block; font-family: var(--ff-mono); font-size: 9px; color: var(--gold); background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.2); border-radius: 999px; padding: 2px 8px; letter-spacing: 0.08em; text-transform: uppercase; margin-left: 8px; vertical-align: middle; }
  .p-pkg-desc { font-size: 14px; color: var(--t2); line-height: 1.7; font-weight: 300; margin-top: 8px; }
  .p-pkg-price { font-family: var(--ff-display); font-weight: 800; font-size: 22px; color: var(--t1); white-space: nowrap; }
  .p-pkg-link { display: block; font-family: var(--ff-mono); font-size: 11px; color: var(--t4); text-decoration: none; letter-spacing: 0.04em; margin-top: 4px; text-align: right; }

  /* OPERAMOS */
  .p-op-title { font-family: var(--ff-display); font-weight: 600; font-size: 15px; color: var(--t1); margin-bottom: 6px; }
  .p-op-desc { font-size: 14px; color: var(--t2); line-height: 1.7; font-weight: 300; }

  /* STATS BAR */
  .p-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
  .p-stat { padding: 20px 16px; text-align: center; }
  .p-stat-n { font-family: var(--ff-display); font-weight: 800; font-size: 28px; color: var(--t1); line-height: 1; }
  .p-stat-l { font-family: var(--ff-mono); font-size: 11px; color: var(--t4); margin-top: 4px; letter-spacing: 0.04em; }

  /* RESPONSIVE — tablet+ */
  @media (min-width: 600px) {
    .p-stats { grid-template-columns: 1fr 1fr 1fr 1fr; }
    .p-pkg { grid-template-columns: 1fr 120px; }
    .p-result { grid-template-columns: 100px 1fr; gap: 24px; }
  }

  @media (min-width: 768px) {
    .p-section { padding: 64px 0; }
    .p-h1 { margin-bottom: 32px; }
    .p-stat-n { font-size: 32px; }
  }
`;

export default function Home() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--t1)", fontFamily: "var(--ff-body)", minHeight: "100vh" }}>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <Nav />

      {/* ── HERO ── */}
      <section className="p-section" style={{ background: "var(--bg)" }}>
        <div className="p-wrap">
          <div className="p-bar" />
          <h1 className="p-h1">
            Cuando tu reputación<br />no admite errores.
          </h1>
          <p className="p-lead">
            Protegemos lo que has construido. Cuando la presión es alta
            y los riesgos mayores, directivos, marcas personales y empresas
            confían en nosotros.
          </p>
          <div className="p-btns">
            <Link href="/contacto/" className="p-btn-primary">
              Hablar con nosotros <ArrowRight size={16} />
            </Link>
            <Link href="/casos-de-exito/" className="p-btn-ghost">
              Ver resultados →
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div style={{ borderTop: "1px solid var(--bdr)", borderBottom: "1px solid var(--bdr)", background: "var(--bg2)" }}>
        <div className="p-wrap">
          <div className="p-stats">
            {[["100+","Casos resueltos"],["48h","Primera respuesta"],["100%","Confidencial"],["€9.9k","Ticket máximo"]].map(([n,l]) => (
              <div key={l} className="p-stat">
                <div className="p-stat-n">{n}</div>
                <div className="p-stat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CUÁNDO NOS LLAMAN ── */}
      <section className="p-section" style={{ background: "var(--bg)" }}>
        <div className="p-wrap">
          <p className="p-eyebrow">Cuándo nos llaman</p>
          {[
            ["Un artículo falso aparece primero cuando buscan tu nombre en Google.", "Desindexación"],
            ["Alguien ha creado una cuenta haciéndose pasar por ti.", "Suplantación"],
            ["Contenido íntimo o privado ha sido publicado sin tu consentimiento.", "Urgente"],
            ["Necesitas que Google muestre quién eres realmente antes de un lanzamiento.", "Autoridad"],
            ["Reseñas coordinadas están hundiendo la valoración de tu negocio.", "Protección"],
            ["ChatGPT o Perplexity describe tu empresa de forma incorrecta.", "IA / GEO"],
          ].map(([text, tag], i) => (
            <div key={i} className="p-row">
              <div className="p-situation">
                <p className="p-situation-text">{text}</p>
                <span className="p-situation-tag">{tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESULTADOS ── */}
      <section className="p-section p-section-alt">
        <div className="p-wrap">
          <p className="p-eyebrow">Resultados recientes</p>
          {[
            ["4 sem.", "Artículo difamatorio desindexado de Google. CEO empresa tech, Madrid."],
            ["48h", "Cuenta de suplantación eliminada en Instagram. Influencer 180K seguidores."],
            ["€80K", "Generados en lanzamiento tras construir Knowledge Panel + Forbes editorial."],
            ["7/7", "Reseñas falsas coordinadas eliminadas de Google. Clínica dental, Valencia."],
          ].map(([stat, desc], i) => (
            <div key={i} className="p-row">
              <div className="p-result">
                <span className="p-result-stat">{stat}</span>
                <p className="p-result-desc">{desc}</p>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 28 }}>
            <Link href="/casos-de-exito/" className="p-btn-ghost">Ver todos los casos →</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section className="p-section" style={{ background: "var(--bg)" }}>
        <div className="p-wrap">
          <p className="p-eyebrow">Cómo trabajamos</p>
          {[
            { num:"01", title:"Protección", desde:"Desde 690€", desc:"Eliminamos contenido dañino por las vías legales correctas. Difamación, derecho al olvido, suplantaciones, contenido filtrado, reseñas ilegítimas.", href:"/proteccion-reputacion/" },
            { num:"02", title:"Autoridad", desde:"Desde 390€", desc:"Construimos tu presencia verificable. Knowledge Panel en Google, apariciones editoriales en medios, wikis de autoridad, marca personal, reputación en IA.", href:"/autoridad-digital/" },
            { num:"03", title:"Blindaje", desde:"Desde 197€/mes", desc:"Monitorizamos tu nombre y marca continuamente. Alertas tempranas y reacción antes de que el daño sea irreversible.", href:"/monitorizacion-reputacion/" },
          ].map(({ num, title, desde, desc, href }) => (
            <div key={num} className="p-row">
              <div className="p-service">
                <span className="p-service-num">{num}</span>
                <div>
                  <div className="p-service-meta">
                    <span className="p-service-title">{title}</span>
                    <span className="p-service-desde">{desde}</span>
                  </div>
                  <p className="p-service-desc">{desc}</p>
                  <Link href={href} className="p-service-link">Ver servicios →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PAQUETES ── */}
      <section className="p-section p-section-alt">
        <div className="p-wrap">
          <p className="p-eyebrow">Inversión</p>
          {[
            { name:"Presencia", price:"1.490€", desc:"Knowledge Panel personal, medios de entrada y optimización de nombre en Google.", hot:false },
            { name:"Autoridad", price:"3.900€", desc:"El más contratado. Knowledge Panel, wikis de autoridad, Forbes Argentina editorial y posicionamiento en Google e IA.", hot:true },
            { name:"Dominio", price:"9.900€", desc:"Todo lo anterior más pack de medios top internacionales — NYPost, BBC, Wired.", hot:false },
          ].map(({ name, price, desc, hot }) => (
            <div key={name} className="p-row">
              <div className="p-pkg">
                <div>
                  <div style={{ marginBottom: 8 }}>
                    <span className={`p-pkg-name${hot ? " hot" : ""}`}>{name}</span>
                    {hot && <span className="p-pkg-badge">Recomendado</span>}
                  </div>
                  <p className="p-pkg-desc">{desc}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p className="p-pkg-price">{price}</p>
                  <Link href="/contacto/" className="p-pkg-link">Solicitar →</Link>
                </div>
              </div>
            </div>
          ))}
          <p style={{ marginTop: 24, fontSize: 12, color: "var(--t4)", fontFamily: "var(--ff-mono)" }}>
            Presupuesto personalizado tras análisis confidencial · IVA no incluido ·{" "}
            <Link href="/precios/" style={{ color: "var(--t3)", textDecoration: "none" }}>Ver todos los precios →</Link>
          </p>
        </div>
      </section>

      {/* ── OPERAMOS ── */}
      <section className="p-section" style={{ background: "var(--bg)" }}>
        <div className="p-wrap">
          <p className="p-eyebrow">Cómo operamos</p>
          {[
            ["Contrato legal antes de empezar", "Firmamos antes de que pagues. Servicio exacto, plazos y garantías por escrito. Sin excepciones."],
            ["Confidencialidad absoluta", "Nunca revelamos clientes, casos ni resultados. Condición no negociable de nuestro servicio."],
            ["Sin garantías imposibles", "Te decimos exactamente qué es viable antes de cobrar. Forbes Argentina no es Forbes global. Un wiki de autoridad no es Wikipedia."],
            ["Empresa registrada en España", "CIF disponible bajo solicitud. Actividad 100% legal. Dos proveedores mínimo por servicio para garantizar continuidad."],
          ].map(([title, desc], i) => (
            <div key={i} className="p-row" style={{ display: "block" }}>
              <p className="p-op-title">{title}</p>
              <p className="p-op-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="p-section p-section-alt" style={{ borderBottom: "none" }}>
        <div className="p-wrap">
          <div className="p-bar" />
          <h2 className="p-h2">
            ¿Lo que aparece cuando buscan<br />
            tu nombre te ayuda o te perjudica?
          </h2>
          <p className="p-lead">
            Cuéntanoslo. Analizamos tu situación sin coste y te decimos
            exactamente qué mejorar. Sin compromiso.
          </p>
          <div className="p-btns">
            <Link href="/contacto/" className="p-btn-primary">
              Una conversación confidencial <ArrowRight size={16} />
            </Link>
            <p style={{ fontSize: 12, color: "var(--t4)", fontFamily: "var(--ff-mono)" }}>
              Sin coste · Respuesta en 24h
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
