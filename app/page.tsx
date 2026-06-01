import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Shield, TrendingUp, Eye, Check, ArrowRight, Star, Lock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Prestior — Gestión de Reputación y Autoridad Digital en España",
  description: "Controlamos lo que el mundo ve cuando busca tu nombre. Protección, construcción de autoridad y blindaje continuo. Empresa española. Confidencial.",
  alternates: { canonical: "https://prestior.es/" },
};

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://prestior.es/" }]
});

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Qué es la gestión de reputación digital?", "acceptedAnswer": { "@type": "Answer", "text": "Es el proceso de controlar, mejorar y proteger lo que aparece cuando alguien busca tu nombre o marca en Google, en plataformas de IA como ChatGPT o Perplexity, y en medios digitales." } },
    { "@type": "Question", "name": "¿Garantizáis resultados?", "acceptedAnswer": { "@type": "Answer", "text": "No prometemos garantías imposibles. Prometemos gestión profesional, máxima diligencia y transparencia total. La decisión final en muchos casos corresponde a Google o la plataforma implicada. Lo que sí garantizamos: contrato previo, proceso legal correcto y política de crédito si el servicio no se ejecuta correctamente." } },
    { "@type": "Question", "name": "¿Cuánto tarda la gestión de reputación?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del servicio: una desindexación puede tardar 2-6 semanas. Un Knowledge Panel, 4-8 semanas. Una aparición editorial en medios, 4-12 semanas." } },
    { "@type": "Question", "name": "¿Trabajáis con confidencialidad?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, absoluta. Nunca revelamos información sobre nuestros clientes, los casos gestionados ni los resultados obtenidos. La discreción es parte del servicio, especialmente para directivos, figuras públicas y marcas sensibles." } },
  ],
});

const STATS = [
  { n: "100+", label: "Casos gestionados" },
  { n: "3 silos", label: "Protección · Autoridad · Blindaje" },
  { n: "100%", label: "Confidencial" },
  { n: "Empresa", label: "Registrada en España" },
];

const SERVICIOS_HOME = [
  {
    icon: Shield,
    titulo: "Protección",
    sub: "Elimina lo que te daña",
    puntos: ["Difamación y calumnias online", "Derecho al olvido en Google", "Contenido íntimo filtrado", "Reseñas falsas o ilegítimas", "Cuentas de suplantación"],
    href: "/proteccion-reputacion/",
    cta: "Ver servicios de protección",
    desde: "Desde 690€",
  },
  {
    icon: TrendingUp,
    titulo: "Autoridad",
    sub: "Construye lo que te impulsa",
    puntos: ["Knowledge Panel en Google", "Aparición en Forbes (editorial)", "Pack wikis de autoridad", "Marca personal en buscadores", "Reputación en IA (ChatGPT, Perplexity)"],
    href: "/autoridad-digital/",
    cta: "Ver servicios de autoridad",
    desde: "Desde 390€",
    destacado: true,
  },
  {
    icon: Eye,
    titulo: "Blindaje",
    sub: "Mantén lo que tienes",
    puntos: ["Monitorización continua de marca", "Alertas tempranas de amenazas", "Mantenimiento de presencia online", "Reacción antes de que escale"],
    href: "/monitorizacion-reputacion/",
    cta: "Ver servicios de blindaje",
    desde: "Desde 197€/mes",
  },
];

const PAQUETES = [
  {
    nombre: "PRESENCIA",
    precio: "1.490€",
    desc: "Para empezar a controlar cómo apareces en Google.",
    incluye: ["Knowledge Panel personal", "1-2 medios de entrada", "Optimización de nombre en Google", "Informe de estado inicial"],
    destacado: false,
  },
  {
    nombre: "AUTORIDAD",
    precio: "3.900€",
    desc: "Autoridad documentada, verificable y duradera.",
    incluye: ["Knowledge Panel personal", "Pack wikis de autoridad (FoundersWiki, WikiAlpha, Crunchbase)", "Forbes Argentina — artículo editorial", "Posicionamiento en Google y en IA", "Informe mensual de resultados"],
    destacado: true,
  },
  {
    nombre: "DOMINIO",
    precio: "9.900€",
    desc: "Domina tu espacio digital a nivel internacional.",
    incluye: ["Todo lo de AUTORIDAD", "Pack medios top internacionales (NYPost, BBC, Wired, People)", "Gestión continua 3 meses", "Estrategia personalizada"],
    destacado: false,
  },
];

const CASOS = [
  { cat: "Protección", t: "CEO con artículo difamatorio en top 1 de Google", r: "Desindexado en 4 semanas", d: "Un competidor publicó un artículo falso que llevaba 3 años en el primer resultado cuando buscaban su nombre." },
  { cat: "Autoridad", t: "Coach sin presencia digital — lanzamiento de infoproducto", r: "Knowledge Panel + Forbes + 3 medios", d: "Construimos el pack AUTORIDAD antes del lanzamiento. El lanzamiento generó €80K en ventas." },
  { cat: "Protección", t: "Influencer de 180K con cuenta falsa activa", r: "Cuenta eliminada en 48h", d: "Una cuenta falsa con sus fotos llevaba 2 meses activa enviando DMs fraudulentos a su audiencia." },
  { cat: "Protección", t: "Clínica dental — ataque coordinado de reseñas falsas", r: "10 de 12 reseñas eliminadas", d: "12 reseñas de 1 estrella en 48 horas por cuentas nuevas. Nunca habían sido pacientes." },
];

const DIFERENCIALES = [
  { t: "Honestidad sobre resultados", d: "Te decimos qué es viable antes de cobrar. Forbes Argentina no es Forbes global. Un wiki de autoridad no es Wikipedia. Siempre." },
  { t: "Contrato legal antes de empezar", d: "Firmamos antes de que pagues. El contrato especifica el servicio, los plazos y las garantías." },
  { t: "Confidencialidad absoluta", d: "Nunca revelamos clientes ni casos. Discreción total, especialmente para directivos y figuras públicas." },
  { t: "Sin dependencia de un solo proveedor", d: "Mínimo dos proveedores por servicio. Un fallo externo no afecta a tu caso." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <Nav />

      {/* ── HERO ── */}
      <section className="py-20 px-4" style={{ background: "#0f1729" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_340px] gap-12 items-center">
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
              style={{ borderColor: "#c9a84c44", color: "#c9a84c", background: "#c9a84c11" }}>
              Empresa registrada · Contrato previo · Sin garantías imposibles
            </div>

            {/* H1 — keyword principal en SEO */}
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Controla lo que el mundo ve<br />
              <span style={{ color: "#c9a84c" }}>cuando busca tu nombre.</span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Gestionamos tu reputación en Google, Wikipedia, medios internacionales
              y plataformas de IA. Protección de lo que te daña, construcción de
              lo que te impulsa, blindaje continuo.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
                className="font-bold px-7 py-3.5 rounded-xl text-sm transition flex items-center gap-2"
                style={{ background: "#c9a84c", color: "#0f1729" }}>
                Auditoría gratuita →
              </Link>
              <Link href="/precios/"
                className="font-semibold px-7 py-3.5 rounded-xl border text-sm text-white transition flex items-center gap-2"
                style={{ borderColor: "#ffffff22" }}>
                Ver precios
              </Link>
            </div>

            {/* Trust signals en línea */}
            <div className="flex flex-wrap gap-5 mt-8 text-xs text-slate-500">
              {["Empresa registrada en España", "Contrato antes de empezar", "Sin contraseñas nunca", "Confidencial"].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-green-500" />{t}
                </span>
              ))}
            </div>
          </div>

          {/* ── FORMULARIO EN EL HERO — como hace ReputationX ── */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <h3 className="font-black text-stone-900 text-lg mb-1">Auditoría gratuita</h3>
            <p className="text-sm text-stone-500 mb-5">Analizamos tu situación actual y te decimos exactamente qué mejorar. Sin coste. Respuesta en 24h.</p>
            <div className="space-y-3">
              <input type="text" placeholder="Tu nombre completo" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-stone-400" />
              <input type="email" placeholder="Correo electrónico" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-stone-400" />
              <input type="text" placeholder="Web o perfil a analizar (URL)" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-stone-400" />
              <a href="mailto:hola@prestior.es?subject=Solicitud de auditoría gratuita"
                className="block w-full text-center py-3.5 rounded-xl font-bold text-sm transition"
                style={{ background: "#0f1729", color: "white" }}>
                Solicitar análisis gratuito →
              </a>
            </div>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-stone-400">
              <Lock className="w-3 h-3" />
              <span>Confidencial · Sin compromiso</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="border-b border-stone-200" style={{ background: "#f5f4f1" }}>
        <div className="max-w-5xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ n, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black text-stone-900">{n}</div>
              <div className="text-xs text-stone-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROBLEMA — copy emocional ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-4">
            Tu reputación digital se gestiona sola.<br />
            <span className="text-stone-500 font-normal">Mal.</span>
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Cada día que pasa sin gestión activa, una reseña falsa baja tu nota en Google, 
            un artículo viejo ocupa el primer resultado cuando buscan tu nombre, 
            o un competidor construye su autoridad mientras tú te quedas estático. 
            En 2026, también importa lo que dice ChatGPT y Perplexity cuando preguntan por ti.
          </p>
        </div>
      </section>

      {/* ── 3 SILOS ── */}
      <section className="py-16 px-4" style={{ background: "#f5f4f1" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Metodología</p>
            <h2 className="text-3xl font-black text-stone-900">Tres fases. Un resultado.</h2>
            <p className="text-stone-500 mt-2 max-w-lg mx-auto">Tu presencia digital necesita los tres: limpiar lo que daña, construir lo que impulsa, mantener lo que funciona.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {SERVICIOS_HOME.map(({ icon: Icon, titulo, sub, puntos, href, cta, desde, destacado }) => (
              <div key={titulo} className={`bg-white rounded-2xl border overflow-hidden ${destacado ? "border-stone-900 shadow-md" : "border-stone-200"}`}>
                {destacado && (
                  <div className="text-center py-1.5 text-xs font-bold" style={{ background: "#0f1729", color: "#c9a84c" }}>
                    ★ Mayor margen · Más vendido
                  </div>
                )}
                <div className="p-6">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 border border-stone-200">
                    <Icon className="w-4 h-4 text-stone-700" />
                  </div>
                  <p className="text-xs text-stone-400 mb-1">{desde}</p>
                  <h3 className="text-xl font-black text-stone-900 mb-0.5">{titulo}</h3>
                  <p className="text-sm font-semibold mb-4" style={{ color: "#c9a84c" }}>{sub}</p>
                  <ul className="space-y-2 mb-6">
                    {puntos.map(p => (
                      <li key={p} className="flex items-center gap-2 text-xs text-stone-600">
                        <ArrowRight className="w-3 h-3 flex-shrink-0 text-stone-400" />{p}
                      </li>
                    ))}
                  </ul>
                  <Link href={href} className="block text-center py-2.5 rounded-xl text-sm font-semibold transition"
                    style={{ background: "#0f1729", color: "white" }}>
                    {cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NUEVO: REPUTACIÓN EN IA (GEO) — tendencia 2026 ── */}
      <section className="py-14 px-4 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-amber-200 bg-amber-50 rounded-full px-3 py-1 text-xs font-semibold text-amber-700 mb-4">
                Nuevo en 2026
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-4">
                ¿Qué dice ChatGPT<br />cuando preguntan por ti?
              </h2>
              <p className="text-stone-600 leading-relaxed mb-5">
                En 2026, millones de personas usan ChatGPT, Perplexity y Gemini para buscar información
                sobre personas y marcas. Lo que estas IAs dicen de ti está construido con los mismos
                datos que Google — y puede ser incorrecto, desactualizado o dañino.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Gestionamos tu presencia en la búsqueda por IA (GEO — Generative Engine Optimization)
                para que la narrativa que construyen los modelos de lenguaje sobre ti sea la correcta.
              </p>
              <Link href="/autoridad-digital/reputacion-ia-geo/"
                className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-3 rounded-xl"
                style={{ background: "#0f1729", color: "white" }}>
                Ver servicio GEO <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { q: "ChatGPT: '¿Quién es [tu nombre]?'", estado: "Sin gestión: información desactualizada o incorrecta", gestionado: "Con Prestior: narrativa correcta y actualizada" },
                { q: "Perplexity: '¿Es fiable [tu empresa]?'", estado: "Sin gestión: fuentes negativas o neutras", gestionado: "Con Prestior: fuentes positivas verificadas" },
                { q: "Gemini: '¿Cuál es la reputación de [marca]?'", estado: "Sin gestión: depende del azar", gestionado: "Con Prestior: controlado y monitorizado" },
              ].map(({ q, estado, gestionado }) => (
                <div key={q} className="bg-stone-50 rounded-xl border border-stone-200 p-4">
                  <p className="text-xs font-semibold text-stone-700 mb-2 font-mono">{q}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-red-700">{estado}</div>
                    <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-green-700">{gestionado}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAQUETES ── */}
      <section className="py-16 px-4" style={{ background: "#f5f4f1" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Paquetes</p>
            <h2 className="text-3xl font-black text-stone-900">Elige tu punto de partida.</h2>
            <p className="text-stone-500 mt-2">Tres opciones. El cerebro elige el del medio — y es donde está el mayor valor.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {PAQUETES.map(({ nombre, precio, desc, incluye, destacado }) => (
              <div key={nombre} className={`bg-white rounded-2xl border overflow-hidden ${destacado ? "border-stone-900 shadow-lg scale-105" : "border-stone-200"}`}>
                {destacado && (
                  <div className="text-center py-1.5 text-xs font-bold" style={{ background: "#0f1729", color: "#c9a84c" }}>
                    ★ Más contratado
                  </div>
                )}
                <div className="p-6">
                  <p className="text-xs font-mono text-stone-400 mb-1">{nombre}</p>
                  <div className="text-3xl font-black text-stone-900 mb-1">{precio}</div>
                  <p className="text-sm text-stone-500 mb-5">{desc}</p>
                  <ul className="space-y-2 mb-6">
                    {incluye.map(i => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{i}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contacto/" className="block text-center py-3 rounded-xl text-sm font-semibold transition"
                    style={destacado ? { background: "#0f1729", color: "white" } : { background: "#f5f4f1", color: "#0f1729" }}>
                    Solicitar información →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-stone-400 mt-5">
            Presupuesto personalizado tras análisis gratuito. IVA no incluido si aplica.{" "}
            <Link href="/precios/" className="underline hover:text-stone-600">Ver todos los precios →</Link>
          </p>
        </div>
      </section>

      {/* ── CASOS DE ÉXITO ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Resultados</p>
              <h2 className="text-3xl font-black text-stone-900">Resultados reales.</h2>
            </div>
            <Link href="/casos-de-exito/" className="text-sm font-semibold text-stone-600 hover:text-stone-900 hidden md:block">
              Ver todos →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {CASOS.map((c, i) => (
              <div key={i} className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3" style={{ background: "#0f172911", color: "#0f1729" }}>{c.cat}</span>
                <h3 className="font-bold text-stone-900 text-sm mb-2">{c.t}</h3>
                <p className="text-xs text-stone-500 mb-4 leading-relaxed">{c.d}</p>
                <span className="text-xs font-semibold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">{c.r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIADORES ── */}
      <section className="py-16 px-4" style={{ background: "#f5f4f1" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">Por qué elegirnos</p>
              <h2 className="text-3xl font-black text-stone-900 mb-4">Lo que nos separa<br />del mercado del humo.</h2>
              <p className="text-stone-500 text-sm leading-relaxed">En este sector hay muchas promesas. Nosotros operamos distinto: contrato legal previo, descripción honesta de cada servicio, y cero garantías de resultado que no podemos controlar.</p>
            </div>
            <div className="space-y-3">
              {DIFERENCIALES.map(({ t, d }) => (
                <div key={t} className="bg-white rounded-xl border border-stone-200 p-4">
                  <p className="text-sm font-semibold text-stone-900 mb-1">{t}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-stone-900 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {[
              { q: "¿Qué es la gestión de reputación digital?", a: "Es el proceso de controlar, mejorar y proteger lo que aparece cuando alguien busca tu nombre en Google, en IA como ChatGPT, o en medios digitales." },
              { q: "¿Garantizáis resultados?", a: "No prometemos garantías imposibles. Lo que sí garantizamos: contrato previo, proceso legal correcto, máxima diligencia y política de crédito si el servicio no se ejecuta." },
              { q: "¿Cuánto tiempo tarda?", a: "Depende del servicio. Desindexación: 2-6 semanas. Knowledge Panel: 4-8 semanas. Aparición en medios: 4-12 semanas." },
              { q: "¿Trabajáis con confidencialidad?", a: "Sí, absoluta. Nunca revelamos clientes, casos ni resultados. Discreción total para directivos, figuras públicas y marcas sensibles." },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-stone-50 rounded-xl border border-stone-200">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                  {q}<span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-16 px-4" style={{ background: "#0f1729" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-3">¿Qué aparece cuando buscan tu nombre?</h2>
          <p className="text-slate-400 mb-8">Búscate ahora en Google y en ChatGPT. ¿Lo que ves te ayuda o te perjudica? Cuéntanoslo — analizamos tu situación gratis.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-sm transition"
            style={{ background: "#c9a84c", color: "#0f1729" }}>
            Solicitar auditoría gratuita →
          </Link>
          <p className="text-slate-500 text-xs mt-4">Sin coste · Respuesta en 24h · Confidencial</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
