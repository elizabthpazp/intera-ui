"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

/**
 * @param {Object} props
 * @param {string} [props.label="Slide to confirm"]
 * @param {string} [props.successLabel="Confirmed"]
 * @param {function} [props.onConfirm=() => {}]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 */
export default function SwipeToConfirm({
  label = "Slide to confirm",
  successLabel = "Confirmed",
  onConfirm = () => {},
  darkMode = false,
  className = ""
}) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const x = useMotionValue(0);
  
  const containerWidth = 280;
  const thumbSize = 50;
  const dragRange = containerWidth - thumbSize - 8;

  const opacity = useTransform(x, [0, dragRange], [1, 0]);
  const scale = useTransform(x, [0, dragRange], [1, 1.1]);

  const handleDragEnd = () => {
    if (x.get() >= dragRange - 10) {
      setIsConfirmed(true);
      onConfirm();
    } else {
      x.set(0);
    }
  };

  return (
    <div className={`relative h-[60px] rounded-full p-1 border flex items-center overflow-hidden ${
      darkMode 
        ? "bg-gray-900 border-gray-800" 
        : "bg-gray-100 border-gray-200 shadow-inner"
    } ${className}`} style={{ width: containerWidth }}>
      
      {/* Background Text */}
      <motion.div 
        style={{ opacity }}
        className={`absolute inset-0 flex items-center justify-center text-sm font-black uppercase tracking-widest pointer-events-none select-none ${
          darkMode ? "text-gray-600" : "text-gray-400"
        }`}
      >
        {label}
      </motion.div>

      {/* Success State */}
      {isConfirmed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center gap-2 text-green-500 font-black uppercase tracking-widest"
        >
          <Check size={20} strokeWidth={3} />
          {successLabel}
        </motion.div>
      )}

      {/* Thumb */}
      {!isConfirmed && (
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: dragRange }}
          dragElastic={0.05}
          onDragEnd={handleDragEnd}
          style={{ x, scale }}
          className={`relative z-10 w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-xl transition-colors ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <ArrowRight size={24} />
        </motion.div>
      )}
      
      {/* Progress Track */}
      <motion.div
        className={`absolute left-0 top-0 bottom-0 pointer-events-none ${
          darkMode ? "bg-white/10" : "bg-black/5"
        }`}
        style={{ width: x, borderTopLeftRadius: 99, borderBottomLeftRadius: 99 }}
      />
    </div>
  );
}
