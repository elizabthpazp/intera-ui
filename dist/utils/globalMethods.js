import { jsx as _jsx } from "react/jsx-runtime";
export var generateSnowflakes = function generateSnowflakes(count) {
  return Array.from({
    length: count
  }, function (_, i) {
    return /*#__PURE__*/_jsx("i", {
      className: "absolute w-[3px] h-[3px] bg-white ".concat(i % 2 === 0 ? 'w-[2px] h-[2px]' : ''),
      style: {
        top: "".concat(Math.random() * 100, "%"),
        right: "".concat(Math.random() * 100, "%"),
        animation: "fall ".concat(5 + Math.random() * 20, "s linear infinite"),
        animationDelay: "".concat(-Math.random() * 5, "s")
      }
    }, i);
  });
};