import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Shield, TrendingUp, Eye, Check, Lock, ArrowRight, ChevronRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Prestior — Gestión de Reputación y Autoridad Digital en España",
  description: "Controlamos lo que el mundo ve cuando busca tu nombre. Protección, autoridad y blindaje digital. Empresa española. Confidencial.",
  alternates: { canonical: "https://prestior.es/" },
};

const LOGOS = ["Forbes", "BBC", "NYPost", "Wired", "El País", "Expansión", "LinkedIn", "Trustpilot"];

const STATS = [
  { n: "100+", label: "Casos gestionados" },
  { n: "48h", label: "Primera respuesta" },
  { n: "100%", label: "Confidencial" },
  { n: "€3.9k", label: "Pack más contratado" },
];

const BENTO = [
  {
    size: "large", // col-span-7 row-span-4
    icon: TrendingUp,
    titulo: "Autoridad digital",
    sub: "Construye presencia que genera confianza",
    puntos: ["Knowledge Panel en Google", "Forbes Argentina editorial", "Pack wikis de autoridad", "Marca personal en buscadores", "Reputación en IA (ChatGPT/Perplexity)"],
    href: "/autoridad-digital/",
    tag: "★ Más vendido",
    desde: "Desde 390€",
  },
  {
    size: "medium", // col-span-5 row-span-2
    icon: Shield,
    titulo: "Protección",
    sub: "Elimina lo que te daña",
    puntos: ["Difamación y calumnias online", "Derecho al olvido Google", "Contenido íntimo filtrado", "Reseñas falsas ilegítimas"],
    href: "/proteccion-reputacion/",
    desde: "Desde 690€",
  },
  {
    size: "small", // col-span-5 row-span-2
    icon: Eye,
    titulo: "Blindaje continuo",
    sub: "Mantén lo que tienes",
    puntos: ["Monitorización activa 24/7", "Alertas tempranas de amenazas", "Reacción antes de que escale"],
    href: "/monitorizacion-reputacion/",
    desde: "Desde 197€/mes",
  },
];

const PROCESO = [
  { n: "01", t: "Auditoría gratuita", d: "Analizamos tu situación actual en Google, IA y medios. Sin coste, sin compromiso." },
  { n: "02", t: "Estrategia personalizada", d: "Diseñamos el plan exacto con los servicios que necesitas y los plazos reales." },
  { n: "03", t: "Contrato legal previo", d: "Firmamos antes de que pagues. Todo documentado: servicio, plazos y garantías." },
  { n: "04", t: "Ejecución y resultados", d: "Gestionamos todo. Te informamos en cada fase. Tú te dedicas a tu negocio." },
];

const TESTIMONIOS = [
  { texto: "Creía que había perdido 8 años de trabajo. En 16 días tenía la cuenta de vuelta.", autor: "Laura G.", cargo: "Creadora de contenido, 41K seguidores", resultado: "Instagram recuperado" },
  { texto: "Meta rechazó mis apelaciones tres veces. Alex lo consiguió a la primera.", autor: "Marcos R.", cargo: "Fundador de marca de ropa", resultado: "Cuenta desbloqueada" },
  { texto: "7 reseñas falsas de un ex-empleado. Las 7 eliminadas en menos de un mes.", autor: "Dr. C.V.", cargo: "Clínica dental, Valencia", resultado: "7 reseñas eliminadas" },
  { texto: "Knowledge Panel activo y Forbes editorial antes del lanzamiento. El curso generó €80K.", autor: "Sara M.", cargo: "Coach y formadora online", resultado: "Pack AUTORIDAD" },
];

const FAQ = [
  { q: "¿Garantizáis resultados?", a: "No prometemos garantías imposibles. Lo que sí garantizamos: contrato previo, proceso legal correcto y política de crédito si el servicio no se ejecuta correctamente." },
  { q: "¿Cuánto tarda?", a: "Desindexación: 2-6 semanas. Knowledge Panel: 4-8 semanas. Aparición editorial en medios: 4-12 semanas." },
  { q: "¿Trabajáis con confidencialidad?", a: "Sí, absoluta. Nunca revelamos clientes, casos ni resultados. Especialmente para directivos y figuras públicas." },
  { q: "¿Qué diferencia hay entre el plan Autoridad y los servicios sueltos?", a: "El paquete AUTORIDAD (3.900€) combina Knowledge Panel + wikis de autoridad + Forbes Argentina editorial, que juntos se refuerzan mutuamente. El resultado es significativamente mejor que contratar cada servicio por separado." },
];

const faqSchema = JSON.stringify({
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
});

export default function Home() {
  return (
    <div style={{ background: "var(--bg)" }} className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <Nav />

      {/* ══════════════════════════════════════════════
          HERO — Ambient orbs + oversized type + form
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-screen flex items-center" style={{ background: "var(--bg)" }}>
        {/* Ambient orbs */}
        <div className="orb orb-1" style={{ width: 600, height: 600, top: "-10%", left: "-5%", opacity: 0.6 }} />
        <div className="orb orb-2" style={{ width: 400, height: 400, top: "20%", right: "10%", opacity: 0.7 }} />
        <div className="orb orb-3" style={{ width: 500, height: 500, bottom: "-15%", left: "30%", opacity: 0.5 }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-[1fr_380px] gap-12 items-center">
          {/* Left — copy */}
          <div>
            <div className="badge-gold mb-6 inline-flex">
              Empresa registrada · Contrato legal previo · Confidencial
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Controla lo que<br />
              el mundo ve cuando<br />
              <span className="gradient-text">busca tu nombre.</span>
            </h1>

            <p className="text-lg text-white/50 mb-10 max-w-lg leading-relaxed">
              Gestionamos tu reputación en Google, Wikipedia, medios y plataformas de IA.
              Protección, construcción de autoridad y blindaje continuo.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-gold">
                Auditoría gratuita →
              </Link>
              <Link href="/precios/" className="btn-ghost">
                Ver precios
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {["Proceso 100% legal", "Sin contraseñas", "Confidencial", "Empresa en España"].map(t => (
                <span key={t} className="flex items-center gap-2 text-xs text-white/40">
                  <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />{t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — glass form card */}
          <div className="glass-strong p-7 shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/50">Disponible ahora — respuesta en 24h</span>
            </div>
            <h3 className="text-xl font-black text-white mb-1">Auditoría gratuita</h3>
            <p className="text-sm text-white/40 mb-6">Analizamos tu situación y te decimos exactamente qué mejorar.</p>

            <div className="space-y-3">
              <input type="text" placeholder="Nombre completo"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 bg-white/5 border border-white/10 focus:outline-none focus:border-yellow-500/50 transition" />
              <input type="email" placeholder="Correo electrónico"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 bg-white/5 border border-white/10 focus:outline-none focus:border-yellow-500/50 transition" />
              <input type="text" placeholder="URL de tu web o perfil"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 bg-white/5 border border-white/10 focus:outline-none focus:border-yellow-500/50 transition" />
              <a href="mailto:hola@prestior.es?subject=Auditoría gratuita"
                className="btn-gold w-full justify-center text-sm">
                Solicitar análisis gratuito →
              </a>
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-white/30">
              <Lock className="w-3 h-3" />
              <span>Confidencial · Sin compromiso</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LOGOS — scrolling strip
      ══════════════════════════════════════════ */}
      <div className="relative overflow-hidden border-y border-white/5 py-5" style={{ background: "rgba(255,255,255,0.02)" }}>
        <p className="text-center text-xs text-white/20 uppercase tracking-widest mb-4">Gestionamos presencia en</p>
        <div className="overflow-hidden">
          <div className="logos-track">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span key={i} className="text-white/20 font-bold text-sm tracking-wider whitespace-nowrap uppercase">{logo}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          STATS BAR — glass cards
      ══════════════════════════════════════════ */}
      <section className="py-12 px-4 relative" style={{ background: "var(--bg-mid)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ n, label }) => (
            <div key={label} className="glass p-5 text-center transition-all hover:-translate-y-1">
              <div className="stat-number gradient-text">{n}</div>
              <div className="text-xs text-white/40 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BENTO GRID — services
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "var(--bg)" }}>
        <div className="orb orb-1" style={{ width: 400, height: 400, bottom: 0, right: 0, opacity: 0.3 }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">Metodología</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-3">
              Tres fases.<br /><span className="gradient-text">Un resultado.</span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">Tu reputación necesita los tres: limpiar lo que daña, construir lo que impulsa, mantener lo que funciona.</p>
          </div>

          {/* Bento asymmetric grid */}
          <div className="grid md:grid-cols-12 gap-4 auto-rows-auto">

            {/* GRANDE — Autoridad */}
            <div className="md:col-span-7 glass hover:border-yellow-500/20 transition-all group relative overflow-hidden p-7">
              <div className="orb orb-2" style={{ width: 200, height: 200, top: "-20%", right: "-10%", opacity: 0.4 }} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-white/5">
                    <TrendingUp className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="badge-gold">★ Más vendido</span>
                </div>
                <p className="text-white/30 text-xs mb-1">Desde 390€</p>
                <h3 className="text-2xl font-black text-white mb-1">Autoridad digital</h3>
                <p className="text-sm text-white/50 mb-5">Construye presencia que genera confianza antes de que hablen contigo</p>
                <ul className="space-y-2 mb-6">
                  {["Knowledge Panel en Google", "Forbes Argentina (artículo editorial)", "Pack wikis de autoridad", "Marca personal en buscadores", "Reputación en IA — ChatGPT / Perplexity"].map(p => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href="/autoridad-digital/" className="btn-gold inline-flex text-sm">
                  Ver servicios <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="md:col-span-5 flex flex-col gap-4">

              {/* MEDIANO — Protección */}
              <div className="glass hover:border-white/15 transition-all p-6 flex-1">
                <div className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 mb-4">
                  <Shield className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-white/30 text-xs mb-1">Desde 690€</p>
                <h3 className="text-xl font-black text-white mb-1">Protección</h3>
                <p className="text-sm text-white/40 mb-4">Elimina lo que te daña ahora mismo</p>
                <ul className="space-y-1.5 mb-5">
                  {["Difamación y calumnias", "Derecho al olvido Google", "Contenido íntimo filtrado", "Reseñas falsas"].map(p => (
                    <li key={p} className="flex items-center gap-2 text-xs text-white/50">
                      <ArrowRight className="w-3 h-3 text-white/20 flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>
                <Link href="/proteccion-reputacion/" className="btn-ghost inline-flex text-xs py-2 px-4">
                  Ver servicios <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* PEQUEÑO — Blindaje */}
              <div className="glass hover:border-white/15 transition-all p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 mb-3">
                      <Eye className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-white/30 text-xs mb-0.5">Desde 197€/mes</p>
                    <h3 className="text-lg font-black text-white">Blindaje continuo</h3>
                  </div>
                  <span className="text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-full">Recurrente</span>
                </div>
                <p className="text-xs text-white/40 mb-4">Monitorización activa, alertas y reacción inmediata</p>
                <Link href="/monitorizacion-reputacion/" className="btn-ghost inline-flex text-xs py-2 px-4">
                  Ver servicio <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GEO / IA — nueva sección visual
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "var(--bg-mid)" }}>
        <div className="orb orb-3" style={{ width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.2 }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-gold mb-5 inline-flex">Nuevo en 2026</span>
              <h2 className="text-4xl font-black text-white mb-4">
                ¿Qué dice ChatGPT<br />
                <span className="gradient-text">sobre ti?</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Millones de personas usan ChatGPT, Perplexity y Gemini para investigar personas y marcas.
                Lo que esas IAs dicen puede ser incorrecto, desactualizado o dañino si no se gestiona.
              </p>
              <Link href="/autoridad-digital/reputacion-ia-geo/" className="btn-gold inline-flex text-sm">
                Ver servicio GEO <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Terminal visual */}
            <div className="glass-strong p-5 font-mono text-xs space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-white/20 ml-2 text-[10px]">AI Search Analysis</span>
              </div>

              {[
                { ai: "ChatGPT", q: "¿Quién es [tu nombre]?", sin: "Información desactualizada o incorrecta", con: "Narrativa correcta y verificada" },
                { ai: "Perplexity", q: "¿Es fiable [tu empresa]?", sin: "Fuentes negativas sin gestión", con: "Fuentes positivas controladas" },
                { ai: "Gemini", q: "¿Cuál es la reputación de...?", sin: "Resultado aleatorio", con: "Posicionamiento estratégico" },
              ].map(({ ai, q, sin, con }) => (
                <div key={ai} className="border border-white/5 rounded-lg p-3">
                  <div className="text-yellow-400/70 mb-1.5">{ai} › {q}</div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-red-900/20 border border-red-500/15 rounded p-2 text-red-300/70">❌ {sin}</div>
                    <div className="bg-green-900/20 border border-green-500/15 rounded p-2 text-green-300/70">✓ {con}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESO — timeline visual
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4" style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">Proceso</span>
            <h2 className="text-4xl font-black text-white mt-4">Cómo trabajamos</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {PROCESO.map(({ n, t, d }, i) => (
              <div key={n} className="relative">
                {i < 3 && <div className="hidden md:block absolute top-5 left-[calc(50%+20px)] right-[-50%] h-px bg-gradient-to-r from-yellow-500/30 to-transparent" />}
                <div className="glass p-5 text-center hover:-translate-y-1 transition-transform">
                  <div className="process-num mx-auto mb-4">{n}</div>
                  <h4 className="font-bold text-white text-sm mb-2">{t}</h4>
                  <p className="text-xs text-white/40 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PAQUETES — 3 columnas premium
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "var(--bg-mid)" }}>
        <div className="orb orb-2" style={{ width: 500, height: 500, top: 0, left: "50%", transform: "translateX(-50%)", opacity: 0.15 }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">Inversión</span>
            <h2 className="text-4xl font-black text-white mt-4 mb-3">Tres opciones.</h2>
            <p className="text-white/40">El cerebro elige el del medio — y es donde está el mayor valor.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 items-start">
            {[
              { nombre: "PRESENCIA", precio: "1.490€", desc: "Para empezar a controlar cómo apareces.", incluye: ["Knowledge Panel personal", "1-2 medios de entrada", "Optimización nombre en Google", "Informe inicial"], top: false },
              { nombre: "AUTORIDAD", precio: "3.900€", desc: "Autoridad documentada y duradera.", incluye: ["Knowledge Panel personal", "Pack wikis (FoundersWiki, WikiAlpha, Crunchbase)", "Forbes Argentina — editorial", "Posicionamiento en Google e IA", "Informe mensual"], top: true },
              { nombre: "DOMINIO", precio: "9.900€", desc: "Domina tu espacio a nivel internacional.", incluye: ["Todo AUTORIDAD", "Pack medios top (NYPost, BBC, Wired)", "Gestión continua 3 meses", "Estrategia personalizada"], top: false },
            ].map(({ nombre, precio, desc, incluye, top }) => (
              <div key={nombre} className={`relative ${top ? "glass-strong border-yellow-500/25 shadow-2xl shadow-yellow-500/10 scale-105" : "glass"} p-6 transition-all hover:-translate-y-1`}>
                {top && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge-gold text-xs px-3 py-1">★ Más contratado</span>
                  </div>
                )}
                <p className="text-xs font-mono text-white/30 mb-1">{nombre}</p>
                <div className="text-3xl font-black text-white mb-1">{precio}</div>
                <p className="text-sm text-white/40 mb-5">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {incluye.map(i => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white/60">
                      <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />{i}
                    </li>
                  ))}
                </ul>
                <Link href="/contacto/" className={top ? "btn-gold w-full justify-center text-sm" : "btn-ghost w-full justify-center text-sm"}>
                  Solicitar información →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/25 mt-6">Presupuesto personalizado tras análisis gratuito. IVA no incluido si aplica. <Link href="/precios/" className="text-white/40 underline hover:text-white/60">Ver todos los precios →</Link></p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIOS — glass quote cards
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4" style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">Resultados</span>
            <h2 className="text-4xl font-black text-white mt-4">Resultados reales.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {TESTIMONIOS.map((t, i) => (
              <div key={i} className="glass p-6 hover:border-white/15 transition-all hover:-translate-y-1">
                <div className="quote-mark">"</div>
                <p className="text-white/70 text-sm leading-relaxed mb-5 -mt-2 italic">{t.texto}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{t.autor}</p>
                    <p className="text-white/30 text-xs">{t.cargo}</p>
                  </div>
                  <span className="badge-gold text-[10px]">{t.resultado}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/casos-de-exito/" className="btn-ghost text-sm inline-flex">Ver todos los casos →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DIFERENCIALES — grid oscuro
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "var(--bg-mid)" }}>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Diferenciación</span>
              <h2 className="text-4xl font-black text-white mt-4 mb-4">
                Lo que nos separa<br /><span className="gradient-text">del mercado del humo.</span>
              </h2>
              <p className="text-white/40 leading-relaxed">En este sector hay muchas promesas imposibles. Nosotros operamos diferente: contrato legal previo, descripción honesta de cada servicio y cero garantías que no podemos cumplir.</p>
            </div>
            <div className="space-y-3">
              {[
                { icon: "📋", t: "Contrato antes de empezar", d: "Firmamos antes de que pagues. Servicio, plazos y garantías por escrito." },
                { icon: "🔒", t: "Confidencialidad absoluta", d: "Nunca revelamos clientes, casos ni resultados. Discreción total." },
                { icon: "✅", t: "Honestidad sobre resultados", d: "Forbes Argentina no es Forbes global. Un wiki de autoridad no es Wikipedia. Siempre." },
                { icon: "🏛️", t: "Empresa registrada en España", d: "CIF disponible bajo solicitud. Actividad 100% legal." },
              ].map(({ icon, t, d }) => (
                <div key={t} className="glass p-4 flex gap-4 hover:border-white/15 transition-all">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">{t}</p>
                    <p className="text-xs text-white/40 leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4" style={{ background: "var(--bg)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">FAQ</span>
            <h2 className="text-4xl font-black text-white mt-4">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="glass group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-white text-sm list-none">
                  {q}
                  <span className="text-white/30 group-open:rotate-180 transition-transform ml-3 flex-shrink-0">▼</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-white/50 border-t border-white/5 pt-3 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL — dark with orbs
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 relative overflow-hidden" style={{ background: "var(--bg-mid)" }}>
        <div className="orb orb-2" style={{ width: 600, height: 600, top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.3 }} />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="section-label mb-6">Empieza hoy</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-4">
            ¿Qué aparece cuando<br /><span className="gradient-text">buscan tu nombre?</span>
          </h2>
          <p className="text-white/40 mb-10 text-lg">Búscate ahora en Google y en ChatGPT. ¿Lo que ves te ayuda o te perjudica?</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-gold text-base px-10 py-4">
            Solicitar auditoría gratuita →
          </Link>
          <p className="text-white/25 text-xs mt-4">Sin coste · Respuesta en 24h · Confidencial</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
