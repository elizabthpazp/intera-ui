import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var Tree = function Tree() {
  var lines = [];
  for (var i = 0; i < 256; i++) {
    var t = 6 * 360 * i / 256;
    var angle = (Math.sin(t * Math.PI / 180) + Math.cos(t * Math.PI / 540) * 0.1) * 20;
    lines.push({
      transform: "rotate(".concat(angle, "deg)"),
      animationDelay: "".concat(-(i * (4 / 256)), "s"),
      color: ["#D8334A", "#FFCE54", "#2ECC71", "#5D9CEC"][i % 4]
    });
  }
  return /*#__PURE__*/_jsxs("div", {
    className: "relative h-[390px]",
    children: [/*#__PURE__*/_jsx("ul", {
      className: "absolute top-0 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 z-50",
      children: _toConsumableArray(Array(5)).map(function (_, i) {
        return /*#__PURE__*/_jsx("li", {
          className: "absolute w-0 h-0 border-[12px] border-transparent border-b-[24px] border-b-[#FFCE54]",
          style: {
            transformOrigin: "12px 24px",
            transform: "rotate(".concat(i * 72, "deg)")
          }
        }, i);
      })
    }), /*#__PURE__*/_jsx("ul", {
      className: "p-0",
      children: lines.map(function (line, i) {
        return /*#__PURE__*/_jsx("li", {
          className: "matrix-line absolute left-1/2 w-[1px] h-[400px]" // Cambia '60vh' por una altura fija en px
          ,
          style: {
            transformOrigin: "50% 0%",
            transform: line.transform
          },
          children: /*#__PURE__*/_jsx("div", {
            className: "absolute bottom-0 w-[3px] h-[3px] rounded-full",
            style: {
              backgroundColor: line.color,
              animation: "fall2 4s linear infinite",
              animationDelay: line.animationDelay
            }
          })
        }, i);
      })
    })]
  });
};
export default Tree;