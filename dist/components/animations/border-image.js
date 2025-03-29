"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function BorderImage(_ref) {
  var _ref$image = _ref.image,
    image = _ref$image === void 0 ? null : _ref$image,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode;
  return /*#__PURE__*/_jsx("div", {
    className: "flex",
    children: /*#__PURE__*/_jsxs(motion.div, {
      className: "".concat(!darkMode ? 'from-gray-800 via-gray-500 to-zinc-600' : 'from-gray-300 via-gray-600 to-zinc-500', " relative p-1 rounded-full bg-gradient-to-r"),
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      },
      children: [/*#__PURE__*/_jsx(motion.div, {
        className: "".concat(!darkMode ? 'from-gray-800 via-gray-500 to-zinc-600' : 'from-gray-300 via-gray-600 to-zinc-500', " absolute inset-0 rounded-full blur-md bg-gradient-to-r opacity-75"),
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }), /*#__PURE__*/_jsx("div", {
        className: "".concat(!darkMode ? 'border-gray-600' : 'border-gray-400', " relative rounded-full overflow-hidden h-28 w-28 border-2"),
        children: /*#__PURE__*/_jsx(Image, {
          style: {
            marginTop: '0px'
          },
          src: image !== null && image !== void 0 ? image : "",
          alt: "Animated Image",
          width: 256,
          height: 256,
          className: "object-cover"
        })
      })]
    })
  });
}