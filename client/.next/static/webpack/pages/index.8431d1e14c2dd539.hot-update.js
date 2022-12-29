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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst NewsLine = ()=>{\n    _s();\n    const [atricles, setAtricles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchArticles = async ()=>{\n            let res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=cZ5SMFnHR9w88kNPhFL3Q9kFTNiy0opY\");\n            setAtricles(res.data.results);\n        };\n        fetchArticles();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n            xs: 1,\n            md: 3,\n            className: \"g-4\",\n            children: atricles.map((article)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Img, {\n                                variant: \"top\",\n                                src: article.multimedia.url\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Body, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Title, {\n                                        children: article.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Text, {\n                                        children: article.abstract\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: ()=>console.log(article),\n                                        variant: \"primary\",\n                                        children: \"Go somewhere\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, article.published_date, true, {\n                        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NewsLine, \"DPN2mwP9zPIl98I7cwcrvmuUOts=\");\n_c = NewsLine;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsLine);\nvar _c;\n$RefreshReg$(_c, \"NewsLine\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld3NMaW5lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBaUQ7QUFDdkI7QUFDbUQ7QUFFN0UsTUFBTVUsV0FBVyxJQUFNOztJQUNuQixNQUFNLENBQUNDLFVBQVNDLFlBQVksR0FBRVYsK0NBQVFBLENBQUMsRUFBRTtJQUN6Q0QsZ0RBQVNBLENBQUMsSUFBSTtRQUNYLE1BQU1ZLGdCQUFnQixVQUFXO1lBQzVCLElBQUlDLE1BQU0sTUFBTVgsaURBQVMsQ0FBRTtZQUMzQlMsWUFBWUUsSUFBSUUsSUFBSSxDQUFDQyxPQUFPO1FBQ2hDO1FBQ0FKO0lBRUosR0FBRSxFQUFFO0lBR0oscUJBQ0ksOERBQUNMLHNEQUFTQTtrQkFDTiw0RUFBQ0MsZ0RBQUdBO1lBQUNTLElBQUk7WUFBR0MsSUFBSTtZQUFHQyxXQUFVO3NCQUU3QlQsU0FBU1UsR0FBRyxDQUFDLENBQUNDLHdCQUNWLDhEQUFDZixnREFBR0E7OEJBQ0osNEVBQUNGLGlEQUFJQTs7MENBQ0QsOERBQUNBLHFEQUFRO2dDQUFDbUIsU0FBUTtnQ0FBTUMsS0FBS0gsUUFBUUksVUFBVSxDQUFDQyxHQUFHOzs7Ozs7MENBQ25ELDhEQUFDdEIsc0RBQVM7O2tEQUVOLDhEQUFDQSx1REFBVTtrREFBRWlCLFFBQVFRLEtBQUs7Ozs7OztrREFDMUIsOERBQUN6QixzREFBUztrREFDTGlCLFFBQVFVLFFBQVE7Ozs7OztrREFFckIsOERBQUM1QixtREFBTUE7d0NBQUM2QixTQUFVLElBQUlDLFFBQVFDLEdBQUcsQ0FBQ2I7d0NBQVVFLFNBQVE7a0RBQVU7Ozs7Ozs7Ozs7Ozs7dUJBUjNERixRQUFRYyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCakQ7R0FuQ00xQjtLQUFBQTtBQXFDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05ld3NMaW5lLmpzPzk0MWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7QnV0dG9uLCBDYXJkLCBDYXJkR3JvdXAsIENvbCwgQ29udGFpbmVyLCBSb3d9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmNvbnN0IE5ld3NMaW5lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2F0cmljbGVzLHNldEF0cmljbGVzXT0gdXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICBjb25zdCBmZXRjaEFydGljbGVzID0gYXN5bmMgKCkgPT57XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQgKCdodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvdG9wc3Rvcmllcy92Mi9hcnRzLmpzb24/YXBpLWtleT1jWjVTTUZuSFI5dzg4a05QaEZMM1E5a0ZUTml5MG9wWScpO1xyXG4gICAgICAgICAgICBzZXRBdHJpY2xlcyhyZXMuZGF0YS5yZXN1bHRzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaEFydGljbGVzKClcclxuXHJcbiAgICB9LFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Um93IHhzPXsxfSBtZD17M30gY2xhc3NOYW1lPVwiZy00XCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdHJpY2xlcy5tYXAoKGFydGljbGUpID0+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXthcnRpY2xlLnB1Ymxpc2hlZF9kYXRlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e2FydGljbGUubXVsdGltZWRpYS51cmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnthcnRpY2xlLnRpdGxlfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmFic3RyYWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgKCk9PmNvbnNvbGUubG9nKGFydGljbGUpfSB2YXJpYW50PVwicHJpbWFyeVwiPkdvIHNvbWV3aGVyZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0xpbmU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkR3JvdXAiLCJDb2wiLCJDb250YWluZXIiLCJSb3ciLCJOZXdzTGluZSIsImF0cmljbGVzIiwic2V0QXRyaWNsZXMiLCJmZXRjaEFydGljbGVzIiwicmVzIiwiZ2V0IiwiZGF0YSIsInJlc3VsdHMiLCJ4cyIsIm1kIiwiY2xhc3NOYW1lIiwibWFwIiwiYXJ0aWNsZSIsIkltZyIsInZhcmlhbnQiLCJzcmMiLCJtdWx0aW1lZGlhIiwidXJsIiwiQm9keSIsIlRpdGxlIiwidGl0bGUiLCJUZXh0IiwiYWJzdHJhY3QiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsInB1Ymxpc2hlZF9kYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NewsLine.js\n"));

/***/ })

});