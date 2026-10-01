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
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * PulseGrid — rejilla de puntos reactiva con toque Intera.
 * Género "interactive grid background": los nodos se iluminan cerca
 * del cursor y el click genera una onda expansiva. Lógica propia.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function PulseGrid(_ref) {
  var _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 8 : _ref$rows,
    _ref$cols = _ref.cols,
    cols = _ref$cols === void 0 ? 12 : _ref$cols,
    children = _ref.children,
    _ref$hint = _ref.hint,
    hint = _ref$hint === void 0 ? "hover to light — click for ripple" : _ref$hint,
    _ref$minHeight = _ref.minHeight,
    minHeight = _ref$minHeight === void 0 ? 320 : _ref$minHeight,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var ref = useRef(null);
  var _useState = useState({
      x: -9999,
      y: -9999
    }),
    _useState2 = _slicedToArray(_useState, 2),
    mouse = _useState2[0],
    setMouse = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    ripples = _useState4[0],
    setRipples = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    tick = _useState6[0],
    setTick = _useState6[1];

  // Recalcula posiciones de los dots al redimensionar (responsive real)
  React.useEffect(function () {
    var onResize = function onResize() {
      return setTick(function (v) {
        return v + 1;
      });
    };
    window.addEventListener("resize", onResize);
    return function () {
      return window.removeEventListener("resize", onResize);
    };
  }, []);
  var setFromPoint = function setFromPoint(clientX, clientY) {
    var _ref$current;
    var r = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.getBoundingClientRect();
    if (!r) return;
    setMouse({
      x: clientX - r.left,
      y: clientY - r.top
    });
  };
  var onClick = function onClick(e) {
    var _ref$current2;
    var r = (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.getBoundingClientRect();
    if (!r) return;
    var id = Date.now() + Math.random();
    var pt = {
      id: id,
      x: e.clientX - r.left,
      y: e.clientY - r.top
    };
    setRipples(function (p) {
      return [].concat(_toConsumableArray(p), [pt]);
    });
    setTimeout(function () {
      return setRipples(function (p) {
        return p.filter(function (x) {
          return x.id !== id;
        });
      });
    }, 900);
  };
  var cells = [];
  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      cells.push({
        row: row,
        col: col,
        key: "".concat(row, "-").concat(col)
      });
    }
  }
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    onPointerMove: function onPointerMove(e) {
      if (e.pointerType !== "touch") setFromPoint(e.clientX, e.clientY);
    },
    onTouchMove: function onTouchMove(e) {
      var t = e.touches[0];
      if (t) setFromPoint(t.clientX, t.clientY);
    },
    onMouseLeave: function onMouseLeave() {
      return setMouse({
        x: -9999,
        y: -9999
      });
    },
    onClick: onClick,
    style: _objectSpread({
      minHeight: minHeight
    }, style),
    className: cn("relative overflow-hidden rounded-[2.5rem] border cursor-pointer select-none w-full min-w-0 max-w-full touch-pan-y", darkMode ? "bg-black border-white/10" : "bg-white border-black/10", className),
    children: [/*#__PURE__*/_jsx("div", {
      className: "absolute inset-0 grid place-items-center",
      style: {
        gridTemplateRows: "repeat(".concat(rows, ", 1fr)"),
        gridTemplateColumns: "repeat(".concat(cols, ", 1fr)"),
        padding: 28,
        gap: 0
      },
      children: cells.map(function (c) {
        return /*#__PURE__*/_jsx(Dot, {
          row: c.row,
          col: c.col,
          rows: rows,
          cols: cols,
          mouse: mouse,
          darkMode: darkMode,
          containerRef: ref,
          tick: tick
        }, c.key);
      })
    }), ripples.map(function (rp) {
      return /*#__PURE__*/_jsx(motion.span, {
        initial: {
          scale: 0,
          opacity: 0.7
        },
        animate: {
          scale: 1,
          opacity: 0
        },
        transition: {
          duration: 0.85,
          ease: "easeOut"
        },
        className: cn("absolute rounded-full border-2 pointer-events-none", darkMode ? "border-cyan-300/70" : "border-violet-500/60"),
        style: {
          left: rp.x - 90,
          top: rp.y - 90,
          width: 180,
          height: 180
        }
      }, rp.id);
    }), children && /*#__PURE__*/_jsx("div", {
      className: "relative z-10",
      children: children
    }), hint && /*#__PURE__*/_jsx("div", {
      className: cn("absolute bottom-4 left-0 right-0 text-center text-[10px] font-bold uppercase tracking-[0.3em] pointer-events-none px-4", darkMode ? "text-white/30" : "text-black/30"),
      children: hint
    })]
  });
}
function Dot(_ref2) {
  var row = _ref2.row,
    col = _ref2.col,
    rows = _ref2.rows,
    cols = _ref2.cols,
    mouse = _ref2.mouse,
    darkMode = _ref2.darkMode,
    containerRef = _ref2.containerRef,
    tick = _ref2.tick;
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    pos = _React$useState2[0],
    setPos = _React$useState2[1];
  React.useEffect(function () {
    var el = containerRef.current;
    if (!el) return;
    var r = el.getBoundingClientRect();
    if (!r.width) return;
    var cw = (r.width - 56) / cols;
    var ch = Math.max(r.height - 56, 200) / rows;
    setPos({
      x: 28 + col * cw + cw / 2,
      y: 28 + row * ch + ch / 2
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [row, col, rows, cols, tick]);
  if (!pos) return /*#__PURE__*/_jsx("span", {
    className: "w-1 h-1 rounded-full opacity-20 bg-current"
  });
  var dx = mouse.x - pos.x;
  var dy = mouse.y - pos.y;
  var dist = Math.sqrt(dx * dx + dy * dy);
  var R = 130;
  var t = Math.max(0, 1 - dist / R);
  var eased = t * t * (3 - 2 * t);
  var size = 3 + eased * 7;
  var color = eased > 0.02 ? darkMode ? "rgba(103,232,249,".concat(0.15 + eased * 0.85, ")") : "rgba(124,58,237,".concat(0.15 + eased * 0.85, ")") : darkMode ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.14)";
  return /*#__PURE__*/_jsx("span", {
    className: "rounded-full transition-[width,height] duration-75 place-self-center",
    style: {
      width: size,
      height: size,
      background: color,
      boxShadow: eased > 0.4 ? "0 0 ".concat(12 * eased, "px ").concat(color) : "none"
    }
  });
}