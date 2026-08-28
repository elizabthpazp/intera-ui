"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array of { title: string, content: string, image: string }
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 */
export default function GlassStack({
  items = [],
  darkMode = false,
  className = ""
}) {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className={`relative w-full h-[400px] flex items-center justify-center perspective-1000 ${className}`}>
      <div className="relative w-64 h-80 cursor-pointer" onClick={nextCard}>
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => {
            const isFront = i === index;
            const position = (i - index + items.length) % items.length;
            
            // Only show the top 3 cards for performance and visual clarity
            if (position > 2) return null;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{
                  opacity: 1 - position * 0.2,
                  scale: 1 - position * 0.05,
                  y: -position * 20,
                  z: -position * 50,
                  rotateX: isFront ? 0 : -5,
                  zIndex: items.length - position,
                }}
                exit={{ opacity: 0, scale: 1.1, y: -40, rotateZ: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`absolute inset-0 rounded-3xl p-6 border flex flex-col justify-between backdrop-blur-xl transition-colors ${
                  darkMode 
                    ? "bg-gray-900/40 border-gray-800 text-white" 
                    : "bg-white/40 border-white/60 text-gray-900 shadow-xl"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="space-y-2">
                  <div className={`w-10 h-1 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`} />
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                </div>

                <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {item.content}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                    Step {i + 1}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                    darkMode ? "border-gray-700 bg-gray-800" : "border-gray-100 bg-white"
                  }`}>
                    →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {/* Instructions */}
      <div className={`absolute bottom-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 ${
        darkMode ? "text-white" : "text-black"
      }`}>
        Click to Rotate Stack
      </div>
    </div>
  );
}
