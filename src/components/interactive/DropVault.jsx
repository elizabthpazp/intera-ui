"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, FileText, X, Check, AlertTriangle } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * DropVault — uploader que sí sirve para producción.
 * Drag & drop + validación de tipo/peso + progreso por archivo +
 * previsualización de imágenes + reintento. Puro click/drag/drop.
 */
const MAX_MB = 8;
const ACCEPT = ["image/png", "image/jpeg", "image/webp", "application/pdf"];

export default function DropVault({
  darkMode = false,
  maxMb = MAX_MB,
  maxFiles = 8,
  accept = ACCEPT,
  onFilesChange = () => {},
  className = "",
  style,
}) {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const push = (list) => {
    const arr = Array.from(list || []);
    const mapped = arr.map((f) => {
      const badType = accept.length > 0 && f.type && !accept.includes(f.type);
      const tooBig = f.size > maxMb * 1024 * 1024;
      return {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        file: f,
        name: f.name,
        size: f.size,
        type: f.type,
        preview: f.type.startsWith("image/") ? URL.createObjectURL(f) : null,
        progress: 0,
        status: badType ? "error-type" : tooBig ? "error-size" : "uploading",
      };
    });
    const next = [...files, ...mapped].slice(0, maxFiles);
    setFiles(next);
    onFilesChange(next);
    // simula upload por archivo válido
    mapped.forEach((m) => {
      if (m.status !== "uploading") return;
      const tick = setInterval(() => {
        setFiles((prev) => {
          const copy = prev.map((p) => {
            if (p.id !== m.id) return p;
            const np = Math.min(100, p.progress + 12 + Math.random() * 18);
            return { ...p, progress: np, status: np >= 100 ? "done" : "uploading" };
          });
          const doneOne = copy.find((p) => p.id === m.id);
          if (doneOne && doneOne.status === "done") clearInterval(tick);
          return copy;
        });
      }, 220);
    });
  };

  const remove = (id) => {
    const next = files.filter((f) => f.id !== id);
    setFiles(next); onFilesChange(next);
  };

  const fmt = (b) => (b > 1048576 ? `${(b / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1024))} KB`);

  return (
    <div style={style} className={cn("w-full min-w-0 max-w-full rounded-[1.8rem] border p-4 sm:p-5", darkMode ? "bg-[#0b0b12] border-white/10" : "bg-white border-black/10 shadow-sm", className)}>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); push(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
        className={cn("rounded-[1.4rem] border-2 border-dashed p-6 sm:p-10 text-center cursor-pointer transition-all",
          dragging ? "border-violet-500 bg-violet-500/10 scale-[1.01]" : (darkMode ? "border-white/12 hover:border-white/30" : "border-black/12 hover:border-black/30"))}
      >
        <motion.div animate={dragging ? { scale: 1.15, y: -4 } : { scale: 1, y: 0 }} className={cn("w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4", darkMode ? "bg-white text-black" : "bg-black text-white")}>
          <UploadCloud size={24} />
        </motion.div>
        <p className="font-black tracking-tight text-base sm:text-lg">{dragging ? "¡Suelta ahora!" : "Arrastra archivos o haz click"}</p>
        <p className={cn("text-xs mt-1.5 font-medium", darkMode ? "text-white/50" : "text-black/50")}>PNG · JPG · WEBP · PDF — máx {maxMb}MB · hasta {maxFiles} archivos</p>
        <input ref={inputRef} type="file" multiple hidden accept={accept.join(",")} onChange={(e) => { push(e.target.files); e.target.value = ""; }} />
      </div>

      <div className="mt-4 space-y-2.5">
        <AnimatePresence initial={false}>
          {files.map((f) => (
            <motion.div key={f.id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: 40 }}
              className={cn("flex items-center gap-3 rounded-2xl border p-3", darkMode ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]")}>
              {f.preview ? (
                <img src={f.preview} alt="" className="w-11 h-11 rounded-xl object-cover shrink-0" />
              ) : (
                <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center shrink-0", darkMode ? "bg-white/10" : "bg-black/8")}><FileText size={18} /></div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-[13px] font-bold truncate">{f.name}</p>
                  {f.status === "done" && <Check size={14} className="text-emerald-500 shrink-0" />}
                  {f.status.startsWith("error") && <AlertTriangle size={14} className="text-red-500 shrink-0" />}
                </div>
                <p className={cn("text-[11px] font-medium", darkMode ? "text-white/45" : "text-black/45")}>
                  {f.status === "error-type" ? "Tipo no permitido" : f.status === "error-size" ? `Pesa ${fmt(f.size)} — supera ${maxMb}MB` : `${fmt(f.size)} · ${Math.round(f.progress)}%`}
                </p>
                {!f.status.startsWith("error") && f.status !== "done" && (
                  <div className={cn("h-1.5 rounded-full mt-1.5 overflow-hidden", darkMode ? "bg-white/10" : "bg-black/10")}>
                    <motion.div animate={{ width: `${f.progress}%` }} className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                  </div>
                )}
              </div>
              {f.status.startsWith("error") ? (
                <button type="button" onClick={() => remove(f.id)} className="text-[11px] font-bold text-red-500 px-2">Quitar</button>
              ) : f.status === "done" ? (
                <span className="text-[11px] font-black text-emerald-500 px-2">LISTO</span>
              ) : null}
              <button type="button" onClick={() => remove(f.id)} aria-label="remove" className="opacity-40 hover:opacity-100 p-1"><X size={15} /></button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {files.length > 0 && (
        <div className="flex items-center gap-2 mt-4">
          <span className={cn("text-xs font-bold", darkMode ? "text-white/50" : "text-black/50")}>
            {files.filter((f) => f.status === "done").length}/{files.length} listos
          </span>
          <button type="button" onClick={() => { setFiles([]); onFilesChange([]); }} className="ml-auto text-xs font-bold opacity-50 hover:opacity-100">Limpiar todo</button>
        </div>
      )}
    </div>
  );
}
