"use client";

import { cn } from "../../lib/utils";
/**
 * @param {Object} props
 * @param {string | null} [props.title=null]
 * @param {string | null} [props.image=null]
 * @param {string} [props.className=""]
 * @param {string} [props.textClassName=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx } from "react/jsx-runtime";
var TextMasking = function TextMasking(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$image = _ref.image,
    image = _ref$image === void 0 ? null : _ref$image,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$textClassName = _ref.textClassName,
    textClassName = _ref$textClassName === void 0 ? "" : _ref$textClassName,
    style = _ref.style;
  return /*#__PURE__*/_jsx("div", {
    className: cn("relative flex items-center justify-center py-10", className),
    style: style,
    children: /*#__PURE__*/_jsx("h1", {
      className: cn("text-4xl sm:text-6xl md:text-8xl font-black text-center uppercase tracking-tighter px-4 break-words", textClassName),
      style: {
        backgroundImage: "url(".concat(image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop", ")"),
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      },
      children: title !== null && title !== void 0 ? title : "Intera UI"
    })
  });
};
export default TextMasking;