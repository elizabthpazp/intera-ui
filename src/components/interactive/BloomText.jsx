"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, MousePointerClick } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * BloomText — revelado de texto por palabras con blur + resorte.
 * Género "text generate / flip words": reinterpretación Intera —
 * cada palabra florece con blur→nítido, es hovereable y re-jugable.
 * Click en la palabra la hace "saltar". 100% original.
 */
export default function BloomText({
  text = "Interfaces que respiran, responden y enamoran a cada scroll.",
  darkMode = false,
  highlightWords = ["respiran,", "enamoran"],
  highlightClass = "text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400",
  textClassName = "text-3xl sm:text-4xl",
  showReplay = true,
  className = "",
  style,
}) {
  const [runId, setRunId] = useState(0);
  const [popped, setPopped] = useState(null);
  const words = text.split(" ");

  return (
    <div style={style} className={cn("w-full min-w-0 max-w-full", className)}>
      {showReplay && (
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <button
            type="button"
            onClick={() => setRunId((v) => v + 1)}
            className={cn("h-9 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-transform hover:scale-105 active:scale-95", darkMode ? "bg-white text-black" : "bg-black text-white")}
          >
            <RotateCcw size={13} /> Replay bloom
          </button>
          <span className={cn("text-[11px] font-medium flex items-center gap-1.5", darkMode ? "text-white/40" : "text-black/40")}>
            <MousePointerClick size={13} /> click a word — it pops
          </span>
        </div>
      )}

      <p key={runId} className={cn("font-black tracking-tighter leading-[1.08] break-words", textClassName, darkMode ? "text-white" : "text-black")}>
        <AnimatePresence mode="popLayout">
          {words.map((w, i) => {
            const hot = highlightWords.includes(w);
            const isPopped = popped === `${runId}-${i}`;
            return (
              <motion.span
                key={`${runId}-${i}`}
                initial={{ opacity: 0, y: 18, filter: "blur(10px)", scale: 0.92 }}
                animate={isPopped
                  ? { opacity: 1, y: [0, -12, 0], filter: "blur(0px)", scale: [1, 1.18, 1] }
                  : { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{ delay: i * 0.055, type: "spring", stiffness: 260, damping: 22 }}
                onClick={() => setPopped(`${runId}-${i}`)}
                whileHover={{ scale: 1.1, rotate: -1.5, transition: { duration: 0.15 } }}
                className={cn("inline-block mr-[0.28em] cursor-pointer select-none pb-1", hot && highlightClass)}
              >
                {w}
              </motion.span>
            );
          })}
        </AnimatePresence>
      </p>

      <div className="mt-5 flex gap-1.5">
        {words.map((_, i) => (
          <motion.span
            key={`bar-${runId}-${i}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: i * 0.055 + 0.1, duration: 0.35 }}
            className={cn("h-1 flex-1 rounded-full origin-left", darkMode ? "bg-white/80" : "bg-black/80")}
          />
        ))}
      </div>
    </div>
  );
}
