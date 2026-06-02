import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Prestior — Gestión de Reputación Digital | Agencia Especializada España",
  description: "Agencia de reputación digital en España. Eliminamos difamación, construimos autoridad en Google y medios, y blindamos tu presencia online. Análisis gratuito.",
  alternates: { canonical: "https://prestior.es/" },
};

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Cuánto cuesta la gestión de reputación digital?", acceptedAnswer: { "@type": "Answer", text: "Desde 690€ para casos de difamación o derecho al olvido, hasta 3.900€ para el pack Autoridad completo (Knowledge Panel + Forbes + wikis de autoridad). Análisis gratuito previo sin compromiso." } },
    { "@type": "Question", name: "¿Garantizáis la eliminación de contenido?", acceptedAnswer: { "@type": "Answer", text: "No prometemos garantías imposibles. La decisión final depende de Google o la plataforma. Garantizamos contrato legal previo, proceso 100% correcto y política de crédito si el servicio no se ejecuta." } },
    { "@type": "Question", name: "¿Cuánto tarda en verse resultados?", acceptedAnswer: { "@type": "Answer", text: "Desindexación en Google: 2-6 semanas. Knowledge Panel: 4-8 semanas. Aparición editorial en medios: 4-12 semanas. Contenido íntimo filtrado: gestión urgente en 24-48h." } },
    { "@type": "Question", name: "¿Trabajáis con confidencialidad?", acceptedAnswer: { "@type": "Answer", text: "Sí, absoluta. Nunca revelamos clientes, casos ni resultados. Condición no negociable del servicio." } },
  ],
});

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { 
          background: #0a0a0a; 
          color: #f5f5f5; 
          font-family: 'DM Sans', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        a { color: inherit; text-decoration: none; }

        /* ─── VARIABLES ─────────────────────────────── */
        :root {
          --gold: #c9a84c;
          --gold2: #e2c36e;
          --black: #0a0a0a;
          --black2: #111111;
          --black3: #1a1a1a;
          --white: #f5f5f5;
          --white2: rgba(245,245,245,0.65);
          --white3: rgba(245,245,245,0.35);
          --white4: rgba(245,245,245,0.15);
          --bdr: rgba(255,255,255,0.08);
          --bdr2: rgba(255,255,255,0.14);
          --goldbdr: rgba(201,168,76,0.3);
          --max: 1000px;
          --px: 24px;
        }

        /* ─── NAV ───────────────────────────────────── */
        .pnav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(10,10,10,0.96);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--bdr);
        }
        .pnav-inner {
          max-width: var(--max); margin: 0 auto;
          padding: 0 var(--px); height: 62px;
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
        }
        .pnav-logo { display: flex; align-items: center; gap: 10px; }
        .pnav-logo-stripe { width: 3px; height: 24px; background: var(--gold); border-radius: 2px; }
        .pnav-logo-text { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 18px; color: var(--white); letter-spacing: -0.01em; }
        .pnav-links { display: flex; align-items: center; gap: 28px; }
        .pnav-link { font-family: 'DM Mono', monospace; font-size: 12px; color: var(--white3); letter-spacing: 0.04em; transition: color 0.2s; }
        .pnav-link:hover { color: var(--white); }
        .pnav-cta { 
          font-family: 'Syne', sans-serif; font-weight: 600; font-size: 13px;
          background: var(--gold); color: var(--black);
          padding: 9px 20px; border-radius: 8px; transition: all 0.2s; white-space: nowrap;
        }
        .pnav-cta:hover { background: var(--gold2); }
        .pnav-ham { display: none; background: none; border: none; color: var(--white3); cursor: pointer; font-size: 22px; padding: 4px; }

        /* ─── HERO ──────────────────────────────────── */
        .hero { 
          background: var(--black);
          border-bottom: 1px solid var(--bdr);
          position: relative; overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,168,76,0.07) 0%, transparent 60%),
                      radial-gradient(ellipse 40% 40% at 20% 80%, rgba(100,150,255,0.05) 0%, transparent 60%);
          pointer-events: none;
        }
        .hero-inner {
          max-width: var(--max); margin: 0 auto; padding: 64px var(--px) 72px;
          display: grid; grid-template-columns: 1fr; gap: 48px; position: relative; z-index: 1;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(201,168,76,0.1); border: 1px solid var(--goldbdr);
          border-radius: 999px; padding: 5px 14px; margin-bottom: 24px;
          font-family: 'DM Mono', monospace; font-size: 11px; color: var(--gold2);
          letter-spacing: 0.06em;
        }
        .hero-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); }
        .hero-h1 {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          line-height: 1.06; letter-spacing: -0.025em; color: var(--white);
          margin-bottom: 22px;
        }
        .hero-h1 span { 
          background: linear-gradient(135deg, var(--gold), var(--gold2), #f5e09a);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hero-sub {
          font-size: clamp(1rem, 2vw, 1.1rem); line-height: 1.78;
          color: var(--white2); font-weight: 300; max-width: 540px; margin-bottom: 36px;
        }
        .hero-btns { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black); font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 15px; padding: 14px 28px; border-radius: 10px;
          transition: all 0.2s; white-space: nowrap;
        }
        .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 28px rgba(201,168,76,0.4); }
        .btn-wa {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.06); border: 1px solid var(--bdr2);
          color: var(--white2); font-family: 'Syne', sans-serif; font-weight: 600;
          font-size: 15px; padding: 14px 24px; border-radius: 10px; transition: all 0.2s;
        }
        .btn-wa:hover { background: rgba(255,255,255,0.1); border-color: rgba(74,222,128,0.4); color: #4ade80; }
        .hero-trust { display: flex; flex-wrap: wrap; gap: 8px; }
        .trust-pill {
          font-size: 12px; padding: 5px 12px; border-radius: 999px;
          background: rgba(255,255,255,0.04); border: 1px solid var(--bdr); color: var(--white3);
        }

        /* Hero form */
        .hero-form {
          background: var(--black2);
          border: 1px solid var(--bdr2); border-radius: 16px; padding: 28px 24px;
        }
        .form-live { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
        .form-dot { width: 8px; height: 8px; border-radius: 50%; background: #4ade80; animation: blink 2s ease-in-out infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .form-live-text { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--white4); letter-spacing: 0.06em; }
        .form-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 19px; color: var(--white); margin-bottom: 4px; }
        .form-sub { font-size: 13px; color: var(--white3); margin-bottom: 20px; font-weight: 300; }
        .form-label { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--gold); letter-spacing: 0.12em; text-transform: uppercase; display: block; margin-bottom: 10px; }
        .form-opts { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px; }
        .form-opt {
          padding: 9px 14px; border: 1px solid var(--bdr); border-radius: 8px;
          font-size: 13px; color: var(--white3); cursor: pointer;
          background: transparent; transition: all 0.2s; font-family: 'DM Sans', sans-serif;
        }
        .form-opt:hover { border-color: var(--goldbdr); color: var(--white); background: rgba(201,168,76,0.06); }
        .finput {
          width: 100%; padding: 12px 14px; margin-bottom: 10px;
          background: rgba(255,255,255,0.04); border: 1px solid var(--bdr);
          border-radius: 8px; color: var(--white); font-size: 14px;
          font-family: 'DM Sans', sans-serif; outline: none; transition: border-color 0.2s;
        }
        .finput:focus { border-color: var(--goldbdr); }
        .finput::placeholder { color: var(--white4); }
        .form-submit {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%; padding: 14px; margin-top: 2px;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black); font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 15px; border: none; border-radius: 10px; cursor: pointer;
          transition: opacity 0.2s;
        }
        .form-submit:hover { opacity: 0.88; }
        .form-fine { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--white4); text-align: center; margin-top: 10px; }

        /* ─── TRUST BAR ─────────────────────────────── */
        .trust-bar {
          background: var(--black2); border-bottom: 1px solid var(--bdr);
          padding: 20px var(--px);
        }
        .trust-bar-inner { max-width: var(--max); margin: 0 auto; }
        .trust-bar-label { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--white4); letter-spacing: 0.14em; text-transform: uppercase; text-align: center; margin-bottom: 14px; }
        .trust-logos { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 28px; }
        .trust-logo-item { font-family: 'Syne', sans-serif; font-weight: 600; font-size: 13px; color: var(--white4); letter-spacing: 0.02em; }

        /* ─── SECTION BASE ──────────────────────────── */
        .section { border-bottom: 1px solid var(--bdr); }
        .section-alt { background: var(--black2); }
        .section-inner { max-width: var(--max); margin: 0 auto; padding: 56px var(--px); }
        .eyebrow { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--gold); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 18px; display: flex; align-items: center; gap: 10px; }
        .eyebrow::before { content: ''; display: block; width: 20px; height: 1px; background: var(--gold); opacity: 0.5; }
        .sh2 { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.8rem, 4vw, 2.8rem); line-height: 1.1; letter-spacing: -0.02em; color: var(--white); margin-bottom: 14px; }
        .sh2 span { background: linear-gradient(135deg, var(--gold), var(--gold2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .slead { font-size: 16px; color: var(--white2); line-height: 1.75; font-weight: 300; }

        /* ─── STATS ─────────────────────────────────── */
        .stats-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--bdr); }
        .stat-box { background: var(--black2); padding: 28px 20px; text-align: center; }
        .stat-n { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(2rem, 5vw, 2.6rem); color: var(--white); line-height: 1; margin-bottom: 6px; }
        .stat-l { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--white4); letter-spacing: 0.06em; }

        /* ─── PROBLEM ROWS ──────────────────────────── */
        .prob-row { 
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 16px; padding: 20px 0; border-bottom: 1px solid var(--bdr);
        }
        .prob-row:last-child { border-bottom: none; }
        .prob-num { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--white4); flex-shrink: 0; padding-top: 2px; min-width: 24px; }
        .prob-text { font-size: 15px; color: var(--white2); line-height: 1.65; font-weight: 300; flex: 1; }
        .prob-tag { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--gold); letter-spacing: 0.08em; text-transform: uppercase; flex-shrink: 0; text-align: right; min-width: 80px; padding-top: 2px; }

        /* ─── SERVICE CARDS ─────────────────────────── */
        .svc-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 32px; }
        .svc-card {
          background: var(--black3); border: 1px solid var(--bdr);
          border-radius: 14px; padding: 26px 22px; transition: border-color 0.2s;
        }
        .svc-card:hover { border-color: var(--bdr2); }
        .svc-card.hot { border-color: var(--goldbdr); background: linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.02) 100%); }
        .svc-icon-wrap { width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 18px; }
        .svc-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 6px; }
        .svc-desde { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--white4); margin-bottom: 4px; }
        .svc-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 19px; color: var(--white); }
        .svc-desc { font-size: 14px; color: var(--white2); line-height: 1.72; font-weight: 300; margin: 10px 0 18px; }
        .svc-link { font-family: 'DM Mono', monospace; font-size: 12px; color: var(--gold); letter-spacing: 0.04em; transition: opacity 0.2s; }
        .svc-link:hover { opacity: 0.7; }
        .svc-badge { display: inline-block; font-family: 'DM Mono', monospace; font-size: 9px; color: var(--gold); background: rgba(201,168,76,0.12); border: 1px solid rgba(201,168,76,0.25); border-radius: 999px; padding: 3px 9px; letter-spacing: 0.08em; text-transform: uppercase; }

        /* ─── PROCESS ───────────────────────────────── */
        .proc-row { display: grid; grid-template-columns: 44px 1fr; gap: 16px; padding: 22px 0; border-bottom: 1px solid var(--bdr); align-items: start; }
        .proc-row:last-child { border-bottom: none; }
        .proc-num { width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--goldbdr); background: rgba(201,168,76,0.06); display: flex; align-items: center; justify-content: center; font-family: 'DM Mono', monospace; font-size: 12px; color: var(--gold); flex-shrink: 0; }
        .proc-title { font-family: 'Syne', sans-serif; font-weight: 600; font-size: 16px; color: var(--white); margin-bottom: 4px; }
        .proc-desc { font-size: 14px; color: var(--white2); line-height: 1.7; font-weight: 300; }

        /* ─── RESULTS ───────────────────────────────── */
        .res-row { display: grid; grid-template-columns: 80px 1fr; gap: 20px; padding: 22px 0; border-bottom: 1px solid var(--bdr); align-items: start; }
        .res-row:last-child { border-bottom: none; }
        .res-stat { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.6rem, 4vw, 2rem); color: var(--white); line-height: 1; }
        .res-desc { font-size: 15px; color: var(--white2); line-height: 1.65; font-weight: 300; padding-top: 4px; }
        .res-tag { display: inline-block; margin-top: 6px; font-family: 'DM Mono', monospace; font-size: 10px; color: #4ade80; background: rgba(74,222,128,0.08); border: 1px solid rgba(74,222,128,0.2); border-radius: 999px; padding: 2px 8px; letter-spacing: 0.04em; }

        /* ─── PRICING ───────────────────────────────── */
        .pkg-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 32px; }
        .pkg-card {
          background: var(--black3); border: 1px solid var(--bdr); border-radius: 14px;
          padding: 28px 24px; display: flex; flex-direction: column; gap: 0;
        }
        .pkg-card.hot { border-color: var(--goldbdr); background: linear-gradient(160deg, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 100%); }
        .pkg-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 10px; }
        .pkg-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 18px; color: var(--white); }
        .pkg-name.gold { color: var(--gold); }
        .pkg-price { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 28px; color: var(--white); line-height: 1; white-space: nowrap; text-align: right; }
        .pkg-desc { font-size: 14px; color: var(--white2); line-height: 1.7; font-weight: 300; margin-bottom: 20px; }
        .pkg-features { list-style: none; margin-bottom: 22px; }
        .pkg-feature { display: flex; align-items: flex-start; gap: 10px; padding: 6px 0; font-size: 13px; color: var(--white2); border-bottom: 1px solid rgba(255,255,255,0.04); }
        .pkg-feature:last-child { border-bottom: none; }
        .pkg-check { color: var(--gold); flex-shrink: 0; margin-top: 1px; }
        .pkg-cta { 
          display: flex; align-items: center; justify-content: center;
          padding: 13px; border-radius: 10px; font-family: 'Syne', sans-serif;
          font-weight: 700; font-size: 14px; transition: all 0.2s; margin-top: auto;
        }
        .pkg-cta-gold { background: linear-gradient(135deg, var(--gold), var(--gold2)); color: var(--black); }
        .pkg-cta-gold:hover { opacity: 0.88; }
        .pkg-cta-outline { background: transparent; border: 1px solid var(--bdr2); color: var(--white2); }
        .pkg-cta-outline:hover { background: rgba(255,255,255,0.06); color: var(--white); }

        /* ─── WHO ───────────────────────────────────── */
        .who-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 28px; }
        .who-card { background: var(--black3); border: 1px solid var(--bdr); border-radius: 14px; padding: 20px 18px; transition: border-color 0.2s; }
        .who-card:hover { border-color: var(--bdr2); }
        .who-emoji { font-size: 26px; display: block; margin-bottom: 12px; }
        .who-title { font-family: 'Syne', sans-serif; font-weight: 600; font-size: 15px; color: var(--white); margin-bottom: 6px; }
        .who-desc { font-size: 12px; color: var(--white3); line-height: 1.6; font-weight: 300; }

        /* ─── TESTIMONIALS ──────────────────────────── */
        .testi-grid { display: grid; grid-template-columns: 1fr; gap: 14px; margin-top: 28px; }
        .testi-card { background: var(--black3); border: 1px solid var(--bdr); border-radius: 14px; padding: 24px 22px; }
        .testi-stars { display: flex; gap: 3px; margin-bottom: 14px; }
        .star { color: var(--gold); font-size: 14px; }
        .testi-q { font-size: 14px; color: var(--white2); line-height: 1.7; font-style: italic; font-weight: 300; margin-bottom: 18px; }
        .testi-footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding-top: 14px; border-top: 1px solid var(--bdr); }
        .testi-author { font-size: 12px; color: var(--white3); }
        .testi-tag { font-family: 'DM Mono', monospace; font-size: 10px; color: #4ade80; background: rgba(74,222,128,0.08); border: 1px solid rgba(74,222,128,0.2); border-radius: 999px; padding: 3px 10px; letter-spacing: 0.04em; white-space: nowrap; }

        /* ─── FAQ ───────────────────────────────────── */
        .faq-list { display: flex; flex-direction: column; gap: 8px; margin-top: 28px; }
        details.faq { background: var(--black3); border: 1px solid var(--bdr); border-radius: 12px; overflow: hidden; }
        details.faq[open] { border-color: var(--bdr2); }
        .faq summary { 
          padding: 18px 20px; cursor: pointer; list-style: none;
          font-family: 'Syne', sans-serif; font-weight: 600; font-size: 14px; color: var(--white);
          display: flex; justify-content: space-between; align-items: center; gap: 12px;
          user-select: none;
        }
        .faq summary::after { content: '＋'; font-size: 18px; color: var(--gold); flex-shrink: 0; font-family: 'DM Mono', monospace; transition: transform 0.2s; font-weight: 400; }
        details.faq[open] summary::after { content: '−'; }
        .faq-body { padding: 0 20px 18px; font-size: 14px; color: var(--white2); line-height: 1.75; font-weight: 300; border-top: 1px solid var(--bdr); padding-top: 14px; }

        /* ─── FINAL CTA ─────────────────────────────── */
        .final-cta { 
          background: var(--black);
          position: relative; overflow: hidden;
        }
        .final-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 80% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta-bar { width: 40px; height: 3px; background: var(--gold); border-radius: 2px; margin-bottom: 32px; }

        /* ─── FOOTER ────────────────────────────────── */
        .pfooter { background: #050505; border-top: 1px solid var(--bdr); }
        .pfooter-inner { max-width: var(--max); margin: 0 auto; padding: 40px var(--px) 44px; }
        .pfooter-grid { display: grid; grid-template-columns: 1fr; gap: 28px; margin-bottom: 28px; }
        .pfooter-logo { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
        .pfooter-stripe { width: 3px; height: 20px; background: var(--gold); border-radius: 2px; }
        .pfooter-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 16px; color: var(--white); }
        .pfooter-tag { font-size: 13px; color: var(--white4); line-height: 1.6; font-weight: 300; }
        .pfooter-col-label { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--white4); letter-spacing: 0.14em; text-transform: uppercase; display: block; margin-bottom: 14px; }
        .pfooter-link { display: block; font-size: 13px; color: var(--white3); margin-bottom: 9px; transition: color 0.2s; }
        .pfooter-link:hover { color: var(--white); }
        .pfooter-divider { height: 1px; background: var(--bdr); margin-bottom: 20px; }
        .pfooter-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; }
        .pfooter-copy { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--white4); }
        .pfooter-legal { display: flex; gap: 18px; flex-wrap: wrap; }
        .pfooter-legal a { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--white4); transition: color 0.2s; }
        .pfooter-legal a:hover { color: var(--white3); }

        /* ─── RESPONSIVE ────────────────────────────── */
        @media (min-width: 640px) {
          .pnav-links { display: flex !important; }
          .pnav-cta { display: inline-flex !important; }
          .pnav-ham { display: none !important; }
          .hero-inner { grid-template-columns: 1fr 1fr; align-items: start; gap: 56px; }
          .stats-row { grid-template-columns: repeat(4, 1fr); }
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
          .testi-grid { grid-template-columns: repeat(2, 1fr); }
          .who-grid { grid-template-columns: repeat(4, 1fr); }
          .pkg-grid { grid-template-columns: repeat(3, 1fr); }
          .pfooter-grid { grid-template-columns: 1.4fr 1fr 1fr; }
        }
        @media (max-width: 639px) {
          .pnav-links { display: none !important; }
          .pnav-cta { display: none !important; }
          .pnav-ham { display: flex !important; }
        }
      ` }} />

      {/* ── NAV ── */}
      <nav className="pnav">
        <div className="pnav-inner">
          <div className="pnav-logo">
            <span className="pnav-logo-stripe" />
            <span className="pnav-logo-text">Prestior</span>
          </div>
          <div className="pnav-links">
            {[["Protección","/proteccion-reputacion/"],["Autoridad","/autoridad-digital/"],["Resultados","/casos-de-exito/"],["Precios","/precios/"]].map(([l,h])=>(
              <Link key={h} href={h} className="pnav-link">{l}</Link>
            ))}
          </div>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="pnav-cta">
            Análisis gratuito
          </Link>
          <button className="pnav-ham" aria-label="Menú">☰</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          {/* Left */}
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Empresa registrada · Confidencial · Sin garantías falsas
            </div>
            <h1 className="hero-h1">
              Tu reputación online<br />
              <span>es tu activo</span><br />
              más valioso.
            </h1>
            <p className="hero-sub">
              Eliminamos contenido dañino de Google, construimos tu autoridad 
              en medios y blindamos tu presencia ante amenazas futuras. 
              Proceso 100% legal. Empresa española.
            </p>
            <div className="hero-btns">
              <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-primary">
                Análisis gratuito →
              </Link>
              <a href="https://wa.me/34684115988?text=Hola, quiero información sobre gestión de reputación" 
                 target="_blank" rel="noopener" className="btn-wa">
                💬 WhatsApp
              </a>
            </div>
            <div className="hero-trust">
              {["✓ Contrato previo","🔒 100% confidencial","🇪🇸 Empresa española","✓ Sin promesas falsas"].map(t=>(
                <span key={t} className="trust-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="hero-form">
            <div className="form-live">
              <span className="form-dot" />
              <span className="form-live-text">Respondemos en menos de 24 horas</span>
            </div>
            <p className="form-title">Análisis de reputación gratuito</p>
            <p className="form-sub">Dinos tu situación y te enviamos un informe detallado. Sin coste ni compromiso.</p>
            <span className="form-label">¿Qué necesitas?</span>
            <div className="form-opts">
              {["Eliminar contenido","Construir autoridad","Monitorización","No sé, necesito orientación"].map(o=>(
                <span key={o} className="form-opt">{o}</span>
              ))}
            </div>
            <input className="finput" type="text" placeholder="Nombre completo o marca a analizar" />
            <input className="finput" type="email" placeholder="Correo electrónico" />
            <a href="mailto:hola@prestior.es?subject=Solicito análisis gratuito de reputación" className="form-submit">
              Solicitar análisis gratuito →
            </a>
            <p className="form-fine">🔒 Confidencial · Sin compromiso · Sin coste</p>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <p className="trust-bar-label">Gestionamos presencia en</p>
          <div className="trust-logos">
            {["Google","Forbes","BBC","NYPost","Wired","LinkedIn","Trustpilot","Wikipedia","Perplexity","ChatGPT"].map(l=>(
              <span key={l} className="trust-logo-item">{l}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="stats-row" style={{ borderBottom: "1px solid var(--bdr)" }}>
        {[["100+","Casos resueltos"],["48h","Primera respuesta"],["€3.9k","Ticket medio"],["100%","Confidencial"]].map(([n,l])=>(
          <div key={l} className="stat-box">
            <div className="stat-n">{n}</div>
            <div className="stat-l">{l}</div>
          </div>
        ))}
      </div>

      {/* ── CUÁNDO NOS LLAMAN ── */}
      <section className="section">
        <div className="section-inner">
          <div className="eyebrow">Situaciones que gestionamos</div>
          <h2 className="sh2">¿Te identificas con alguna<br />de estas situaciones?</h2>
          <p className="slead" style={{ marginBottom: 32 }}>Si alguna te suena, tienes que hablar con nosotros hoy.</p>
          <div>
            {[
              ["01","Aparece un artículo falso o difamatorio cuando buscan tu nombre en Google.","Difamación"],
              ["02","Alguien publicó fotos o vídeos íntimos tuyos sin tu consentimiento.","Urgente — 24h"],
              ["03","Hay una cuenta haciéndose pasar por ti en Instagram, TikTok o YouTube.","Suplantación"],
              ["04","Reseñas falsas coordinadas están hundiendo la nota de tu negocio.","Reseñas falsas"],
              ["05","ChatGPT o Perplexity describe tu empresa de forma incorrecta o dañina.","IA / GEO"],
              ["06","Quieres que Google muestre quién eres realmente antes de tu próximo lanzamiento.","Autoridad digital"],
            ].map(([n,t,tag])=>(
              <div key={n} className="prob-row">
                <span className="prob-num">{n}</span>
                <p className="prob-text">{t}</p>
                <span className="prob-tag">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="eyebrow">Servicios</div>
          <h2 className="sh2">Todo lo que necesitas,<br /><span>en un solo lugar.</span></h2>
          <div className="svc-grid">
            {[
              { icon:"🛡️", desde:"Desde 690€", title:"Protección", desc:"Difamación y calumnias, derecho al olvido, suplantación de identidad, contenido íntimo filtrado, reseñas ilegítimas. Proceso legal, sin garantías imposibles.", href:"/proteccion-reputacion/", hot:false, badge:null },
              { icon:"📈", desde:"Desde 390€", title:"Autoridad digital", desc:"Knowledge Panel en Google, apariciones editoriales en Forbes y medios internacionales, wikis de autoridad, marca personal en buscadores, reputación en IA.", href:"/autoridad-digital/", hot:true, badge:"Más contratado" },
              { icon:"👁️", desde:"Desde 197€/mes", title:"Blindaje continuo", desc:"Monitorización activa de nombre y marca. Alertas tempranas y reacción antes de que el daño escale. Incluye gestión de presencia en plataformas de IA.", href:"/monitorizacion-reputacion/", hot:false, badge:null },
            ].map(({icon,desde,title,desc,href,hot,badge})=>(
              <div key={title} className={`svc-card${hot?" hot":""}`}>
                <div className="svc-icon-wrap" style={{ background: hot ? "rgba(201,168,76,0.12)" : "rgba(255,255,255,0.04)" }}>{icon}</div>
                <p className="svc-desde">{desde}</p>
                <div className="svc-top">
                  <p className="svc-title">{title}</p>
                  {badge && <span className="svc-badge">{badge}</span>}
                </div>
                <p className="svc-desc">{desc}</p>
                <Link href={href} className="svc-link">Ver servicios →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="section">
        <div className="section-inner">
          <div className="eyebrow">Proceso</div>
          <h2 className="sh2">Cómo lo hacemos</h2>
          <div style={{ marginTop: 28 }}>
            {[
              ["01","Análisis gratuito","Revisamos tu situación en Google, redes, medios y plataformas de IA. Te decimos exactamente qué es viable y qué no. Sin coste, sin compromiso."],
              ["02","Estrategia personalizada","Diseñamos el plan concreto para tu caso: servicios, orden y plazos reales. Sin promesas que no podemos cumplir."],
              ["03","Contrato legal previo","Firmamos antes de que pagues. El contrato especifica el servicio exacto, plazos y garantías. Sin letra pequeña."],
              ["04","Ejecución profesional","Gestionamos todo. Te mantenemos informado en cada fase con informes de progreso claros."],
              ["05","Blindaje posterior","Una vez resuelto, configuramos la monitorización continua para que no vuelva a ocurrir."],
            ].map(([n,t,d])=>(
              <div key={n} className="proc-row">
                <div className="proc-num">{n}</div>
                <div>
                  <p className="proc-title">{t}</p>
                  <p className="proc-desc">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTADOS ── */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="eyebrow">Resultados</div>
          <h2 className="sh2">Hechos, no promesas.</h2>
          <div style={{ marginTop: 28 }}>
            {[
              ["4 sem.","Artículo difamatorio desindexado de Google. CEO empresa tech, Madrid.","Desindexación"],
              ["48h","Cuenta de suplantación eliminada en Instagram. Influencer, 180K seguidores.","Suplantación"],
              ["€80K","Generados en lanzamiento tras construir Knowledge Panel + Forbes editorial.","Pack Autoridad"],
              ["7/7","Reseñas falsas coordinadas eliminadas de Google. Clínica dental, Valencia.","Reseñas"],
              ["24h","Contenido íntimo filtrado retirado de plataformas principales.","Urgente"],
            ].map(([s,d,t])=>(
              <div key={s} className="res-row">
                <span className="res-stat">{s}</span>
                <div>
                  <p className="res-desc">{d}</p>
                  <span className="res-tag">{t}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/casos-de-exito/" style={{ fontFamily:"'DM Mono',monospace", fontSize:12, color:"var(--white3)", borderBottom:"1px solid var(--bdr)", paddingBottom:2 }}>
              Ver todos los casos →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PAQUETES ── */}
      <section className="section">
        <div className="section-inner">
          <div className="eyebrow">Inversión</div>
          <h2 className="sh2">Paquetes completos</h2>
          <p className="slead">El cerebro elige el del medio — donde está el mayor valor.</p>
          <div className="pkg-grid">
            {[
              { n:"Presencia", p:"1.490€", d:"Para empezar a controlar cómo apareces en Google.", items:["Knowledge Panel personal","1-2 medios de entrada","Optimización nombre en Google","Informe de estado inicial"], hot:false },
              { n:"Autoridad", p:"3.900€", d:"Autoridad documentada, verificable y duradera. El más contratado.", items:["Knowledge Panel personal","Pack wikis de autoridad","Forbes Argentina editorial","Posicionamiento Google + IA","Informe mensual de resultados"], hot:true },
              { n:"Dominio", p:"9.900€", d:"Domina tu espacio a nivel internacional.", items:["Todo AUTORIDAD incluido","Pack medios top (NYPost, BBC, Wired)","Gestión continua 3 meses","Estrategia personalizada"], hot:false },
            ].map(({n,p,d,items,hot})=>(
              <div key={n} className={`pkg-card${hot?" hot":""}`}>
                <div className="pkg-top">
                  <p className={`pkg-name${hot?" gold":""}`}>{n}{hot && <> <span className="svc-badge" style={{ marginLeft:8 }}>Recomendado</span></>}</p>
                  <p className="pkg-price">{p}</p>
                </div>
                <p className="pkg-desc">{d}</p>
                <ul className="pkg-features">
                  {items.map(i=>(
                    <li key={i} className="pkg-feature">
                      <span className="pkg-check">✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contacto/" className={`pkg-cta ${hot?"pkg-cta-gold":"pkg-cta-outline"}`}>
                  Solicitar información →
                </Link>
              </div>
            ))}
          </div>
          <p style={{ marginTop:20, fontFamily:"'DM Mono',monospace", fontSize:11, color:"var(--white4)" }}>
            Presupuesto personalizado · IVA no incluido ·{" "}
            <Link href="/precios/" style={{ color:"var(--white3)" }}>Ver todos los precios →</Link>
          </p>
        </div>
      </section>

      {/* ── PARA QUIÉN ── */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="eyebrow">Para quién</div>
          <h2 className="sh2">Trabajamos con</h2>
          <div className="who-grid">
            {[
              { e:"👔", t:"Directivos y CEOs", d:"Protección ejecutiva, Knowledge Panel y presencia en medios de primer nivel." },
              { e:"📱", t:"Creadores e influencers", d:"Cuentas falsas, contenido filtrado, crisis de imagen en redes sociales." },
              { e:"🏢", t:"Empresas", d:"Reseñas falsas, difamación corporativa, crisis de reputación online." },
              { e:"⭐", t:"Coaches y expertos", d:"Autoridad digital, apariciones en medios, marca personal en Google." },
            ].map(({e,t,d})=>(
              <div key={t} className="who-card">
                <span className="who-emoji">{e}</span>
                <p className="who-title">{t}</p>
                <p className="who-desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="section">
        <div className="section-inner">
          <div className="eyebrow">Testimonios</div>
          <h2 className="sh2">Lo que dicen<br /><span>nuestros clientes.</span></h2>
          <div className="testi-grid">
            {[
              { q:"Tenía un artículo difamatorio en el primer resultado de Google desde hace 3 años. Desindexado en 4 semanas.", a:"CEO empresa tech, Madrid", t:"Desindexación" },
              { q:"Knowledge Panel activo y Forbes editorial antes del lanzamiento. El curso generó €80K en ventas.", a:"Coach y formadora online", t:"Pack Autoridad" },
              { q:"7 reseñas falsas de un ex-empleado. Todas eliminadas antes de un mes. Servicio impecable.", a:"Dr. C.V. · Clínica dental, Valencia", t:"Reseñas eliminadas" },
              { q:"Cuenta falsa con mis fotos enviando DMs fraudulentos a mis seguidores. Eliminada en 48 horas.", a:"Influencer, 180K seguidores", t:"Suplantación resuelta" },
            ].map((t,i)=>(
              <div key={i} className="testi-card">
                <div className="testi-stars">{[1,2,3,4,5].map(s=><span key={s} className="star">★</span>)}</div>
                <p className="testi-q">"{t.q}"</p>
                <div className="testi-footer">
                  <span className="testi-author">{t.a}</span>
                  <span className="testi-tag">{t.t}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="eyebrow">FAQ</div>
          <h2 className="sh2">Preguntas frecuentes</h2>
          <div className="faq-list">
            {[
              ["¿Cuánto cuesta la gestión de reputación digital?","Desde 690€ para casos de difamación o derecho al olvido, hasta 3.900€ para el pack Autoridad completo. El precio exacto depende del caso. Análisis gratuito sin compromiso."],
              ["¿Cuánto tarda en verse resultados?","Desindexación en Google: 2-6 semanas. Knowledge Panel: 4-8 semanas. Aparición en medios: 4-12 semanas. Contenido íntimo urgente: 24-48h."],
              ["¿Garantizáis la eliminación?","No prometemos garantías imposibles. La decisión final depende de Google o la plataforma. Garantizamos contrato legal previo, proceso correcto y política de crédito."],
              ["¿Trabajáis con confidencialidad?","Absoluta. Nunca revelamos clientes, casos ni resultados. Condición no negociable del servicio."],
              ["¿Sois una empresa registrada en España?","Sí. CIF disponible bajo solicitud. Actividad 100% legal. Verificable en el Registro Mercantil."],
            ].map(([q,a])=>(
              <details key={q} className="faq">
                <summary className="faq summary">{q}</summary>
                <div className="faq-body">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="final-cta section" style={{ borderBottom: "none" }}>
        <div className="section-inner" style={{ textAlign: "center", paddingTop: 72, paddingBottom: 80 }}>
          <div className="cta-bar" style={{ margin: "0 auto 32px" }} />
          <h2 className="sh2" style={{ maxWidth: 640, margin: "0 auto 16px" }}>
            ¿Qué aparece cuando<br /><span>buscan tu nombre en Google?</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--white2)", fontWeight: 300, lineHeight: 1.75, maxWidth: 480, margin: "0 auto 40px" }}>
            Búscate ahora. Si lo que ves te perjudica, cuéntanoslo. El análisis es gratuito y la respuesta llega en 24 horas.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 16 }}>
            <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-primary" style={{ fontSize: 16, padding: "15px 36px" }}>
              Análisis gratuito →
            </Link>
            <a href="https://wa.me/34684115988" target="_blank" rel="noopener" className="btn-wa" style={{ fontSize: 15 }}>
              💬 WhatsApp
            </a>
          </div>
          <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "var(--white4)" }}>
            Sin coste · Respuesta en 24h · Confidencial
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="pfooter">
        <div className="pfooter-inner">
          <div className="pfooter-grid">
            <div>
              <div className="pfooter-logo">
                <span className="pfooter-stripe" />
                <span className="pfooter-name">Prestior</span>
              </div>
              <p className="pfooter-tag">Agencia de reputación y autoridad digital.<br />Empresa registrada en España.</p>
            </div>
            <div>
              <span className="pfooter-col-label">Servicios</span>
              {[["Protección","/proteccion-reputacion/"],["Autoridad","/autoridad-digital/"],["Blindaje","/monitorizacion-reputacion/"],["Precios","/precios/"]].map(([l,h])=>(
                <Link key={h} href={h} className="pfooter-link">{l}</Link>
              ))}
            </div>
            <div>
              <span className="pfooter-col-label">Empresa</span>
              {[["Casos de éxito","/casos-de-exito/"],["Blog","/blog/"],["Sobre nosotros","/sobre-nosotros/"],["Contacto","/contacto/"]].map(([l,h])=>(
                <Link key={h} href={h} className="pfooter-link">{l}</Link>
              ))}
            </div>
          </div>
          <div className="pfooter-divider" />
          <div className="pfooter-bottom">
            <p className="pfooter-copy">© {new Date().getFullYear()} Prestior · Empresa registrada en España · CIF disponible</p>
            <div className="pfooter-legal">
              {[["Aviso legal","/aviso-legal/"],["Privacidad","/privacidad/"],["Cookies","/cookies/"]].map(([l,h])=>(
                <Link key={h} href={h}>{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
