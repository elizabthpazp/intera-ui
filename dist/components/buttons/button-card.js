"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';

/**
 * @param {Object} props
 * @param {string | null} [props.principalButton=null]
 * @param {boolean} [props.darkMode=false]
 * @param {string | null} [props.title=null]
 * @param {string | null} [props.description=null]
 * @param {string | null} [props.primaryButton=null]
 * @param {string | null} [props.secondaryButton=null]
 * @param {string | null} [props.emailPlaceholder=null]
 * @param {string | null} [props.passwordPlaceholder=null]
 * @param {boolean} [props.notShowArrow=false]
 * @param {boolean} [props.notShowCombobox=false]
 * @param {boolean} [props.notShowForgot=false]
 * @param {string | null} [props.combobox=null]
 * @param {string | null} [props.forgot=null]
 * @param {function} [props.onLogin=() => {}]
 * @param {string | null} [props.forgotLink=null]
 * @param {function} [props.onSignUp=() => {}]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ButtonCard = function ButtonCard(_ref) {
  var _ref$principalButton = _ref.principalButton,
    principalButton = _ref$principalButton === void 0 ? null : _ref$principalButton,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? null : _ref$description,
    _ref$primaryButton = _ref.primaryButton,
    primaryButton = _ref$primaryButton === void 0 ? null : _ref$primaryButton,
    _ref$secondaryButton = _ref.secondaryButton,
    secondaryButton = _ref$secondaryButton === void 0 ? null : _ref$secondaryButton,
    _ref$emailPlaceholder = _ref.emailPlaceholder,
    emailPlaceholder = _ref$emailPlaceholder === void 0 ? null : _ref$emailPlaceholder,
    _ref$passwordPlacehol = _ref.passwordPlaceholder,
    passwordPlaceholder = _ref$passwordPlacehol === void 0 ? null : _ref$passwordPlacehol,
    _ref$notShowArrow = _ref.notShowArrow,
    notShowArrow = _ref$notShowArrow === void 0 ? false : _ref$notShowArrow,
    _ref$notShowCombobox = _ref.notShowCombobox,
    notShowCombobox = _ref$notShowCombobox === void 0 ? false : _ref$notShowCombobox,
    _ref$notShowForgot = _ref.notShowForgot,
    notShowForgot = _ref$notShowForgot === void 0 ? false : _ref$notShowForgot,
    _ref$combobox = _ref.combobox,
    combobox = _ref$combobox === void 0 ? null : _ref$combobox,
    _ref$forgot = _ref.forgot,
    forgot = _ref$forgot === void 0 ? null : _ref$forgot,
    _ref$onLogin = _ref.onLogin,
    onLogin = _ref$onLogin === void 0 ? function () {} : _ref$onLogin,
    _ref$forgotLink = _ref.forgotLink,
    forgotLink = _ref$forgotLink === void 0 ? null : _ref$forgotLink,
    _ref$onSignUp = _ref.onSignUp,
    onSignUp = _ref$onSignUp === void 0 ? function () {} : _ref$onSignUp;
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
    className: "flex justify-center p-4",
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
      }), /*#__PURE__*/_jsxs("div", {
        className: "\n          absolute \n          left-16 top-18 \n          -translate-x-1/2 \n          ".concat(darkMode ? 'bg-gray-900 border-gray-900' : 'bg-gradient-to-b from-purple-50 to-white border-gray-300', "\n          rounded-2xl\n          p-6 border-2 \n          transform\n          transition-all duration-300 ease-out \n          shadow-xl\n          backdrop-blur-sm\n          ").concat(isOpen ? 'opacity-100 -translate-y-1/2 scale-100' : 'opacity-0 -translate-y-[40%] scale-95 pointer-events-none', "\n          min-w-[320px]\n          z-50\n        "),
        children: [/*#__PURE__*/_jsx("button", {
          onClick: function onClick() {
            return setIsOpen(false);
          },
          className: "".concat(darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600', " absolute top-2 right-4 font-semibold transition"),
          children: "\u2715"
        }), /*#__PURE__*/_jsxs("div", {
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
                placeholder: emailPlaceholder !== null && emailPlaceholder !== void 0 ? emailPlaceholder : 'Email',
                className: "".concat(darkMode ? 'text-white bg-gray-900 border-gray-500' : 'text-gray-800 bg-purple-50/50 border-gray-300', " w-full pl-10 pr-4 py-2.5 border rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm")
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "relative group",
              children: [/*#__PURE__*/_jsx(Lock, {
                className: "".concat(darkMode ? 'text-white' : 'text-gray-800', " absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 group-focus-within:text-gray-600"),
                size: 18
              }), /*#__PURE__*/_jsx("input", {
                type: "password",
                value: password,
                onChange: function onChange(e) {
                  return setPassword(e.target.value);
                },
                placeholder: passwordPlaceholder !== null && passwordPlaceholder !== void 0 ? passwordPlaceholder : 'Password',
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
              href: forgotLink !== null && forgotLink !== void 0 ? forgotLink : '#',
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
              children: primaryButton !== null && primaryButton !== void 0 ? primaryButton : 'Sign In'
            }), /*#__PURE__*/_jsx("button", {
              onClick: function onClick(e) {
                return handleSubmit2(e);
              },
              className: "w-full ".concat(darkMode ? ' bg-slate-950 hover:bg-white hover:text-gray-800 text-white' : 'bg-white hover:text-white text-gray-800 hover:bg-slate-950 border-gray-600 border', " py-2.5 rounded-xl transition-colors duration-200 font-medium"),
              children: secondaryButton !== null && secondaryButton !== void 0 ? secondaryButton : 'Create Account'
            })]
          })]
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "\n          absolute inset-0\n          -z-10 \n          transition-all duration-500\n          ".concat(isOpen ? 'scale-150' : 'scale-100', "\n        ")
      })]
    })
  });
};
export default ButtonCard;