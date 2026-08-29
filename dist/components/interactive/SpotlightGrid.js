"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from "react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array de { id, title, content, icon? }
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SpotlightGrid(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var fallback = [{
    id: "1",
    title: "Realtime",
    content: "Sync en 12ms con WebSocket"
  }, {
    id: "2",
    title: "Secure",
    content: "E2E encryption by default"
  }, {
    id: "3",
    title: "Fast",
    content: "Edge deployed en 35 regiones"
  }, {
    id: "4",
    title: "Scalable",
    content: "Auto-scale a 1M rps"
  }];
  var data = items.length ? items : fallback;
  return /*#__PURE__*/_jsx("div", {
    className: cn("grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl", darkMode ? "bg-gray-950" : "bg-gray-50", className),
    style: style,
    children: data.map(function (item) {
      return /*#__PURE__*/_jsx(SpotlightCard, {
        item: item,
        darkMode: darkMode
      }, item.id);
    })
  });
}
function SpotlightCard(_ref2) {
  var item = _ref2.item,
    darkMode = _ref2.darkMode;
  var _useState = useState({
      x: 0,
      y: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    mouse = _useState2[0],
    setMouse = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hovered = _useState4[0],
    setHovered = _useState4[1];
  var handleMove = function handleMove(e) {
    var rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  return /*#__PURE__*/_jsxs("div", {
    onMouseMove: handleMove,
    onMouseEnter: function onMouseEnter() {
      return setHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovered(false);
    },
    className: cn("relative rounded-2xl p-6 border overflow-hidden group", darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200 shadow-sm"),
    children: [/*#__PURE__*/_jsx("div", {
      className: "absolute inset-0 pointer-events-none transition-opacity duration-300",
      style: {
        opacity: hovered ? 1 : 0,
        background: "radial-gradient(500px circle at ".concat(mouse.x, "px ").concat(mouse.y, "px, ").concat(darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)", ", transparent 70%)")
      }
    }), /*#__PURE__*/_jsx("div", {
      className: "absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300",
      style: {
        opacity: hovered ? 1 : 0,
        background: "radial-gradient(400px circle at ".concat(mouse.x, "px ").concat(mouse.y, "px, ").concat(darkMode ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.12)", ", transparent 60%)"),
        // Truco para solo mostrar borde
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "1px"
      }
    }), /*#__PURE__*/_jsxs("div", {
      className: "relative",
      children: [/*#__PURE__*/_jsx("div", {
        className: cn("w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black mb-4 shadow-sm", darkMode ? "bg-white text-black" : "bg-black text-white"),
        children: item.icon || item.title[0]
      }), /*#__PURE__*/_jsx("h4", {
        className: cn("text-base font-black tracking-tight", darkMode ? "text-white" : "text-gray-900"),
        children: item.title
      }), /*#__PURE__*/_jsx("p", {
        className: cn("text-sm mt-1.5 leading-relaxed", darkMode ? "text-gray-400" : "text-gray-500"),
        children: item.content
      }), /*#__PURE__*/_jsxs("div", {
        className: cn("mt-4 flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-60 transition-opacity", darkMode ? "text-gray-500" : "text-gray-400"),
        children: ["Hover me ", /*#__PURE__*/_jsx("span", {
          className: "translate-x-0 group-hover:translate-x-1 transition-transform",
          children: "\u2192"
        })]
      })]
    })]
  });
}