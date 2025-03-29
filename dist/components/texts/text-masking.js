"use client";

/**
 * @param {Object} props
 * @param {string | null} [props.title=null]
 * @param {string | null} [props.image=null]
 */
import { jsx as _jsx } from "react/jsx-runtime";
var TextMasking = function TextMasking(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$image = _ref.image,
    image = _ref$image === void 0 ? null : _ref$image;
  return /*#__PURE__*/_jsx("div", {
    className: "relative imageMark",
    children: /*#__PURE__*/_jsx("h1", {
      className: "text-6xl font-extrabold py-2 relative z-10 text-transparent",
      style: {
        backgroundImage: "url(".concat(image !== null && image !== void 0 ? image : "", ")"),
        backgroundSize: "cover",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        WebkitMaskImage: "url(".concat(image !== null && image !== void 0 ? image : "", ")"),
        maskImage: "url(".concat(image !== null && image !== void 0 ? image : "", ")"),
        WebkitMaskSize: "cover",
        maskSize: "cover"
      },
      children: title !== null && title !== void 0 ? title : "Text ♥️ ♥️ Masking"
    })
  });
};
export default TextMasking;