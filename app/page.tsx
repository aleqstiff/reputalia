import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Shield, TrendingUp, Eye, Check, Lock, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Prestior — Agencia de Reputación y Autoridad Digital en España",
  description: "Controlamos lo que el mundo ve cuando busca tu nombre. Protección de reputación, construcción de autoridad digital y blindaje continuo. Empresa española. Confidencial.",
  alternates: { canonical: "https://prestior.es/" },
};

const faqSchema = JSON.stringify({
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity:[
    {q:"¿Garantizáis resultados?",a:"No prometemos garantías imposibles. Garantizamos gestión profesional, proceso legal correcto, máxima diligencia y política de crédito si el servicio no se ejecuta."},
    {q:"¿Cuánto tarda?",a:"Desindexación: 2-6 semanas. Knowledge Panel: 4-8 semanas. Aparición editorial en medios: 4-12 semanas."},
    {q:"¿Trabajáis con confidencialidad?",a:"Absoluta. Nunca revelamos clientes, casos ni resultados. Especialmente para directivos y figuras públicas."},
    {q:"¿Por qué Prestior y no otra agencia?",a:"Contrato legal antes de empezar, honestidad sobre qué es Forbes Argentina vs Forbes global, dos proveedores por servicio, y empresa registrada en España. Lo que nos separa del humo."},
  ].map(({q,a})=>({  "@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))
});

const MARCAS = ["Forbes Argentina","BBC","NYPost","Wired","LinkedIn","Trustpilot","Google","El País","Expansión","People","PageSix","FoundersWiki"];

const STATS = [
  { n:"100+", label:"Casos resueltos" },
  { n:"48h", label:"Primera respuesta" },
  { n:"100%", label:"Confidencialidad" },
  { n:"3 silos", label:"Metodología probada" },
];

const TESTIMONIOS = [
  { t:"Tenía un artículo difamatorio en el primer resultado de Google desde hace 3 años. Desindexado en 4 semanas.", a:"CEO empresa tech, Madrid", tag:"Desindexación", r:5 },
  { t:"Knowledge Panel activo, Forbes editorial y 2 medios antes del lanzamiento. El curso generó €80K.", a:"Coach y formadora online", tag:"Pack AUTORIDAD", r:5 },
  { t:"7 reseñas falsas de un ex-empleado. Las 7 eliminadas antes de un mes.", a:"Dr. C.V. — Clínica dental, Valencia", tag:"Reseñas eliminadas", r:5 },
  { t:"Cuenta falsa con mis fotos enviando DMs fraudulentos a mi audiencia. Retirada en 48 horas.", a:"Influencer, 180K seguidores", tag:"Cuenta falsa", r:5 },
];

const FAQ = [
  { q:"¿Garantizáis resultados?", a:"No prometemos garantías imposibles. Garantizamos gestión profesional, proceso legal correcto, máxima diligencia y política de crédito si el servicio no se ejecuta correctamente." },
  { q:"¿Cuánto tarda la gestión?", a:"Desindexación: 2-6 semanas. Knowledge Panel: 4-8 semanas. Aparición editorial en medios: 4-12 semanas. Los plazos exactos van en el contrato previo." },
  { q:"¿Confidencialidad absoluta?", a:"Sí. Nunca revelamos clientes, casos ni resultados. Especialmente importante para directivos, figuras públicas y marcas sensibles." },
  { q:"¿Qué diferencia Prestior de otras agencias?", a:"Contrato legal antes de pagar, honestidad sobre cada servicio (Forbes Argentina no es Forbes global), dos proveedores por servicio mínimo, y empresa registrada en España con CIF disponible." },
];

export default function Home() {
  return (
    <div style={{ background: "var(--bg)" }} className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <Nav />

      {/* ════════════════════════════════════════
          HERO — Aurora + dot grid + grain
      ════════════════════════════════════════ */}
      <section className="relative flex items-center py-16 md:py-24 px-5 overflow-hidden grain">
        {/* Aurora background */}
        <div className="aurora-bg" />
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40" />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-14 items-center">
          {/* LEFT — oversized editorial type */}
          <div>
            <div className="badge mb-7">
              Empresa registrada · Contrato previo · Confidencial
            </div>

            {/* H1 — oversized Syne, SEO keyword en primeras palabras */}
            <h1 className="font-display font-black leading-[1.02] tracking-tight mb-7"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#eef0f4" }}>
              Gestión de<br />
              reputación digital<br />
              <span className="text-gradient">para personas<br />que no pueden<br />permitirse perderla.</span>
            </h1>

            <p className="text-lg mb-10 max-w-lg leading-relaxed" style={{ color: "rgba(238,240,244,0.5)", fontWeight: 300 }}>
              Eliminamos lo que te daña, construimos tu autoridad en Google y medios,
              y te blindamos ante amenazas futuras. Proceso 100% legal. Confidencial.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-primary">
                Auditoría gratuita <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/casos-de-exito/" className="btn-outline">
                Ver resultados reales
              </Link>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon:"✓", t:"Proceso 100% legal" },
                { icon:"🔒", t:"Confidencial" },
                { icon:"📋", t:"Contrato antes de empezar" },
                { icon:"🇪🇸", t:"Empresa española" },
              ].map(({icon,t}) => (
                <span key={t} className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(238,240,244,0.5)" }}>
                  <span>{icon}</span>{t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — glass form card con grain */}
          <div className="relative card-featured p-5 md:p-7 grain mt-4 md:mt-0">
            {/* Glow behind card */}
            <div className="absolute inset-0 rounded-[20px] opacity-20 blur-2xl"
              style={{ background: "linear-gradient(135deg,rgba(201,168,76,0.4),rgba(100,160,255,0.2))" }} />
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-ring" />
                <span className="text-xs" style={{ color: "rgba(238,240,244,0.35)", fontFamily:"DM Mono, monospace" }}>
                  Disponible · respuesta en 24h
                </span>
              </div>
              <h2 className="font-display font-bold text-xl text-white mb-1">Auditoría de reputación</h2>
              <p className="text-sm mb-6" style={{ color: "rgba(238,240,244,0.4)" }}>
                Analizamos qué aparece en Google, IA y medios. Sin coste. Sin compromiso.
              </p>
              <div className="space-y-3 mb-4">
                <input className="input-dark" type="text" placeholder="Nombre completo o marca" />
                <input className="input-dark" type="email" placeholder="Correo electrónico" />
                <input className="input-dark" type="text" placeholder="URL de tu web o perfil" />
                <a href="mailto:hola@prestior.es?subject=Auditoría gratuita"
                  className="btn-primary w-full justify-center">
                  Solicitar análisis gratuito <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs" style={{ color: "rgba(238,240,244,0.25)", fontFamily:"DM Mono, monospace" }}>
                <Lock className="w-3 h-3" /> Confidencial · Sin compromiso · Empresa registrada
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }} />
      </section>

      {/* ════════════════════════════════════════
          MARQUEE — medios y plataformas
      ════════════════════════════════════════ */}
      <div className="relative py-6 overflow-hidden border-y" style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.015)" }}>
        <p className="text-center mb-4 font-mono-dm text-xs tracking-widest uppercase" style={{ color: "rgba(238,240,244,0.18)" }}>
          Gestionamos presencia en
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...MARCAS, ...MARCAS].map((m,i) => (
              <span key={i} className="font-display font-semibold text-sm uppercase tracking-wider whitespace-nowrap"
                style={{ color: "rgba(238,240,244,0.18)" }}>{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          STATS STRIP
      ════════════════════════════════════════ */}
      <section className="py-8 md:py-14 px-5" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map(({ n, label }) => (
            <div key={label} className="card p-6 text-center hover:-translate-y-1 transition-transform">
              <div className="stat-num mb-1">{n}</div>
              <div className="text-xs" style={{ color: "rgba(238,240,244,0.35)", fontFamily:"DM Mono, monospace" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          BENTO GRID — servicios (asimétrico)
      ════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-5 relative overflow-hidden" style={{ background: "var(--bg)" }}>
        <div className="aurora-bg" style={{ opacity: 0.3 }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-eyebrow justify-center">Servicios</div>
            <h2 className="font-display font-black text-white mt-2" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
              Tres fases.<br />
              <span className="text-gradient">Un resultado.</span>
            </h2>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: "rgba(238,240,244,0.4)", fontWeight: 300 }}>
              Tu reputación digital necesita los tres: proteger lo que daña, construir lo que impulsa, blindar lo que funciona.
            </p>
          </div>

          {/* TRUE BENTO — 12 col grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">

            {/* ── CELDA GRANDE: Autoridad (7 cols) ── */}
            <div className="md:col-span-7 card-featured relative overflow-hidden p-8 grain">
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, rgba(201,168,76,0.5) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <TrendingUp className="w-5 h-5" style={{ color: "var(--gold)" }} />
                  </div>
                  <span className="badge">★ Más contratado</span>
                </div>
                <p className="font-mono-dm text-xs mb-1" style={{ color: "rgba(238,240,244,0.3)" }}>Desde 390€</p>
                <h3 className="font-display font-black text-white text-2xl mb-1">Autoridad digital</h3>
                <p className="text-sm mb-6" style={{ color: "rgba(238,240,244,0.45)", fontWeight: 300 }}>
                  Construye presencia que genera confianza antes de que hablen contigo
                </p>
                <ul className="space-y-2.5 mb-7">
                  {[
                    "Knowledge Panel en Google",
                    "Forbes Argentina — artículo editorial",
                    "Pack wikis de autoridad (FoundersWiki, WikiAlpha...)",
                    "Marca personal en buscadores",
                    "Reputación en IA — ChatGPT / Perplexity / Gemini",
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(238,240,244,0.6)" }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/autoridad-digital/" className="btn-primary inline-flex">
                  Ver servicios de autoridad <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* ── COLUMNA DERECHA ── */}
            <div className="md:col-span-5 flex flex-col gap-4">

              {/* Protección */}
              <div className="card relative overflow-hidden p-6 flex-1">
                <div className="absolute top-0 right-0 w-40 h-40 opacity-10 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(100,160,255,0.8) 0%, transparent 70%)", transform: "translate(20%,-20%)" }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(100,160,255,0.08)", border: "1px solid rgba(100,160,255,0.15)" }}>
                      <Shield className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-mono-dm text-xs" style={{ color: "rgba(238,240,244,0.3)" }}>Desde 690€</p>
                      <h3 className="font-display font-bold text-white">Protección</h3>
                    </div>
                  </div>
                  <p className="text-sm mb-4" style={{ color: "rgba(238,240,244,0.4)", fontWeight: 300 }}>
                    Eliminamos contenido dañino por las vías legales correctas
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {["Difamación y calumnias","Derecho al olvido","Contenido íntimo filtrado","Reseñas falsas ilegítimas"].map(p => (
                      <li key={p} className="flex items-center gap-2 text-xs" style={{ color: "rgba(238,240,244,0.45)" }}>
                        <ArrowRight className="w-3 h-3 opacity-40 flex-shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                  <Link href="/proteccion-reputacion/" className="btn-outline inline-flex text-xs py-2 px-4">
                    Ver protección <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Blindaje + GEO */}
              <div className="grid grid-cols-2 gap-3">
                <div className="card p-5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "rgba(40,200,180,0.08)", border: "1px solid rgba(40,200,180,0.15)" }}>
                    <Eye className="w-4 h-4" style={{ color: "#56dcc8" }} />
                  </div>
                  <p className="font-mono-dm text-xs mb-1" style={{ color: "rgba(238,240,244,0.3)" }}>197€/mes</p>
                  <h3 className="font-display font-bold text-white text-sm mb-1">Blindaje</h3>
                  <p className="text-xs mb-3" style={{ color: "rgba(238,240,244,0.35)" }}>Monitorización continua y alertas</p>
                  <Link href="/monitorizacion-reputacion/" className="text-xs" style={{ color: "var(--gold)" }}>
                    Ver servicio →
                  </Link>
                </div>
                <div className="card p-5" style={{ background: "rgba(40,200,180,0.03)", borderColor: "rgba(40,200,180,0.1)" }}>
                  <span className="badge-new badge text-xs mb-3">2026</span>
                  <h3 className="font-display font-bold text-white text-sm mb-1">IA / GEO</h3>
                  <p className="text-xs mb-3" style={{ color: "rgba(238,240,244,0.35)" }}>¿Qué dice ChatGPT sobre ti?</p>
                  <Link href="/autoridad-digital/reputacion-ia-geo/" className="text-xs" style={{ color: "#56dcc8" }}>
                    Ver servicio →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROBLEMA / PAIN — copy editorial
      ════════════════════════════════════════ */}
      <section className="py-20 px-5 border-y relative overflow-hidden"
        style={{ background: "var(--bg-2)", borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="section-eyebrow justify-center">El problema</div>
          <h2 className="font-display font-black mt-4 mb-6"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "rgba(238,240,244,0.9)" }}>
            Tu reputación digital se gestiona sola.{" "}
            <span style={{ color: "rgba(238,240,244,0.25)" }}>Mal.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "rgba(238,240,244,0.4)", fontWeight: 300 }}>
            Cada día sin gestión activa, una reseña falsa baja tu nota en Google, un artículo viejo ocupa el primer resultado, 
            y en 2026 también importa lo que dice ChatGPT y Perplexity cuando alguien pregunta por ti.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              { emoji:"🔍", title:"Google muestra el pasado", body:"Artículos viejos, reseñas falsas y contenido dañino pueden seguir ahí durante años si nadie los gestiona." },
              { emoji:"🤖", title:"La IA construye narrativas", body:"ChatGPT y Perplexity generan respuestas sobre ti usando fuentes que pueden ser incorrectas o dañinas." },
              { emoji:"💸", title:"El daño es económico real", body:"Un cliente que busca tu nombre y encuentra algo negativo, no compra. No llama. No contrata." },
            ].map(({ emoji, title, body }) => (
              <div key={title} className="card p-5">
                <span className="text-2xl block mb-3">{emoji}</span>
                <h4 className="font-display font-bold text-white text-sm mb-2">{title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(238,240,244,0.4)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          GEO / IA SECTION — terminal visual
      ════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-5 relative overflow-hidden" style={{ background: "var(--bg)" }}>
        <div className="absolute inset-0 opacity-20" style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(40,200,180,0.12) 0%, transparent 70%)"
        }} />
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="badge-new badge mb-5">Nuevo en 2026</span>
            <h2 className="font-display font-black text-white mt-4 mb-5"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              ¿Qué dice ChatGPT<br />
              <span className="text-gradient">sobre ti?</span>
            </h2>
            <p className="mb-6" style={{ color: "rgba(238,240,244,0.45)", fontWeight: 300, lineHeight: 1.8 }}>
              Millones de personas usan ChatGPT, Perplexity y Gemini para investigar
              personas y empresas antes de tomar decisiones. Lo que esas IAs dicen puede
              ser incorrecto, desactualizado o directamente dañino.
            </p>
            <p className="mb-8" style={{ color: "rgba(238,240,244,0.45)", fontWeight: 300, lineHeight: 1.8 }}>
              GEO (Generative Engine Optimization) es la disciplina de controlar
              esa narrativa. La ventana de ventaja se cierra en 12-18 meses.
            </p>
            <Link href="/autoridad-digital/reputacion-ia-geo/" className="btn-primary inline-flex">
              Ver servicio GEO <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Terminal */}
          <div className="card p-0 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-2 font-mono-dm text-xs" style={{ color: "rgba(238,240,244,0.2)" }}>
                AI Search Analysis — prestior.es
              </span>
            </div>
            <div className="p-5 space-y-4">
              {[
                { ai:"ChatGPT", q:"¿Quién es [tu nombre]?", sin:"Información desactualizada", con:"Narrativa correcta y verificada" },
                { ai:"Perplexity", q:"¿Es fiable [tu empresa]?", sin:"Fuentes negativas sin gestión", con:"Fuentes positivas controladas" },
                { ai:"Gemini", q:"¿Cuál es la reputación de...?", sin:"Resultado aleatorio", con:"Posicionamiento estratégico" },
              ].map(({ ai, q, sin, con }) => (
                <div key={ai} className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="px-4 py-2.5 border-b font-mono-dm text-xs" style={{ borderColor: "rgba(255,255,255,0.06)", color: "var(--gold)", background: "rgba(201,168,76,0.04)" }}>
                    {ai} &rsaquo; <span style={{ color: "rgba(238,240,244,0.5)" }}>{q}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-3 py-2.5 text-xs border-r" style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgba(239,68,68,0.7)", background: "rgba(239,68,68,0.04)" }}>
                      ✗ {sin}
                    </div>
                    <div className="px-3 py-2.5 text-xs" style={{ color: "rgba(52,211,153,0.8)", background: "rgba(52,211,153,0.04)" }}>
                      ✓ {con}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PAQUETES — 3 cols, cinético
      ════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-5 relative overflow-hidden" style={{ background: "var(--bg-2)" }}>
        <div className="aurora-bg" style={{ opacity: 0.15 }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-eyebrow justify-center">Inversión</div>
            <h2 className="font-display font-black text-white mt-2 mb-3"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Tres opciones.
            </h2>
            <p style={{ color: "rgba(238,240,244,0.4)", fontWeight: 300 }}>
              El cerebro elige el del medio — donde está el mayor valor.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 items-start">
            {[
              { n:"PRESENCIA", p:"1.490€", d:"Para empezar a controlar cómo apareces.", items:["Knowledge Panel personal","1-2 medios de entrada","Optimización nombre en Google","Informe inicial"], hot:false },
              { n:"AUTORIDAD", p:"3.900€", d:"Autoridad documentada, verificable y duradera.", items:["Knowledge Panel personal","Pack wikis de autoridad","Forbes Argentina editorial","Posicionamiento Google + IA","Informe mensual"], hot:true },
              { n:"DOMINIO",    p:"9.900€", d:"Domina tu espacio a nivel internacional.", items:["Todo AUTORIDAD","Pack medios top (NYPost, BBC, Wired)","Gestión continua 3 meses","Estrategia personalizada"], hot:false },
            ].map(({ n, p, d, items, hot }) => (
              <div key={n} className={`relative ${hot ? "card-featured md:scale-105" : "card"} p-6 transition-all hover:-translate-y-1`}>
                {hot && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="badge text-xs px-4 py-1">★ Más contratado</span>
                  </div>
                )}
                <p className="font-mono-dm text-xs mb-1" style={{ color: "rgba(238,240,244,0.25)" }}>{n}</p>
                <div className="font-display font-black text-white text-3xl mb-1">{p}</div>
                <p className="text-sm mb-5" style={{ color: "rgba(238,240,244,0.4)" }}>{d}</p>
                <ul className="space-y-2.5 mb-6">
                  {items.map(i => (
                    <li key={i} className="flex items-start gap-2.5 text-xs" style={{ color: "rgba(238,240,244,0.6)" }}>
                      <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />{i}
                    </li>
                  ))}
                </ul>
                <Link href="/contacto/"
                  className={hot ? "btn-primary w-full justify-center" : "btn-outline w-full justify-center"}>
                  Solicitar información →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-6" style={{ color: "rgba(238,240,244,0.2)", fontFamily:"DM Mono, monospace" }}>
            Presupuesto personalizado tras análisis gratuito. IVA no incluido.{" "}
            <Link href="/precios/" className="underline" style={{ color: "rgba(238,240,244,0.35)" }}>Ver todos los precios →</Link>
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROCESO — horizontal timeline
      ════════════════════════════════════════ */}
      <section className="py-10 md:py-20 px-5" style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-eyebrow justify-center">Proceso</div>
            <h2 className="font-display font-black text-white mt-2"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>Cómo trabajamos</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5 relative">
            {[
              { n:"01", t:"Auditoría gratuita", d:"Analizamos Google, IA y medios. Sin coste, sin compromiso." },
              { n:"02", t:"Estrategia", d:"Diseñamos el plan exacto con servicios y plazos reales." },
              { n:"03", t:"Contrato previo", d:"Firmamos antes de que pagues. Todo por escrito." },
              { n:"04", t:"Ejecución y resultados", d:"Gestionamos todo. Informes de progreso en cada fase." },
            ].map(({ n, t, d }, i) => (
              <div key={n} className="card p-5 text-center relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-6 left-[calc(100%+2px)] w-[calc(100%-4px)] h-px z-10"
                    style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.4), transparent)" }} />
                )}
                <div className="step-num mx-auto mb-4">{n}</div>
                <h4 className="font-display font-bold text-white text-sm mb-1.5">{t}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(238,240,244,0.35)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIOS — quote cards
      ════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-5 border-y" style={{ background: "var(--bg-2)", borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="section-eyebrow">Resultados</div>
              <h2 className="font-display font-black text-white mt-2"
                style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
                Sin humo.<br />Solo resultados.
              </h2>
            </div>
            <Link href="/casos-de-exito/" className="btn-outline hidden md:inline-flex text-sm">
              Ver todos →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {TESTIMONIOS.map((t, i) => (
              <div key={i} className="card p-6 hover:-translate-y-1 transition-all">
                <span className="quote-mark">"</span>
                <p className="text-sm leading-relaxed mb-5 -mt-2" style={{ color: "rgba(238,240,244,0.65)", fontStyle:"italic", fontWeight:300 }}>
                  {t.t}
                </p>
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <span className="text-xs" style={{ color: "rgba(238,240,244,0.3)" }}>{t.a}</span>
                  <span className="badge badge-sm">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DIFERENCIADORES — 2 col
      ════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-5 relative overflow-hidden" style={{ background: "var(--bg)" }}>
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div>
            <div className="section-eyebrow">Diferenciación</div>
            <h2 className="font-display font-black text-white mt-3 mb-5"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              Lo que nos separa<br />
              <span className="text-gradient">del mercado del humo.</span>
            </h2>
            <p style={{ color: "rgba(238,240,244,0.4)", fontWeight: 300, lineHeight: 1.8 }}>
              En este sector hay muchas promesas imposibles. Nosotros operamos de forma distinta:
              contrato legal previo, descripción honesta de cada servicio y cero garantías que no podemos cumplir.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { e:"📋", t:"Contrato antes de empezar", d:"Firmamos antes de que pagues. Servicio exacto, plazos y garantías por escrito." },
              { e:"🔒", t:"Confidencialidad absoluta", d:"Nunca revelamos clientes, casos ni resultados. Discreción total." },
              { e:"✅", t:"Honestidad sobre cada servicio", d:"Forbes Argentina no es Forbes global. Un wiki de autoridad no es Wikipedia. Siempre lo decimos." },
              { e:"🏛️", t:"Empresa registrada en España", d:"CIF disponible bajo solicitud. Actividad 100% legal." },
              { e:"🔁", t:"Sin dependencia de un proveedor", d:"Mínimo dos proveedores por servicio. Si uno falla, el otro cubre." },
            ].map(({ e, t, d }) => (
              <div key={t} className="card p-4 flex gap-4 hover:-translate-y-0.5 transition-transform">
                <span className="text-xl flex-shrink-0 mt-0.5">{e}</span>
                <div>
                  <p className="font-display font-semibold text-white text-sm mb-0.5">{t}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(238,240,244,0.35)" }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ
      ════════════════════════════════════════ */}
      <section className="py-10 md:py-20 px-5" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-eyebrow justify-center">FAQ</div>
            <h2 className="font-display font-black text-white mt-2"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)" }}>Preguntas frecuentes</h2>
          </div>
          <div className="space-y-2.5">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="card group overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-display font-semibold text-white text-sm">
                  {q}
                  <span className="text-xs ml-4 flex-shrink-0 transition-transform group-open:rotate-180"
                    style={{ color: "rgba(238,240,244,0.3)" }}>▼</span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed border-t"
                  style={{ color: "rgba(238,240,244,0.45)", borderColor: "rgba(255,255,255,0.06)", fontWeight: 300 }}>
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA FINAL — aurora
      ════════════════════════════════════════ */}
      <section className="py-14 md:py-28 px-5 relative overflow-hidden grain" style={{ background: "var(--bg)" }}>
        <div className="aurora-bg" style={{ opacity: 0.5 }} />
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="section-eyebrow justify-center mb-6">Empieza hoy</div>
          <h2 className="font-display font-black text-white mt-2 mb-5"
            style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)" }}>
            ¿Qué aparece cuando<br />
            <span className="text-gradient">buscan tu nombre?</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(238,240,244,0.4)", fontWeight: 300 }}>
            Búscate en Google y en ChatGPT. ¿Lo que ves te ayuda o te perjudica?<br />
            Cuéntanoslo — el análisis es gratuito.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-primary text-base px-9 py-4">
              Solicitar auditoría gratuita <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contacto/" className="btn-outline text-base px-9 py-4">
              Hablar con nosotros
            </Link>
          </div>
          <p className="mt-5 text-xs font-mono-dm" style={{ color: "rgba(238,240,244,0.2)" }}>
            Sin coste · Respuesta en 24h · Confidencial
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
