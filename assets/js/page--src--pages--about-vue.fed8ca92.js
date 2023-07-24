(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page--src--pages--about-vue"],{

/***/ "5voq":
/*!************************************************************!*\
  !*** ./src/pages/About.vue?vue&type=template&id=fa5d4fa4& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3dde5135_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_fa5d4fa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"3dde5135-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=fa5d4fa4& */ \"UnDh\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3dde5135_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_fa5d4fa4___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3dde5135_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_fa5d4fa4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/pages/About.vue?");

/***/ }),

/***/ "I5fT":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/About.vue?vue&type=style&index=0&id=fa5d4fa4&prod&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/About.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "KZ88":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/About.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-it */ \"1M3H\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ \"DlQD\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/MainHeader.vue */ \"3CpC\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    MainHeader: _components_MainHeader_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  metaInfo: {\n    title: 'about'\n  },\n  computed: {\n    body: function () {\n      const md = new markdown_it__WEBPACK_IMPORTED_MODULE_0___default.a();\n      if (this.$page.contentfulTextarea.textContent == null) {\n        return \"\";\n      } else {\n        return marked__WEBPACK_IMPORTED_MODULE_1___default()(this.$page.contentfulTextarea.textContent);\n      }\n    }\n  },\n  metaInfo() {\n    return {\n      title: \"about\",\n      meta: [{\n        name: 'viewport',\n        content: \"width=device-width\"\n      }, {\n        property: 'og:title',\n        content: \"°˖✧*･ﾟjackie liu･ﾟ*✧˖°(◕‿◕✿)\"\n      }, {\n        property: 'og:site_name',\n        content: \"jackie liu ✿ new media art & design\"\n      }, {\n        property: 'og:url',\n        content: \"https://jackieis.online\"\n      }, {\n        property: 'og:description',\n        content: \"Jackie Liu is a new media artist and digital designer new media artist and digital designer who makes playful, narrative experiences with (and about) technology.\"\n      }, {\n        property: 'og:image',\n        content: \"/og-image.png\"\n      }, {\n        property: 'og:image:width',\n        content: \"1200\"\n      }, {\n        property: 'og:image:height',\n        content: \"630\"\n      }]\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/pages/About.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "LCYv":
/*!******************************************************!*\
  !*** ./src/pages/About.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ \"KZ88\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/pages/About.vue?");

/***/ }),

/***/ "UnDh":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"3dde5135-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/About.vue?vue&type=template&id=fa5d4fa4& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('Layout', [_c('MainHeader'), _c('div', {\n    staticClass: \"container grid-container\"\n  }, [_c('div', {\n    staticClass: \"profpicContainer whole\"\n  }, [_c('img', {\n    staticClass: \"profpic\",\n    attrs: {\n      \"src\": \"/profpic2022.png\"\n    }\n  })]), _c('div', {\n    directives: [{\n      name: \"g-image\",\n      rawName: \"v-g-image\"\n    }],\n    staticClass: \"three-fourth\",\n    domProps: {\n      \"innerHTML\": _vm._s(_vm.body)\n    }\n  })])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./src/pages/About.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%223dde5135-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "brk5":
/*!********************************************************************************!*\
  !*** ./src/pages/About.vue?vue&type=style&index=0&id=fa5d4fa4&prod&lang=scss& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fa5d4fa4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--4-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=style&index=0&id=fa5d4fa4&prod&lang=scss& */ \"I5fT\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fa5d4fa4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fa5d4fa4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fa5d4fa4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fa5d4fa4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/pages/About.vue?");

/***/ }),

/***/ "odGf":
/*!*****************************!*\
  !*** ./src/pages/About.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _About_vue_vue_type_template_id_fa5d4fa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=fa5d4fa4& */ \"5voq\");\n/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ \"LCYv\");\n/* empty/unused harmony star reexport *//* harmony import */ var _About_vue_vue_type_style_index_0_id_fa5d4fa4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.vue?vue&type=style&index=0&id=fa5d4fa4&prod&lang=scss& */ \"brk5\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _About_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About.vue?vue&type=custom&index=0&blockType=page-query */ \"sw4H\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _About_vue_vue_type_template_id_fa5d4fa4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _About_vue_vue_type_template_id_fa5d4fa4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _About_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_4__[\"default\"] === 'function') Object(_About_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/pages/About.vue?");

/***/ }),

/***/ "rdM2":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--13-0!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/About.vue?vue&type=custom&index=0&blockType=page-query ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (null);\n\n//# sourceURL=webpack:///./src/pages/About.vue?./node_modules/babel-loader/lib??ref--13-0!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "sw4H":
/*!**************************************************************************!*\
  !*** ./src/pages/About.vue?vue&type=custom&index=0&blockType=page-query ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--13-0!../../node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=custom&index=0&blockType=page-query */ \"rdM2\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/pages/About.vue?");

/***/ })

}]);