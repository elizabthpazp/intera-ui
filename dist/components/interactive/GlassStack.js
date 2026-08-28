"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array of { title: string, content: string, image: string }
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function GlassStack(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  var nextCard = function nextCard() {
    setIndex(function (prev) {
      return (prev + 1) % items.length;
    });
  };
  return /*#__PURE__*/_jsxs("div", {
    className: cn("relative w-full h-[400px] flex items-center justify-center perspective-1000", className),
    style: style,
    children: [/*#__PURE__*/_jsx("div", {
      className: "relative w-64 h-80 cursor-pointer",
      onClick: nextCard,
      children: /*#__PURE__*/_jsx(AnimatePresence, {
        mode: "popLayout",
        children: items.map(function (item, i) {
          var isFront = i === index;
          var position = (i - index + items.length) % items.length;
          if (position > 2) return null;
          return /*#__PURE__*/_jsxs(motion.div, {
            initial: {
              opacity: 0,
              scale: 0.8,
              y: 20
            },
            animate: {
              opacity: 1 - position * 0.2,
              scale: 1 - position * 0.05,
              y: -position * 20,
              z: -position * 50,
              rotateX: isFront ? 0 : -5,
              zIndex: items.length - position
            },
            exit: {
              opacity: 0,
              scale: 1.1,
              y: -40,
              rotateZ: 10
            },
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 25
            },
            className: cn("absolute inset-0 rounded-3xl p-6 border flex flex-col justify-between backdrop-blur-xl transition-colors", darkMode ? "bg-gray-900/40 border-gray-800 text-white" : "bg-white/40 border-white/60 text-gray-900 shadow-xl"),
            style: {
              transformStyle: "preserve-3d"
            },
            children: [/*#__PURE__*/_jsxs("div", {
              className: "space-y-2",
              children: [/*#__PURE__*/_jsx("div", {
                className: cn("w-10 h-1 rounded-full", darkMode ? "bg-gray-700" : "bg-gray-200")
              }), /*#__PURE__*/_jsx("h3", {
                className: "text-xl font-bold leading-tight",
                children: item.title
              })]
            }), /*#__PURE__*/_jsx("p", {
              className: cn("text-sm leading-relaxed", darkMode ? "text-gray-400" : "text-gray-600"),
              children: item.content
            }), /*#__PURE__*/_jsxs("div", {
              className: "flex items-center justify-between mt-4",
              children: [/*#__PURE__*/_jsxs("span", {
                className: "text-[10px] font-bold uppercase tracking-widest opacity-50",
                children: ["Step ", i + 1]
              }), /*#__PURE__*/_jsx("div", {
                className: cn("w-8 h-8 rounded-full flex items-center justify-center border", darkMode ? "border-gray-700 bg-gray-800" : "border-gray-100 bg-white"),
                children: "\u2192"
              })]
            })]
          }, i);
        })
      })
    }), /*#__PURE__*/_jsx("div", {
      className: cn("absolute bottom-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40", darkMode ? "text-white" : "text-black"),
      children: "Click to Rotate Stack"
    })]
  });
}