import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Prestior",
  description: "Prestior es una agencia especializada en reputación y autoridad digital. Empresa registrada en España. Transparencia, honestidad y contratos legales previos.",
  alternates: { canonical: "https://prestior.es/sobre-nosotros/" },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <header className="py-14 px-4 text-center" style={{background:"#0f1729"}}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-black text-white mb-3">Sobre Prestior</h1>
          <p className="text-slate-400 text-lg">Lo que nos hace diferentes no es lo que hacemos — es cómo lo decimos.</p>
        </div>
      </header>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-stone prose-sm">
          <p className="text-lg text-stone-700 leading-relaxed">Prestior es una agencia especializada en la gestión integral de la reputación digital. Trabajamos con profesionales, directivos, marcas personales y empresas que necesitan proteger o construir su presencia online.</p>
          <h2>Nuestra filosofía</h2>
          <p>En un sector lleno de promesas imposibles y garantías que nadie puede cumplir, operamos de forma diferente. Antes de cobrar nada, te decimos exactamente qué es viable, qué no y por qué. Si Forbes Argentina no es Forbes global, lo decimos. Si un wiki de autoridad no es Wikipedia, lo explicamos. Si el derecho al olvido no borra el contenido sino que lo desindexar, lo aclaramos.</p>
          <p>Esta honestidad nos ha costado alguna venta. También nos ha generado la mayoría de nuestros clientes recurrentes.</p>
          <h2>Cómo operamos</h2>
          <ul>
            {["Contrato legal antes de empezar — siempre", "Análisis gratuito previo — sin compromiso", "Dos proveedores por servicio mínimo — para no depender de uno solo", "Transparencia sobre costes y márgenes cuando el cliente lo pide", "Retainer solo después de entregar — nunca al principio"].map(i => <li key={i}>{i}</li>)}
          </ul>
          <h2>Marco legal</h2>
          <p>Empresa registrada en España. CIF disponible bajo solicitud. Actividad 100% legal: todas nuestras gestiones se realizan por las vías legales establecidas — denuncias oficiales, DMCA, RGPD, AEPD. Nunca trabajamos con contenido verídico y legítimo, ni ofrecemos servicios de censura de contenido legal.</p>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}
