"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {number} [props.value=60] - 0-100
 * @param {number} [props.size=160] - Diámetro
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {boolean} [props.interactive=true] - Si true puedes arrastrar/click para cambiar valor
 * @param {function} [props.onChange=()=>{}]
 * @param {string} [props.label="Progress"]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function LiquidProgress(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? 60 : _ref$value,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 160 : _ref$size,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style,
    _ref$interactive = _ref.interactive,
    interactive = _ref$interactive === void 0 ? true : _ref$interactive,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Progress" : _ref$label;
  var _React$useState = React.useState(value),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    internal = _React$useState2[0],
    setInternal = _React$useState2[1];
  var ref = React.useRef(null);
  var isDragging = React.useRef(false);
  React.useEffect(function () {
    return setInternal(value);
  }, [value]);
  var pct = Math.min(Math.max(internal, 0), 100);
  var updateFromClientY = function updateFromClientY(clientY) {
    if (!ref.current || !interactive) return;
    var rect = ref.current.getBoundingClientRect();
    var y = clientY - rect.top;
    var newPct = Math.round(100 - y / rect.height * 100);
    var clamped = Math.min(Math.max(newPct, 0), 100);
    setInternal(clamped);
    onChange(clamped);
  };
  var handlePointerDown = function handlePointerDown(e) {
    var _e$clientY, _e$touches, _e$currentTarget$setP, _e$currentTarget;
    if (!interactive) return;
    e.preventDefault();
    e.stopPropagation();
    isDragging.current = true;
    updateFromClientY((_e$clientY = e.clientY) !== null && _e$clientY !== void 0 ? _e$clientY : (_e$touches = e.touches) === null || _e$touches === void 0 || (_e$touches = _e$touches[0]) === null || _e$touches === void 0 ? void 0 : _e$touches.clientY);
    (_e$currentTarget$setP = (_e$currentTarget = e.currentTarget).setPointerCapture) === null || _e$currentTarget$setP === void 0 || _e$currentTarget$setP.call(_e$currentTarget, e.pointerId);
  };
  var handlePointerMove = function handlePointerMove(e) {
    var _e$clientY2, _e$touches2;
    if (!isDragging.current || !interactive) return;
    e.preventDefault();
    updateFromClientY((_e$clientY2 = e.clientY) !== null && _e$clientY2 !== void 0 ? _e$clientY2 : (_e$touches2 = e.touches) === null || _e$touches2 === void 0 || (_e$touches2 = _e$touches2[0]) === null || _e$touches2 === void 0 ? void 0 : _e$touches2.clientY);
  };
  var handlePointerUp = function handlePointerUp(e) {
    var _e$currentTarget$rele, _e$currentTarget2;
    isDragging.current = false;
    (_e$currentTarget$rele = (_e$currentTarget2 = e.currentTarget).releasePointerCapture) === null || _e$currentTarget$rele === void 0 || _e$currentTarget$rele.call(_e$currentTarget2, e.pointerId);
  };
  return /*#__PURE__*/_jsxs("div", {
    className: cn("flex flex-col items-center gap-4 overscroll-contain", className),
    style: style,
    children: [/*#__PURE__*/_jsxs("div", {
      ref: ref,
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerLeave: handlePointerUp,
      onTouchMove: function onTouchMove(e) {
        return e.preventDefault();
      },
      className: cn("relative rounded-full overflow-hidden border-4 flex items-center justify-center select-none touch-none overscroll-contain", darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-gray-50 shadow-inner", interactive && "cursor-pointer active:cursor-grabbing"),
      style: {
        width: "min(".concat(size, "px, 70vw)"),
        height: "min(".concat(size, "px, 70vw)"),
        touchAction: "none",
        maxWidth: "100%"
      },
      role: "slider",
      "aria-valuenow": pct,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      tabIndex: interactive ? 0 : -1,
      onKeyDown: function onKeyDown(e) {
        if (!interactive) return;
        if (e.key === "ArrowUp") {
          var v = Math.min(pct + 5, 100);
          setInternal(v);
          onChange(v);
        }
        if (e.key === "ArrowDown") {
          var _v = Math.max(pct - 5, 0);
          setInternal(_v);
          onChange(_v);
        }
      },
      children: [/*#__PURE__*/_jsx(motion.div, {
        className: "absolute left-0 right-0 bottom-0 pointer-events-none",
        animate: {
          height: "".concat(pct, "%")
        },
        transition: {
          type: "spring",
          damping: 22,
          stiffness: 140
        },
        style: {
          background: darkMode ? "linear-gradient(to top, #2563eb, #06b6d4)" : "linear-gradient(to top, #0ea5e9, #38bdf8)"
        },
        children: /*#__PURE__*/_jsx("div", {
          className: "absolute top-0 left-0 right-0 h-[1px] opacity-70 pointer-events-none",
          style: {
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent)"
          }
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: "relative z-10 flex flex-col items-center pointer-events-none",
        children: [/*#__PURE__*/_jsxs("span", {
          className: cn("text-2xl sm:text-3xl font-black tracking-tighter tabular-nums", pct > 50 ? "text-white" : darkMode ? "text-white" : "text-gray-900"),
          children: [pct, "%"]
        }), /*#__PURE__*/_jsx("span", {
          className: cn("text-[10px] font-bold tracking-widest uppercase opacity-60", pct > 50 ? "text-white" : darkMode ? "text-gray-400" : "text-gray-500"),
          children: label
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "absolute inset-0 rounded-full pointer-events-none",
        style: {
          background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 50%)"
        }
      })]
    }), interactive && /*#__PURE__*/_jsx("span", {
      className: cn("text-[10px] font-bold tracking-widest uppercase opacity-40", darkMode ? "text-gray-500" : "text-gray-400"),
      children: "Click o arrastra vertical para ajustar"
    })]
  });
}