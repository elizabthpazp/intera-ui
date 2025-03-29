import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var TreeTriangle = function TreeTriangle() {
  var generateSwingLineStyle = function generateSwingLineStyle(i) {
    return {
      height: "calc(100vh * ((".concat(i + 4, ") / (128 + 4)))"),
      animationDelay: "calc(-4s * (".concat(i, " / (128 / 7)))")
    };
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "relative w-full h-[400px]",
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
      children: _toConsumableArray(Array(64)).map(function (_, i) {
        return /*#__PURE__*/_jsx("li", {
          className: "swing-line absolute left-1/2 top-4",
          style: generateSwingLineStyle(i + 1)
        }, i);
      })
    })]
  });
};
export default TreeTriangle;