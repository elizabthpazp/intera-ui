"use client";

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
  return /*#__PURE__*/_jsx(motion.div, {
    onMouseMove: function onMouseMove(e) {
      return mouseX.set(e.pageX);
    },
    onMouseLeave: function onMouseLeave() {
      return mouseX.set(Infinity);
    },
    style: style,
    className: cn("flex h-16 items-end gap-4 rounded-2xl px-4 pb-3 border", darkMode ? "bg-gray-900/80 border-gray-800 backdrop-blur-md" : "bg-white/80 border-gray-200 backdrop-blur-md shadow-lg", className),
    children: items.map(function (item, i) {
      return /*#__PURE__*/_jsx(IconContainer, {
        mouseX: mouseX,
        distance: distance,
        magnification: magnification,
        baseSize: baseSize,
        item: item,
        darkMode: darkMode
      }, i);
    })
  });
}
function IconContainer(_ref2) {
  var mouseX = _ref2.mouseX,
    distance = _ref2.distance,
    magnification = _ref2.magnification,
    baseSize = _ref2.baseSize,
    item = _ref2.item,
    darkMode = _ref2.darkMode;
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
      width: width
    },
    onClick: item.onClick,
    className: cn("group relative aspect-square rounded-full flex items-center justify-center cursor-pointer transition-colors", darkMode ? "bg-gray-800 hover:bg-gray-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"),
    children: [/*#__PURE__*/_jsx("div", {
      className: "flex items-center justify-center w-full h-full p-2",
      children: item.icon
    }), /*#__PURE__*/_jsx("div", {
      className: cn("absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap", darkMode ? "bg-white text-black" : "bg-black text-white"),
      children: item.label
    })]
  });
}