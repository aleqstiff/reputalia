import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
export const metadata: Metadata = { title: "Autoridad Digital para Coaches e Infoproductores — Prestior", description: "Autoridad Digital para Coaches e Infoproductores. Gestión profesional, contrato legal previo, análisis gratuito.", alternates: { canonical: "https://prestior.es/autoridad-digital/autoridad-para-coaches//" } };
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> › <Link href="/autoridad-digital/" className="hover:text-white/70 transition-colors">Autoridad digital</Link> › <span className="text-white/80">Autoridad Digital para Coaches e Infoproductores</span>
      </nav>
      <header className="py-14 px-4 text-center" >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-black text-white mb-4">Autoridad Digital para Coaches e Infoproductores</h1>
          <p className="text-white/40 mb-6">Gestión profesional por las vías legales correctas. Análisis gratuito previo.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-primary inline-flex">Auditoría gratuita →</Link>
        </div>
      </header>
      <CtaBanner />
      <Footer />
    </div>
  );
}
