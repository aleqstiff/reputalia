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
      <link rel="stylesheet" href="/prestior.css" />

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
