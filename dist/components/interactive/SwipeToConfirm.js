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
import React, { useState, useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {string} [props.label="Slide to confirm"]
 * @param {string} [props.successLabel="Confirmed"]
 * @param {function} [props.onConfirm=() => {}] - Llamado al confirmar. La librería NO hace alert por defecto, delega al consumidor.
 * @param {function} [props.onReset=() => {}] - Llamado al resetear
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {number|null} [props.resetDelay=null] - Ms para auto-reset tras confirmar. null = se queda confirmado hasta reset manual.
 * @param {boolean} [props.disabled=false]
 * @param {boolean} [props.allowReset=true] - Si true muestra botón de reset tras confirmar
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SwipeToConfirm(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Slide to confirm" : _ref$label,
    _ref$successLabel = _ref.successLabel,
    successLabel = _ref$successLabel === void 0 ? "Confirmed" : _ref$successLabel,
    _ref$onConfirm = _ref.onConfirm,
    onConfirm = _ref$onConfirm === void 0 ? function () {} : _ref$onConfirm,
    _ref$onReset = _ref.onReset,
    onReset = _ref$onReset === void 0 ? function () {} : _ref$onReset,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style,
    _ref$resetDelay = _ref.resetDelay,
    resetDelay = _ref$resetDelay === void 0 ? null : _ref$resetDelay,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$allowReset = _ref.allowReset,
    allowReset = _ref$allowReset === void 0 ? true : _ref$allowReset;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isConfirmed = _useState2[0],
    setIsConfirmed = _useState2[1];
  var x = useMotionValue(0);
  var containerWidth = 280;
  var thumbSize = 50;
  var dragRange = containerWidth - thumbSize - 8;
  var opacity = useTransform(x, [0, dragRange], [1, 0]);
  var scale = useTransform(x, [0, dragRange], [1, 1.1]);
  var reset = useCallback(function () {
    setIsConfirmed(false);
    x.set(0);
    onReset();
  }, [x, onReset]);
  var handleDragEnd = function handleDragEnd() {
    if (disabled) {
      x.set(0);
      return;
    }
    if (x.get() >= dragRange - 10) {
      setIsConfirmed(true);
      onConfirm();
      if (resetDelay !== null && typeof resetDelay === "number") {
        setTimeout(function () {
          return reset();
        }, resetDelay);
      }
    } else {
      x.set(0);
    }
  };
  return /*#__PURE__*/_jsxs("div", {
    className: cn("relative h-[60px] rounded-full p-1 border flex items-center overflow-hidden select-none", darkMode ? "bg-gray-900 border-gray-800" : "bg-gray-100 border-gray-200 shadow-inner", disabled && "opacity-50 cursor-not-allowed", className),
    style: _objectSpread({
      width: containerWidth
    }, style),
    children: [/*#__PURE__*/_jsx(motion.div, {
      style: {
        opacity: opacity
      },
      className: cn("absolute inset-0 flex items-center justify-center text-sm font-black uppercase tracking-widest pointer-events-none select-none", darkMode ? "text-gray-600" : "text-gray-400"),
      children: label
    }), isConfirmed && /*#__PURE__*/_jsxs(motion.div, {
      initial: {
        opacity: 0,
        scale: 0.8
      },
      animate: {
        opacity: 1,
        scale: 1
      },
      className: "absolute inset-0 flex items-center justify-center gap-2 text-green-500 font-black uppercase tracking-widest",
      children: [/*#__PURE__*/_jsx(Check, {
        size: 20,
        strokeWidth: 3
      }), successLabel, allowReset && /*#__PURE__*/_jsx("button", {
        onClick: reset,
        "aria-label": "Reset",
        className: cn("ml-2 p-1.5 rounded-full transition-colors", darkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/5 hover:bg-black/10 text-black"),
        children: /*#__PURE__*/_jsx(RotateCcw, {
          size: 14
        })
      })]
    }), !isConfirmed && /*#__PURE__*/_jsx(motion.div, {
      drag: disabled ? false : "x",
      dragConstraints: {
        left: 0,
        right: dragRange
      },
      dragElastic: 0.05,
      onDragEnd: handleDragEnd,
      style: {
        x: x,
        scale: scale
      },
      className: cn("relative z-10 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-xl transition-colors", disabled ? "cursor-not-allowed" : "cursor-grab active:cursor-grabbing", darkMode ? "bg-white text-black" : "bg-black text-white"),
      children: /*#__PURE__*/_jsx(ArrowRight, {
        size: 24
      })
    }), /*#__PURE__*/_jsx(motion.div, {
      className: cn("absolute left-0 top-0 bottom-0 pointer-events-none", darkMode ? "bg-white/10" : "bg-black/5"),
      style: {
        width: x,
        borderTopLeftRadius: 99,
        borderBottomLeftRadius: 99
      }
    })]
  });
}