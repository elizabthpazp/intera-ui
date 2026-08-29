"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {ReactNode} props.children - Content to be revealed
 * @param {ReactNode} props.background - Background content (usually blurred or darkened)
 * @param {number} [props.size=200] - Lens size
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function InteractiveLens({
  children,
  background,
  size = 200,
  darkMode = false,
  className = "",
  style,
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const responsiveSize = Math.min(size, typeof window !== "undefined" ? window.innerWidth * 0.4 : size);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setMousePos({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl md:cursor-none touch-none", className)}
      style={style}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="w-full h-full opacity-40 grayscale select-none pointer-events-none">
        {background || children}
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          WebkitMaskImage: isHovered
            ? `radial-gradient(circle ${responsiveSize / 2}px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`
            : `radial-gradient(circle 0px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`,
          maskImage: isHovered
            ? `radial-gradient(circle ${responsiveSize / 2}px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`
            : `radial-gradient(circle 0px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
      >
        <div className="w-full h-full">
          {children}
        </div>
      </motion.div>

      {isHovered && (
        <motion.div
          className={cn("absolute rounded-full border-2 pointer-events-none z-10 hidden sm:block", darkMode ? "border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)]" : "border-black/20 shadow-[0_0_20px_rgba(0,0,0,0.1)]")}
          style={{
            width: responsiveSize,
            height: responsiveSize,
            left: mousePos.x - responsiveSize / 2,
            top: mousePos.y - responsiveSize / 2,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
        />
      )}
    </div>
  );
}
