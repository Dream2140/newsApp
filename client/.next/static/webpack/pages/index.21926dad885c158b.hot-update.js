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

/***/ "./components/NewsLine.js":
/*!********************************!*\
  !*** ./components/NewsLine.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst NewsLine = ()=>{\n    _s();\n    const [atricles, setAtricles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchArticles = async ()=>{\n            let res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=cZ5SMFnHR9w88kNPhFL3Q9kFTNiy0opY\");\n            setAtricles(res.data.results);\n        };\n        fetchArticles();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: atricles.map((article)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Img, {\n                        variant: \"top\",\n                        src: article.multimedia.url\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Body, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Title, {\n                                children: article.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Text, {\n                                children: article.abstract\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"primary\",\n                                children: \"Go somewhere\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NewsLine, \"DPN2mwP9zPIl98I7cwcrvmuUOts=\");\n_c = NewsLine;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsLine);\nvar _c;\n$RefreshReg$(_c, \"NewsLine\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld3NMaW5lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBaUQ7QUFDdkI7QUFDOEI7QUFFeEQsTUFBTU8sV0FBVyxJQUFNOztJQUNuQixNQUFNLENBQUNDLFVBQVNDLFlBQVksR0FBRVAsK0NBQVFBLENBQUMsRUFBRTtJQUN6Q0QsZ0RBQVNBLENBQUMsSUFBSTtRQUNYLE1BQU1TLGdCQUFnQixVQUFXO1lBQzVCLElBQUlDLE1BQU0sTUFBTVIsaURBQVMsQ0FBRTtZQUMzQk0sWUFBWUUsSUFBSUUsSUFBSSxDQUFDQyxPQUFPO1FBQ2hDO1FBQ0FKO0lBRUosR0FBRSxFQUFFO0lBQ0oscUJBQ0ksOERBQUNKLHNEQUFTQTtrQkFFTkUsU0FBU08sR0FBRyxDQUFDLENBQUNDLHdCQUNWLDhEQUFDWCxpREFBSUE7O2tDQUNELDhEQUFDQSxxREFBUTt3QkFBQ2EsU0FBUTt3QkFBTUMsS0FBS0gsUUFBUUksVUFBVSxDQUFDQyxHQUFHOzs7Ozs7a0NBQ25ELDhEQUFDaEIsc0RBQVM7OzBDQUNOLDhEQUFDQSx1REFBVTswQ0FBRVcsUUFBUVEsS0FBSzs7Ozs7OzBDQUMxQiw4REFBQ25CLHNEQUFTOzBDQUNMVyxRQUFRVSxRQUFROzs7Ozs7MENBRXJCLDhEQUFDdEIsbURBQU1BO2dDQUFDYyxTQUFROzBDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNsRDtHQTlCTVg7S0FBQUE7QUFnQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdzTGluZS5qcz85NDFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge0J1dHRvbiwgQ2FyZCwgQ29udGFpbmVyfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5jb25zdCBOZXdzTGluZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthdHJpY2xlcyxzZXRBdHJpY2xlc109IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgY29uc3QgZmV0Y2hBcnRpY2xlcyA9IGFzeW5jICgpID0+e1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0ICgnaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3RvcHN0b3JpZXMvdjIvYXJ0cy5qc29uP2FwaS1rZXk9Y1o1U01GbkhSOXc4OGtOUGhGTDNROWtGVE5peTBvcFknKTtcclxuICAgICAgICAgICAgc2V0QXRyaWNsZXMocmVzLmRhdGEucmVzdWx0cylcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpXHJcblxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF0cmljbGVzLm1hcCgoYXJ0aWNsZSkgPT5cclxuICAgICAgICAgICAgICAgIDxDYXJkICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e2FydGljbGUubXVsdGltZWRpYS51cmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e2FydGljbGUudGl0bGV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuYWJzdHJhY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+R28gc29tZXdoZXJlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzTGluZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQnV0dG9uIiwiQ2FyZCIsIkNvbnRhaW5lciIsIk5ld3NMaW5lIiwiYXRyaWNsZXMiLCJzZXRBdHJpY2xlcyIsImZldGNoQXJ0aWNsZXMiLCJyZXMiLCJnZXQiLCJkYXRhIiwicmVzdWx0cyIsIm1hcCIsImFydGljbGUiLCJJbWciLCJ2YXJpYW50Iiwic3JjIiwibXVsdGltZWRpYSIsInVybCIsIkJvZHkiLCJUaXRsZSIsInRpdGxlIiwiVGV4dCIsImFic3RyYWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NewsLine.js\n"));

/***/ })

});