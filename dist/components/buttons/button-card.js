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
var ButtonCard = function ButtonCard(_ref) {
  var principalButton = _ref.principalButton,
    darkMode = _ref.darkMode,
    title = _ref.title,
    description = _ref.description,
    button1 = _ref.button1,
    button2 = _ref.button2,
    input1 = _ref.input1,
    input2 = _ref.input2,
    notShowArrow = _ref.notShowArrow,
    notShowCombobox = _ref.notShowCombobox,
    notShowForgot = _ref.notShowForgot,
    combobox = _ref.combobox,
    forgot = _ref.forgot,
    onLogin = _ref.onLogin,
    hrefLink = _ref.hrefLink,
    onSignUp = _ref.onSignUp;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    email = _useState4[0],
    setEmail = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    password = _useState6[0],
    setPassword = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    rememberMe = _useState8[0],
    setRememberMe = _useState8[1];
  var handleSubmit = function handleSubmit(e) {
    e.stopPropagation();
    onLogin(email, password, rememberMe);
  };
  var handleSubmit2 = function handleSubmit2(e) {
    e.stopPropagation();
    onSignUp(email, password, rememberMe);
  };
  return /*#__PURE__*/_jsx("div", {
    className: "min-h-screen flex justify-center p-4",
    children: /*#__PURE__*/_jsxs("div", {
      className: "relative",
      children: [/*#__PURE__*/_jsxs("button", {
        onClick: function onClick() {
          return setIsOpen(!isOpen);
        },
        className: "\n            ".concat(darkMode ? '!bg-gray-900 border-gray-900 text-white hover:border-gray-500' : 'bg-gray-100 border-gray-300 text-gray-800 hover:border-gray-400', "\n            relative \n            px-8 py-3\n             font-medium\n            border-2 \n            bg-transparent\n            rounded-xl\n            transition-all duration-300 ease-out\n            uppercase tracking-wide\n            flex items-center gap-2\n            \n            ").concat(isOpen ? 'opacity-0' : 'opacity-100', "\n          "),
        children: [/*#__PURE__*/_jsx("span", {
          children: principalButton !== null && principalButton !== void 0 ? principalButton : 'Enter'
        }), !notShowArrow ? /*#__PURE__*/_jsx(ArrowRight, {
          size: 18
        }) : '']
      }), isOpen && /*#__PURE__*/_jsx("div", {
        className: "fixed inset-0 z-40",
        onClick: function onClick() {
          return setIsOpen(false);
        }
      }), /*#__PURE__*/_jsx("div", {
        className: "\n          absolute \n          left-16 top-48 \n          -translate-x-1/2 \n          ".concat(darkMode ? 'bg-gray-900 border-gray-900' : 'bg-gradient-to-b from-purple-50 to-white border-gray-300', "\n          rounded-2xl\n          p-6 border-2 \n          transform\n          transition-all duration-300 ease-out\n          shadow-[0_0_40px_rgba(75,85,99,0.3)]\n          backdrop-blur-sm\n          ").concat(isOpen ? 'opacity-100 -translate-y-1/2 scale-100' : 'opacity-0 -translate-y-[40%] scale-95 pointer-events-none', "\n          min-w-[320px]\n          z-50\n        "),
        children: /*#__PURE__*/_jsxs("div", {
          className: "space-y-5",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "text-center",
            children: [/*#__PURE__*/_jsx("h2", {
              className: "text-2xl font-bold ".concat(darkMode ? 'text-white' : 'text-gray-800'),
              children: title !== null && title !== void 0 ? title : 'Welcome Back'
            }), /*#__PURE__*/_jsxs("p", {
              className: "".concat(darkMode ? 'text-gray-300' : 'text-gray-800', " text-sm mt-1"),
              children: [" ", description !== null && description !== void 0 ? description : 'Sign in to continue']
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-3",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "relative group",
              children: [/*#__PURE__*/_jsx(Mail, {
                className: " ".concat(darkMode ? 'text-white' : 'text-gray-800', " absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 group-focus-within:text-gray-600"),
                size: 18
              }), /*#__PURE__*/_jsx("input", {
                type: "email",
                value: email,
                onChange: function onChange(e) {
                  return setEmail(e.target.value);
                },
                placeholder: input1 !== null && input1 !== void 0 ? input1 : 'Email',
                className: "".concat(darkMode ? 'text-white bg-gray-900 border-gray-500' : 'text-gray-800 bg-purple-50/50 border-gray-300', " w-full pl-10 pr-4 py-2.5 border rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm")
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "relative group",
              children: [/*#__PURE__*/_jsx(Lock, {
                className: "".concat(darkMode ? 'text-white' : 'text-gray-800', " absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 transition-colors duration-200 group-focus-within:text-gray-600"),
                size: 18
              }), /*#__PURE__*/_jsx("input", {
                type: "password",
                value: password,
                onChange: function onChange(e) {
                  return setPassword(e.target.value);
                },
                placeholder: input2 !== null && input2 !== void 0 ? input2 : 'Password',
                className: "".concat(darkMode ? 'text-white bg-gray-900 border-gray-500' : 'text-gray-800 bg-purple-50/50 border-gray-300', " w-full pl-10 pr-4 py-2.5 border rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm")
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex justify-between items-center text-sm",
            children: [!notShowCombobox ? /*#__PURE__*/_jsxs("label", {
              className: "".concat(darkMode ? 'text-white' : 'text-gray-600', " flex items-center"),
              children: [/*#__PURE__*/_jsx("input", {
                type: "checkbox",
                className: "mr-2 rounded focus:ring-purple-500",
                checked: rememberMe,
                onChange: function onChange(e) {
                  return setRememberMe(e.target.checked);
                }
              }), combobox !== null && combobox !== void 0 ? combobox : 'Remember me']
            }) : !notShowForgot ? /*#__PURE__*/_jsx("label", {
              className: "flex items-center text-gray-600"
            }) : '', !notShowForgot ? /*#__PURE__*/_jsx("a", {
              href: hrefLink !== null && hrefLink !== void 0 ? hrefLink : '#',
              className: "".concat(darkMode ? 'text-white' : 'text-gray-800', " hover:text-gray-500 font-medium"),
              children: forgot !== null && forgot !== void 0 ? forgot : 'Forgot?'
            }) : '']
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-2.5",
            children: [/*#__PURE__*/_jsx("button", {
              onClick: function onClick(e) {
                return handleSubmit(e);
              },
              className: "w-full ".concat(darkMode ? ' bg-white hover:text-white text-gray-800 hover:bg-slate-950' : 'bg-slate-950 hover:bg-white hover:text-gray-800 text-white hover:border-gray-600 border', " py-2.5 rounded-xl hover:bg-gray-700 transition-all duration-200 font-medium shadow-lg shadow-gray-500/20"),
              children: button1 !== null && button1 !== void 0 ? button1 : 'Sign In'
            }), /*#__PURE__*/_jsx("button", {
              onClick: function onClick(e) {
                return handleSubmit2(e);
              },
              className: "w-full ".concat(darkMode ? ' bg-slate-950 hover:bg-white hover:text-gray-800 text-white' : 'bg-white hover:text-white text-gray-800 hover:bg-slate-950 border-gray-600 border', " py-2.5 rounded-xl transition-colors duration-200 font-medium"),
              children: button2 !== null && button2 !== void 0 ? button2 : 'Create Account'
            })]
          })]
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "\n          absolute inset-0\n          -z-10\n          blur-3xl\n          bg-purple-400\n          opacity-20\n          transition-all duration-500\n          ".concat(isOpen ? 'scale-150' : 'scale-100', "\n        ")
      })]
    })
  });
};
export default ButtonCard;