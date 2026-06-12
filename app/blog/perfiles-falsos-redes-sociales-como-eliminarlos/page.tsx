import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Perfiles Falsos en Redes Sociales: Cómo Eliminarlos 2026 | Prestior",
  description: "Un perfil falso con tu nombre o el de tu empresa puede dañar tu reputación seriamente. Esta guía explica cómo eliminarlo en cada plataforma.",
  keywords: ['perfiles falsos redes sociales', 'eliminar perfil falso instagram', 'cuenta falsa mi nombre', 'suplantacion identidad redes sociales', 'como eliminar perfil falso'],
  alternates: { canonical: "https://prestior.es/blog/perfiles-falsos-redes-sociales-como-eliminarlos/" },
  openGraph: { type: "article", title: "Perfiles Falsos en Redes Sociales: Cómo Eliminarlos 2026 | Prestior", description: "Un perfil falso con tu nombre o el de tu empresa puede dañar tu reputación seriamente. Esta guía explica cómo eliminarlo en cada plataforma.", publishedTime: "2026-06-12" },
};
const schema = {"@context":"https://schema.org","@type":"Article","headline":"Perfiles Falsos en Redes Sociales: Cómo Eliminarlos 2026 | Prestior","description":"Un perfil falso con tu nombre o el de tu empresa puede dañar tu reputación seriamente. Esta guía explica cómo eliminarlo en cada plataforma.","datePublished":"2026-06-12","publisher":{"@type":"Organization","name":"Prestior","url":"https://prestior.es"}};
export default function Page() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
      <Nav />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link href="/blog/" className="text-xs font-mono-dm mb-4 block" style={{color:"rgba(238,240,244,0.3)"}}>&#8592; Blog</Link>
        <p className="text-xs mb-3" style={{color:"rgba(238,240,244,0.3)"}}><time dateTime="2026-06-12">2026-06-12</time> &middot; Prestior</p>
        <h1 className="font-display font-black text-white mb-5 leading-tight" style={{fontSize:"clamp(1.6rem,4vw,2.4rem)"}}>
          Cómo eliminar perfiles falsos en redes sociales
        </h1>
        <p className="text-lg leading-relaxed mb-8 border-l-4 border-amber-400 pl-4" style={{color:"rgba(238,240,244,0.5)"}}>Los perfiles falsos que se hacen pasar por ti o por tu empresa son una amenaza real para tu reputación. Cada plataforma tiene su proceso de eliminación.</p>
        <div className="prose prose-invert max-w-none">
          
          <h2 className="font-display font-bold text-white mt-10 mb-4">Por qué los perfiles falsos son tan dañinos</h2>
          <p className="text-white/60 leading-relaxed">Un perfil falso puede publicar contenido que perjudica tu imagen, engañar a tus clientes o seguidores, distribuir información falsa bajo tu nombre, o simplemente crear confusión que diluye tu presencia digital real. El daño puede ir desde la pérdida de seguidores y engagement hasta consecuencias legales si el perfil falso comete actos ilícitos bajo tu identidad.</p>
          <h2 className="font-display font-bold text-white mt-10 mb-4">El proceso en Instagram y Facebook</h2>
          <p className="text-white/60 leading-relaxed">Meta tiene un formulario específico de reporte por suplantación de identidad disponible en el Centro de Ayuda. Necesitarás: identificar el URL del perfil falso, demostrar que eres la persona real (con tu perfil verificado o documentación), y especificar el tipo de suplantación. Meta responde en 1-7 días hábiles. Si tienes cuenta verificada el proceso es más rápido.</p>
          <h2 className="font-display font-bold text-white mt-10 mb-4">El proceso en LinkedIn</h2>
          <p className="text-white/60 leading-relaxed">LinkedIn es especialmente sensible a los perfiles falsos en contextos profesionales. El reporte se hace desde el perfil falso usando 'Denunciar este perfil' y 'Es información personal de otra persona'. LinkedIn puede tardar hasta 14 días en resolver pero suele eliminar perfiles de suplantación claros rápidamente. Para empresas, también puedes denunciar páginas de empresa falsas.</p>
          <h2 className="font-display font-bold text-white mt-10 mb-4">Qué hacer si las plataformas no actúan</h2>
          <p className="text-white/60 leading-relaxed">Si la plataforma rechaza el reporte o no responde en el plazo prometido, las opciones son: escalar el caso directamente con el equipo de soporte de creadores si tienes acceso, presentar una denuncia ante la Agencia Española de Protección de Datos si hay datos personales involucrados, o consultar con un abogado especializado en derecho digital si el perfil falso está causando daño económico demostrable.</p>
        </div>
        <div className="mt-12 rounded-2xl p-8 text-center" style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)"}}>
          <h3 className="font-display font-black text-white text-xl mb-2">&#191;Necesitas gestionar tu reputaci&oacute;n?</h3>
          <p className="mb-5 text-sm" style={{color:"rgba(238,240,244,0.4)"}}>An&aacute;lisis gratuito sin compromiso. Respuesta en 24 horas.</p>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="inline-flex font-bold px-7 py-3.5 rounded-xl text-sm"
            style={{background:"linear-gradient(135deg,#c9a84c,#e2c36e)",color:"#080f1e"}}>
            An&aacute;lisis gratuito &#8594;
          </Link>
        </div>
        <p className="text-center mt-6">
          <Link href="/blog/" className="text-xs hover:underline" style={{color:"rgba(238,240,244,0.3)"}}>&#8592; Ver todos los art&iacute;culos</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
