"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from "react";
import { ButtonCard, CardProfile, Activities, TreeTriangle, Tree, GiftBox, CatLoader, BorderImage, TextMasking, MagneticDock, InteractiveLens, MorphingSearch, ElasticSlider, GlassStack, MagneticButton, SwipeToConfirm, FluidTabs, PerspectiveCard, InteractiveAccordion } from "../components";
import { Sun, Moon, Home, Search, Settings, User, Bell, Rocket } from "lucide-react";
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
      className: "mb-24",
      children: [/*#__PURE__*/_jsx("h2", {
        className: "text-4xl font-black mb-12 pb-4 border-b-4 tracking-tighter uppercase ".concat(darkMode ? 'text-white border-gray-800' : 'text-gray-900 border-gray-100'),
        children: title
      }), /*#__PURE__*/_jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start",
        children: children
      })]
    });
  };
  var ComponentWrapper = function ComponentWrapper(_ref2) {
    var name = _ref2.name,
      children = _ref2.children,
      _ref2$fullWidth = _ref2.fullWidth,
      fullWidth = _ref2$fullWidth === void 0 ? false : _ref2$fullWidth,
      _ref2$description = _ref2.description,
      description = _ref2$description === void 0 ? "" : _ref2$description;
    return /*#__PURE__*/_jsxs("div", {
      className: "flex flex-col gap-6 ".concat(fullWidth ? 'md:col-span-2 lg:col-span-3' : ''),
      children: [/*#__PURE__*/_jsxs("div", {
        className: "flex flex-col gap-2",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-2 h-2 rounded-full ".concat(darkMode ? 'bg-blue-400' : 'bg-blue-600')
          }), /*#__PURE__*/_jsx("span", {
            className: "text-sm font-black uppercase tracking-[0.2em] ".concat(darkMode ? 'text-blue-400' : 'text-blue-600'),
            children: name
          })]
        }), description && /*#__PURE__*/_jsx("p", {
          className: "text-xs font-medium leading-relaxed ".concat(darkMode ? 'text-gray-500' : 'text-gray-400'),
          children: description
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "p-12 rounded-[2.5rem] border transition-all duration-700 ".concat(darkMode ? 'bg-gray-900/40 border-gray-800 hover:border-gray-700 shadow-2xl shadow-black/50' : 'bg-white border-gray-100 shadow-2xl shadow-gray-200/40 hover:shadow-gray-200/60'),
        children: children
      })]
    });
  };
  var dockItems = [{
    icon: /*#__PURE__*/_jsx(Home, {
      size: 20
    }),
    label: "Home",
    onClick: function onClick() {
      return console.log("Home");
    }
  }, {
    icon: /*#__PURE__*/_jsx(Search, {
      size: 20
    }),
    label: "Search",
    onClick: function onClick() {
      return console.log("Search");
    }
  }, {
    icon: /*#__PURE__*/_jsx(User, {
      size: 20
    }),
    label: "Profile",
    onClick: function onClick() {
      return console.log("Profile");
    }
  }, {
    icon: /*#__PURE__*/_jsx(Settings, {
      size: 20
    }),
    label: "Settings",
    onClick: function onClick() {
      return console.log("Settings");
    }
  }];
  var accordionItems = [{
    id: "1",
    title: "Modern Architecture",
    content: "Built with React 19 and Framer Motion for the best developer experience and performance."
  }, {
    id: "2",
    title: "Clean Design System",
    content: "Every component follows a strict minimal aesthetic that adapts to your project's brand."
  }, {
    id: "3",
    title: "Fully Accessible",
    content: "Interactive elements are designed with focus states and semantic HTML in mind."
  }];
  var tabs = [{
    id: "design",
    label: "Design"
  }, {
    id: "motion",
    label: "Motion"
  }, {
    id: "code",
    label: "Code"
  }];
  var glassItems = [{
    title: "Dynamic Interaction",
    content: "Experience fluid motion and responsive feedback with our new component suite."
  }, {
    title: "Modern Aesthetics",
    content: "Clean lines, glassmorphism, and minimal design that fits any contemporary project."
  }, {
    title: "Highly Customizable",
    content: "Every prop is exposed, giving you full control over behavior and visual style."
  }];
  return /*#__PURE__*/_jsxs("main", {
    className: "min-h-screen transition-colors duration-700 ".concat(darkMode ? 'bg-black text-white' : 'bg-[#FDFDFD] text-gray-900'),
    children: [/*#__PURE__*/_jsx("header", {
      className: "sticky top-0 z-[100] backdrop-blur-2xl border-b transition-colors duration-500 ".concat(darkMode ? 'bg-black/80 border-gray-900' : 'bg-white/80 border-gray-100'),
      children: /*#__PURE__*/_jsxs("div", {
        className: "max-w-7xl mx-auto px-10 py-6 flex justify-between items-center",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xl ".concat(darkMode ? 'bg-white text-black' : 'bg-black text-white shadow-lg'),
            children: "I"
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("h1", {
              className: "text-xl font-black tracking-tighter uppercase leading-none",
              children: "InteraUI"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-[10px] font-bold uppercase tracking-[0.4em] mt-1 ".concat(darkMode ? 'text-gray-500' : 'text-gray-400'),
              children: "Premium Library v2.0"
            })]
          })]
        }), /*#__PURE__*/_jsx("button", {
          onClick: toggleDarkMode,
          className: "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ".concat(darkMode ? 'bg-gray-900 text-yellow-400 hover:bg-gray-800' : 'bg-gray-100 text-slate-900 hover:bg-gray-200 shadow-sm'),
          children: darkMode ? /*#__PURE__*/_jsx(Sun, {
            size: 20
          }) : /*#__PURE__*/_jsx(Moon, {
            size: 20
          })
        })]
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: "max-w-7xl mx-auto px-10 py-24",
      children: [/*#__PURE__*/_jsxs(Section, {
        title: "Next-Gen Interactions",
        children: [/*#__PURE__*/_jsx(ComponentWrapper, {
          name: "MagneticButton",
          description: "A button that pulls towards the cursor with organic physics.",
          children: /*#__PURE__*/_jsx("div", {
            className: "flex justify-center py-6",
            children: /*#__PURE__*/_jsx(MagneticButton, {
              darkMode: darkMode,
              children: "EXPLORE NOW"
            })
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "SwipeToConfirm",
          description: "Swipe seguro para acciones cr\xEDticas. Librer\xEDa no hace alert por defecto \u2014 delega a tu onConfirm.",
          children: /*#__PURE__*/_jsx("div", {
            className: "flex justify-center py-6",
            children: /*#__PURE__*/_jsx(SwipeToConfirm, {
              darkMode: darkMode,
              onConfirm: function onConfirm() {
                return console.log("Confirmed!");
              },
              resetDelay: 3000
            })
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "FluidTabs",
          description: "Tabs with a morphing background indicator that follows the active item.",
          children: /*#__PURE__*/_jsx("div", {
            className: "flex justify-center py-6",
            children: /*#__PURE__*/_jsx(FluidTabs, {
              tabs: tabs,
              darkMode: darkMode
            })
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "PerspectiveCard",
          description: "A 3D tilting card that responds to mouse position with depth.",
          children: /*#__PURE__*/_jsx("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/_jsxs(PerspectiveCard, {
              darkMode: darkMode,
              children: [/*#__PURE__*/_jsx(Rocket, {
                size: 48,
                className: darkMode ? "text-white" : "text-black"
              }), /*#__PURE__*/_jsx("h3", {
                className: "text-xl font-black mt-4",
                children: "3D PERSPECTIVE"
              }), /*#__PURE__*/_jsx("p", {
                className: "text-xs opacity-50 px-6",
                children: "Hover to experience depth and light interaction"
              })]
            })
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "InteractiveAccordion",
          description: "A fluid accordion with spring animations and morphing icons.",
          fullWidth: true,
          children: /*#__PURE__*/_jsx("div", {
            className: "flex justify-center py-6",
            children: /*#__PURE__*/_jsx(InteractiveAccordion, {
              items: accordionItems,
              darkMode: darkMode
            })
          })
        })]
      }), /*#__PURE__*/_jsxs(Section, {
        title: "Interactive Suite",
        children: [/*#__PURE__*/_jsx(ComponentWrapper, {
          name: "MagneticDock",
          description: "Magnification dock for high-end navigation.",
          fullWidth: true,
          children: /*#__PURE__*/_jsx("div", {
            className: "flex justify-center py-10",
            children: /*#__PURE__*/_jsx(MagneticDock, {
              items: dockItems,
              darkMode: darkMode
            })
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "InteractiveLens",
          description: "Follow-mouse lens to reveal hidden layers.",
          children: /*#__PURE__*/_jsx(InteractiveLens, {
            darkMode: darkMode,
            background: /*#__PURE__*/_jsx("div", {
              className: "w-full aspect-video bg-zinc-900 flex items-center justify-center text-zinc-800 text-6xl font-black italic",
              children: "DARK"
            }),
            children: /*#__PURE__*/_jsx("div", {
              className: "w-full aspect-video bg-white flex items-center justify-center text-black text-6xl font-black italic",
              children: "LIGHT"
            })
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "MorphingSearch",
          description: "Search icon that expands into a full input field.",
          children: /*#__PURE__*/_jsx("div", {
            className: "py-10",
            children: /*#__PURE__*/_jsx(MorphingSearch, {
              darkMode: darkMode
            })
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "ElasticSlider",
          description: "Numerical slider with elastic physics.",
          children: /*#__PURE__*/_jsx("div", {
            className: "py-5",
            children: /*#__PURE__*/_jsx(ElasticSlider, {
              darkMode: darkMode
            })
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "GlassStack",
          description: "3D perspective card stack with smooth transitions.",
          fullWidth: true,
          children: /*#__PURE__*/_jsx("div", {
            className: "py-10 flex justify-center bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-3xl",
            children: /*#__PURE__*/_jsx(GlassStack, {
              items: glassItems,
              darkMode: darkMode
            })
          })
        })]
      }), /*#__PURE__*/_jsxs(Section, {
        title: "Classic Components",
        children: [/*#__PURE__*/_jsx(ComponentWrapper, {
          name: "CardProfile",
          description: "Clean profile card with animated border.",
          children: /*#__PURE__*/_jsx(CardProfile, {
            darkMode: darkMode
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "ButtonCard",
          description: "Interactive button that expands into a login form.",
          children: /*#__PURE__*/_jsx(ButtonCard, {
            darkMode: darkMode,
            principalButton: "Get Started"
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "Activities",
          description: "Stackable list of items with expand/collapse logic.",
          children: /*#__PURE__*/_jsx(Activities, {
            darkMode: darkMode
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "CatLoader",
          description: "SVG-based animation for loading states.",
          children: /*#__PURE__*/_jsx(CatLoader, {})
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "GiftBox",
          description: "Interactive 3D gift box with reveal animation.",
          children: /*#__PURE__*/_jsx(GiftBox, {
            message: "InteraUI is Awesome!"
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "BorderImage",
          description: "Avatar wrapper with animated gradient borders.",
          children: /*#__PURE__*/_jsx("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/_jsx(BorderImage, {
              darkMode: darkMode,
              image: "/img/cat.png"
            })
          })
        })]
      }), /*#__PURE__*/_jsxs(Section, {
        title: "Visual & Effects",
        children: [/*#__PURE__*/_jsx(ComponentWrapper, {
          name: "TextMasking",
          description: "Typography with dynamic image background masking.",
          fullWidth: true,
          children: /*#__PURE__*/_jsx("div", {
            className: "flex justify-center py-10",
            children: /*#__PURE__*/_jsx(TextMasking, {
              title: "FUTURE UI",
              image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            })
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "TreeTriangle",
          description: "Geometric particle tree for seasonal decorations.",
          fullWidth: true,
          children: /*#__PURE__*/_jsx("div", {
            className: "h-[450px] overflow-hidden relative bg-slate-950 rounded-[2.5rem] border border-white/5 shadow-2xl",
            children: /*#__PURE__*/_jsx(TreeTriangle, {})
          })
        }), /*#__PURE__*/_jsx(ComponentWrapper, {
          name: "Tree",
          description: "Complex particle system with organic movement.",
          fullWidth: true,
          children: /*#__PURE__*/_jsx("div", {
            className: "h-[450px] overflow-hidden relative bg-slate-950 rounded-[2.5rem] border border-white/5 shadow-2xl",
            children: /*#__PURE__*/_jsx(Tree, {})
          })
        })]
      })]
    }), /*#__PURE__*/_jsx("footer", {
      className: "border-t py-24 transition-colors duration-500 ".concat(darkMode ? 'border-gray-900 text-gray-500' : 'border-gray-100 text-gray-400'),
      children: /*#__PURE__*/_jsxs("div", {
        className: "max-w-7xl mx-auto px-10 flex flex-col items-center gap-6",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black ".concat(darkMode ? 'bg-white text-black' : 'bg-black text-white'),
            children: "I"
          }), /*#__PURE__*/_jsx("span", {
            className: "text-base font-black tracking-tighter uppercase",
            children: "InteraUI"
          })]
        }), /*#__PURE__*/_jsx("p", {
          className: "text-[10px] font-bold uppercase tracking-[0.5em] text-center max-w-xs leading-loose",
          children: "Redefining interactive design systems for the modern web."
        })]
      })
    })]
  });
}