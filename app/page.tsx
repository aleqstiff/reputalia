import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Shield, TrendingUp, Eye, Check, Lock, ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Prestior — Gestión de Reputación y Autoridad Digital en España",
  description: "Controlamos lo que el mundo ve cuando busca tu nombre. Protección, autoridad y blindaje digital. Empresa española registrada. Confidencial.",
  alternates: { canonical: "https://prestior.es/" },
};

const G = {
  bg:    "#04070f",
  bg2:   "#070d1a",
  gold:  "#c9a84c",
  gold2: "#e8ca6e",
  card:  "rgba(255,255,255,0.04)",
  cardB: "rgba(255,255,255,0.07)",
  bdr:   "rgba(255,255,255,0.07)",
  bdrH:  "rgba(255,255,255,0.14)",
  t1:    "#eef0f4",
  t2:    "rgba(238,240,244,0.55)",
  t3:    "rgba(238,240,244,0.35)",
  t4:    "rgba(238,240,244,0.22)",
};

export default function Home() {
  return (
    <div style={{ background: G.bg, minHeight: "100vh", color: G.t1, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <Nav />

      {/* ══ HERO ══════════════════════════════════ */}
      <section style={{ background: G.bg, padding: "48px 20px 56px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: 999, padding: "5px 14px", marginBottom: 24,
            fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em",
            textTransform: "uppercase", color: G.gold2
          }}>
            Empresa registrada · Contrato previo · Confidencial
          </div>

          {/* H1 */}
          <h1 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 8vw, 3.8rem)",
            lineHeight: 1.08, marginBottom: 20, color: G.t1
          }}>
            Gestión de reputación digital.{" "}
            <span style={{
              background: `linear-gradient(135deg, ${G.gold}, ${G.gold2})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Sin humo.</span>
          </h1>

          <p style={{ fontSize: 17, lineHeight: 1.75, color: G.t2, marginBottom: 32, fontWeight: 300 }}>
            Eliminamos lo que te daña, construimos tu autoridad en Google y medios,
            y te blindamos ante amenazas futuras. Proceso 100% legal. Empresa española.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              background: `linear-gradient(135deg, ${G.gold}, ${G.gold2})`,
              color: G.bg, fontFamily: "'Syne', sans-serif", fontWeight: 700,
              fontSize: 15, padding: "14px 28px", borderRadius: 10, textDecoration: "none"
            }}>
              Auditoría gratuita <ArrowRight size={16} />
            </Link>
            <Link href="/precios/" style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "transparent", color: G.t2, fontFamily: "'Syne', sans-serif",
              fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 10,
              border: `1px solid ${G.bdr}`, textDecoration: "none"
            }}>
              Ver precios
            </Link>
          </div>

          {/* Trust pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["✓ Proceso legal", "🔒 Confidencial", "📋 Contrato previo", "🇪🇸 Empresa española"].map(t => (
              <span key={t} style={{
                fontSize: 12, padding: "6px 12px", borderRadius: 999,
                background: "rgba(255,255,255,0.04)", border: `1px solid ${G.bdr}`, color: G.t3
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div style={{
          maxWidth: 480, margin: "40px auto 0",
          background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(100,160,255,0.04))",
          border: "1px solid rgba(201,168,76,0.2)", borderRadius: 20,
          padding: "24px 20px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            <span style={{ fontSize: 12, color: G.t4, fontFamily: "'DM Mono', monospace" }}>Respuesta en 24h</span>
          </div>
          <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: G.t1, marginBottom: 4 }}>
            Auditoría gratuita
          </p>
          <p style={{ fontSize: 14, color: G.t3, marginBottom: 20, fontWeight: 300 }}>
            Analizamos qué aparece en Google, IA y medios. Sin coste.
          </p>
          {[
            { ph: "Nombre completo o marca", t: "text" },
            { ph: "Correo electrónico", t: "email" },
            { ph: "URL de tu web o perfil", t: "text" },
          ].map(({ ph, t }) => (
            <input key={ph} type={t} placeholder={ph} style={{
              display: "block", width: "100%", marginBottom: 10,
              padding: "12px 14px", background: "rgba(255,255,255,0.05)",
              border: `1px solid ${G.bdr}`, borderRadius: 10,
              color: G.t1, fontSize: 14, fontFamily: "inherit", outline: "none",
              boxSizing: "border-box"
            }} />
          ))}
          <a href="mailto:hola@prestior.es?subject=Auditoría gratuita" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            background: `linear-gradient(135deg, ${G.gold}, ${G.gold2})`,
            color: G.bg, fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: 14, padding: "13px", borderRadius: 10, textDecoration: "none",
            marginBottom: 12
          }}>
            Solicitar análisis gratuito →
          </a>
          <p style={{ textAlign: "center", fontSize: 11, color: G.t4, fontFamily: "'DM Mono', monospace" }}>
            🔒 Confidencial · Sin compromiso
          </p>
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════ */}
      <div style={{ background: G.bg2, borderTop: `1px solid ${G.bdr}`, borderBottom: `1px solid ${G.bdr}` }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
          {[["100+","Casos resueltos"],["48h","Primera respuesta"],["100%","Confidencialidad"],["3","Silos de servicio"]].map(([n,l]) => (
            <div key={l} style={{ textAlign: "center", padding: "16px 8px" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: G.t1 }}>{n}</div>
              <div style={{ fontSize: 11, color: G.t4, fontFamily: "'DM Mono', monospace", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ SERVICIOS ══════════════════════════════ */}
      <section style={{ background: G.bg, padding: "48px 20px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 11, color: G.gold, fontFamily: "'DM Mono', monospace", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>
            — Servicios —
          </p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.7rem,6vw,2.6rem)", textAlign: "center", marginBottom: 8, color: G.t1 }}>
            Tres fases.{" "}
            <span style={{ background: `linear-gradient(135deg,${G.gold},${G.gold2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Un resultado.
            </span>
          </h2>
          <p style={{ textAlign: "center", color: G.t3, fontSize: 15, marginBottom: 36, fontWeight: 300 }}>
            Proteger lo que daña, construir lo que impulsa, mantener lo que funciona.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Protección */}
            <div style={{ background: G.card, border: `1px solid ${G.bdr}`, borderRadius: 16, padding: "24px 20px" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(100,160,255,0.08)", border: "1px solid rgba(100,160,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Shield size={20} color="#60a5fa" />
              </div>
              <p style={{ fontSize: 11, color: G.t4, fontFamily: "'DM Mono', monospace", marginBottom: 4 }}>Desde 690€</p>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: G.t1, marginBottom: 10 }}>Protección</h3>
              <p style={{ fontSize: 14, color: G.t2, lineHeight: 1.7, marginBottom: 16, fontWeight: 300 }}>
                Difamación, derecho al olvido, contenido íntimo filtrado, cuentas falsas, reseñas ilegítimas.
              </p>
              <Link href="/proteccion-reputacion/" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: G.gold, textDecoration: "none" }}>
                Ver servicios <ChevronRight size={16} />
              </Link>
            </div>

            {/* Autoridad — destacada */}
            <div style={{ background: "linear-gradient(135deg,rgba(201,168,76,0.1),rgba(100,160,255,0.04))", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 16, padding: "24px 20px", position: "relative" }}>
              <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 999, padding: "3px 10px", fontSize: 10, color: G.gold2, fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>
                ★ Más vendido
              </div>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <TrendingUp size={20} color={G.gold} />
              </div>
              <p style={{ fontSize: 11, color: G.t4, fontFamily: "'DM Mono', monospace", marginBottom: 4 }}>Desde 390€</p>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: G.t1, marginBottom: 10 }}>Autoridad</h3>
              <p style={{ fontSize: 14, color: G.t2, lineHeight: 1.7, marginBottom: 16, fontWeight: 300 }}>
                Knowledge Panel, Forbes editorial, wikis de autoridad, marca personal, reputación en IA.
              </p>
              <Link href="/autoridad-digital/" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: G.gold, textDecoration: "none" }}>
                Ver servicios <ChevronRight size={16} />
              </Link>
            </div>

            {/* Blindaje */}
            <div style={{ background: G.card, border: `1px solid ${G.bdr}`, borderRadius: 16, padding: "24px 20px" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(40,200,180,0.08)", border: "1px solid rgba(40,200,180,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Eye size={20} color="#34d399" />
              </div>
              <p style={{ fontSize: 11, color: G.t4, fontFamily: "'DM Mono', monospace", marginBottom: 4 }}>Desde 197€/mes</p>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: G.t1, marginBottom: 10 }}>Blindaje</h3>
              <p style={{ fontSize: 14, color: G.t2, lineHeight: 1.7, marginBottom: 16, fontWeight: 300 }}>
                Monitorización continua, alertas tempranas y reacción antes de que el daño escale.
              </p>
              <Link href="/monitorizacion-reputacion/" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "#34d399", textDecoration: "none" }}>
                Ver servicio <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PAQUETES ══════════════════════════════ */}
      <section style={{ background: G.bg2, padding: "48px 20px", borderTop: `1px solid ${G.bdr}` }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 11, color: G.gold, fontFamily: "'DM Mono', monospace", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>— Inversión —</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.7rem,6vw,2.6rem)", textAlign: "center", color: G.t1, marginBottom: 8 }}>Tres opciones.</h2>
          <p style={{ textAlign: "center", fontSize: 15, color: G.t3, marginBottom: 36, fontWeight: 300 }}>El cerebro elige el del medio — donde está el mayor valor.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { n:"PRESENCIA", p:"1.490€", d:"Para empezar a controlar cómo apareces en Google.", items:["Knowledge Panel personal","1-2 medios de entrada","Optimización nombre en Google"], hot:false },
              { n:"AUTORIDAD", p:"3.900€", d:"Autoridad documentada, verificable y duradera.", items:["Knowledge Panel personal","Pack wikis de autoridad","Forbes Argentina editorial","Posicionamiento Google + IA","Informe mensual"], hot:true },
              { n:"DOMINIO", p:"9.900€", d:"Domina tu espacio a nivel internacional.", items:["Todo AUTORIDAD incluido","Pack medios top (NYPost, BBC, Wired)","Gestión continua 3 meses"], hot:false },
            ].map(({ n, p, d, items, hot }) => (
              <div key={n} style={{
                background: hot ? "linear-gradient(135deg,rgba(201,168,76,0.1),rgba(100,160,255,0.04))" : G.card,
                border: hot ? "1px solid rgba(201,168,76,0.3)" : `1px solid ${G.bdr}`,
                borderRadius: 16, padding: "24px 20px"
              }}>
                {hot && (
                  <div style={{ textAlign: "center", marginBottom: 16 }}>
                    <span style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 999, padding: "4px 12px", fontSize: 11, color: G.gold2, fontFamily: "'DM Mono', monospace" }}>★ Más contratado</span>
                  </div>
                )}
                <p style={{ fontSize: 11, color: G.t4, fontFamily: "'DM Mono', monospace", marginBottom: 4 }}>{n}</p>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 32, color: G.t1, marginBottom: 6 }}>{p}</p>
                <p style={{ fontSize: 14, color: G.t3, marginBottom: 20, fontWeight: 300 }}>{d}</p>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: 24 }}>
                  {items.map(i => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, fontSize: 14, color: G.t2 }}>
                      <Check size={15} color="#4ade80" style={{ flexShrink: 0, marginTop: 2 }} />{i}
                    </li>
                  ))}
                </ul>
                <Link href="/contacto/" style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: hot ? `linear-gradient(135deg,${G.gold},${G.gold2})` : "transparent",
                  color: hot ? G.bg : G.t2,
                  border: hot ? "none" : `1px solid ${G.bdr}`,
                  fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14,
                  padding: "13px", borderRadius: 10, textDecoration: "none"
                }}>
                  Solicitar información →
                </Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 12, color: G.t4, marginTop: 20, fontFamily: "'DM Mono', monospace" }}>
            Presupuesto personalizado · IVA no incluido ·{" "}
            <Link href="/precios/" style={{ color: G.t3, textDecoration: "underline" }}>Ver todos los precios →</Link>
          </p>
        </div>
      </section>

      {/* ══ CASOS ══════════════════════════════════ */}
      <section style={{ background: G.bg, padding: "48px 20px", borderTop: `1px solid ${G.bdr}` }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontSize: 11, color: G.gold, fontFamily: "'DM Mono', monospace", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>— Resultados —</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.7rem,6vw,2.4rem)", color: G.t1, marginBottom: 32 }}>Sin humo.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { cat:"Protección", t:"Artículo difamatorio en top 1 de Google 3 años", r:"Desindexado en 4 semanas" },
              { cat:"Autoridad", t:"Coach sin presencia — lanzamiento de infoproducto", r:"€80K en ventas" },
              { cat:"Protección", t:"Influencer con cuenta falsa 2 meses", r:"Cuenta eliminada en 48h" },
              { cat:"Protección", t:"7 reseñas falsas de ex-empleado", r:"Las 7 eliminadas en 3 semanas" },
            ].map((c, i) => (
              <div key={i} style={{ background: G.card, border: `1px solid ${G.bdr}`, borderRadius: 16, padding: "20px" }}>
                <span style={{ fontSize: 10, color: G.gold2, background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 999, padding: "3px 10px", fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em", display: "inline-block", marginBottom: 10 }}>{c.cat}</span>
                <p style={{ fontSize: 14, fontWeight: 600, color: G.t1, marginBottom: 10 }}>{c.t}</p>
                <span style={{ fontSize: 12, color: "#4ade80", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 999, padding: "4px 10px" }}>{c.r}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link href="/casos-de-exito/" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: G.t3, textDecoration: "none", border: `1px solid ${G.bdr}`, borderRadius: 10, padding: "10px 20px" }}>
              Ver todos los casos →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ DIFERENCIADORES ════════════════════════ */}
      <section style={{ background: G.bg2, padding: "48px 20px", borderTop: `1px solid ${G.bdr}` }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontSize: 11, color: G.gold, fontFamily: "'DM Mono', monospace", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>— Por qué elegirnos —</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem,5vw,2.2rem)", color: G.t1, marginBottom: 28 }}>Lo que nos separa del mercado del humo.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { e:"📋", t:"Contrato antes de empezar", d:"Firmamos antes de que pagues. Servicio, plazos y garantías por escrito." },
              { e:"🔒", t:"Confidencialidad absoluta", d:"Nunca revelamos clientes ni casos. Discreción total." },
              { e:"✅", t:"Honestidad sobre cada servicio", d:"Forbes Argentina no es Forbes global. Un wiki de autoridad no es Wikipedia. Siempre." },
              { e:"🏛️", t:"Empresa registrada en España", d:"CIF disponible bajo solicitud. Actividad 100% legal." },
            ].map(({ e, t, d }) => (
              <div key={t} style={{ background: G.card, border: `1px solid ${G.bdr}`, borderRadius: 14, padding: "16px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{e}</span>
                <div>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 15, color: G.t1, marginBottom: 4 }}>{t}</p>
                  <p style={{ fontSize: 13, color: G.t3, lineHeight: 1.65, fontWeight: 300 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════ */}
      <section style={{ background: G.bg, padding: "48px 20px", borderTop: `1px solid ${G.bdr}` }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 11, color: G.gold, fontFamily: "'DM Mono', monospace", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>— FAQ —</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem,5vw,2.2rem)", textAlign: "center", color: G.t1, marginBottom: 28 }}>Preguntas frecuentes</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { q:"¿Garantizáis resultados?", a:"No prometemos garantías imposibles. Garantizamos gestión profesional, proceso legal correcto y política de crédito si el servicio no se ejecuta." },
              { q:"¿Cuánto tarda la gestión?", a:"Desindexación: 2-6 semanas. Knowledge Panel: 4-8 semanas. Aparición editorial en medios: 4-12 semanas." },
              { q:"¿Confidencialidad absoluta?", a:"Sí. Nunca revelamos clientes, casos ni resultados. Especialmente para directivos y figuras públicas." },
              { q:"¿Qué diferencia Prestior de otras agencias?", a:"Contrato legal antes de pagar, honestidad sobre cada servicio, dos proveedores mínimo y empresa registrada en España." },
            ].map(({ q, a }) => (
              <details key={q} style={{ background: G.card, border: `1px solid ${G.bdr}`, borderRadius: 14, overflow: "hidden" }}>
                <summary style={{ padding: "16px 18px", cursor: "pointer", fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 14, color: G.t1, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {q} <span style={{ color: G.t4, fontSize: 12, flexShrink: 0, marginLeft: 12 }}>▼</span>
                </summary>
                <div style={{ padding: "0 18px 16px", fontSize: 14, color: G.t3, lineHeight: 1.7, fontWeight: 300, borderTop: `1px solid ${G.bdr}`, paddingTop: 12 }}>{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════ */}
      <section style={{ background: G.bg2, padding: "56px 20px", borderTop: `1px solid ${G.bdr}`, textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <p style={{ fontSize: 11, color: G.gold, fontFamily: "'DM Mono', monospace", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>— Empieza hoy —</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.7rem,6vw,2.8rem)", color: G.t1, marginBottom: 16, lineHeight: 1.1 }}>
            ¿Qué aparece cuando{" "}
            <span style={{ background: `linear-gradient(135deg,${G.gold},${G.gold2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              buscan tu nombre?
            </span>
          </h2>
          <p style={{ fontSize: 16, color: G.t3, marginBottom: 32, fontWeight: 300, lineHeight: 1.7 }}>
            Búscate en Google y en ChatGPT. ¿Lo que ves te ayuda o te perjudica?
          </p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            background: `linear-gradient(135deg,${G.gold},${G.gold2})`,
            color: G.bg, fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: 16, padding: "16px 36px", borderRadius: 12, textDecoration: "none"
          }}>
            Solicitar auditoría gratuita <ArrowRight size={18} />
          </Link>
          <p style={{ marginTop: 16, fontSize: 12, color: G.t4, fontFamily: "'DM Mono', monospace" }}>
            Sin coste · Respuesta en 24h · Confidencial
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
