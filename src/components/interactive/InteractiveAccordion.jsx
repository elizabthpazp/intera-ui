"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array of { id: string, title: string, content: string }
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 */
export default function InteractiveAccordion({
  items = [],
  darkMode = false,
  className = ""
}) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleItem = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={`flex flex-col gap-3 w-full max-w-md ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
            expandedId === item.id
              ? (darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-black shadow-lg")
              : (darkMode ? "bg-gray-900 border-gray-800 hover:border-gray-700" : "bg-gray-50 border-gray-200 hover:border-gray-300")
          }`}
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-5 flex items-center justify-between text-left group"
          >
            <span className={`font-black uppercase tracking-widest text-sm transition-colors ${
              expandedId === item.id
                ? (darkMode ? "text-white" : "text-black")
                : (darkMode ? "text-gray-400 group-hover:text-gray-200" : "text-gray-500 group-hover:text-gray-900")
            }`}>
              {item.title}
            </span>
            <motion.div
              animate={{ rotate: expandedId === item.id ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={expandedId === item.id ? (darkMode ? "text-white" : "text-black") : "text-gray-500"}
            >
              <ChevronDown size={18} />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {expandedId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className={`px-6 pb-6 text-sm leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  <motion.div
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.content}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
