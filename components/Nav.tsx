"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const MENU = [
  { label: "Protección", href: "/proteccion-reputacion/", items: [
      { label: "Difamación online", href: "/proteccion-reputacion/difamacion-online/" },
      { label: "Derecho al olvido", href: "/proteccion-reputacion/derecho-al-olvido/" },
      { label: "Noticias negativas", href: "/proteccion-reputacion/eliminar-noticias-google/" },
      { label: "Suplantación de identidad", href: "/proteccion-reputacion/suplantacion-identidad/" },
      { label: "Contenido íntimo filtrado", href: "/proteccion-reputacion/contenido-intimo-filtrado/" },
      { label: "Reseñas falsas Google", href: "/proteccion-reputacion/eliminar-resenas-falsas/" },
    ]},
  { label: "Autoridad", href: "/autoridad-digital/", items: [
      { label: "Knowledge Panel Google", href: "/autoridad-digital/knowledge-panel-google/" },
      { label: "Aparecer en Forbes", href: "/autoridad-digital/aparecer-en-forbes/" },
      { label: "Salir en prensa", href: "/autoridad-digital/salir-en-prensa/" },
      { label: "Marca personal", href: "/autoridad-digital/marca-personal-google/" },
      { label: "Reputación en IA (GEO)", href: "/autoridad-digital/reputacion-ia-geo/" },
    ]},
  { label: "Blindaje", href: "/monitorizacion-reputacion/", items: [
      { label: "Monitorización continua", href: "/monitorizacion-reputacion/proteccion-continua-marca/" },
      { label: "Auditoría gratuita", href: "/monitorizacion-reputacion/auditoria-reputacion-online/" },
    ]},
  { label: "Resultados", href: "/casos-de-exito/", items: [] },
  { label: "Precios", href: "/precios/", items: [] },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "nav-blur shadow-2xl shadow-black/30" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-lg opacity-50 group-hover:opacity-80 transition-opacity"
              style={{ background: "linear-gradient(135deg,rgba(201,168,76,0.5),rgba(100,160,255,0.3))", filter: "blur(6px)" }} />
            <div className="relative w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#0c1422,#070d1a)", border: "1px solid rgba(201,168,76,0.3)" }}>
              <span className="text-sm font-black font-display text-gradient">P</span>
            </div>
          </div>
          <span className="font-display font-bold text-lg text-white tracking-tight">Prestior</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-0.5">
          {MENU.map(item => (
            <div key={item.label} className="relative"
              onMouseEnter={() => item.items.length ? setActive(item.label) : null}
              onMouseLeave={() => setActive(null)}>
              <Link href={item.href}
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors rounded-lg"
                style={{ color: "rgba(238,240,244,0.6)", fontFamily: "DM Sans, sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#eef0f4")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(238,240,244,0.6)")}>
                {item.label}
                {item.items.length > 0 && <ChevronDown className="w-3 h-3 opacity-50" />}
              </Link>
              {item.items.length > 0 && active === item.label && (
                <div className="absolute top-full left-0 mt-2 py-1.5 z-50 min-w-[220px] rounded-2xl"
                  style={{ background: "rgba(7,13,26,0.95)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }}>
                  {item.items.map(sub => (
                    <Link key={sub.href} href={sub.href}
                      className="block px-4 py-2.5 text-sm transition-colors"
                      style={{ color: "rgba(238,240,244,0.5)", fontFamily: "DM Sans, sans-serif" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "#eef0f4"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(238,240,244,0.5)"; e.currentTarget.style.background = "transparent"; }}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/contacto/"
            className="text-sm font-medium transition-colors"
            style={{ color: "rgba(238,240,244,0.5)", fontFamily: "DM Sans, sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#eef0f4")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(238,240,244,0.5)")}>
            Contacto
          </Link>
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="btn-primary text-sm">
            Auditoría gratuita
          </Link>
        </div>

        <button className="md:hidden p-1.5 rounded-lg transition-colors"
          style={{ color: "rgba(238,240,244,0.7)" }}
          onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-5 pb-5 pt-2 space-y-1 nav-blur">
          {MENU.map(item => (
            <div key={item.label}>
              <Link href={item.href} onClick={() => setOpen(false)}
                className="block py-2.5 text-sm font-semibold text-white font-display">{item.label}</Link>
              {item.items.map(sub => (
                <Link key={sub.href} href={sub.href} onClick={() => setOpen(false)}
                  className="block py-2 pl-4 text-sm"
                  style={{ color: "rgba(238,240,244,0.45)" }}>{sub.label}</Link>
              ))}
            </div>
          ))}
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/"
            onClick={() => setOpen(false)} className="btn-primary mt-3 w-full justify-center text-sm">
            Auditoría gratuita
          </Link>
        </div>
      )}
    </nav>
  );
}
