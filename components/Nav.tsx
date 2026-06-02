"use client";
import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { l:"Protección", h:"/proteccion-reputacion/" },
  { l:"Autoridad", h:"/autoridad-digital/" },
  { l:"Resultados", h:"/casos-de-exito/" },
  { l:"Precios", h:"/precios/" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{ position:"sticky", top:0, zIndex:100, background:"rgba(9,9,11,.92)", backdropFilter:"blur(20px)", borderBottom:"1px solid rgba(255,255,255,.07)" }}>
      <div style={{ maxWidth:900, margin:"0 auto", padding:"0 20px", height:58, display:"flex", alignItems:"center", justifyContent:"space-between", gap:16 }}>
        <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
          <span style={{ width:3, height:22, background:"#c9a84c", borderRadius:2, display:"block" }} />
          <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:17, color:"#f8f8f8", letterSpacing:"-.01em" }}>Prestior</span>
        </Link>

        {/* Desktop */}
        <div style={{ display:"flex", alignItems:"center", gap:24 }} className="nav-d">
          {LINKS.map(({l,h})=>(
            <Link key={h} href={h} style={{ fontFamily:"'DM Mono',monospace", fontSize:12, color:"rgba(240,240,240,.35)", textDecoration:"none", letterSpacing:".04em", transition:"color .2s" }}>{l}</Link>
          ))}
        </div>
        <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" className="nav-d" style={{ fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13, background:"#c9a84c", color:"#09090b", padding:"8px 18px", borderRadius:8, textDecoration:"none", whiteSpace:"nowrap" }}>
          Análisis gratuito
        </Link>

        {/* Mobile */}
        <button onClick={()=>setOpen(!open)} className="nav-m" style={{ background:"none", border:"none", color:"rgba(240,240,240,.6)", cursor:"pointer", padding:4, fontSize:20 }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div style={{ background:"#0f0f12", borderBottom:"1px solid rgba(255,255,255,.07)", padding:"16px 20px 24px" }}>
          {LINKS.map(({l,h})=>(
            <Link key={h} href={h} onClick={()=>setOpen(false)} style={{ display:"block", padding:"12px 0", fontFamily:"'DM Mono',monospace", fontSize:13, color:"rgba(240,240,240,.35)", textDecoration:"none", borderBottom:"1px solid rgba(255,255,255,.07)", letterSpacing:".04em" }}>
              {l}
            </Link>
          ))}
          <Link href="/monitorizacion-reputacion/auditoria-reputacion-online/" onClick={()=>setOpen(false)} style={{ display:"block", marginTop:16, textAlign:"center", background:"#c9a84c", color:"#09090b", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:14, padding:13, borderRadius:8, textDecoration:"none" }}>
            Análisis gratuito
          </Link>
        </div>
      )}

      <style>{`
        .nav-d { display:flex!important; }
        .nav-m { display:none!important; }
        @media(max-width:560px){
          .nav-d { display:none!important; }
          .nav-m { display:flex!important; }
        }
      `}</style>
    </nav>
  );
}
