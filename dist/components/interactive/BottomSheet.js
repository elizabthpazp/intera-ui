"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {boolean} [props.open=false]
 * @param {function} [props.onOpenChange=()=>{}]
 * @param {ReactNode} [props.children]
 * @param {string} [props.title=""]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {Array<number>} [props.snapPoints=[0.85]] - Alturas relativas (0-1) - se usa el primero como altura
 */
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export default function BottomSheet(_ref) {
  var _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    _ref$onOpenChange = _ref.onOpenChange,
    onOpenChange = _ref$onOpenChange === void 0 ? function () {} : _ref$onOpenChange,
    children = _ref.children,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "" : _ref$title,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style,
    _ref$snapPoints = _ref.snapPoints,
    snapPoints = _ref$snapPoints === void 0 ? [0.85] : _ref$snapPoints;
  // FIX: ya no bloqueamos con overflow:hidden que causa que el layout salte y el botón Open Sheet suba/baje al aparecer la scrollbar
  // Usamos overscroll-behavior y dejamos el scroll del body intacto para que el botón quede quieto
  useEffect(function () {
    if (open) {
      // No tocar document.body.style.overflow para evitar layout shift
      document.body.style.overscrollBehavior = "contain";
      return function () {
        document.body.style.overscrollBehavior = "";
      };
    }
  }, [open]);
  var heightVh = Math.min(Math.max((snapPoints[0] || 0.85) * 100, 30), 92);
  var handleDragEnd = function handleDragEnd(_, info) {
    var shouldClose = info.velocity.y > 400 || info.offset.y > 100;
    if (shouldClose) onOpenChange(false);
  };
  return /*#__PURE__*/_jsx(AnimatePresence, {
    children: open && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx(motion.div, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          duration: 0.2
        },
        className: "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm",
        onClick: function onClick() {
          return onOpenChange(false);
        },
        "aria-hidden": "true"
      }), /*#__PURE__*/_jsxs(motion.div, {
        drag: "y",
        dragConstraints: {
          top: 0,
          bottom: 0
        },
        dragElastic: 0.45,
        dragMomentum: false,
        onDragEnd: handleDragEnd,
        initial: {
          y: "100%"
        },
        animate: {
          y: 0
        },
        exit: {
          y: "100%"
        },
        transition: {
          type: "spring",
          damping: 30,
          stiffness: 300
        },
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        className: cn("fixed bottom-0 left-0 right-0 z-50 rounded-t-[2rem] border-t shadow-2xl flex flex-col overflow-hidden will-change-transform", darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200", className),
        style: _objectSpread({
          height: "".concat(heightVh, "vh"),
          maxHeight: "92vh"
        }, style),
        children: [/*#__PURE__*/_jsx("div", {
          onClick: function onClick() {
            return onOpenChange(false);
          },
          className: "flex justify-center pt-3 pb-2 shrink-0 cursor-pointer touch-manipulation",
          role: "button",
          "aria-label": "Close sheet",
          children: /*#__PURE__*/_jsx("div", {
            className: cn("w-12 h-1.5 rounded-full", darkMode ? "bg-gray-700" : "bg-gray-300")
          })
        }), title && /*#__PURE__*/_jsxs("div", {
          className: cn("px-6 pb-4 flex items-center justify-between border-b shrink-0", darkMode ? "border-gray-800" : "border-gray-100"),
          children: [/*#__PURE__*/_jsx("h3", {
            className: cn("text-lg font-black tracking-tight", darkMode ? "text-white" : "text-gray-900"),
            children: title
          }), /*#__PURE__*/_jsx("button", {
            onClick: function onClick() {
              return onOpenChange(false);
            },
            "aria-label": "Close",
            className: cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", darkMode ? "bg-gray-800 hover:bg-gray-700 text-gray-400" : "bg-gray-100 hover:bg-gray-200 text-gray-500"),
            children: "\u2715"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "flex-1 overflow-y-auto overscroll-contain p-6 touch-auto",
          children: children
        }), /*#__PURE__*/_jsx("div", {
          className: cn("p-3 border-t text-[10px] text-center tracking-widest uppercase opacity-40 shrink-0", darkMode ? "border-gray-800 text-gray-500" : "border-gray-100 text-gray-400"),
          children: "Arrastra hacia abajo para cerrar"
        })]
      }, "sheet")]
    })
  });
}

// Helper trigger for docs (no cambia)
export function BottomSheetTrigger(_ref2) {
  var onClick = _ref2.onClick,
    darkMode = _ref2.darkMode,
    className = _ref2.className,
    children = _ref2.children;
  return /*#__PURE__*/_jsx("button", {
    onClick: onClick,
    className: cn("px-6 py-3 rounded-xl font-bold shadow-lg transition-colors", darkMode ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800", className),
    children: children || "Open Sheet"
  });
}