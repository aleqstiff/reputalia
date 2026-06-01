import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = { title: "Política de Cookies — Prestior", robots: { index: false } };
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-black text-stone-900 mb-6">Política de Cookies</h1>
        <div className="prose prose-stone prose-sm">
          <p>Información sobre las cookies utilizadas en este sitio web conforme a la normativa española y europea.</p>
          <p>Para cualquier consulta sobre esta política, contacta con nosotros en <a href="mailto:legal@prestior.es">legal@prestior.es</a>.</p>
          <p className="text-stone-400 text-xs mt-8">Última actualización: junio 2026</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
