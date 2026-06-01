import Link from "next/link";

export default function CtaBanner({ title = "¿Qué aparece cuando buscan tu nombre en Google?", sub = "Haz la prueba ahora mismo y te enviamos un análisis gratuito en 24 horas." }: { title?: string; sub?: string }) {
  return (
    <section className="py-16 px-4" style={{ background: "#0f1729" }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{title}</h2>
        <p className="text-slate-400 mb-8">{sub}</p>
        <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
          className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition text-sm"
          style={{ background: "#c9a84c", color: "#0f1729" }}>
          Solicitar auditoría gratuita →
        </Link>
        <p className="text-slate-500 text-xs mt-4">Sin coste · Respuesta en 24h · Sin compromiso</p>
      </div>
    </section>
  );
}
