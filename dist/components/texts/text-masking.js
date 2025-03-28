import { jsx as _jsx } from "react/jsx-runtime";
var TextMasking = function TextMasking(_ref) {
  var title = _ref.title,
    image = _ref.image;
  return /*#__PURE__*/_jsx("div", {
    className: "imageMark",
    style: {
      backgroundImage: "url(".concat(image, ")")
    },
    children: /*#__PURE__*/_jsx("h1", {
      className: "text-6xl font-extrabold py-2",
      children: title !== null && title !== void 0 ? title : "Text ♥️ ♥️  Masking"
    })
  });
};
export default TextMasking;