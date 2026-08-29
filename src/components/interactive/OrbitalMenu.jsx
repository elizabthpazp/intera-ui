"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array de { id, icon, label, onClick, color? }
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {number} [props.radius=90] - Radio órbita
 */
export default function OrbitalMenu({
  items = [],
  darkMode = false,
  className = "",
  style,
  radius = 90,
}) {
  const [open, setOpen] = useState(false);
  const fallback = [
    { id: "1", icon: "✦", label: "Design", color: "from-violet-500 to-purple-600" },
    { id: "2", icon: "◈", label: "Code", color: "from-blue-500 to-cyan-500" },
    { id: "3", icon: "⬢", label: "Motion", color: "from-emerald-500 to-teal-600" },
    { id: "4", icon: "⬣", label: "Ship", color: "from-orange-500 to-pink-500" },
  ];
  const data = items.length ? items : fallback;
  const size = 56;
  const half = size / 2;
  const responsiveRadius = typeof window !== "undefined" ? Math.min(radius, window.innerWidth * 0.28) : radius;

  return (
    <div
      className={cn("relative flex items-center justify-center overflow-visible shrink-0 touch-manipulation max-w-[90vw]", className)}
      style={{ width: responsiveRadius * 2 + size + 32, height: responsiveRadius * 2 + size + 32, ...style }}
    >
      {/* Center button - FIX: ya no se mueve hacia abajo. Antes -translate-x-1/2 chocaba con transform de framer (scale). Ahora usa style translate para que framer no lo pise */}
      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.02 }}
        className={cn(
          "absolute z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-2 transition-colors select-none touch-manipulation",
          darkMode ? "bg-white text-black border-white hover:bg-gray-100" : "bg-black text-white border-black hover:bg-gray-900"
        )}
        style={{
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
        }}
      >
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          {open ? <X size={24} /> : <Plus size={24} />}
        </motion.span>
      </motion.button>

      {/* Orbital items - fijos en órbita, no se desbordan */}
      <AnimatePresence>
        {open &&
          data.map((item, i) => {
            const angle = (360 / data.length) * i - 90;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * responsiveRadius;
            const y = Math.sin(rad) * responsiveRadius;
            return (
              <motion.button
                key={item.id}
                type="button"
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{ x, y, scale: 1, opacity: 1 }}
                exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                transition={{ type: "spring", damping: 18, stiffness: 260, delay: i * 0.04 }}
                onClick={() => {
                  item.onClick?.(item);
                  setOpen(false);
                }}
                whileHover={{ scale: 1.1, zIndex: 30 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-1/2 top-1/2 w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg border group select-none touch-manipulation z-10 hover:z-20"
                style={{
                  marginLeft: -half,
                  marginTop: -half,
                  background: item.color ? undefined : darkMode ? "#1f2937" : "white",
                  borderColor: darkMode ? "#374151" : "#e5e7eb",
                }}
              >
                {item.color ? (
                  <span className={cn("absolute inset-0 rounded-full bg-gradient-to-br opacity-90", item.color)} />
                ) : null}
                <span className={cn("relative text-lg", item.color ? "text-white" : (darkMode ? "text-white" : "text-gray-900"))}>
                  {item.icon}
                </span>
                <span className={cn("absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-widest uppercase whitespace-nowrap px-2 py-1 rounded-md shadow-lg z-50 border", darkMode ? "bg-white text-black border-gray-200" : "bg-black text-white border-gray-800", "opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none")}>
                  {item.label}
                </span>
              </motion.button>
            );
          })}
      </AnimatePresence>

      {/* Orbit ring - FIX: ya no se desborda hacia abajo-derecha. Antes Tailwind -translate chocaba con scale de framer y lo mandaba a 0,0 */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 260 }}
            className={cn("absolute rounded-full border pointer-events-none z-0", darkMode ? "border-gray-800" : "border-gray-200")}
            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%", width: responsiveRadius * 2, height: responsiveRadius * 2 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
