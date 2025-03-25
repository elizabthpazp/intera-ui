"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function BorderImage(_ref) {
  var image = _ref.image,
    darkMode = _ref.darkMode;
  return /*#__PURE__*/_jsx("div", {
    className: "flex",
    style: {
      marginBottom: '-5px'
    },
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
          src: image !== null && image !== void 0 ? image : "https://vcbomutuhqqrhxmoxtbx.supabase.co/storage/v1/object/public/images//image.webp",
          alt: "Animated Image",
          width: 256,
          height: 256,
          className: "object-cover"
        })
      })]
    })
  });
}