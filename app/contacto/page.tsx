import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contacto — Prestior",
  description: "Contacta con Prestior para gestionar tu reputación digital. WhatsApp, email y formulario. Respuesta en menos de 24 horas.",
  alternates: { canonical: "https://prestior.es/contacto/" },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen" style={{background:"var(--bg)"}}>
      <Nav />
      <header className="py-14 px-4 text-center" >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-black text-white mb-3">Contacto</h1>
          <p className="text-white/40">Cuéntanos tu situación. Respuesta en menos de 24 horas.</p>
        </div>
      </header>
      <section className="py-8 md:py-16 px-5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-bold text-white text-xl mb-6">Háblanos directamente</h2>
            <div className="space-y-4">
              <a href="https://wa.me/34684115988?text=Hola, me interesa la gestión de reputación digital"
                target="_blank" rel="noopener"
                className="flex items-center gap-4 p-5 bg-green-500/5 border border-green-200 rounded-2xl hover:border-green-400 transition">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="text-sm ">Respuesta inmediata en horario laboral</p>
                </div>
              </a>
              <a href="mailto:hola@prestior.es"
                className="flex items-center gap-4 p-5 bg-white/5 border border-white/[0.07] rounded-2xl hover:border-white/30 transition">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm ">hola@prestior.es</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-display font-bold text-white text-xl mb-6">O cuéntanos por escrito</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Nombre" className="input-dark" />
              <input type="email" placeholder="Email" className="input-dark" />
              <select className="input-dark">
                <option value="">¿Qué necesitas?</option>
                <option>Eliminar contenido dañino</option>
                <option>Construir autoridad y presencia</option>
                <option>Monitorización continua</option>
                <option>Paquete completo</option>
                <option>No lo sé, necesito orientación</option>
              </select>
              <textarea rows={4} placeholder="Cuéntanos tu situación..." className="input-dark" />
              <a href="mailto:hola@prestior.es?subject=Consulta desde la web"
                className="btn-primary w-full justify-center">
                Enviar consulta →
              </a>
              <p className="text-xs font-mono-dm text-center" style={{color:"rgba(238,240,244,0.3)"}}>Respuesta en menos de 24h · Sin compromiso</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
