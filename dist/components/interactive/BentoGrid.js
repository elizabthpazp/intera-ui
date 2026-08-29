"use client";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array de { id, title, content, colSpan?, rowSpan?, color? }
 * @param {boolean} [props.draggable=true]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function BentoGrid(_ref) {
  var _ref$items = _ref.items,
    initial = _ref$items === void 0 ? [] : _ref$items,
    _ref$draggable = _ref.draggable,
    draggable = _ref$draggable === void 0 ? true : _ref$draggable,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var fallback = [{
    id: "1",
    title: "Analytics",
    content: "Real-time metrics with spring animations",
    colSpan: "sm:col-span-2",
    rowSpan: "",
    color: "from-violet-500 to-purple-600"
  }, {
    id: "2",
    title: "Inbox",
    content: "12 new messages",
    colSpan: "",
    rowSpan: "sm:row-span-2",
    color: "from-blue-500 to-cyan-500"
  }, {
    id: "3",
    title: "Tasks",
    content: "8 pending",
    colSpan: "",
    rowSpan: "",
    color: "from-emerald-500 to-teal-600"
  }, {
    id: "4",
    title: "Revenue",
    content: "$42,300",
    colSpan: "",
    rowSpan: "",
    color: "from-orange-500 to-pink-500"
  }, {
    id: "5",
    title: "Calendar",
    content: "3 events today",
    colSpan: "sm:col-span-2",
    rowSpan: "",
    color: "from-pink-500 to-rose-500"
  }];
  var _useState = useState(initial.length ? initial : fallback),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    dragId = _useState4[0],
    setDragId = _useState4[1];
  var onDragEnd = function onDragEnd(id) {
    setDragId(null);
  };
  var handleReorder = function handleReorder(draggedId, targetId) {
    if (draggedId === targetId) return;
    setItems(function (prev) {
      var from = prev.findIndex(function (i) {
        return i.id === draggedId;
      });
      var to = prev.findIndex(function (i) {
        return i.id === targetId;
      });
      if (from === -1 || to === -1) return prev;
      var next = _toConsumableArray(prev);
      var _next$splice = next.splice(from, 1),
        _next$splice2 = _slicedToArray(_next$splice, 1),
        moved = _next$splice2[0];
      next.splice(to, 0, moved);
      return next;
    });
  };
  return /*#__PURE__*/_jsx("div", {
    className: cn("grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-[120px] sm:auto-rows-[140px]", className),
    style: style,
    children: items.map(function (item) {
      return /*#__PURE__*/_jsxs(motion.div, {
        layout: true,
        drag: draggable,
        dragElastic: 0.4,
        dragMomentum: false,
        dragTransition: {
          power: 0.15,
          timeConstant: 200
        },
        onDragStart: function onDragStart() {
          return setDragId(item.id);
        },
        onDragEnd: function onDragEnd(_, info) {
          setDragId(null);
          // Reordenar por proximidad: busca el elemento más cercano al punto de drop
          var el = document.elementFromPoint(info.point.x, info.point.y);
          var card = el === null || el === void 0 ? void 0 : el.closest("[data-bento-id]");
          var targetId = card === null || card === void 0 ? void 0 : card.getAttribute("data-bento-id");
          if (targetId) handleReorder(item.id, targetId);
        },
        whileDrag: {
          scale: 1.06,
          zIndex: 50,
          boxShadow: "0 24px 48px rgba(0,0,0,0.22)",
          cursor: "grabbing"
        },
        "data-bento-id": item.id,
        className: cn("relative rounded-2xl p-5 border flex flex-col justify-between overflow-hidden group cursor-grab active:cursor-grabbing select-none", item.colSpan, item.rowSpan, darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200 shadow-sm hover:shadow-md", dragId === item.id && "ring-2 ring-violet-500/30"),
        transition: {
          type: "spring",
          damping: 24,
          stiffness: 280
        },
        children: [/*#__PURE__*/_jsx("div", {
          className: cn("absolute inset-0 opacity-10 bg-gradient-to-br", item.color)
        }), /*#__PURE__*/_jsxs("div", {
          className: "relative",
          children: [/*#__PURE__*/_jsx("div", {
            className: cn("w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center text-white text-xs font-black", item.color),
            children: item.title[0]
          }), /*#__PURE__*/_jsx("h4", {
            className: cn("mt-3 font-black tracking-tight", darkMode ? "text-white" : "text-gray-900"),
            children: item.title
          }), /*#__PURE__*/_jsx("p", {
            className: cn("text-xs mt-1", darkMode ? "text-gray-400" : "text-gray-500"),
            children: item.content
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "relative flex items-center justify-between",
          children: [/*#__PURE__*/_jsx("span", {
            className: cn("text-[10px] font-bold tracking-widest uppercase opacity-40", darkMode ? "text-gray-500" : "text-gray-400"),
            children: "Drag me"
          }), /*#__PURE__*/_jsx(GripVertical, {
            size: 14,
            className: cn("opacity-20 group-hover:opacity-60 transition-opacity", darkMode ? "text-white" : "text-gray-900")
          })]
        })]
      }, item.id);
    })
  });
}