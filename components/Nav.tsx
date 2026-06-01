"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const MENU = [
  {
    label: "Protección",
    href: "/proteccion-reputacion/",
    items: [
      { label: "Difamación online", href: "/proteccion-reputacion/difamacion-online/" },
      { label: "Derecho al olvido", href: "/proteccion-reputacion/derecho-al-olvido/" },
      { label: "Noticias negativas", href: "/proteccion-reputacion/eliminar-noticias-google/" },
      { label: "Suplantación de identidad", href: "/proteccion-reputacion/suplantacion-identidad/" },
      { label: "Contenido íntimo filtrado", href: "/proteccion-reputacion/contenido-intimo-filtrado/" },
      { label: "Reseñas falsas Google", href: "/proteccion-reputacion/eliminar-resenas-falsas/" },
    ],
  },
  {
    label: "Autoridad",
    href: "/autoridad-digital/",
    items: [
      { label: "Knowledge Panel Google", href: "/autoridad-digital/knowledge-panel-google/" },
      { label: "Aparecer en Forbes", href: "/autoridad-digital/aparecer-en-forbes/" },
      { label: "Salir en prensa", href: "/autoridad-digital/salir-en-prensa/" },
      { label: "Marca personal en Google", href: "/autoridad-digital/marca-personal-google/" },
      { label: "Reputación en IA (GEO)", href: "/autoridad-digital/reputacion-ia-geo/" },
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
  { label: "Resultados", href: "/casos-de-exito/", items: [] },
  { label: "Precios", href: "/precios/", items: [] },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "nav-glass shadow-lg shadow-black/20" : "bg-transparent border-b border-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1a2540, #0f1729)", border: "1px solid rgba(201,168,76,0.3)" }}>
            <span className="text-sm font-black gradient-text">P</span>
          </div>
          <span className="font-black text-lg text-white tracking-tight">Prestior</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {MENU.map(item => (
            <div key={item.label} className="relative"
              onMouseEnter={() => item.items.length ? setActive(item.label) : null}
              onMouseLeave={() => setActive(null)}>
              <Link href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                {item.label}
                {item.items.length > 0 && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
              </Link>
              {item.items.length > 0 && active === item.label && (
                <div className="absolute top-full left-0 mt-2 glass-strong py-2 min-w-52 z-50 shadow-2xl shadow-black/40">
                  {item.items.map(sub => (
                    <Link key={sub.href} href={sub.href}
                      className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/contacto/" className="text-sm text-white/60 hover:text-white transition-colors font-medium">Contacto</Link>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-gold text-sm">
            Auditoría gratuita
          </Link>
        </div>

        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden nav-glass border-t border-white/5 px-4 py-4 space-y-1">
          {MENU.map(item => (
            <div key={item.label}>
              <Link href={item.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-white">{item.label}</Link>
              {item.items.map(sub => (
                <Link key={sub.href} href={sub.href} onClick={() => setOpen(false)} className="block py-1.5 pl-4 text-sm text-white/50 hover:text-white/80">{sub.label}</Link>
              ))}
            </div>
          ))}
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" onClick={() => setOpen(false)} className="btn-gold block mt-3 text-center text-sm">Auditoría gratuita</Link>
        </div>
      )}
    </nav>
  );
}
