"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * TrailBeam — línea de progreso de scroll con pulso luminoso.
 * Género "tracing beam / timeline": versión Intera minimal —
 * track tenue + beam con gradiente + orbe que viaja con el scroll.
 * Pensado para envolver storytelling / features. Código original.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function TrailBeam(_ref) {
  var children = _ref.children,
    _ref$steps = _ref.steps,
    steps = _ref$steps === void 0 ? [] : _ref$steps,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$accent = _ref.accent,
    accent = _ref$accent === void 0 ? "from-violet-500 via-fuchsia-400 to-cyan-300" : _ref$accent,
    _ref$cardClassName = _ref.cardClassName,
    cardClassName = _ref$cardClassName === void 0 ? "" : _ref$cardClassName,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var ref = useRef(null);
  var _useScroll = useScroll({
      target: ref,
      offset: ["start 0.7", "end 0.55"]
    }),
    scrollYProgress = _useScroll.scrollYProgress;
  var smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24
  });
  var orbTop = useTransform(smooth, [0, 1], ["0%", "100%"]);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    pct = _useState2[0],
    setPct = _useState2[1];
  useEffect(function () {
    return smooth.on("change", function (v) {
      return setPct(Math.round(v * 100));
    });
  }, [smooth]);
  var fallback = [{
    title: "Descubre",
    content: "El haz despierta cuando entras a la zona."
  }, {
    title: "Explora",
    content: "Cada paso enciende el gradiente a medida que bajas."
  }, {
    title: "Domina",
    content: "El orbe llega al 100% y todo queda iluminado."
  }];
  var hasKids = React.Children.count(children) > 0;
  var data = steps.length ? steps : fallback;
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    style: style,
    className: cn("relative w-full min-w-0 max-w-full pl-10 sm:pl-14", className),
    children: [/*#__PURE__*/_jsx("div", {
      className: cn("absolute left-[13px] sm:left-[19px] top-2 bottom-2 w-[2px] rounded-full", darkMode ? "bg-white/10" : "bg-black/10")
    }), /*#__PURE__*/_jsx(motion.div, {
      style: {
        scaleY: smooth,
        transformOrigin: "top"
      },
      className: cn("absolute left-[13px] sm:left-[19px] top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b", accent)
    }), /*#__PURE__*/_jsx(motion.div, {
      style: {
        top: orbTop
      },
      className: "absolute left-[13px] sm:left-[19px] z-10",
      children: /*#__PURE__*/_jsxs("div", {
        className: "relative -translate-x-1/2 -translate-y-1/2",
        children: [/*#__PURE__*/_jsx("div", {
          className: "w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 p-[2px] shadow-[0_0_24px_rgba(139,92,246,0.7)]",
          children: /*#__PURE__*/_jsx("div", {
            className: cn("w-full h-full rounded-full flex items-center justify-center text-[9px] font-black", darkMode ? "bg-black text-white" : "bg-white text-black"),
            children: pct
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "absolute inset-0 -z-10 rounded-full bg-violet-500/40 blur-xl scale-150 animate-ping",
          style: {
            animationDuration: "2.2s"
          }
        })]
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "space-y-6 sm:space-y-8 pb-4 min-w-0",
      children: hasKids ? React.Children.map(children, function (c, i) {
        return /*#__PURE__*/_jsx(Step, {
          index: i,
          darkMode: darkMode,
          cardClassName: cardClassName,
          children: c
        });
      }) : data.map(function (s, i) {
        return /*#__PURE__*/_jsx(Step, {
          index: i,
          darkMode: darkMode,
          cardClassName: cardClassName,
          title: s.title,
          children: s.content
        }, i);
      })
    })]
  });
}
function Step(_ref2) {
  var index = _ref2.index,
    title = _ref2.title,
    children = _ref2.children,
    darkMode = _ref2.darkMode,
    _ref2$cardClassName = _ref2.cardClassName,
    cardClassName = _ref2$cardClassName === void 0 ? "" : _ref2$cardClassName;
  return /*#__PURE__*/_jsxs(motion.div, {
    initial: {
      opacity: 0,
      x: 26
    },
    whileInView: {
      opacity: 1,
      x: 0
    },
    viewport: {
      once: true,
      margin: "-60px"
    },
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18
    },
    className: cn("relative rounded-[1.6rem] border p-5 sm:p-6 transition-colors min-w-0", darkMode ? "bg-[#0c0c13] border-white/10 hover:border-white/25" : "bg-white border-black/10 shadow-sm hover:shadow-md", cardClassName),
    children: [/*#__PURE__*/_jsx("div", {
      className: cn("absolute -left-10 sm:-left-14 top-6 w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-black", darkMode ? "bg-black border-violet-400 text-white" : "bg-white border-violet-500 text-black"),
      children: index + 1
    }), title && /*#__PURE__*/_jsx("h4", {
      className: cn("font-black tracking-tight mb-1", darkMode ? "text-white" : "text-black"),
      children: title
    }), /*#__PURE__*/_jsx("div", {
      className: cn("text-sm leading-relaxed", darkMode ? "text-white/60" : "text-black/60"),
      children: children
    })]
  });
}