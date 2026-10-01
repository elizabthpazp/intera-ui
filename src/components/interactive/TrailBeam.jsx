"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * TrailBeam — línea de progreso de scroll con pulso luminoso.
 * Género "tracing beam / timeline": versión Intera minimal —
 * track tenue + beam con gradiente + orbe que viaja con el scroll.
 * Pensado para envolver storytelling / features. Código original.
 */
export default function TrailBeam({
  children,
  steps = [],
  darkMode = false,
  accent = "from-violet-500 via-fuchsia-400 to-cyan-300",
  cardClassName = "",
  className = "",
  style,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.55"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const orbTop = useTransform(smooth, [0, 1], ["0%", "100%"]);
  const [pct, setPct] = useState(0);

  useEffect(() => smooth.on("change", (v) => setPct(Math.round(v * 100))), [smooth]);

  const fallback = [
    { title: "Descubre", content: "El haz despierta cuando entras a la zona." },
    { title: "Explora", content: "Cada paso enciende el gradiente a medida que bajas." },
    { title: "Domina", content: "El orbe llega al 100% y todo queda iluminado." },
  ];
  const hasKids = React.Children.count(children) > 0;
  const data = steps.length ? steps : fallback;

  return (
    <div ref={ref} style={style} className={cn("relative w-full min-w-0 max-w-full pl-10 sm:pl-14", className)}>
      {/* track */}
      <div className={cn("absolute left-[13px] sm:left-[19px] top-2 bottom-2 w-[2px] rounded-full", darkMode ? "bg-white/10" : "bg-black/10")} />
      {/* beam progresivo */}
      <motion.div
        style={{ scaleY: smooth, transformOrigin: "top" }}
        className={cn("absolute left-[13px] sm:left-[19px] top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b", accent)}
      />
      {/* orbe viajero */}
      <motion.div style={{ top: orbTop }} className="absolute left-[13px] sm:left-[19px] z-10">
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 p-[2px] shadow-[0_0_24px_rgba(139,92,246,0.7)]">
            <div className={cn("w-full h-full rounded-full flex items-center justify-center text-[9px] font-black", darkMode ? "bg-black text-white" : "bg-white text-black")}>
              {pct}
            </div>
          </div>
          <div className="absolute inset-0 -z-10 rounded-full bg-violet-500/40 blur-xl scale-150 animate-ping" style={{ animationDuration: "2.2s" }} />
        </div>
      </motion.div>

      <div className="space-y-6 sm:space-y-8 pb-4 min-w-0">
        {hasKids
          ? React.Children.map(children, (c, i) => <Step index={i} darkMode={darkMode} cardClassName={cardClassName}>{c}</Step>)
          : data.map((s, i) => (
              <Step key={i} index={i} darkMode={darkMode} cardClassName={cardClassName} title={s.title}>
                {s.content}
              </Step>
            ))}
      </div>
    </div>
  );
}

function Step({ index, title, children, darkMode, cardClassName = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 26 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={cn("relative rounded-[1.6rem] border p-5 sm:p-6 transition-colors min-w-0", darkMode ? "bg-[#0c0c13] border-white/10 hover:border-white/25" : "bg-white border-black/10 shadow-sm hover:shadow-md", cardClassName)}
    >
      <div className={cn("absolute -left-10 sm:-left-14 top-6 w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-black", darkMode ? "bg-black border-violet-400 text-white" : "bg-white border-violet-500 text-black")}>
        {index + 1}
      </div>
      {title && <h4 className={cn("font-black tracking-tight mb-1", darkMode ? "text-white" : "text-black")}>{title}</h4>}
      <div className={cn("text-sm leading-relaxed", darkMode ? "text-white/60" : "text-black/60")}>{children}</div>
    </motion.div>
  );
}
