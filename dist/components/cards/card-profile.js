import React from "react";
import BorderImage from "../animations/border-image";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ProfileCard = function ProfileCard() {
  return /*#__PURE__*/_jsx("div", {
    className: "min-h-screen bg-gradient-to-br font-mono from-purple-600 to-violet-300 flex items-center justify-center p-6",
    children: /*#__PURE__*/_jsx("div", {
      className: "bg-black/80 backdrop-blur-sm rounded-[2.5rem] p-8 max-w-sm w-full shadow-xl",
      children: /*#__PURE__*/_jsxs("div", {
        className: "flex flex-col items-center gap-5",
        children: [/*#__PURE__*/_jsx(BorderImage, {}), /*#__PURE__*/_jsxs("div", {
          className: "space-y-2 text-center",
          children: [/*#__PURE__*/_jsx("h2", {
            className: "text-white text-2xl font-semibold",
            children: "Emily Brooks"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-purple-400 text-sm",
            children: "Full Stack Engineer"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-gray-400/90 text-sm leading-relaxed",
            children: "Building robust and powerful, scalable applications with a strong focus on delivering seamless user experiences."
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex gap-3 mt-2",
          children: [/*#__PURE__*/_jsx("button", {
            className: "px-8 py-2.5 rounded-full bg-transparent border border-gray-700 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300",
            children: "Portfolio"
          }), /*#__PURE__*/_jsx("button", {
            className: "px-8 py-2.5 rounded-full bg-violet-500 text-white hover:text-black text-sm font-medium hover:bg-violet-300 transition-all duration-300",
            children: "Follow"
          })]
        })]
      })
    })
  });
};
export default ProfileCard;