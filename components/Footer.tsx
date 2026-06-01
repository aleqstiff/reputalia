import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#030710", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#1a2540,#0f1729)", border:"1px solid rgba(201,168,76,0.3)" }}>
                <span className="text-xs font-black gradient-text">P</span>
              </div>
              <span className="font-black text-white text-lg">Prestior</span>
            </div>
            <p className="text-xs text-white/30 leading-relaxed max-w-xs">Agencia especializada en protección, construcción y blindaje de reputación digital. Empresa registrada en España.</p>
            <div className="flex gap-3 mt-5">
              {["🔒 Confidencial", "📋 Contrato previo", "✅ Legal"].map(t => (
                <span key={t} className="text-[10px] text-white/20 border border-white/10 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">Protección</p>
            <ul className="space-y-2.5">
              {[["Difamación online","/proteccion-reputacion/difamacion-online/"],["Derecho al olvido","/proteccion-reputacion/derecho-al-olvido/"],["Contenido íntimo","/proteccion-reputacion/contenido-intimo-filtrado/"],["Reseñas falsas","/proteccion-reputacion/eliminar-resenas-falsas/"]].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-sm text-white/30 hover:text-white/70 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">Autoridad</p>
            <ul className="space-y-2.5">
              {[["Knowledge Panel","/autoridad-digital/knowledge-panel-google/"],["Forbes Argentina","/autoridad-digital/aparecer-en-forbes/"],["Salir en prensa","/autoridad-digital/salir-en-prensa/"],["Reputación en IA","/autoridad-digital/reputacion-ia-geo/"]].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-sm text-white/30 hover:text-white/70 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">Empresa</p>
            <ul className="space-y-2.5">
              {[["Casos de éxito","/casos-de-exito/"],["Precios","/precios/"],["Blog","/blog/"],["Auditoría gratuita","/monitorizacion-reputacion/auditoria-reputacion-online/"],["Contacto","/contacto/"]].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-sm text-white/30 hover:text-white/70 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="divider-gradient mb-6" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/20">© {new Date().getFullYear()} Prestior · Empresa registrada en España · CIF disponible bajo solicitud</p>
          <div className="flex gap-5 text-xs text-white/20">
            <Link href="/aviso-legal/" className="hover:text-white/50 transition-colors">Aviso legal</Link>
            <Link href="/privacidad/" className="hover:text-white/50 transition-colors">Privacidad</Link>
            <Link href="/cookies/" className="hover:text-white/50 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
