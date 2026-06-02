import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
export const metadata: Metadata = { title: "Reputación Digital para Directivos y CEOs — Prestior", description: "Reputación Digital para Directivos y CEOs. Gestión profesional, contrato legal previo, análisis gratuito.", alternates: { canonical: "https://prestior.es/autoridad-digital/reputacion-para-directivos//" } };
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>
        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link> › <Link href="/autoridad-digital/" className="hover:text-white/70 transition-colors">Autoridad digital</Link> › <span className="text-white/80">Reputación Digital para Directivos y CEOs</span>
      </nav>
      <header className="py-14 px-4 text-center" style={{background:"var(--bg-2)"}}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-black text-white mb-4">Reputación Digital para Directivos y CEOs</h1>
          <p className="text-white/40 mb-6">Gestión profesional por las vías legales correctas. Análisis gratuito previo.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-primary inline-flex">Auditoría gratuita →</Link>
        </div>
      </header>
      <CtaBanner />
      <Footer />
    </div>
  );
}
