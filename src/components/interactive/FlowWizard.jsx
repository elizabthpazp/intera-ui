"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, User, CreditCard, Rocket } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * FlowWizard — onboarding / checkout por pasos con validación real.
 * Resuelve el problema de formularios largos: los parte, valida cada
 * paso, guarda borrador y muestra review antes de enviar. Todo con
 * click + type, cero hover decorativo.
 */
const STEPS = [
  { id: "profile", title: "Perfil", icon: User },
  { id: "plan", title: "Plan", icon: CreditCard },
  { id: "launch", title: "Lanzar", icon: Rocket },
];

export default function FlowWizard({
  darkMode = false,
  onComplete = () => {},
  className = "",
  style,
}) {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", plan: "Scale", card: "", agree: false });
  const [touched, setTouched] = useState({});

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const errors = {
    name: form.name.trim().length < 2 ? "Mínimo 2 caracteres" : "",
    email: !/^\S+@\S+\.\S+$/.test(form.email) ? "Email inválido" : "",
    card: step >= 1 && form.plan === "Enterprise" && form.card.replace(/\s/g, "").length < 12 ? "Tarjeta incompleta" : "",
    agree: step >= 2 && !form.agree ? "Debes aceptar para lanzar" : "",
  };
  const stepValid =
    step === 0 ? !errors.name && !errors.email
    : step === 1 ? !errors.card
    : !errors.agree;

  const go = (next) => {
    if (next > step && !stepValid) {
      setTouched({ name: true, email: true, card: true, agree: true });
      return;
    }
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const finish = () => {
    if (!stepValid) { setTouched({ name: true, email: true, card: true, agree: true }); return; }
    setDone(true);
    onComplete(form);
  };

  const inputCls = (bad) => cn("w-full h-12 px-4 rounded-xl border text-sm font-medium outline-none transition-all bg-transparent",
    bad ? "border-red-500" : (darkMode ? "border-white/12 focus:border-white/40" : "border-black/12 focus:border-black/40"));

  return (
    <div style={style} className={cn("w-full min-w-0 max-w-full rounded-[1.8rem] border p-5 sm:p-8", darkMode ? "bg-[#0b0b12] border-white/10" : "bg-white border-black/10 shadow-lg", className)}>
      {/* stepper clicable */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const active = i === step; const past = i < step;
          return (
            <React.Fragment key={s.id}>
              <button type="button" onClick={() => i < step && go(i)} disabled={i > step}
                className="flex items-center gap-2 group">
                <span className={cn("w-9 h-9 rounded-xl flex items-center justify-center border text-xs font-black transition-all",
                  past ? "bg-emerald-500 border-emerald-500 text-white"
                  : active ? (darkMode ? "bg-white text-black border-white" : "bg-black text-white border-black")
                  : "opacity-35")}>
                  {past ? <Check size={15} /> : <Icon size={15} />}
                </span>
                <span className={cn("text-xs font-bold hidden sm:block", active ? "" : "opacity-40")}>{s.title}</span>
              </button>
              {i < STEPS.length - 1 && <div className={cn("flex-1 h-[2px] rounded-full mx-1", i < step ? "bg-emerald-500" : (darkMode ? "bg-white/10" : "bg-black/10"))} />}
            </React.Fragment>
          );
        })}
      </div>

      {/* progreso */}
      <div className={cn("h-1.5 rounded-full mb-8 overflow-hidden", darkMode ? "bg-white/10" : "bg-black/10")}>
        <motion.div animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
      </div>

      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={done ? "done" : step}
          custom={dir}
          initial={{ opacity: 0, x: 40 * dir }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 * dir }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
        >
          {done ? (
            <div className="text-center py-8">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 14 }}
                className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4">
                <Check size={28} />
              </motion.div>
              <h3 className="text-2xl font-black tracking-tight">¡Listo, {form.name.split(" ")[0] || "founder"}!</h3>
              <p className={cn("text-sm mt-2", darkMode ? "text-white/55" : "text-black/55")}>Plan <b>{form.plan}</b> · confirmación enviada a <b>{form.email}</b></p>
              <button type="button" onClick={() => { setDone(false); setStep(0); }}
                className={cn("mt-6 h-10 px-5 rounded-xl text-xs font-bold border", darkMode ? "border-white/15" : "border-black/15")}>Crear otro</button>
            </div>
          ) : step === 0 ? (
            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tight">¿Quién lanza el proyecto?</h3>
              <div>
                <input value={form.name} onChange={(e) => set("name", e.target.value)} onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  placeholder="Tu nombre" className={inputCls(touched.name && errors.name)} />
                {touched.name && errors.name && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.name}</p>}
              </div>
              <div>
                <input value={form.email} onChange={(e) => set("email", e.target.value)} onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  placeholder="email@empresa.com" type="email" className={inputCls(touched.email && errors.email)} />
                {touched.email && errors.email && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.email}</p>}
              </div>
            </div>
          ) : step === 1 ? (
            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tight">Elige tu plan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {["Starter", "Scale", "Enterprise"].map((p) => (
                  <button key={p} type="button" onClick={() => set("plan", p)}
                    className={cn("rounded-2xl border p-4 text-left transition-all",
                      form.plan === p ? "border-violet-500 ring-2 ring-violet-500/25" : (darkMode ? "border-white/10" : "border-black/10"))}>
                    <p className="font-black text-sm">{p}</p>
                    <p className={cn("text-xs mt-0.5", darkMode ? "text-white/50" : "text-black/50")}>{p === "Starter" ? "$0" : p === "Scale" ? "$49/m" : "$199/m"}</p>
                  </button>
                ))}
              </div>
              {form.plan === "Enterprise" && (
                <div>
                  <input value={form.card} onChange={(e) => set("card", e.target.value)} onBlur={() => setTouched((t) => ({ ...t, card: true }))}
                    placeholder="Número de tarjeta" inputMode="numeric" className={inputCls(touched.card && errors.card)} />
                  {touched.card && errors.card && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.card}</p>}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tight">Revisa y lanza 🚀</h3>
              <div className={cn("rounded-2xl border p-4 text-sm space-y-2", darkMode ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]")}>
                <p><b>Nombre:</b> {form.name}</p>
                <p><b>Email:</b> {form.email}</p>
                <p><b>Plan:</b> {form.plan}</p>
              </div>
              <label className="flex items-start gap-3 cursor-pointer text-sm font-medium">
                <button type="button" role="checkbox" aria-checked={form.agree} onClick={() => set("agree", !form.agree)}
                  className={cn("w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5", form.agree ? "bg-violet-500 border-violet-500 text-white" : "")}>
                  {form.agree && <Check size={14} />}
                </button>
                Acepto términos y quiero lanzar mi workspace ahora.
              </label>
              {touched.agree && errors.agree && <p className="text-red-500 text-xs font-bold">{errors.agree}</p>}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* nav */}
      {!done && (
        <div className="flex gap-2 mt-8">
          <button type="button" disabled={step === 0} onClick={() => go(step - 1)}
            className="h-12 px-5 rounded-xl text-sm font-bold border flex items-center gap-2 disabled:opacity-30">
            <ArrowLeft size={15} /> Atrás
          </button>
          {step < STEPS.length - 1 ? (
            <button type="button" onClick={() => go(step + 1)}
              className={cn("flex-1 h-12 rounded-xl text-sm font-bold flex items-center justify-center gap-2", darkMode ? "bg-white text-black" : "bg-black text-white")}>
              Continuar <ArrowRight size={15} />
            </button>
          ) : (
            <button type="button" onClick={finish}
              className="flex-1 h-12 rounded-xl text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-400 text-white flex items-center justify-center gap-2">
              <Rocket size={15} /> Lanzar proyecto
            </button>
          )}
        </div>
      )}
    </div>
  );
}
