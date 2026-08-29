"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array<string>} [props.texts=[]] - Frases a morfar
 * @param {number} [props.interval=2500] - Ms entre cambios
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {string} [props.variant="blur"] - blur | slide | scale
 */
export default function KineticMorphText({
  texts = ["InteraUI", "Interactive", "Modern", "Delightful"],
  interval = 2500,
  darkMode = false,
  className = "",
  style,
  variant = "blur",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % texts.length), interval);
    return () => clearInterval(id);
  }, [texts.length, interval]);

  const variants = {
    blur: {
      initial: { opacity: 0, filter: "blur(10px)", y: 20 },
      animate: { opacity: 1, filter: "blur(0px)", y: 0 },
      exit: { opacity: 0, filter: "blur(10px)", y: -20 },
    },
    slide: {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -40 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.2 },
    },
  }[variant] || {
    initial: { opacity: 0, filter: "blur(10px)", y: 20 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    exit: { opacity: 0, filter: "blur(10px)", y: -20 },
  };

  return (
    <div className={cn("relative flex items-center justify-center py-6 sm:py-8 overflow-hidden px-4", className)} style={style}>
      <div className="relative h-16 sm:h-20 flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <motion.h2
            key={index}
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn("text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-center whitespace-normal sm:whitespace-nowrap break-words px-2", darkMode ? "text-white" : "text-gray-900")}
          >
            {texts[index]}
            <span className="inline-block w-1.5 h-6 sm:w-2 sm:h-8 ml-1 bg-current animate-pulse align-middle" />
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-0 flex gap-1.5">
        {texts.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            className={cn("h-1 rounded-full transition-all", i === index ? "w-6 bg-current" : "w-1 opacity-20 bg-current")}
            animate={{ opacity: i === index ? 1 : 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
