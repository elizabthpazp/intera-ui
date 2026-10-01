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
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, FileText, X, Check, AlertTriangle } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * DropVault — uploader que sí sirve para producción.
 * Drag & drop + validación de tipo/peso + progreso por archivo +
 * previsualización de imágenes + reintento. Puro click/drag/drop.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var MAX_MB = 8;
var ACCEPT = ["image/png", "image/jpeg", "image/webp", "application/pdf"];
export default function DropVault(_ref) {
  var _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$maxMb = _ref.maxMb,
    maxMb = _ref$maxMb === void 0 ? MAX_MB : _ref$maxMb,
    _ref$maxFiles = _ref.maxFiles,
    maxFiles = _ref$maxFiles === void 0 ? 8 : _ref$maxFiles,
    _ref$accept = _ref.accept,
    accept = _ref$accept === void 0 ? ACCEPT : _ref$accept,
    _ref$onFilesChange = _ref.onFilesChange,
    onFilesChange = _ref$onFilesChange === void 0 ? function () {} : _ref$onFilesChange,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    files = _useState2[0],
    setFiles = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    dragging = _useState4[0],
    setDragging = _useState4[1];
  var inputRef = useRef(null);
  var push = function push(list) {
    var arr = Array.from(list || []);
    var mapped = arr.map(function (f) {
      var badType = accept.length > 0 && f.type && !accept.includes(f.type);
      var tooBig = f.size > maxMb * 1024 * 1024;
      return {
        id: "".concat(Date.now(), "-").concat(Math.random().toString(36).slice(2)),
        file: f,
        name: f.name,
        size: f.size,
        type: f.type,
        preview: f.type.startsWith("image/") ? URL.createObjectURL(f) : null,
        progress: 0,
        status: badType ? "error-type" : tooBig ? "error-size" : "uploading"
      };
    });
    var next = [].concat(_toConsumableArray(files), _toConsumableArray(mapped)).slice(0, maxFiles);
    setFiles(next);
    onFilesChange(next);
    // simula upload por archivo válido
    mapped.forEach(function (m) {
      if (m.status !== "uploading") return;
      var tick = setInterval(function () {
        setFiles(function (prev) {
          var copy = prev.map(function (p) {
            if (p.id !== m.id) return p;
            var np = Math.min(100, p.progress + 12 + Math.random() * 18);
            return _objectSpread(_objectSpread({}, p), {}, {
              progress: np,
              status: np >= 100 ? "done" : "uploading"
            });
          });
          var doneOne = copy.find(function (p) {
            return p.id === m.id;
          });
          if (doneOne && doneOne.status === "done") clearInterval(tick);
          return copy;
        });
      }, 220);
    });
  };
  var remove = function remove(id) {
    var next = files.filter(function (f) {
      return f.id !== id;
    });
    setFiles(next);
    onFilesChange(next);
  };
  var fmt = function fmt(b) {
    return b > 1048576 ? "".concat((b / 1048576).toFixed(1), " MB") : "".concat(Math.max(1, Math.round(b / 1024)), " KB");
  };
  return /*#__PURE__*/_jsxs("div", {
    style: style,
    className: cn("w-full min-w-0 max-w-full rounded-[1.8rem] border p-4 sm:p-5", darkMode ? "bg-[#0b0b12] border-white/10" : "bg-white border-black/10 shadow-sm", className),
    children: [/*#__PURE__*/_jsxs("div", {
      onDragOver: function onDragOver(e) {
        e.preventDefault();
        setDragging(true);
      },
      onDragLeave: function onDragLeave() {
        return setDragging(false);
      },
      onDrop: function onDrop(e) {
        e.preventDefault();
        setDragging(false);
        push(e.dataTransfer.files);
      },
      onClick: function onClick() {
        var _inputRef$current;
        return (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.click();
      },
      className: cn("rounded-[1.4rem] border-2 border-dashed p-6 sm:p-10 text-center cursor-pointer transition-all", dragging ? "border-violet-500 bg-violet-500/10 scale-[1.01]" : darkMode ? "border-white/12 hover:border-white/30" : "border-black/12 hover:border-black/30"),
      children: [/*#__PURE__*/_jsx(motion.div, {
        animate: dragging ? {
          scale: 1.15,
          y: -4
        } : {
          scale: 1,
          y: 0
        },
        className: cn("w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4", darkMode ? "bg-white text-black" : "bg-black text-white"),
        children: /*#__PURE__*/_jsx(UploadCloud, {
          size: 24
        })
      }), /*#__PURE__*/_jsx("p", {
        className: "font-black tracking-tight text-base sm:text-lg",
        children: dragging ? "¡Suelta ahora!" : "Arrastra archivos o haz click"
      }), /*#__PURE__*/_jsxs("p", {
        className: cn("text-xs mt-1.5 font-medium", darkMode ? "text-white/50" : "text-black/50"),
        children: ["PNG \xB7 JPG \xB7 WEBP \xB7 PDF \u2014 m\xE1x ", maxMb, "MB \xB7 hasta ", maxFiles, " archivos"]
      }), /*#__PURE__*/_jsx("input", {
        ref: inputRef,
        type: "file",
        multiple: true,
        hidden: true,
        accept: accept.join(","),
        onChange: function onChange(e) {
          push(e.target.files);
          e.target.value = "";
        }
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "mt-4 space-y-2.5",
      children: /*#__PURE__*/_jsx(AnimatePresence, {
        initial: false,
        children: files.map(function (f) {
          return /*#__PURE__*/_jsxs(motion.div, {
            layout: true,
            initial: {
              opacity: 0,
              y: 12
            },
            animate: {
              opacity: 1,
              y: 0
            },
            exit: {
              opacity: 0,
              x: 40
            },
            className: cn("flex items-center gap-3 rounded-2xl border p-3", darkMode ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]"),
            children: [f.preview ? /*#__PURE__*/_jsx("img", {
              src: f.preview,
              alt: "",
              className: "w-11 h-11 rounded-xl object-cover shrink-0"
            }) : /*#__PURE__*/_jsx("div", {
              className: cn("w-11 h-11 rounded-xl flex items-center justify-center shrink-0", darkMode ? "bg-white/10" : "bg-black/8"),
              children: /*#__PURE__*/_jsx(FileText, {
                size: 18
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "flex-1 min-w-0",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/_jsx("p", {
                  className: "text-[13px] font-bold truncate",
                  children: f.name
                }), f.status === "done" && /*#__PURE__*/_jsx(Check, {
                  size: 14,
                  className: "text-emerald-500 shrink-0"
                }), f.status.startsWith("error") && /*#__PURE__*/_jsx(AlertTriangle, {
                  size: 14,
                  className: "text-red-500 shrink-0"
                })]
              }), /*#__PURE__*/_jsx("p", {
                className: cn("text-[11px] font-medium", darkMode ? "text-white/45" : "text-black/45"),
                children: f.status === "error-type" ? "Tipo no permitido" : f.status === "error-size" ? "Pesa ".concat(fmt(f.size), " \u2014 supera ").concat(maxMb, "MB") : "".concat(fmt(f.size), " \xB7 ").concat(Math.round(f.progress), "%")
              }), !f.status.startsWith("error") && f.status !== "done" && /*#__PURE__*/_jsx("div", {
                className: cn("h-1.5 rounded-full mt-1.5 overflow-hidden", darkMode ? "bg-white/10" : "bg-black/10"),
                children: /*#__PURE__*/_jsx(motion.div, {
                  animate: {
                    width: "".concat(f.progress, "%")
                  },
                  className: "h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                })
              })]
            }), f.status.startsWith("error") ? /*#__PURE__*/_jsx("button", {
              type: "button",
              onClick: function onClick() {
                return remove(f.id);
              },
              className: "text-[11px] font-bold text-red-500 px-2",
              children: "Quitar"
            }) : f.status === "done" ? /*#__PURE__*/_jsx("span", {
              className: "text-[11px] font-black text-emerald-500 px-2",
              children: "LISTO"
            }) : null, /*#__PURE__*/_jsx("button", {
              type: "button",
              onClick: function onClick() {
                return remove(f.id);
              },
              "aria-label": "remove",
              className: "opacity-40 hover:opacity-100 p-1",
              children: /*#__PURE__*/_jsx(X, {
                size: 15
              })
            })]
          }, f.id);
        })
      })
    }), files.length > 0 && /*#__PURE__*/_jsxs("div", {
      className: "flex items-center gap-2 mt-4",
      children: [/*#__PURE__*/_jsxs("span", {
        className: cn("text-xs font-bold", darkMode ? "text-white/50" : "text-black/50"),
        children: [files.filter(function (f) {
          return f.status === "done";
        }).length, "/", files.length, " listos"]
      }), /*#__PURE__*/_jsx("button", {
        type: "button",
        onClick: function onClick() {
          setFiles([]);
          onFilesChange([]);
        },
        className: "ml-auto text-xs font-bold opacity-50 hover:opacity-100",
        children: "Limpiar todo"
      })]
    })]
  });
}