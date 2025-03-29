import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function GiftBox(_ref) {
  var _ref$message = _ref.message,
    message = _ref$message === void 0 ? null : _ref$message,
    _ref$primaryColor = _ref.primaryColor,
    primaryColor = _ref$primaryColor === void 0 ? "#ff7d6d" : _ref$primaryColor,
    _ref$secondaryColor = _ref.secondaryColor,
    secondaryColor = _ref$secondaryColor === void 0 ? "#ffb74a" : _ref$secondaryColor,
    _ref$secondaryAccentC = _ref.secondaryAccentColor,
    secondaryAccentColor = _ref$secondaryAccentC === void 0 ? "rgba(255, 206, 84, 1)" : _ref$secondaryAccentC,
    _ref$tertiaryColor = _ref.tertiaryColor,
    tertiaryColor = _ref$tertiaryColor === void 0 ? "#ff8168" : _ref$tertiaryColor,
    _ref$accentColor = _ref.accentColor,
    accentColor = _ref$accentColor === void 0 ? "#ff4149" : _ref$accentColor,
    _ref$shadowColor = _ref.shadowColor,
    shadowColor = _ref$shadowColor === void 0 ? "#dd4b4c" : _ref$shadowColor,
    _ref$textColor = _ref.textColor,
    textColor = _ref$textColor === void 0 ? "#302E2EFF" : _ref$textColor,
    _ref$containerColor = _ref.containerColor,
    containerColor = _ref$containerColor === void 0 ? "#ffa69f" : _ref$containerColor;
  return /*#__PURE__*/_jsx("div", {
    className: "h-[260px] relative z-60 flex justify-center items-end",
    children: /*#__PURE__*/_jsxs("section", {
      className: "absolute bottom-0 w-[150px] left-1/2 transform -translate-x-1/2 z-[12] h-[180px] group",
      children: [/*#__PURE__*/_jsx("div", {
        className: "absolute w-[120px] font-sans font-extrabold rounded-md shadow p-2.5 text-[15px] left-0 top-[100px] right-0 mx-auto leading-[26px] z-[-1] text-center transition-all duration-600 ease-in-out delay-[100ms] group-hover:top-[-10px] group-hover:delay-[400ms]",
        style: {
          backgroundColor: containerColor,
          color: textColor
        },
        children: message !== null && message !== void 0 ? message : "ADD YOUR MESSAGE!!"
      }), /*#__PURE__*/_jsxs("section", {
        className: "w-full absolute top-0 transition-all duration-600 ease-in-out delay-600 group-hover:top-[-100px] group-hover:delay-300",
        children: [/*#__PURE__*/_jsx("div", {
          className: "w-[45px] h-[45px] rounded-full absolute right-[30px]",
          style: {
            boxShadow: "0 0 0 10px ".concat(secondaryAccentColor, " inset")
          }
        }), /*#__PURE__*/_jsx("div", {
          className: "w-[45px] h-[45px] rounded-full absolute left-[30px]",
          style: {
            boxShadow: "0 0 0 10px ".concat(secondaryAccentColor, " inset")
          }
        }), /*#__PURE__*/_jsx("div", {
          className: "h-7 rounded-md top-[45px] absolute w-[150px]",
          style: {
            backgroundColor: primaryColor
          }
        }), /*#__PURE__*/_jsx("div", {
          className: "h-[55px] w-[15px] left-[15px] absolute top-[40px] z-[11] after:content-[''] after:border-[9px] after:border-solid after:border-transparent after:z-[12] after:absolute after:bottom-0 transition-all duration-300 ease-in-out delay-[1000ms] group-hover:h-8 group-hover:delay-0",
          style: {
            backgroundColor: secondaryColor
          }
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "w-0.5 bottom-0 absolute right-0 left-0 mx-auto h-[140px] border-r-[6px] border-l-[6px] z-10 transition-all duration-300 ease-in-out delay-[1000ms] group-hover:h-[102px] group-hover:delay-0",
        style: {
          backgroundColor: secondaryColor,
          borderColor: secondaryColor
        }
      }), /*#__PURE__*/_jsx("div", {
        className: "bottom-0 h-[102px] overflow-hidden right-[7px] absolute w-[136px] rounded-md",
        style: {
          backgroundColor: tertiaryColor
        },
        children: [-15, 20, 55, 90].map(function (top, index) {
          return /*#__PURE__*/_jsx("div", {
            className: "absolute right-[-25px] h-3 w-[110px] rotate-45",
            style: {
              backgroundColor: accentColor,
              top: "".concat(top, "px")
            }
          }, index);
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "h-[5px] w-[136px] right-[7px] absolute bottom-[102px] transition-delay-[1100ms] group-hover:h-0 group-hover:opacity-0 group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out group-hover:delay-400",
        style: {
          backgroundColor: shadowColor
        }
      })]
    })
  });
}