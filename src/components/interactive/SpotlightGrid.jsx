"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array de { id, title, content, icon? }
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function SpotlightGrid({
  items = [],
  darkMode = false,
  className = "",
  style,
}) {
  const fallback = [
    { id: "1", title: "Realtime", content: "Sync en 12ms con WebSocket" },
    { id: "2", title: "Secure", content: "E2E encryption by default" },
    { id: "3", title: "Fast", content: "Edge deployed en 35 regiones" },
    { id: "4", title: "Scalable", content: "Auto-scale a 1M rps" },
  ];
  const data = items.length ? items : fallback;

  return (
    <div
      className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl", darkMode ? "bg-gray-950" : "bg-gray-50", className)}
      style={style}
    >
      {data.map((item) => (
        <SpotlightCard key={item.id} item={item} darkMode={darkMode} />
      ))}
    </div>
  );
}

function SpotlightCard({ item, darkMode }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative rounded-2xl p-6 border overflow-hidden group",
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200 shadow-sm"
      )}
    >
      {/* Spotlight interior - ahora sigue el mouse de ESTA card, no del grid */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, ${darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}, transparent 70%)`,
        }}
      />

      {/* Borde spotlight - mucho más visible */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mouse.x}px ${mouse.y}px, ${darkMode ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.12)"}, transparent 60%)`,
          // Truco para solo mostrar borde
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      {/* Contenido */}
      <div className="relative">
        <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black mb-4 shadow-sm", darkMode ? "bg-white text-black" : "bg-black text-white")}>
          {item.icon || item.title[0]}
        </div>
        <h4 className={cn("text-base font-black tracking-tight", darkMode ? "text-white" : "text-gray-900")}>{item.title}</h4>
        <p className={cn("text-sm mt-1.5 leading-relaxed", darkMode ? "text-gray-400" : "text-gray-500")}>{item.content}</p>
        <div className={cn("mt-4 flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-60 transition-opacity", darkMode ? "text-gray-500" : "text-gray-400")}>
          Hover me <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
}
