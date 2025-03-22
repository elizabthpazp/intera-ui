"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Activities() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  var toggleExpand = function toggleExpand() {
    setExpanded(!expanded);
  };
  var activities = [{
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
  return /*#__PURE__*/_jsx("div", {
    className: "flex items-center justify-center min-h-screen bg-purple-200",
    children: /*#__PURE__*/_jsxs("div", {
      className: "relative max-w-md w-full p-4 rounded-3xl",
      style: {
        marginTop: "-500px"
      },
      children: [/*#__PURE__*/_jsx("div", {
        className: "relative h-24",
        children: activities.map(function (activity, index) {
          return /*#__PURE__*/_jsxs("div", {
            style: {
              marginTop: "".concat(index === 0 ? 30 : index === 1 ? 20 : 10, "px")
            },
            className: "absolute font-sans left-0 right-0 top-0 w-full p-4 border-2 border-gray-200 rounded-3xl flex items-end justify-between transition-all duration-300 ease-out bg-white shadow-lg ".concat(expanded ? "transform translate-y-".concat(index * 28) : "transform scale-90 z-10"),
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex",
              children: [/*#__PURE__*/_jsx("span", {
                className: "w-12 h-12 bg-purple-700 rounded-full"
              }), /*#__PURE__*/_jsxs("div", {
                className: "ml-2",
                children: [/*#__PURE__*/_jsx("h2", {
                  className: "m-0 text-purple-900 font-medium",
                  children: activity.name
                }), /*#__PURE__*/_jsx("span", {
                  className: "text-gray-500 text-sm",
                  children: activity.location
                })]
              })]
            }), /*#__PURE__*/_jsx("span", {
              className: "text-gray-500 text-sm",
              children: activity.date
            })]
          }, index);
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "relative h-16 flex items-center justify-center",
        style: {
          marginTop: "-160px"
        },
        children: /*#__PURE__*/_jsx("button", {
          onClick: toggleExpand,
          className: "relative px-8 py-2 bg-white text-purple-900 rounded-full border-0 shadow text-sm font-semibold cursor-pointer after:content-[''] after:absolute   after:w-2 after:h-2 after:right-6 after:top-3 after:transition-all after:duration-300",
          style: {
            transform: expanded ? "rotate(0deg)" : "rotate(0deg)",
            ":after": {
              transform: expanded ? "rotate(45deg)" : "rotate(225deg)"
            }
          },
          children: expanded ? "Hide" : "Show"
        })
      })]
    })
  });
}
;