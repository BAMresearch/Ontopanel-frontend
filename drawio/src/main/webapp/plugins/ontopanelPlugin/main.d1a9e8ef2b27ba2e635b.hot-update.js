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

/***/ "./ontopanelSource/entityFinder_version1/index.js":
/*!********************************************************!*\
  !*** ./ontopanelSource/entityFinder_version1/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeEntityWnd\": () => (/* binding */ makeEntityWnd)\n/* harmony export */ });\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./ontopanelSource/entityFinder_version1/index.html\");\n/* harmony import */ var _scripts_uploader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/uploader.js */ \"./ontopanelSource/entityFinder_version1/scripts/uploader.js\");\n/* harmony import */ var _scripts_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/store */ \"./ontopanelSource/entityFinder_version1/scripts/store.js\");\n/* harmony import */ var _scripts_login_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/login-system */ \"./ontopanelSource/entityFinder_version1/scripts/login-system.js\");\n/* harmony import */ var _scripts_onto_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/onto-tree */ \"./ontopanelSource/entityFinder_version1/scripts/onto-tree.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ \"./ontopanelSource/entityFinder_version1/index.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst makeEntityWnd = (ui) => {\r\n  var app = document.createElement(\"div\");\r\n  app.id = \"entityfinderold-app\";\r\n  app.style = \"height: 450px; width: 380px; font-size: 15px; padding: 5px; \";\r\n\r\n  app.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  app.addEventListener(\"contextmenu\", (evt) => evt.preventDefault());\r\n\r\n  mxUtils.br(app);\r\n  mxResources.parse(\"entityfinderOld=entityFinder(old)\");\r\n\r\n  var wnd = new mxWindow(\r\n    mxResources.get(\"entityfinderOld\"),\r\n    app,\r\n    document.body.offsetWidth - 480,\r\n    140,\r\n    390,\r\n    480,\r\n    true,\r\n    true\r\n  );\r\n  wnd.destroyOnClose = false;\r\n  wnd.setMaximizable(false);\r\n  wnd.setResizable(false);\r\n  wnd.setClosable(true);\r\n  wnd.setVisible(false);\r\n\r\n  let addBtn = app.querySelector('button[name=\"onto-add-btn\"]');\r\n  let uploader = new _scripts_uploader_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](app);\r\n  addBtn.onclick = (evt) => {\r\n    evt.preventDefault();\r\n    uploader.addTrigger();\r\n  };\r\n\r\n  let signBar = app.querySelector(\".ontopanel-sign\");\r\n\r\n  let signLogin = new _scripts_login_system__WEBPACK_IMPORTED_MODULE_3__[\"default\"](app);\r\n\r\n  let signBtn = signBar.querySelector('button[name=\"signup\"]');\r\n  signBtn.onclick = (evt) => {\r\n    evt.preventDefault();\r\n    signLogin.signUp();\r\n  };\r\n\r\n  let loginBtn = signBar.querySelector('button[name=\"login\"]');\r\n  loginBtn.onclick = (evt) => {\r\n    evt.preventDefault();\r\n    signLogin.login();\r\n  };\r\n\r\n  let logoutBtn = signBar.querySelector('button[name=\"logout\"]');\r\n  logoutBtn.onclick = (evt) => {\r\n    evt.preventDefault();\r\n    signLogin.logout();\r\n  };\r\n\r\n  let ontoTreeContent = app.querySelector('div[name=\"onto-tree-content\"]');\r\n\r\n  const categoriesBtn = {\r\n    \"entityfinderold-tree-class-btn\": \"Class\",\r\n    \"entityfinderold-tree-op-btn\": \"ObjectProperty\",\r\n    \"entityfinderold-tree-dp-btn\": \"DatatypeProperty\",\r\n    \"entityfinderold-tree-ind-btn\": \"Individual\",\r\n    \"entityfinderold-tree-ap-btn\": \"AnnotationProperty\",\r\n    \"entityfinderold-tree-dt-btn\": \"Datatype\",\r\n  };\r\n  Object.keys(categoriesBtn).forEach((btnName) => {\r\n    let btn = app.querySelector(\"#\" + btnName);\r\n    btn.onclick = (evt) => {\r\n      let inputData =\r\n        _scripts_store__WEBPACK_IMPORTED_MODULE_2__.storeData.currentCategoriesContent.categories[\r\n          categoriesBtn[evt.target.id]\r\n        ];\r\n      let innerTree = ontoTreeContent.firstElementChild;\r\n      if (inputData.content) {\r\n        let newTree = new _scripts_onto_tree__WEBPACK_IMPORTED_MODULE_4__[\"default\"](app, ui, wnd, inputData);\r\n        innerTree.replaceWith(newTree.treeContent);\r\n      } else {\r\n        innerTree.innerHTML = \"\";\r\n      }\r\n    };\r\n  });\r\n\r\n  app.querySelector(\"#entityfinderold-onto-extra-btn-MSEO\").onclick = (evt) => {\r\n    evt.preventDefault();\r\n    fetch(\"plugins/ontopanelPlugin/ontoData/mseo_ontopanel.json\")\r\n      .then((response) => {\r\n        return response.json();\r\n      })\r\n      .then((data) => {\r\n        data.onto_table.namespaces = _scripts_store__WEBPACK_IMPORTED_MODULE_2__.storeData.mesoNamespace;\r\n        _scripts_store__WEBPACK_IMPORTED_MODULE_2__.storeData.modifyOntoBank(\r\n          [\"entityfinderold-onto-extra-btn-MSEO\", data],\r\n          \"add\"\r\n        );\r\n        _scripts_store__WEBPACK_IMPORTED_MODULE_2__.storeData.loadCurrentTable(data);\r\n      });\r\n  };\r\n\r\n  app.querySelector('button[name=\"namespace-btn\"]').onclick = (evt) => {\r\n    evt.preventDefault();\r\n\r\n    if (_scripts_store__WEBPACK_IMPORTED_MODULE_2__.storeData.currentCategoriesContent.title) {\r\n      let currentOnto =\r\n        _scripts_store__WEBPACK_IMPORTED_MODULE_2__.storeData.ontoBank[\r\n          \"entityfinder-onto-extra-btn-\" +\r\n            _scripts_store__WEBPACK_IMPORTED_MODULE_2__.storeData.currentCategoriesContent.title\r\n        ];\r\n\r\n      let currentNamespace = currentOnto.onto_table.namespaces.join(\"<br/>\");\r\n\r\n      let outputNamespace = currentNamespace + \"<br/>\";\r\n\r\n      let nameSpaceCell = new mxCell(\r\n        outputNamespace,\r\n        new mxGeometry(0, 0, 90, 26),\r\n        \"shape=note;whiteSpace=wrap;html=1;backgroundOutline=1;darkOpacity=0.05;\"\r\n      );\r\n\r\n      let size = ui.editor.graph.getPreferredSizeForCell(nameSpaceCell);\r\n      nameSpaceCell.geometry.width = size.width + 30;\r\n      nameSpaceCell.vertex = true;\r\n      let labelOffset = size.width + 30;\r\n      let graph = ui.editor.graph;\r\n\r\n      let windowPosition = mxUtils.convertPoint(\r\n        graph.container,\r\n        wnd.getX(),\r\n        wnd.getY()\r\n      );\r\n\r\n      let mousePosition = mxUtils.convertPoint(\r\n        graph.container,\r\n        mxEvent.getClientX(evt),\r\n        mxEvent.getClientY(evt)\r\n      );\r\n\r\n      let tr = ui.editor.graph.view.translate;\r\n      let scale = ui.editor.graph.view.scale;\r\n      let x = windowPosition.x / scale - tr.x - labelOffset;\r\n      let y = mousePosition.y / scale - tr.y;\r\n\r\n      const cellGround = [nameSpaceCell];\r\n      ui.editor.graph.importCells(cellGround, x, y);\r\n    }\r\n  };\r\n\r\n  return wnd;\r\n};\r\n\n\n//# sourceURL=webpack://drawio_test/./ontopanelSource/entityFinder_version1/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("922427c837f109cf3970")
/******/ })();
/******/ 
/******/ }
);