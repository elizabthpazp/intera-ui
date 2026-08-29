"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {boolean} [props.open=false]
 * @param {function} [props.onOpenChange=()=>{}]
 * @param {ReactNode} [props.children]
 * @param {string} [props.title=""]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {Array<number>} [props.snapPoints=[0.85]] - Alturas relativas (0-1) - se usa el primero como altura
 */
export default function BottomSheet({
  open = false,
  onOpenChange = () => {},
  children,
  title = "",
  darkMode = false,
  className = "",
  style,
  snapPoints = [0.85],
}) {
  // FIX: ya no bloqueamos con overflow:hidden que causa que el layout salte y el botón Open Sheet suba/baje al aparecer la scrollbar
  // Usamos overscroll-behavior y dejamos el scroll del body intacto para que el botón quede quieto
  useEffect(() => {
    if (open) {
      // No tocar document.body.style.overflow para evitar layout shift
      document.body.style.overscrollBehavior = "contain";
      return () => { document.body.style.overscrollBehavior = ""; };
    }
  }, [open]);

  const heightVh = Math.min(Math.max((snapPoints[0] || 0.85) * 100, 30), 92);

  const handleDragEnd = (_, info) => {
    const shouldClose = info.velocity.y > 400 || info.offset.y > 100;
    if (shouldClose) onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
            aria-hidden="true"
          />
          <motion.div
            key="sheet"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.45}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "fixed bottom-0 left-0 right-0 z-50 rounded-t-[2rem] border-t shadow-2xl flex flex-col overflow-hidden will-change-transform",
              darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200",
              className
            )}
            style={{
              height: `${heightVh}vh`,
              maxHeight: "92vh",
              ...style,
            }}
          >
            {/* Handle - zona de arrastre + tap fuera de la barra también cierra */}
            <div
              onClick={() => onOpenChange(false)}
              className="flex justify-center pt-3 pb-2 shrink-0 cursor-pointer touch-manipulation"
              role="button"
              aria-label="Close sheet"
            >
              <div className={cn("w-12 h-1.5 rounded-full", darkMode ? "bg-gray-700" : "bg-gray-300")} />
            </div>

            {title && (
              <div className={cn("px-6 pb-4 flex items-center justify-between border-b shrink-0", darkMode ? "border-gray-800" : "border-gray-100")}>
                <h3 className={cn("text-lg font-black tracking-tight", darkMode ? "text-white" : "text-gray-900")}>{title}</h3>
                <button
                  onClick={() => onOpenChange(false)}
                  aria-label="Close"
                  className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", darkMode ? "bg-gray-800 hover:bg-gray-700 text-gray-400" : "bg-gray-100 hover:bg-gray-200 text-gray-500")}
                >
                  ✕
                </button>
              </div>
            )}

            <div className="flex-1 overflow-y-auto overscroll-contain p-6 touch-auto">
              {children}
            </div>

            <div className={cn("p-3 border-t text-[10px] text-center tracking-widest uppercase opacity-40 shrink-0", darkMode ? "border-gray-800 text-gray-500" : "border-gray-100 text-gray-400")}>
              Arrastra hacia abajo para cerrar
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Helper trigger for docs (no cambia)
export function BottomSheetTrigger({ onClick, darkMode, className, children }) {
  return (
    <button
      onClick={onClick}
      className={cn("px-6 py-3 rounded-xl font-bold shadow-lg transition-colors", darkMode ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800", className)}
    >
      {children || "Open Sheet"}
    </button>
  );
}
