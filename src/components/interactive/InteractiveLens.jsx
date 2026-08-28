"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * @param {Object} props
 * @param {ReactNode} props.children - Content to be revealed
 * @param {ReactNode} props.background - Background content (usually blurred or darkened)
 * @param {number} [props.size=200] - Lens size
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 */
export default function InteractiveLens({
  children,
  background,
  size = 200,
  darkMode = false,
  className = ""
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl cursor-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background (Always visible) */}
      <div className="w-full h-full opacity-40 grayscale select-none pointer-events-none">
        {background || children}
      </div>

      {/* Reveal Lens */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          WebkitMaskImage: isHovered
            ? `radial-gradient(circle ${size / 2}px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`
            : `radial-gradient(circle 0px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`,
          maskImage: isHovered
            ? `radial-gradient(circle ${size / 2}px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`
            : `radial-gradient(circle 0px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
      >
        <div className="w-full h-full">
          {children}
        </div>
      </motion.div>

      {/* Visual Cursor/Lens Border */}
      {isHovered && (
        <motion.div
          className={`absolute rounded-full border-2 pointer-events-none z-10 ${
            darkMode ? "border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)]" : "border-black/20 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
          }`}
          style={{
            width: size,
            height: size,
            left: mousePos.x - size / 2,
            top: mousePos.y - size / 2,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
        />
      )}
    </div>
  );
}
