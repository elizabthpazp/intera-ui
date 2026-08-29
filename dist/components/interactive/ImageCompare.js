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
import React, { useState, useRef } from "react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {string} [props.before] - URL imagen before
 * @param {string} [props.after] - URL imagen after
 * @param {string} [props.beforeLabel="Before"]
 * @param {string} [props.afterLabel="After"]
 * @param {number} [props.defaultPosition=50] - 0-100
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ImageCompare(_ref) {
  var _ref$before = _ref.before,
    before = _ref$before === void 0 ? "https://picsum.photos/seed/before/800/500" : _ref$before,
    _ref$after = _ref.after,
    after = _ref$after === void 0 ? "https://picsum.photos/seed/after/800/500" : _ref$after,
    _ref$beforeLabel = _ref.beforeLabel,
    beforeLabel = _ref$beforeLabel === void 0 ? "Before" : _ref$beforeLabel,
    _ref$afterLabel = _ref.afterLabel,
    afterLabel = _ref$afterLabel === void 0 ? "After" : _ref$afterLabel,
    _ref$defaultPosition = _ref.defaultPosition,
    defaultPosition = _ref$defaultPosition === void 0 ? 50 : _ref$defaultPosition,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(defaultPosition),
    _useState2 = _slicedToArray(_useState, 2),
    position = _useState2[0],
    setPosition = _useState2[1];
  var ref = useRef(null);
  var isDragging = useRef(false);
  var updatePosition = function updatePosition(clientX) {
    if (!ref.current) return;
    var rect = ref.current.getBoundingClientRect();
    var pct = Math.min(Math.max((clientX - rect.left) / rect.width * 100, 0), 100);
    setPosition(pct);
  };
  var handlePointerMove = function handlePointerMove(e) {
    if (!isDragging.current) return;
    var clientX = e.touches ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  };
  var handlePointerDown = function handlePointerDown(e) {
    var _e$currentTarget$setP, _e$currentTarget;
    isDragging.current = true;
    var clientX = e.touches ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
    // Capturar pointer para que el drag no se pierda
    (_e$currentTarget$setP = (_e$currentTarget = e.currentTarget).setPointerCapture) === null || _e$currentTarget$setP === void 0 || _e$currentTarget$setP.call(_e$currentTarget, e.pointerId);
  };
  var handlePointerUp = function handlePointerUp(e) {
    var _e$currentTarget$rele, _e$currentTarget2;
    isDragging.current = false;
    (_e$currentTarget$rele = (_e$currentTarget2 = e.currentTarget).releasePointerCapture) === null || _e$currentTarget$rele === void 0 || _e$currentTarget$rele.call(_e$currentTarget2, e.pointerId);
  };
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
    onPointerLeave: handlePointerUp,
    className: cn("relative overflow-hidden rounded-2xl select-none group border touch-none", darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-gray-100", className),
    style: _objectSpread({
      aspectRatio: "16/10"
    }, style),
    children: [/*#__PURE__*/_jsx("img", {
      src: after,
      alt: afterLabel,
      className: "absolute inset-0 w-full h-full object-cover pointer-events-none",
      draggable: false
    }), /*#__PURE__*/_jsx("span", {
      className: cn("absolute top-3 right-3 text-[10px] font-black tracking-widest px-2 py-1 rounded-full pointer-events-none", darkMode ? "bg-white text-black" : "bg-black text-white"),
      children: afterLabel
    }), /*#__PURE__*/_jsxs("div", {
      className: "absolute inset-0 overflow-hidden pointer-events-none",
      style: {
        clipPath: "inset(0 ".concat(100 - position, "% 0 0)")
      },
      children: [/*#__PURE__*/_jsx("img", {
        src: before,
        alt: beforeLabel,
        className: "absolute inset-0 w-full h-full object-cover",
        draggable: false
      }), /*#__PURE__*/_jsx("span", {
        className: cn("absolute top-3 left-3 text-[10px] font-black tracking-widest px-2 py-1 rounded-full", darkMode ? "bg-black text-white" : "bg-white text-black"),
        children: beforeLabel
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none",
      style: {
        left: "".concat(position, "%")
      }
    }), /*#__PURE__*/_jsx("div", {
      onPointerDown: handlePointerDown,
      className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing border border-gray-200 touch-none select-none z-10",
      style: {
        left: "".concat(position, "%")
      },
      role: "slider",
      "aria-valuenow": Math.round(position),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      tabIndex: 0,
      onKeyDown: function onKeyDown(e) {
        if (e.key === "ArrowLeft") setPosition(function (p) {
          return Math.max(p - 5, 0);
        });
        if (e.key === "ArrowRight") setPosition(function (p) {
          return Math.min(p + 5, 100);
        });
      },
      children: /*#__PURE__*/_jsxs("span", {
        className: "flex gap-0.5 pointer-events-none",
        children: [/*#__PURE__*/_jsx("span", {
          className: "w-0.5 h-4 bg-gray-300 rounded-full"
        }), /*#__PURE__*/_jsx("span", {
          className: "w-0.5 h-4 bg-gray-300 rounded-full"
        })]
      })
    }), /*#__PURE__*/_jsx("input", {
      type: "range",
      min: 0,
      max: 100,
      value: position,
      onChange: function onChange(e) {
        return setPosition(Number(e.target.value));
      },
      className: "absolute bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-2 opacity-0 focus:opacity-100 transition-opacity",
      "aria-label": "Compare position"
    })]
  });
}