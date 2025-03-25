"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Activities(_ref) {
  var activities = _ref.activities,
    primaryButton = _ref.primaryButton,
    secondaryButton = _ref.secondaryButton,
    darkMode = _ref.darkMode;
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
    _useState4 = _slicedToArray(_useState3, 2),
    activitiesList = _useState4[0],
    setActivitiesList = _useState4[1];
  return /*#__PURE__*/_jsx("div", {
    className: "flex justify-center",
    children: /*#__PURE__*/_jsxs("div", {
      className: "relative max-w-md w-full p-4 rounded-xl",
      children: [activitiesList.length > 1 && /*#__PURE__*/_jsx("div", {
        className: "\n            flex items-center justify-center \n            transition-all duration-300 ease-out mb-4\n          ",
        children: /*#__PURE__*/_jsx("button", {
          onClick: toggleExpand,
          className: "\n              relative px-8 py-2 rounded-2xl \n              border-2 shadow text-sm font-semibold \n              cursor-pointer after:content-[''] \n              after:absolute  \n              after:w-2 after:h-2 after:right-6 \n              after:top-3 after:transition-all \n              after:duration-300 \n              ".concat(expanded ? "after:rotate-45" : "after:rotate-225", "\n              ").concat(darkMode ? 'text-white bg-gray-900 border-zinc-800 hover:border-zinc-600' : 'border-zinc-200 hover:border-zinc-300 bg-white text-gray-900', "\n            "),
          children: expanded ? primaryButton !== null && primaryButton !== void 0 ? primaryButton : "Hide" : secondaryButton !== null && secondaryButton !== void 0 ? secondaryButton : "Show"
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "relative",
        style: {
          height: expanded ? "".concat(activitiesList.length * 7, "rem") : "".concat((activitiesList.length + 1) * 3, "rem")
        },
        children: activitiesList.map(function (activity, index) {
          return /*#__PURE__*/_jsxs("div", {
            className: "\n              absolute top-0 left-0 right-0 w-full p-4 \n              border-2 rounded-3xl \n              flex items-end justify-between \n              transition-all duration-300 ease-out \n               shadow-lg \n              ".concat(darkMode ? 'bg-gray-900 border-zinc-800' : 'bg-white border-gray-200', "\n              ").concat(expanded ? "transform-none" : "transform scale-".concat(95 - index * 5, " z-").concat(20 - index * 5)),
            style: {
              top: expanded ? "".concat(index * 6, "rem") : "".concat(index, "rem"),
              transform: expanded ? "scale(1)" : "scale(".concat(1 - index * 0.05, ")"),
              zIndex: activitiesList.length - index
            },
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex items-center",
              children: [/*#__PURE__*/_jsx("span", {
                className: "".concat(darkMode ? 'bg-gray-700' : 'bg-gray-300', " w-12 h-12 rounded-3xl mr-2")
              }), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("h2", {
                  className: "".concat(darkMode ? 'text-white' : 'text-gray-900', " m-0 text-base font-medium"),
                  children: activity.name || "Unnamed Activity"
                }), /*#__PURE__*/_jsx("span", {
                  className: "".concat(darkMode ? 'text-gray-400' : 'text-gray-500', " text-sm"),
                  children: activity.location || "Unknown Location"
                })]
              })]
            }), /*#__PURE__*/_jsx("span", {
              className: "".concat(darkMode ? 'text-gray-400' : 'text-gray-500', " text-sm"),
              children: activity.date || "No Date"
            })]
          }, index);
        })
      })]
    })
  });
}