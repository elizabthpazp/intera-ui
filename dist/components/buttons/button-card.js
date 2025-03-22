"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var AnimatedLoginPanel = function AnimatedLoginPanel() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  return /*#__PURE__*/_jsx("div", {
    className: "min-h-screen bg-gradient-to-br from-purple-900 to-black flex items-center justify-center p-4",
    children: /*#__PURE__*/_jsxs("div", {
      className: "relative",
      children: [/*#__PURE__*/_jsxs("button", {
        onClick: function onClick() {
          return setIsOpen(!isOpen);
        },
        className: "\n            relative\n            px-8 py-3\n            text-white font-medium\n            border-2 border-purple-400\n            bg-transparent\n            rounded-xl\n            transition-all duration-300 ease-out\n            uppercase tracking-wide\n            flex items-center gap-2\n            hover:border-purple-300\n            ".concat(isOpen ? 'opacity-0' : 'opacity-100', "\n          "),
        children: [/*#__PURE__*/_jsx("span", {
          children: "Enter"
        }), /*#__PURE__*/_jsx(ArrowRight, {
          size: 18
        })]
      }), isOpen && /*#__PURE__*/_jsx("div", {
        className: "fixed inset-0 z-40",
        onClick: function onClick() {
          return setIsOpen(false);
        }
      }), /*#__PURE__*/_jsx("div", {
        className: "\n          absolute\n          left-1/2 top-1/2\n          -translate-x-1/2 \n          bg-gradient-to-b from-purple-50 to-white\n          rounded-2xl\n          p-6\n          transform\n          transition-all duration-300 ease-out\n          shadow-[0_0_40px_rgba(168,85,247,0.15)]\n          backdrop-blur-sm\n          ".concat(isOpen ? 'opacity-100 -translate-y-1/2 scale-100' : 'opacity-0 -translate-y-[40%] scale-95 pointer-events-none', "\n          min-w-[320px]\n          z-50\n        "),
        children: /*#__PURE__*/_jsxs("div", {
          className: "space-y-5",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "text-center",
            children: [/*#__PURE__*/_jsx("h2", {
              className: "text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent",
              children: "Welcome Back"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-gray-500 text-sm mt-1",
              children: "Sign in to continue"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-3",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "relative group",
              children: [/*#__PURE__*/_jsx(Mail, {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 transition-colors duration-200 group-focus-within:text-purple-600",
                size: 18
              }), /*#__PURE__*/_jsx("input", {
                type: "email",
                placeholder: "Email",
                className: "w-full pl-10 pr-4 py-2.5 bg-purple-50/50 border border-purple-100 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "relative group",
              children: [/*#__PURE__*/_jsx(Lock, {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 transition-colors duration-200 group-focus-within:text-purple-600",
                size: 18
              }), /*#__PURE__*/_jsx("input", {
                type: "password",
                placeholder: "Password",
                className: "w-full pl-10 pr-4 py-2.5 bg-purple-50/50 border border-purple-100 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex justify-between items-center text-sm",
            children: [/*#__PURE__*/_jsxs("label", {
              className: "flex items-center text-gray-600",
              children: [/*#__PURE__*/_jsx("input", {
                type: "checkbox",
                className: "mr-2 rounded border-purple-200 text-purple-600 focus:ring-purple-500"
              }), "Remember me"]
            }), /*#__PURE__*/_jsx("a", {
              href: "#",
              className: "text-purple-600 hover:text-purple-700 font-medium",
              children: "Forgot?"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-2.5",
            children: [/*#__PURE__*/_jsx("button", {
              onClick: function onClick(e) {
                return e.stopPropagation();
              },
              className: "w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-2.5 rounded-xl hover:from-purple-700 hover:to-purple-600 transition-all duration-200 font-medium shadow-lg shadow-purple-500/20",
              children: "Sign In"
            }), /*#__PURE__*/_jsx("button", {
              onClick: function onClick(e) {
                return e.stopPropagation();
              },
              className: "w-full bg-purple-50 text-purple-600 py-2.5 rounded-xl hover:bg-purple-100 transition-colors duration-200 font-medium",
              children: "Create Account"
            })]
          })]
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "\n          absolute inset-0\n          -z-10\n          blur-3xl\n          bg-purple-400\n          opacity-20\n          transition-all duration-500\n          ".concat(isOpen ? 'scale-150' : 'scale-100', "\n        ")
      })]
    })
  });
};
export default AnimatedLoginPanel;