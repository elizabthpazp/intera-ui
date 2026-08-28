"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {ReactNode} props.children
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function PerspectiveCard({
  children,
  darkMode = false,
  className = "",
  style,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        ...style,
      }}
      className={cn("relative w-64 h-96 rounded-3xl border shadow-2xl transition-colors duration-500 overflow-hidden", darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100", className)}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-2xl flex flex-col items-center justify-center gap-4 text-center"
      >
        {children}
      </div>
      
      <motion.div
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 80%)",
          transform: "translateZ(1px)",
        }}
        className="absolute inset-0 pointer-events-none"
      />
    </motion.div>
  );
}
