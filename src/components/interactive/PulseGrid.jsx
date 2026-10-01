"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * PulseGrid — rejilla de puntos reactiva con toque Intera.
 * Género "interactive grid background": los nodos se iluminan cerca
 * del cursor y el click genera una onda expansiva. Lógica propia.
 */
export default function PulseGrid({
  darkMode = false,
  rows = 8,
  cols = 12,
  children,
  hint = "hover to light — click for ripple",
  minHeight = 320,
  className = "",
  style,
}) {
  const ref = useRef(null);
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [ripples, setRipples] = useState([]);
  const [tick, setTick] = useState(0);

  // Recalcula posiciones de los dots al redimensionar (responsive real)
  React.useEffect(() => {
    const onResize = () => setTick((v) => v + 1);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const setFromPoint = (clientX, clientY) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setMouse({ x: clientX - r.left, y: clientY - r.top });
  };

  const onClick = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const id = Date.now() + Math.random();
    const pt = { id, x: e.clientX - r.left, y: e.clientY - r.top };
    setRipples((p) => [...p, pt]);
    setTimeout(() => setRipples((p) => p.filter((x) => x.id !== id)), 900);
  };

  const cells = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      cells.push({ row, col, key: `${row}-${col}` });
    }
  }

  return (
    <div
      ref={ref}
      onPointerMove={(e) => { if (e.pointerType !== "touch") setFromPoint(e.clientX, e.clientY); }}
      onTouchMove={(e) => { const t = e.touches[0]; if (t) setFromPoint(t.clientX, t.clientY); }}
      onMouseLeave={() => setMouse({ x: -9999, y: -9999 })}
      onClick={onClick}
      style={{ minHeight, ...style }}
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] border cursor-pointer select-none w-full min-w-0 max-w-full touch-pan-y",
        darkMode ? "bg-black border-white/10" : "bg-white border-black/10",
        className
      )}
    >
      <div
        className="absolute inset-0 grid place-items-center"
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          padding: 28,
          gap: 0,
        }}
      >
        {cells.map((c) => (
          <Dot key={c.key} row={c.row} col={c.col} rows={rows} cols={cols} mouse={mouse} darkMode={darkMode} containerRef={ref} tick={tick} />
        ))}
      </div>

      {/* ondas de click */}
      {ripples.map((rp) => (
        <motion.span
          key={rp.id}
          initial={{ scale: 0, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className={cn("absolute rounded-full border-2 pointer-events-none", darkMode ? "border-cyan-300/70" : "border-violet-500/60")}
          style={{ left: rp.x - 90, top: rp.y - 90, width: 180, height: 180 }}
        />
      ))}

      {children && <div className="relative z-10">{children}</div>}

      {hint && (
        <div className={cn("absolute bottom-4 left-0 right-0 text-center text-[10px] font-bold uppercase tracking-[0.3em] pointer-events-none px-4", darkMode ? "text-white/30" : "text-black/30")}>
          {hint}
        </div>
      )}
    </div>
  );
}

function Dot({ row, col, rows, cols, mouse, darkMode, containerRef, tick }) {
  const [pos, setPos] = React.useState(null);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (!r.width) return;
    const cw = (r.width - 56) / cols;
    const ch = Math.max(r.height - 56, 200) / rows;
    setPos({ x: 28 + col * cw + cw / 2, y: 28 + row * ch + ch / 2 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [row, col, rows, cols, tick]);

  if (!pos) return <span className="w-1 h-1 rounded-full opacity-20 bg-current" />;

  const dx = mouse.x - pos.x;
  const dy = mouse.y - pos.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const R = 130;
  const t = Math.max(0, 1 - dist / R);
  const eased = t * t * (3 - 2 * t);

  const size = 3 + eased * 7;
  const color = eased > 0.02
    ? darkMode
      ? `rgba(103,232,249,${0.15 + eased * 0.85})`
      : `rgba(124,58,237,${0.15 + eased * 0.85})`
    : darkMode ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.14)";

  return (
    <span
      className="rounded-full transition-[width,height] duration-75 place-self-center"
      style={{
        width: size,
        height: size,
        background: color,
        boxShadow: eased > 0.4 ? `0 0 ${12 * eased}px ${color}` : "none",
      }}
    />
  );
}
