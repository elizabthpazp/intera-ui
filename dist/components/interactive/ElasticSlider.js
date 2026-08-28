"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {number} [props.min=0]
 * @param {number} [props.max=100]
 * @param {number} [props.defaultValue=50]
 * @param {function} [props.onChange=() => {}]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ElasticSlider(_ref) {
  var _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 100 : _ref$max,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? 50 : _ref$defaultValue,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var x = useMotionValue(0);
  var springX = useSpring(x, {
    stiffness: 400,
    damping: 30
  });
  var sliderWidth = 260;
  var thumbSize = 24;
  var percentage = value / max * 100;
  return /*#__PURE__*/_jsxs("div", {
    className: cn("flex flex-col items-center gap-6 p-4", className),
    style: style,
    children: [/*#__PURE__*/_jsxs("div", {
      className: "relative w-[260px] h-2",
      children: [/*#__PURE__*/_jsx("div", {
        className: cn("absolute inset-0 rounded-full", darkMode ? "bg-gray-800" : "bg-gray-200")
      }), /*#__PURE__*/_jsx(motion.div, {
        className: cn("absolute inset-y-0 left-0 rounded-full", darkMode ? "bg-white" : "bg-black"),
        style: {
          width: "".concat(percentage, "%")
        }
      }), /*#__PURE__*/_jsx(motion.div, {
        drag: "x",
        dragConstraints: {
          left: 0,
          right: sliderWidth
        },
        dragElastic: 0.1,
        dragMomentum: false,
        onDrag: function onDrag(e) {
          var rect = e.target.parentElement.getBoundingClientRect();
          var newX = e.clientX - rect.left;
          var clampedX = Math.min(Math.max(newX, 0), sliderWidth);
          var newValue = Math.round(clampedX / sliderWidth * max);
          setValue(newValue);
          onChange(newValue);
        },
        style: {
          x: value / max * sliderWidth - thumbSize / 2
        },
        whileHover: {
          scale: 1.2
        },
        whileTap: {
          scale: 0.9,
          cursor: "grabbing"
        },
        className: cn("absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 cursor-grab flex items-center justify-center shadow-lg transition-colors", darkMode ? "bg-gray-900 border-white" : "bg-white border-black"),
        children: /*#__PURE__*/_jsx("div", {
          className: cn("w-1 h-1 rounded-full", darkMode ? "bg-white" : "bg-black")
        })
      })]
    }), /*#__PURE__*/_jsx(motion.div, {
      initial: {
        scale: 0.8,
        opacity: 0
      },
      animate: {
        scale: 1,
        opacity: 1
      },
      className: cn("text-2xl font-black italic tracking-tighter", darkMode ? "text-white" : "text-black"),
      children: value
    }, value)]
  });
}