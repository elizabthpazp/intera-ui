"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * FlowBoard — kanban con drag & drop real entre columnas.
 * Resuelve gestión de tareas sin backend: crear, mover (drag nativo),
 * eliminar y ver conteos. Todo es acción, nada decorativo.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var COLS = [{
  id: "todo",
  title: "Por hacer",
  dot: "bg-blue-500"
}, {
  id: "doing",
  title: "En curso",
  dot: "bg-amber-500"
}, {
  id: "done",
  title: "Listo",
  dot: "bg-emerald-500"
}];
export default function FlowBoard(_ref) {
  var _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$initial = _ref.initial,
    initial = _ref$initial === void 0 ? [{
      id: "t1",
      col: "todo",
      title: "Diseñar landing",
      tag: "Design"
    }, {
      id: "t2",
      col: "todo",
      title: "Conectar Stripe",
      tag: "Dev"
    }, {
      id: "t3",
      col: "doing",
      title: "Escribir copy hero",
      tag: "Copy"
    }, {
      id: "t4",
      col: "done",
      title: "Deploy staging",
      tag: "DevOps"
    }] : _ref$initial,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(initial),
    _useState2 = _slicedToArray(_useState, 2),
    tasks = _useState2[0],
    setTasks = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    draft = _useState4[0],
    setDraft = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    dragOver = _useState6[0],
    setDragOver = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    dragId = _useState8[0],
    setDragId = _useState8[1];
  var update = function update(next) {
    setTasks(next);
    onChange(next);
  };
  var add = function add() {
    var title = draft.trim();
    if (!title) return;
    update([].concat(_toConsumableArray(tasks), [{
      id: "t-".concat(Date.now()),
      col: "todo",
      title: title,
      tag: "Nuevo"
    }]));
    setDraft("");
  };
  var move = function move(id, col) {
    return update(tasks.map(function (t) {
      return t.id === id ? _objectSpread(_objectSpread({}, t), {}, {
        col: col
      }) : t;
    }));
  };
  var remove = function remove(id) {
    return update(tasks.filter(function (t) {
      return t.id !== id;
    }));
  };
  return /*#__PURE__*/_jsxs("div", {
    style: style,
    className: cn("w-full min-w-0 max-w-full", className),
    children: [/*#__PURE__*/_jsxs("div", {
      className: cn("flex gap-2 mb-4 rounded-2xl border p-2", darkMode ? "bg-[#0b0b12] border-white/10" : "bg-white border-black/10 shadow-sm"),
      children: [/*#__PURE__*/_jsx("input", {
        value: draft,
        onChange: function onChange(e) {
          return setDraft(e.target.value);
        },
        onKeyDown: function onKeyDown(e) {
          return e.key === "Enter" && add();
        },
        placeholder: "Nueva tarea + Enter\u2026 (ej: Revisar pricing)",
        className: "flex-1 min-w-0 bg-transparent outline-none text-sm font-medium px-3"
      }), /*#__PURE__*/_jsxs("button", {
        type: "button",
        onClick: add,
        disabled: !draft.trim(),
        className: cn("h-10 px-4 rounded-xl text-xs font-bold flex items-center gap-1.5 disabled:opacity-30", darkMode ? "bg-white text-black" : "bg-black text-white"),
        children: [/*#__PURE__*/_jsx(Plus, {
          size: 14
        }), " A\xF1adir"]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "grid gap-3 md:grid-cols-3",
      children: COLS.map(function (c) {
        var items = tasks.filter(function (t) {
          return t.col === c.id;
        });
        return /*#__PURE__*/_jsxs("div", {
          onDragOver: function onDragOver(e) {
            e.preventDefault();
            setDragOver(c.id);
          },
          onDragLeave: function onDragLeave() {
            return setDragOver(null);
          },
          onDrop: function onDrop(e) {
            e.preventDefault();
            var id = e.dataTransfer.getData("text/plain");
            if (id) move(id, c.id);
            setDragOver(null);
            setDragId(null);
          },
          className: cn("rounded-[1.6rem] border p-3 min-h-[280px] transition-all", darkMode ? "bg-[#0b0b12] border-white/10" : "bg-black/[0.02] border-black/10", dragOver === c.id && "ring-2 ring-violet-500/50 border-violet-500"),
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-2 px-2 py-2",
            children: [/*#__PURE__*/_jsx("span", {
              className: cn("w-2.5 h-2.5 rounded-full", c.dot)
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs font-black uppercase tracking-widest",
              children: c.title
            }), /*#__PURE__*/_jsx("span", {
              className: cn("ml-auto text-[11px] font-black px-2 py-0.5 rounded-full", darkMode ? "bg-white/10" : "bg-black/10"),
              children: items.length
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-2",
            children: [/*#__PURE__*/_jsx(AnimatePresence, {
              initial: false,
              children: items.map(function (t) {
                return /*#__PURE__*/_jsxs(motion.div, {
                  layout: true,
                  draggable: true,
                  onDragStart: function onDragStart(e) {
                    e.dataTransfer.setData("text/plain", t.id);
                    setDragId(t.id);
                  },
                  onDragEnd: function onDragEnd() {
                    setDragId(null);
                    setDragOver(null);
                  },
                  initial: {
                    opacity: 0,
                    scale: 0.92
                  },
                  animate: {
                    opacity: dragId === t.id ? 0.4 : 1,
                    scale: 1
                  },
                  exit: {
                    opacity: 0,
                    x: 30
                  },
                  className: cn("rounded-2xl border p-3.5 cursor-grab active:cursor-grabbing group", darkMode ? "bg-white/[0.05] border-white/10 hover:border-white/25" : "bg-white border-black/10 shadow-sm hover:shadow-md"),
                  children: [/*#__PURE__*/_jsxs("div", {
                    className: "flex items-start gap-2",
                    children: [/*#__PURE__*/_jsx("p", {
                      className: "text-[13px] font-bold leading-snug flex-1",
                      children: t.title
                    }), /*#__PURE__*/_jsx("button", {
                      type: "button",
                      onClick: function onClick() {
                        return remove(t.id);
                      },
                      "aria-label": "delete",
                      className: "opacity-60 md:opacity-0 md:group-hover:opacity-50 hover:!opacity-100 transition-opacity shrink-0 p-1 -m-1",
                      children: /*#__PURE__*/_jsx(X, {
                        size: 14
                      })
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "flex items-center gap-2 mt-2.5",
                    children: [/*#__PURE__*/_jsx("span", {
                      className: "text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-violet-500/15 text-violet-500",
                      children: t.tag
                    }), /*#__PURE__*/_jsx("span", {
                      className: cn("text-[10px] font-bold opacity-40 ml-auto"),
                      children: "drag me \u2192"
                    })]
                  })]
                }, t.id);
              })
            }), items.length === 0 && /*#__PURE__*/_jsx("p", {
              className: cn("text-center text-xs font-medium py-8 border border-dashed rounded-2xl opacity-40", darkMode ? "border-white/10" : "border-black/10"),
              children: "Arrastra tareas aqu\xED"
            })]
          })]
        }, c.id);
      })
    }), /*#__PURE__*/_jsxs("p", {
      className: cn("text-[11px] font-medium mt-3 text-center", darkMode ? "text-white/35" : "text-black/35"),
      children: [tasks.filter(function (t) {
        return t.col === "done";
      }).length, "/", tasks.length, " completadas \xB7 arrastra entre columnas, todo es local y funciona sin backend"]
    })]
  });
}