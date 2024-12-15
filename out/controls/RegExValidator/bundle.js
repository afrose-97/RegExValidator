/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./RegExValidator/RegExValidatorComponent.tsx":
/*!****************************************************!*\
  !*** ./RegExValidator/RegExValidatorComponent.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RegExValidatorComponent: () => (/* binding */ RegExValidatorComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ \"@fluentui/react-components\");\n/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass RegExValidatorComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Label, {\n      title: this.props.LabelText,\n      style: {\n        fontFamily: \"Lato\",\n        fontSize: \"16px\",\n        color: \"#28313c\",\n        textOverflow: \"ellipsis\",\n        whiteSpace: \"nowrap\",\n        overflow: \"hidden\"\n      }\n    }, this.props.LabelText);\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./RegExValidator/RegExValidatorComponent.tsx?");

/***/ }),

/***/ "./RegExValidator/index.ts":
/*!*********************************!*\
  !*** ./RegExValidator/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RegExValidator: () => (/* binding */ RegExValidator)\n/* harmony export */ });\n/* harmony import */ var _RegExValidatorComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegExValidatorComponent */ \"./RegExValidator/RegExValidatorComponent.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass RegExValidator {\n  constructor() {\n    this.RegExValidatorOutput = \"\";\n  }\n  init(context, notifyOutputChanged, state) {\n    this.notifyOutputChanged = notifyOutputChanged;\n  }\n  updateView(context) {\n    var regexPattern = context.parameters.RegEx.raw;\n    var LabelText = context.parameters.LabelText.raw;\n    try {\n      if (regexPattern) {\n        LabelText = eval(regexPattern);\n      } else {\n        LabelText = \"Enter a regex pattern.\";\n      }\n    } catch (error) {\n      LabelText = \"Invalid regex pattern: \".concat(regexPattern);\n    }\n    this.RegExValidatorOutput = LabelText;\n    this.notifyOutputChanged();\n    var props = {\n      LabelText: LabelText\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RegExValidatorComponent__WEBPACK_IMPORTED_MODULE_0__.RegExValidatorComponent, props);\n  }\n  getOutputs() {\n    return {\n      RegExValidatorOutput: this.RegExValidatorOutput\n    };\n  }\n  destroy() {}\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./RegExValidator/index.ts?");

/***/ }),

/***/ "@fluentui/react-components":
/*!************************************!*\
  !*** external "FluentUIReactv940" ***!
  \************************************/
/***/ ((module) => {

module.exports = FluentUIReactv940;

/***/ }),

/***/ "react":
/*!***************************!*\
  !*** external "Reactv16" ***!
  \***************************/
/***/ ((module) => {

module.exports = Reactv16;

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./RegExValidator/index.ts");
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('RegExValidatorNS.RegExValidator', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.RegExValidator);
} else {
	var RegExValidatorNS = RegExValidatorNS || {};
	RegExValidatorNS.RegExValidator = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.RegExValidator;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}