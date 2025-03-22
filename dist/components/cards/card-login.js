import { Mail, Lock } from 'lucide-react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var CardLogin = function CardLogin(_ref) {
  var isOpen = _ref.isOpen;
  return /*#__PURE__*/_jsx("div", {
    className: "\n          absolute\n          left-1/2 top-1/2\n          -translate-x-1/2 \n          bg-gradient-to-b from-purple-50 to-white\n          rounded-2xl\n          p-6\n          transform\n          transition-all duration-300 ease-out\n          shadow-[0_0_40px_rgba(168,85,247,0.15)]\n          backdrop-blur-sm\n          ".concat(isOpen ? 'opacity-100 -translate-y-1/2 scale-100' : 'opacity-0 -translate-y-[40%] scale-95 pointer-events-none', "\n          min-w-[320px]\n          z-50\n        "),
    children: /*#__PURE__*/_jsxs("div", {
      className: "space-y-5",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "text-center",
        children: [/*#__PURE__*/_jsx("h2", {
          className: "text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent",
          children: "Welcome Back"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-gray-500 text-sm mt-1",
          children: "Sign in to continue"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "space-y-3",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "relative group",
          children: [/*#__PURE__*/_jsx(Mail, {
            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 transition-colors duration-200 group-focus-within:text-purple-600",
            size: 18
          }), /*#__PURE__*/_jsx("input", {
            type: "email",
            placeholder: "Email",
            className: "w-full pl-10 pr-4 py-2.5 bg-purple-50/50 border border-purple-100 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "relative group",
          children: [/*#__PURE__*/_jsx(Lock, {
            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 transition-colors duration-200 group-focus-within:text-purple-600",
            size: 18
          }), /*#__PURE__*/_jsx("input", {
            type: "password",
            placeholder: "Password",
            className: "w-full pl-10 pr-4 py-2.5 bg-purple-50/50 border border-purple-100 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm"
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "flex justify-between items-center text-sm",
        children: [/*#__PURE__*/_jsxs("label", {
          className: "flex items-center text-gray-600",
          children: [/*#__PURE__*/_jsx("input", {
            type: "checkbox",
            className: "mr-2 rounded border-purple-200 text-purple-600 focus:ring-purple-500"
          }), "Remember me"]
        }), /*#__PURE__*/_jsx("a", {
          href: "#",
          className: "text-purple-600 hover:text-purple-700 font-medium",
          children: "Forgot?"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "space-y-2.5",
        children: [/*#__PURE__*/_jsx("button", {
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          className: "w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-2.5 rounded-xl hover:from-purple-700 hover:to-purple-600 transition-all duration-200 font-medium shadow-lg shadow-purple-500/20",
          children: "Sign In"
        }), /*#__PURE__*/_jsx("button", {
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          className: "w-full bg-purple-50 text-purple-600 py-2.5 rounded-xl hover:bg-purple-100 transition-colors duration-200 font-medium",
          children: "Create Account"
        })]
      })]
    })
  });
};
export default CardLogin;