"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/VideoPlayer.js":
/*!***********************************!*\
  !*** ./components/VideoPlayer.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_VideoPlayer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/VideoPlayer.module.css */ \"./styles/VideoPlayer.module.css\");\n/* harmony import */ var _styles_VideoPlayer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_VideoPlayer_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n\n\n\n\nfunction VideoPlayer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_VideoPlayer_module_css__WEBPACK_IMPORTED_MODULE_3___default().playerContain),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_VideoPlayer_module_css__WEBPACK_IMPORTED_MODULE_3___default().playerTitle),\n                children: \"Degustation organis\\xe9e par a2r-connect\"\n            }, void 0, false, {\n                fileName: \"/Users/rahimhamadou/Documents/Work/Demo-portfolio/a2r/wine/frontend/components/VideoPlayer.js\",\n                lineNumber: 9,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                className: (_styles_VideoPlayer_module_css__WEBPACK_IMPORTED_MODULE_3___default().player),\n                width: \"560\",\n                height: \"315\",\n                src: \"https://www.youtube.com/embed/o3fdPSltZ_0\",\n                title: \"YouTube video player\",\n                frameborder: \"0\",\n                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                allowfullscreen: true\n            }, void 0, false, {\n                fileName: \"/Users/rahimhamadou/Documents/Work/Demo-portfolio/a2r/wine/frontend/components/VideoPlayer.js\",\n                lineNumber: 10,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rahimhamadou/Documents/Work/Demo-portfolio/a2r/wine/frontend/components/VideoPlayer.js\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, this);\n}\n_c = VideoPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoPlayer);\nvar _c;\n$RefreshReg$(_c, \"VideoPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDNEI7QUFFZjtBQUV2QyxTQUFTRyxXQUFXLEdBQUc7SUFDdEIscUJBQ0MsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFSixxRkFBb0I7OzBCQUNuQyw4REFBQ00sSUFBRTtnQkFBQ0YsU0FBUyxFQUFFSixtRkFBa0I7MEJBQUUsMENBQXFDOzs7OztvQkFBSzswQkFDN0UsOERBQUNRLFFBQU07Z0JBQ05KLFNBQVMsRUFBRUosOEVBQWE7Z0JBQ3hCVSxLQUFLLEVBQUMsS0FBSztnQkFDWEMsTUFBTSxFQUFDLEtBQUs7Z0JBQ1pDLEdBQUcsRUFBQywyQ0FBMkM7Z0JBQy9DQyxLQUFLLEVBQUMsc0JBQXNCO2dCQUM1QkMsV0FBVyxFQUFDLEdBQUc7Z0JBQ2ZDLEtBQUssRUFBQywwRkFBMEY7Z0JBQ2hHQyxlQUFlOzs7OztvQkFDTjs7Ozs7O1lBT0wsQ0FDTDtDQUNGO0FBdEJRZCxLQUFBQSxXQUFXO0FBd0JwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIuanM/ZDdkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvVmlkZW9QbGF5ZXIubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllclwiO1xuXG5mdW5jdGlvbiBWaWRlb1BsYXllcigpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXllckNvbnRhaW59PlxuXHRcdFx0PGgyIGNsYXNzTmFtZT17c3R5bGVzLnBsYXllclRpdGxlfT5EZWd1c3RhdGlvbiBvcmdhbmlzw6llIHBhciBhMnItY29ubmVjdDwvaDI+XG5cdFx0XHQ8aWZyYW1lXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnBsYXllcn1cblx0XHRcdFx0d2lkdGg9XCI1NjBcIlxuXHRcdFx0XHRoZWlnaHQ9XCIzMTVcIlxuXHRcdFx0XHRzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9vM2ZkUFNsdFpfMFwiXG5cdFx0XHRcdHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIlxuXHRcdFx0XHRmcmFtZWJvcmRlcj1cIjBcIlxuXHRcdFx0XHRhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxuXHRcdFx0XHRhbGxvd2Z1bGxzY3JlZW5cblx0XHRcdD48L2lmcmFtZT5cblx0XHRcdHsvKiA8UmVhY3RQbGF5ZXJcblx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMucGxheWVyfVxuXHRcdFx0XHR3aWR0aD1cIjEwMCVcIlxuXHRcdFx0XHRjb250cm9scz1cInRydWVcIlxuXHRcdFx0XHR1cmw9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PW8zZmRQU2x0Wl8wXCJcblx0XHRcdC8+ICovfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb1BsYXllcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIlJlYWN0UGxheWVyIiwiVmlkZW9QbGF5ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJwbGF5ZXJDb250YWluIiwiaDIiLCJwbGF5ZXJUaXRsZSIsImlmcmFtZSIsInBsYXllciIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwidGl0bGUiLCJmcmFtZWJvcmRlciIsImFsbG93IiwiYWxsb3dmdWxsc2NyZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VideoPlayer.js\n");

/***/ })

});