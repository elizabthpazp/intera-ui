"use client";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var TreeTriangle = function TreeTriangle(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    mounted = _useState2[0],
    setMounted = _useState2[1];
  useEffect(function () {
    setMounted(true);
  }, []);
  var generateSwingLineStyle = function generateSwingLineStyle(i) {
    return {
      height: "calc(100vh * ((".concat(i + 4, ") / (128 + 4)))"),
      animationDelay: "calc(-4s * (".concat(i, " / (128 / 7)))")
    };
  };
  return /*#__PURE__*/_jsxs("div", {
    className: cn("relative w-full h-[300px] sm:h-[400px] overflow-hidden", className),
    style: style,
    children: [/*#__PURE__*/_jsx("ul", {
      className: "absolute top-0 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 z-50",
      style: {
        marginLeft: '-15px'
      },
      children: _toConsumableArray(Array(5)).map(function (_, i) {
        return /*#__PURE__*/_jsx("li", {
          className: "absolute w-0 h-0 border-[10px] border-transparent border-b-[20px] border-b-[#FFCE54]",
          style: {
            transformOrigin: "10px 20px",
            transform: "rotate(".concat(i * 72, "deg)")
          }
        }, i);
      })
    }), /*#__PURE__*/_jsx("ul", {
      className: "absolute top-0 right-0 left-0 w-full p-0",
      children: mounted && _toConsumableArray(Array(64)).map(function (_, i) {
        return /*#__PURE__*/_jsx("li", {
          className: "swing-line ia-swing-line absolute left-1/2 top-4",
          style: generateSwingLineStyle(i + 1)
        }, i);
      })
    })]
  });
};
export default TreeTriangle;