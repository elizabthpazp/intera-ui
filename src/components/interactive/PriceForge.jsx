"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Users, Zap, ShieldCheck } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * PriceForge — calculadora de pricing que vende por ti.
 * Sliders de seats + toggle anual/mensual + add-ons con costo real
 * + desglose vivo + CTA con total. Resuelve la página de precios.
 */
export default function PriceForge({
  darkMode = false,
  basePerSeat = 12,
  onCheckout = () => {},
  summaryClassName = "",
  className = "",
  style,
}) {
  const [seats, setSeats] = useState(12);
  const [annual, setAnnual] = useState(true);
  const [addons, setAddons] = useState({ sso: true, support: false, backup: false });

  const ADDONS = [
    { id: "sso", label: "SSO / SAML", desc: "Login empresarial", price: 49, icon: ShieldCheck },
    { id: "support", label: "Soporte priority", desc: "Slack en 1h", price: 99, icon: Zap },
    { id: "backup", label: "Backup extendido", desc: "Retención 1 año", price: 39, icon: Users },
  ];

  const calc = useMemo(() => {
    const seatsCost = seats * basePerSeat;
    const addonsCost = ADDONS.filter((a) => addons[a.id]).reduce((s, a) => s + a.price, 0);
    const sub = seatsCost + addonsCost;
    const disc = annual ? sub * 0.2 : 0;
    return { seatsCost, addonsCost, sub, disc, total: sub - disc };
  }, [seats, annual, addons, basePerSeat]);

  const toggleAddon = (id) => setAddons((a) => ({ ...a, [id]: !a[id] }));

  return (
    <div style={style} className={cn("w-full min-w-0 max-w-full rounded-[1.8rem] border p-5 sm:p-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]", darkMode ? "bg-[#0b0b12] border-white/10" : "bg-white border-black/10 shadow-sm", className)}>
      <div className="min-w-0">
        {/* seats slider */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-between mb-2">
          <p className="font-black tracking-tight flex items-center gap-2"><Users size={16} /> Seats: {seats}</p>
          <div className="flex items-center gap-2">
            <span className={cn("text-xs font-bold", !annual && "opacity-100", annual && "opacity-40")}>Mensual</span>
            <button type="button" role="switch" aria-checked={annual} onClick={() => setAnnual(!annual)}
              className={cn("w-12 h-7 rounded-full p-1 transition-colors", annual ? "bg-emerald-500" : (darkMode ? "bg-white/15" : "bg-black/15"))}>
              <motion.span layout transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className={cn("block w-5 h-5 rounded-full bg-white shadow", annual ? "ml-auto" : "ml-0")} />
            </button>
            <span className={cn("text-xs font-bold", annual && "opacity-100", !annual && "opacity-40")}>Anual −20%</span>
          </div>
        </div>
        <input type="range" min={1} max={200} value={seats} onChange={(e) => setSeats(Number(e.target.value))}
          className="w-full accent-violet-500 h-2 cursor-pointer" />
        <div className="flex justify-between text-[11px] font-bold opacity-40 mt-1"><span>1</span><span>200</span></div>

        {/* addons */}
        <p className="text-xs font-bold uppercase tracking-widest opacity-50 mt-6 mb-3">Add-ons</p>
        <div className="space-y-2">
          {ADDONS.map((a) => {
            const on = addons[a.id];
            const Icon = a.icon;
            return (
              <button key={a.id} type="button" onClick={() => toggleAddon(a.id)}
                className={cn("w-full flex items-center gap-3 rounded-2xl border p-3.5 text-left transition-all", on ? "border-violet-500 ring-2 ring-violet-500/20" : (darkMode ? "border-white/10" : "border-black/10"))}>
                <span className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", on ? "bg-violet-500 text-white" : (darkMode ? "bg-white/10" : "bg-black/8"))}><Icon size={17} /></span>
                <span className="flex-1">
                  <span className="block text-sm font-bold">{a.label}</span>
                  <span className={cn("block text-xs", darkMode ? "text-white/50" : "text-black/50")}>{a.desc}</span>
                </span>
                <span className="text-sm font-black">+${a.price}</span>
                <span className={cn("w-11 h-6 rounded-full p-1 transition-colors shrink-0", on ? "bg-violet-500" : (darkMode ? "bg-white/15" : "bg-black/15"))}>
                  <motion.span layout className={cn("block w-4 h-4 rounded-full bg-white", on ? "ml-auto" : "ml-0")} />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* resumen vivo */}
      <div className={cn("rounded-[1.4rem] p-5 flex flex-col min-w-0", darkMode ? "bg-white/[0.04] border border-white/10" : "bg-black text-white", summaryClassName)}>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] opacity-50">Tu plan</p>
        <p className="mt-2 flex items-baseline gap-1">
          <motion.span key={calc.total} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl font-black tracking-tighter">
            ${calc.total.toLocaleString()}
          </motion.span>
          <span className="text-sm font-bold opacity-50">/mes</span>
        </p>
        <div className="text-[13px] font-medium space-y-1.5 mt-4 opacity-80">
          <p className="flex justify-between"><span>{seats} seats × ${basePerSeat}</span><b>${calc.seatsCost.toLocaleString()}</b></p>
          <p className="flex justify-between"><span>Add-ons</span><b>+${calc.addonsCost}</b></p>
          {annual && <p className="flex justify-between text-emerald-400"><span>Descuento anual</span><b>−${Math.round(calc.disc).toLocaleString()}</b></p>}
        </div>
        <div className="border-t border-dashed my-4 opacity-20" />
        <p className="text-xs opacity-60 font-medium leading-relaxed">Sin tarjeta para empezar. Cancela cuando quieras.</p>
        <button type="button" onClick={() => onCheckout({ seats, annual, addons, total: calc.total })}
          className="mt-4 h-12 rounded-xl font-bold text-sm bg-gradient-to-r from-violet-500 to-cyan-400 text-white hover:scale-[1.02] active:scale-[0.98] transition-transform">
          Empezar — ${calc.total.toLocaleString()}/mes
        </button>
      </div>
    </div>
  );
}
