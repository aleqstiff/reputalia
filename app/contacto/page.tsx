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
    <div className="min-h-screen bg-white">
      <Nav />
      <header className="py-14 px-4 text-center" style={{background:"#0f1729"}}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-black text-white mb-3">Contacto</h1>
          <p className="text-slate-400">Cuéntanos tu situación. Respuesta en menos de 24 horas.</p>
        </div>
      </header>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-stone-900 mb-6">Háblanos directamente</h2>
            <div className="space-y-4">
              <a href="https://wa.me/34684115988?text=Hola, me interesa la gestión de reputación digital"
                target="_blank" rel="noopener"
                className="flex items-center gap-4 p-5 bg-green-50 border border-green-200 rounded-2xl hover:border-green-400 transition">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-semibold text-stone-900">WhatsApp</p>
                  <p className="text-sm text-stone-500">Respuesta inmediata en horario laboral</p>
                </div>
              </a>
              <a href="mailto:hola@prestior.es"
                className="flex items-center gap-4 p-5 bg-stone-50 border border-stone-200 rounded-2xl hover:border-stone-400 transition">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-stone-900">Email</p>
                  <p className="text-sm text-stone-500">hola@prestior.es</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-stone-900 mb-6">O cuéntanos por escrito</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Nombre" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-stone-500" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-stone-500" />
              <select className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-stone-500 bg-white">
                <option value="">¿Qué necesitas?</option>
                <option>Eliminar contenido dañino</option>
                <option>Construir autoridad y presencia</option>
                <option>Monitorización continua</option>
                <option>Paquete completo</option>
                <option>No lo sé, necesito orientación</option>
              </select>
              <textarea rows={4} placeholder="Cuéntanos tu situación..." className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-stone-500 resize-none" />
              <a href="mailto:hola@prestior.es?subject=Consulta desde la web"
                className="block text-center py-3.5 rounded-xl font-bold text-sm"
                style={{background:"#0f1729", color:"white"}}>
                Enviar consulta →
              </a>
              <p className="text-xs text-stone-400 text-center">Respuesta en menos de 24h · Sin compromiso</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
