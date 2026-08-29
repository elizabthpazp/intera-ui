"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array de { id, title, content, colSpan?, rowSpan?, color? }
 * @param {boolean} [props.draggable=true]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function BentoGrid({
  items: initial = [],
  draggable = true,
  darkMode = false,
  className = "",
  style,
}) {
  const fallback = [
    { id: "1", title: "Analytics", content: "Real-time metrics with spring animations", colSpan: "sm:col-span-2", rowSpan: "", color: "from-violet-500 to-purple-600" },
    { id: "2", title: "Inbox", content: "12 new messages", colSpan: "", rowSpan: "sm:row-span-2", color: "from-blue-500 to-cyan-500" },
    { id: "3", title: "Tasks", content: "8 pending", colSpan: "", rowSpan: "", color: "from-emerald-500 to-teal-600" },
    { id: "4", title: "Revenue", content: "$42,300", colSpan: "", rowSpan: "", color: "from-orange-500 to-pink-500" },
    { id: "5", title: "Calendar", content: "3 events today", colSpan: "sm:col-span-2", rowSpan: "", color: "from-pink-500 to-rose-500" },
  ];
  const [items, setItems] = useState(initial.length ? initial : fallback);
  const [dragId, setDragId] = useState(null);

  const onDragEnd = (id) => {
    setDragId(null);
  };

  const handleReorder = (draggedId, targetId) => {
    if (draggedId === targetId) return;
    setItems((prev) => {
      const from = prev.findIndex((i) => i.id === draggedId);
      const to = prev.findIndex((i) => i.id === targetId);
      if (from === -1 || to === -1) return prev;
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  };

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-[150px] sm:auto-rows-[160px]", className)} style={style}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layout
          drag={draggable}
          dragElastic={0.4}
          dragMomentum={false}
          dragTransition={{ power: 0.15, timeConstant: 200 }}
          onDragStart={() => setDragId(item.id)}
          onDragEnd={(_, info) => {
            setDragId(null);
            // Reordenar por proximidad: busca el elemento más cercano al punto de drop
            const el = document.elementFromPoint(info.point.x, info.point.y);
            const card = el?.closest("[data-bento-id]");
            const targetId = card?.getAttribute("data-bento-id");
            if (targetId) handleReorder(item.id, targetId);
          }}
          whileDrag={{ scale: 1.06, zIndex: 50, boxShadow: "0 24px 48px rgba(0,0,0,0.22)", cursor: "grabbing" }}
          data-bento-id={item.id}
          className={cn(
            "relative rounded-2xl p-4 sm:p-5 border flex flex-col justify-between overflow-hidden group cursor-grab active:cursor-grabbing select-none min-h-0",
            item.colSpan, item.rowSpan,
            darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200 shadow-sm hover:shadow-md",
            dragId === item.id && "ring-2 ring-violet-500/30"
          )}
          transition={{ type: "spring", damping: 24, stiffness: 280 }}
        >
          <div className={cn("absolute inset-0 opacity-10 bg-gradient-to-br", item.color)} />
          <div className="relative flex-1 min-h-0 flex flex-col">
            <div className={cn("w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br flex items-center justify-center text-white text-xs font-black shrink-0", item.color)}>
              {item.title[0]}
            </div>
            <h4 className={cn("mt-2 sm:mt-3 font-black tracking-tight text-sm sm:text-base leading-tight", darkMode ? "text-white" : "text-gray-900")}>{item.title}</h4>
            <p className={cn("text-xs mt-1 line-clamp-2 leading-snug", darkMode ? "text-gray-400" : "text-gray-500")}>{item.content}</p>
          </div>
          <div className="relative flex items-center justify-between shrink-0 pt-2 mt-2 border-t border-transparent">
            <span className={cn("text-[9px] sm:text-[10px] font-bold tracking-widest uppercase opacity-40", darkMode ? "text-gray-500" : "text-gray-400")}>Drag me</span>
            <GripVertical size={12} className={cn("opacity-20 group-hover:opacity-60 transition-opacity sm:hidden", darkMode ? "text-white" : "text-gray-900")} />
            <GripVertical size={14} className={cn("opacity-20 group-hover:opacity-60 transition-opacity hidden sm:block", darkMode ? "text-white" : "text-gray-900")} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
