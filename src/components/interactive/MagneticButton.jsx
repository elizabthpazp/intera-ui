"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * @param {Object} props
 * @param {ReactNode} props.children
 * @param {function} [props.onClick=() => {}]
 * @param {number} [props.strength=0.5] - How strong the magnetic pull is (0 to 1)
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 */
export default function MagneticButton({
  children,
  onClick = () => {},
  strength = 0.5,
  darkMode = false,
  className = ""
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative px-8 py-3 rounded-xl font-bold transition-colors shadow-lg active:scale-95 ${
        darkMode 
          ? "bg-white text-black hover:bg-gray-100" 
          : "bg-black text-white hover:bg-gray-800"
      } ${className}`}
    >
      <motion.span
        className="relative z-10 block"
        animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
      >
        {children}
      </motion.span>
      
      {/* Magnetic Glow */}
      <motion.div
        className={`absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-30 pointer-events-none ${
          darkMode ? "bg-white" : "bg-black"
        }`}
      />
    </motion.button>
  );
}
