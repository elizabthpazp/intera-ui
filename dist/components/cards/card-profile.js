"use client";

import React from "react";
import BorderImage from "../animations/border-image";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {boolean} [props.darkMode=false]
 * @param {string|null} [props.title=null]
 * @param {string|null} [props.subtitle=null]
 * @param {string|null} [props.description=null]
 * @param {string|null} [props.buttonLeftLabel=null]
 * @param {string|null} [props.buttonRightLabel=null]
 * @param {function} [props.onClickRight=() => {}]
 * @param {function} [props.onClickLeft=() => {}]
 * @param {string|null} [props.image=null]
 * @param {string} [props.className=""] - Clases para el contenedor externo
 * @param {string} [props.cardClassName=""] - Clases para la card interna
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var CardProfile = function CardProfile(_ref) {
  var _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$subtitle = _ref.subtitle,
    subtitle = _ref$subtitle === void 0 ? null : _ref$subtitle,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? null : _ref$description,
    _ref$buttonLeftLabel = _ref.buttonLeftLabel,
    buttonLeftLabel = _ref$buttonLeftLabel === void 0 ? null : _ref$buttonLeftLabel,
    _ref$buttonRightLabel = _ref.buttonRightLabel,
    buttonRightLabel = _ref$buttonRightLabel === void 0 ? null : _ref$buttonRightLabel,
    _ref$onClickRight = _ref.onClickRight,
    onClickRight = _ref$onClickRight === void 0 ? function () {} : _ref$onClickRight,
    _ref$onClickLeft = _ref.onClickLeft,
    onClickLeft = _ref$onClickLeft === void 0 ? function () {} : _ref$onClickLeft,
    _ref$image = _ref.image,
    image = _ref$image === void 0 ? null : _ref$image,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$cardClassName = _ref.cardClassName,
    cardClassName = _ref$cardClassName === void 0 ? "" : _ref$cardClassName,
    style = _ref.style;
  return /*#__PURE__*/_jsx("div", {
    className: cn("bg-gradient-to-br font-medium flex justify-center", className),
    style: style,
    children: /*#__PURE__*/_jsx("div", {
      className: cn("backdrop-blur-sm rounded-[2rem] px-4 py-8 max-w-sm w-full shadow-2xl", darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-purple-50 to-white border-gray-300 text-gray-800 border', cardClassName),
      children: /*#__PURE__*/_jsxs("div", {
        className: "flex flex-col items-center gap-5",
        children: [/*#__PURE__*/_jsx(BorderImage, {
          image: image,
          darkMode: darkMode
        }), /*#__PURE__*/_jsxs("div", {
          className: "space-y-2 text-center",
          children: [/*#__PURE__*/_jsx("h2", {
            className: cn("text-2xl font-bold", darkMode ? 'text-white' : 'text-gray-900'),
            children: title !== null && title !== void 0 ? title : 'Emily Brooks '
          }), /*#__PURE__*/_jsx("p", {
            className: cn("text-sm", darkMode ? 'text-zinc-300' : 'text-gray-800'),
            children: subtitle !== null && subtitle !== void 0 ? subtitle : 'Senior Full Stack Engineer'
          }), /*#__PURE__*/_jsx("p", {
            className: cn("text-sm leading-relaxed", darkMode ? 'text-gray-400/90' : 'text-gray-500'),
            children: description !== null && description !== void 0 ? description : 'Building robust and powerful, scalable applications with a strong focus on delivering seamless user experiences.'
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex gap-3 mt-2",
          children: [/*#__PURE__*/_jsx("button", {
            onClick: onClickLeft,
            className: cn("px-8 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300", darkMode ? 'bg-transparent border-gray-700 text-white hover:bg-white/10' : 'bg-slate-950 border-gray-700 text-white hover:bg-gray-800'),
            children: buttonLeftLabel !== null && buttonLeftLabel !== void 0 ? buttonLeftLabel : 'Portfolio'
          }), /*#__PURE__*/_jsx("button", {
            onClick: onClickRight,
            className: cn("px-8 py-2.5 rounded-xl bg-white text-sm font-medium transition-all duration-300 border", darkMode ? 'text-gray-900 hover:text-black hover:bg-gray-300' : 'text-gray-900 hover:text-black hover:bg-gray-300 border-gray-500'),
            children: buttonRightLabel !== null && buttonRightLabel !== void 0 ? buttonRightLabel : 'Follow'
          })]
        })]
      })
    })
  });
};
export default CardProfile;