"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array of { icon: ReactNode, label: string, onClick: func }
 * @param {number} [props.distance=150] - Distance for magnification effect
 * @param {number} [props.magnification=80] - Maximum size of icons
 * @param {number} [props.baseSize=40] - Original size of icons
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function MagneticDock(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$distance = _ref.distance,
    distance = _ref$distance === void 0 ? 150 : _ref$distance,
    _ref$magnification = _ref.magnification,
    magnification = _ref$magnification === void 0 ? 80 : _ref$magnification,
    _ref$baseSize = _ref.baseSize,
    baseSize = _ref$baseSize === void 0 ? 40 : _ref$baseSize,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var mouseX = useMotionValue(Infinity);
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hoveredIdx = _React$useState2[0],
    setHoveredIdx = _React$useState2[1];
  return /*#__PURE__*/_jsx("div", {
    className: "w-full overflow-visible flex justify-center py-4 px-2",
    children: /*#__PURE__*/_jsx(motion.div, {
      onMouseMove: function onMouseMove(e) {
        return mouseX.set(e.pageX);
      },
      onMouseLeave: function onMouseLeave() {
        mouseX.set(Infinity);
        setHoveredIdx(null);
      },
      style: style,
      className: cn("flex h-14 sm:h-16 items-end gap-2 sm:gap-4 rounded-2xl px-2 sm:px-4 pb-2 sm:pb-3 border w-fit overflow-visible mx-auto", darkMode ? "bg-gray-900/80 border-gray-800 backdrop-blur-md" : "bg-white/80 border-gray-200 backdrop-blur-md shadow-lg", className),
      children: items.map(function (item, i) {
        return /*#__PURE__*/_jsx(IconContainer, {
          mouseX: mouseX,
          distance: distance,
          magnification: magnification,
          baseSize: baseSize,
          item: item,
          darkMode: darkMode,
          isHovered: hoveredIdx === i,
          onHoverChange: function onHoverChange(h) {
            return setHoveredIdx(h ? i : null);
          }
        }, i);
      })
    })
  });
}
function IconContainer(_ref2) {
  var mouseX = _ref2.mouseX,
    distance = _ref2.distance,
    magnification = _ref2.magnification,
    baseSize = _ref2.baseSize,
    item = _ref2.item,
    darkMode = _ref2.darkMode,
    isHovered = _ref2.isHovered,
    onHoverChange = _ref2.onHoverChange;
  var ref = useRef(null);
  var distanceCalc = useTransform(mouseX, function (val) {
    var _ref$current$getBound, _ref$current;
    var bounds = (_ref$current$getBound = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.getBoundingClientRect()) !== null && _ref$current$getBound !== void 0 ? _ref$current$getBound : {
      x: 0,
      width: 0
    };
    return val - bounds.x - bounds.width / 2;
  });
  var widthSync = useTransform(distanceCalc, [-distance, 0, distance], [baseSize, magnification, baseSize]);
  var width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  });
  return /*#__PURE__*/_jsxs(motion.div, {
    ref: ref,
    style: {
      width: width,
      zIndex: isHovered ? 20 : 1
    },
    onClick: item.onClick,
    onMouseEnter: function onMouseEnter() {
      return onHoverChange === null || onHoverChange === void 0 ? void 0 : onHoverChange(true);
    },
    onMouseLeave: function onMouseLeave() {
      return onHoverChange === null || onHoverChange === void 0 ? void 0 : onHoverChange(false);
    },
    className: cn("group relative aspect-square rounded-full flex items-center justify-center cursor-pointer transition-colors shrink-0", darkMode ? "bg-gray-800 hover:bg-gray-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"),
    children: [/*#__PURE__*/_jsx("div", {
      className: "flex items-center justify-center w-full h-full p-2",
      children: item.icon
    }), /*#__PURE__*/_jsx("div", {
      className: cn("absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg border", darkMode ? "bg-white text-black border-gray-200" : "bg-black text-white border-gray-800"),
      children: item.label
    })]
  });
}