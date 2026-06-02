"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Protección", href: "/proteccion-reputacion/" },
  { label: "Autoridad", href: "/autoridad-digital/" },
  { label: "Resultados", href: "/casos-de-exito/" },
  { label: "Precios", href: "/precios/" },
];

const C = {
  bg:  "#04070f",
  t1:  "#eef0f4",
  t3:  "rgba(238,240,244,0.35)",
  bdr: "rgba(255,255,255,0.07)",
  gold: "#c9a84c",
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(4,7,15,0.95)" : C.bg,
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: `1px solid ${C.bdr}`,
      transition: "background 0.3s",
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{ width: 6, height: 28, background: C.gold, borderRadius: 3, flexShrink: 0 }} />
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: C.t1, letterSpacing: "-0.01em" }}>Prestior</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: C.t3, textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = C.t1)}
              onMouseLeave={e => (e.currentTarget.style.color = C.t3)}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden-mobile">
          <Link href="/contacto/" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 13, color: C.bg, background: C.t1, padding: "8px 18px", borderRadius: 6, textDecoration: "none", letterSpacing: "0.01em" }}>
            Contacto
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: C.t3, cursor: "pointer", padding: 4, display: "none" }} className="show-mobile">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: C.bg, borderTop: `1px solid ${C.bdr}`, padding: "20px 24px 28px" }}>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "14px 0", fontFamily: "'DM Mono', monospace", fontSize: 13, color: C.t3, textDecoration: "none", borderBottom: `1px solid ${C.bdr}`, letterSpacing: "0.04em" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contacto/" onClick={() => setOpen(false)} style={{ display: "block", marginTop: 20, textAlign: "center", padding: "13px", background: C.t1, color: C.bg, borderRadius: 6, textDecoration: "none", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14 }}>
            Contacto
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 640px) { .hidden-mobile { display: flex; } .show-mobile { display: none !important; } }
        @media (max-width: 639px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
      `}</style>
    </nav>
  );
}
