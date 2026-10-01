"use client";
import React, { useRef, useState } from "react";
import { cn } from "../../lib/utils";

/**
 * FluxBorder — contenedor con borde cónico animado y glow que sigue al mouse.
 * Género "moving / glowing border": reinterpretación Intera con doble anillo,
 * esquinas extra-redondeadas y aceleración al hover. Código original.
 */
export default function FluxBorder({
  children,
  darkMode = false,
  radius = "rounded-[2rem]",
  glow = "violet",
  speed = 4,
  className = "",
  style,
}) {
  const ref = useRef(null);
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);

  const palettes = {
    violet: "conic-gradient(from var(--ia-flux, 0deg), #8b5cf6, #22d3ee, #f472b6, #8b5cf6)",
    ember: "conic-gradient(from var(--ia-flux, 0deg), #fb923c, #f43f5e, #facc15, #fb923c)",
    mint: "conic-gradient(from var(--ia-flux, 0deg), #34d399, #22d3ee, #a3e635, #34d399)",
    mono: "conic-gradient(from var(--ia-flux, 0deg), #fff, #737373, #fff)",
  };
  const conic = palettes[glow] || palettes.violet;

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setSpot({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...style, "--ia-speed": `${hover ? speed * 0.45 : speed}s` }}
      className={cn("relative isolate p-[1.5px] ia-flux-wrap w-full min-w-0 max-w-full", radius, className)}
    >
      <style>{`
        @property --ia-flux { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        .ia-flux-wrap { background: conic-gradient(from var(--ia-flux, 0deg), rgba(139,92,246,.7), rgba(34,211,238,.7), rgba(244,114,182,.7), rgba(139,92,246,.7)); animation: ia-flux-spin var(--ia-speed, 4s) linear infinite; }
        @keyframes ia-flux-spin { to { --ia-flux: 360deg; } }
      `}</style>

      {/* glow exterior al hover */}
      <div
        aria-hidden
        className="absolute -inset-2 -z-10 blur-2xl opacity-0 transition-opacity duration-500 pointer-events-none"
        style={{ opacity: hover ? 0.55 : 0, background: conic }}
      />

      <div className={cn("relative overflow-hidden", radius, darkMode ? "bg-[#0a0a10]" : "bg-white")}>
        {/* sheen que sigue al mouse */}
        <div
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            opacity: hover ? 1 : 0,
            background: `radial-gradient(280px circle at ${spot.x}% ${spot.y}%, ${darkMode ? "rgba(255,255,255,0.10)" : "rgba(139,92,246,0.10)"}, transparent 70%)`,
          }}
        />
        <div className="relative z-20">{children}</div>
      </div>
    </div>
  );
}
