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

const C = {
  bg:   "#04070f",
  bg2:  "#070d1a",
  gold: "#c9a84c",
  t1:   "#eef0f4",
  t2:   "rgba(238,240,244,0.55)",
  t3:   "rgba(238,240,244,0.3)",
  t4:   "rgba(238,240,244,0.15)",
  bdr:  "rgba(255,255,255,0.07)",
};

const s = (x: object) => x as React.CSSProperties;

export default function Home() {
  return (
    <div style={s({ background: C.bg, color: C.t1, fontFamily: "'DM Sans', system-ui, sans-serif", minHeight: "100vh" })}>
      <Nav />

      {/* ════════════════════════════════════════════
          HERO — editorial, sin decoración
      ════════════════════════════════════════════ */}
      <section style={s({ borderBottom: `1px solid ${C.bdr}` })}>
        <div style={s({ maxWidth: 860, margin: "0 auto", padding: "64px 24px 72px" })}>

          {/* Línea dorada — firma de autoridad */}
          <div style={s({ width: 48, height: 3, background: C.gold, marginBottom: 40 })} />

          <h1 style={s({
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.6rem, 7vw, 5.2rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
            color: C.t1,
            marginBottom: 32,
            maxWidth: 780,
          })}>
            Cuando tu reputación<br />
            no admite errores.
          </h1>

          <p style={s({
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            lineHeight: 1.75,
            color: C.t2,
            maxWidth: 580,
            marginBottom: 48,
            fontWeight: 300,
          })}>
            Protegemos lo que has construido. Cuando la presión es alta y los riesgos
            mayores, directivos, marcas personales y empresas confían en nosotros.
          </p>

          <div style={s({ display: "flex", flexWrap: "wrap", gap: 12 })}>
            <Link href="/contacto/" style={s({
              display: "inline-flex", alignItems: "center", gap: 8,
              background: C.t1, color: C.bg,
              fontFamily: "'Syne', sans-serif", fontWeight: 700,
              fontSize: 15, padding: "14px 28px", borderRadius: 8,
              textDecoration: "none", letterSpacing: "0.01em",
            })}>
              Hablar con nosotros <ArrowRight size={16} />
            </Link>
            <Link href="/casos-de-exito/" style={s({
              display: "inline-flex", alignItems: "center",
              color: C.t3, fontFamily: "'DM Mono', monospace",
              fontSize: 13, padding: "14px 0", textDecoration: "none",
              borderBottom: `1px solid ${C.t4}`, letterSpacing: "0.04em",
            })}>
              Ver resultados →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CUÁNDO NOS LLAMAN — el dolor del cliente
      ════════════════════════════════════════════ */}
      <section style={s({ borderBottom: `1px solid ${C.bdr}` })}>
        <div style={s({ maxWidth: 860, margin: "0 auto", padding: "56px 24px" })}>
          <p style={s({ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.gold, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 40 })}>
            Cuándo nos llaman
          </p>
          <div style={s({ display: "grid", gridTemplateColumns: "1fr", gap: 0 })}>
            {[
              ["Un artículo falso aparece primero cuando buscan tu nombre en Google.", "Desindexación"],
              ["Alguien ha creado una cuenta haciéndose pasar por ti.", "Suplantación"],
              ["Necesitas que Google muestre quién eres realmente antes de un lanzamiento.", "Autoridad"],
              ["Reseñas coordinadas están hundiendo la valoración de tu negocio.", "Protección"],
              ["Un competidor está difamándote con contenido que no puedes dejar ahí.", "Difamación"],
              ["ChatGPT describe tu empresa de forma incorrecta o dañina.", "IA / GEO"],
            ].map(([text, tag], i) => (
              <div key={i} style={s({
                display: "flex", alignItems: "flex-start", justifyContent: "space-between",
                padding: "22px 0", gap: 20,
                borderBottom: i < 5 ? `1px solid ${C.bdr}` : "none",
              })}>
                <p style={s({ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", color: C.t2, lineHeight: 1.6, fontWeight: 300, flex: 1 })}>
                  {text}
                </p>
                <span style={s({
                  fontFamily: "'DM Mono', monospace", fontSize: 10,
                  color: C.gold, letterSpacing: "0.08em", textTransform: "uppercase",
                  flexShrink: 0, paddingTop: 4, textAlign: "right",
                  minWidth: 90,
                })}>
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          RESULTADOS — hechos, no promesas
      ════════════════════════════════════════════ */}
      <section style={s({ background: C.bg2, borderBottom: `1px solid ${C.bdr}` })}>
        <div style={s({ maxWidth: 860, margin: "0 auto", padding: "56px 24px" })}>
          <p style={s({ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.gold, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 40 })}>
            Resultados recientes
          </p>
          <div style={s({ display: "grid", gridTemplateColumns: "1fr", gap: 0 })}>
            {[
              { stat: "4 semanas", desc: "Artículo difamatorio desindexado de Google. CEO de empresa tech, Madrid." },
              { stat: "48 horas", desc: "Cuenta de suplantación eliminada en Instagram. Influencer, 180K seguidores." },
              { stat: "€80K", desc: "Generados en lanzamiento tras construir Knowledge Panel + Forbes editorial." },
              { stat: "7 de 7", desc: "Reseñas falsas coordinadas eliminadas de Google. Clínica dental, Valencia." },
            ].map(({ stat, desc }, i) => (
              <div key={i} style={s({
                display: "grid", gridTemplateColumns: "100px 1fr", gap: 24,
                alignItems: "flex-start", padding: "26px 0",
                borderBottom: i < 3 ? `1px solid ${C.bdr}` : "none",
              })}>
                <span style={s({
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: "clamp(1.5rem, 4vw, 2rem)", color: C.t1, lineHeight: 1,
                })}>
                  {stat}
                </span>
                <p style={s({ fontSize: 15, color: C.t2, lineHeight: 1.65, fontWeight: 300, paddingTop: 4 })}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <div style={s({ marginTop: 36 })}>
            <Link href="/casos-de-exito/" style={s({
              fontFamily: "'DM Mono', monospace", fontSize: 12, color: C.t3,
              textDecoration: "none", letterSpacing: "0.06em",
              borderBottom: `1px solid ${C.bdr}`, paddingBottom: 2,
            })}>
              Ver todos los casos →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICIOS — editorial, sin cards
      ════════════════════════════════════════════ */}
      <section style={s({ borderBottom: `1px solid ${C.bdr}` })}>
        <div style={s({ maxWidth: 860, margin: "0 auto", padding: "56px 24px" })}>
          <p style={s({ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.gold, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 40 })}>
            Cómo trabajamos
          </p>
          <div style={s({ display: "grid", gridTemplateColumns: "1fr", gap: 0 })}>
            {[
              {
                num: "01",
                title: "Protección",
                desc: "Eliminamos contenido dañino por las vías legales correctas. Difamación, derecho al olvido, suplantaciones, contenido íntimo filtrado, reseñas ilegítimas.",
                href: "/proteccion-reputacion/",
                desde: "Desde 690€",
              },
              {
                num: "02",
                title: "Autoridad",
                desc: "Construimos tu presencia online verificable. Knowledge Panel en Google, apariciones editoriales en medios, wikis de autoridad, marca personal, reputación en IA.",
                href: "/autoridad-digital/",
                desde: "Desde 390€",
              },
              {
                num: "03",
                title: "Blindaje",
                desc: "Monitorizamos tu nombre y marca de forma continua. Alertas tempranas, mantenimiento de presencia, reacción antes de que el daño sea irreversible.",
                href: "/monitorizacion-reputacion/",
                desde: "Desde 197€/mes",
              },
            ].map(({ num, title, desc, href, desde }, i) => (
              <div key={i} style={s({
                display: "grid", gridTemplateColumns: "44px 1fr", gap: 24,
                padding: "32px 0",
                borderBottom: i < 2 ? `1px solid ${C.bdr}` : "none",
                alignItems: "flex-start",
              })}>
                <span style={s({ fontFamily: "'DM Mono', monospace", fontSize: 12, color: C.t4, paddingTop: 4 })}>{num}</span>
                <div>
                  <div style={s({ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 12, flexWrap: "wrap" })}>
                    <h3 style={s({ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(1.2rem, 3vw, 1.5rem)", color: C.t1 })}>{title}</h3>
                    <span style={s({ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.t3 })}>{desde}</span>
                  </div>
                  <p style={s({ fontSize: 15, color: C.t2, lineHeight: 1.75, marginBottom: 16, fontWeight: 300 })}>{desc}</p>
                  <Link href={href} style={s({ fontFamily: "'DM Mono', monospace", fontSize: 12, color: C.t3, textDecoration: "none", letterSpacing: "0.06em", borderBottom: `1px solid ${C.bdr}`, paddingBottom: 2 })}>
                    Ver servicios →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PAQUETES — sin cards, editorial
      ════════════════════════════════════════════ */}
      <section style={s({ background: C.bg2, borderBottom: `1px solid ${C.bdr}` })}>
        <div style={s({ maxWidth: 860, margin: "0 auto", padding: "56px 24px" })}>
          <p style={s({ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.gold, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 40 })}>
            Inversión
          </p>
          <div style={s({ display: "grid", gridTemplateColumns: "1fr", gap: 0 })}>
            {[
              { name: "Presencia", price: "1.490€", desc: "Knowledge Panel personal, medios de entrada y optimización de nombre en Google. Para quien quiere empezar a controlar su narrativa digital." },
              { name: "Autoridad", price: "3.900€", desc: "El más contratado. Knowledge Panel, pack wikis de autoridad, Forbes Argentina editorial y posicionamiento en Google e IA. Autoridad documentada y duradera.", hot: true },
              { name: "Dominio", price: "9.900€", desc: "Todo lo anterior más pack de medios top internacionales — NYPost, BBC, Wired. Para quien necesita dominar su espacio a nivel global." },
            ].map(({ name, price, desc, hot }, i) => (
              <div key={i} style={s({
                display: "grid", gridTemplateColumns: "1fr auto", gap: 20,
                padding: "28px 0",
                borderBottom: i < 2 ? `1px solid ${C.bdr}` : "none",
                alignItems: "flex-start",
              })}>
                <div>
                  <div style={s({ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 })}>
                    <h3 style={s({ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: hot ? C.gold : C.t1 })}>{name}</h3>
                    {hot && <span style={s({ fontFamily: "'DM Mono', monospace", fontSize: 9, color: C.gold, background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 999, padding: "2px 8px", letterSpacing: "0.08em", textTransform: "uppercase" })}>Recomendado</span>}
                  </div>
                  <p style={s({ fontSize: 14, color: C.t2, lineHeight: 1.7, fontWeight: 300 })}>{desc}</p>
                </div>
                <div style={s({ textAlign: "right", flexShrink: 0 })}>
                  <p style={s({ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: C.t1 })}>{price}</p>
                  <Link href="/contacto/" style={s({ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.t4, textDecoration: "none", letterSpacing: "0.04em" })}>
                    Solicitar →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p style={s({ marginTop: 28, fontSize: 12, color: C.t4, fontFamily: "'DM Mono', monospace" })}>
            Presupuesto personalizado tras análisis confidencial · IVA no incluido
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          POR QUÉ NOSOTROS — conciso, factual
      ════════════════════════════════════════════ */}
      <section style={s({ borderBottom: `1px solid ${C.bdr}` })}>
        <div style={s({ maxWidth: 860, margin: "0 auto", padding: "56px 24px" })}>
          <p style={s({ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.gold, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 40 })}>
            Cómo operamos
          </p>
          <div style={s({ display: "grid", gridTemplateColumns: "1fr", gap: 0 })}>
            {[
              ["Contrato legal antes de empezar", "Firmamos antes de que pagues. Servicio exacto, plazos y garantías por escrito. Sin excepciones."],
              ["Confidencialidad absoluta", "Nunca revelamos clientes, casos ni resultados. Es una condición no negociable de nuestro servicio."],
              ["Sin garantías imposibles", "Te decimos exactamente qué es viable antes de cobrar. Forbes Argentina no es Forbes global. Un wiki de autoridad no es Wikipedia."],
              ["Empresa registrada en España", "CIF disponible bajo solicitud. Actividad 100% legal. Dos proveedores mínimo por servicio para garantizar continuidad."],
            ].map(([title, desc], i) => (
              <div key={i} style={s({ padding: "24px 0", borderBottom: i < 3 ? `1px solid ${C.bdr}` : "none" })}>
                <h4 style={s({ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 16, color: C.t1, marginBottom: 8 })}>{title}</h4>
                <p style={s({ fontSize: 14, color: C.t2, lineHeight: 1.7, fontWeight: 300 })}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA — una llamada confidencial
      ════════════════════════════════════════════ */}
      <section style={s({ borderBottom: `1px solid ${C.bdr}` })}>
        <div style={s({ maxWidth: 860, margin: "0 auto", padding: "72px 24px 80px" })}>
          <div style={s({ width: 48, height: 3, background: C.gold, marginBottom: 40 })} />
          <h2 style={s({
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 6vw, 3.8rem)",
            lineHeight: 1.06, letterSpacing: "-0.02em",
            color: C.t1, marginBottom: 28, maxWidth: 640,
          })}>
            ¿Lo que aparece cuando buscan tu nombre te ayuda o te perjudica?
          </h2>
          <p style={s({ fontSize: 17, color: C.t2, marginBottom: 40, maxWidth: 500, lineHeight: 1.75, fontWeight: 300 })}>
            Cuéntanoslo. Analizamos tu situación sin coste y te decimos exactamente
            qué mejorar. Sin compromiso.
          </p>
          <div style={s({ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" })}>
            <Link href="/contacto/" style={s({
              display: "inline-flex", alignItems: "center", gap: 8,
              background: C.t1, color: C.bg,
              fontFamily: "'Syne', sans-serif", fontWeight: 700,
              fontSize: 15, padding: "14px 28px", borderRadius: 8,
              textDecoration: "none",
            })}>
              Una conversación confidencial <ArrowRight size={16} />
            </Link>
            <p style={s({ fontSize: 12, color: C.t4, fontFamily: "'DM Mono', monospace" })}>
              Sin coste · Respuesta en 24h
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
