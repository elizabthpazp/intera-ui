import React from "react";
import { jsx as _jsx } from "react/jsx-runtime";
export var metadata = {
  title: "React Components for free",
  description: "A collection of free React components for your project, easy to use and customize."
};
export default function RootLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_jsx("html", {
    lang: "en",
    children: /*#__PURE__*/_jsx("body", {
      children: children
    })
  });
}