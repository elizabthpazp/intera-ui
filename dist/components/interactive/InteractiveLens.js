"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {ReactNode} props.children - Content to be revealed
 * @param {ReactNode} props.background - Background content (usually blurred or darkened)
 * @param {number} [props.size=200] - Lens size
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function InteractiveLens(_ref) {
  var children = _ref.children,
    background = _ref.background,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 200 : _ref$size,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState({
      x: 0,
      y: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    mousePos = _useState2[0],
    setMousePos = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isHovered = _useState4[0],
    setIsHovered = _useState4[1];
  var handleMouseMove = function handleMouseMove(e) {
    var rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  return /*#__PURE__*/_jsxs("div", {
    className: cn("relative overflow-hidden rounded-2xl cursor-none", className),
    style: style,
    onMouseMove: handleMouseMove,
    onMouseEnter: function onMouseEnter() {
      return setIsHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovered(false);
    },
    children: [/*#__PURE__*/_jsx("div", {
      className: "w-full h-full opacity-40 grayscale select-none pointer-events-none",
      children: background || children
    }), /*#__PURE__*/_jsx(motion.div, {
      className: "absolute inset-0 pointer-events-none",
      animate: {
        WebkitMaskImage: isHovered ? "radial-gradient(circle ".concat(size / 2, "px at ").concat(mousePos.x, "px ").concat(mousePos.y, "px, black 100%, transparent 100%)") : "radial-gradient(circle 0px at ".concat(mousePos.x, "px ").concat(mousePos.y, "px, black 100%, transparent 100%)"),
        maskImage: isHovered ? "radial-gradient(circle ".concat(size / 2, "px at ").concat(mousePos.x, "px ").concat(mousePos.y, "px, black 100%, transparent 100%)") : "radial-gradient(circle 0px at ".concat(mousePos.x, "px ").concat(mousePos.y, "px, black 100%, transparent 100%)")
      },
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.5
      },
      children: /*#__PURE__*/_jsx("div", {
        className: "w-full h-full",
        children: children
      })
    }), isHovered && /*#__PURE__*/_jsx(motion.div, {
      className: cn("absolute rounded-full border-2 pointer-events-none z-10", darkMode ? "border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)]" : "border-black/20 shadow-[0_0_20px_rgba(0,0,0,0.1)]"),
      style: {
        width: size,
        height: size,
        left: mousePos.x - size / 2,
        top: mousePos.y - size / 2
      },
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.5
      }
    })]
  });
}