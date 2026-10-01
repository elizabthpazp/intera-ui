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
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * NebulaDrift — fondo aurora interactivo con toque Intera.
 * Concepto inspirado en "aurora backgrounds": blobs de color que derivan
 * lento + parallax que sigue al mouse. Implementación 100% original.
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.darkMode=false]
 * @param {number} [props.intensity=1] - 0.5 sutil / 1 normal / 1.6 intenso
 * @param {boolean} [props.showGrid=true] - rejilla tenue encima
 * @param {string} [props.className=""]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function NebulaDrift(_ref) {
  var children = _ref.children,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$intensity = _ref.intensity,
    intensity = _ref$intensity === void 0 ? 1 : _ref$intensity,
    _ref$showGrid = _ref.showGrid,
    showGrid = _ref$showGrid === void 0 ? true : _ref$showGrid,
    _ref$hint = _ref.hint,
    hint = _ref$hint === void 0 ? "● live aurora — move your cursor" : _ref$hint,
    _ref$minHeight = _ref.minHeight,
    minHeight = _ref$minHeight === void 0 ? 280 : _ref$minHeight,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var ref = useRef(null);
  var _useState = useState({
      x: 0.5,
      y: 0.4
    }),
    _useState2 = _slicedToArray(_useState, 2),
    center = _useState2[0],
    setCenter = _useState2[1];
  var mx = useMotionValue(0);
  var my = useMotionValue(0);
  var sx = useSpring(mx, {
    stiffness: 60,
    damping: 18
  });
  var sy = useSpring(my, {
    stiffness: 60,
    damping: 18
  });
  var blobX = useTransform(sx, [-0.5, 0.5], [-30 * intensity, 30 * intensity]);
  var blobY = useTransform(sy, [-0.5, 0.5], [-22 * intensity, 22 * intensity]);
  var blobX2 = useTransform(sx, [-0.5, 0.5], [26 * intensity, -26 * intensity]);
  var handleMove = function handleMove(e) {
    var _ref$current, _e$clientX, _e$touches, _e$clientY, _e$touches2;
    var r = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.getBoundingClientRect();
    if (!r) return;
    var cx = (_e$clientX = e.clientX) !== null && _e$clientX !== void 0 ? _e$clientX : (_e$touches = e.touches) === null || _e$touches === void 0 || (_e$touches = _e$touches[0]) === null || _e$touches === void 0 ? void 0 : _e$touches.clientX;
    var cy = (_e$clientY = e.clientY) !== null && _e$clientY !== void 0 ? _e$clientY : (_e$touches2 = e.touches) === null || _e$touches2 === void 0 || (_e$touches2 = _e$touches2[0]) === null || _e$touches2 === void 0 ? void 0 : _e$touches2.clientY;
    if (cx == null || cy == null) return;
    var px = (cx - r.left) / r.width - 0.5;
    var py = (cy - r.top) / r.height - 0.5;
    mx.set(px);
    my.set(py);
    setCenter({
      x: (cx - r.left) / r.width,
      y: (cy - r.top) / r.height
    });
  };
  var blobs = [{
    c: darkMode ? "rgba(139,92,246,0.55)" : "rgba(139,92,246,0.35)",
    size: 420,
    left: "8%",
    top: "-10%",
    x: blobX,
    y: blobY,
    dur: 11
  }, {
    c: darkMode ? "rgba(34,211,238,0.45)" : "rgba(34,211,238,0.30)",
    size: 360,
    left: "62%",
    top: "10%",
    x: blobX2,
    y: blobY,
    dur: 14
  }, {
    c: darkMode ? "rgba(244,114,182,0.40)" : "rgba(244,114,182,0.28)",
    size: 300,
    left: "35%",
    top: "46%",
    x: blobX,
    y: blobY,
    dur: 9
  }];
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    onPointerMove: function onPointerMove(e) {
      if (e.pointerType !== "touch") handleMove(e);
    },
    onTouchMove: handleMove,
    onMouseLeave: function onMouseLeave() {
      mx.set(0);
      my.set(0);
    },
    style: _objectSpread({
      minHeight: minHeight
    }, style),
    className: cn("relative overflow-hidden rounded-[2.5rem] border transition-colors duration-500 w-full min-w-0 max-w-full touch-pan-y", darkMode ? "bg-[#07070c] border-white/10" : "bg-[#f4f4fb] border-black/10", className),
    children: [blobs.map(function (b, i) {
      return /*#__PURE__*/_jsx(motion.div, {
        style: {
          x: b.x,
          y: b.y,
          width: b.size,
          height: b.size,
          left: b.left,
          top: b.top,
          background: b.c
        },
        className: "absolute rounded-full blur-[90px] pointer-events-none",
        animate: {
          scale: [1, 1.18 * intensity, 0.94, 1],
          rotate: [0, 25, -15, 0]
        },
        transition: {
          duration: b.dur,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }, i);
    }), /*#__PURE__*/_jsx("div", {
      className: "absolute inset-0 pointer-events-none transition-opacity duration-300",
      style: {
        background: "radial-gradient(420px circle at ".concat(center.x * 100, "% ").concat(center.y * 100, "%, ").concat(darkMode ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.07)", ", transparent 65%)")
      }
    }), showGrid && /*#__PURE__*/_jsx("div", {
      className: "absolute inset-0 pointer-events-none opacity-60",
      style: {
        backgroundImage: darkMode ? "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)" : "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
        maskImage: "radial-gradient(ellipse 80% 75% at 50% 40%, black 45%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 75% at 50% 40%, black 45%, transparent 100%)"
      }
    }), /*#__PURE__*/_jsx("div", {
      className: "relative z-10",
      children: children
    }), hint && /*#__PURE__*/_jsx("div", {
      className: cn("absolute bottom-4 left-6 right-6 text-[10px] font-bold uppercase tracking-[0.3em] pointer-events-none", darkMode ? "text-white/30" : "text-black/30"),
      children: hint
    })]
  });
}