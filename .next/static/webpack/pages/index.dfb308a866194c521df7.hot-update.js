webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SEO; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/enock/GitHub/esc-portfolio-site/src/components/seo.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction SEO(_ref) {\n  var _this = this;\n\n  var _ref$description = _ref.description,\n      description = _ref$description === void 0 ? 'Escape Designs landing page' : _ref$description,\n      _ref$author = _ref.author,\n      author = _ref$author === void 0 ? 'JSM' : _ref$author,\n      meta = _ref.meta,\n      _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'Escape Designs title' : _ref$title;\n  var metaData = [{\n    name: \"description\",\n    content: description\n  }, {\n    property: \"og:title\",\n    content: title\n  }, {\n    property: \"og:description\",\n    content: description\n  }, {\n    property: \"og:type\",\n    content: \"website\"\n  }, {\n    name: \"twitter:card\",\n    content: \"summary\"\n  }, {\n    name: \"twitter:creator\",\n    content: author\n  }, {\n    name: \"twitter:title\",\n    content: title\n  }, {\n    name: \"twitter:description\",\n    content: description\n  }].concat(meta);\n  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, title), metaData.map(function (_ref2, i) {\n    var name = _ref2.name,\n        content = _ref2.content;\n    return __jsx(\"meta\", {\n      key: i,\n      name: name,\n      content: content,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }\n    });\n  }));\n}\n_c = SEO;\nSEO.defaultProps = {\n  lang: \"en\",\n  meta: []\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"SEO\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VvLmpzP2JlYjEiXSwibmFtZXMiOlsiU0VPIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJtZXRhIiwidGl0bGUiLCJtZXRhRGF0YSIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiLCJjb25jYXQiLCJtYXAiLCJpIiwiZGVmYXVsdFByb3BzIiwibGFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxPQUtaO0FBQUE7O0FBQUEsOEJBSkRDLFdBSUM7QUFBQSxNQUpEQSxXQUlDLGlDQUphLDZCQUliO0FBQUEseUJBSERDLE1BR0M7QUFBQSxNQUhEQSxNQUdDLDRCQUhRLEtBR1I7QUFBQSxNQUZEQyxJQUVDLFFBRkRBLElBRUM7QUFBQSx3QkFEREMsS0FDQztBQUFBLE1BRERBLEtBQ0MsMkJBRE8sc0JBQ1A7QUFDRCxNQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxRQUFJLGVBRE47QUFFRUMsV0FBTyxFQUFFTjtBQUZYLEdBRGUsRUFLZjtBQUNFTyxZQUFRLFlBRFY7QUFFRUQsV0FBTyxFQUFFSDtBQUZYLEdBTGUsRUFTZjtBQUNFSSxZQUFRLGtCQURWO0FBRUVELFdBQU8sRUFBRU47QUFGWCxHQVRlLEVBYWY7QUFDRU8sWUFBUSxXQURWO0FBRUVELFdBQU87QUFGVCxHQWJlLEVBaUJmO0FBQ0VELFFBQUksZ0JBRE47QUFFRUMsV0FBTztBQUZULEdBakJlLEVBcUJmO0FBQ0VELFFBQUksbUJBRE47QUFFRUMsV0FBTyxFQUFFTDtBQUZYLEdBckJlLEVBeUJmO0FBQ0VJLFFBQUksaUJBRE47QUFFRUMsV0FBTyxFQUFFSDtBQUZYLEdBekJlLEVBNkJmO0FBQ0VFLFFBQUksdUJBRE47QUFFRUMsV0FBTyxFQUFFTjtBQUZYLEdBN0JlLEVBaUNmUSxNQWpDZSxDQWlDUk4sSUFqQ1EsQ0FBakI7QUFtQ0EsU0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFDLEtBQVIsQ0FERixFQUVHQyxRQUFRLENBQUNLLEdBQVQsQ0FBYSxpQkFBb0JDLENBQXBCO0FBQUEsUUFBR0wsSUFBSCxTQUFHQSxJQUFIO0FBQUEsUUFBU0MsT0FBVCxTQUFTQSxPQUFUO0FBQUEsV0FDWjtBQUFNLFNBQUcsRUFBRUksQ0FBWDtBQUFjLFVBQUksRUFBRUwsSUFBcEI7QUFBMEIsYUFBTyxFQUFFQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFk7QUFBQSxHQUFiLENBRkgsQ0FERjtBQVFEO0tBakR1QlAsRztBQW1EeEJBLEdBQUcsQ0FBQ1ksWUFBSixHQUFtQjtBQUNqQkMsTUFBSSxNQURhO0FBRWpCVixNQUFJLEVBQUU7QUFGVyxDQUFuQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3Nlby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTRU8oe1xuICBkZXNjcmlwdGlvbiA9ICdFc2NhcGUgRGVzaWducyBsYW5kaW5nIHBhZ2UnLFxuICBhdXRob3IgPSAnSlNNJyxcbiAgbWV0YSxcbiAgdGl0bGUgPSAnRXNjYXBlIERlc2lnbnMgdGl0bGUnLFxufSkge1xuICBjb25zdCBtZXRhRGF0YSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBgZGVzY3JpcHRpb25gLFxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9wZXJ0eTogYG9nOnRpdGxlYCxcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvcGVydHk6IGBvZzpkZXNjcmlwdGlvbmAsXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3BlcnR5OiBgb2c6dHlwZWAsXG4gICAgICBjb250ZW50OiBgd2Vic2l0ZWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgdHdpdHRlcjpjYXJkYCxcbiAgICAgIGNvbnRlbnQ6IGBzdW1tYXJ5YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNyZWF0b3JgLFxuICAgICAgY29udGVudDogYXV0aG9yLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLFxuICAgICAgY29udGVudDogdGl0bGUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgdHdpdHRlcjpkZXNjcmlwdGlvbmAsXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICB9LFxuICBdLmNvbmNhdChtZXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAge21ldGFEYXRhLm1hcCgoeyBuYW1lLCBjb250ZW50IH0sIGkpID0+IChcbiAgICAgICAgPG1ldGEga2V5PXtpfSBuYW1lPXtuYW1lfSBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgKSl9XG4gICAgPC9IZWFkPlxuICApO1xufVxuXG5TRU8uZGVmYXVsdFByb3BzID0ge1xuICBsYW5nOiBgZW5gLFxuICBtZXRhOiBbXSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/seo.js\n");

/***/ })

})