import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de Éxito — Prestior",
  description: "Casos reales de gestión de reputación digital. Difamaciones retiradas, Knowledge Panels creados, apariciones en Forbes. Sin humo.",
  alternates: { canonical: "https://prestior.es/casos-de-exito/" },
};

const CASOS = [
  { cat:"Protección", titulo:"CEO con artículo difamatorio en top 1 de Google", desc:"Un competidor publicó un artículo falso en un blog de alta autoridad que llevaba 3 años en el primer resultado cuando buscaban el nombre del CEO. Solicitamos la desindexación combinada con derecho al olvido. Resuelto en 4 semanas.", resultado:"Desindexado · Top 1 ahora = LinkedIn oficial", tiempo:"4 semanas" },
  { cat:"Autoridad", titulo:"Coach sin presencia que necesitaba lanzar su infoproducto", desc:"Cero presencia en Google, sin Knowledge Panel, sin menciones en medios. Construimos el pack AUTORIDAD completo antes del lanzamiento. El lanzamiento generó €80K en ventas.", resultado:"Knowledge Panel activo · Forbes editorial · 3 medios nacionales", tiempo:"10 semanas" },
  { cat:"Protección", titulo:"Influencer de 180K con cuenta falsa activa", desc:"Una cuenta falsa con sus fotos llevaba 2 meses activa en Instagram acumulando seguidores y enviando DMs fraudulentos a su audiencia. Retirada en 48 horas.", resultado:"Cuenta falsa eliminada en 48h", tiempo:"48 horas" },
  { cat:"Autoridad", titulo:"Directiva de multinacional — perfil en Google", desc:"Búsqueda de su nombre devolvía resultados irrelevantes y desactualizados. Construimos Knowledge Panel personal + pack wikis + 2 artículos en medios. Ahora controla su narrativa.", resultado:"Knowledge Panel · 2 apariciones en prensa · Perfil limpio", tiempo:"8 semanas" },
  { cat:"Protección", titulo:"Clínica dental atacada con reseñas falsas coordinadas", desc:"12 reseñas de 1 estrella publicadas en 48 horas por cuentas nuevas, claramente coordinadas. Eran de personas que nunca habían sido pacientes. 10 de las 12 eliminadas.", resultado:"10 de 12 reseñas eliminadas · Rating recuperado", tiempo:"3 semanas" },
  { cat:"Blindaje", titulo:"Empresa SaaS — monitorización continua desde lanzamiento", desc:"Configuramos el sistema de alertas desde el primer día. En el mes 3 detectamos una mención negativa en un foro de autoridad antes de que se indexara. Gestionada antes de llegar a Google.", resultado:"0 incidencias consolidadas en 18 meses de cobertura", tiempo:"Continuo" },
];

export default function CasosPage() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <header className="py-14 px-4 text-center" style={{background:"var(--bg-2)"}}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Casos de éxito</h1>
          <p className="text-slate-400 text-lg">Resultados reales. Sin humo, sin promesas imposibles.</p>
        </div>
      </header>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
          {CASOS.map((c, i) => (
            <div key={i} className="card p-6">
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3" style={{background:"#0f172911", color:"#0f1729"}}>{c.cat}</span>
              <h3 className="font-bold text-white mb-2">{c.titulo}</h3>
              <p className="text-sm  mb-4 leading-relaxed">{c.desc}</p>
              <div className="border-t border-white/[0.07] pt-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">{c.resultado}</span>
                <span className="text-xs font-mono-dm" style={{color:"rgba(238,240,244,0.3)"}}>⏱ {c.tiempo}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs font-mono-dm mt-8" style={{color:"rgba(238,240,244,0.3)"}}>Los datos de los clientes se muestran de forma anonimizada con su consentimiento.</p>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
