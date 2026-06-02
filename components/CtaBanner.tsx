import Link from "next/link";

export default function CtaBanner({ 
  title = "¿Qué aparece cuando buscan tu nombre?",
  sub = "Análisis gratuito. Respuesta en 24h. Sin compromiso."
}: { title?: string; sub?: string }) {
  return (
    <div style={{ background: "#111", borderTop: "1px solid rgba(255,255,255,.07)", borderBottom: "1px solid rgba(255,255,255,.07)", padding: "48px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 540, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem,4vw,2.2rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#f0f0f0", marginBottom: 12 }}>{title}</h2>
        <p style={{ fontSize: 15, color: "rgba(240,240,240,.4)", fontWeight: 300, marginBottom: 28 }}>{sub}</p>
        <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          Auditoría gratuita →
        </Link>
        <p style={{ marginTop: 12, fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(240,240,240,.2)" }}>Sin coste · Sin compromiso · Confidencial</p>
      </div>
    </div>
  );
}
