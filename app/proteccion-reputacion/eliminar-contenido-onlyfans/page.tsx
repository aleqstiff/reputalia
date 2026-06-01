import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
export const metadata: Metadata = { title: "Eliminar Contenido OnlyFans — DMCA — Reputalia", description: "Eliminar Contenido OnlyFans — DMCA. Gestión profesional, contrato legal previo, análisis gratuito.", alternates: { canonical: "https://reputalia.es/proteccion-reputacion/eliminar-contenido-onlyfans//" } };
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">Inicio</Link> › <Link href="/proteccion-reputacion/" className="hover:text-stone-600">Protección de reputación</Link> › <span className="text-stone-700">Eliminar Contenido OnlyFans — DMCA</span>
      </nav>
      <header className="py-14 px-4 text-center" style={{background:"#0f1729"}}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-black text-white mb-4">Eliminar Contenido OnlyFans — DMCA</h1>
          <p className="text-slate-400 mb-6">Gestión profesional por las vías legales correctas. Análisis gratuito previo.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="inline-flex font-bold px-7 py-3.5 rounded-xl text-sm" style={{background:"#c9a84c", color:"#0f1729"}}>Auditoría gratuita →</Link>
        </div>
      </header>
      <CtaBanner />
      <Footer />
    </div>
  );
}
