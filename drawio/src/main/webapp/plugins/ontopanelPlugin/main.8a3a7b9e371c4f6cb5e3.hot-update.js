"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatedrawio_test"]("main",{

/***/ "./ontopanelSource/convertor/index.js":
/*!********************************************!*\
  !*** ./ontopanelSource/convertor/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeConvertorWnd\": () => (/* binding */ makeConvertorWnd)\n/* harmony export */ });\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./ontopanelSource/convertor/index.html\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./ontopanelSource/convertor/index.scss\");\n/* harmony import */ var _scripts_extract_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/extract-data.js */ \"./ontopanelSource/convertor/scripts/extract-data.js\");\n/* harmony import */ var _scripts_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/store.js */ \"./ontopanelSource/convertor/scripts/store.js\");\n/* harmony import */ var _scripts_errors_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/errors-list.js */ \"./ontopanelSource/convertor/scripts/errors-list.js\");\n/* harmony import */ var _scripts_transform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/transform.js */ \"./ontopanelSource/convertor/scripts/transform.js\");\n/* harmony import */ var _scripts_mapping_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/mapping.js */ \"./ontopanelSource/convertor/scripts/mapping.js\");\n/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vars.js */ \"./ontopanelSource/vars.js\");\n/* harmony import */ var _scripts_result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/result */ \"./ontopanelSource/convertor/scripts/result.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst makeConvertorWnd = (ui) => {\r\n  var app = document.createElement(\"div\");\r\n  app.id = \"convertor-app\";\r\n  app.style = \"height: 460px; width: 380px; font-size: 15px; padding: 5px; \";\r\n\r\n  app.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  app.addEventListener(\"contextmenu\", (evt) => evt.preventDefault());\r\n\r\n  mxUtils.br(app);\r\n  mxResources.parse(\"convertor=Ontopanel-Convertor\");\r\n\r\n  var wnd = new mxWindow(\r\n    mxResources.get(\"convertor\"),\r\n    app,\r\n    document.body.offsetWidth - 450,\r\n    20,\r\n    390,\r\n    490,\r\n    true,\r\n    true\r\n  );\r\n  wnd.destroyOnClose = false;\r\n  wnd.setMaximizable(false);\r\n  wnd.setResizable(false);\r\n  wnd.setClosable(true);\r\n  wnd.setVisible(true);\r\n\r\n  let conBtn = app.querySelector('input[name=\"convert\"]');\r\n  let transBtn = app.querySelector('input[name=\"transform\"]');\r\n  let mappingBtn = app.querySelector('input[name=\"mapping\"]');\r\n  let resultBtn = app.querySelector('input[name=\"result\"]');\r\n  let errorBtn = app.querySelector('input[name=\"show-error\"]');\r\n  let showWindow = app.querySelector(\".convertor-content\");\r\n  showWindow.addEventListener(\"contextmenu\", (evt) => evt.stopPropagation());\r\n  let downloadBtn = app.querySelector('input[name=\"download\"]');\r\n  let conInfo = app.querySelector(\".mapping-info\");\r\n\r\n  let mappingContainer = new _scripts_mapping_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](app, ui);\r\n\r\n  mappingBtn.onclick = (evt) => {\r\n    showWindow.firstElementChild.replaceWith(mappingContainer.mappingWindow);\r\n  };\r\n\r\n  resultBtn.onclick = (evt) => {\r\n    _scripts_result__WEBPACK_IMPORTED_MODULE_8__.resultContainer.showdata();\r\n    showWindow.firstElementChild.replaceWith(_scripts_result__WEBPACK_IMPORTED_MODULE_8__.resultContainer.resultWindow);\r\n  };\r\n\r\n  errorBtn.onclick = (evt) => {\r\n    if (_scripts_store_js__WEBPACK_IMPORTED_MODULE_3__.storeData.errors) {\r\n      let errorContainer = (0,_scripts_errors_list_js__WEBPACK_IMPORTED_MODULE_4__.errorList)(_scripts_store_js__WEBPACK_IMPORTED_MODULE_3__.storeData.errors, ui);\r\n\r\n      showWindow.firstElementChild.replaceWith(errorContainer);\r\n    }\r\n  };\r\n  downloadBtn.onclick = (evt) => {\r\n    if (_scripts_store_js__WEBPACK_IMPORTED_MODULE_3__.storeData.result) {\r\n      let element = document.createElement(\"a\");\r\n      element.setAttribute(\r\n        \"href\",\r\n        \"data:application/xml;charset=utf-8,\" +\r\n          encodeURIComponent(_scripts_store_js__WEBPACK_IMPORTED_MODULE_3__.storeData.result)\r\n      );\r\n\r\n      let extension = _scripts_store_js__WEBPACK_IMPORTED_MODULE_3__.storeData.downloadFormat === \"turtle\" ? \"ttl\" : \"owl\";\r\n\r\n      let filename = `file.${extension}`;\r\n      element.setAttribute(\"download\", filename);\r\n\r\n      app.appendChild(element);\r\n      element.click();\r\n      app.removeChild(element);\r\n    }\r\n  };\r\n\r\n  transBtn.onclick = (evt) => {\r\n    (0,_scripts_transform_js__WEBPACK_IMPORTED_MODULE_5__.transform)(ui, resultBtn);\r\n  };\r\n\r\n  conBtn.onclick = (evt) => {\r\n    evt.preventDefault();\r\n    // storeData.resetData();\r\n    let graphData = (0,_scripts_extract_data_js__WEBPACK_IMPORTED_MODULE_2__.extractData)(ui);\r\n    let format = app.querySelector(\"select\").value;\r\n\r\n    let postData = {\r\n      format: format,\r\n      fileData: graphData,\r\n      mappingData: _scripts_store_js__WEBPACK_IMPORTED_MODULE_3__.storeData.mappingData,\r\n    };\r\n    // console.log(JSON.stringify(postData));\r\n\r\n    let tempInfo = {\r\n      result: \"In process, please wait\",\r\n      errors: null,\r\n    };\r\n    _scripts_store_js__WEBPACK_IMPORTED_MODULE_3__.storeData.modifyData(tempInfo);\r\n    resultBtn.click();\r\n\r\n    fetch(_vars_js__WEBPACK_IMPORTED_MODULE_7__.hostAddress + \"api/v1/convertor/\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(postData),\r\n      headers: new Headers({\r\n        \"Content-Type\": \"application/json\",\r\n      }),\r\n    })\r\n      .then((response) => {\r\n        if (response.ok) {\r\n          response.json().then((data) => {\r\n            _scripts_store_js__WEBPACK_IMPORTED_MODULE_3__.storeData.modifyData(data);\r\n            _scripts_store_js__WEBPACK_IMPORTED_MODULE_3__.storeData.modifyDownloadFormat(format);\r\n            resultBtn.click();\r\n          });\r\n        } else {\r\n          response.json().then((text) => {\r\n            let err = Object.keys(text)[0];\r\n            let errors = {\r\n              result: text[err],\r\n              errors: null,\r\n            };\r\n            _scripts_store_js__WEBPACK_IMPORTED_MODULE_3__.storeData.modifyData(errors);\r\n            _scripts_store_js__WEBPACK_IMPORTED_MODULE_3__.storeData.modifyDownloadFormat(format);\r\n            resultBtn.click();\r\n          });\r\n        }\r\n      })\r\n      .catch((error) => {\r\n        let errors = {\r\n          result: error,\r\n          errors: null,\r\n        };\r\n        _scripts_store_js__WEBPACK_IMPORTED_MODULE_3__.storeData.modifyData(errors);\r\n        _scripts_store_js__WEBPACK_IMPORTED_MODULE_3__.storeData.modifyDownloadFormat(format);\r\n        resultBtn.click();\r\n      });\r\n  };\r\n\r\n  // mappingBtn.click();\r\n  resultBtn.click();\r\n\r\n  return wnd;\r\n};\r\n\n\n//# sourceURL=webpack://drawio_test/./ontopanelSource/convertor/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d7adb326987e267bc305")
/******/ })();
/******/ 
/******/ }
);