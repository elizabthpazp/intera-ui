"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array of { icon: ReactNode, label: string, onClick: func }
 * @param {number} [props.distance=150] - Distance for magnification effect
 * @param {number} [props.magnification=80] - Maximum size of icons
 * @param {number} [props.baseSize=40] - Original size of icons
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function MagneticDock({
  items = [],
  distance = 150,
  magnification = 80,
  baseSize = 40,
  darkMode = false,
  className = "",
  style,
}) {
  const mouseX = useMotionValue(Infinity);
  const [hoveredIdx, setHoveredIdx] = React.useState(null);

  return (
    <div className="w-full overflow-visible flex justify-center py-4 px-2">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => { mouseX.set(Infinity); setHoveredIdx(null); }}
        style={style}
        className={cn(
          "flex h-14 sm:h-16 items-end gap-2 sm:gap-4 rounded-2xl px-2 sm:px-4 pb-2 sm:pb-3 border w-fit overflow-visible mx-auto",
          darkMode 
            ? "bg-gray-900/80 border-gray-800 backdrop-blur-md" 
            : "bg-white/80 border-gray-200 backdrop-blur-md shadow-lg",
          className
        )}
      >
        {items.map((item, i) => (
          <IconContainer
            key={i}
            mouseX={mouseX}
            distance={distance}
            magnification={magnification}
            baseSize={baseSize}
            item={item}
            darkMode={darkMode}
            isHovered={hoveredIdx === i}
            onHoverChange={(h) => setHoveredIdx(h ? i : null)}
          />
        ))}
      </motion.div>
    </div>
  );
}

function IconContainer({ mouseX, distance, magnification, baseSize, item, darkMode, isHovered, onHoverChange }) {
  const ref = useRef(null);

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [baseSize, magnification, baseSize]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width, zIndex: isHovered ? 20 : 1 }}
      onClick={item.onClick}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
      className={cn(
        "group relative aspect-square rounded-full flex items-center justify-center cursor-pointer transition-colors shrink-0",
        darkMode ? "bg-gray-800 hover:bg-gray-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"
      )}
    >
      <div className="flex items-center justify-center w-full h-full p-2">
        {item.icon}
      </div>
      
      {/* Tooltip - con mayor z que el resto */}
      <div className={cn("absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg border", darkMode ? "bg-white text-black border-gray-200" : "bg-black text-white border-gray-800")}>
        {item.label}
      </div>
    </motion.div>
  );
}
