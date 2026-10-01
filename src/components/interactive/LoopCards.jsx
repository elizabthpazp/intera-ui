"use client";
import React, { useState } from "react";
import { Pause, Play, ArrowLeftRight } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * LoopCards — carrusel infinito con control total y estética Intera.
 * Género "infinite moving cards": reimaginado como cinta con máscara de
 * desvanecido, pausa al hover, control de dirección/velocidad y drag nativo.
 * Implementación propia con CSS animation.
 */
export default function LoopCards({
  items = [],
  darkMode = false,
  speed = 32,
  direction = "right",
  pauseOnHover = true,
  className = "",
  style,
}) {
  const fallback = [
    { id: "1", title: "Diseño vivo", content: "Micro-interacciones que responden al tacto, no solo decoran." },
    { id: "2", title: "Motion real", content: "Springs y física creíble en cada transición." },
    { id: "3", title: "Dark primero", content: "Contraste perfecto en ambos modos de color." },
    { id: "4", title: "Composable", content: "Props claras, cero dependencias ocultas." },
    { id: "5", title: "Performante", content: "CSS + transform, sin re-renders por frame." },
  ];
  const data = items.length ? items : fallback;

  const [dir, setDir] = useState(direction);
  const [paused, setPaused] = useState(false);
  const [fast, setFast] = useState(speed);
  const [hovering, setHovering] = useState(false);

  // Sincroniza si el consumidor cambia props después del montaje
  React.useEffect(() => setFast(speed), [speed]);
  React.useEffect(() => setDir(direction), [direction]);

  const isPaused = paused || (pauseOnHover && hovering);

  const row = [...data, ...data];

  return (
    <div style={style} className={cn("w-full min-w-0 max-w-full", className)}>
      <style>{`
        @keyframes ia-loop-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes ia-loop-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          className={cn("h-9 px-3 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all", darkMode ? "bg-white text-black border-white hover:scale-105" : "bg-black text-white border-black hover:scale-105")}
        >
          {paused ? <Play size={13} /> : <Pause size={13} />}
          {paused ? "Play" : "Pause"}
        </button>
        <button
          type="button"
          onClick={() => setDir((d) => (d === "left" ? "right" : "left"))}
          className={cn("h-9 px-3 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all", darkMode ? "border-white/15 text-white hover:bg-white/10" : "border-black/15 text-black hover:bg-black/5")}
        >
          <ArrowLeftRight size={13} /> {dir === "left" ? "← left" : "right →"}
        </button>
        <div className="flex items-center gap-2 ml-auto">
          {[22, 32, 48].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFast(s)}
              className={cn("h-8 w-10 rounded-lg text-[11px] font-black border transition-all", fast === s ? (darkMode ? "bg-white text-black border-white" : "bg-black text-white border-black") : (darkMode ? "border-white/15 text-white/50" : "border-black/15 text-black/50"))}
            >
              {s === 22 ? "3x" : s === 32 ? "2x" : "1x"}
            </button>
          ))}
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div
          className="flex gap-4 w-max pr-4"
          style={{
            animationName: dir === "left" ? "ia-loop-left" : "ia-loop-right",
            animationDuration: `${fast}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {row.map((it, i) => (
            <article
              key={`${it.id}-${i}`}
              className={cn(
                "w-[min(280px,74vw)] shrink-0 rounded-[1.6rem] p-5 sm:p-6 border text-left transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-[-0.5deg]",
                darkMode ? "bg-[#0d0d14] border-white/10 hover:border-white/25" : "bg-white border-black/10 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.25)] hover:shadow-[0_26px_50px_-18px_rgba(0,0,0,0.3)]"
              )}
            >
              <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black mb-4", i % 3 === 0 ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white" : i % 3 === 1 ? "bg-gradient-to-br from-cyan-400 to-blue-500 text-white" : (darkMode ? "bg-white text-black" : "bg-black text-white"))}>
                {(it.title || "?")[0]}
              </div>
              <h4 className={cn("font-black tracking-tight", darkMode ? "text-white" : "text-black")}>{it.title}</h4>
              <p className={cn("text-[13px] mt-1.5 leading-relaxed", darkMode ? "text-white/55" : "text-black/55")}>{it.content}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
