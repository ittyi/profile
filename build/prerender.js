/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AppServer.css":
/*!***************************!*\
  !*** ./src/AppServer.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/AppServer.css?");

/***/ }),

/***/ "./scripts/prerender.tsx":
/*!*******************************!*\
  !*** ./scripts/prerender.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nconst AppServer_1 = __importDefault(__webpack_require__(/*! ../src/AppServer */ \"./src/AppServer.tsx\"));\n// webpack.docs.js の client ビルドが出力したファイル名（ハッシュ付き）を拾って HTML に埋め込む。\nconst docsDir = path_1.default.resolve(process.cwd(), 'docs');\nconst assets = fs_1.default.readdirSync(path_1.default.join(docsDir, 'assets'));\nconst js = assets.find((f) => f.endsWith('.js'));\nconst css = assets.find((f) => f.endsWith('.css'));\nif (!js || !css) {\n    throw new Error('docs/assets に client ビルドの成果物がありません');\n}\nconst content = (0, server_1.renderToString)(react_1.default.createElement(AppServer_1.default, null));\nconst html = `<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>ittyi.jp</title>\n    <link rel=\"stylesheet\" href=\"./assets/${css}\">\n    <script defer src=\"./assets/${js}\"></script>\n  </head>\n  <body>\n    <div id=\"root\">${content}</div>\n  </body>\n</html>\n`;\nfs_1.default.writeFileSync(path_1.default.join(docsDir, 'index.html'), html);\nconsole.log('docs/index.html を書き出しました');\n\n\n//# sourceURL=webpack:///./scripts/prerender.tsx?");

/***/ }),

/***/ "./src/AppServer.tsx":
/*!***************************!*\
  !*** ./src/AppServer.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./AppServer.css */ \"./src/AppServer.css\");\nconst AppServer = () => {\n    const startEngineer = 2021;\n    const now = new Date();\n    const engineeringHistory = now.getFullYear() - startEngineer;\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"main\", null,\n            react_1.default.createElement(\"h1\", null, \"ittyi.jp\"),\n            react_1.default.createElement(\"ul\", null,\n                react_1.default.createElement(\"li\", null,\n                    \"Backend Engineer: \",\n                    engineeringHistory,\n                    \" year\"),\n                react_1.default.createElement(\"li\", null, \"former athletic instructor/personal trainer: 4 year\"),\n                react_1.default.createElement(\"li\", null,\n                    react_1.default.createElement(\"a\", { href: \"https://twitter.com/42_loves\" }, \"X(twitter)\"))))));\n};\nexports[\"default\"] = AppServer;\n\n\n//# sourceURL=webpack:///./src/AppServer.tsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/prerender.tsx");
/******/ 	
/******/ })()
;