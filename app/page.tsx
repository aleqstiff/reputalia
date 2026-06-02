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

const faqSchema = JSON.stringify({
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity:[
    {"@type":"Question","name":"¿Garantizáis resultados?","acceptedAnswer":{"@type":"Answer","text":"No prometemos garantías imposibles. Garantizamos gestión profesional, proceso legal correcto, máxima diligencia y política de crédito si el servicio no se ejecuta."}},
    {"@type":"Question","name":"¿Cuánto tarda?","acceptedAnswer":{"@type":"Answer","text":"Desindexación: 2-6 semanas. Knowledge Panel: 4-8 semanas. Aparición editorial en medios: 4-12 semanas."}},
    {"@type":"Question","name":"¿Trabajáis con confidencialidad?","acceptedAnswer":{"@type":"Answer","text":"Absoluta. Nunca revelamos clientes, casos ni resultados."}},
  ]
});

export default function Home() {
  return (
    <div style={{ background: "var(--bg)" }} className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <Nav />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "var(--bg)" }}>
        {/* Aurora solo en desktop */}
        <div className="aurora-bg hidden md:block" />
        <div className="absolute inset-0 dot-grid opacity-20 hidden md:block" />

        <div className="relative z-10 px-5 pt-12 pb-14 md:pt-20 md:pb-24 max-w-6xl mx-auto">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="badge mb-5">
              Empresa registrada · Contrato previo · Confidencial
            </div>

            {/* H1 */}
            <h1 className="font-display font-black leading-tight tracking-tight text-white mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}>
              Gestión de reputación digital.{" "}
              <span className="text-gradient">Sin humo.</span>
            </h1>

            <p className="text-base md:text-lg mb-8 leading-relaxed"
              style={{ color: "rgba(238,240,244,0.5)", fontWeight: 300, maxWidth: "520px" }}>
              Eliminamos lo que te daña, construimos tu autoridad en Google y medios,
              y te blindamos ante amenazas futuras. Proceso 100% legal. Empresa española.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-primary justify-center sm:justify-start">
                Auditoría gratuita <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/precios/" className="btn-outline justify-center sm:justify-start">
                Ver precios
              </Link>
            </div>

            {/* Trust pills — wrap en mobile */}
            <div className="flex flex-wrap gap-2">
              {["✓ Proceso legal","🔒 Confidencial","📋 Contrato previo","🇪🇸 Empresa española"].map(t => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(238,240,244,0.45)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Form — debajo del copy en mobile, al lado en desktop */}
          <div className="mt-10 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 md:w-[380px] lg:right-5">
            <div className="card-featured p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-ring" />
                <span className="text-xs font-mono-dm" style={{ color: "rgba(238,240,244,0.3)" }}>
                  Respuesta en 24h
                </span>
              </div>
              <h2 className="font-display font-bold text-white text-lg mb-1">Auditoría gratuita</h2>
              <p className="text-sm mb-5" style={{ color: "rgba(238,240,244,0.4)", fontWeight: 300 }}>
                Analizamos qué aparece en Google, IA y medios. Sin coste.
              </p>
              <div className="space-y-2.5 mb-3">
                <input className="input-dark" type="text" placeholder="Nombre completo o marca" />
                <input className="input-dark" type="email" placeholder="Correo electrónico" />
                <input className="input-dark" type="text" placeholder="URL de tu web o perfil" />
                <a href="mailto:hola@prestior.es?subject=Auditoría gratuita"
                  className="btn-primary w-full justify-center text-sm">
                  Solicitar análisis gratuito →
                </a>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono-dm"
                style={{ color: "rgba(238,240,244,0.2)" }}>
                <Lock className="w-3 h-3" /> Confidencial · Sin compromiso
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "var(--bg-2)" }}>
        <div className="max-w-5xl mx-auto px-5 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n:"100+", l:"Casos resueltos" },
            { n:"48h",  l:"Primera respuesta" },
            { n:"100%", l:"Confidencialidad" },
            { n:"3",    l:"Silos de servicio" },
          ].map(({ n, l }) => (
            <div key={l} className="text-center py-3">
              <div className="stat-num">{n}</div>
              <div className="text-xs mt-1 font-mono-dm" style={{ color: "rgba(238,240,244,0.3)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <section className="py-12 md:py-20 px-5" style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-eyebrow justify-center">Servicios</div>
            <h2 className="font-display font-black text-white mt-3 mb-2"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Tres fases. <span className="text-gradient">Un resultado.</span>
            </h2>
            <p className="text-sm md:text-base" style={{ color: "rgba(238,240,244,0.4)", fontWeight: 300 }}>
              Proteger lo que daña, construir lo que impulsa, mantener lo que funciona.
            </p>
          </div>

          {/* Cards — 1 col mobile, 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Protección */}
            <div className="card p-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(100,160,255,0.08)", border: "1px solid rgba(100,160,255,0.15)" }}>
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <p className="font-mono-dm text-xs mb-1" style={{ color: "rgba(238,240,244,0.3)" }}>Desde 690€</p>
              <h3 className="font-display font-bold text-white text-lg mb-2">Protección</h3>
              <p className="text-sm mb-4" style={{ color: "rgba(238,240,244,0.45)", fontWeight: 300, lineHeight: 1.7 }}>
                Difamación, derecho al olvido, contenido íntimo filtrado, cuentas falsas, reseñas ilegítimas.
              </p>
              <Link href="/proteccion-reputacion/"
                className="flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "var(--gold)" }}>
                Ver servicios <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Autoridad — destacada */}
            <div className="card-featured p-6 relative overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="badge badge-sm">★ Más vendido</span>
              </div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <TrendingUp className="w-5 h-5" style={{ color: "var(--gold)" }} />
              </div>
              <p className="font-mono-dm text-xs mb-1" style={{ color: "rgba(238,240,244,0.3)" }}>Desde 390€</p>
              <h3 className="font-display font-bold text-white text-lg mb-2">Autoridad</h3>
              <p className="text-sm mb-4" style={{ color: "rgba(238,240,244,0.45)", fontWeight: 300, lineHeight: 1.7 }}>
                Knowledge Panel, Forbes editorial, wikis de autoridad, marca personal, reputación en IA.
              </p>
              <Link href="/autoridad-digital/"
                className="flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "var(--gold)" }}>
                Ver servicios <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Blindaje */}
            <div className="card p-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(40,200,180,0.08)", border: "1px solid rgba(40,200,180,0.15)" }}>
                <Eye className="w-5 h-5" style={{ color: "#56dcc8" }} />
              </div>
              <p className="font-mono-dm text-xs mb-1" style={{ color: "rgba(238,240,244,0.3)" }}>Desde 197€/mes</p>
              <h3 className="font-display font-bold text-white text-lg mb-2">Blindaje</h3>
              <p className="text-sm mb-4" style={{ color: "rgba(238,240,244,0.45)", fontWeight: 300, lineHeight: 1.7 }}>
                Monitorización continua, alertas tempranas y reacción antes de que el daño escale.
              </p>
              <Link href="/monitorizacion-reputacion/"
                className="flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "#56dcc8" }}>
                Ver servicio <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAQUETES ── */}
      <section className="py-12 md:py-20 px-5 border-t" style={{ background: "var(--bg-2)", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-eyebrow justify-center">Inversión</div>
            <h2 className="font-display font-black text-white mt-3 mb-2"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Tres opciones.
            </h2>
            <p className="text-sm" style={{ color: "rgba(238,240,244,0.4)", fontWeight: 300 }}>
              El cerebro elige el del medio — donde está el mayor valor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { n:"PRESENCIA", p:"1.490€", d:"Para empezar a controlar cómo apareces en Google.", items:["Knowledge Panel personal","1-2 medios de entrada","Optimización nombre en Google"], hot:false },
              { n:"AUTORIDAD", p:"3.900€", d:"Autoridad documentada, verificable y duradera.", items:["Knowledge Panel personal","Pack wikis de autoridad","Forbes Argentina editorial","Posicionamiento Google + IA","Informe mensual"], hot:true },
              { n:"DOMINIO",   p:"9.900€", d:"Domina tu espacio a nivel internacional.", items:["Todo AUTORIDAD","Pack medios top (NYPost, BBC, Wired)","Gestión continua 3 meses"], hot:false },
            ].map(({ n, p, d, items, hot }) => (
              <div key={n} className={`${hot ? "card-featured" : "card"} p-6`}>
                {hot && (
                  <div className="text-center mb-4">
                    <span className="badge">★ Más contratado</span>
                  </div>
                )}
                <p className="font-mono-dm text-xs mb-1" style={{ color: "rgba(238,240,244,0.25)" }}>{n}</p>
                <div className="font-display font-black text-white text-3xl mb-1">{p}</div>
                <p className="text-sm mb-5" style={{ color: "rgba(238,240,244,0.4)", fontWeight: 300 }}>{d}</p>
                <ul className="space-y-2 mb-6">
                  {items.map(i => (
                    <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(238,240,244,0.6)" }}>
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />{i}
                    </li>
                  ))}
                </ul>
                <Link href="/contacto/" className={`${hot ? "btn-primary" : "btn-outline"} w-full justify-center text-sm`}>
                  Solicitar información →
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-xs mt-5 font-mono-dm" style={{ color: "rgba(238,240,244,0.2)" }}>
            Presupuesto personalizado tras análisis gratuito · IVA no incluido ·{" "}
            <Link href="/precios/" className="underline" style={{ color: "rgba(238,240,244,0.35)" }}>Ver todos los precios →</Link>
          </p>
        </div>
      </section>

      {/* ── GEO / IA ── */}
      <section className="py-12 md:py-20 px-5 border-t" style={{ background: "var(--bg)", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="badge-new badge mb-4">Nuevo 2026</span>
              <h2 className="font-display font-black text-white mt-3 mb-4"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
                ¿Qué dice ChatGPT sobre ti?
              </h2>
              <p className="text-sm md:text-base mb-6" style={{ color: "rgba(238,240,244,0.45)", fontWeight: 300, lineHeight: 1.8 }}>
                Millones de personas usan ChatGPT, Perplexity y Gemini para investigar personas y marcas antes de tomar decisiones. Lo que esas IAs dicen puede ser incorrecto o dañino si no se gestiona.
              </p>
              <Link href="/autoridad-digital/reputacion-ia-geo/" className="btn-primary inline-flex text-sm">
                Ver servicio GEO <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Terminal */}
            <div className="card overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-2 font-mono-dm text-xs" style={{ color: "rgba(238,240,244,0.2)" }}>AI Search</span>
              </div>
              <div className="p-4 space-y-3">
                {[
                  { ai:"ChatGPT", sin:"Información desactualizada", con:"Narrativa correcta" },
                  { ai:"Perplexity", sin:"Fuentes negativas", con:"Fuentes positivas" },
                  { ai:"Gemini", sin:"Resultado aleatorio", con:"Posicionamiento estratégico" },
                ].map(({ ai, sin, con }) => (
                  <div key={ai} className="rounded-lg overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    <div className="px-3 py-2 font-mono-dm text-xs border-b" style={{ borderColor: "rgba(255,255,255,0.06)", color: "var(--gold)", background: "rgba(201,168,76,0.04)" }}>
                      {ai}
                    </div>
                    <div className="grid grid-cols-2 text-xs">
                      <div className="px-3 py-2 border-r" style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgba(239,68,68,0.7)", background: "rgba(239,68,68,0.04)" }}>✗ {sin}</div>
                      <div className="px-3 py-2" style={{ color: "rgba(52,211,153,0.8)", background: "rgba(52,211,153,0.04)" }}>✓ {con}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASOS ── */}
      <section className="py-12 md:py-20 px-5 border-t" style={{ background: "var(--bg-2)", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="section-eyebrow">Resultados</div>
              <h2 className="font-display font-black text-white mt-2"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>Sin humo.</h2>
            </div>
            <Link href="/casos-de-exito/" className="btn-outline text-sm hidden md:inline-flex">Ver todos →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { cat:"Protección", t:"Artículo difamatorio en top 1 de Google desde hace 3 años", r:"Desindexado en 4 semanas", d:"Un competidor publicó un artículo falso que aparecía primero cuando buscaban el nombre del CEO." },
              { cat:"Autoridad", t:"Coach sin presencia — lanzamiento de infoproducto", r:"€80K en ventas", d:"Knowledge Panel + Forbes editorial antes del lanzamiento." },
              { cat:"Protección", t:"Influencer con cuenta falsa activa 2 meses", r:"Cuenta eliminada en 48h", d:"Una cuenta con sus fotos enviaba DMs fraudulentos a su audiencia." },
              { cat:"Protección", t:"7 reseñas falsas de ex-empleado", r:"Las 7 eliminadas en 3 semanas", d:"Clínica dental atacada por un ex-empleado. Nunca había sido paciente." },
            ].map((c, i) => (
              <div key={i} className="card p-5">
                <span className="badge badge-sm mb-3">{c.cat}</span>
                <h3 className="font-semibold text-white text-sm mb-2">{c.t}</h3>
                <p className="text-xs mb-3" style={{ color: "rgba(238,240,244,0.4)", lineHeight: 1.6 }}>{c.d}</p>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                  {c.r}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 md:hidden">
            <Link href="/casos-de-exito/" className="btn-outline text-sm inline-flex">Ver todos los casos →</Link>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIADORES ── */}
      <section className="py-12 md:py-20 px-5 border-t" style={{ background: "var(--bg)", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="section-eyebrow justify-center">Por qué elegirnos</div>
            <h2 className="font-display font-black text-white mt-3"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
              Lo que nos separa del mercado del humo.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { e:"📋", t:"Contrato antes de empezar", d:"Firmamos antes de que pagues. Servicio, plazos y garantías por escrito." },
              { e:"🔒", t:"Confidencialidad absoluta", d:"Nunca revelamos clientes ni casos. Discreción total." },
              { e:"✅", t:"Honestidad sobre cada servicio", d:"Forbes Argentina no es Forbes global. Un wiki de autoridad no es Wikipedia. Siempre." },
              { e:"🏛️", t:"Empresa registrada en España", d:"CIF disponible bajo solicitud. Actividad 100% legal." },
            ].map(({ e, t, d }) => (
              <div key={t} className="card p-4 flex gap-4">
                <span className="text-xl flex-shrink-0">{e}</span>
                <div>
                  <p className="font-display font-semibold text-white text-sm mb-1">{t}</p>
                  <p className="text-xs" style={{ color: "rgba(238,240,244,0.4)", lineHeight: 1.6 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 md:py-20 px-5 border-t" style={{ background: "var(--bg-2)", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="section-eyebrow justify-center">FAQ</div>
            <h2 className="font-display font-black text-white mt-3" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}>
              Preguntas frecuentes
            </h2>
          </div>
          <div className="space-y-2">
            {[
              { q:"¿Garantizáis resultados?", a:"No prometemos garantías imposibles. Garantizamos gestión profesional, proceso legal correcto, máxima diligencia y política de crédito si el servicio no se ejecuta." },
              { q:"¿Cuánto tarda la gestión?", a:"Desindexación: 2-6 semanas. Knowledge Panel: 4-8 semanas. Aparición editorial en medios: 4-12 semanas." },
              { q:"¿Confidencialidad absoluta?", a:"Sí. Nunca revelamos clientes, casos ni resultados. Especialmente para directivos y figuras públicas." },
              { q:"¿Qué diferencia Prestior de otras agencias?", a:"Contrato legal antes de pagar, honestidad sobre cada servicio, dos proveedores mínimo por servicio y empresa registrada en España." },
            ].map(({ q, a }) => (
              <details key={q} className="card group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none font-display font-semibold text-white text-sm">
                  {q}
                  <span className="text-xs ml-4 flex-shrink-0 group-open:rotate-180 transition-transform"
                    style={{ color: "rgba(238,240,244,0.3)" }}>▼</span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed border-t"
                  style={{ color: "rgba(238,240,244,0.45)", borderColor: "rgba(255,255,255,0.06)", fontWeight: 300 }}>
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-14 md:py-24 px-5 relative overflow-hidden border-t"
        style={{ background: "var(--bg)", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="aurora-bg" style={{ opacity: 0.4 }} />
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <div className="section-eyebrow justify-center mb-4">Empieza hoy</div>
          <h2 className="font-display font-black text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
            ¿Qué aparece cuando<br />
            <span className="text-gradient">buscan tu nombre?</span>
          </h2>
          <p className="text-sm md:text-base mb-8" style={{ color: "rgba(238,240,244,0.4)", fontWeight: 300 }}>
            Búscate en Google y en ChatGPT. ¿Lo que ves te ayuda o te perjudica?
          </p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="btn-primary text-base px-8 py-4 inline-flex mx-auto">
            Solicitar auditoría gratuita <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-xs font-mono-dm" style={{ color: "rgba(238,240,244,0.2)" }}>
            Sin coste · Respuesta en 24h · Confidencial
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
