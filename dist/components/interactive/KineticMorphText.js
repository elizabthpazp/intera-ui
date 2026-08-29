"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array<string>} [props.texts=[]] - Frases a morfar
 * @param {number} [props.interval=2500] - Ms entre cambios
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {string} [props.variant="blur"] - blur | slide | scale
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function KineticMorphText(_ref) {
  var _ref$texts = _ref.texts,
    texts = _ref$texts === void 0 ? ["InteraUI", "Interactive", "Modern", "Delightful"] : _ref$texts,
    _ref$interval = _ref.interval,
    interval = _ref$interval === void 0 ? 2500 : _ref$interval,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "blur" : _ref$variant;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  useEffect(function () {
    var id = setInterval(function () {
      return setIndex(function (i) {
        return (i + 1) % texts.length;
      });
    }, interval);
    return function () {
      return clearInterval(id);
    };
  }, [texts.length, interval]);
  var variants = {
    blur: {
      initial: {
        opacity: 0,
        filter: "blur(10px)",
        y: 20
      },
      animate: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0
      },
      exit: {
        opacity: 0,
        filter: "blur(10px)",
        y: -20
      }
    },
    slide: {
      initial: {
        opacity: 0,
        x: 40
      },
      animate: {
        opacity: 1,
        x: 0
      },
      exit: {
        opacity: 0,
        x: -40
      }
    },
    scale: {
      initial: {
        opacity: 0,
        scale: 0.8
      },
      animate: {
        opacity: 1,
        scale: 1
      },
      exit: {
        opacity: 0,
        scale: 1.2
      }
    }
  }[variant] || {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
      y: -20
    }
  };
  return /*#__PURE__*/_jsxs("div", {
    className: cn("relative flex items-center justify-center py-6 sm:py-8 overflow-hidden px-4", className),
    style: style,
    children: [/*#__PURE__*/_jsx("div", {
      className: "relative h-16 sm:h-20 flex items-center justify-center w-full",
      children: /*#__PURE__*/_jsx(AnimatePresence, {
        mode: "wait",
        children: /*#__PURE__*/_jsxs(motion.h2, {
          initial: variants.initial,
          animate: variants.animate,
          exit: variants.exit,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          },
          className: cn("text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-center whitespace-normal sm:whitespace-nowrap break-words px-2", darkMode ? "text-white" : "text-gray-900"),
          children: [texts[index], /*#__PURE__*/_jsx("span", {
            className: "inline-block w-1.5 h-6 sm:w-2 sm:h-8 ml-1 bg-current animate-pulse align-middle"
          })]
        }, index)
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "absolute bottom-0 flex gap-1.5",
      children: texts.map(function (_, i) {
        return /*#__PURE__*/_jsx(motion.button, {
          onClick: function onClick() {
            return setIndex(i);
          },
          className: cn("h-1 rounded-full transition-all", i === index ? "w-6 bg-current" : "w-1 opacity-20 bg-current"),
          animate: {
            opacity: i === index ? 1 : 0.3
          }
        }, i);
      })
    })]
  });
}