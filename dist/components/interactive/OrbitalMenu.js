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
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array de { id, icon, label, onClick, color? }
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {number} [props.radius=90] - Radio órbita
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function OrbitalMenu(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style,
    _ref$radius = _ref.radius,
    radius = _ref$radius === void 0 ? 90 : _ref$radius;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var fallback = [{
    id: "1",
    icon: "✦",
    label: "Design",
    color: "from-violet-500 to-purple-600"
  }, {
    id: "2",
    icon: "◈",
    label: "Code",
    color: "from-blue-500 to-cyan-500"
  }, {
    id: "3",
    icon: "⬢",
    label: "Motion",
    color: "from-emerald-500 to-teal-600"
  }, {
    id: "4",
    icon: "⬣",
    label: "Ship",
    color: "from-orange-500 to-pink-500"
  }];
  var data = items.length ? items : fallback;
  var size = 56;
  var half = size / 2;
  var responsiveRadius = typeof window !== "undefined" ? Math.min(radius, window.innerWidth * 0.28) : radius;
  return /*#__PURE__*/_jsxs("div", {
    className: cn("relative flex items-center justify-center overflow-visible shrink-0 touch-manipulation max-w-[90vw]", className),
    style: _objectSpread({
      width: responsiveRadius * 2 + size + 32,
      height: responsiveRadius * 2 + size + 32
    }, style),
    children: [/*#__PURE__*/_jsx(motion.button, {
      type: "button",
      onClick: function onClick() {
        return setOpen(!open);
      },
      whileTap: {
        scale: 0.92
      },
      whileHover: {
        scale: 1.02
      },
      className: cn("absolute z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-2 transition-colors select-none touch-manipulation", darkMode ? "bg-white text-black border-white hover:bg-gray-100" : "bg-black text-white border-black hover:bg-gray-900"),
      style: {
        left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%"
      },
      children: /*#__PURE__*/_jsx(motion.span, {
        animate: {
          rotate: open ? 45 : 0
        },
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        },
        children: open ? /*#__PURE__*/_jsx(X, {
          size: 24
        }) : /*#__PURE__*/_jsx(Plus, {
          size: 24
        })
      })
    }), /*#__PURE__*/_jsx(AnimatePresence, {
      children: open && data.map(function (item, i) {
        var angle = 360 / data.length * i - 90;
        var rad = angle * Math.PI / 180;
        var x = Math.cos(rad) * responsiveRadius;
        var y = Math.sin(rad) * responsiveRadius;
        return /*#__PURE__*/_jsxs(motion.button, {
          type: "button",
          initial: {
            x: 0,
            y: 0,
            scale: 0,
            opacity: 0
          },
          animate: {
            x: x,
            y: y,
            scale: 1,
            opacity: 1
          },
          exit: {
            x: 0,
            y: 0,
            scale: 0,
            opacity: 0
          },
          transition: {
            type: "spring",
            damping: 18,
            stiffness: 260,
            delay: i * 0.04
          },
          onClick: function onClick() {
            var _item$onClick;
            (_item$onClick = item.onClick) === null || _item$onClick === void 0 || _item$onClick.call(item, item);
            setOpen(false);
          },
          whileHover: {
            scale: 1.1,
            zIndex: 30
          },
          whileTap: {
            scale: 0.9
          },
          className: "absolute left-1/2 top-1/2 w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg border group select-none touch-manipulation z-10 hover:z-20",
          style: {
            marginLeft: -half,
            marginTop: -half,
            background: item.color ? undefined : darkMode ? "#1f2937" : "white",
            borderColor: darkMode ? "#374151" : "#e5e7eb"
          },
          children: [item.color ? /*#__PURE__*/_jsx("span", {
            className: cn("absolute inset-0 rounded-full bg-gradient-to-br opacity-90", item.color)
          }) : null, /*#__PURE__*/_jsx("span", {
            className: cn("relative text-lg", item.color ? "text-white" : darkMode ? "text-white" : "text-gray-900"),
            children: item.icon
          }), /*#__PURE__*/_jsx("span", {
            className: cn("absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-widest uppercase whitespace-nowrap px-2 py-1 rounded-md shadow-lg z-50 border", darkMode ? "bg-white text-black border-gray-200" : "bg-black text-white border-gray-800", "opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"),
            children: item.label
          })]
        }, item.id);
      })
    }), /*#__PURE__*/_jsx(AnimatePresence, {
      children: open && /*#__PURE__*/_jsx(motion.div, {
        initial: {
          scale: 0,
          opacity: 0
        },
        animate: {
          scale: 1,
          opacity: 1
        },
        exit: {
          scale: 0,
          opacity: 0
        },
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 260
        },
        className: cn("absolute rounded-full border pointer-events-none z-0", darkMode ? "border-gray-800" : "border-gray-200"),
        style: {
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
          width: responsiveRadius * 2,
          height: responsiveRadius * 2
        }
      })
    })]
  });
}