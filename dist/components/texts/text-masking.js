"use client";

import { jsx as _jsx } from "react/jsx-runtime";
var TextMasking = function TextMasking(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$image = _ref.image,
    image = _ref$image === void 0 ? null : _ref$image;
  return /*#__PURE__*/_jsx("div", {
    className: "imageMark",
    style: {
      backgroundImage: "url(".concat(image !== null && image !== void 0 ? image : "", ")")
    },
    children: /*#__PURE__*/_jsx("h1", {
      className: "text-6xl font-extrabold py-2",
      children: title !== null && title !== void 0 ? title : "Text ♥️ ♥️  Masking"
    })
  });
};
export default TextMasking;