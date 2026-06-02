import Link from "next/link";

const STYLE = `
  .ft { background: #020509; border-top: 1px solid rgba(255,255,255,0.07); }
  .ft-inner { max-width: 820px; margin: 0 auto; padding: 40px 24px 44px; }
  .ft-grid { display: grid; grid-template-columns: 1fr; gap: 32px; margin-bottom: 32px; }
  .ft-logo { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
  .ft-bar { width: 4px; height: 20px; background: #c9a84c; border-radius: 2px; }
  .ft-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 15px; color: #eef0f4; }
  .ft-tagline { font-size: 13px; color: rgba(238,240,244,0.3); line-height: 1.6; font-weight: 300; }
  .ft-col-label { font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(238,240,244,0.18); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px; display: block; }
  .ft-link { display: block; font-size: 13px; color: rgba(238,240,244,0.32); text-decoration: none; margin-bottom: 8px; transition: color 0.2s; }
  .ft-link:hover { color: rgba(238,240,244,0.7); }
  .ft-bottom { border-top: 1px solid rgba(255,255,255,0.07); padding-top: 20px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; }
  .ft-copy { font-size: 12px; color: rgba(238,240,244,0.18); font-family: 'DM Mono', monospace; }
  .ft-legal { display: flex; gap: 16px; flex-wrap: wrap; }
  @media (min-width: 600px) { .ft-grid { grid-template-columns: 1.6fr 1fr 1fr; } }
`;

export default function Footer() {
  return (
    <footer className="ft">
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />
      <div className="ft-inner">
        <div className="ft-grid">
          <div>
            <div className="ft-logo">
              <span className="ft-bar" />
              <span className="ft-name">Prestior</span>
            </div>
            <p className="ft-tagline">Firma de reputación y autoridad digital.<br />Empresa registrada en España.</p>
          </div>
          <div>
            <span className="ft-col-label">Servicios</span>
            {[["Protección","/proteccion-reputacion/"],["Autoridad","/autoridad-digital/"],["Blindaje","/monitorizacion-reputacion/"],["Precios","/precios/"]].map(([l,h])=>(
              <Link key={h} href={h} className="ft-link">{l}</Link>
            ))}
          </div>
          <div>
            <span className="ft-col-label">Empresa</span>
            {[["Casos de éxito","/casos-de-exito/"],["Blog","/blog/"],["Sobre nosotros","/sobre-nosotros/"],["Contacto","/contacto/"]].map(([l,h])=>(
              <Link key={h} href={h} className="ft-link">{l}</Link>
            ))}
          </div>
        </div>
        <div className="ft-bottom">
          <p className="ft-copy">© {new Date().getFullYear()} Prestior · Empresa registrada en España</p>
          <div className="ft-legal">
            {[["Aviso legal","/aviso-legal/"],["Privacidad","/privacidad/"],["Cookies","/cookies/"]].map(([l,h])=>(
              <Link key={h} href={h} className="ft-copy" style={{ textDecoration: "none" }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
