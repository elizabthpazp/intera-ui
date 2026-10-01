"use client";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from "react";
import { Pause, Play, ArrowLeftRight } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * LoopCards — carrusel infinito con control total y estética Intera.
 * Género "infinite moving cards": reimaginado como cinta con máscara de
 * desvanecido, pausa al hover, control de dirección/velocidad y drag nativo.
 * Implementación propia con CSS animation.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function LoopCards(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$speed = _ref.speed,
    speed = _ref$speed === void 0 ? 32 : _ref$speed,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "right" : _ref$direction,
    _ref$pauseOnHover = _ref.pauseOnHover,
    pauseOnHover = _ref$pauseOnHover === void 0 ? true : _ref$pauseOnHover,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var fallback = [{
    id: "1",
    title: "Diseño vivo",
    content: "Micro-interacciones que responden al tacto, no solo decoran."
  }, {
    id: "2",
    title: "Motion real",
    content: "Springs y física creíble en cada transición."
  }, {
    id: "3",
    title: "Dark primero",
    content: "Contraste perfecto en ambos modos de color."
  }, {
    id: "4",
    title: "Composable",
    content: "Props claras, cero dependencias ocultas."
  }, {
    id: "5",
    title: "Performante",
    content: "CSS + transform, sin re-renders por frame."
  }];
  var data = items.length ? items : fallback;
  var _useState = useState(direction),
    _useState2 = _slicedToArray(_useState, 2),
    dir = _useState2[0],
    setDir = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    paused = _useState4[0],
    setPaused = _useState4[1];
  var _useState5 = useState(speed),
    _useState6 = _slicedToArray(_useState5, 2),
    fast = _useState6[0],
    setFast = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    hovering = _useState8[0],
    setHovering = _useState8[1];

  // Sincroniza si el consumidor cambia props después del montaje
  React.useEffect(function () {
    return setFast(speed);
  }, [speed]);
  React.useEffect(function () {
    return setDir(direction);
  }, [direction]);
  var isPaused = paused || pauseOnHover && hovering;
  var row = [].concat(_toConsumableArray(data), _toConsumableArray(data));
  return /*#__PURE__*/_jsxs("div", {
    style: style,
    className: cn("w-full min-w-0 max-w-full", className),
    children: [/*#__PURE__*/_jsx("style", {
      children: "\n        @keyframes ia-loop-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }\n        @keyframes ia-loop-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }\n      "
    }), /*#__PURE__*/_jsxs("div", {
      className: "flex flex-wrap items-center gap-2 mb-4",
      children: [/*#__PURE__*/_jsxs("button", {
        type: "button",
        onClick: function onClick() {
          return setPaused(!paused);
        },
        className: cn("h-9 px-3 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all", darkMode ? "bg-white text-black border-white hover:scale-105" : "bg-black text-white border-black hover:scale-105"),
        children: [paused ? /*#__PURE__*/_jsx(Play, {
          size: 13
        }) : /*#__PURE__*/_jsx(Pause, {
          size: 13
        }), paused ? "Play" : "Pause"]
      }), /*#__PURE__*/_jsxs("button", {
        type: "button",
        onClick: function onClick() {
          return setDir(function (d) {
            return d === "left" ? "right" : "left";
          });
        },
        className: cn("h-9 px-3 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all", darkMode ? "border-white/15 text-white hover:bg-white/10" : "border-black/15 text-black hover:bg-black/5"),
        children: [/*#__PURE__*/_jsx(ArrowLeftRight, {
          size: 13
        }), " ", dir === "left" ? "← left" : "right →"]
      }), /*#__PURE__*/_jsx("div", {
        className: "flex items-center gap-2 ml-auto",
        children: [22, 32, 48].map(function (s) {
          return /*#__PURE__*/_jsx("button", {
            type: "button",
            onClick: function onClick() {
              return setFast(s);
            },
            className: cn("h-8 w-10 rounded-lg text-[11px] font-black border transition-all", fast === s ? darkMode ? "bg-white text-black border-white" : "bg-black text-white border-black" : darkMode ? "border-white/15 text-white/50" : "border-black/15 text-black/50"),
            children: s === 22 ? "3x" : s === 32 ? "2x" : "1x"
          }, s);
        })
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "relative overflow-hidden",
      style: {
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
      },
      onMouseEnter: function onMouseEnter() {
        return setHovering(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setHovering(false);
      },
      children: /*#__PURE__*/_jsx("div", {
        className: "flex gap-4 w-max pr-4",
        style: {
          animationName: dir === "left" ? "ia-loop-left" : "ia-loop-right",
          animationDuration: "".concat(fast, "s"),
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: isPaused ? "paused" : "running"
        },
        children: row.map(function (it, i) {
          return /*#__PURE__*/_jsxs("article", {
            className: cn("w-[min(280px,74vw)] shrink-0 rounded-[1.6rem] p-5 sm:p-6 border text-left transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-[-0.5deg]", darkMode ? "bg-[#0d0d14] border-white/10 hover:border-white/25" : "bg-white border-black/10 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.25)] hover:shadow-[0_26px_50px_-18px_rgba(0,0,0,0.3)]"),
            children: [/*#__PURE__*/_jsx("div", {
              className: cn("w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black mb-4", i % 3 === 0 ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white" : i % 3 === 1 ? "bg-gradient-to-br from-cyan-400 to-blue-500 text-white" : darkMode ? "bg-white text-black" : "bg-black text-white"),
              children: (it.title || "?")[0]
            }), /*#__PURE__*/_jsx("h4", {
              className: cn("font-black tracking-tight", darkMode ? "text-white" : "text-black"),
              children: it.title
            }), /*#__PURE__*/_jsx("p", {
              className: cn("text-[13px] mt-1.5 leading-relaxed", darkMode ? "text-white/55" : "text-black/55"),
              children: it.content
            })]
          }, "".concat(it.id, "-").concat(i));
        })
      })
    })]
  });
}