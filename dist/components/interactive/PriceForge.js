"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Users, Zap, ShieldCheck } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * PriceForge — calculadora de pricing que vende por ti.
 * Sliders de seats + toggle anual/mensual + add-ons con costo real
 * + desglose vivo + CTA con total. Resuelve la página de precios.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function PriceForge(_ref) {
  var _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$basePerSeat = _ref.basePerSeat,
    basePerSeat = _ref$basePerSeat === void 0 ? 12 : _ref$basePerSeat,
    _ref$onCheckout = _ref.onCheckout,
    onCheckout = _ref$onCheckout === void 0 ? function () {} : _ref$onCheckout,
    _ref$summaryClassName = _ref.summaryClassName,
    summaryClassName = _ref$summaryClassName === void 0 ? "" : _ref$summaryClassName,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(12),
    _useState2 = _slicedToArray(_useState, 2),
    seats = _useState2[0],
    setSeats = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    annual = _useState4[0],
    setAnnual = _useState4[1];
  var _useState5 = useState({
      sso: true,
      support: false,
      backup: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    addons = _useState6[0],
    setAddons = _useState6[1];
  var ADDONS = [{
    id: "sso",
    label: "SSO / SAML",
    desc: "Login empresarial",
    price: 49,
    icon: ShieldCheck
  }, {
    id: "support",
    label: "Soporte priority",
    desc: "Slack en 1h",
    price: 99,
    icon: Zap
  }, {
    id: "backup",
    label: "Backup extendido",
    desc: "Retención 1 año",
    price: 39,
    icon: Users
  }];
  var calc = useMemo(function () {
    var seatsCost = seats * basePerSeat;
    var addonsCost = ADDONS.filter(function (a) {
      return addons[a.id];
    }).reduce(function (s, a) {
      return s + a.price;
    }, 0);
    var sub = seatsCost + addonsCost;
    var disc = annual ? sub * 0.2 : 0;
    return {
      seatsCost: seatsCost,
      addonsCost: addonsCost,
      sub: sub,
      disc: disc,
      total: sub - disc
    };
  }, [seats, annual, addons, basePerSeat]);
  var toggleAddon = function toggleAddon(id) {
    return setAddons(function (a) {
      return _objectSpread(_objectSpread({}, a), {}, _defineProperty({}, id, !a[id]));
    });
  };
  return /*#__PURE__*/_jsxs("div", {
    style: style,
    className: cn("w-full min-w-0 max-w-full rounded-[1.8rem] border p-5 sm:p-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]", darkMode ? "bg-[#0b0b12] border-white/10" : "bg-white border-black/10 shadow-sm", className),
    children: [/*#__PURE__*/_jsxs("div", {
      className: "min-w-0",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "flex flex-wrap items-center gap-x-4 gap-y-2 justify-between mb-2",
        children: [/*#__PURE__*/_jsxs("p", {
          className: "font-black tracking-tight flex items-center gap-2",
          children: [/*#__PURE__*/_jsx(Users, {
            size: 16
          }), " Seats: ", seats]
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/_jsx("span", {
            className: cn("text-xs font-bold", !annual && "opacity-100", annual && "opacity-40"),
            children: "Mensual"
          }), /*#__PURE__*/_jsx("button", {
            type: "button",
            role: "switch",
            "aria-checked": annual,
            onClick: function onClick() {
              return setAnnual(!annual);
            },
            className: cn("w-12 h-7 rounded-full p-1 transition-colors", annual ? "bg-emerald-500" : darkMode ? "bg-white/15" : "bg-black/15"),
            children: /*#__PURE__*/_jsx(motion.span, {
              layout: true,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 28
              },
              className: cn("block w-5 h-5 rounded-full bg-white shadow", annual ? "ml-auto" : "ml-0")
            })
          }), /*#__PURE__*/_jsx("span", {
            className: cn("text-xs font-bold", annual && "opacity-100", !annual && "opacity-40"),
            children: "Anual \u221220%"
          })]
        })]
      }), /*#__PURE__*/_jsx("input", {
        type: "range",
        min: 1,
        max: 200,
        value: seats,
        onChange: function onChange(e) {
          return setSeats(Number(e.target.value));
        },
        className: "w-full accent-violet-500 h-2 cursor-pointer"
      }), /*#__PURE__*/_jsxs("div", {
        className: "flex justify-between text-[11px] font-bold opacity-40 mt-1",
        children: [/*#__PURE__*/_jsx("span", {
          children: "1"
        }), /*#__PURE__*/_jsx("span", {
          children: "200"
        })]
      }), /*#__PURE__*/_jsx("p", {
        className: "text-xs font-bold uppercase tracking-widest opacity-50 mt-6 mb-3",
        children: "Add-ons"
      }), /*#__PURE__*/_jsx("div", {
        className: "space-y-2",
        children: ADDONS.map(function (a) {
          var on = addons[a.id];
          var Icon = a.icon;
          return /*#__PURE__*/_jsxs("button", {
            type: "button",
            onClick: function onClick() {
              return toggleAddon(a.id);
            },
            className: cn("w-full flex items-center gap-3 rounded-2xl border p-3.5 text-left transition-all", on ? "border-violet-500 ring-2 ring-violet-500/20" : darkMode ? "border-white/10" : "border-black/10"),
            children: [/*#__PURE__*/_jsx("span", {
              className: cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", on ? "bg-violet-500 text-white" : darkMode ? "bg-white/10" : "bg-black/8"),
              children: /*#__PURE__*/_jsx(Icon, {
                size: 17
              })
            }), /*#__PURE__*/_jsxs("span", {
              className: "flex-1",
              children: [/*#__PURE__*/_jsx("span", {
                className: "block text-sm font-bold",
                children: a.label
              }), /*#__PURE__*/_jsx("span", {
                className: cn("block text-xs", darkMode ? "text-white/50" : "text-black/50"),
                children: a.desc
              })]
            }), /*#__PURE__*/_jsxs("span", {
              className: "text-sm font-black",
              children: ["+$", a.price]
            }), /*#__PURE__*/_jsx("span", {
              className: cn("w-11 h-6 rounded-full p-1 transition-colors shrink-0", on ? "bg-violet-500" : darkMode ? "bg-white/15" : "bg-black/15"),
              children: /*#__PURE__*/_jsx(motion.span, {
                layout: true,
                className: cn("block w-4 h-4 rounded-full bg-white", on ? "ml-auto" : "ml-0")
              })
            })]
          }, a.id);
        })
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: cn("rounded-[1.4rem] p-5 flex flex-col min-w-0", darkMode ? "bg-white/[0.04] border border-white/10" : "bg-black text-white", summaryClassName),
      children: [/*#__PURE__*/_jsx("p", {
        className: "text-[11px] font-bold uppercase tracking-[0.25em] opacity-50",
        children: "Tu plan"
      }), /*#__PURE__*/_jsxs("p", {
        className: "mt-2 flex items-baseline gap-1",
        children: [/*#__PURE__*/_jsxs(motion.span, {
          initial: {
            y: 8,
            opacity: 0
          },
          animate: {
            y: 0,
            opacity: 1
          },
          className: "text-5xl font-black tracking-tighter",
          children: ["$", calc.total.toLocaleString()]
        }, calc.total), /*#__PURE__*/_jsx("span", {
          className: "text-sm font-bold opacity-50",
          children: "/mes"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "text-[13px] font-medium space-y-1.5 mt-4 opacity-80",
        children: [/*#__PURE__*/_jsxs("p", {
          className: "flex justify-between",
          children: [/*#__PURE__*/_jsxs("span", {
            children: [seats, " seats \xD7 $", basePerSeat]
          }), /*#__PURE__*/_jsxs("b", {
            children: ["$", calc.seatsCost.toLocaleString()]
          })]
        }), /*#__PURE__*/_jsxs("p", {
          className: "flex justify-between",
          children: [/*#__PURE__*/_jsx("span", {
            children: "Add-ons"
          }), /*#__PURE__*/_jsxs("b", {
            children: ["+$", calc.addonsCost]
          })]
        }), annual && /*#__PURE__*/_jsxs("p", {
          className: "flex justify-between text-emerald-400",
          children: [/*#__PURE__*/_jsx("span", {
            children: "Descuento anual"
          }), /*#__PURE__*/_jsxs("b", {
            children: ["\u2212$", Math.round(calc.disc).toLocaleString()]
          })]
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "border-t border-dashed my-4 opacity-20"
      }), /*#__PURE__*/_jsx("p", {
        className: "text-xs opacity-60 font-medium leading-relaxed",
        children: "Sin tarjeta para empezar. Cancela cuando quieras."
      }), /*#__PURE__*/_jsxs("button", {
        type: "button",
        onClick: function onClick() {
          return onCheckout({
            seats: seats,
            annual: annual,
            addons: addons,
            total: calc.total
          });
        },
        className: "mt-4 h-12 rounded-xl font-bold text-sm bg-gradient-to-r from-violet-500 to-cyan-400 text-white hover:scale-[1.02] active:scale-[0.98] transition-transform",
        children: ["Empezar \u2014 $", calc.total.toLocaleString(), "/mes"]
      })]
    })]
  });
}