import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#020509", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <style>{`
        .footer-link { color: rgba(238,240,244,0.3); font-size:0.875rem; transition: color 0.2s; }
        .footer-link:hover { color: rgba(238,240,244,0.7); }
        .footer-legal-link { color: rgba(238,240,244,0.18); font-size:0.75rem; font-family:'DM Mono',monospace; transition: color 0.2s; }
        .footer-legal-link:hover { color: rgba(238,240,244,0.5); }
      `}</style>
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#0c1422,#070d1a)", border:"1px solid rgba(201,168,76,0.3)" }}>
                <span className="text-xs font-black font-display text-gradient">P</span>
              </div>
              <span className="font-display font-bold text-white text-lg">Prestior</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "rgba(238,240,244,0.3)", fontWeight: 300 }}>
              Agencia especializada en protección, construcción y blindaje de reputación digital. Empresa registrada en España.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {["🔒 Confidencial","📋 Contrato previo","✅ Proceso legal"].map(t => (
                <span key={t} className="text-xs px-3 py-1 rounded-full font-mono-dm"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(238,240,244,0.25)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          {[
            { label:"Protección", links:[["Difamación online","/proteccion-reputacion/difamacion-online/"],["Derecho al olvido","/proteccion-reputacion/derecho-al-olvido/"],["Contenido íntimo","/proteccion-reputacion/contenido-intimo-filtrado/"],["Reseñas falsas","/proteccion-reputacion/eliminar-resenas-falsas/"]] },
            { label:"Autoridad", links:[["Knowledge Panel","/autoridad-digital/knowledge-panel-google/"],["Forbes Argentina","/autoridad-digital/aparecer-en-forbes/"],["Salir en prensa","/autoridad-digital/salir-en-prensa/"],["Reputación en IA","/autoridad-digital/reputacion-ia-geo/"]] },
            { label:"Empresa", links:[["Casos de éxito","/casos-de-exito/"],["Precios","/precios/"],["Blog","/blog/"],["Auditoría gratuita","/monitorizacion-reputacion/auditoria-reputacion-online/"],["Contacto","/contacto/"]] },
          ].map(({ label, links }) => (
            <div key={label}>
              <p className="text-xs uppercase tracking-widest mb-4 font-mono-dm" style={{ color: "rgba(238,240,244,0.2)" }}>{label}</p>
              <ul className="space-y-2.5">
                {links.map(([l, h]) => (
                  <li key={h}><Link href={h} className="footer-link">{l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="divider mb-6" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-mono-dm" style={{ color: "rgba(238,240,244,0.18)" }}>
            © {new Date().getFullYear()} Prestior · Empresa registrada en España · CIF disponible bajo solicitud
          </p>
          <div className="flex gap-5">
            {[["Aviso legal","/aviso-legal/"],["Privacidad","/privacidad/"],["Cookies","/cookies/"]].map(([l,h]) => (
              <Link key={h} href={h} className="footer-legal-link">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
