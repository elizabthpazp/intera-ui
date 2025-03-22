import Tree from "./tree";
import GiftBox from "./gift-box";
import { generateSnowflakes } from "../../app/utils/globalMethods";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ChristmasGift() {
  return /*#__PURE__*/_jsxs("div", {
    className: "relative h-screen bg-[radial-gradient(ellipse_at_bottom,_#1B2735_0%,_#090A0F_100%)] overflow-hidden",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "justify-center text-center mt-5 font-christmas",
      children: [/*#__PURE__*/_jsx("h1", {
        className: "font-principal text-green-400",
        children: " Merry Christmas! "
      }), /*#__PURE__*/_jsx("h4", {
        className: "font-secondary mt-2 text-red-400",
        children: " Open the gift: "
      })]
    }), /*#__PURE__*/_jsx(Tree, {}), /*#__PURE__*/_jsx(GiftBox, {}), /*#__PURE__*/_jsx("div", {
      className: "absolute bottom-0 left-0 w-full h-[15%] bg-white rounded-t-[50%]"
    }), /*#__PURE__*/_jsx("div", {
      className: "absolute inset-0 overflow-hidden pointer-events-none",
      children: /*#__PURE__*/_jsx("div", {
        className: "relative w-full h-full",
        children: generateSnowflakes(50)
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "absolute inset-0 overflow-hidden pointer-events-none",
      children: /*#__PURE__*/_jsx("div", {
        className: "relative w-full h-full",
        children: generateSnowflakes(50)
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "absolute inset-0 overflow-hidden pointer-events-none",
      children: /*#__PURE__*/_jsx("div", {
        className: "relative w-full h-full",
        children: generateSnowflakes(50)
      })
    })]
  });
}