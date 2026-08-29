"use client";
import React, { useState, useRef } from "react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {string} [props.before] - URL imagen before
 * @param {string} [props.after] - URL imagen after
 * @param {string} [props.beforeLabel="Before"]
 * @param {string} [props.afterLabel="After"]
 * @param {number} [props.defaultPosition=50] - 0-100
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function ImageCompare({
  before = "https://picsum.photos/seed/before/800/500",
  after = "https://picsum.photos/seed/after/800/500",
  beforeLabel = "Before",
  afterLabel = "After",
  defaultPosition = 50,
  darkMode = false,
  className = "",
  style,
}) {
  const [position, setPosition] = useState(defaultPosition);
  const ref = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 0), 100);
    setPosition(pct);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  };

  const handlePointerDown = (e) => {
    isDragging.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
    // Capturar pointer para que el drag no se pierda
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerUp = (e) => {
    isDragging.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className={cn("relative overflow-hidden rounded-2xl select-none group border touch-none", darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-gray-100", className)}
      style={{ aspectRatio: "16/10", ...style }}
    >
      {/* After image (full) */}
      <img src={after} alt={afterLabel} className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} />
      <span className={cn("absolute top-3 right-3 text-[10px] font-black tracking-widest px-2 py-1 rounded-full pointer-events-none", darkMode ? "bg-white text-black" : "bg-black text-white")}>{afterLabel}</span>

      {/* Before image clipped con clip-path - siempre full size */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={before} alt={beforeLabel} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        <span className={cn("absolute top-3 left-3 text-[10px] font-black tracking-widest px-2 py-1 rounded-full", darkMode ? "bg-black text-white" : "bg-white text-black")}>{beforeLabel}</span>
      </div>

      {/* Divider - fijo sobre la línea */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Handle - FIX: ya no está anidado dentro del divider, es hermano y está fijo a la línea via left, sin drag de framer */}
      <div
        onPointerDown={handlePointerDown}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing border border-gray-200 touch-none select-none z-10"
        style={{ left: `${position}%` }}
        role="slider"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(p - 5, 0));
          if (e.key === "ArrowRight") setPosition((p) => Math.min(p + 5, 100));
        }}
      >
        <span className="flex gap-0.5 pointer-events-none">
          <span className="w-0.5 h-4 bg-gray-300 rounded-full" />
          <span className="w-0.5 h-4 bg-gray-300 rounded-full" />
        </span>
      </div>

      {/* Range input para accesibilidad - visible al focus */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-2 opacity-0 focus:opacity-100 transition-opacity"
        aria-label="Compare position"
      />
    </div>
  );
}
