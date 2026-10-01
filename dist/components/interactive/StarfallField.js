"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var __id = 0;
var nid = function nid() {
  return "st-".concat(Date.now(), "-").concat((__id++).toString(36));
};

/**
 * StarfallField — lluvia de meteoros interactiva con toque Intera.
 * Idea de género "meteor background" pero con física propia:
 * los meteoros caen en diagonal y al hacer click nace un burst.
 * 100% código original, sin copiar de terceros.
 */
export default function StarfallField(_ref) {
  var children = _ref.children,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$density = _ref.density,
    density = _ref$density === void 0 ? 14 : _ref$density,
    _ref$speed = _ref.speed,
    speed = _ref$speed === void 0 ? 1 : _ref$speed,
    _ref$burstOnClick = _ref.burstOnClick,
    burstOnClick = _ref$burstOnClick === void 0 ? true : _ref$burstOnClick,
    _ref$hint = _ref.hint,
    hint = _ref$hint === void 0 ? "click anywhere — meteor burst ✦" : _ref$hint,
    _ref$minHeight = _ref.minHeight,
    minHeight = _ref$minHeight === void 0 ? 320 : _ref$minHeight,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var ref = useRef(null);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    rocks = _useState2[0],
    setRocks = _useState2[1];
  var spawn = useCallback(function (xPct, yPct) {
    var big = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var rock = {
      id: nid(),
      left: xPct !== null && xPct !== void 0 ? xPct : Math.random() * 100,
      top: yPct !== null && yPct !== void 0 ? yPct : Math.random() * -10,
      len: big ? 140 + Math.random() * 80 : 60 + Math.random() * 90,
      delay: Math.random() * 1.2,
      dur: (2.2 + Math.random() * 2.4) / speed,
      hue: Math.random() > 0.82 ? "pink" : Math.random() > 0.5 ? "violet" : "cyan",
      big: big
    };
    setRocks(function (p) {
      return [].concat(_toConsumableArray(p.slice(-40)), [rock]);
    });
    setTimeout(function () {
      return setRocks(function (p) {
        return p.filter(function (r) {
          return r.id !== rock.id;
        });
      });
    }, (rock.dur + rock.delay) * 1000 + 100);
  }, [speed]);
  useEffect(function () {
    setRocks([]);
    var t = setInterval(function () {
      if (document.hidden) return;
      spawn();
      if (density > 18 && Math.random() > 0.6) spawn();
    }, Math.max(220, 1400 - density * 70));
    return function () {
      return clearInterval(t);
    };
  }, [density, spawn]);
  var onClick = function onClick(e) {
    var _ref$current;
    if (!burstOnClick) return;
    // No robar clicks de botones/links/inputs del contenido
    if (e.target.closest("button, a, input, select, textarea, [data-no-burst]")) return;
    var r = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.getBoundingClientRect();
    if (!r) return;
    var x = (e.clientX - r.left) / r.width * 100;
    var y = (e.clientY - r.top) / r.height * 100;
    for (var i = 0; i < 5; i++) spawn(x + (Math.random() - 0.5) * 12, y + (Math.random() - 0.5) * 6, true);
  };
  var hueColor = function hueColor(h) {
    return h === "pink" ? "255,120,190" : h === "violet" ? "167,139,250" : "103,232,249";
  };
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    onClick: onClick,
    style: _objectSpread({
      minHeight: minHeight
    }, style),
    className: cn("relative overflow-hidden rounded-[2.5rem] border cursor-crosshair select-none w-full min-w-0 max-w-full", darkMode ? "bg-[#05050a] border-white/10" : "bg-[#eef0ff] border-black/10", className),
    children: [/*#__PURE__*/_jsx("style", {
      children: "\n        @keyframes ia-starfall { 0% { transform: translate3d(0,0,0); opacity: 0; } 8% { opacity: 1; } 100% { transform: translate(-160px, 340px); opacity: 0; } }\n        @keyframes ia-twinkle { 0%,100% { opacity: .25; } 50% { opacity: 1; } }\n      "
    }), Array.from({
      length: 60
    }).map(function (_, i) {
      return /*#__PURE__*/_jsx("span", {
        className: cn("absolute rounded-full pointer-events-none", darkMode ? "bg-white" : "bg-violet-900"),
        style: {
          left: "".concat(i * 37.7 % 100, "%"),
          top: "".concat(i * 53.3 % 100, "%"),
          width: i % 7 === 0 ? 2.5 : 1.2,
          height: i % 7 === 0 ? 2.5 : 1.2,
          opacity: 0.5,
          animation: "ia-twinkle ".concat(2 + i % 5, "s ease-in-out ").concat(i * 0.13, "s infinite")
        }
      }, i);
    }), rocks.map(function (r) {
      return /*#__PURE__*/_jsxs("div", {
        className: "absolute pointer-events-none",
        style: {
          left: "".concat(r.left, "%"),
          top: "".concat(r.top, "%"),
          animation: "ia-starfall ".concat(r.dur, "s linear ").concat(r.delay, "s forwards")
        },
        children: [/*#__PURE__*/_jsx("div", {
          style: {
            width: "min(".concat(r.len, "px, 38vw)"),
            height: r.big ? 2.4 : 1.6,
            borderRadius: 999,
            transform: "rotate(-35deg)",
            transformOrigin: "right center",
            background: "linear-gradient(to left, rgba(".concat(hueColor(r.hue), ",1) 0%, rgba(").concat(hueColor(r.hue), ",0.7) 25%, transparent 100%)"),
            boxShadow: "0 0 ".concat(r.big ? 18 : 10, "px rgba(").concat(hueColor(r.hue), ",0.9), 2px 0 6px #fff")
          }
        }), /*#__PURE__*/_jsx("div", {
          className: "absolute rounded-full bg-white",
          style: {
            right: -2,
            top: -2.4,
            width: r.big ? 7 : 5,
            height: r.big ? 7 : 5,
            boxShadow: "0 0 12px #fff"
          }
        })]
      }, r.id);
    }), /*#__PURE__*/_jsx("div", {
      className: "relative z-10",
      children: children
    }), hint && /*#__PURE__*/_jsx("div", {
      className: cn("absolute bottom-4 left-0 right-0 text-center text-[10px] font-bold uppercase tracking-[0.3em] pointer-events-none px-4", darkMode ? "text-white/35" : "text-violet-950/40"),
      children: hint
    })]
  });
}