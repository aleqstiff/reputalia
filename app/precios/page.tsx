import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Precios — Gestión de Reputación Digital",
  description: "Precios transparentes para protección, construcción y blindaje de reputación digital. Paquetes desde 1.490€. Auditoría gratuita sin compromiso.",
  alternates: { canonical: "https://prestior.es/precios/" },
};

export default function PreciosPage() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <header className="py-14 px-4 text-center" >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Precios</h1>
          <p className="text-white/40 text-lg">Transparentes. Sin letras pequeñas. Sin garantías imposibles.</p>
        </div>
      </header>
      <section className="py-8 md:py-16 px-5">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* SILO 1 */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-black text-white">Protección</h2>
              <p className=" mt-1">Eliminar lo que te daña. Cobras análisis + gestión, no el resultado.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.07]">
                    <th className="text-left py-3 text-xs font-mono-dm font-semibold uppercase tracking-wider" style={{color:"rgba(238,240,244,0.3)"}}>Servicio</th>
                    <th className="text-right py-3 text-xs font-mono-dm font-semibold uppercase tracking-wider" style={{color:"rgba(238,240,244,0.3)"}}>Precio</th>
                    <th className="text-right py-3 text-xs font-mono-dm font-semibold uppercase tracking-wider" style={{color:"rgba(238,240,244,0.3)"}}>Plazo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    ["Auditoría + análisis de caso", "97€–197€", "24-48h", "/monitorizacion-reputacion/auditoria-reputacion-online/"],
                    ["Difamación y calumnias online", "690€–1.490€", "2-8 semanas", "/proteccion-reputacion/difamacion-online/"],
                    ["Derecho al olvido en Google", "690€–1.490€", "3-8 semanas", "/proteccion-reputacion/derecho-al-olvido/"],
                    ["Eliminar noticias en Google", "890€–1.490€", "3-10 semanas", "/proteccion-reputacion/eliminar-noticias-google/"],
                    ["Suplantación de identidad", "690€–1.490€", "48h–3 semanas", "/proteccion-reputacion/suplantacion-identidad/"],
                    ["Cuenta falsa Instagram / TikTok", "490€–890€", "48h–2 semanas", "/proteccion-reputacion/eliminar-cuenta-falsa-instagram/"],
                    ["Contenido íntimo filtrado", "890€+", "Urgente", "/proteccion-reputacion/contenido-intimo-filtrado/"],
                    ["OnlyFans / DMCA", "890€+", "1-4 semanas", "/proteccion-reputacion/eliminar-contenido-onlyfans/"],
                    ["Reseñas falsas Google", "99€/reseña", "7-30 días", "/proteccion-reputacion/eliminar-resenas-falsas/"],
                  ].map(([s,p,t,h]) => (
                    <tr key={s}>
                      <td className="py-3.5"><Link href={h} className="text-white/80 hover:opacity-100 font-medium hover:underline">{s}</Link></td>
                      <td className="py-3.5 text-right font-semibold text-white">{p}</td>
                      <td className="py-3.5 text-right ">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SILO 2 */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-black text-white">Autoridad</h2>
              <p className=" mt-1">Construir presencia. Servicios sueltos o paquetes completos.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.07]">
                    <th className="text-left py-3 text-xs font-mono-dm font-semibold uppercase tracking-wider" style={{color:"rgba(238,240,244,0.3)"}}>Servicio</th>
                    <th className="text-right py-3 text-xs font-mono-dm font-semibold uppercase tracking-wider" style={{color:"rgba(238,240,244,0.3)"}}>Precio</th>
                    <th className="text-right py-3 text-xs font-mono-dm font-semibold uppercase tracking-wider" style={{color:"rgba(238,240,244,0.3)"}}>Plazo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    ["Knowledge Panel Empresa", "390€–490€", "4-8 semanas", "/autoridad-digital/knowledge-panel-google/"],
                    ["Knowledge Panel Personal", "790€–890€", "4-8 semanas", "/autoridad-digital/knowledge-panel-google/"],
                    ["Pack wikis de autoridad", "1.490€", "3-6 semanas", "/autoridad-digital/wikipedia-perfil/"],
                    ["Forbes Argentina (editorial)", "2.900€–3.490€", "6-12 semanas", "/autoridad-digital/aparecer-en-forbes/"],
                    ["Pack medios top internacionales", "6.900€–7.900€", "8-16 semanas", "/autoridad-digital/salir-en-prensa/"],
                    ["Marca personal en Google", "Desde 1.490€", "3-6 meses", "/autoridad-digital/marca-personal-google/"],
                    ["Verificación de perfiles", "Consultar", "Variable", "/autoridad-digital/verificacion-perfiles/"],
                  ].map(([s,p,t,h]) => (
                    <tr key={s}>
                      <td className="py-3.5"><Link href={h} className="text-white/80 hover:opacity-100 font-medium hover:underline">{s}</Link></td>
                      <td className="py-3.5 text-right font-semibold text-white">{p}</td>
                      <td className="py-3.5 text-right ">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PAQUETES */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-black text-white">Paquetes combinados</h2>
              <p className=" mt-1">Donde está el margen real. Enseña los tres y el cliente elige el del medio.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { n:"PRESENCIA", p:"1.490€", d:"Para quienes quieren aparecer bien en Google.", i:["Knowledge Panel personal","1-2 medios de entrada","Optimización nombre en Google"] },
                { n:"AUTORIDAD", p:"3.900€", d:"El más vendido. Autoridad real y duradera.", i:["Knowledge Panel personal","Pack wikis de autoridad","Forbes Argentina (editorial)","Posicionamiento de marca","Informe mensual"], top:true },
                { n:"DOMINIO", p:"9.900€", d:"Para dominar tu espacio digital.", i:["Todo lo de AUTORIDAD","Pack medios top internacionales","Gestión continua 3 meses","Estrategia personalizada"] },
              ].map(({n,p,d,i,top}) => (
                <div key={n} className={`rounded-2xl border p-6 ${top ? "border-stone-900 shadow-md" : "border-white/[0.07]"}`}>
                  {top && <div className="text-xs font-bold text-center py-1 mb-4 rounded-full" style={{background:"#0f1729", color:"#c9a84c"}}>★ Más contratado</div>}
                  <p className="text-xs font-mono text-white/30 mb-1">{n}</p>
                  <div className="text-2xl font-black text-white mb-2">{p}</div>
                  <p className="text-sm  mb-4">{d}</p>
                  <ul className="space-y-2">
                    {i.map(item => <li key={item} className="flex items-start gap-2 text-xs text-white/80"><Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* BLINDAJE */}
          <div className="card p-8">
            <h2 className="text-2xl font-black text-white mb-2">Blindaje mensual</h2>
            <p className=" mb-6">Se vende siempre después de entregar. "Para que no pierdas lo que acabamos de construir."</p>
            <div className="text-3xl font-black text-white mb-2">197€–490€/mes</div>
            <p className="text-sm ">Según nivel de cobertura. Cancelable con 30 días de preaviso.</p>
          </div>

          <p className="text-center text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>Precios orientativos. Presupuesto personalizado tras análisis gratuito. IVA no incluido si aplica.</p>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
