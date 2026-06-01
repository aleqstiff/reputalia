import Link from "next/link";

export default function CtaBanner({ 
  title = "¿Qué aparece cuando buscan tu nombre?", 
  sub = "Análisis gratuito. Respuesta en 24 horas. Sin compromiso." 
}: { title?: string; sub?: string }) {
  return (
    <section className="py-16 px-4 relative overflow-hidden" style={{ background: "var(--bg-mid)" }}>
      <div className="orb orb-2" style={{ width: 400, height: 400, top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.25 }} />
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-black text-white mb-3">{title}</h2>
        <p className="text-white/40 mb-7">{sub}</p>
        <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-gold inline-flex">
          Solicitar auditoría gratuita →
        </Link>
        <p className="text-white/25 text-xs mt-3">Sin coste · Sin compromiso · Confidencial</p>
      </div>
    </section>
  );
}
