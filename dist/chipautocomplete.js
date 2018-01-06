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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueChipAutocomplete_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueChipAutocomplete_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VueChipAutocomplete_vue__);


/* harmony default export */ __webpack_exports__["default"] = ({
	install: vue => vue.component('vue-chip-autocomplete', __WEBPACK_IMPORTED_MODULE_0__VueChipAutocomplete_vue___default.a)
});


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = "<template>\n\t<div>\n\t\t<div class=\"chipinput-container\">\n\t\t\t<input type=\"hidden\" :v-model=\"vModel\">\n\t\t\t<div class=\"chips-container\">\n\t\t\t\t<vue-chip v-for=\"item, index in vModel\" :closable=\"true\" :index=\"index\" v-bind:key=\"item\" :label=\"item\" v-on:click.native=\"removeItem\"></vue-chip>\n\n\t\t\t</div>\n\t\t\t<datalist id=\"vue-autocomplete-list\">\n\t\t\t\t<option v-for=\"option in options\" :value=\"option\"></option>\n\t\t\t</datalist>\n\t\t\t<input v-if=\"allowNew\" type=\"text\" class=\"form-control\" list=\"vue-autocomplete-list\" @input=\"onInput\" @keyup.enter=\"onEnter\">\n\t\t\t<input v-else=\"allowNew\" type=\"text\" class=\"form-control\" list=\"vue-autocomplete-list\" @input=\"onInput\">\n\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n\t.chips-container .chip{\n\t\t/*float: left!important;*/\n\t}\n\tdiv.chips-container {\n\t\tdisplay: block!important;\n\t\twidth: 100%!important;\n\t\tmargin-bottom: 20px!important;\n\t}\n\tdiv.chipinput-container input{\n\t\tmargin-top:15px!important;\n\t\tdisplay: block!important;\n\t}\n</style>\n\n<script>\n\texport default {\n\t\tprops: {\n\t\t\toptions: {type: Array, required: true},\n\t\t\tvModel: { type: Array, required: true },\n\t\t\tallowNew: { type: Boolean, required: false, default: false }\n\t\t},\n\n\t\tdata: function(){\n\t\t\treturn {\n\t\t\t\tvci_selected_: [],\n\t\t\t\tselected: [],\n\t\t\t\titems: []\n\t\t\t}\n\t\t},\n\n\t\tmounted(){\n\t\t\tthis.vci_selected_ = this.vModel;\n\t\t},\n\n\t\tmethods: {\n\t\t\tonEnter(ev){\n\t\t\t\tvar text = ev.target.value\n\t\t\t\tif(text.length > 0){\n\t\t\t\t\tvar ind = this.vModel.indexOf(text)\n\t\t\t\t\tif(ind == -1)\n\t\t\t\t\t\tthis.vModel.push(text)\n\t\t\t\t\tev.target.value = ''\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tremoveItem(ev){\n\t\t\t\t//console.log(ev)\n\t\t\t\tvar app = this;\n\t\t\t\tvar parent = ev.target.parentElement;\n\t\t\t\t//console.log(parent)\n\n\t\t\t\t\tvar state = ev.target.parentElement.style.display;\n\t\t\t\t\t//console.log(state)\n\t\t\t\tsetTimeout(function() {\n\t\t\t\t\tvar state = ev.target.parentElement.style.display;\n\t\t\t\t\t//console.log(state)\n\t\t\t\t\tif(state == 'none'){\n\t\t\t\t\t\tvar i = parent.getAttribute('index')\n\t\t\t\t\t\tapp.vModel.splice(i, 1)\n\t\t\t\t\t}\n\t\t\t\t}, 10)\n\t\t\t},\n\n\t\t\t_changeInput(ev){\n\t\t\t\tvar value = ev.target.value\n\t\t\t\tif(value.length < 2) return\n\t\t\t\tvar result = this.matchResult(value)\n\t\t\t\tthis.items = result\n\t\t\t\t//document.getElementById('autocomplete-result').innerHTML = result\n\t\t\t},\n\n\t\t\tmatchResult(input){\n\t\t\t\tvar reg = new RegExp(input.split('').join('\\\\w*').replace(/\\W/, \"\"), 'i')\n\n\t\t\t\treturn this.people.filter(function(person){\n\t\t\t\t\tif(person.match(reg)){\n\t\t\t\t\t\treturn person\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t},\n\n\t\t\tselectItem(ev){\n\t\t\t\tvar value = ev.target.text\n\t\t\t\tthis.selected.push(value)\n\t\t\t},\n\n\t\t\tonInput(ev){\n\t\t\t\tvar value = ev.target.value\n\t\t\t\tvar index = this.options.indexOf(value)\n\t\t\t\tvar ind = this.vModel.indexOf(value)\n\t\t\t\tif(index != -1 && ind == -1){\n\t\t\t\t\tthis.vModel.push(value.trim())\n\t\t\t\t\tev.target.value = ''\t\t\t\t\t\n\t\t\t\t}\n\t\t\t}\n\n\t\t}\n\n\n\n\t}\n</script>";

/***/ })

/******/ });