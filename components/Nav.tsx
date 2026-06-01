"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const MENU = [
  {
    label: "Protección",
    href: "/proteccion-reputacion/",
    items: [
      { label: "Difamación online", href: "/proteccion-reputacion/difamacion-online/" },
      { label: "Derecho al olvido", href: "/proteccion-reputacion/derecho-al-olvido/" },
      { label: "Eliminar noticias en Google", href: "/proteccion-reputacion/eliminar-noticias-google/" },
      { label: "Suplantación de identidad", href: "/proteccion-reputacion/suplantacion-identidad/" },
      { label: "Cuenta falsa Instagram", href: "/proteccion-reputacion/eliminar-cuenta-falsa-instagram/" },
      { label: "Contenido íntimo filtrado", href: "/proteccion-reputacion/contenido-intimo-filtrado/" },
      { label: "OnlyFans / DMCA", href: "/proteccion-reputacion/eliminar-contenido-onlyfans/" },
      { label: "Reseñas falsas", href: "/proteccion-reputacion/eliminar-resenas-falsas/" },
    ],
  },
  {
    label: "Autoridad",
    href: "/autoridad-digital/",
    items: [
      { label: "Salir en prensa", href: "/autoridad-digital/salir-en-prensa/" },
      { label: "Aparecer en Forbes", href: "/autoridad-digital/aparecer-en-forbes/" },
      { label: "Knowledge Panel Google", href: "/autoridad-digital/knowledge-panel-google/" },
      { label: "Marca personal en Google", href: "/autoridad-digital/marca-personal-google/" },
      { label: "Verificación de perfiles", href: "/autoridad-digital/verificacion-perfiles/" },
    ],
  },
  {
    label: "Blindaje",
    href: "/monitorizacion-reputacion/",
    items: [
      { label: "Monitorización continua", href: "/monitorizacion-reputacion/proteccion-continua-marca/" },
      { label: "Auditoría gratuita", href: "/monitorizacion-reputacion/auditoria-reputacion-online/" },
    ],
  },
  { label: "Casos de éxito", href: "/casos-de-exito/", items: [] },
  { label: "Precios", href: "/precios/", items: [] },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#0f1729" }}>
            <span className="text-xs font-black" style={{ color: "#c9a84c" }}>R</span>
          </div>
          <span className="font-black text-lg" style={{ color: "#0f1729" }}>Reputalia</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {MENU.map(item => (
            <div key={item.label} className="relative"
              onMouseEnter={() => item.items.length ? setActive(item.label) : null}
              onMouseLeave={() => setActive(null)}>
              <Link href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition rounded-lg hover:bg-stone-50">
                {item.label}
                {item.items.length > 0 && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
              {item.items.length > 0 && active === item.label && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-stone-200 rounded-xl shadow-xl py-2 min-w-56 z-50">
                  {item.items.map(sub => (
                    <Link key={sub.href} href={sub.href}
                      className="block px-4 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/contacto/" className="text-sm text-stone-600 hover:text-stone-900 transition font-medium">Contacto</Link>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition"
            style={{ background: "#0f1729" }}>
            Auditoría gratuita
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden border-t border-stone-100 bg-white px-4 py-4 space-y-1">
          {MENU.map(item => (
            <div key={item.label}>
              <Link href={item.href} onClick={() => setOpen(false)}
                className="block py-2 text-sm font-semibold text-stone-800">{item.label}</Link>
              {item.items.map(sub => (
                <Link key={sub.href} href={sub.href} onClick={() => setOpen(false)}
                  className="block py-1.5 pl-4 text-sm text-stone-500">{sub.label}</Link>
              ))}
            </div>
          ))}
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            onClick={() => setOpen(false)}
            className="block mt-3 text-center py-2.5 text-sm font-semibold text-white rounded-lg"
            style={{ background: "#0f1729" }}>
            Auditoría gratuita
          </Link>
        </div>
      )}
    </nav>
  );
}
