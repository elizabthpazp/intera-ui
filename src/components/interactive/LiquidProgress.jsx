"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {number} [props.value=60] - 0-100
 * @param {number} [props.size=160] - Diámetro
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {boolean} [props.interactive=true] - Si true puedes arrastrar/click para cambiar valor
 * @param {function} [props.onChange=()=>{}]
 * @param {string} [props.label="Progress"]
 */
export default function LiquidProgress({
  value = 60,
  size = 160,
  darkMode = false,
  className = "",
  style,
  interactive = true,
  onChange = () => {},
  label = "Progress",
}) {
  const [internal, setInternal] = React.useState(value);
  const ref = React.useRef(null);
  const isDragging = React.useRef(false);

  React.useEffect(() => setInternal(value), [value]);
  const pct = Math.min(Math.max(internal, 0), 100);

  const updateFromClientY = (clientY) => {
    if (!ref.current || !interactive) return;
    const rect = ref.current.getBoundingClientRect();
    const y = clientY - rect.top;
    const newPct = Math.round(100 - (y / rect.height) * 100);
    const clamped = Math.min(Math.max(newPct, 0), 100);
    setInternal(clamped);
    onChange(clamped);
  };

  const handlePointerDown = (e) => {
    if (!interactive) return;
    e.preventDefault();
    e.stopPropagation();
    isDragging.current = true;
    updateFromClientY(e.clientY ?? e.touches?.[0]?.clientY);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current || !interactive) return;
    e.preventDefault();
    updateFromClientY(e.clientY ?? e.touches?.[0]?.clientY);
  };

  const handlePointerUp = (e) => {
    isDragging.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  return (
    <div className={cn("flex flex-col items-center gap-4 overscroll-contain", className)} style={style}>
      <div
        ref={ref}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchMove={(e) => e.preventDefault()}
        className={cn(
          "relative rounded-full overflow-hidden border-4 flex items-center justify-center select-none touch-none overscroll-contain",
          darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-gray-50 shadow-inner",
          interactive && "cursor-pointer active:cursor-grabbing"
        )}
        style={{ width: `min(${size}px, 70vw)`, height: `min(${size}px, 70vw)`, touchAction: "none", maxWidth: "100%" }}
        role="slider"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={interactive ? 0 : -1}
        onKeyDown={(e) => {
          if (!interactive) return;
          if (e.key === "ArrowUp") { const v = Math.min(pct + 5, 100); setInternal(v); onChange(v); }
          if (e.key === "ArrowDown") { const v = Math.max(pct - 5, 0); setInternal(v); onChange(v); }
        }}
      >
        {/* Water - FIX: quitadas las olas que parecían "botón que sale de arriba a abajo" en la derecha */}
        <motion.div
          className="absolute left-0 right-0 bottom-0 pointer-events-none"
          animate={{ height: `${pct}%` }}
          transition={{ type: "spring", damping: 22, stiffness: 140 }}
          style={{ background: darkMode ? "linear-gradient(to top, #2563eb, #06b6d4)" : "linear-gradient(to top, #0ea5e9, #38bdf8)" }}
        >
          {/* Highlight fijo en el borde superior del agua, sin animación x que parecía botón */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px] opacity-70 pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent)" }}
          />
        </motion.div>

        {/* Percentage - FIX: ya no hace pop en cada toque, antes key={pct} + initial scale causaba el "botón que sale de arriba" */}
        <div className="relative z-10 flex flex-col items-center pointer-events-none">
          <span className={cn("text-2xl sm:text-3xl font-black tracking-tighter tabular-nums", pct > 50 ? "text-white" : (darkMode ? "text-white" : "text-gray-900"))}>
            {pct}%
          </span>
          <span className={cn("text-[10px] font-bold tracking-widest uppercase opacity-60", pct > 50 ? "text-white" : (darkMode ? "text-gray-400" : "text-gray-500"))}>{label}</span>
        </div>

        {/* Shine */}
        <div className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 50%)" }} />
      </div>

      {interactive && (
        <span className={cn("text-[10px] font-bold tracking-widest uppercase opacity-40", darkMode ? "text-gray-500" : "text-gray-400")}>Click o arrastra vertical para ajustar</span>
      )}
    </div>
  );
}
