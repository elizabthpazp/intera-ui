"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {boolean} [props.darkMode=false] 
 * @param {string|null} [props.image=null]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {number} [props.size=112] - Tamaño en px (w-28 = 112)
 * @param {string} [props.alt="Animated Image"]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var FALLBACK_IMAGE = "https://placehold.co/256x256/png?text=UI";
var LOCAL_FALLBACK = "/img/image.jpg";
export default function BorderImage(_ref) {
  var _ref$image = _ref.image,
    image = _ref$image === void 0 ? null : _ref$image,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? undefined : _ref$style,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 112 : _ref$size,
    _ref$alt = _ref.alt,
    alt = _ref$alt === void 0 ? "Animated Image" : _ref$alt;
  var _React$useState = React.useState(image || LOCAL_FALLBACK),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    imgSrc = _React$useState2[0],
    setImgSrc = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    fallbackUsed = _React$useState4[0],
    setFallbackUsed = _React$useState4[1];
  React.useEffect(function () {
    setImgSrc(image || LOCAL_FALLBACK);
    setFallbackUsed(false);
  }, [image]);
  var handleError = function handleError() {
    if (!fallbackUsed) {
      setFallbackUsed(true);
      // Si falla el local (/img/image.jpg no existe en proyecto consumidor), usa CDN confiable
      setImgSrc(FALLBACK_IMAGE);
    } else {
      // Si incluso el CDN falla (offline), usa data URI inline para que siempre se vea algo
      setImgSrc("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%239ca3af'%3EUI%3C/text%3E%3C/svg%3E");
    }
  };
  return /*#__PURE__*/_jsx("div", {
    className: cn("flex", className),
    style: style,
    children: /*#__PURE__*/_jsxs(motion.div, {
      className: cn("relative p-1 rounded-full bg-gradient-to-r", !darkMode ? 'from-gray-800 via-gray-500 to-zinc-600' : 'from-gray-300 via-gray-600 to-zinc-500'),
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      },
      children: [/*#__PURE__*/_jsx(motion.div, {
        className: cn("absolute inset-0 rounded-full blur-md bg-gradient-to-r opacity-75", !darkMode ? 'from-gray-800 via-gray-500 to-zinc-600' : 'from-gray-300 via-gray-600 to-zinc-500'),
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }), /*#__PURE__*/_jsx("div", {
        className: cn("relative rounded-full overflow-hidden border-2 bg-gray-100", !darkMode ? 'border-gray-600' : 'border-gray-400'),
        style: {
          width: size,
          height: size
        },
        children: /*#__PURE__*/_jsx("img", {
          style: {
            marginTop: '0px',
            width: '100%',
            height: '100%'
          },
          src: imgSrc,
          alt: alt,
          className: "object-cover w-full h-full block",
          loading: "lazy",
          onError: handleError
        })
      })]
    })
  });
}