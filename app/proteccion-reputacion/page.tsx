import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { Shield, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Protección de Reputación Digital — Eliminar Contenido Dañino",
  description: "Eliminamos difamación, desindexamos noticias negativas, gestionamos el derecho al olvido y retiramos contenido ilícito. Proceso legal, resultados reales.",
  alternates: { canonical: "https://prestior.es/proteccion-reputacion/" },
};

const schema = {"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://prestior.es","name":"Prestior","description":"Agencia de protección de reputación digital","areaServed":{"@type":"Country","name":"ES"},"address":{"@type":"PostalAddress","addressCountry":"ES"}};

const SERVICIOS = [
  { titulo:"Difamación y calumnias online", desc:"Eliminamos contenido difamatorio de webs, foros y redes sociales mediante vías legales.", href:"/proteccion-reputacion/difamacion-online/", precio:"Desde 690€" },
  { titulo:"Derecho al olvido en Google", desc:"Desindexamos resultados obsoletos, irrelevantes o perjudiciales de los resultados de búsqueda.", href:"/proteccion-reputacion/derecho-al-olvido/", precio:"Desde 690€" },
  { titulo:"Eliminar noticias negativas en Google", desc:"Gestionamos la desindexación de noticias que siguen apareciendo aunque sean antiguas o incorrectas.", href:"/proteccion-reputacion/eliminar-noticias-google/", precio:"Desde 890€" },
  { titulo:"Suplantación de identidad", desc:"Retiramos cuentas, webs y perfiles que se hacen pasar por ti o tu marca.", href:"/proteccion-reputacion/suplantacion-identidad/", precio:"Desde 690€" },
  { titulo:"Cuenta falsa en Instagram / TikTok", desc:"Baja de perfiles falsos en redes sociales que usan tu imagen o nombre.", href:"/proteccion-reputacion/eliminar-cuenta-falsa-instagram/", precio:"Desde 490€" },
  { titulo:"Contenido íntimo filtrado", desc:"Gestión urgente de retirada de fotos o vídeos íntimos publicados sin consentimiento.", href:"/proteccion-reputacion/contenido-intimo-filtrado/", precio:"Desde 890€" },
  { titulo:"OnlyFans y DMCA", desc:"Retirada de contenido de OnlyFans, foros y agregadores mediante proceso DMCA.", href:"/proteccion-reputacion/eliminar-contenido-onlyfans/", precio:"Desde 890€" },
  { titulo:"Web o blog falso difamatorio", desc:"Baja de sitios web que publican contenido falso o dañino sobre ti.", href:"/proteccion-reputacion/eliminar-web-falsa/", precio:"Desde 890€" },
  { titulo:"DMCA — eliminación de copyright", desc:"Retirada de contenido protegido por copyright publicado sin autorización.", href:"/proteccion-reputacion/dmca-eliminacion-contenido/", precio:"Desde 490€" },
  { titulo:"Reseñas falsas o ilegítimas", desc:"Gestión de retirada de reseñas que violan las políticas de Google o son claramente falsas.", href:"/proteccion-reputacion/eliminar-resenas-falsas/", precio:"Desde 99€/reseña" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://prestior.es/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Protecci\u00f3n de reputaci\u00f3n\", \"item\": \"https://prestior.es/proteccion-reputacion/\"}]}"}} />
      
      
      
      
      <nav className="max-w-6xl mx-auto px-4 py-3 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">Inicio</Link> › <span className="text-stone-700">Protección de reputación</span>
      </nav>
      <header className="py-16 px-4 text-center" style={{background:"#0f1729"}}>
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{background:"#c9a84c22"}}>
            <Shield className="w-6 h-6" style={{color:"#c9a84c"}} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Protección de reputación digital</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">Eliminamos contenido dañino por las vías legales correctas. Difamación, suplantaciones, derechos al olvido, contenido íntimo filtrado y reseñas falsas.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-7 py-3.5 rounded-xl text-sm"
            style={{background:"#c9a84c", color:"#0f1729"}}>
            Auditoría gratuita →
          </Link>
        </div>
      </header>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {SERVICIOS.map(s => (
              <Link key={s.href} href={s.href} className="flex gap-4 p-5 bg-stone-50 rounded-2xl border border-stone-200 hover:border-stone-400 hover:shadow-sm transition group">
                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-stone-400 group-hover:text-stone-700 transition" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-stone-900 text-sm">{s.titulo}</h3>
                    <span className="text-xs text-stone-500 flex-shrink-0 ml-2">{s.precio}</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
