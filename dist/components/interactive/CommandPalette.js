"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, CornerDownLeft } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array de { id, label, icon?, shortcut?, onSelect }
 * @param {boolean} [props.open=false] - Controlado externo
 * @param {function} [props.onOpenChange=()=>{}]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.placeholder="Type a command..."]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export default function CommandPalette(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    controlledOpen = _ref.open,
    _ref$onOpenChange = _ref.onOpenChange,
    onOpenChange = _ref$onOpenChange === void 0 ? function () {} : _ref$onOpenChange,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Type a command or search..." : _ref$placeholder,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    internalOpen = _useState2[0],
    setInternalOpen = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    query = _useState4[0],
    setQuery = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    activeIndex = _useState6[0],
    setActiveIndex = _useState6[1];
  var isControlled = typeof controlledOpen === "boolean";
  var open = isControlled ? controlledOpen : internalOpen;
  var setOpen = function setOpen(v) {
    if (!isControlled) setInternalOpen(v);
    onOpenChange(v);
  };
  useEffect(function () {
    var onKey = function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return function () {
      return window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  var filtered = useMemo(function () {
    if (!query) return items;
    var q = query.toLowerCase();
    return items.filter(function (i) {
      return i.label.toLowerCase().includes(q) || i.id.toLowerCase().includes(q);
    });
  }, [items, query]);
  useEffect(function () {
    return setActiveIndex(0);
  }, [query]);
  var handleSelect = function handleSelect(item) {
    var _item$onSelect;
    (_item$onSelect = item.onSelect) === null || _item$onSelect === void 0 || _item$onSelect.call(item, item);
    setOpen(false);
    setQuery("");
  };
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [!isControlled && /*#__PURE__*/_jsxs("button", {
      onClick: function onClick() {
        return setOpen(true);
      },
      className: cn("flex items-center gap-2 px-3 py-2 rounded-xl border text-sm transition-colors", darkMode ? "bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-200" : "bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-900 shadow-sm", className),
      style: style,
      children: [/*#__PURE__*/_jsx(Search, {
        size: 14
      }), /*#__PURE__*/_jsx("span", {
        className: "hidden sm:inline",
        children: placeholder
      }), /*#__PURE__*/_jsxs("span", {
        className: cn("ml-2 hidden sm:flex items-center gap-1 text-[10px] px-1.5 py-1 rounded border font-mono", darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"),
        children: [/*#__PURE__*/_jsx(Command, {
          size: 10
        }), " K"]
      })]
    }), /*#__PURE__*/_jsx(AnimatePresence, {
      children: open && /*#__PURE__*/_jsxs(motion.div, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        className: "fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] p-4",
        children: [/*#__PURE__*/_jsx("div", {
          className: "absolute inset-0 backdrop-blur-md bg-black/40",
          onClick: function onClick() {
            return setOpen(false);
          }
        }), /*#__PURE__*/_jsxs(motion.div, {
          initial: {
            opacity: 0,
            scale: 0.96,
            y: 10
          },
          animate: {
            opacity: 1,
            scale: 1,
            y: 0
          },
          exit: {
            opacity: 0,
            scale: 0.96,
            y: 10
          },
          transition: {
            type: "spring",
            damping: 25,
            stiffness: 300
          },
          className: cn("relative w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden", darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"),
          children: [/*#__PURE__*/_jsxs("div", {
            className: cn("flex items-center gap-3 px-4 h-14 border-b", darkMode ? "border-gray-800" : "border-gray-100"),
            children: [/*#__PURE__*/_jsx(Search, {
              size: 18,
              className: darkMode ? "text-gray-500" : "text-gray-400"
            }), /*#__PURE__*/_jsx("input", {
              autoFocus: true,
              value: query,
              onChange: function onChange(e) {
                return setQuery(e.target.value);
              },
              onKeyDown: function onKeyDown(e) {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActiveIndex(function (i) {
                    return Math.min(i + 1, filtered.length - 1);
                  });
                }
                if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActiveIndex(function (i) {
                    return Math.max(i - 1, 0);
                  });
                }
                if (e.key === "Enter" && filtered[activeIndex]) handleSelect(filtered[activeIndex]);
              },
              placeholder: placeholder,
              className: cn("flex-1 bg-transparent outline-none text-sm", darkMode ? "placeholder:text-gray-600 text-white" : "placeholder:text-gray-400 text-gray-900")
            }), /*#__PURE__*/_jsx("span", {
              className: cn("hidden sm:flex text-[10px] px-1.5 py-1 rounded border", darkMode ? "bg-gray-800 border-gray-700 text-gray-500" : "bg-gray-50 border-gray-200 text-gray-400"),
              children: "ESC"
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "max-h-80 overflow-y-auto p-2",
            children: filtered.length === 0 ? /*#__PURE__*/_jsxs("div", {
              className: cn("text-center py-8 text-sm", darkMode ? "text-gray-500" : "text-gray-400"),
              children: ["No results for \"", query, "\""]
            }) : filtered.map(function (item, i) {
              return /*#__PURE__*/_jsxs("button", {
                onMouseEnter: function onMouseEnter() {
                  return setActiveIndex(i);
                },
                onClick: function onClick() {
                  return handleSelect(item);
                },
                className: cn("w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors text-left", i === activeIndex ? darkMode ? "bg-white text-black" : "bg-black text-white" : darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-50"),
                children: [/*#__PURE__*/_jsxs("span", {
                  className: "flex items-center gap-3",
                  children: [item.icon && /*#__PURE__*/_jsx("span", {
                    className: cn("w-8 h-8 rounded-lg flex items-center justify-center", i === activeIndex ? darkMode ? "bg-black/10" : "bg-white/10" : darkMode ? "bg-gray-800" : "bg-gray-100"),
                    children: item.icon
                  }), item.label]
                }), /*#__PURE__*/_jsxs("span", {
                  className: "flex items-center gap-2",
                  children: [item.shortcut && /*#__PURE__*/_jsx("span", {
                    className: cn("text-[10px] px-1.5 py-1 rounded font-mono", i === activeIndex ? "bg-white/20" : darkMode ? "bg-gray-800 border border-gray-700" : "bg-gray-100 border border-gray-200"),
                    children: item.shortcut
                  }), i === activeIndex && /*#__PURE__*/_jsx(CornerDownLeft, {
                    size: 12,
                    className: "opacity-60"
                  })]
                })]
              }, item.id);
            })
          }), /*#__PURE__*/_jsxs("div", {
            className: cn("flex items-center justify-between px-4 py-2 text-[10px] border-t", darkMode ? "bg-gray-950 border-gray-800 text-gray-600" : "bg-gray-50 border-gray-100 text-gray-400"),
            children: [/*#__PURE__*/_jsxs("span", {
              className: "flex items-center gap-1",
              children: [/*#__PURE__*/_jsx("span", {
                className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
              }), " ", filtered.length, " commands"]
            }), /*#__PURE__*/_jsx("span", {
              children: "\u2191\u2193 Navigate \u2022 \u21B5 Select"
            })]
          })]
        })]
      })
    })]
  });
}