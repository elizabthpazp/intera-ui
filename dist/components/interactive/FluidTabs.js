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
 * @param {Array} [props.tabs=[]] - Array of { id: string, label: string }
 * @param {string} [props.activeTab=""]
 * @param {function} [props.onChange=() => {}]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function FluidTabs(_ref) {
  var _tabs$;
  var _ref$tabs = _ref.tabs,
    tabs = _ref$tabs === void 0 ? [] : _ref$tabs,
    _ref$activeTab = _ref.activeTab,
    activeTab = _ref$activeTab === void 0 ? "" : _ref$activeTab,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(activeTab || ((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.id) || ""),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    hoveredTab = _useState4[0],
    setHoveredTab = _useState4[1];
  var handleTabClick = function handleTabClick(id) {
    setActive(id);
    onChange(id);
  };
  return /*#__PURE__*/_jsx("div", {
    className: cn("flex items-center gap-1 p-1.5 rounded-2xl border", darkMode ? "bg-gray-900/50 border-gray-800" : "bg-gray-100/50 border-gray-200 shadow-sm", className),
    style: style,
    children: tabs.map(function (tab) {
      return /*#__PURE__*/_jsxs("button", {
        onClick: function onClick() {
          return handleTabClick(tab.id);
        },
        onMouseEnter: function onMouseEnter() {
          return setHoveredTab(tab.id);
        },
        onMouseLeave: function onMouseLeave() {
          return setHoveredTab(null);
        },
        className: cn("relative px-6 py-2.5 text-sm font-black uppercase tracking-wider transition-colors duration-300 z-10", active === tab.id ? darkMode ? "text-black" : "text-white" : darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-900"),
        children: [tab.label, active === tab.id && /*#__PURE__*/_jsx(motion.div, {
          layoutId: "fluid-indicator",
          className: cn("absolute inset-0 -z-10 rounded-xl", darkMode ? "bg-white" : "bg-black"),
          transition: {
            type: "spring",
            bounce: 0.25,
            stiffness: 130,
            damping: 18
          }
        }), hoveredTab === tab.id && active !== tab.id && /*#__PURE__*/_jsx(motion.div, {
          layoutId: "hover-indicator",
          className: cn("absolute inset-0 -z-10 rounded-xl", darkMode ? "bg-white/5" : "bg-black/5"),
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3
          }
        })]
      }, tab.id);
    })
  });
}