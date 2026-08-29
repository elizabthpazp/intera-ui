"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {ReactNode} props.children
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function PerspectiveCard(_ref) {
  var children = _ref.children,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var x = useMotionValue(0);
  var y = useMotionValue(0);
  var mouseXSpring = useSpring(x);
  var mouseYSpring = useSpring(y);
  var rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  var rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  var handleMouseMove = function handleMouseMove(e) {
    var rect = e.currentTarget.getBoundingClientRect();
    var width = rect.width;
    var height = rect.height;
    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - rect.top;
    var xPct = mouseX / width - 0.5;
    var yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  var handleMouseLeave = function handleMouseLeave() {
    x.set(0);
    y.set(0);
  };
  return /*#__PURE__*/_jsxs(motion.div, {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: _objectSpread({
      rotateY: rotateY,
      rotateX: rotateX,
      transformStyle: "preserve-3d"
    }, style),
    className: cn("relative w-full max-w-[16rem] sm:w-64 h-80 sm:h-96 max-w-[90vw] rounded-3xl border shadow-2xl transition-colors duration-500 overflow-hidden", darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100", className),
    children: [/*#__PURE__*/_jsx("div", {
      style: {
        transform: "translateZ(75px)",
        transformStyle: "preserve-3d"
      },
      className: "absolute inset-4 rounded-2xl flex flex-col items-center justify-center gap-4 text-center",
      children: children
    }), /*#__PURE__*/_jsx(motion.div, {
      style: {
        background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 80%)",
        transform: "translateZ(1px)"
      },
      className: "absolute inset-0 pointer-events-none"
    })]
  });
}