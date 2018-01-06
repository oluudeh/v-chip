/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueChip_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueChip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VueChip_vue__);

/* harmony default export */ __webpack_exports__["default"] = ({
	install: vue => vue.component('vue-chip', __WEBPACK_IMPORTED_MODULE_0__VueChip_vue___default.a)
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<template>\n\t<div>\n\t\t<div class=\"chip\" :index=\"index\">\n\t\t\t<img v-show=\"imgSrc\" :src=\"imgSrc\" alt=\"Person\" width=\"96\" height=\"96\">\n\t\t\t{{ label }}\n\t\t\t<span v-show=\"closable\" class=\"closebtn\" onclick=\"this.parentElement.style.display = 'none'\">&times;</span>\n\t\t</div>\n\t</div>\n</template>\n<!--<template id=\"chipinput\">\n\t<div>\n\t\t<div class=\"chipinput-container\">\n\t\t\t<div class=\"chips-container\">\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<input type=\"text\" name=\"\" >\n\t\t</div>\n\t</div>\n</template>-->\n<script>\n\texport default {\n\t\tprops: {\n\t\t\timgSrc: { type: String, required: false },\n\t\t\tlabel: { type: String, required: true },\n\t\t\tindex: { type: Number, required: false },\n\t\t\tclosable: { type: Boolean, required: false, default: false}\n\t\t},\n\n\t\tmethods: {\n\t\t\tcloseChip(ev){\n\t\t\t\tev.target.parentElement.style.display = 'none';\n\t\t\t}\n\t\t},\n\t}\n</script>\n\n<style>\n\t.chip{\n\t\tdisplay: inline-block;\n\t\tpadding: 0 25px;\n\t\theight: 50px;\n\t\tfont-size: 16px;\n\t\tline-height: 50px;\n\t\tborder-radius: 25px;\n\t\tbackground-color: #f1f1f1;\n\t\tfloat: left;\n\t}\n\t.chip img{\n\t\tfloat: left;\n\t\tmargin: 0 10px 0 -25px;\n\t\theight: 50px;\n\t\twidth: 50px;\n\t\tborder-radius: 50%;\n\t}\n\t.closebtn{\n\t\tpadding-left: 10px;\n\t\tcolor: #888;\n\t\tfont-weight: bold;\n\t\tfloat: right;\n\t\tfont-size: 20px;\n\t\tcursor: pointer;\n\t}\n\t.closebtn:hover{\n\t\tcolor: #000;\n\t}\n</style>\n\n";

/***/ })
/******/ ]);