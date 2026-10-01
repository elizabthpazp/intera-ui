"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var SLOTS = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];
var TAKEN = {
  "12:00": true
};
export default function SlotPicker(_ref) {
  var _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$onConfirm = _ref.onConfirm,
    onConfirm = _ref$onConfirm === void 0 ? function () {} : _ref$onConfirm,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var today = new Date();
  var _useState = useState(new Date(today.getFullYear(), today.getMonth(), 1)),
    _useState2 = _slicedToArray(_useState, 2),
    cursor = _useState2[0],
    setCursor = _useState2[1];
  var _useState3 = useState({
      d: today.getDate(),
      m: today.getMonth(),
      y: today.getFullYear()
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    sel = _useState4[0],
    setSel = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    slot = _useState6[0],
    setSlot = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    booked = _useState8[0],
    setBooked = _useState8[1];
  var day = sel.d;
  var cells = useMemo(function () {
    var y = cursor.getFullYear();
    var m = cursor.getMonth();
    var first = new Date(y, m, 1).getDay();
    var total = new Date(y, m + 1, 0).getDate();
    var arr = [];
    for (var i = 0; i < first; i++) arr.push(null);
    for (var d = 1; d <= total; d++) arr.push(d);
    return {
      arr: arr,
      y: y,
      m: m
    };
  }, [cursor]);
  var monthName = cursor.toLocaleDateString("es", {
    month: "long",
    year: "numeric"
  });
  var isPastDay = function isPastDay(d) {
    var now = new Date();
    if (cells.y < now.getFullYear()) return true;
    if (cells.m < now.getMonth() && cells.y === now.getFullYear()) return true;
    return cells.y === now.getFullYear() && cells.m === now.getMonth() && d < now.getDate();
  };
  var confirm = function confirm() {
    if (!slot || !sel.d) return;
    setBooked(true);
    onConfirm({
      date: new Date(sel.y, sel.m, sel.d),
      slot: slot
    });
  };
  return /*#__PURE__*/_jsxs("div", {
    style: style,
    className: cn("w-full min-w-0 max-w-full rounded-[1.8rem] border p-5 sm:p-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_240px]", darkMode ? "bg-[#0b0b12] border-white/10" : "bg-white border-black/10 shadow-sm", className),
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsxs("div", {
        className: "flex items-center justify-between mb-4",
        children: [/*#__PURE__*/_jsx("h3", {
          className: "font-black tracking-tight capitalize",
          children: monthName
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex gap-1.5",
          children: [/*#__PURE__*/_jsx("button", {
            type: "button",
            onClick: function onClick() {
              return setCursor(new Date(cells.y, cells.m - 1, 1));
            },
            className: "w-9 h-9 rounded-xl border flex items-center justify-center",
            children: /*#__PURE__*/_jsx(ChevronLeft, {
              size: 15
            })
          }), /*#__PURE__*/_jsx("button", {
            type: "button",
            onClick: function onClick() {
              return setCursor(new Date(today.getFullYear(), today.getMonth(), 1));
            },
            className: "h-9 px-3 rounded-xl border text-xs font-bold",
            children: "Hoy"
          }), /*#__PURE__*/_jsx("button", {
            type: "button",
            onClick: function onClick() {
              return setCursor(new Date(cells.y, cells.m + 1, 1));
            },
            className: "w-9 h-9 rounded-xl border flex items-center justify-center",
            children: /*#__PURE__*/_jsx(ChevronRight, {
              size: 15
            })
          })]
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2",
        children: ["D", "L", "M", "X", "J", "V", "S"].map(function (d) {
          return /*#__PURE__*/_jsx("span", {
            className: "py-1",
            children: d
          }, d);
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "grid grid-cols-7 gap-1",
        children: cells.arr.map(function (d, i) {
          if (!d) return /*#__PURE__*/_jsx("span", {}, i);
          var past = isPastDay(d);
          var active = sel.d === d && sel.m === cells.m && sel.y === cells.y;
          var isToday = d === today.getDate() && cells.m === today.getMonth() && cells.y === today.getFullYear();
          return /*#__PURE__*/_jsxs("button", {
            type: "button",
            disabled: past,
            onClick: function onClick() {
              setSel({
                d: d,
                m: cells.m,
                y: cells.y
              });
              setSlot(null);
              setBooked(false);
            },
            className: cn("aspect-square rounded-xl text-sm font-bold border transition-all relative", past ? "opacity-20 cursor-not-allowed border-transparent" : active ? "bg-violet-500 border-violet-500 text-white shadow-lg" : darkMode ? "border-transparent hover:border-white/25" : "border-transparent hover:border-black/25", isToday && !active && "border-violet-500/60"),
            children: [d, isToday && !active && /*#__PURE__*/_jsx("span", {
              className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-500"
            })]
          }, i);
        })
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: cn("rounded-[1.4rem] border p-4 flex flex-col", darkMode ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]"),
      children: [/*#__PURE__*/_jsxs("p", {
        className: "text-xs font-bold uppercase tracking-widest opacity-50 flex items-center gap-1.5 mb-3",
        children: [/*#__PURE__*/_jsx(Clock, {
          size: 13
        }), " ", day ? "D\xEDa ".concat(day) : "Elige un día"]
      }), /*#__PURE__*/_jsx("div", {
        className: "grid grid-cols-2 gap-2 mb-4",
        children: SLOTS.map(function (s) {
          var taken = TAKEN[s];
          var active = slot === s;
          return /*#__PURE__*/_jsx("button", {
            type: "button",
            disabled: taken || !day,
            onClick: function onClick() {
              return setSlot(s);
            },
            className: cn("h-10 rounded-xl text-[13px] font-bold border transition-all", taken || !day ? "opacity-25 cursor-not-allowed line-through" : active ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white" : darkMode ? "border-white/12 hover:border-white/40" : "border-black/12 hover:border-black/40"),
            children: s
          }, s);
        })
      }), /*#__PURE__*/_jsx(AnimatePresence, {
        mode: "wait",
        children: booked ? /*#__PURE__*/_jsxs(motion.div, {
          initial: {
            opacity: 0,
            scale: 0.9
          },
          animate: {
            opacity: 1,
            scale: 1
          },
          className: "rounded-xl bg-emerald-500/12 border border-emerald-500/30 p-3 text-center",
          children: [/*#__PURE__*/_jsx(Check, {
            size: 18,
            className: "text-emerald-500 mx-auto mb-1"
          }), /*#__PURE__*/_jsxs("p", {
            className: "text-xs font-black",
            children: ["Reservado: d\xEDa ", day, " \xB7 ", slot]
          }), /*#__PURE__*/_jsx("button", {
            type: "button",
            onClick: function onClick() {
              setBooked(false);
              setSlot(null);
            },
            className: "text-[11px] font-bold opacity-60 mt-1",
            children: "Cambiar"
          })]
        }, "ok") : /*#__PURE__*/_jsx(motion.button, {
          exit: {
            opacity: 0
          },
          type: "button",
          disabled: !slot,
          onClick: confirm,
          className: cn("mt-auto h-11 rounded-xl text-sm font-bold transition-all", slot ? "bg-gradient-to-r from-violet-500 to-cyan-400 text-white" : "opacity-30 border"),
          children: slot ? "Confirmar ".concat(slot) : "Elige una hora"
        }, "cta")
      })]
    })]
  });
}