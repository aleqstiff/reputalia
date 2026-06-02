import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prestior — Gestión de Reputación Digital en España | Agencia Especializada",
  description: "Agencia líder en gestión de reputación digital en España. Eliminamos contenido dañino, construimos autoridad y blindamos tu presencia online. Análisis gratuito.",
  keywords: ["gestión reputación digital", "eliminar contenido google", "derecho al olvido", "knowledge panel google", "reputación online España"],
  alternates: { canonical: "https://prestior.es/" },
};

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
body{background:#09090b;color:#f0f0f0;font-family:'DM Sans',system-ui,sans-serif;overflow-x:hidden}
img{max-width:100%;display:block}
a{color:inherit}

:root{
  --bg:#09090b;
  --bg2:#0f0f12;
  --bg3:#161619;
  --gold:#c9a84c;
  --gold2:#e2c36e;
  --white:#f8f8f8;
  --t1:#f0f0f0;
  --t2:rgba(240,240,240,.6);
  --t3:rgba(240,240,240,.35);
  --t4:rgba(240,240,240,.18);
  --bdr:rgba(255,255,255,.07);
  --bdr2:rgba(255,255,255,.12);
  --gold-bdr:rgba(201,168,76,.25);
  --ff-h:'Syne',sans-serif;
  --ff-m:'DM Mono',monospace;
  --ff-b:'DM Sans',system-ui,sans-serif;
  --r:12px;
  --max:900px;
}

/* NAV */
.nav{position:sticky;top:0;z-index:100;background:rgba(9,9,11,.9);backdrop-filter:blur(20px);border-bottom:1px solid var(--bdr)}
.nav-inner{max-width:var(--max);margin:0 auto;padding:0 20px;height:58px;display:flex;align-items:center;justify-content:space-between;gap:16px}
.nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none}
.nav-logo-bar{width:3px;height:22px;background:var(--gold);border-radius:2px}
.nav-logo-text{font-family:var(--ff-h);font-weight:700;font-size:17px;color:var(--white);letter-spacing:-.01em}
.nav-links{display:none;align-items:center;gap:24px}
.nav-link{font-family:var(--ff-m);font-size:12px;color:var(--t3);text-decoration:none;letter-spacing:.04em;transition:color .2s}
.nav-link:hover{color:var(--t1)}
.nav-cta{font-family:var(--ff-h);font-weight:600;font-size:13px;background:var(--gold);color:#09090b;padding:8px 18px;border-radius:8px;text-decoration:none;transition:opacity .2s;white-space:nowrap}
.nav-cta:hover{opacity:.85}
.nav-wa{display:flex;align-items:center;gap:6px;font-family:var(--ff-m);font-size:11px;color:var(--t3);text-decoration:none;transition:color .2s}
.nav-wa:hover{color:#4ade80}
.hamburger{background:none;border:none;color:var(--t2);cursor:pointer;padding:4px;display:flex}
.mob-menu{background:var(--bg2);border-bottom:1px solid var(--bdr);padding:16px 20px 24px}
.mob-link{display:block;padding:12px 0;font-family:var(--ff-m);font-size:13px;color:var(--t3);text-decoration:none;border-bottom:1px solid var(--bdr);letter-spacing:.04em}
.mob-link:last-of-type{border-bottom:none}
.mob-cta{display:block;margin-top:16px;text-align:center;background:var(--gold);color:#09090b;font-family:var(--ff-h);font-weight:700;font-size:14px;padding:13px;border-radius:8px;text-decoration:none}

/* WRAP */
.wrap{max-width:var(--max);margin:0 auto;padding:0 20px}

/* SECTIONS */
.sec{padding:52px 0;border-bottom:1px solid var(--bdr)}
.sec-alt{background:var(--bg2)}
.sec-last{border-bottom:none}

/* EYEBROW */
.eyebrow{font-family:var(--ff-m);font-size:10px;color:var(--gold);letter-spacing:.16em;text-transform:uppercase;margin-bottom:20px;display:flex;align-items:center;gap:10px}
.eyebrow::before{content:'';width:20px;height:1px;background:var(--gold);opacity:.5}

/* HEADINGS */
.h1{font-family:var(--ff-h);font-weight:800;font-size:clamp(2.2rem,7vw,4rem);line-height:1.06;letter-spacing:-.025em;color:var(--white);margin-bottom:20px}
.h2{font-family:var(--ff-h);font-weight:800;font-size:clamp(1.7rem,4.5vw,3rem);line-height:1.08;letter-spacing:-.02em;color:var(--white);margin-bottom:16px}
.h3{font-family:var(--ff-h);font-weight:700;font-size:clamp(1.2rem,3vw,1.6rem);color:var(--white);margin-bottom:10px}
.gold-word{background:linear-gradient(135deg,var(--gold),var(--gold2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.lead{font-size:clamp(1rem,2.2vw,1.12rem);line-height:1.78;color:var(--t2);font-weight:300;margin-bottom:32px}
.body{font-size:15px;line-height:1.72;color:var(--t2);font-weight:300}
.small{font-size:13px;color:var(--t3);line-height:1.6;font-weight:300}
.mono{font-family:var(--ff-m);font-size:11px;color:var(--t4);letter-spacing:.06em}

/* BUTTONS */
.btn-gold{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,var(--gold),var(--gold2));color:#09090b;font-family:var(--ff-h);font-weight:700;font-size:15px;padding:14px 28px;border-radius:10px;text-decoration:none;transition:all .2s;white-space:nowrap}
.btn-gold:hover{transform:translateY(-1px);box-shadow:0 8px 28px rgba(201,168,76,.35)}
.btn-white{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.06);color:var(--t2);font-family:var(--ff-h);font-weight:600;font-size:15px;padding:14px 28px;border-radius:10px;border:1px solid var(--bdr2);text-decoration:none;transition:all .2s}
.btn-white:hover{background:rgba(255,255,255,.1);color:var(--white)}
.btn-row{display:flex;flex-wrap:wrap;gap:12px;align-items:center}

/* QUALIFYING FORM */
.form-card{background:var(--bg3);border:1px solid var(--bdr2);border-radius:16px;padding:28px 24px;margin-top:40px}
.form-card-title{font-family:var(--ff-h);font-weight:700;font-size:18px;color:var(--white);margin-bottom:6px}
.form-card-sub{font-size:14px;color:var(--t3);margin-bottom:24px;font-weight:300}
.form-steps{display:none}
.form-step{margin-bottom:20px}
.form-label{font-family:var(--ff-m);font-size:10px;color:var(--gold);letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px;display:block}
.form-options{display:flex;gap:8px;flex-wrap:wrap}
.form-opt{display:flex;align-items:center;gap:8px;padding:10px 16px;border:1px solid var(--bdr2);border-radius:8px;font-size:14px;color:var(--t2);cursor:pointer;transition:all .2s;background:var(--bg2);font-family:var(--ff-b)}
.form-opt:hover,.form-opt.active{border-color:var(--gold);color:var(--white);background:rgba(201,168,76,.08)}
.form-input{width:100%;padding:12px 14px;background:var(--bg2);border:1px solid var(--bdr2);border-radius:8px;color:var(--t1);font-size:14px;font-family:var(--ff-b);outline:none;margin-bottom:10px;transition:border-color .2s}
.form-input:focus{border-color:var(--gold-bdr)}
.form-input::placeholder{color:var(--t4)}
.form-submit{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:14px;background:linear-gradient(135deg,var(--gold),var(--gold2));color:#09090b;font-family:var(--ff-h);font-weight:700;font-size:15px;border:none;border-radius:10px;cursor:pointer;text-decoration:none;transition:opacity .2s}
.form-submit:hover{opacity:.88}
.form-fine{font-family:var(--ff-m);font-size:11px;color:var(--t4);text-align:center;margin-top:10px}
.pulse-dot{width:8px;height:8px;border-radius:50%;background:#4ade80;display:inline-block;animation:pulse-dot 2s ease-in-out infinite}
@keyframes pulse-dot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}

/* TRUST BAR */
.trust-bar{background:var(--bg2);border-top:1px solid var(--bdr);border-bottom:1px solid var(--bdr);padding:16px 0}
.trust-inner{max-width:var(--max);margin:0 auto;padding:0 20px}
.trust-label{font-family:var(--ff-m);font-size:10px;color:var(--t4);letter-spacing:.12em;text-transform:uppercase;text-align:center;margin-bottom:14px}
.trust-logos{display:flex;flex-wrap:wrap;justify-content:center;gap:20px 32px;align-items:center}
.trust-logo{font-family:var(--ff-h);font-size:13px;font-weight:700;color:var(--t4);letter-spacing:.02em;white-space:nowrap}

/* STATS */
.stats-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--bdr)}
.stat-item{background:var(--bg2);padding:24px 20px;text-align:center}
.stat-n{font-family:var(--ff-h);font-weight:800;font-size:clamp(1.8rem,5vw,2.4rem);color:var(--white);line-height:1;margin-bottom:4px}
.stat-l{font-family:var(--ff-m);font-size:11px;color:var(--t4);letter-spacing:.06em}

/* SERVICE CARDS */
.svc-grid{display:grid;grid-template-columns:1fr;gap:16px}
.svc-card{background:var(--bg3);border:1px solid var(--bdr);border-radius:var(--r);padding:24px 20px;transition:border-color .2s}
.svc-card:hover{border-color:var(--bdr2)}
.svc-card.featured{border-color:var(--gold-bdr);background:linear-gradient(135deg,rgba(201,168,76,.06),rgba(201,168,76,.02))}
.svc-icon{width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:16px}
.svc-desde{font-family:var(--ff-m);font-size:11px;color:var(--t4);margin-bottom:6px;letter-spacing:.04em}
.svc-title{font-family:var(--ff-h);font-weight:700;font-size:18px;color:var(--white);margin-bottom:10px}
.svc-desc{font-size:14px;color:var(--t2);line-height:1.7;font-weight:300;margin-bottom:16px}
.svc-link{font-family:var(--ff-m);font-size:12px;color:var(--gold);text-decoration:none;letter-spacing:.04em;transition:opacity .2s}
.svc-link:hover{opacity:.7}
.svc-badge{display:inline-block;font-family:var(--ff-m);font-size:9px;color:var(--gold);background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.2);border-radius:999px;padding:2px 8px;letter-spacing:.08em;text-transform:uppercase;margin-left:8px;vertical-align:middle}

/* CRISIS SECTION */
.crisis-list{display:flex;flex-direction:column;gap:0}
.crisis-row{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:20px 0;border-bottom:1px solid var(--bdr)}
.crisis-row:last-child{border-bottom:none}
.crisis-text{font-size:15px;color:var(--t2);line-height:1.6;font-weight:300;flex:1}
.crisis-tag{font-family:var(--ff-m);font-size:10px;color:var(--gold);letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;text-align:right;min-width:70px;padding-top:2px}

/* PROCESS */
.process-list{display:flex;flex-direction:column;gap:0}
.process-row{display:grid;grid-template-columns:40px 1fr;gap:16px;padding:20px 0;border-bottom:1px solid var(--bdr);align-items:flex-start}
.process-row:last-child{border-bottom:none}
.process-num{font-family:var(--ff-m);font-size:13px;color:var(--gold);font-weight:500;padding-top:2px}
.process-title{font-family:var(--ff-h);font-weight:600;font-size:16px;color:var(--white);margin-bottom:4px}
.process-desc{font-size:14px;color:var(--t2);line-height:1.65;font-weight:300}

/* RESULTS */
.results-list{display:flex;flex-direction:column;gap:0}
.result-row{display:grid;grid-template-columns:72px 1fr;gap:16px;padding:22px 0;border-bottom:1px solid var(--bdr);align-items:start}
.result-row:last-child{border-bottom:none}
.result-stat{font-family:var(--ff-h);font-weight:800;font-size:clamp(1.4rem,4vw,1.9rem);color:var(--white);line-height:1}
.result-desc{font-size:15px;color:var(--t2);line-height:1.65;font-weight:300;padding-top:2px}

/* PAQUETES */
.pkg-list{display:flex;flex-direction:column;gap:0}
.pkg-row{display:grid;grid-template-columns:1fr auto;gap:16px;padding:24px 0;border-bottom:1px solid var(--bdr);align-items:start}
.pkg-row:last-child{border-bottom:none}
.pkg-name{font-family:var(--ff-h);font-weight:700;font-size:17px;color:var(--white);margin-bottom:6px}
.pkg-name.hot{color:var(--gold)}
.pkg-desc{font-size:14px;color:var(--t2);line-height:1.65;font-weight:300}
.pkg-price{font-family:var(--ff-h);font-weight:800;font-size:22px;color:var(--white);white-space:nowrap;text-align:right}
.pkg-link{display:block;font-family:var(--ff-m);font-size:11px;color:var(--t4);text-decoration:none;text-align:right;margin-top:4px;letter-spacing:.04em;transition:color .2s}
.pkg-link:hover{color:var(--t2)}

/* WHO WE SERVE */
.serve-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.serve-item{background:var(--bg3);border:1px solid var(--bdr);border-radius:var(--r);padding:18px 16px}
.serve-emoji{font-size:24px;margin-bottom:10px;display:block}
.serve-title{font-family:var(--ff-h);font-weight:600;font-size:14px;color:var(--white);margin-bottom:4px}
.serve-desc{font-size:12px;color:var(--t3);line-height:1.55;font-weight:300}

/* FAQ */
.faq-list{display:flex;flex-direction:column;gap:8px}
details.faq-item{background:var(--bg3);border:1px solid var(--bdr);border-radius:var(--r);overflow:hidden}
details.faq-item[open]{border-color:var(--bdr2)}
.faq-q{padding:16px 18px;cursor:pointer;font-family:var(--ff-h);font-weight:600;font-size:14px;color:var(--white);list-style:none;display:flex;justify-content:space-between;align-items:center;gap:12px;user-select:none}
.faq-q::after{content:'▼';font-size:11px;color:var(--t4);flex-shrink:0;transition:transform .2s}
details.faq-item[open] .faq-q::after{transform:rotate(180deg)}
.faq-a{padding:0 18px 16px;font-size:14px;color:var(--t2);line-height:1.7;font-weight:300;border-top:1px solid var(--bdr)}

/* TESTIMONIALS */
.testi-grid{display:grid;grid-template-columns:1fr;gap:14px}
.testi-card{background:var(--bg3);border:1px solid var(--bdr);border-radius:var(--r);padding:22px 20px}
.testi-quote{font-size:15px;color:var(--t2);line-height:1.7;font-style:italic;font-weight:300;margin-bottom:16px}
.testi-bottom{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-top:14px;border-top:1px solid var(--bdr)}
.testi-author{font-size:13px;color:var(--t3)}
.testi-tag{font-family:var(--ff-m);font-size:10px;color:#4ade80;background:rgba(74,222,128,.08);border:1px solid rgba(74,222,128,.2);border-radius:999px;padding:3px 10px;letter-spacing:.04em;white-space:nowrap}

/* FOOTER */
.ft{background:#020407;border-top:1px solid var(--bdr)}
.ft-inner{max-width:var(--max);margin:0 auto;padding:36px 20px 40px}
.ft-grid{display:grid;grid-template-columns:1fr;gap:28px;margin-bottom:28px}
.ft-logo-row{display:flex;align-items:center;gap:8px;margin-bottom:12px}
.ft-logo-bar{width:3px;height:20px;background:var(--gold);border-radius:2px}
.ft-logo-name{font-family:var(--ff-h);font-weight:700;font-size:15px;color:var(--white)}
.ft-tagline{font-size:13px;color:var(--t4);line-height:1.6;font-weight:300}
.ft-col-label{font-family:var(--ff-m);font-size:10px;color:var(--t4);letter-spacing:.12em;text-transform:uppercase;margin-bottom:12px;display:block}
.ft-link{display:block;font-size:13px;color:var(--t3);text-decoration:none;margin-bottom:8px;transition:color .2s}
.ft-link:hover{color:var(--t1)}
.ft-divider{height:1px;background:var(--bdr);margin-bottom:20px}
.ft-bottom{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px}
.ft-copy{font-size:12px;color:var(--t4);font-family:var(--ff-m)}
.ft-legal{display:flex;gap:16px;flex-wrap:wrap}
.ft-legal-link{font-size:12px;color:var(--t4);text-decoration:none;font-family:var(--ff-m);transition:color .2s}
.ft-legal-link:hover{color:var(--t2)}

/* RESPONSIVE */
@media(min-width:560px){
  .nav-links,.nav-cta{display:flex}
  .hamburger{display:none!important}
  .stats-grid{grid-template-columns:repeat(4,1fr)}
  .svc-grid{grid-template-columns:repeat(2,1fr)}
  .svc-card.featured{grid-column:span 2}
  .testi-grid{grid-template-columns:repeat(2,1fr)}
  .serve-grid{grid-template-columns:repeat(4,1fr)}
  .ft-grid{grid-template-columns:1.5fr 1fr 1fr}
}
@media(min-width:800px){
  .svc-grid{grid-template-columns:repeat(3,1fr)}
  .svc-card.featured{grid-column:span 1}
  .sec{padding:64px 0}
  .result-row{grid-template-columns:80px 1fr;gap:24px}
  .form-card{margin-top:0}
  .hero-grid{display:grid;grid-template-columns:1fr 420px;gap:48px;align-items:start}
  .hero-main{margin-bottom:0}
}
`;

const faqSchema = JSON.stringify({
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity:[
    {"@type":"Question","name":"¿Qué es la gestión de reputación digital?","acceptedAnswer":{"@type":"Answer","text":"Es el proceso de controlar, mejorar y proteger lo que aparece en Google, redes sociales y plataformas de IA cuando alguien busca tu nombre o marca. Incluye eliminar contenido dañino, construir autoridad digital y monitorizar tu presencia."}},
    {"@type":"Question","name":"¿Cuánto tarda en verse resultados?","acceptedAnswer":{"@type":"Answer","text":"Depende del servicio: desindexación en Google: 2-6 semanas. Knowledge Panel: 4-8 semanas. Aparición editorial en medios: 4-12 semanas. Eliminación de contenido íntimo filtrado: gestión urgente en 24-48h."}},
    {"@type":"Question","name":"¿Garantizáis la eliminación de contenido?","acceptedAnswer":{"@type":"Answer","text":"No prometemos garantías imposibles porque la decisión final depende de Google o la plataforma. Lo que sí garantizamos: contrato legal previo, máxima diligencia profesional, proceso 100% legal y política de crédito si el servicio no se ejecuta correctamente."}},
    {"@type":"Question","name":"¿Trabajáis con confidencialidad?","acceptedAnswer":{"@type":"Answer","text":"Sí, absoluta. Nunca revelamos clientes, casos ni resultados. La confidencialidad es una condición no negociable de nuestro servicio."}},
    {"@type":"Question","name":"¿Cuánto cuesta la gestión de reputación online?","acceptedAnswer":{"@type":"Answer","text":"Los precios varían según el servicio: desde 99€ por reseña falsa eliminada, hasta 690€ para casos de difamación, 1.490€ para el pack Presencia o 3.900€ para el pack Autoridad completo. Análisis gratuito sin compromiso."}},
  ]
});

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      
      {/* NAV */}
      <NavComponent />
      
      {/* HERO */}
      <section className="sec" style={{ borderBottom: "1px solid var(--bdr)", paddingTop: 48, paddingBottom: 56 }}>
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-main">
              <div className="eyebrow">Empresa registrada en España · Confidencial</div>
              <h1 className="h1">
                Tu reputación online<br />
                <span className="gold-word">es tu activo más valioso.</span><br />
                Protégela.
              </h1>
              <p className="lead">
                Eliminamos contenido dañino de Google, construimos tu autoridad digital
                y te blindamos ante amenazas futuras. Gestión profesional, proceso 100% legal.
              </p>
              <div className="btn-row" style={{ marginBottom: 32 }}>
                <a href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-gold">
                  Análisis gratuito →
                </a>
                <a href="https://wa.me/34684115988?text=Hola, quiero información sobre gestión de reputación" 
                   target="_blank" rel="noopener" className="btn-white">
                  <span style={{ fontSize: 16 }}>💬</span> WhatsApp
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["✓ Contrato legal previo","🔒 Confidencial","🇪🇸 Empresa española","✓ Sin garantías falsas"].map(t=>(
                  <span key={t} style={{ fontSize: 12, padding: "5px 12px", borderRadius: 999, background: "rgba(255,255,255,.04)", border: "1px solid var(--bdr)", color: "var(--t3)" }}>{t}</span>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="form-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <span className="pulse-dot" />
                <span style={{ fontFamily: "var(--ff-m)", fontSize: 11, color: "var(--t4)" }}>Respuesta garantizada en 24h</span>
              </div>
              <p className="form-card-title">Análisis de reputación gratuito</p>
              <p className="form-card-sub">Dinos tu situación y te enviamos un informe detallado. Sin coste ni compromiso.</p>
              
              <div style={{ marginBottom: 14 }}>
                <span className="form-label">¿Qué necesitas?</span>
                <div className="form-options">
                  {["Eliminar contenido","Construir autoridad","Monitorización","No sé, quiero orientación"].map(o=>(
                    <span key={o} className="form-opt">{o}</span>
                  ))}
                </div>
              </div>
              
              <input className="form-input" type="text" placeholder="Nombre o marca a analizar" />
              <input className="form-input" type="email" placeholder="Correo electrónico" />
              
              <a href="mailto:hola@prestior.es?subject=Solicito análisis gratuito de reputación" className="form-submit">
                Solicitar análisis gratuito →
              </a>
              <p className="form-fine">🔒 Confidencial · Sin compromiso · Respuesta en 24h</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-inner">
          <p className="trust-label">Gestionamos presencia en</p>
          <div className="trust-logos">
            {["Google","Forbes","BBC","NYPost","Wired","LinkedIn","Trustpilot","Wikipedia"].map(l=>(
              <span key={l} className="trust-logo">{l}</span>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <section style={{ background: "var(--bg2)", borderBottom: "1px solid var(--bdr)" }}>
        <div className="wrap">
          <div className="stats-grid">
            {[["100+","Casos resueltos"],["48h","Primera respuesta"],["3.900€","Ticket medio"],["100%","Confidencial"]].map(([n,l])=>(
              <div key={l} className="stat-item">
                <div className="stat-n">{n}</div>
                <div className="stat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUÁNDO NOS LLAMAN */}
      <section className="sec">
        <div className="wrap">
          <div className="eyebrow">Cuándo nos llaman</div>
          <h2 className="h2">¿Te identificas<br />con alguna de estas situaciones?</h2>
          <div className="crisis-list">
            {[
              ["Un artículo falso o difamatorio aparece cuando buscan tu nombre en Google.","Difamación"],
              ["Alguien publicó fotos o vídeos íntimos sin tu consentimiento.","Urgente — 24h"],
              ["Hay una cuenta haciéndose pasar por ti en redes sociales.","Suplantación"],
              ["Reseñas falsas coordinadas están dañando tu negocio.","Reseñas"],
              ["ChatGPT o Perplexity describe tu empresa de forma incorrecta o dañina.","IA / GEO"],
              ["Quieres que Google muestre quién eres realmente antes de un lanzamiento.","Autoridad"],
            ].map(([t,tag])=>(
              <div key={tag} className="crisis-row">
                <p className="crisis-text">{t}</p>
                <span className="crisis-tag">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="sec sec-alt">
        <div className="wrap">
          <div className="eyebrow">Servicios</div>
          <h2 className="h2">Todo lo que<br />necesitas en un lugar.</h2>
          <div className="svc-grid" style={{ marginTop: 28 }}>
            {[
              { icon:"🛡️", desde:"Desde 690€", title:"Protección", desc:"Difamación, derecho al olvido, suplantación de identidad, contenido íntimo filtrado, reseñas falsas. Proceso legal, sin garantías imposibles.", href:"/proteccion-reputacion/", featured:false },
              { icon:"📈", desde:"Desde 390€", title:"Autoridad digital", desc:"Knowledge Panel en Google, apariciones editoriales en medios (Forbes, BBC, NYPost), wikis de autoridad, marca personal y reputación en IA.", href:"/autoridad-digital/", featured:true },
              { icon:"👁️", desde:"Desde 197€/mes", title:"Blindaje continuo", desc:"Monitorización activa de tu nombre y marca. Alertas tempranas y reacción antes de que el daño escale. Incluye gestión de reputación en IA.", href:"/monitorizacion-reputacion/", featured:false },
            ].map(({icon,desde,title,desc,href,featured})=>(
              <div key={title} className={`svc-card${featured?" featured":""}`}>
                <div className="svc-icon" style={{ background: featured ? "rgba(201,168,76,.12)" : "rgba(255,255,255,.04)" }}>
                  {icon}
                </div>
                <p className="svc-desde">{desde}{featured && <span className="svc-badge">Más vendido</span>}</p>
                <h3 className="svc-title">{title}</h3>
                <p className="svc-desc">{desc}</p>
                <a href={href} className="svc-link">Ver servicios →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="sec">
        <div className="wrap">
          <div className="eyebrow">Proceso</div>
          <h2 className="h2">Cómo lo hacemos</h2>
          <div className="process-list" style={{ marginTop: 24 }}>
            {[
              ["01","Análisis gratuito","Revisamos tu situación actual en Google, redes, medios y plataformas de IA. Te decimos exactamente qué es viable y qué no. Sin coste, sin compromiso."],
              ["02","Estrategia personalizada","Diseñamos el plan concreto para tu caso: qué servicios, en qué orden y con qué plazos reales. Sin promesas que no podemos cumplir."],
              ["03","Contrato legal previo","Firmamos antes de que pagues. El contrato especifica el servicio exacto, los plazos y la política de garantía. Sin letra pequeña."],
              ["04","Ejecución profesional","Gestionamos todo. Te mantenemos informado en cada fase con informes de progreso claros."],
              ["05","Blindaje posterior","Una vez resuelto, configuramos la monitorización continua para que no vuelva a ocurrir."],
            ].map(([n,t,d])=>(
              <div key={n} className="process-row">
                <span className="process-num">{n}</span>
                <div>
                  <p className="process-title">{t}</p>
                  <p className="process-desc">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="sec sec-alt">
        <div className="wrap">
          <div className="eyebrow">Resultados</div>
          <h2 className="h2">Hechos, no promesas.</h2>
          <div className="results-list" style={{ marginTop: 24 }}>
            {[
              ["4 sem.","Artículo difamatorio desindexado de Google. CEO empresa tech, Madrid."],
              ["48h","Cuenta de suplantación eliminada en Instagram. Influencer, 180K seguidores."],
              ["€80K","Generados en lanzamiento tras construir Knowledge Panel + Forbes editorial."],
              ["7/7","Reseñas falsas coordinadas eliminadas de Google. Clínica dental, Valencia."],
              ["24h","Contenido íntimo filtrado retirado de plataformas principales. Urgente."],
            ].map(([s,d])=>(
              <div key={s} className="result-row">
                <span className="result-stat">{s}</span>
                <p className="result-desc">{d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <a href="/casos-de-exito/" style={{ fontFamily:"var(--ff-m)", fontSize:12, color:"var(--t3)", textDecoration:"none", borderBottom:"1px solid var(--bdr)", paddingBottom:2 }}>
              Ver todos los casos →
            </a>
          </div>
        </div>
      </section>

      {/* PAQUETES */}
      <section className="sec">
        <div className="wrap">
          <div className="eyebrow">Inversión</div>
          <h2 className="h2">Paquetes completos</h2>
          <p className="body" style={{ marginBottom: 28 }}>Los servicios sueltos funcionan. Los paquetes completos transforman. El cerebro elige el del medio — donde está el mayor valor.</p>
          <div className="pkg-list">
            {[
              { n:"Presencia", p:"1.490€", d:"Knowledge Panel personal, 1-2 medios de entrada y optimización de nombre en Google. Para quienes quieren empezar a controlar su narrativa.", hot:false },
              { n:"Autoridad", p:"3.900€", d:"Knowledge Panel + pack wikis de autoridad + Forbes Argentina editorial + posicionamiento en Google e IA. El más contratado. Autoridad documentada y duradera.", hot:true },
              { n:"Dominio", p:"9.900€", d:"Todo el pack Autoridad más pack de medios top internacionales (NYPost, BBC, Wired, People). Para dominar tu espacio a nivel global.", hot:false },
            ].map(({n,p,d,hot})=>(
              <div key={n} className="pkg-row">
                <div>
                  <p className={`pkg-name${hot?" hot":""}`}>{n}{hot && <span className="svc-badge">Recomendado</span>}</p>
                  <p className="pkg-desc">{d}</p>
                </div>
                <div>
                  <p className="pkg-price">{p}</p>
                  <a href="/contacto/" className="pkg-link">Solicitar →</a>
                </div>
              </div>
            ))}
          </div>
          <p className="mono" style={{ marginTop: 20 }}>Presupuesto personalizado tras análisis gratuito · IVA no incluido · <a href="/precios/" style={{ color:"var(--t3)", textDecoration:"none" }}>Ver todos los precios →</a></p>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="sec sec-alt">
        <div className="wrap">
          <div className="eyebrow">Para quién</div>
          <h2 className="h2">Trabajamos con</h2>
          <div className="serve-grid" style={{ marginTop: 24 }}>
            {[
              { e:"👔", t:"Directivos y CEOs", d:"Protección de reputación ejecutiva, Knowledge Panel y presencia en medios." },
              { e:"📱", t:"Creadores e influencers", d:"Cuentas falsas, contenido filtrado, crisis de imagen en redes sociales." },
              { e:"🏢", t:"Empresas", d:"Reseñas falsas, difamación corporativa, crisis de reputación online." },
              { e:"⭐", t:"Coaches y expertos", d:"Autoridad digital, apariciones en medios, marca personal en Google." },
            ].map(({e,t,d})=>(
              <div key={t} className="serve-item">
                <span className="serve-emoji">{e}</span>
                <p className="serve-title">{t}</p>
                <p className="serve-desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="sec">
        <div className="wrap">
          <div className="eyebrow">Clientes</div>
          <h2 className="h2">Lo que dicen</h2>
          <div className="testi-grid" style={{ marginTop: 24 }}>
            {[
              { q:"Tenía un artículo difamatorio en el primer resultado de Google desde hace 3 años. Desindexado en 4 semanas.", a:"CEO empresa tech, Madrid", t:"Desindexación" },
              { q:"Knowledge Panel activo y Forbes editorial antes del lanzamiento. El curso generó €80K en ventas.", a:"Coach y formadora online", t:"Pack Autoridad" },
              { q:"7 reseñas falsas de un ex-empleado. Todas eliminadas antes de un mes. Servicio impecable.", a:"Dr. C.V. · Clínica dental, Valencia", t:"Reseñas eliminadas" },
              { q:"Cuenta falsa con mis fotos enviando DMs fraudulentos. Eliminada en 48 horas. Muy discretos.", a:"Influencer, 180K seguidores", t:"Suplantación resuelta" },
            ].map((t,i)=>(
              <div key={i} className="testi-card">
                <p className="testi-quote">"{t.q}"</p>
                <div className="testi-bottom">
                  <span className="testi-author">{t.a}</span>
                  <span className="testi-tag">{t.t}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec-alt">
        <div className="wrap">
          <div className="eyebrow">FAQ</div>
          <h2 className="h2">Preguntas frecuentes</h2>
          <div className="faq-list" style={{ marginTop: 24 }}>
            {[
              ["¿Cuánto cuesta la gestión de reputación online?","Los precios varían según el servicio: desde 99€ por reseña eliminada, hasta 690€ para casos de difamación o 3.900€ para el pack Autoridad completo. Análisis inicial gratuito y sin compromiso."],
              ["¿Cuánto tarda en verse resultados?","Depende del servicio: desindexación en Google 2-6 semanas, Knowledge Panel 4-8 semanas, aparición en medios 4-12 semanas. Contenido filtrado urgente: gestión en 24-48h."],
              ["¿Garantizáis la eliminación de contenido?","No prometemos garantías imposibles. La decisión final depende de Google o la plataforma. Garantizamos contrato legal previo, proceso 100% correcto y política de crédito si el servicio no se ejecuta."],
              ["¿Trabajáis con confidencialidad?","Absoluta. Nunca revelamos clientes, casos ni resultados. Condición no negociable del servicio."],
              ["¿Sois una empresa registrada en España?","Sí. CIF disponible bajo solicitud. Actividad 100% legal. Podéis verificar nuestros datos en el Registro Mercantil."],
            ].map(([q,a])=>(
              <details key={q} className="faq-item">
                <summary className="faq-q">{q}</summary>
                <div className="faq-a" style={{ paddingTop: 12 }}>{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="sec sec-last" style={{ background:"var(--bg)", paddingTop:56, paddingBottom:64 }}>
        <div className="wrap" style={{ textAlign:"center" }}>
          <div style={{ width:40, height:3, background:"var(--gold)", borderRadius:2, margin:"0 auto 32px" }} />
          <h2 className="h2" style={{ maxWidth:600, margin:"0 auto 16px" }}>
            ¿Qué aparece cuando<br />
            <span className="gold-word">buscan tu nombre en Google?</span>
          </h2>
          <p className="lead" style={{ maxWidth:500, margin:"0 auto 36px" }}>
            Búscate ahora. Si lo que ves te perjudica, cuéntanoslo. El análisis es gratuito y la respuesta llega en 24 horas.
          </p>
          <div className="btn-row" style={{ justifyContent:"center", marginBottom:16 }}>
            <a href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-gold" style={{ fontSize:16, padding:"16px 36px" }}>
              Análisis gratuito →
            </a>
            <a href="https://wa.me/34684115988" target="_blank" rel="noopener" className="btn-white" style={{ fontSize:15 }}>
              💬 WhatsApp
            </a>
          </div>
          <p style={{ fontFamily:"var(--ff-m)", fontSize:11, color:"var(--t4)" }}>Sin coste · Respuesta en 24h · Confidencial</p>
        </div>
      </section>

      <FooterComponent />
    </>
  );
}

function NavComponent() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          <span className="nav-logo-bar" />
          <span className="nav-logo-text">Prestior</span>
        </a>
        <div className="nav-links">
          {[["Protección","/proteccion-reputacion/"],["Autoridad","/autoridad-digital/"],["Resultados","/casos-de-exito/"],["Precios","/precios/"]].map(([l,h])=>(
            <a key={h} href={h} className="nav-link">{l}</a>
          ))}
        </div>
        <a href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="nav-cta">Análisis gratuito</a>
      </div>
    </nav>
  );
}

function FooterComponent() {
  return (
    <footer className="ft">
      <div className="ft-inner">
        <div className="ft-grid">
          <div>
            <div className="ft-logo-row">
              <span className="ft-logo-bar" />
              <span className="ft-logo-name">Prestior</span>
            </div>
            <p className="ft-tagline">Agencia de reputación y autoridad digital.<br />Empresa registrada en España.</p>
          </div>
          <div>
            <span className="ft-col-label">Servicios</span>
            {[["Protección","/proteccion-reputacion/"],["Autoridad","/autoridad-digital/"],["Blindaje","/monitorizacion-reputacion/"],["Precios","/precios/"]].map(([l,h])=>(
              <a key={h} href={h} className="ft-link">{l}</a>
            ))}
          </div>
          <div>
            <span className="ft-col-label">Empresa</span>
            {[["Casos de éxito","/casos-de-exito/"],["Blog","/blog/"],["Sobre nosotros","/sobre-nosotros/"],["Contacto","/contacto/"]].map(([l,h])=>(
              <a key={h} href={h} className="ft-link">{l}</a>
            ))}
          </div>
        </div>
        <div className="ft-divider" />
        <div className="ft-bottom">
          <p className="ft-copy">© {new Date().getFullYear()} Prestior · Empresa registrada en España · CIF disponible</p>
          <div className="ft-legal">
            {[["Aviso legal","/aviso-legal/"],["Privacidad","/privacidad/"],["Cookies","/cookies/"]].map(([l,h])=>(
              <a key={h} href={h} className="ft-legal-link">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
