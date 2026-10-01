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
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpDown, Download, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * SmartTable — tabla de datos que resuelve el admin de verdad.
 * Buscar + ordenar + filtrar por estado + seleccionar + paginar + exportar CSV.
 * Nada de hover decorativo: todo es acción (click / type) con resultado útil.
 *
 * @param {Array} [props.columns] - [{ key, label, sortable? }]
 * @param {Array} [props.data] - filas objeto
 * @param {boolean} [props.darkMode]
 * @param {number} [props.pageSize=5]
 * @param {function} [props.onSelectionChange]
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SmartTable(_ref) {
  var _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? [{
      key: "name",
      label: "Cliente",
      sortable: true
    }, {
      key: "plan",
      label: "Plan",
      sortable: true
    }, {
      key: "status",
      label: "Estado",
      sortable: true
    }, {
      key: "mrr",
      label: "MRR",
      sortable: true
    }] : _ref$columns,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [{
      id: "1",
      name: "Acme Corp",
      plan: "Scale",
      status: "active",
      mrr: 490
    }, {
      id: "2",
      name: "Loomify",
      plan: "Starter",
      status: "trial",
      mrr: 0
    }, {
      id: "3",
      name: "Nube Labs",
      plan: "Scale",
      status: "past_due",
      mrr: 290
    }, {
      id: "4",
      name: "Kubo",
      plan: "Enterprise",
      status: "active",
      mrr: 1200
    }, {
      id: "5",
      name: "Fintual",
      plan: "Starter",
      status: "canceled",
      mrr: 0
    }, {
      id: "6",
      name: "Datalab",
      plan: "Scale",
      status: "active",
      mrr: 590
    }, {
      id: "7",
      name: "Orión",
      plan: "Starter",
      status: "trial",
      mrr: 0
    }, {
      id: "8",
      name: "Pulsar",
      plan: "Enterprise",
      status: "active",
      mrr: 2400
    }] : _ref$data,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode,
    _ref$pageSize = _ref.pageSize,
    pageSize = _ref$pageSize === void 0 ? 5 : _ref$pageSize,
    _ref$onSelectionChang = _ref.onSelectionChange,
    onSelectionChange = _ref$onSelectionChang === void 0 ? function () {} : _ref$onSelectionChang,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style;
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    query = _useState2[0],
    setQuery = _useState2[1];
  var _useState3 = useState("all"),
    _useState4 = _slicedToArray(_useState3, 2),
    statusFilter = _useState4[0],
    setStatusFilter = _useState4[1];
  var _useState5 = useState({
      key: null,
      dir: 1
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    sort = _useState6[0],
    setSort = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    page = _useState8[0],
    setPage = _useState8[1];
  var _useState9 = useState(new Set()),
    _useState0 = _slicedToArray(_useState9, 2),
    selected = _useState0[0],
    setSelected = _useState0[1];
  var filtered = useMemo(function () {
    var rows = _toConsumableArray(data);
    if (query) {
      var q = query.toLowerCase();
      rows = rows.filter(function (r) {
        return Object.values(r).join(" ").toLowerCase().includes(q);
      });
    }
    if (statusFilter !== "all") rows = rows.filter(function (r) {
      return r.status === statusFilter;
    });
    if (sort.key) {
      rows.sort(function (a, b) {
        var av = a[sort.key];
        var bv = b[sort.key];
        if (typeof av === "number") return (av - bv) * sort.dir;
        return String(av).localeCompare(String(bv)) * sort.dir;
      });
    }
    return rows;
  }, [data, query, statusFilter, sort]);
  var pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  var safePage = Math.min(page, pages - 1);
  var visible = filtered.slice(safePage * pageSize, safePage * pageSize + pageSize);
  var toggleSort = function toggleSort(key) {
    setSort(function (s) {
      return s.key !== key ? {
        key: key,
        dir: 1
      } : {
        key: key,
        dir: s.dir * -1
      };
    });
  };
  var toggleRow = function toggleRow(id) {
    var next = new Set(selected);
    if (next.has(id)) next["delete"](id);else next.add(id);
    setSelected(next);
    onSelectionChange(_toConsumableArray(next));
  };
  var toggleAll = function toggleAll() {
    if (visible.every(function (r) {
      return selected.has(r.id);
    })) {
      var next = new Set(selected);
      visible.forEach(function (r) {
        return next["delete"](r.id);
      });
      setSelected(next);
      onSelectionChange(_toConsumableArray(next));
    } else {
      var _next = new Set(selected);
      visible.forEach(function (r) {
        return _next.add(r.id);
      });
      setSelected(_next);
      onSelectionChange(_toConsumableArray(_next));
    }
  };
  var exportCSV = function exportCSV() {
    var rows = filtered.length ? filtered : visible;
    var header = columns.map(function (c) {
      return c.label;
    }).join(",");
    var body = rows.map(function (r) {
      return columns.map(function (c) {
        var _r$c$key;
        return JSON.stringify((_r$c$key = r[c.key]) !== null && _r$c$key !== void 0 ? _r$c$key : "");
      }).join(",");
    }).join("\n");
    var blob = new Blob([header + "\n" + body], {
      type: "text/csv"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "intera-export.csv";
    a.click();
    URL.revokeObjectURL(url);
  };
  var statuses = ["all"].concat(_toConsumableArray(Array.from(new Set(data.map(function (d) {
    return d.status;
  })))));

  // Ventana deslizante de 5 páginas alrededor de la actual (responsive: no desborda)
  var pageWindow = function () {
    var max = 5;
    var start = Math.max(0, Math.min(safePage - 2, pages - max));
    return Array.from({
      length: Math.min(max, pages)
    }).map(function (_, i) {
      return start + i;
    });
  }();
  return /*#__PURE__*/_jsxs("div", {
    style: style,
    className: cn("w-full min-w-0 max-w-full rounded-[1.8rem] border overflow-hidden", darkMode ? "bg-[#0b0b12] border-white/10" : "bg-white border-black/10 shadow-sm", className),
    children: [/*#__PURE__*/_jsxs("div", {
      className: "flex flex-wrap items-center gap-2 p-4 border-b",
      style: {
        borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
      },
      children: [/*#__PURE__*/_jsxs("div", {
        className: cn("flex items-center gap-2 px-3 h-10 rounded-xl border flex-1 min-w-[200px]", darkMode ? "bg-white/5 border-white/10" : "bg-black/[0.03] border-black/10"),
        children: [/*#__PURE__*/_jsx(Search, {
          size: 15,
          className: "opacity-40 shrink-0"
        }), /*#__PURE__*/_jsx("input", {
          value: query,
          onChange: function onChange(e) {
            setQuery(e.target.value);
            setPage(0);
          },
          placeholder: "Buscar cliente, plan, estado\u2026",
          className: "bg-transparent outline-none text-sm w-full font-medium"
        }), query && /*#__PURE__*/_jsx("button", {
          type: "button",
          onClick: function onClick() {
            return setQuery("");
          },
          className: "text-xs font-bold opacity-50 hover:opacity-100",
          children: "\u2715"
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "flex gap-1.5 flex-wrap",
        children: statuses.map(function (s) {
          return /*#__PURE__*/_jsx("button", {
            type: "button",
            onClick: function onClick() {
              setStatusFilter(s);
              setPage(0);
            },
            className: cn("h-9 px-3 rounded-xl text-xs font-bold border transition-all", statusFilter === s ? darkMode ? "bg-white text-black border-white" : "bg-black text-white border-black" : darkMode ? "border-white/12 text-white/60 hover:text-white" : "border-black/12 text-black/60 hover:text-black"),
            children: s === "all" ? "Todos" : s.replace("_", " ")
          }, s);
        })
      }), /*#__PURE__*/_jsxs("button", {
        type: "button",
        onClick: exportCSV,
        className: cn("h-10 px-4 rounded-xl text-xs font-bold flex items-center gap-2 ml-auto", darkMode ? "bg-white text-black" : "bg-black text-white"),
        children: [/*#__PURE__*/_jsx(Download, {
          size: 14
        }), " CSV (", filtered.length, ")"]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "overflow-x-auto",
      children: [/*#__PURE__*/_jsxs("table", {
        className: "w-full text-sm min-w-[560px]",
        children: [/*#__PURE__*/_jsx("thead", {
          children: /*#__PURE__*/_jsxs("tr", {
            className: cn("text-left text-[11px] uppercase tracking-widest", darkMode ? "text-white/40" : "text-black/40"),
            children: [/*#__PURE__*/_jsx("th", {
              className: "p-4 w-10",
              children: /*#__PURE__*/_jsx("button", {
                type: "button",
                onClick: toggleAll,
                "aria-label": "select all",
                className: cn("w-5 h-5 rounded-md border flex items-center justify-center", visible.length && visible.every(function (r) {
                  return selected.has(r.id);
                }) ? "bg-violet-500 border-violet-500 text-white" : "border-current opacity-50"),
                children: visible.length && visible.every(function (r) {
                  return selected.has(r.id);
                }) ? /*#__PURE__*/_jsx(Check, {
                  size: 13
                }) : null
              })
            }), columns.map(function (c) {
              return /*#__PURE__*/_jsx("th", {
                className: "p-4 font-bold",
                children: /*#__PURE__*/_jsxs("button", {
                  type: "button",
                  onClick: function onClick() {
                    return c.sortable && toggleSort(c.key);
                  },
                  className: "flex items-center gap-1.5 hover:opacity-100 opacity-80",
                  children: [c.label, c.sortable && /*#__PURE__*/_jsx(ArrowUpDown, {
                    size: 12,
                    className: sort.key === c.key ? "text-violet-500" : "opacity-40"
                  }), sort.key === c.key && /*#__PURE__*/_jsx("span", {
                    children: sort.dir === 1 ? "↑" : "↓"
                  })]
                })
              }, c.key);
            })]
          })
        }), /*#__PURE__*/_jsx("tbody", {
          children: /*#__PURE__*/_jsx(AnimatePresence, {
            initial: false,
            children: visible.map(function (row) {
              return /*#__PURE__*/_jsxs(motion.tr, {
                layout: true,
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                exit: {
                  opacity: 0
                },
                onClick: function onClick() {
                  return toggleRow(row.id);
                },
                className: cn("border-t cursor-pointer transition-colors", darkMode ? "border-white/8 hover:bg-white/[0.04]" : "border-black/8 hover:bg-black/[0.02]", selected.has(row.id) && (darkMode ? "bg-violet-500/10" : "bg-violet-500/[0.07]")),
                children: [/*#__PURE__*/_jsx("td", {
                  className: "p-4",
                  onClick: function onClick(e) {
                    return e.stopPropagation();
                  },
                  children: /*#__PURE__*/_jsx("button", {
                    type: "button",
                    onClick: function onClick() {
                      return toggleRow(row.id);
                    },
                    "aria-label": "select row",
                    className: cn("w-5 h-5 rounded-md border flex items-center justify-center", selected.has(row.id) ? "bg-violet-500 border-violet-500 text-white" : "opacity-40"),
                    children: selected.has(row.id) ? /*#__PURE__*/_jsx(Check, {
                      size: 13
                    }) : null
                  })
                }), columns.map(function (c) {
                  return /*#__PURE__*/_jsx("td", {
                    className: cn("p-4 font-medium", darkMode ? "text-white/90" : "text-black/85"),
                    children: c.key === "status" ? /*#__PURE__*/_jsx("span", {
                      className: cn("px-2.5 py-1 rounded-full text-[11px] font-bold", row.status === "active" ? "bg-emerald-500/15 text-emerald-500" : row.status === "trial" ? "bg-blue-500/15 text-blue-500" : row.status === "past_due" ? "bg-amber-500/15 text-amber-600" : "bg-red-500/12 text-red-500"),
                      children: String(row.status).replace("_", " ")
                    }) : c.key === "mrr" ? "$".concat(Number(row.mrr).toLocaleString()) : String(row[c.key])
                  }, c.key);
                })]
              }, row.id);
            })
          })
        })]
      }), visible.length === 0 && /*#__PURE__*/_jsxs("div", {
        className: cn("p-12 text-center", darkMode ? "text-white/40" : "text-black/40"),
        children: [/*#__PURE__*/_jsx("p", {
          className: "font-black text-lg",
          children: "Sin resultados"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-sm mt-1",
          children: "Prueba con otra b\xFAsqueda o filtro."
        }), /*#__PURE__*/_jsx("button", {
          type: "button",
          onClick: function onClick() {
            setQuery("");
            setStatusFilter("all");
          },
          className: cn("mt-4 h-9 px-4 rounded-xl text-xs font-bold", darkMode ? "bg-white text-black" : "bg-black text-white"),
          children: "Limpiar filtros"
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "flex items-center gap-3 p-4 border-t flex-wrap",
      style: {
        borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
      },
      children: [/*#__PURE__*/_jsxs("span", {
        className: cn("text-xs font-bold", darkMode ? "text-white/50" : "text-black/50"),
        children: [selected.size > 0 ? "".concat(selected.size, " seleccionados") : "".concat(filtered.length, " filas"), " \xB7 p\xE1g ", safePage + 1, "/", pages]
      }), /*#__PURE__*/_jsxs("div", {
        className: "flex gap-1.5 ml-auto",
        children: [/*#__PURE__*/_jsx("button", {
          type: "button",
          disabled: safePage === 0,
          onClick: function onClick() {
            return setPage(function (p) {
              return Math.max(0, p - 1);
            });
          },
          className: "w-9 h-9 rounded-xl border flex items-center justify-center disabled:opacity-30",
          children: /*#__PURE__*/_jsx(ChevronLeft, {
            size: 15
          })
        }), pageWindow.map(function (i) {
          return /*#__PURE__*/_jsx("button", {
            type: "button",
            onClick: function onClick() {
              return setPage(i);
            },
            className: cn("w-9 h-9 rounded-xl text-xs font-black border", safePage === i ? darkMode ? "bg-white text-black border-white" : "bg-black text-white border-black" : "opacity-50"),
            children: i + 1
          }, i);
        }), /*#__PURE__*/_jsx("button", {
          type: "button",
          disabled: safePage >= pages - 1,
          onClick: function onClick() {
            return setPage(function (p) {
              return Math.min(pages - 1, p + 1);
            });
          },
          className: "w-9 h-9 rounded-xl border flex items-center justify-center disabled:opacity-30",
          children: /*#__PURE__*/_jsx(ChevronRight, {
            size: 15
          })
        })]
      })]
    })]
  });
}