import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
export const metadata: Metadata = { title: "Eliminar Noticias Negativas en Google — Prestior", description: "Eliminar Noticias Negativas en Google. Gestión profesional, contrato legal previo, análisis gratuito.", alternates: { canonical: "https://prestior.es/proteccion-reputacion/eliminar-noticias-google//" } };
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> › <Link href="/proteccion-reputacion/" className="hover:text-white/70 transition-colors">Protección de reputación</Link> › <span className="text-white/80">Eliminar Noticias Negativas en Google</span>
      </nav>
      <header className="py-14 px-4 text-center" style={{background:"var(--bg-2)"}}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-black text-white mb-4">Eliminar Noticias Negativas en Google</h1>
          <p className="text-white/40 mb-6">Gestión profesional por las vías legales correctas. Análisis gratuito previo.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-primary inline-flex">Auditoría gratuita →</Link>
        </div>
      </header>
      <CtaBanner />
      <Footer />
    </div>
  );
}
