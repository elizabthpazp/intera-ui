"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from "react";
import { ButtonCard, CardProfile, Activities, TreeTriangle, Tree, GiftBox, CatLoader, BorderImage, TextMasking } from "../components";
import { Sun, Moon } from "lucide-react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Playground() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    darkMode = _useState2[0],
    setDarkMode = _useState2[1];
  var toggleDarkMode = function toggleDarkMode() {
    return setDarkMode(!darkMode);
  };
  var Section = function Section(_ref) {
    var title = _ref.title,
      children = _ref.children;
    return /*#__PURE__*/_jsxs("section", {
      className: "mb-12",
      children: [/*#__PURE__*/_jsx("h2", {
        className: "text-2xl font-bold mb-6 pb-2 border-b ".concat(darkMode ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'),
        children: title
      }), /*#__PURE__*/_jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start",
        children: children
      })]
    });
  };
  var ComponentWrapper = function ComponentWrapper(_ref2) {
    var name = _ref2.name,
      children = _ref2.children,
      _ref2$fullWidth = _ref2.fullWidth,
      fullWidth = _ref2$fullWidth === void 0 ? false : _ref2$fullWidth;
    return /*#__PURE__*/_jsxs("div", {
      className: "flex flex-col gap-4 ".concat(fullWidth ? 'md:col-span-2 lg:col-span-3' : ''),
      children: [/*#__PURE__*/_jsxs("span", {
        className: "text-sm font-mono ".concat(darkMode ? 'text-gray-400' : 'text-gray-500'),
        children: ['<', " ", name, " ", '/>']
      }), /*#__PURE__*/_jsx("div", {
        className: "p-8 rounded-2xl border ".concat(darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'),
        children: children
      })]
    });
  };
  return /*#__PURE__*/_jsxs("main", {
    className: "min-h-screen transition-colors duration-300 ".concat(darkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'),
    children: [/*#__PURE__*/_jsx("header", {
      className: "sticky top-0 z-50 backdrop-blur-md border-b ".concat(darkMode ? 'bg-black/80 border-gray-800' : 'bg-white/80 border-gray-200'),
      children: /*#__PURE__*/_jsxs("div", {
        className: "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h1", {
            className: "text-xl font-bold tracking-tight",
            children: "InteraUI Playground"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-xs ".concat(darkMode ? 'text-gray-400' : 'text-gray-500'),
            children: "Interactive Component Library"
          })]
        }), /*#__PURE__*/_jsx("button", {
          onClick: toggleDarkMode,
          className: "p-2 rounded-full transition-all ".concat(darkMode ? 'bg-yellow-400 text-black hover:bg-yellow-300' : 'bg-slate-900 text-white hover:bg-slate-800'),
          children: darkMode ? /*#__PURE__*/_jsx(Sun, {
            size: 20
          }) : /*#__PURE__*/_jsx(Moon, {
            size: 20
          })
        })]
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: "max-w-7xl mx-auto px-6 py-12",
      children: [/*#__PURE__*/_jsxs(Section, {
        title: "Cards & Profiles",
        children: [/*#__PURE__*/_jsx(ComponentWrapper, {
          name: "CardProfile",
          children: /*#__PURE__*/_jsx(CardProfile, {
            darkMode: darkMode
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "CardProfile (Custom)",
          children: /*#__PURE__*/_jsx(CardProfile, {
            darkMode: darkMode,
            title: "Alex Rivera",
            subtitle: "Product Designer",
            image: "/img/cat.png",
            buttonLeftLabel: "Github",
            buttonRightLabel: "Contact"
          })
        })]
      }), /*#__PURE__*/_jsxs(Section, {
        title: "Interactive Elements",
        children: [/*#__PURE__*/_jsx(ComponentWrapper, {
          name: "ButtonCard",
          children: /*#__PURE__*/_jsx(ButtonCard, {
            darkMode: darkMode,
            principalButton: "Login"
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "Activities",
          children: /*#__PURE__*/_jsx(Activities, {
            darkMode: darkMode
          })
        })]
      }), /*#__PURE__*/_jsxs(Section, {
        title: "Animations & Loaders",
        children: [/*#__PURE__*/_jsx(ComponentWrapper, {
          name: "CatLoader",
          children: /*#__PURE__*/_jsx(CatLoader, {})
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "GiftBox",
          children: /*#__PURE__*/_jsx(GiftBox, {
            message: "Surprise! \uD83C\uDF81"
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "BorderImage",
          children: /*#__PURE__*/_jsx("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/_jsx(BorderImage, {
              darkMode: darkMode,
              image: "/img/cat.png"
            })
          })
        })]
      }), /*#__PURE__*/_jsx(Section, {
        title: "Text Effects",
        children: /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "TextMasking",
          fullWidth: true,
          children: /*#__PURE__*/_jsx("div", {
            className: "flex justify-center py-8",
            children: /*#__PURE__*/_jsx(TextMasking, {
              title: "INTERA UI EFFECTS",
              image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop"
            })
          })
        })
      }), /*#__PURE__*/_jsxs(Section, {
        title: "Seasonal / Decorative",
        children: [/*#__PURE__*/_jsx(ComponentWrapper, {
          name: "TreeTriangle",
          fullWidth: true,
          children: /*#__PURE__*/_jsx("div", {
            className: "h-[450px] overflow-hidden relative bg-slate-900 rounded-xl",
            children: /*#__PURE__*/_jsx(TreeTriangle, {})
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "Tree",
          fullWidth: true,
          children: /*#__PURE__*/_jsx("div", {
            className: "h-[450px] overflow-hidden relative bg-slate-900 rounded-xl",
            children: /*#__PURE__*/_jsx(Tree, {})
          })
        })]
      })]
    }), /*#__PURE__*/_jsx("footer", {
      className: "border-t py-12 ".concat(darkMode ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-400'),
      children: /*#__PURE__*/_jsx("div", {
        className: "max-w-7xl mx-auto px-6 text-center",
        children: /*#__PURE__*/_jsx("p", {
          className: "text-sm",
          children: "InteraUI \xA9 2026 \u2022 Reusable Component Collection"
        })
      })
    })]
  });
}