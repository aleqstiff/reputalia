import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Reputación Digital",
  description: "Artículos sobre gestión de reputación digital, derecho al olvido, autoridad digital y protección online.",
  alternates: { canonical: "https://prestior.es/blog/" },
};

const POSTS = [
  { slug:"que-hacer-si-me-difaman-en-internet", titulo:"Qué hacer si te difaman en internet: guía práctica 2026", cat:"Protección", fecha:"Jun 2026" },
  { slug:"como-funciona-derecho-al-olvido-google", titulo:"Cómo funciona el derecho al olvido en Google", cat:"Protección", fecha:"Jun 2026" },
  { slug:"que-es-el-knowledge-panel-google", titulo:"Qué es el Knowledge Panel de Google y cómo conseguirlo", cat:"Autoridad", fecha:"Jun 2026" },
  { slug:"como-salir-en-prensa-sin-ser-famoso", titulo:"Cómo salir en prensa siendo un desconocido (guía honesta)", cat:"Autoridad", fecha:"Jun 2026" },
  { slug:"como-monitorizar-tu-reputacion-online", titulo:"Cómo monitorizar tu reputación online en 2026", cat:"Blindaje", fecha:"Jun 2026" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <header className="py-14 px-4 text-center" style={{background:"#0f1729"}}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-black text-white mb-3">Blog</h1>
          <p className="text-slate-400">Guías honestas sobre reputación digital, autoridad y protección online.</p>
        </div>
      </header>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {POSTS.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}/`}
              className="flex items-start gap-4 p-5 bg-stone-50 rounded-2xl border border-stone-200 hover:border-stone-400 transition">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{background:"#0f172911", color:"#0f1729"}}>{p.cat}</span>
                  <span className="text-xs text-stone-400">{p.fecha}</span>
                </div>
                <h2 className="font-semibold text-stone-900 text-sm leading-snug">{p.titulo}</h2>
              </div>
              <span className="text-stone-400 flex-shrink-0">→</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
