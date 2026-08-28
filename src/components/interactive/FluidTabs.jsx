"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array} [props.tabs=[]] - Array of { id: string, label: string }
 * @param {string} [props.activeTab=""]
 * @param {function} [props.onChange=() => {}]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function FluidTabs({
  tabs = [],
  activeTab = "",
  onChange = () => {},
  darkMode = false,
  className = "",
  style,
}) {
  const [active, setActive] = useState(activeTab || (tabs[0]?.id || ""));
  const [hoveredTab, setHoveredTab] = useState(null);
  
  const handleTabClick = (id) => {
    setActive(id);
    onChange(id);
  };

  return (
    <div className={cn("flex items-center gap-1 p-1.5 rounded-2xl border", darkMode ? "bg-gray-900/50 border-gray-800" : "bg-gray-100/50 border-gray-200 shadow-sm", className)} style={style}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          onMouseEnter={() => setHoveredTab(tab.id)}
          onMouseLeave={() => setHoveredTab(null)}
          className={cn("relative px-6 py-2.5 text-sm font-black uppercase tracking-wider transition-colors duration-300 z-10", active === tab.id ? (darkMode ? "text-black" : "text-white") : (darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-900"))}
        >
          {tab.label}
          
          {active === tab.id && (
            <motion.div
              layoutId="fluid-indicator"
              className={cn("absolute inset-0 -z-10 rounded-xl", darkMode ? "bg-white" : "bg-black")}
              transition={{
                type: "spring",
                bounce: 0.25,
                stiffness: 130,
                damping: 18
              }}
            />
          )}

          {hoveredTab === tab.id && active !== tab.id && (
            <motion.div
              layoutId="hover-indicator"
              className={cn("absolute inset-0 -z-10 rounded-xl", darkMode ? "bg-white/5" : "bg-black/5")}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.3
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
