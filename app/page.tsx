import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Shield, TrendingUp, Eye, Check, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Reputalia — Agencia de Reputación y Autoridad Digital",
  description: "Protegemos tu reputación online, construimos tu autoridad digital y te blindamos ante ataques futuros. Gestión profesional, sin garantías imposibles.",
  alternates: { canonical: "https://reputalia.es/" },
};

const SILOS = [
  {
    icon: Shield,
    color: "#c9a84c",
    titulo: "Protección",
    sub: "Eliminar lo que te daña",
    desc: "Difamación, noticias falsas, cuentas de suplantación, contenido íntimo filtrado, reseñas ilegítimas. Gestionamos la retirada por las vías legales correctas.",
    href: "/proteccion-reputacion/",
    links: [
      ["Difamación y calumnias online", "/proteccion-reputacion/difamacion-online/"],
      ["Derecho al olvido en Google", "/proteccion-reputacion/derecho-al-olvido/"],
      ["Contenido íntimo filtrado", "/proteccion-reputacion/contenido-intimo-filtrado/"],
      ["Cuenta falsa o suplantación", "/proteccion-reputacion/suplantacion-identidad/"],
    ],
    ticket: "Desde 690€",
  },
  {
    icon: TrendingUp,
    color: "#c9a84c",
    titulo: "Autoridad",
    sub: "Construir lo que te impulsa",
    desc: "Knowledge Panel en Google, apariciones en Forbes y medios internacionales, perfiles wiki de autoridad, verificación en redes. Construimos presencia que genera confianza.",
    href: "/autoridad-digital/",
    links: [
      ["Knowledge Panel Google", "/autoridad-digital/knowledge-panel-google/"],
      ["Salir en Forbes (editorial)", "/autoridad-digital/aparecer-en-forbes/"],
      ["Prensa y medios nacionales", "/autoridad-digital/salir-en-prensa/"],
      ["Marca personal en Google", "/autoridad-digital/marca-personal-google/"],
    ],
    ticket: "Desde 390€",
    destacado: true,
  },
  {
    icon: Eye,
    color: "#c9a84c",
    titulo: "Blindaje",
    sub: "Mantener lo que tienes",
    desc: "Monitorización continua de tu nombre y marca, alertas tempranas, mantenimiento de presencia. Para que lo que construimos no se caiga en tres meses.",
    href: "/monitorizacion-reputacion/",
    links: [
      ["Monitorización continua", "/monitorizacion-reputacion/proteccion-continua-marca/"],
      ["Alertas de reputación", "/monitorizacion-reputacion/alertas-reputacion/"],
      ["Auditoría gratuita", "/monitorizacion-reputacion/auditoria-reputacion-online/"],
    ],
    ticket: "Desde 197€/mes",
  },
];

const PAQUETES = [
  {
    nombre: "PRESENCIA",
    precio: "1.490€",
    desc: "Para quienes quieren aparecer bien en Google.",
    incluye: ["Knowledge Panel personal", "1-2 medios de entrada", "Optimización del nombre en Google", "Informe de estado inicial"],
    destacado: false,
  },
  {
    nombre: "AUTORIDAD",
    precio: "3.900€",
    desc: "El más vendido. Autoridad real, documentada y duradera.",
    incluye: ["Knowledge Panel personal", "Pack wikis de autoridad (FoundersWiki, WikiAlpha, Crunchbase)", "Forbes Argentina (artículo editorial)", "Posicionamiento de marca", "Informe mensual"],
    destacado: true,
  },
  {
    nombre: "DOMINIO",
    precio: "9.900€",
    desc: "Para quienes quieren dominar su espacio digital.",
    incluye: ["Todo lo de AUTORIDAD", "Pack medios top internacionales (NYPost, BBC, Wired, People)", "Gestión continua 3 meses", "Estrategia personalizada"],
    destacado: false,
  },
];

const TESTIMONIOS = [
  { texto: "Tenía un artículo difamatorio de hace 4 años apareciendo en el primer resultado de Google cuando buscaban mi nombre. Desindexado en 3 semanas.", autor: "CEO de empresa tech, Madrid", resultado: "Desindexación conseguida" },
  { texto: "Necesitaba un Knowledge Panel y aparecer en medios antes de mi lanzamiento. El paquete Autoridad fue exactamente lo que necesitaba.", autor: "Coach y formadora online", resultado: "Panel activo + Forbes editorial" },
  { texto: "Alguien creó una cuenta falsa haciéndose pasar por mí con mis fotos. Lo reportaron y retiraron en menos de 48 horas.", autor: "Influencer, 180K seguidores", resultado: "Cuenta falsa eliminada" },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Qué es la gestión de reputación digital?", "acceptedAnswer": { "@type": "Answer", "text": "Es el proceso de controlar, mejorar y proteger lo que aparece cuando alguien busca tu nombre o marca en internet. Incluye eliminar contenido dañino, construir presencia positiva y monitorizar tu imagen de forma continua." } },
    { "@type": "Question", "name": "¿Garantizáis resultados?", "acceptedAnswer": { "@type": "Answer", "text": "No prometemos garantías imposibles. Prometemos gestión profesional, procesos legales correctos y máxima diligencia. La decisión final en muchos casos corresponde a Google, Meta o la plataforma correspondiente. Lo que sí garantizamos es transparencia, contrato previo y devolución o crédito si el servicio no se ejecuta correctamente." } },
    { "@type": "Question", "name": "¿Cuánto tiempo tarda la gestión de reputación?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del servicio. Una desindexación puede tardar 2-6 semanas. Un Knowledge Panel, 4-8 semanas. Una aparición editorial en medios, 4-12 semanas. Los plazos exactos se indican en cada servicio." } },
    { "@type": "Question", "name": "¿Es legal eliminar contenido de internet?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, cuando el contenido es ilícito, falso, difamatorio o viola tus derechos (privacidad, RGPD, copyright). La gestión legal de retirada por las vías correctas es completamente legal. No trabajamos con contenido verídico y legítimo." } },
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />

      {/* HERO */}
      <section className="py-20 px-4 text-center" style={{ background: "#0f1729" }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold mb-6" style={{ borderColor: "#c9a84c33", color: "#c9a84c", background: "#c9a84c11" }}>
            Empresa especializada · Contrato legal previo · Sin garantías imposibles
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Tu reputación digital<br />
            <span style={{ color: "#c9a84c" }}>es tu activo más valioso.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Protegemos lo que te daña, construimos lo que te impulsa y blindamos lo que tienes. Gestión profesional de reputación para personas, marcas y empresas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
              className="font-bold px-7 py-3.5 rounded-xl transition text-sm"
              style={{ background: "#c9a84c", color: "#0f1729" }}>
              Auditoría gratuita →
            </Link>
            <Link href="/precios/"
              className="font-semibold px-7 py-3.5 rounded-xl border text-sm text-white transition"
              style={{ borderColor: "#ffffff22" }}>
              Ver precios
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-xs text-slate-500">
            {["Empresa registrada en España", "Contrato antes de empezar", "Sin contraseñas", "Proceso 100% legal"].map(t => (
              <span key={t} className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-500" />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* LOS 3 SILOS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Nuestros servicios</p>
            <h2 className="text-3xl font-black text-stone-900">Tres fases. Un objetivo.</h2>
            <p className="text-stone-500 mt-2 max-w-xl mx-auto">Tu reputación digital necesita los tres: protección ante ataques, construcción de autoridad y blindaje continuo.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SILOS.map(({ icon: Icon, titulo, sub, desc, href, links, ticket, destacado }) => (
              <div key={titulo} className={`rounded-2xl border overflow-hidden ${destacado ? "border-amber-300 shadow-md" : "border-stone-200"}`}>
                {destacado && (
                  <div className="px-4 py-1.5 text-xs font-semibold text-center" style={{ background: "#c9a84c", color: "#0f1729" }}>
                    Mayor margen · Más vendido
                  </div>
                )}
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "#0f172911" }}>
                    <Icon className="w-5 h-5" style={{ color: "#0f1729" }} />
                  </div>
                  <p className="text-xs text-stone-400 mb-1 font-medium">{ticket}</p>
                  <h3 className="text-xl font-black text-stone-900 mb-1">{titulo}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: "#c9a84c" }}>{sub}</p>
                  <p className="text-sm text-stone-600 leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2 mb-5">
                    {links.map(([l, h]) => (
                      <li key={h}>
                        <Link href={h} className="flex items-center gap-2 text-xs text-stone-600 hover:text-stone-900 transition">
                          <ArrowRight className="w-3 h-3 flex-shrink-0" />{l}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href={href} className="block text-center py-2.5 rounded-xl text-sm font-semibold transition"
                    style={{ background: "#0f1729", color: "white" }}>
                    Ver todos los servicios →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAQUETES */}
      <section className="py-16 px-4" style={{ background: "#f5f4f1" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Paquetes</p>
            <h2 className="text-3xl font-black text-stone-900">Tres opciones. El cerebro elige el del medio.</h2>
            <p className="text-stone-500 mt-2">Diseñados para que elijas según tu momento actual, no según lo que puedes pagar.</p>
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
          <p className="text-center text-xs text-stone-400 mt-6">
            Precios orientativos. Presupuesto personalizado tras análisis gratuito.{" "}
            <Link href="/precios/" className="underline hover:text-stone-600">Ver todos los precios →</Link>
          </p>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Resultados</p>
            <h2 className="text-3xl font-black text-stone-900">Casos reales. Sin humo.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIOS.map((t, i) => (
              <div key={i} className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm text-stone-700 italic leading-relaxed mb-4">"{t.texto}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-500">{t.autor}</span>
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">{t.resultado}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ NOSOTROS */}
      <section className="py-16 px-4" style={{ background: "#f5f4f1" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">Por qué elegirnos</p>
              <h2 className="text-3xl font-black text-stone-900 mb-4">Lo que nos diferencia<br />del mercado del humo.</h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">En este sector hay muchas promesas imposibles. Nosotros operamos de forma diferente: contrato legal previo, descripción honesta de cada servicio y cero garantías de resultado que no podemos controlar.</p>
            </div>
            <div className="space-y-3">
              {[
                { t: "Honestidad sobre resultados", d: "Te decimos qué es viable y qué no antes de cobrar. Forbes Argentina no es Forbes global; un wiki de autoridad no es Wikipedia. Lo explicamos siempre." },
                { t: "Contrato antes de empezar", d: "Firmamos antes de que pagues. El contrato especifica el servicio exacto, los plazos y la política de garantía." },
                { t: "Empresa registrada en España", d: "CIF disponible bajo solicitud. Actividad 100% legal y transparente." },
                { t: "Sin dependencia de un solo proveedor", d: "Trabajamos con al menos dos proveedores por servicio para que un fallo externo no afecte a tu caso." },
              ].map(({ t, d }) => (
                <div key={t} className="bg-white rounded-xl border border-stone-200 p-4">
                  <p className="text-sm font-semibold text-stone-900 mb-1">{t}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-stone-900 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQ_SCHEMA.mainEntity.map(({ name, acceptedAnswer }) => (
              <details key={name} className="group bg-stone-50 rounded-xl border border-stone-200">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                  {name}
                  <span className="text-stone-400 group-open:rotate-180 transition-transform ml-3">▼</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-stone-600 border-t border-stone-200 pt-3 leading-relaxed">
                  {acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 px-4" style={{ background: "#0f1729" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-3">¿Qué aparece cuando buscan tu nombre?</h2>
          <p className="text-slate-400 mb-8">Búscate ahora mismo en Google. ¿Lo que ves te ayuda o te perjudica? Te enviamos un análisis gratuito en 24 horas.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-sm transition"
            style={{ background: "#c9a84c", color: "#0f1729" }}>
            Solicitar auditoría gratuita →
          </Link>
          <p className="text-slate-500 text-xs mt-4">Sin coste · Respuesta en 24h · Sin compromiso</p>
        </div>
      </section>

      {/* TRUSTPILOT — activar cuando tengas cuenta */}
      {/* <section className="py-10 px-4 bg-stone-50 border-y border-stone-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-stone-400 uppercase tracking-wider mb-4">Valoraciones verificadas</p>
          <TrustpilotWidget businessUnitId="TU_BUSINESS_UNIT_ID" />
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
