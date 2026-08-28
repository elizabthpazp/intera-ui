"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {ReactNode} props.children
 * @param {function} [props.onClick=() => {}]
 * @param {number} [props.strength=0.5] - How strong the magnetic pull is (0 to 1)
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function MagneticButton(_ref) {
  var children = _ref.children,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    _ref$strength = _ref.strength,
    strength = _ref$strength === void 0 ? 0.5 : _ref$strength,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var ref = useRef(null);
  var _useState = useState({
      x: 0,
      y: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    position = _useState2[0],
    setPosition = _useState2[1];
  var handleMouseMove = function handleMouseMove(e) {
    var clientX = e.clientX,
      clientY = e.clientY;
    var _ref$current$getBound = ref.current.getBoundingClientRect(),
      left = _ref$current$getBound.left,
      top = _ref$current$getBound.top,
      width = _ref$current$getBound.width,
      height = _ref$current$getBound.height;
    var x = (clientX - (left + width / 2)) * strength;
    var y = (clientY - (top + height / 2)) * strength;
    setPosition({
      x: x,
      y: y
    });
  };
  var handleMouseLeave = function handleMouseLeave() {
    setPosition({
      x: 0,
      y: 0
    });
  };
  return /*#__PURE__*/_jsxs(motion.button, {
    ref: ref,
    onClick: onClick,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: {
      x: position.x,
      y: position.y
    },
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      mass: 0.1
    },
    style: style,
    className: cn("relative px-8 py-3 rounded-xl font-bold transition-colors shadow-lg active:scale-95", darkMode ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800", className),
    children: [/*#__PURE__*/_jsx(motion.span, {
      className: "relative z-10 block",
      animate: {
        x: position.x * 0.2,
        y: position.y * 0.2
      },
      children: children
    }), /*#__PURE__*/_jsx(motion.div, {
      className: cn("absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-30 pointer-events-none", darkMode ? "bg-white" : "bg-black")
    })]
  });
}