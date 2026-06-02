import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner({ 
  title = "¿Qué aparece cuando buscan tu nombre?",
  sub = "Análisis gratuito. Respuesta en 24h. Sin compromiso."
}: { title?: string; sub?: string }) {
  return (
    <section className="py-12 md:py-16 px-5 relative overflow-hidden" style={{ background: "var(--bg-2)" }}>
      <div className="aurora-bg" style={{ opacity: 0.2 }} />
      <div className="relative z-10 max-w-xl mx-auto text-center">
        <h2 className="font-display font-black text-white mb-3 text-2xl md:text-3xl">{title}</h2>
        <p className="mb-6 text-sm" style={{ color: "rgba(238,240,244,0.4)", fontWeight: 300 }}>{sub}</p>
        <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-primary inline-flex">
          Auditoría gratuita <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="mt-3 text-xs font-mono-dm" style={{ color: "rgba(238,240,244,0.2)" }}>Sin coste · Sin compromiso · Confidencial</p>
      </div>
    </section>
  );
}
