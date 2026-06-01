import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0f1729" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: "#1a2540" }}>
                <span className="text-xs font-black" style={{ color: "#c9a84c" }}>R</span>
              </div>
              <span className="font-black" style={{ color: "#c9a84c" }}>Reputalia</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">Agencia especializada en protección, construcción y blindaje de reputación digital. Empresa registrada en España.</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Protección</p>
            <ul className="space-y-2">
              {[["Difamación online","/proteccion-reputacion/difamacion-online/"],["Derecho al olvido","/proteccion-reputacion/derecho-al-olvido/"],["Contenido íntimo filtrado","/proteccion-reputacion/contenido-intimo-filtrado/"],["Cuenta falsa","/proteccion-reputacion/eliminar-cuenta-falsa-instagram/"]].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-sm text-slate-400 hover:text-white transition">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Autoridad</p>
            <ul className="space-y-2">
              {[["Salir en prensa","/autoridad-digital/salir-en-prensa/"],["Aparecer en Forbes","/autoridad-digital/aparecer-en-forbes/"],["Knowledge Panel","/autoridad-digital/knowledge-panel-google/"],["Marca personal","/autoridad-digital/marca-personal-google/"]].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-sm text-slate-400 hover:text-white transition">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Empresa</p>
            <ul className="space-y-2">
              {[["Sobre nosotros","/sobre-nosotros/"],["Casos de éxito","/casos-de-exito/"],["Precios","/precios/"],["Blog","/blog/"],["Contacto","/contacto/"]].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-sm text-slate-400 hover:text-white transition">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Reputalia · Empresa registrada en España · CIF disponible bajo solicitud</p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link href="/aviso-legal/" className="hover:text-white transition">Aviso legal</Link>
            <Link href="/privacidad/" className="hover:text-white transition">Privacidad</Link>
            <Link href="/cookies/" className="hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
