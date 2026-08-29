"use client";
import React, { useState, useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {string} [props.label="Slide to confirm"]
 * @param {string} [props.successLabel="Confirmed"]
 * @param {function} [props.onConfirm=() => {}] - Llamado al confirmar. La librería NO hace alert por defecto, delega al consumidor.
 * @param {function} [props.onReset=() => {}] - Llamado al resetear
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {number|null} [props.resetDelay=null] - Ms para auto-reset tras confirmar. null = se queda confirmado hasta reset manual.
 * @param {boolean} [props.disabled=false]
 * @param {boolean} [props.allowReset=true] - Si true muestra botón de reset tras confirmar
 */
export default function SwipeToConfirm({
  label = "Slide to confirm",
  successLabel = "Confirmed",
  onConfirm = () => {},
  onReset = () => {},
  darkMode = false,
  className = "",
  style,
  resetDelay = null,
  disabled = false,
  allowReset = true,
}) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const x = useMotionValue(0);
  
  const containerWidth = 280;
  const thumbSize = 50;
  const dragRange = containerWidth - thumbSize - 8;
  // Responsive: en móvil usa 90vw, clamp a 280

  const opacity = useTransform(x, [0, dragRange], [1, 0]);
  const scale = useTransform(x, [0, dragRange], [1, 1.1]);

  const reset = useCallback(() => {
    setIsConfirmed(false);
    x.set(0);
    onReset();
  }, [x, onReset]);

  const handleDragEnd = () => {
    if (disabled) {
      x.set(0);
      return;
    }
    if (x.get() >= dragRange - 10) {
      setIsConfirmed(true);
      onConfirm();
      if (resetDelay !== null && typeof resetDelay === "number") {
        setTimeout(() => reset(), resetDelay);
      }
    } else {
      x.set(0);
    }
  };

  return (
    <div className={cn("relative h-14 sm:h-[60px] rounded-full p-1 border flex items-center overflow-hidden select-none w-full max-w-[280px]", darkMode ? "bg-gray-900 border-gray-800" : "bg-gray-100 border-gray-200 shadow-inner", disabled && "opacity-50 cursor-not-allowed", className)} style={{ width: "min(280px, 90vw)", ...style }}>
      
      <motion.div 
        style={{ opacity }}
        className={cn("absolute inset-y-0 left-14 right-2 flex items-center justify-center text-xs sm:text-sm font-black uppercase tracking-widest pointer-events-none select-none", darkMode ? "text-gray-600" : "text-gray-400")}
      >
        {label}
      </motion.div>

      {isConfirmed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center gap-2 text-green-500 font-black uppercase tracking-widest"
        >
          <Check size={20} strokeWidth={3} />
          {successLabel}
          {allowReset && (
            <button
              onClick={reset}
              aria-label="Reset"
              className={cn("ml-2 p-1.5 rounded-full transition-colors", darkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/5 hover:bg-black/10 text-black")}
            >
              <RotateCcw size={14} />
            </button>
          )}
        </motion.div>
      )}

      {!isConfirmed && (
        <motion.div
          drag={disabled ? false : "x"}
          dragConstraints={{ left: 0, right: dragRange }}
          dragElastic={0.05}
          onDragEnd={handleDragEnd}
          style={{ x, scale }}
          className={cn("relative z-10 w-12 h-12 sm:w-[50px] sm:h-[50px] ml-1 rounded-full flex items-center justify-center shadow-xl transition-colors shrink-0", disabled ? "cursor-not-allowed" : "cursor-grab active:cursor-grabbing", darkMode ? "bg-white text-black" : "bg-black text-white")}
        >
          <ArrowRight size={18} className="sm:hidden" />
          <ArrowRight size={24} className="hidden sm:block" />
        </motion.div>
      )}
      
      <motion.div
        className={cn("absolute left-0 top-0 bottom-0 pointer-events-none", darkMode ? "bg-white/10" : "bg-black/5")}
        style={{ width: x, borderTopLeftRadius: 99, borderBottomLeftRadius: 99 }}
      />
    </div>
  );
}
