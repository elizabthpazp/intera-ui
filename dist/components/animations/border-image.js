"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function BorderImage() {
  return /*#__PURE__*/_jsx("div", {
    className: "flex",
    style: {
      marginBottom: '-5px'
    },
    children: /*#__PURE__*/_jsxs(motion.div, {
      className: "relative p-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      },
      children: [/*#__PURE__*/_jsx(motion.div, {
        className: "absolute inset-0 rounded-full blur-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-75",
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }), /*#__PURE__*/_jsx("div", {
        className: "relative rounded-full overflow-hidden h-28 w-28 border-2 border-purple-400",
        children: /*#__PURE__*/_jsx(Image, {
          src: "/img/image.jpg",
          alt: "Animated Image",
          width: 256,
          height: 256,
          className: "object-cover"
        })
      })]
    })
  });
}