import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {number} [props.size=200] - tamaño en px
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var CatLoader = function CatLoader(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 200 : _ref$size;
  return /*#__PURE__*/_jsx("div", {
    className: cn("justify-center flex w-full max-w-full overflow-hidden", className),
    style: style,
    children: /*#__PURE__*/_jsxs("div", {
      className: "cat",
      style: {
        width: "min(".concat(size, "px, 70vw)"),
        maxWidth: "100%"
      },
      children: [/*#__PURE__*/_jsx("div", {
        className: "cat__body"
      }), /*#__PURE__*/_jsx("div", {
        className: "cat__body"
      }), /*#__PURE__*/_jsx("div", {
        className: "cat__tail"
      }), /*#__PURE__*/_jsx("div", {
        className: "cat__head"
      })]
    })
  });
};
export default CatLoader;