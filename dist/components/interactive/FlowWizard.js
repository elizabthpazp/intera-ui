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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var STEPS = [{
  id: "profile",
  title: "Perfil",
  icon: User
}, {
  id: "plan",
  title: "Plan",
  icon: CreditCard
}, {
  id: "launch",
  title: "Lanzar",
  icon: Rocket
}];
export default function FlowWizard(_ref) {
  var _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$onComplete = _ref.onComplete,
    onComplete = _ref$onComplete === void 0 ? function () {} : _ref$onComplete,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1];
  var _useState3 = useState(1),
    _useState4 = _slicedToArray(_useState3, 2),
    dir = _useState4[0],
    setDir = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    done = _useState6[0],
    setDone = _useState6[1];
  var _useState7 = useState({
      name: "",
      email: "",
      plan: "Scale",
      card: "",
      agree: false
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    form = _useState8[0],
    setForm = _useState8[1];
  var _useState9 = useState({}),
    _useState0 = _slicedToArray(_useState9, 2),
    touched = _useState0[0],
    setTouched = _useState0[1];
  var set = function set(k, v) {
    return setForm(function (f) {
      return _objectSpread(_objectSpread({}, f), {}, _defineProperty({}, k, v));
    });
  };
  var errors = {
    name: form.name.trim().length < 2 ? "Mínimo 2 caracteres" : "",
    email: !/^\S+@\S+\.\S+$/.test(form.email) ? "Email inválido" : "",
    card: step >= 1 && form.plan === "Enterprise" && form.card.replace(/\s/g, "").length < 12 ? "Tarjeta incompleta" : "",
    agree: step >= 2 && !form.agree ? "Debes aceptar para lanzar" : ""
  };
  var stepValid = step === 0 ? !errors.name && !errors.email : step === 1 ? !errors.card : !errors.agree;
  var go = function go(next) {
    if (next > step && !stepValid) {
      setTouched({
        name: true,
        email: true,
        card: true,
        agree: true
      });
      return;
    }
    setDir(next > step ? 1 : -1);
    setStep(next);
  };
  var finish = function finish() {
    if (!stepValid) {
      setTouched({
        name: true,
        email: true,
        card: true,
        agree: true
      });
      return;
    }
    setDone(true);
    onComplete(form);
  };
  var inputCls = function inputCls(bad) {
    return cn("w-full h-12 px-4 rounded-xl border text-sm font-medium outline-none transition-all bg-transparent", bad ? "border-red-500" : darkMode ? "border-white/12 focus:border-white/40" : "border-black/12 focus:border-black/40");
  };
  return /*#__PURE__*/_jsxs("div", {
    style: style,
    className: cn("w-full min-w-0 max-w-full rounded-[1.8rem] border p-5 sm:p-8", darkMode ? "bg-[#0b0b12] border-white/10" : "bg-white border-black/10 shadow-lg", className),
    children: [/*#__PURE__*/_jsx("div", {
      className: "flex items-center gap-2 mb-8",
      children: STEPS.map(function (s, i) {
        var Icon = s.icon;
        var active = i === step;
        var past = i < step;
        return /*#__PURE__*/_jsxs(React.Fragment, {
          children: [/*#__PURE__*/_jsxs("button", {
            type: "button",
            onClick: function onClick() {
              return i < step && go(i);
            },
            disabled: i > step,
            className: "flex items-center gap-2 group",
            children: [/*#__PURE__*/_jsx("span", {
              className: cn("w-9 h-9 rounded-xl flex items-center justify-center border text-xs font-black transition-all", past ? "bg-emerald-500 border-emerald-500 text-white" : active ? darkMode ? "bg-white text-black border-white" : "bg-black text-white border-black" : "opacity-35"),
              children: past ? /*#__PURE__*/_jsx(Check, {
                size: 15
              }) : /*#__PURE__*/_jsx(Icon, {
                size: 15
              })
            }), /*#__PURE__*/_jsx("span", {
              className: cn("text-xs font-bold hidden sm:block", active ? "" : "opacity-40"),
              children: s.title
            })]
          }), i < STEPS.length - 1 && /*#__PURE__*/_jsx("div", {
            className: cn("flex-1 h-[2px] rounded-full mx-1", i < step ? "bg-emerald-500" : darkMode ? "bg-white/10" : "bg-black/10")
          })]
        }, s.id);
      })
    }), /*#__PURE__*/_jsx("div", {
      className: cn("h-1.5 rounded-full mb-8 overflow-hidden", darkMode ? "bg-white/10" : "bg-black/10"),
      children: /*#__PURE__*/_jsx(motion.div, {
        animate: {
          width: "".concat((step + 1) / STEPS.length * 100, "%")
        },
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 20
        },
        className: "h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
      })
    }), /*#__PURE__*/_jsx(AnimatePresence, {
      mode: "wait",
      custom: dir,
      children: /*#__PURE__*/_jsx(motion.div, {
        custom: dir,
        initial: {
          opacity: 0,
          x: 40 * dir
        },
        animate: {
          opacity: 1,
          x: 0
        },
        exit: {
          opacity: 0,
          x: -40 * dir
        },
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 24
        },
        children: done ? /*#__PURE__*/_jsxs("div", {
          className: "text-center py-8",
          children: [/*#__PURE__*/_jsx(motion.div, {
            initial: {
              scale: 0
            },
            animate: {
              scale: 1
            },
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 14
            },
            className: "w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4",
            children: /*#__PURE__*/_jsx(Check, {
              size: 28
            })
          }), /*#__PURE__*/_jsxs("h3", {
            className: "text-2xl font-black tracking-tight",
            children: ["\xA1Listo, ", form.name.split(" ")[0] || "founder", "!"]
          }), /*#__PURE__*/_jsxs("p", {
            className: cn("text-sm mt-2", darkMode ? "text-white/55" : "text-black/55"),
            children: ["Plan ", /*#__PURE__*/_jsx("b", {
              children: form.plan
            }), " \xB7 confirmaci\xF3n enviada a ", /*#__PURE__*/_jsx("b", {
              children: form.email
            })]
          }), /*#__PURE__*/_jsx("button", {
            type: "button",
            onClick: function onClick() {
              setDone(false);
              setStep(0);
            },
            className: cn("mt-6 h-10 px-5 rounded-xl text-xs font-bold border", darkMode ? "border-white/15" : "border-black/15"),
            children: "Crear otro"
          })]
        }) : step === 0 ? /*#__PURE__*/_jsxs("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/_jsx("h3", {
            className: "text-xl font-black tracking-tight",
            children: "\xBFQui\xE9n lanza el proyecto?"
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("input", {
              value: form.name,
              onChange: function onChange(e) {
                return set("name", e.target.value);
              },
              onBlur: function onBlur() {
                return setTouched(function (t) {
                  return _objectSpread(_objectSpread({}, t), {}, {
                    name: true
                  });
                });
              },
              placeholder: "Tu nombre",
              className: inputCls(touched.name && errors.name)
            }), touched.name && errors.name && /*#__PURE__*/_jsx("p", {
              className: "text-red-500 text-xs font-bold mt-1.5",
              children: errors.name
            })]
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("input", {
              value: form.email,
              onChange: function onChange(e) {
                return set("email", e.target.value);
              },
              onBlur: function onBlur() {
                return setTouched(function (t) {
                  return _objectSpread(_objectSpread({}, t), {}, {
                    email: true
                  });
                });
              },
              placeholder: "email@empresa.com",
              type: "email",
              className: inputCls(touched.email && errors.email)
            }), touched.email && errors.email && /*#__PURE__*/_jsx("p", {
              className: "text-red-500 text-xs font-bold mt-1.5",
              children: errors.email
            })]
          })]
        }) : step === 1 ? /*#__PURE__*/_jsxs("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/_jsx("h3", {
            className: "text-xl font-black tracking-tight",
            children: "Elige tu plan"
          }), /*#__PURE__*/_jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-2",
            children: ["Starter", "Scale", "Enterprise"].map(function (p) {
              return /*#__PURE__*/_jsxs("button", {
                type: "button",
                onClick: function onClick() {
                  return set("plan", p);
                },
                className: cn("rounded-2xl border p-4 text-left transition-all", form.plan === p ? "border-violet-500 ring-2 ring-violet-500/25" : darkMode ? "border-white/10" : "border-black/10"),
                children: [/*#__PURE__*/_jsx("p", {
                  className: "font-black text-sm",
                  children: p
                }), /*#__PURE__*/_jsx("p", {
                  className: cn("text-xs mt-0.5", darkMode ? "text-white/50" : "text-black/50"),
                  children: p === "Starter" ? "$0" : p === "Scale" ? "$49/m" : "$199/m"
                })]
              }, p);
            })
          }), form.plan === "Enterprise" && /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("input", {
              value: form.card,
              onChange: function onChange(e) {
                return set("card", e.target.value);
              },
              onBlur: function onBlur() {
                return setTouched(function (t) {
                  return _objectSpread(_objectSpread({}, t), {}, {
                    card: true
                  });
                });
              },
              placeholder: "N\xFAmero de tarjeta",
              inputMode: "numeric",
              className: inputCls(touched.card && errors.card)
            }), touched.card && errors.card && /*#__PURE__*/_jsx("p", {
              className: "text-red-500 text-xs font-bold mt-1.5",
              children: errors.card
            })]
          })]
        }) : /*#__PURE__*/_jsxs("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/_jsx("h3", {
            className: "text-xl font-black tracking-tight",
            children: "Revisa y lanza \uD83D\uDE80"
          }), /*#__PURE__*/_jsxs("div", {
            className: cn("rounded-2xl border p-4 text-sm space-y-2", darkMode ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]"),
            children: [/*#__PURE__*/_jsxs("p", {
              children: [/*#__PURE__*/_jsx("b", {
                children: "Nombre:"
              }), " ", form.name]
            }), /*#__PURE__*/_jsxs("p", {
              children: [/*#__PURE__*/_jsx("b", {
                children: "Email:"
              }), " ", form.email]
            }), /*#__PURE__*/_jsxs("p", {
              children: [/*#__PURE__*/_jsx("b", {
                children: "Plan:"
              }), " ", form.plan]
            })]
          }), /*#__PURE__*/_jsxs("label", {
            className: "flex items-start gap-3 cursor-pointer text-sm font-medium",
            children: [/*#__PURE__*/_jsx("button", {
              type: "button",
              role: "checkbox",
              "aria-checked": form.agree,
              onClick: function onClick() {
                return set("agree", !form.agree);
              },
              className: cn("w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5", form.agree ? "bg-violet-500 border-violet-500 text-white" : ""),
              children: form.agree && /*#__PURE__*/_jsx(Check, {
                size: 14
              })
            }), "Acepto t\xE9rminos y quiero lanzar mi workspace ahora."]
          }), touched.agree && errors.agree && /*#__PURE__*/_jsx("p", {
            className: "text-red-500 text-xs font-bold",
            children: errors.agree
          })]
        })
      }, done ? "done" : step)
    }), !done && /*#__PURE__*/_jsxs("div", {
      className: "flex gap-2 mt-8",
      children: [/*#__PURE__*/_jsxs("button", {
        type: "button",
        disabled: step === 0,
        onClick: function onClick() {
          return go(step - 1);
        },
        className: "h-12 px-5 rounded-xl text-sm font-bold border flex items-center gap-2 disabled:opacity-30",
        children: [/*#__PURE__*/_jsx(ArrowLeft, {
          size: 15
        }), " Atr\xE1s"]
      }), step < STEPS.length - 1 ? /*#__PURE__*/_jsxs("button", {
        type: "button",
        onClick: function onClick() {
          return go(step + 1);
        },
        className: cn("flex-1 h-12 rounded-xl text-sm font-bold flex items-center justify-center gap-2", darkMode ? "bg-white text-black" : "bg-black text-white"),
        children: ["Continuar ", /*#__PURE__*/_jsx(ArrowRight, {
          size: 15
        })]
      }) : /*#__PURE__*/_jsxs("button", {
        type: "button",
        onClick: finish,
        className: "flex-1 h-12 rounded-xl text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-400 text-white flex items-center justify-center gap-2",
        children: [/*#__PURE__*/_jsx(Rocket, {
          size: 15
        }), " Lanzar proyecto"]
      })]
    })]
  });
}