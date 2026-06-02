import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = { title: "Aviso Legal — Prestior", robots: { index: false } };
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-black text-white mb-6">Aviso Legal</h1>
        <div className="prose prose-invert prose-sm">
          <p>Información legal de Prestior conforme al artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información.</p>
          <p>Para cualquier consulta sobre esta política, contacta con nosotros en <a href="mailto:legal@prestior.es">legal@prestior.es</a>.</p>
          <p className="text-white/30 text-xs mt-8">Última actualización: junio 2026</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
