"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * FlowBoard — kanban con drag & drop real entre columnas.
 * Resuelve gestión de tareas sin backend: crear, mover (drag nativo),
 * eliminar y ver conteos. Todo es acción, nada decorativo.
 */
const COLS = [
  { id: "todo", title: "Por hacer", dot: "bg-blue-500" },
  { id: "doing", title: "En curso", dot: "bg-amber-500" },
  { id: "done", title: "Listo", dot: "bg-emerald-500" },
];

export default function FlowBoard({
  darkMode = false,
  initial = [
    { id: "t1", col: "todo", title: "Diseñar landing", tag: "Design" },
    { id: "t2", col: "todo", title: "Conectar Stripe", tag: "Dev" },
    { id: "t3", col: "doing", title: "Escribir copy hero", tag: "Copy" },
    { id: "t4", col: "done", title: "Deploy staging", tag: "DevOps" },
  ],
  onChange = () => {},
  className = "",
  style,
}) {
  const [tasks, setTasks] = useState(initial);
  const [draft, setDraft] = useState("");
  const [dragOver, setDragOver] = useState(null);
  const [dragId, setDragId] = useState(null);

  const update = (next) => { setTasks(next); onChange(next); };

  const add = () => {
    const title = draft.trim();
    if (!title) return;
    update([...tasks, { id: `t-${Date.now()}`, col: "todo", title, tag: "Nuevo" }]);
    setDraft("");
  };

  const move = (id, col) => update(tasks.map((t) => (t.id === id ? { ...t, col } : t)));
  const remove = (id) => update(tasks.filter((t) => t.id !== id));

  return (
    <div style={style} className={cn("w-full min-w-0 max-w-full", className)}>
      {/* input crear */}
      <div className={cn("flex gap-2 mb-4 rounded-2xl border p-2", darkMode ? "bg-[#0b0b12] border-white/10" : "bg-white border-black/10 shadow-sm")}>
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="Nueva tarea + Enter… (ej: Revisar pricing)"
          className="flex-1 min-w-0 bg-transparent outline-none text-sm font-medium px-3"
        />
        <button type="button" onClick={add} disabled={!draft.trim()}
          className={cn("h-10 px-4 rounded-xl text-xs font-bold flex items-center gap-1.5 disabled:opacity-30", darkMode ? "bg-white text-black" : "bg-black text-white")}>
          <Plus size={14} /> Añadir
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {COLS.map((c) => {
          const items = tasks.filter((t) => t.col === c.id);
          return (
            <div
              key={c.id}
              onDragOver={(e) => { e.preventDefault(); setDragOver(c.id); }}
              onDragLeave={() => setDragOver(null)}
              onDrop={(e) => { e.preventDefault(); const id = e.dataTransfer.getData("text/plain"); if (id) move(id, c.id); setDragOver(null); setDragId(null); }}
              className={cn("rounded-[1.6rem] border p-3 min-h-[280px] transition-all",
                darkMode ? "bg-[#0b0b12] border-white/10" : "bg-black/[0.02] border-black/10",
                dragOver === c.id && "ring-2 ring-violet-500/50 border-violet-500")}
            >
              <div className="flex items-center gap-2 px-2 py-2">
                <span className={cn("w-2.5 h-2.5 rounded-full", c.dot)} />
                <p className="text-xs font-black uppercase tracking-widest">{c.title}</p>
                <span className={cn("ml-auto text-[11px] font-black px-2 py-0.5 rounded-full", darkMode ? "bg-white/10" : "bg-black/10")}>{items.length}</span>
              </div>
              <div className="space-y-2">
                <AnimatePresence initial={false}>
                  {items.map((t) => (
                    <motion.div
                      key={t.id} layout
                      draggable
                      onDragStart={(e) => { e.dataTransfer.setData("text/plain", t.id); setDragId(t.id); }}
                      onDragEnd={() => { setDragId(null); setDragOver(null); }}
                      initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: dragId === t.id ? 0.4 : 1, scale: 1 }} exit={{ opacity: 0, x: 30 }}
                      className={cn("rounded-2xl border p-3.5 cursor-grab active:cursor-grabbing group",
                        darkMode ? "bg-white/[0.05] border-white/10 hover:border-white/25" : "bg-white border-black/10 shadow-sm hover:shadow-md")}
                    >
                      <div className="flex items-start gap-2">
                        <p className="text-[13px] font-bold leading-snug flex-1">{t.title}</p>
                        <button type="button" onClick={() => remove(t.id)} aria-label="delete"
                          className="opacity-60 md:opacity-0 md:group-hover:opacity-50 hover:!opacity-100 transition-opacity shrink-0 p-1 -m-1"><X size={14} /></button>
                      </div>
                      <div className="flex items-center gap-2 mt-2.5">
                        <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-violet-500/15 text-violet-500">{t.tag}</span>
                        <span className={cn("text-[10px] font-bold opacity-40 ml-auto")}>drag me →</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {items.length === 0 && (
                  <p className={cn("text-center text-xs font-medium py-8 border border-dashed rounded-2xl opacity-40", darkMode ? "border-white/10" : "border-black/10")}>
                    Arrastra tareas aquí
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <p className={cn("text-[11px] font-medium mt-3 text-center", darkMode ? "text-white/35" : "text-black/35")}>
        {tasks.filter((t) => t.col === "done").length}/{tasks.length} completadas · arrastra entre columnas, todo es local y funciona sin backend
      </p>
    </div>
  );
}
