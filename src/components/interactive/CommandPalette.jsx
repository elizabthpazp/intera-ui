"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, CornerDownLeft } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array de { id, label, icon?, shortcut?, onSelect }
 * @param {boolean} [props.open=false] - Controlado externo
 * @param {function} [props.onOpenChange=()=>{}]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.placeholder="Type a command..."]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function CommandPalette({
  items = [],
  open: controlledOpen,
  onOpenChange = () => {},
  darkMode = false,
  placeholder = "Type a command or search...",
  className = "",
  style,
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const isControlled = typeof controlledOpen === "boolean";
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = (v) => {
    if (!isControlled) setInternalOpen(v);
    onOpenChange(v);
  };

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const filtered = useMemo(() => {
    if (!query) return items;
    const q = query.toLowerCase();
    return items.filter((i) => i.label.toLowerCase().includes(q) || i.id.toLowerCase().includes(q));
  }, [items, query]);

  useEffect(() => setActiveIndex(0), [query]);

  const handleSelect = (item) => {
    item.onSelect?.(item);
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      {/* Trigger hint */}
      {!isControlled && (
        <button
          onClick={() => setOpen(true)}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-xl border text-sm transition-colors",
            darkMode ? "bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-200" : "bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-900 shadow-sm",
            className
          )}
          style={style}
        >
          <Search size={14} />
          <span className="hidden sm:inline">{placeholder}</span>
          <span className={cn("ml-2 hidden sm:flex items-center gap-1 text-[10px] px-1.5 py-1 rounded border font-mono", darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200")}>
            <Command size={10} /> K
          </span>
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] p-4"
          >
            <div className="absolute inset-0 backdrop-blur-md bg-black/40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={cn(
                "relative w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden",
                darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
              )}
            >
              <div className={cn("flex items-center gap-3 px-4 h-14 border-b", darkMode ? "border-gray-800" : "border-gray-100")}>
                <Search size={18} className={darkMode ? "text-gray-500" : "text-gray-400"} />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, filtered.length - 1)); }
                    if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, 0)); }
                    if (e.key === "Enter" && filtered[activeIndex]) handleSelect(filtered[activeIndex]);
                  }}
                  placeholder={placeholder}
                  className={cn("flex-1 bg-transparent outline-none text-sm", darkMode ? "placeholder:text-gray-600 text-white" : "placeholder:text-gray-400 text-gray-900")}
                />
                <span className={cn("hidden sm:flex text-[10px] px-1.5 py-1 rounded border", darkMode ? "bg-gray-800 border-gray-700 text-gray-500" : "bg-gray-50 border-gray-200 text-gray-400")}>ESC</span>
              </div>

              <div className="max-h-80 overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <div className={cn("text-center py-8 text-sm", darkMode ? "text-gray-500" : "text-gray-400")}>No results for "{query}"</div>
                ) : (
                  filtered.map((item, i) => (
                    <button
                      key={item.id}
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => handleSelect(item)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors text-left",
                        i === activeIndex ? (darkMode ? "bg-white text-black" : "bg-black text-white") : (darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-50")
                      )}
                    >
                      <span className="flex items-center gap-3">
                        {item.icon && <span className={cn("w-8 h-8 rounded-lg flex items-center justify-center", i === activeIndex ? (darkMode ? "bg-black/10" : "bg-white/10") : (darkMode ? "bg-gray-800" : "bg-gray-100"))}>{item.icon}</span>}
                        {item.label}
                      </span>
                      <span className="flex items-center gap-2">
                        {item.shortcut && <span className={cn("text-[10px] px-1.5 py-1 rounded font-mono", i === activeIndex ? "bg-white/20" : (darkMode ? "bg-gray-800 border border-gray-700" : "bg-gray-100 border border-gray-200"))}>{item.shortcut}</span>}
                        {i === activeIndex && <CornerDownLeft size={12} className="opacity-60" />}
                      </span>
                    </button>
                  ))
                )}
              </div>

              <div className={cn("flex items-center justify-between px-4 py-2 text-[10px] border-t", darkMode ? "bg-gray-950 border-gray-800 text-gray-600" : "bg-gray-50 border-gray-100 text-gray-400")}>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> {filtered.length} commands</span>
                <span>↑↓ Navigate • ↵ Select</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
