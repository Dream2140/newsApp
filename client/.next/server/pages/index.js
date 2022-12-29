"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/NewsLine.js":
/*!********************************!*\
  !*** ./components/NewsLine.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst NewsLine = ()=>{\n    const [atricles, setAtricles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchArticles = async ()=>{\n            let res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=cZ5SMFnHR9w88kNPhFL3Q9kFTNiy0opY\");\n            setAtricles(res.data.results);\n        };\n        fetchArticles();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n            xs: 1,\n            md: 3,\n            className: \"g-4\",\n            children: atricles.map((article)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Img, {\n                                variant: \"top\",\n                                src: article.multimedia[0]?.url\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Body, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Title, {\n                                        children: article.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Text, {\n                                        children: article.abstract\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: ()=>console.log(article),\n                                        variant: \"primary\",\n                                        children: \"Go somewhere\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, article.published_date, true, {\n                        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\components\\\\NewsLine.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsLine);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld3NMaW5lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDdkI7QUFDbUQ7QUFFN0UsTUFBTVUsV0FBVyxJQUFNO0lBQ25CLE1BQU0sQ0FBQ0MsVUFBU0MsWUFBWSxHQUFFViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDRCxnREFBU0EsQ0FBQyxJQUFJO1FBQ1gsTUFBTVksZ0JBQWdCLFVBQVc7WUFDNUIsSUFBSUMsTUFBTSxNQUFNWCxpREFBUyxDQUFFO1lBQzNCUyxZQUFZRSxJQUFJRSxJQUFJLENBQUNDLE9BQU87UUFDaEM7UUFDQUo7SUFFSixHQUFFLEVBQUU7SUFHSixxQkFDSSw4REFBQ0wsc0RBQVNBO2tCQUNOLDRFQUFDQyxnREFBR0E7WUFBQ1MsSUFBSTtZQUFHQyxJQUFJO1lBQUdDLFdBQVU7c0JBRTdCVCxTQUFTVSxHQUFHLENBQUMsQ0FBQ0Msd0JBQ1YsOERBQUNmLGdEQUFHQTs4QkFDSiw0RUFBQ0YsaURBQUlBOzswQ0FDRCw4REFBQ0EscURBQVE7Z0NBQUNtQixTQUFRO2dDQUFNQyxLQUFLSCxRQUFRSSxVQUFVLENBQUMsRUFBRSxFQUFFQzs7Ozs7OzBDQUNwRCw4REFBQ3RCLHNEQUFTOztrREFFTiw4REFBQ0EsdURBQVU7a0RBQUVpQixRQUFRUSxLQUFLOzs7Ozs7a0RBQzFCLDhEQUFDekIsc0RBQVM7a0RBQ0xpQixRQUFRVSxRQUFROzs7Ozs7a0RBRXJCLDhEQUFDNUIsbURBQU1BO3dDQUFDNkIsU0FBVSxJQUFJQyxRQUFRQyxHQUFHLENBQUNiO3dDQUFVRSxTQUFRO2tEQUFVOzs7Ozs7Ozs7Ozs7O3VCQVIzREYsUUFBUWMsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmpEO0FBRUEsaUVBQWUxQixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9OZXdzTGluZS5qcz85NDFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge0J1dHRvbiwgQ2FyZCwgQ2FyZEdyb3VwLCBDb2wsIENvbnRhaW5lciwgUm93fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5jb25zdCBOZXdzTGluZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthdHJpY2xlcyxzZXRBdHJpY2xlc109IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgY29uc3QgZmV0Y2hBcnRpY2xlcyA9IGFzeW5jICgpID0+e1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0ICgnaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3RvcHN0b3JpZXMvdjIvYXJ0cy5qc29uP2FwaS1rZXk9Y1o1U01GbkhSOXc4OGtOUGhGTDNROWtGVE5peTBvcFknKTtcclxuICAgICAgICAgICAgc2V0QXRyaWNsZXMocmVzLmRhdGEucmVzdWx0cylcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpXHJcblxyXG4gICAgfSxbXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFJvdyB4cz17MX0gbWQ9ezN9IGNsYXNzTmFtZT1cImctNFwiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXRyaWNsZXMubWFwKChhcnRpY2xlKSA9PlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17YXJ0aWNsZS5wdWJsaXNoZWRfZGF0ZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXthcnRpY2xlLm11bHRpbWVkaWFbMF0/LnVybH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e2FydGljbGUudGl0bGV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuYWJzdHJhY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyAoKT0+Y29uc29sZS5sb2coYXJ0aWNsZSl9IHZhcmlhbnQ9XCJwcmltYXJ5XCI+R28gc29tZXdoZXJlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzTGluZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRHcm91cCIsIkNvbCIsIkNvbnRhaW5lciIsIlJvdyIsIk5ld3NMaW5lIiwiYXRyaWNsZXMiLCJzZXRBdHJpY2xlcyIsImZldGNoQXJ0aWNsZXMiLCJyZXMiLCJnZXQiLCJkYXRhIiwicmVzdWx0cyIsInhzIiwibWQiLCJjbGFzc05hbWUiLCJtYXAiLCJhcnRpY2xlIiwiSW1nIiwidmFyaWFudCIsInNyYyIsIm11bHRpbWVkaWEiLCJ1cmwiLCJCb2R5IiwiVGl0bGUiLCJ0aXRsZSIsIlRleHQiLCJhYnN0cmFjdCIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwicHVibGlzaGVkX2RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NewsLine.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NewsLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NewsLine */ \"./components/NewsLine.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_NewsLine__WEBPACK_IMPORTED_MODULE_2__]);\n_components_NewsLine__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Index = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewsLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\pages\\\\index.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gleba\\\\Desktop\\\\newsApp\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNvQjtBQUU5QyxNQUFNRSxRQUFRLElBQU07SUFDaEIscUJBQ0ksOERBQUNDO2tCQUNHLDRFQUFDRiw0REFBUUE7Ozs7Ozs7Ozs7QUFHckI7QUFFQSxpRUFBZUMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5ld3NMaW5lIGZyb20gXCIuLi9jb21wb25lbnRzL05ld3NMaW5lXCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5ld3NMaW5lLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJOZXdzTGluZSIsIkluZGV4IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();