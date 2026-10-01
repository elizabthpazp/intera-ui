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
import { cn } from "../../lib/utils";

/**
 * FluxBorder — contenedor con borde cónico animado y glow que sigue al mouse.
 * Género "moving / glowing border": reinterpretación Intera con doble anillo,
 * esquinas extra-redondeadas y aceleración al hover. Código original.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function FluxBorder(_ref) {
  var children = _ref.children,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$radius = _ref.radius,
    radius = _ref$radius === void 0 ? "rounded-[2rem]" : _ref$radius,
    _ref$glow = _ref.glow,
    glow = _ref$glow === void 0 ? "violet" : _ref$glow,
    _ref$speed = _ref.speed,
    speed = _ref$speed === void 0 ? 4 : _ref$speed,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var ref = useRef(null);
  var _useState = useState({
      x: 50,
      y: 50
    }),
    _useState2 = _slicedToArray(_useState, 2),
    spot = _useState2[0],
    setSpot = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hover = _useState4[0],
    setHover = _useState4[1];
  var palettes = {
    violet: "conic-gradient(from var(--ia-flux, 0deg), #8b5cf6, #22d3ee, #f472b6, #8b5cf6)",
    ember: "conic-gradient(from var(--ia-flux, 0deg), #fb923c, #f43f5e, #facc15, #fb923c)",
    mint: "conic-gradient(from var(--ia-flux, 0deg), #34d399, #22d3ee, #a3e635, #34d399)",
    mono: "conic-gradient(from var(--ia-flux, 0deg), #fff, #737373, #fff)"
  };
  var conic = palettes[glow] || palettes.violet;
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    onMouseMove: function onMouseMove(e) {
      var _ref$current;
      var r = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.getBoundingClientRect();
      if (!r) return;
      setSpot({
        x: (e.clientX - r.left) / r.width * 100,
        y: (e.clientY - r.top) / r.height * 100
      });
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    style: _objectSpread(_objectSpread({}, style), {}, {
      "--ia-speed": "".concat(hover ? speed * 0.45 : speed, "s")
    }),
    className: cn("relative isolate p-[1.5px] ia-flux-wrap w-full min-w-0 max-w-full", radius, className),
    children: [/*#__PURE__*/_jsx("style", {
      children: "\n        @property --ia-flux { syntax: '<angle>'; initial-value: 0deg; inherits: false; }\n        .ia-flux-wrap { background: conic-gradient(from var(--ia-flux, 0deg), rgba(139,92,246,.7), rgba(34,211,238,.7), rgba(244,114,182,.7), rgba(139,92,246,.7)); animation: ia-flux-spin var(--ia-speed, 4s) linear infinite; }\n        @keyframes ia-flux-spin { to { --ia-flux: 360deg; } }\n      "
    }), /*#__PURE__*/_jsx("div", {
      "aria-hidden": true,
      className: "absolute -inset-2 -z-10 blur-2xl opacity-0 transition-opacity duration-500 pointer-events-none",
      style: {
        opacity: hover ? 0.55 : 0,
        background: conic
      }
    }), /*#__PURE__*/_jsxs("div", {
      className: cn("relative overflow-hidden", radius, darkMode ? "bg-[#0a0a10]" : "bg-white"),
      children: [/*#__PURE__*/_jsx("div", {
        className: "absolute inset-0 pointer-events-none z-10 transition-opacity duration-300",
        style: {
          opacity: hover ? 1 : 0,
          background: "radial-gradient(280px circle at ".concat(spot.x, "% ").concat(spot.y, "%, ").concat(darkMode ? "rgba(255,255,255,0.10)" : "rgba(139,92,246,0.10)", ", transparent 70%)")
        }
      }), /*#__PURE__*/_jsx("div", {
        className: "relative z-20",
        children: children
      })]
    })]
  });
}