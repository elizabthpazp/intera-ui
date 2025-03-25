"use client";

import React from "react";
import BorderImage from "../animations/border-image";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var CardProfile = function CardProfile(_ref) {
  var darkMode = _ref.darkMode,
    title = _ref.title,
    subtitle = _ref.subtitle,
    description = _ref.description,
    button1Text = _ref.button1Text,
    button2Text = _ref.button2Text,
    onClickOne = _ref.onClickOne,
    onClickTwo = _ref.onClickTwo,
    image = _ref.image;
  return /*#__PURE__*/_jsx("div", {
    className: "bg-gradient-to-br font-medium flex justify-center",
    children: /*#__PURE__*/_jsx("div", {
      className: "".concat(darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-purple-50 to-white border-gray-300 text-gray-800 border', " backdrop-blur-sm rounded-[2rem] px-4 py-8 max-w-sm w-full shadow-2xl"),
      children: /*#__PURE__*/_jsxs("div", {
        className: "flex flex-col items-center gap-5",
        children: [/*#__PURE__*/_jsx(BorderImage, {
          image: image,
          darkMode: darkMode
        }), /*#__PURE__*/_jsxs("div", {
          className: "space-y-2 text-center",
          style: {
            marginTop: '-5px'
          },
          children: [/*#__PURE__*/_jsx("h2", {
            className: "".concat(darkMode ? 'text-white' : 'text-gray-900', " text-2xl font-bold"),
            children: title !== null && title !== void 0 ? title : 'Emily Brooks '
          }), /*#__PURE__*/_jsx("p", {
            className: "".concat(darkMode ? 'text-zinc-300' : 'text-gray-800', " text-sm"),
            children: subtitle !== null && subtitle !== void 0 ? subtitle : 'Senior Full Stack Engineer'
          }), /*#__PURE__*/_jsx("p", {
            className: "".concat(darkMode ? 'text-gray-400/90' : 'text-gray-500', " text-sm leading-relaxed"),
            children: description !== null && description !== void 0 ? description : 'Building robust and powerful, scalable applications with a strong focus on delivering seamless user experiences.'
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex gap-3 mt-2",
          children: [/*#__PURE__*/_jsx("button", {
            onClick: onClickOne,
            className: "".concat(darkMode ? 'bg-transparent border-gray-700 text-white hover:bg-white/10' : 'bg-slate-950 border-gray-700 text-white hover:bg-gray-800', " px-8 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300"),
            children: button1Text !== null && button1Text !== void 0 ? button1Text : 'Portfolio'
          }), /*#__PURE__*/_jsx("button", {
            onClick: onClickTwo,
            className: "".concat(darkMode ? 'text-gray-900 hover:text-black hover:bg-gray-300' : 'text-gray-900 hover:text-black hover:bg-gray-300 border-gray-500 border', " px-8 py-2.5 rounded-xl bg-white text-sm font-medium transition-all duration-300"),
            children: button2Text !== null && button2Text !== void 0 ? button2Text : 'Follow'
          })]
        })]
      })
    })
  });
};
export default CardProfile;