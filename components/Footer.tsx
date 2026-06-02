import Link from "next/link";

const C = { bg: "#020509", t1: "#eef0f4", t3: "rgba(238,240,244,0.3)", t4: "rgba(238,240,244,0.15)", bdr: "rgba(255,255,255,0.07)", gold: "#c9a84c" };

export default function Footer() {
  return (
    <footer style={{ background: C.bg, borderTop: `1px solid ${C.bdr}` }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, marginBottom: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ width: 4, height: 20, background: C.gold, borderRadius: 2 }} />
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: C.t1 }}>Prestior</span>
            </div>
            <p style={{ fontSize: 13, color: C.t3, lineHeight: 1.65, fontWeight: 300 }}>
              Firma de reputación y autoridad digital. Empresa registrada en España.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: C.t4, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Servicios</p>
            {[["Protección","/proteccion-reputacion/"],["Autoridad","/autoridad-digital/"],["Blindaje","/monitorizacion-reputacion/"],["Precios","/precios/"]].map(([l,h]) => (
              <Link key={h} href={h} style={{ display: "block", fontSize: 13, color: C.t3, textDecoration: "none", marginBottom: 8 }}>{l}</Link>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: C.t4, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Empresa</p>
            {[["Casos de éxito","/casos-de-exito/"],["Blog","/blog/"],["Sobre nosotros","/sobre-nosotros/"],["Contacto","/contacto/"]].map(([l,h]) => (
              <Link key={h} href={h} style={{ display: "block", fontSize: 13, color: C.t3, textDecoration: "none", marginBottom: 8 }}>{l}</Link>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.bdr}`, paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 16 }}>
          <p style={{ fontSize: 12, color: C.t4, fontFamily: "'DM Mono', monospace" }}>© {new Date().getFullYear()} Prestior · Empresa registrada en España</p>
          <div style={{ display: "flex", gap: 20 }}>
            {[["Aviso legal","/aviso-legal/"],["Privacidad","/privacidad/"],["Cookies","/cookies/"]].map(([l,h]) => (
              <Link key={h} href={h} style={{ fontSize: 12, color: C.t4, textDecoration: "none", fontFamily: "'DM Mono', monospace" }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
