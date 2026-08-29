"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {string} [props.placeholder="Search..."]
 * @param {function} [props.onSearch=() => {}]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function MorphingSearch(_ref) {
  var _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Search anything..." : _ref$placeholder,
    _ref$onSearch = _ref.onSearch,
    onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var inputRef = useRef(null);
  var toggleExpand = function toggleExpand() {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(function () {
        var _inputRef$current;
        return (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
      }, 200);
    }
  };
  return /*#__PURE__*/_jsx("div", {
    className: cn("flex items-center justify-center", className),
    style: style,
    children: /*#__PURE__*/_jsxs(motion.div, {
      layout: true,
      initial: false,
      animate: {
        width: isExpanded ? "min(300px, 90vw)" : 48,
        borderRadius: isExpanded ? 12 : 24
      },
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      },
      className: cn("relative h-12 overflow-hidden flex items-center border shadow-sm max-w-[90vw]", darkMode ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-800"),
      onClick: function onClick() {
        return !isExpanded && toggleExpand();
      },
      children: [/*#__PURE__*/_jsx("div", {
        className: "absolute left-3 flex items-center justify-center w-6 h-6",
        children: /*#__PURE__*/_jsx(Search, {
          size: 20,
          className: darkMode ? "text-gray-400" : "text-gray-500"
        })
      }), /*#__PURE__*/_jsx(AnimatePresence, {
        children: isExpanded && /*#__PURE__*/_jsx(motion.input, {
          ref: inputRef,
          initial: {
            opacity: 0,
            x: -10
          },
          animate: {
            opacity: 1,
            x: 0
          },
          exit: {
            opacity: 0,
            x: -10
          },
          type: "text",
          value: value,
          onChange: function onChange(e) {
            setValue(e.target.value);
            onSearch(e.target.value);
          },
          placeholder: placeholder,
          className: "w-full h-full pl-11 pr-10 bg-transparent outline-none text-sm font-medium"
        })
      }), isExpanded && /*#__PURE__*/_jsx(motion.button, {
        initial: {
          scale: 0
        },
        animate: {
          scale: 1
        },
        onClick: toggleExpand,
        className: cn("absolute right-3 p-1 rounded-full transition-colors", darkMode ? "hover:bg-gray-800 text-gray-400" : "hover:bg-gray-100 text-gray-500"),
        children: /*#__PURE__*/_jsx(X, {
          size: 16
        })
      })]
    })
  });
}