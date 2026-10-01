"use client";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpDown, Download, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * SmartTable — tabla de datos que resuelve el admin de verdad.
 * Buscar + ordenar + filtrar por estado + seleccionar + paginar + exportar CSV.
 * Nada de hover decorativo: todo es acción (click / type) con resultado útil.
 *
 * @param {Array} [props.columns] - [{ key, label, sortable? }]
 * @param {Array} [props.data] - filas objeto
 * @param {boolean} [props.darkMode]
 * @param {number} [props.pageSize=5]
 * @param {function} [props.onSelectionChange]
 */
export default function SmartTable({
  columns = [
    { key: "name", label: "Cliente", sortable: true },
    { key: "plan", label: "Plan", sortable: true },
    { key: "status", label: "Estado", sortable: true },
    { key: "mrr", label: "MRR", sortable: true },
  ],
  data = [
    { id: "1", name: "Acme Corp", plan: "Scale", status: "active", mrr: 490 },
    { id: "2", name: "Loomify", plan: "Starter", status: "trial", mrr: 0 },
    { id: "3", name: "Nube Labs", plan: "Scale", status: "past_due", mrr: 290 },
    { id: "4", name: "Kubo", plan: "Enterprise", status: "active", mrr: 1200 },
    { id: "5", name: "Fintual", plan: "Starter", status: "canceled", mrr: 0 },
    { id: "6", name: "Datalab", plan: "Scale", status: "active", mrr: 590 },
    { id: "7", name: "Orión", plan: "Starter", status: "trial", mrr: 0 },
    { id: "8", name: "Pulsar", plan: "Enterprise", status: "active", mrr: 2400 },
  ],
  darkMode = false,
  pageSize = 5,
  onSelectionChange = () => {},
  className = "",
  style,
}) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sort, setSort] = useState({ key: null, dir: 1 });
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(new Set());

  const filtered = useMemo(() => {
    let rows = [...data];
    if (query) {
      const q = query.toLowerCase();
      rows = rows.filter((r) => Object.values(r).join(" ").toLowerCase().includes(q));
    }
    if (statusFilter !== "all") rows = rows.filter((r) => r.status === statusFilter);
    if (sort.key) {
      rows.sort((a, b) => {
        const av = a[sort.key]; const bv = b[sort.key];
        if (typeof av === "number") return (av - bv) * sort.dir;
        return String(av).localeCompare(String(bv)) * sort.dir;
      });
    }
    return rows;
  }, [data, query, statusFilter, sort]);

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, pages - 1);
  const visible = filtered.slice(safePage * pageSize, safePage * pageSize + pageSize);

  const toggleSort = (key) => {
    setSort((s) => (s.key !== key ? { key, dir: 1 } : { key, dir: s.dir * -1 }));
  };

  const toggleRow = (id) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id); else next.add(id);
    setSelected(next);
    onSelectionChange([...next]);
  };

  const toggleAll = () => {
    if (visible.every((r) => selected.has(r.id))) {
      const next = new Set(selected);
      visible.forEach((r) => next.delete(r.id));
      setSelected(next); onSelectionChange([...next]);
    } else {
      const next = new Set(selected);
      visible.forEach((r) => next.add(r.id));
      setSelected(next); onSelectionChange([...next]);
    }
  };

  const exportCSV = () => {
    const rows = filtered.length ? filtered : visible;
    const header = columns.map((c) => c.label).join(",");
    const body = rows.map((r) => columns.map((c) => JSON.stringify(r[c.key] ?? "")).join(",")).join("\n");
    const blob = new Blob([header + "\n" + body], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "intera-export.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  const statuses = ["all", ...Array.from(new Set(data.map((d) => d.status)))];

  // Ventana deslizante de 5 páginas alrededor de la actual (responsive: no desborda)
  const pageWindow = (() => {
    const max = 5;
    let start = Math.max(0, Math.min(safePage - 2, pages - max));
    return Array.from({ length: Math.min(max, pages) }).map((_, i) => start + i);
  })();

  return (
    <div style={style} className={cn("w-full min-w-0 max-w-full rounded-[1.8rem] border overflow-hidden", darkMode ? "bg-[#0b0b12] border-white/10" : "bg-white border-black/10 shadow-sm", className)}>
      {/* toolbar real: buscar + filtrar + exportar */}
      <div className="flex flex-wrap items-center gap-2 p-4 border-b" style={{ borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
        <div className={cn("flex items-center gap-2 px-3 h-10 rounded-xl border flex-1 min-w-[200px]", darkMode ? "bg-white/5 border-white/10" : "bg-black/[0.03] border-black/10")}>
          <Search size={15} className="opacity-40 shrink-0" />
          <input
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(0); }}
            placeholder="Buscar cliente, plan, estado…"
            className="bg-transparent outline-none text-sm w-full font-medium"
          />
          {query && <button type="button" onClick={() => setQuery("")} className="text-xs font-bold opacity-50 hover:opacity-100">✕</button>}
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {statuses.map((s) => (
            <button
              key={s} type="button" onClick={() => { setStatusFilter(s); setPage(0); }}
              className={cn("h-9 px-3 rounded-xl text-xs font-bold border transition-all",
                statusFilter === s
                  ? (darkMode ? "bg-white text-black border-white" : "bg-black text-white border-black")
                  : (darkMode ? "border-white/12 text-white/60 hover:text-white" : "border-black/12 text-black/60 hover:text-black"))}
            >
              {s === "all" ? "Todos" : s.replace("_", " ")}
            </button>
          ))}
        </div>
        <button type="button" onClick={exportCSV} className={cn("h-10 px-4 rounded-xl text-xs font-bold flex items-center gap-2 ml-auto", darkMode ? "bg-white text-black" : "bg-black text-white")}>
          <Download size={14} /> CSV ({filtered.length})
        </button>
      </div>

      {/* tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[560px]">
          <thead>
            <tr className={cn("text-left text-[11px] uppercase tracking-widest", darkMode ? "text-white/40" : "text-black/40")}>
              <th className="p-4 w-10">
                <button type="button" onClick={toggleAll} aria-label="select all"
                  className={cn("w-5 h-5 rounded-md border flex items-center justify-center", visible.length && visible.every((r) => selected.has(r.id)) ? "bg-violet-500 border-violet-500 text-white" : "border-current opacity-50")}>
                  {visible.length && visible.every((r) => selected.has(r.id)) ? <Check size={13} /> : null}
                </button>
              </th>
              {columns.map((c) => (
                <th key={c.key} className="p-4 font-bold">
                  <button type="button" onClick={() => c.sortable && toggleSort(c.key)} className="flex items-center gap-1.5 hover:opacity-100 opacity-80">
                    {c.label}
                    {c.sortable && <ArrowUpDown size={12} className={sort.key === c.key ? "text-violet-500" : "opacity-40"} />}
                    {sort.key === c.key && <span>{sort.dir === 1 ? "↑" : "↓"}</span>}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence initial={false}>
              {visible.map((row) => (
                <motion.tr
                  key={row.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={() => toggleRow(row.id)}
                  className={cn("border-t cursor-pointer transition-colors", darkMode ? "border-white/8 hover:bg-white/[0.04]" : "border-black/8 hover:bg-black/[0.02]", selected.has(row.id) && (darkMode ? "bg-violet-500/10" : "bg-violet-500/[0.07]"))}
                >
                  <td className="p-4" onClick={(e) => e.stopPropagation()}>
                    <button type="button" onClick={() => toggleRow(row.id)} aria-label="select row"
                      className={cn("w-5 h-5 rounded-md border flex items-center justify-center", selected.has(row.id) ? "bg-violet-500 border-violet-500 text-white" : "opacity-40")}>
                      {selected.has(row.id) ? <Check size={13} /> : null}
                    </button>
                  </td>
                  {columns.map((c) => (
                    <td key={c.key} className={cn("p-4 font-medium", darkMode ? "text-white/90" : "text-black/85")}>
                      {c.key === "status" ? (
                        <span className={cn("px-2.5 py-1 rounded-full text-[11px] font-bold",
                          row.status === "active" ? "bg-emerald-500/15 text-emerald-500"
                          : row.status === "trial" ? "bg-blue-500/15 text-blue-500"
                          : row.status === "past_due" ? "bg-amber-500/15 text-amber-600"
                          : "bg-red-500/12 text-red-500")}>
                          {String(row.status).replace("_", " ")}
                        </span>
                      ) : c.key === "mrr" ? `$${Number(row.mrr).toLocaleString()}` : String(row[c.key])}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
        {visible.length === 0 && (
          <div className={cn("p-12 text-center", darkMode ? "text-white/40" : "text-black/40")}>
            <p className="font-black text-lg">Sin resultados</p>
            <p className="text-sm mt-1">Prueba con otra búsqueda o filtro.</p>
            <button type="button" onClick={() => { setQuery(""); setStatusFilter("all"); }} className={cn("mt-4 h-9 px-4 rounded-xl text-xs font-bold", darkMode ? "bg-white text-black" : "bg-black text-white")}>Limpiar filtros</button>
          </div>
        )}
      </div>

      {/* footer: selección + paginación */}
      <div className="flex items-center gap-3 p-4 border-t flex-wrap" style={{ borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
        <span className={cn("text-xs font-bold", darkMode ? "text-white/50" : "text-black/50")}>
          {selected.size > 0 ? `${selected.size} seleccionados` : `${filtered.length} filas`} · pág {safePage + 1}/{pages}
        </span>
        <div className="flex gap-1.5 ml-auto">
          <button type="button" disabled={safePage === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}
            className="w-9 h-9 rounded-xl border flex items-center justify-center disabled:opacity-30"><ChevronLeft size={15} /></button>
          {pageWindow.map((i) => (
            <button key={i} type="button" onClick={() => setPage(i)}
              className={cn("w-9 h-9 rounded-xl text-xs font-black border", safePage === i ? (darkMode ? "bg-white text-black border-white" : "bg-black text-white border-black") : "opacity-50")}>{i + 1}</button>
          ))}
          <button type="button" disabled={safePage >= pages - 1} onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
            className="w-9 h-9 rounded-xl border flex items-center justify-center disabled:opacity-30"><ChevronRight size={15} /></button>
        </div>
      </div>
    </div>
  );
}
