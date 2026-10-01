"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

let __id = 0;
const nid = () => `st-${Date.now()}-${(__id++).toString(36)}`;

/**
 * StarfallField — lluvia de meteoros interactiva con toque Intera.
 * Idea de género "meteor background" pero con física propia:
 * los meteoros caen en diagonal y al hacer click nace un burst.
 * 100% código original, sin copiar de terceros.
 */
export default function StarfallField({
  children,
  darkMode = false,
  density = 14,
  speed = 1,
  burstOnClick = true,
  hint = "click anywhere — meteor burst ✦",
  minHeight = 320,
  className = "",
  style,
}) {
  const ref = useRef(null);
  const [rocks, setRocks] = useState([]);

  const spawn = useCallback((xPct, yPct, big = false) => {
    const rock = {
      id: nid(),
      left: xPct ?? Math.random() * 100,
      top: yPct ?? Math.random() * -10,
      len: big ? 140 + Math.random() * 80 : 60 + Math.random() * 90,
      delay: Math.random() * 1.2,
      dur: (2.2 + Math.random() * 2.4) / speed,
      hue: Math.random() > 0.82 ? "pink" : Math.random() > 0.5 ? "violet" : "cyan",
      big,
    };
    setRocks((p) => [...p.slice(-40), rock]);
    setTimeout(() => setRocks((p) => p.filter((r) => r.id !== rock.id)), (rock.dur + rock.delay) * 1000 + 100);
  }, [speed]);

  useEffect(() => {
    setRocks([]);
    const t = setInterval(() => {
      if (document.hidden) return;
      spawn();
      if (density > 18 && Math.random() > 0.6) spawn();
    }, Math.max(220, 1400 - density * 70));
    return () => clearInterval(t);
  }, [density, spawn]);

  const onClick = (e) => {
    if (!burstOnClick) return;
    // No robar clicks de botones/links/inputs del contenido
    if (e.target.closest("button, a, input, select, textarea, [data-no-burst]")) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    for (let i = 0; i < 5; i++) spawn(x + (Math.random() - 0.5) * 12, y + (Math.random() - 0.5) * 6, true);
  };

  const hueColor = (h) =>
    h === "pink" ? "255,120,190" : h === "violet" ? "167,139,250" : "103,232,249";

  return (
    <div
      ref={ref}
      onClick={onClick}
      style={{ minHeight, ...style }}
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] border cursor-crosshair select-none w-full min-w-0 max-w-full",
        darkMode ? "bg-[#05050a] border-white/10" : "bg-[#eef0ff] border-black/10",
        className
      )}
    >
      <style>{`
        @keyframes ia-starfall { 0% { transform: translate3d(0,0,0); opacity: 0; } 8% { opacity: 1; } 100% { transform: translate(-160px, 340px); opacity: 0; } }
        @keyframes ia-twinkle { 0%,100% { opacity: .25; } 50% { opacity: 1; } }
      `}</style>

      {/* estrellas fijas */}
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={i}
          className={cn("absolute rounded-full pointer-events-none", darkMode ? "bg-white" : "bg-violet-900")}
          style={{
            left: `${(i * 37.7) % 100}%`,
            top: `${(i * 53.3) % 100}%`,
            width: i % 7 === 0 ? 2.5 : 1.2,
            height: i % 7 === 0 ? 2.5 : 1.2,
            opacity: 0.5,
            animation: `ia-twinkle ${2 + (i % 5)}s ease-in-out ${i * 0.13}s infinite`,
          }}
        />
      ))}

      {/* meteoros */}
      {rocks.map((r) => (
        <div
          key={r.id}
          className="absolute pointer-events-none"
          style={{ left: `${r.left}%`, top: `${r.top}%`, animation: `ia-starfall ${r.dur}s linear ${r.delay}s forwards` }}
        >
          <div
            style={{
              width: `min(${r.len}px, 38vw)`,
              height: r.big ? 2.4 : 1.6,
              borderRadius: 999,
              transform: "rotate(-35deg)",
              transformOrigin: "right center",
              background: `linear-gradient(to left, rgba(${hueColor(r.hue)},1) 0%, rgba(${hueColor(r.hue)},0.7) 25%, transparent 100%)`,
              boxShadow: `0 0 ${r.big ? 18 : 10}px rgba(${hueColor(r.hue)},0.9), 2px 0 6px #fff`,
            }}
          />
          <div
            className="absolute rounded-full bg-white"
            style={{ right: -2, top: -2.4, width: r.big ? 7 : 5, height: r.big ? 7 : 5, boxShadow: "0 0 12px #fff" }}
          />
        </div>
      ))}

      <div className="relative z-10">{children}</div>

      {hint && (
        <div className={cn("absolute bottom-4 left-0 right-0 text-center text-[10px] font-bold uppercase tracking-[0.3em] pointer-events-none px-4", darkMode ? "text-white/35" : "text-violet-950/40")}>
          {hint}
        </div>
      )}
    </div>
  );
}
