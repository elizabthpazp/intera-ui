"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useState } from "react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {boolean} [props.darkMode=false]
 * @param {any} [props.activities=null]
 * @param {string|null} [props.primaryButton=null]
 * @param {string|null} [props.secondaryButton=null]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Activities(_ref) {
  var _ref$activities = _ref.activities,
    activities = _ref$activities === void 0 ? null : _ref$activities,
    _ref$primaryButton = _ref.primaryButton,
    primaryButton = _ref$primaryButton === void 0 ? null : _ref$primaryButton,
    _ref$secondaryButton = _ref.secondaryButton,
    secondaryButton = _ref$secondaryButton === void 0 ? null : _ref$secondaryButton,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  var toggleExpand = function toggleExpand() {
    setExpanded(!expanded);
  };
  var tempActivities = [{
    name: "Work hard",
    location: "At work",
    date: "1 April"
  }, {
    name: "Study English",
    location: "At school",
    date: "2 April"
  }, {
    name: "Make dinner",
    location: "At home",
    date: "3 April"
  }];
  var _useState3 = useState(activities !== null && activities !== void 0 ? activities : tempActivities),
    _useState4 = _slicedToArray(_useState3, 1),
    activitiesList = _useState4[0];
  return /*#__PURE__*/_jsx("div", {
    className: cn("flex justify-center w-full max-w-full", className),
    style: style,
    children: /*#__PURE__*/_jsxs("div", {
      className: "relative max-w-md w-full p-3 sm:p-4 rounded-xl",
      children: [activitiesList.length > 1 && /*#__PURE__*/_jsx("div", {
        className: "flex items-center justify-center transition-all duration-300 ease-out mb-4",
        children: /*#__PURE__*/_jsx("button", {
          onClick: toggleExpand,
          className: cn("relative px-8 py-2 rounded-2xl border-2 shadow text-sm font-semibold cursor-pointer", "after:content-[''] after:absolute after:w-2 after:h-2 after:right-6 after:top-3 after:transition-all after:duration-300", expanded ? "after:rotate-45" : "after:rotate-225", darkMode ? 'text-white bg-gray-900 border-zinc-800 hover:border-zinc-600' : 'border-zinc-200 hover:border-zinc-300 bg-white text-gray-900'),
          children: expanded ? primaryButton !== null && primaryButton !== void 0 ? primaryButton : "Hide" : secondaryButton !== null && secondaryButton !== void 0 ? secondaryButton : "Show"
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "relative",
        style: {
          height: expanded ? "".concat(activitiesList.length * 7, "rem") : "".concat((activitiesList.length + 1) * 3, "rem")
        },
        children: activitiesList.map(function (activity, index) {
          return /*#__PURE__*/_jsxs("div", {
            className: cn("absolute top-0 left-0 right-0 w-full p-4 border-2 rounded-3xl flex items-end justify-between transition-all duration-300 ease-out shadow-lg", darkMode ? 'bg-gray-900 border-zinc-800' : 'bg-white border-gray-200'),
            style: {
              top: expanded ? "".concat(index * 6, "rem") : "".concat(index, "rem"),
              transform: expanded ? "scale(1)" : "scale(".concat(1 - index * 0.05, ")"),
              zIndex: activitiesList.length - index
            },
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex items-center min-w-0 flex-1",
              children: [/*#__PURE__*/_jsx("span", {
                className: cn("w-10 h-10 sm:w-12 sm:h-12 rounded-2xl sm:rounded-3xl mr-2 shrink-0", darkMode ? 'bg-gray-700' : 'bg-gray-300')
              }), /*#__PURE__*/_jsxs("div", {
                className: "min-w-0",
                children: [/*#__PURE__*/_jsx("h2", {
                  className: cn("m-0 text-sm sm:text-base font-medium truncate", darkMode ? 'text-white' : 'text-gray-900'),
                  children: activity.name || "Unnamed Activity"
                }), /*#__PURE__*/_jsx("span", {
                  className: cn("text-xs sm:text-sm", darkMode ? 'text-gray-400' : 'text-gray-500'),
                  children: activity.location || "Unknown Location"
                })]
              })]
            }), /*#__PURE__*/_jsx("span", {
              className: cn("text-xs sm:text-sm shrink-0 ml-2", darkMode ? 'text-gray-400' : 'text-gray-500'),
              children: activity.date || "No Date"
            })]
          }, index);
        })
      })]
    })
  });
}