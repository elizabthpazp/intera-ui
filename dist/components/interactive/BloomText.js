"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, MousePointerClick } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * BloomText — revelado de texto por palabras con blur + resorte.
 * Género "text generate / flip words": reinterpretación Intera —
 * cada palabra florece con blur→nítido, es hovereable y re-jugable.
 * Click en la palabra la hace "saltar". 100% original.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function BloomText(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? "Interfaces que respiran, responden y enamoran a cada scroll." : _ref$text,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$highlightWords = _ref.highlightWords,
    highlightWords = _ref$highlightWords === void 0 ? ["respiran,", "enamoran"] : _ref$highlightWords,
    _ref$highlightClass = _ref.highlightClass,
    highlightClass = _ref$highlightClass === void 0 ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400" : _ref$highlightClass,
    _ref$textClassName = _ref.textClassName,
    textClassName = _ref$textClassName === void 0 ? "text-3xl sm:text-4xl" : _ref$textClassName,
    _ref$showReplay = _ref.showReplay,
    showReplay = _ref$showReplay === void 0 ? true : _ref$showReplay,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    runId = _useState2[0],
    setRunId = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    popped = _useState4[0],
    setPopped = _useState4[1];
  var words = text.split(" ");
  return /*#__PURE__*/_jsxs("div", {
    style: style,
    className: cn("w-full min-w-0 max-w-full", className),
    children: [showReplay && /*#__PURE__*/_jsxs("div", {
      className: "flex flex-wrap items-center gap-2 mb-5",
      children: [/*#__PURE__*/_jsxs("button", {
        type: "button",
        onClick: function onClick() {
          return setRunId(function (v) {
            return v + 1;
          });
        },
        className: cn("h-9 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-transform hover:scale-105 active:scale-95", darkMode ? "bg-white text-black" : "bg-black text-white"),
        children: [/*#__PURE__*/_jsx(RotateCcw, {
          size: 13
        }), " Replay bloom"]
      }), /*#__PURE__*/_jsxs("span", {
        className: cn("text-[11px] font-medium flex items-center gap-1.5", darkMode ? "text-white/40" : "text-black/40"),
        children: [/*#__PURE__*/_jsx(MousePointerClick, {
          size: 13
        }), " click a word \u2014 it pops"]
      })]
    }), /*#__PURE__*/_jsx("p", {
      className: cn("font-black tracking-tighter leading-[1.08] break-words", textClassName, darkMode ? "text-white" : "text-black"),
      children: /*#__PURE__*/_jsx(AnimatePresence, {
        mode: "popLayout",
        children: words.map(function (w, i) {
          var hot = highlightWords.includes(w);
          var isPopped = popped === "".concat(runId, "-").concat(i);
          return /*#__PURE__*/_jsx(motion.span, {
            initial: {
              opacity: 0,
              y: 18,
              filter: "blur(10px)",
              scale: 0.92
            },
            animate: isPopped ? {
              opacity: 1,
              y: [0, -12, 0],
              filter: "blur(0px)",
              scale: [1, 1.18, 1]
            } : {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              scale: 1
            },
            transition: {
              delay: i * 0.055,
              type: "spring",
              stiffness: 260,
              damping: 22
            },
            onClick: function onClick() {
              return setPopped("".concat(runId, "-").concat(i));
            },
            whileHover: {
              scale: 1.1,
              rotate: -1.5,
              transition: {
                duration: 0.15
              }
            },
            className: cn("inline-block mr-[0.28em] cursor-pointer select-none pb-1", hot && highlightClass),
            children: w
          }, "".concat(runId, "-").concat(i));
        })
      })
    }, runId), /*#__PURE__*/_jsx("div", {
      className: "mt-5 flex gap-1.5",
      children: words.map(function (_, i) {
        return /*#__PURE__*/_jsx(motion.span, {
          initial: {
            scaleX: 0
          },
          animate: {
            scaleX: 1
          },
          transition: {
            delay: i * 0.055 + 0.1,
            duration: 0.35
          },
          className: cn("h-1 flex-1 rounded-full origin-left", darkMode ? "bg-white/80" : "bg-black/80")
        }, "bar-".concat(runId, "-").concat(i));
      })
    })]
  });
}