webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/portfolio.js":
/*!***********************************!*\
  !*** ./src/sections/portfolio.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TestimonialCard; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/rating */ \"./src/components/rating.js\");\n/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button-group */ \"./src/components/button-group.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var sections_portfolio_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sections/portfolio-data */ \"./src/sections/portfolio-data.js\");\n\nvar _jsxFileName = \"/Users/enock/GitHub/esc-portfolio-site/src/sections/portfolio.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\nvar responsive = {\n  desktop: {\n    breakpoint: {\n      max: 3000,\n      min: 1619\n    },\n    items: 3,\n    slidesToSlide: 1\n  },\n  laptop: {\n    breakpoint: {\n      max: 1619,\n      min: 1024\n    },\n    items: 2,\n    slidesToSlide: 1\n  },\n  tablet: {\n    breakpoint: {\n      max: 1024,\n      min: 640\n    },\n    items: 1,\n    slidesToSlide: 1\n  },\n  mobile: {\n    breakpoint: {\n      max: 639,\n      min: 0\n    },\n    items: 1,\n    slidesToSlide: 1\n  }\n};\nvar carouselParams = {\n  additionalTransfrom: 0,\n  arrows: false,\n  autoPlaySpeed: 3000,\n  centerMode: false,\n  className: '',\n  containerClass: 'carousel-container',\n  customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(components_button_group__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 22\n    }\n  }),\n  dotListClass: '',\n  draggable: true,\n  focusOnSelect: false,\n  infinite: true,\n  itemClass: '',\n  keyBoardControl: true,\n  minimumTouchDrag: 80,\n  renderButtonGroupOutside: true,\n  renderDotsOutside: false,\n  responsive: responsive,\n  showDots: false,\n  sliderClass: '',\n  slidesToSlide: 1\n};\nfunction TestimonialCard() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"section\", {\n    id: \"portfolio\",\n    sx: {\n      variant: 'section.testimonial'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    csss: {\n      textAlign: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Portfolio\",\n    subheading: \"Projects I have worked on.\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    sx: styles.carouselWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, carouselParams, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), sections_portfolio_data__WEBPACK_IMPORTED_MODULE_7__[\"default\"].data.map(function (item) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      sx: styles.reviewCard,\n      key: item.sliderClass,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 13\n      }\n    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\", {\n      className: \"card-footer\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 15\n      }\n    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\", {\n      className: \"image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }\n    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      src: item.avatar,\n      alt: \"Project Image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 19\n      }\n    }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n      as: \"h3\",\n      sx: styles.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 15\n      }\n    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      sx: styles.description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 15\n      }\n    }, item.description));\n  }))));\n}\n_c = TestimonialCard;\nvar styles = {\n  carouselWrapper: {\n    display: 'flex',\n    justifyContent: 'flex-end',\n    flexDirection: 'column',\n    alignItems: 'flex-end',\n    mt: '-30px',\n    px: '15px',\n    '.carousel-container': {\n      width: '100%',\n      maxWidth: ['100%', null, null, '750px', '1000px', '1180px', null, 'calc(50% + 865px)'],\n      mr: ['auto', null, null, null, null, null, null, '-220px'],\n      ml: 'auto',\n      '.react-multi-carousel-item': {\n        transition: 'all 0.25s'\n      },\n      '.react-multi-carousel-item--active:nth-of-type(4n)': {\n        opacity: '0.5',\n        '@media screen and (max-width: 1620px)': {\n          opacity: 1\n        }\n      }\n    }\n  },\n  reviewCard: {\n    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',\n    transition: 'all 0.3s',\n    borderRadius: '6px',\n    p: ['30px 20px 35px', '30px 25px 35px', '30px 20px 35px', '35px 30px 40px 40px', '30px 30px 35px', '35px 30px 40px 40px'],\n    bg: 'white',\n    textAlign: 'left',\n    m: ['28px 5px 30px 5px', '28px 20px 30px 20px', '28px 15px 30px 15px', '28px 15px 30px 15px', '30px 20px 40px'],\n    '&:hover': {\n      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)'\n    },\n    '.rating': {\n      mb: [1, null, null, 2],\n      ul: {\n        pl: 0,\n        listStyle: 'none',\n        mb: 0,\n        display: 'flex'\n      },\n      svg: {\n        marginRight: '2px',\n        '&:last-of-type': {\n          marginRight: 0\n        }\n      },\n      '.star': {\n        color: 'primary',\n        mr: '1px'\n      },\n      '.star-o': {\n        color: '#ddd',\n        mr: '1px'\n      }\n    },\n    '.card-footer': {\n      display: 'flex',\n      alignItems: 'center',\n      marginBottom: [5, null, null, '33px'],\n      '.image': {\n        flexShrink: 0,\n        mr: [3, null, null, 4],\n        display: 'flex',\n        img: {\n          justifyContent: 'center',\n          width: '10rem',\n          height: '10rem' //borderRadius: '10px',\n          //objectFit: 'cover',\n\n        }\n      }\n    }\n  },\n  title: {\n    fontSize: [1, 2],\n    fontWeight: 700,\n    mb: [3, null, null, '22px'],\n    color: 'text',\n    lineHeight: 1.6\n  },\n  description: {\n    fontSize: [1, null, null, 2],\n    fontWeight: 'normal',\n    color: 'text',\n    lineHeight: [1.85, null, 2]\n  },\n  heading: {\n    fontSize: [1, null, null, 2],\n    fontWeight: 700,\n    mb: '3px',\n    color: 'text',\n    lineHeight: 1.3\n  },\n  designation: {\n    color: 'primary',\n    fontWeight: '500',\n    fontSize: 1,\n    lineHeight: 1.4\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"TestimonialCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BvcnRmb2xpby5qcz9hOTliIl0sIm5hbWVzIjpbInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwic2xpZGVzVG9TbGlkZSIsImxhcHRvcCIsInRhYmxldCIsIm1vYmlsZSIsImNhcm91c2VsUGFyYW1zIiwiYWRkaXRpb25hbFRyYW5zZnJvbSIsImFycm93cyIsImF1dG9QbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2xhc3MiLCJjdXN0b21CdXR0b25Hcm91cCIsImRvdExpc3RDbGFzcyIsImRyYWdnYWJsZSIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsIml0ZW1DbGFzcyIsImtleUJvYXJkQ29udHJvbCIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJUZXN0aW1vbmlhbENhcmQiLCJ2YXJpYW50IiwidGV4dEFsaWduIiwic3R5bGVzIiwiY2Fyb3VzZWxXcmFwcGVyIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJyZXZpZXdDYXJkIiwiYXZhdGFyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibXQiLCJweCIsIndpZHRoIiwibWF4V2lkdGgiLCJtciIsIm1sIiwidHJhbnNpdGlvbiIsIm9wYWNpdHkiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJwIiwiYmciLCJtIiwibWIiLCJ1bCIsInBsIiwibGlzdFN0eWxlIiwic3ZnIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImZsZXhTaHJpbmsiLCJpbWciLCJoZWlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5l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Y0FBVSxFQUFFLEdBRkw7QUFHUFosTUFBRSxFQUFFLEtBSEc7QUFJUE0sU0FBSyxFQUFFLE1BSkE7QUFLUE8sY0FBVSxFQUFFO0FBTEwsR0EvR0k7QUFzSGJFLGFBQVcsRUFBRTtBQUNYVCxTQUFLLEVBQUUsU0FESTtBQUVYTSxjQUFVLEVBQUUsS0FGRDtBQUdYRCxZQUFRLEVBQUUsQ0FIQztBQUlYRSxjQUFVLEVBQUU7QUFKRDtBQXRIQSxDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL3BvcnRmb2xpby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9yYXRpbmcnO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XG5pbXBvcnQgZGF0YSBmcm9tICdzZWN0aW9ucy9wb3J0Zm9saW8tZGF0YSc7XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxNjE5IH0sXG4gICAgaXRlbXM6IDMsXG4gICAgc2xpZGVzVG9TbGlkZTogMSxcbiAgfSxcbiAgbGFwdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDE2MTksIG1pbjogMTAyNCB9LFxuICAgIGl0ZW1zOiAyLFxuICAgIHNsaWRlc1RvU2xpZGU6IDEsXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIHNsaWRlc1RvU2xpZGU6IDEsXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIHNsaWRlc1RvU2xpZGU6IDEsXG4gIH0sXG59O1xuXG5jb25zdCBjYXJvdXNlbFBhcmFtcyA9IHtcbiAgYWRkaXRpb25hbFRyYW5zZnJvbTogMCxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgYXV0b1BsYXlTcGVlZDogMzAwMCxcbiAgY2VudGVyTW9kZTogZmFsc2UsXG4gIGNsYXNzTmFtZTogJycsXG4gIGNvbnRhaW5lckNsYXNzOiAnY2Fyb3VzZWwtY29udGFpbmVyJyxcbiAgY3VzdG9tQnV0dG9uR3JvdXA6IDxCdXR0b25Hcm91cCAvPixcbiAgZG90TGlzdENsYXNzOiAnJyxcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgaW5maW5pdGU6IHRydWUsXG4gIGl0ZW1DbGFzczogJycsXG4gIGtleUJvYXJkQ29udHJvbDogdHJ1ZSxcbiAgbWluaW11bVRvdWNoRHJhZzogODAsXG4gIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcbiAgcmVuZGVyRG90c091dHNpZGU6IGZhbHNlLFxuICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxuICBzaG93RG90czogZmFsc2UsXG4gIHNsaWRlckNsYXNzOiAnJyxcbiAgc2xpZGVzVG9TbGlkZTogMSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsQ2FyZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInBvcnRmb2xpb1wiIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnRlc3RpbW9uaWFsJyB9fT5cbiAgICAgIDxDb250YWluZXIgY3Nzcz17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHRpdGxlPVwiUG9ydGZvbGlvXCJcbiAgICAgICAgICBzdWJoZWFkaW5nPVwiUHJvamVjdHMgSSBoYXZlIHdvcmtlZCBvbi5cIlxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY2Fyb3VzZWxXcmFwcGVyfT5cbiAgICAgICAgPENhcm91c2VsIHsuLi5jYXJvdXNlbFBhcmFtc30+XG4gICAgICAgICAge2RhdGEuZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5yZXZpZXdDYXJkfSBrZXk9e2l0ZW0uc2xpZGVyQ2xhc3N9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5hdmF0YXJ9IGFsdD1cIlByb2plY3QgSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHN4PXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZGVzY3JpcHRpb259PntpdGVtLmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9Cb3g+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNhcm91c2VsV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICAgIG10OiAnLTMwcHgnLFxuICAgIHB4OiAnMTVweCcsXG4gICAgJy5jYXJvdXNlbC1jb250YWluZXInOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWF4V2lkdGg6IFtcbiAgICAgICAgJzEwMCUnLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICAnNzUwcHgnLFxuICAgICAgICAnMTAwMHB4JyxcbiAgICAgICAgJzExODBweCcsXG4gICAgICAgIG51bGwsXG4gICAgICAgICdjYWxjKDUwJSArIDg2NXB4KScsXG4gICAgICBdLFxuICAgICAgbXI6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICctMjIwcHgnXSxcbiAgICAgIG1sOiAnYXV0bycsXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0nOiB7XG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgfSxcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDRuKSc6IHtcbiAgICAgICAgb3BhY2l0eTogJzAuNScsXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjIwcHgpJzoge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHJldmlld0NhcmQ6IHtcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDFweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjM1KScsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxuICAgIHA6IFtcbiAgICAgICczMHB4IDIwcHggMzVweCcsXG4gICAgICAnMzBweCAyNXB4IDM1cHgnLFxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcbiAgICAgICczNXB4IDMwcHggNDBweCA0MHB4JyxcbiAgICAgICczMHB4IDMwcHggMzVweCcsXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXG4gICAgXSxcbiAgICBiZzogJ3doaXRlJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBtOiBbXG4gICAgICAnMjhweCA1cHggMzBweCA1cHgnLFxuICAgICAgJzI4cHggMjBweCAzMHB4IDIwcHgnLFxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxuICAgICAgJzMwcHggMjBweCA0MHB4JyxcbiAgICBdLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiAnMHB4IDZweCAzMHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxuICAgIH0sXG4gICAgJy5yYXRpbmcnOiB7XG4gICAgICBtYjogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgICAgdWw6IHtcbiAgICAgICAgcGw6IDAsXG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgICBtYjogMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgfSxcbiAgICAgIHN2Zzoge1xuICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXG4gICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICBtYXJnaW5SaWdodDogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnLnN0YXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgIG1yOiAnMXB4JyxcbiAgICAgIH0sXG4gICAgICAnLnN0YXItbyc6IHtcbiAgICAgICAgY29sb3I6ICcjZGRkJyxcbiAgICAgICAgbXI6ICcxcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcuY2FyZC1mb290ZXInOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogWzUsIG51bGwsIG51bGwsICczM3B4J10sXG4gICAgICAnLmltYWdlJzoge1xuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBtcjogWzMsIG51bGwsIG51bGwsIDRdLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGltZzoge1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICB3aWR0aDogJzEwcmVtJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMHJlbScsXG4gICAgICAgICAgLy9ib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgICAvL29iamVjdEZpdDogJ2NvdmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBtYjogWzMsIG51bGwsIG51bGwsICcyMnB4J10sXG4gICAgY29sb3I6ICd0ZXh0JyxcbiAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBjb2xvcjogJ3RleHQnLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcbiAgfSxcbiAgaGVhZGluZzoge1xuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIG1iOiAnM3B4JyxcbiAgICBjb2xvcjogJ3RleHQnLFxuICAgIGxpbmVIZWlnaHQ6IDEuMyxcbiAgfSxcbiAgZGVzaWduYXRpb246IHtcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgIGZvbnRTaXplOiAxLFxuICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/portfolio.js\n");

/***/ })

})