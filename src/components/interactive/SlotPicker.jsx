"use client";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Check } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * SlotPicker — reserva de citas que convierte.
 * Mes navegable + día seleccionable + slots con cupo + resumen
 * y confirmación. Resuelve booking sin librería de calendario.
 * Todo es click con estado real.
 */
const SLOTS = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];
const TAKEN = { "12:00": true };

export default function SlotPicker({
  darkMode = false,
  onConfirm = () => {},
  className = "",
  style,
}) {
  const today = new Date();
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [sel, setSel] = useState({ d: today.getDate(), m: today.getMonth(), y: today.getFullYear() });
  const [slot, setSlot] = useState(null);
  const [booked, setBooked] = useState(false);
  const day = sel.d;

  const cells = useMemo(() => {
    const y = cursor.getFullYear(); const m = cursor.getMonth();
    const first = new Date(y, m, 1).getDay();
    const total = new Date(y, m + 1, 0).getDate();
    const arr = [];
    for (let i = 0; i < first; i++) arr.push(null);
    for (let d = 1; d <= total; d++) arr.push(d);
    return { arr, y, m };
  }, [cursor]);

  const monthName = cursor.toLocaleDateString("es", { month: "long", year: "numeric" });
  const isPastDay = (d) => {
    const now = new Date();
    if (cells.y < now.getFullYear()) return true;
    if (cells.m < now.getMonth() && cells.y === now.getFullYear()) return true;
    return cells.y === now.getFullYear() && cells.m === now.getMonth() && d < now.getDate();
  };

  const confirm = () => {
    if (!slot || !sel.d) return;
    setBooked(true);
    onConfirm({ date: new Date(sel.y, sel.m, sel.d), slot });
  };

  return (
    <div style={style} className={cn("w-full min-w-0 max-w-full rounded-[1.8rem] border p-5 sm:p-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_240px]", darkMode ? "bg-[#0b0b12] border-white/10" : "bg-white border-black/10 shadow-sm", className)}>
      {/* calendario */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-black tracking-tight capitalize">{monthName}</h3>
          <div className="flex gap-1.5">
            <button type="button" onClick={() => setCursor(new Date(cells.y, cells.m - 1, 1))} className="w-9 h-9 rounded-xl border flex items-center justify-center"><ChevronLeft size={15} /></button>
            <button type="button" onClick={() => setCursor(new Date(today.getFullYear(), today.getMonth(), 1))} className="h-9 px-3 rounded-xl border text-xs font-bold">Hoy</button>
            <button type="button" onClick={() => setCursor(new Date(cells.y, cells.m + 1, 1))} className="w-9 h-9 rounded-xl border flex items-center justify-center"><ChevronRight size={15} /></button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">
          {["D", "L", "M", "X", "J", "V", "S"].map((d) => <span key={d} className="py-1">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.arr.map((d, i) => {
            if (!d) return <span key={i} />;
            const past = isPastDay(d);
            const active = sel.d === d && sel.m === cells.m && sel.y === cells.y;
            const isToday = d === today.getDate() && cells.m === today.getMonth() && cells.y === today.getFullYear();
            return (
              <button
                key={i} type="button" disabled={past}
                onClick={() => { setSel({ d, m: cells.m, y: cells.y }); setSlot(null); setBooked(false); }}
                className={cn("aspect-square rounded-xl text-sm font-bold border transition-all relative",
                  past ? "opacity-20 cursor-not-allowed border-transparent"
                  : active ? "bg-violet-500 border-violet-500 text-white shadow-lg"
                  : (darkMode ? "border-transparent hover:border-white/25" : "border-transparent hover:border-black/25"),
                  isToday && !active && "border-violet-500/60")}
              >
                {d}
                {isToday && !active && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-500" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* slots + resumen */}
      <div className={cn("rounded-[1.4rem] border p-4 flex flex-col", darkMode ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]")}>
        <p className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center gap-1.5 mb-3"><Clock size={13} /> {day ? `Día ${day}` : "Elige un día"}</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {SLOTS.map((s) => {
            const taken = TAKEN[s];
            const active = slot === s;
            return (
              <button key={s} type="button" disabled={taken || !day}
                onClick={() => setSlot(s)}
                className={cn("h-10 rounded-xl text-[13px] font-bold border transition-all",
                  taken || !day ? "opacity-25 cursor-not-allowed line-through"
                  : active ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                  : (darkMode ? "border-white/12 hover:border-white/40" : "border-black/12 hover:border-black/40"))}>
                {s}
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          {booked ? (
            <motion.div key="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="rounded-xl bg-emerald-500/12 border border-emerald-500/30 p-3 text-center">
              <Check size={18} className="text-emerald-500 mx-auto mb-1" />
              <p className="text-xs font-black">Reservado: día {day} · {slot}</p>
              <button type="button" onClick={() => { setBooked(false); setSlot(null); }} className="text-[11px] font-bold opacity-60 mt-1">Cambiar</button>
            </motion.div>
          ) : (
            <motion.button key="cta" exit={{ opacity: 0 }} type="button" disabled={!slot} onClick={confirm}
              className={cn("mt-auto h-11 rounded-xl text-sm font-bold transition-all", slot ? "bg-gradient-to-r from-violet-500 to-cyan-400 text-white" : "opacity-30 border")}>
              {slot ? `Confirmar ${slot}` : "Elige una hora"}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
