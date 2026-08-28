"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array of { id: string, title: string, content: string }
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function InteractiveAccordion(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    expandedId = _useState2[0],
    setExpandedId = _useState2[1];
  var toggleItem = function toggleItem(id) {
    setExpandedId(expandedId === id ? null : id);
  };
  return /*#__PURE__*/_jsx("div", {
    className: cn("flex flex-col gap-3 w-full max-w-md", className),
    style: style,
    children: items.map(function (item) {
      return /*#__PURE__*/_jsxs("div", {
        className: cn("overflow-hidden rounded-2xl border transition-all duration-300", expandedId === item.id ? darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-black shadow-lg" : darkMode ? "bg-gray-900 border-gray-800 hover:border-gray-700" : "bg-gray-50 border-gray-200 hover:border-gray-300"),
        children: [/*#__PURE__*/_jsxs("button", {
          onClick: function onClick() {
            return toggleItem(item.id);
          },
          className: "w-full px-6 py-5 flex items-center justify-between text-left group",
          children: [/*#__PURE__*/_jsx("span", {
            className: cn("font-black uppercase tracking-widest text-sm transition-colors", expandedId === item.id ? darkMode ? "text-white" : "text-black" : darkMode ? "text-gray-400 group-hover:text-gray-200" : "text-gray-500 group-hover:text-gray-900"),
            children: item.title
          }), /*#__PURE__*/_jsx(motion.div, {
            animate: {
              rotate: expandedId === item.id ? 180 : 0
            },
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20
            },
            className: expandedId === item.id ? darkMode ? "text-white" : "text-black" : "text-gray-500",
            children: /*#__PURE__*/_jsx(ChevronDown, {
              size: 18
            })
          })]
        }), /*#__PURE__*/_jsx(AnimatePresence, {
          initial: false,
          children: expandedId === item.id && /*#__PURE__*/_jsx(motion.div, {
            initial: {
              height: 0,
              opacity: 0
            },
            animate: {
              height: "auto",
              opacity: 1
            },
            exit: {
              height: 0,
              opacity: 0
            },
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30
            },
            children: /*#__PURE__*/_jsx("div", {
              className: cn("px-6 pb-6 text-sm leading-relaxed", darkMode ? "text-gray-400" : "text-gray-600"),
              children: /*#__PURE__*/_jsx(motion.div, {
                initial: {
                  y: 10
                },
                animate: {
                  y: 0
                },
                transition: {
                  delay: 0.1
                },
                children: item.content
              })
            })
          })
        })]
      }, item.id);
    })
  });
}