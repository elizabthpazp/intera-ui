"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * NebulaDrift — fondo aurora interactivo con toque Intera.
 * Concepto inspirado en "aurora backgrounds": blobs de color que derivan
 * lento + parallax que sigue al mouse. Implementación 100% original.
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.darkMode=false]
 * @param {number} [props.intensity=1] - 0.5 sutil / 1 normal / 1.6 intenso
 * @param {boolean} [props.showGrid=true] - rejilla tenue encima
 * @param {string} [props.className=""]
 */
export default function NebulaDrift({
  children,
  darkMode = false,
  intensity = 1,
  showGrid = true,
  hint = "● live aurora — move your cursor",
  minHeight = 280,
  className = "",
  style,
}) {
  const ref = useRef(null);
  const [center, setCenter] = useState({ x: 0.5, y: 0.4 });

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const blobX = useTransform(sx, [-0.5, 0.5], [-30 * intensity, 30 * intensity]);
  const blobY = useTransform(sy, [-0.5, 0.5], [-22 * intensity, 22 * intensity]);
  const blobX2 = useTransform(sx, [-0.5, 0.5], [26 * intensity, -26 * intensity]);

  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const cx = e.clientX ?? e.touches?.[0]?.clientX;
    const cy = e.clientY ?? e.touches?.[0]?.clientY;
    if (cx == null || cy == null) return;
    const px = (cx - r.left) / r.width - 0.5;
    const py = (cy - r.top) / r.height - 0.5;
    mx.set(px);
    my.set(py);
    setCenter({ x: (cx - r.left) / r.width, y: (cy - r.top) / r.height });
  };

  const blobs = [
    { c: darkMode ? "rgba(139,92,246,0.55)" : "rgba(139,92,246,0.35)", size: 420, left: "8%", top: "-10%", x: blobX, y: blobY, dur: 11 },
    { c: darkMode ? "rgba(34,211,238,0.45)" : "rgba(34,211,238,0.30)", size: 360, left: "62%", top: "10%", x: blobX2, y: blobY, dur: 14 },
    { c: darkMode ? "rgba(244,114,182,0.40)" : "rgba(244,114,182,0.28)", size: 300, left: "35%", top: "46%", x: blobX, y: blobY, dur: 9 },
  ];

  return (
    <div
      ref={ref}
      onPointerMove={(e) => { if (e.pointerType !== "touch") handleMove(e); }}
      onTouchMove={handleMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ minHeight, ...style }}
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] border transition-colors duration-500 w-full min-w-0 max-w-full touch-pan-y",
        darkMode ? "bg-[#07070c] border-white/10" : "bg-[#f4f4fb] border-black/10",
        className
      )}
    >
      {/* blobs aurora */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          style={{ x: b.x, y: b.y, width: b.size, height: b.size, left: b.left, top: b.top, background: b.c }}
          className="absolute rounded-full blur-[90px] pointer-events-none"
          animate={{ scale: [1, 1.18 * intensity, 0.94, 1], rotate: [0, 25, -15, 0] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* halo que sigue al cursor — sello Intera */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(420px circle at ${center.x * 100}% ${center.y * 100}%, ${darkMode ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.07)"}, transparent 65%)`,
        }}
      />

      {showGrid && (
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage: darkMode
              ? "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
              : "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse 80% 75% at 50% 40%, black 45%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 75% at 50% 40%, black 45%, transparent 100%)",
          }}
        />
      )}

      {/* contenido */}
      <div className="relative z-10">{children}</div>

      {hint && (
        <div className={cn("absolute bottom-4 left-6 right-6 text-[10px] font-bold uppercase tracking-[0.3em] pointer-events-none", darkMode ? "text-white/30" : "text-black/30")}>
          {hint}
        </div>
      )}
    </div>
  );
}
