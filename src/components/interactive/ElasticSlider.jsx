"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * @param {Object} props
 * @param {number} [props.min=0]
 * @param {number} [props.max=100]
 * @param {number} [props.defaultValue=50]
 * @param {function} [props.onChange=() => {}]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 */
export default function ElasticSlider({
  min = 0,
  max = 100,
  defaultValue = 50,
  onChange = () => {},
  darkMode = false,
  className = ""
}) {
  const [value, setValue] = useState(defaultValue);
  const x = useMotionValue(0);
  
  // Use a spring for smooth, elastic movement
  const springX = useSpring(x, { stiffness: 400, damping: 30 });
  
  // Transform x position to the slider value
  const sliderWidth = 260;
  const thumbSize = 24;
  
  const handleDrag = (_, info) => {
    const newValue = Math.round(
      ((info.point.x - info.start.point.x + (value / max) * sliderWidth) / sliderWidth) * max
    );
    const clampedValue = Math.min(Math.max(newValue, min), max);
    setValue(clampedValue);
    onChange(clampedValue);
  };

  const percentage = (value / max) * 100;

  return (
    <div className={`flex flex-col items-center gap-6 p-4 ${className}`}>
      <div className="relative w-[260px] h-2">
        {/* Track */}
        <div className={`absolute inset-0 rounded-full ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`} />
        
        {/* Progress Fill */}
        <motion.div 
          className={`absolute inset-y-0 left-0 rounded-full ${
            darkMode ? "bg-white" : "bg-black"
          }`}
          style={{ width: `${percentage}%` }}
        />

        {/* Thumb */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: sliderWidth }}
          dragElastic={0.1}
          dragMomentum={false}
          onDrag={(e, info) => {
            const rect = e.target.parentElement.getBoundingClientRect();
            const newX = e.clientX - rect.left;
            const clampedX = Math.min(Math.max(newX, 0), sliderWidth);
            const newValue = Math.round((clampedX / sliderWidth) * max);
            setValue(newValue);
            onChange(newValue);
          }}
          style={{ x: (value / max) * sliderWidth - thumbSize / 2 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, cursor: "grabbing" }}
          className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 cursor-grab flex items-center justify-center shadow-lg transition-colors ${
            darkMode ? "bg-gray-900 border-white" : "bg-white border-black"
          }`}
        >
          <div className={`w-1 h-1 rounded-full ${darkMode ? "bg-white" : "bg-black"}`} />
        </motion.div>
      </div>

      {/* Value Display */}
      <motion.div 
        key={value}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`text-2xl font-black italic tracking-tighter ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {value}
      </motion.div>
    </div>
  );
}
