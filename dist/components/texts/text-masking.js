"use client";

/**
 * @param {Object} props
 * @param {string | null} [props.title=null]
 * @param {string | null} [props.image=null]
 */
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useState, useEffect } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var TextMasking = function TextMasking(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$image = _ref.image,
    image = _ref$image === void 0 ? null : _ref$image;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  useEffect(function () {
    if (image) {
      var img = new Image();
      img.src = image;
      img.onload = function () {
        return setLoaded(true);
      };
    }
  }, [image]);
  return /*#__PURE__*/_jsx("div", {
    className: "imageMark",
    style: {
      backgroundImage: image ? "url(".concat(image, ")") : 'none',
      backgroundSize: 'cover',
      objectFit: 'cover',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    },
    children: /*#__PURE__*/_jsx("h1", {
      className: "text-6xl font-extrabold py-2",
      children: title !== null && title !== void 0 ? title : "Text ♥️ ♥️ Masking"
    })
  });
};
export default TextMasking;