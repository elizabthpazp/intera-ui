"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {string} [props.placeholder="Search..."]
 * @param {function} [props.onSearch=() => {}]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function MorphingSearch({
  placeholder = "Search anything...",
  onSearch = () => {},
  darkMode = false,
  className = "",
  style,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  };

  return (
    <div className={cn("flex items-center justify-center", className)} style={style}>
      <motion.div
        layout
        initial={false}
        animate={{
          width: isExpanded ? "min(300px, 90vw)" : 48,
          borderRadius: isExpanded ? 12 : 24,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={cn("relative h-12 overflow-hidden flex items-center border shadow-sm max-w-[90vw]", darkMode ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-800")}
        onClick={() => !isExpanded && toggleExpand()}
      >
        <div className="absolute left-3 flex items-center justify-center w-6 h-6">
          <Search size={20} className={darkMode ? "text-gray-400" : "text-gray-500"} />
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.input
              ref={inputRef}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                onSearch(e.target.value);
              }}
              placeholder={placeholder}
              className="w-full h-full pl-11 pr-10 bg-transparent outline-none text-sm font-medium"
            />
          )}
        </AnimatePresence>

        {isExpanded && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={toggleExpand}
            className={cn("absolute right-3 p-1 rounded-full transition-colors", darkMode ? "hover:bg-gray-800 text-gray-400" : "hover:bg-gray-100 text-gray-500")}
          >
            <X size={16} />
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}
