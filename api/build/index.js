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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/cashService.ts":
/*!****************************!*\
  !*** ./src/cashService.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nexports.__esModule = true;\r\nvar errors_1 = __webpack_require__(/*! ./errors */ \"./src/errors.ts\");\r\nvar availableNotes = [100, 50, 20, 10];\r\nfunction calculateNotes(cashAmount) {\r\n    if (!cashAmount) {\r\n        return {};\r\n    }\r\n    throwIfInvalidArgument(cashAmount);\r\n    var notesArray = {};\r\n    var _a = availableNotes.reduce(function (_a, note) {\r\n        var _b;\r\n        var notesResult = _a[0], cashLeft = _a[1];\r\n        var notesUsed = Math.floor(cashLeft / note);\r\n        var newCashLeft = cashLeft - notesUsed * note;\r\n        return [__assign({}, notesResult, (_b = {}, _b[note] = notesUsed, _b)), newCashLeft];\r\n    }, [notesArray, cashAmount]), notes = _a[0], rest = _a[1];\r\n    throwIfRestMoreThenZero(rest, cashAmount);\r\n    return notes;\r\n}\r\nexports.calculateNotes = calculateNotes;\r\nfunction throwIfRestMoreThenZero(restAmount, cashAmount) {\r\n    if (restAmount > 0) {\r\n        throw new errors_1.NoteUnavailableException(\"Cannot withdraw \" + cashAmount + \", rest \" + restAmount);\r\n    }\r\n}\r\nfunction throwIfInvalidArgument(cashAmount) {\r\n    if (cashAmount < 0) {\r\n        throw new errors_1.InvalidArgumentException(\"Invalid cashAmount \" + cashAmount);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/cashService.ts?");

/***/ }),

/***/ "./src/errors.ts":
/*!***********************!*\
  !*** ./src/errors.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nexports.__esModule = true;\r\nvar NoteUnavailableException = /** @class */ (function (_super) {\r\n    __extends(NoteUnavailableException, _super);\r\n    function NoteUnavailableException(message) {\r\n        var _newTarget = this.constructor;\r\n        var _this = _super.call(this, message) || this;\r\n        Object.setPrototypeOf(_this, _newTarget.prototype); // restore prototype chain\r\n        _this.name = NoteUnavailableException.name;\r\n        _this.message = message;\r\n        return _this;\r\n    }\r\n    return NoteUnavailableException;\r\n}(Error));\r\nexports.NoteUnavailableException = NoteUnavailableException;\r\nvar InvalidArgumentException = /** @class */ (function (_super) {\r\n    __extends(InvalidArgumentException, _super);\r\n    function InvalidArgumentException(message) {\r\n        var _newTarget = this.constructor;\r\n        var _this = _super.call(this, message) || this;\r\n        Object.setPrototypeOf(_this, _newTarget.prototype);\r\n        _this.name = InvalidArgumentException.name;\r\n        _this.message = message;\r\n        return _this;\r\n    }\r\n    return InvalidArgumentException;\r\n}(Error));\r\nexports.InvalidArgumentException = InvalidArgumentException;\r\n\n\n//# sourceURL=webpack:///./src/errors.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\r\nexports.__esModule = true;\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar cors = __webpack_require__(/*! cors */ \"cors\");\r\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/routes.ts\");\r\nvar app = express();\r\nvar _a = process.env.PORT, PORT = _a === void 0 ? 3001 : _a;\r\nvar corsOptions = {\r\n    origin: '*',\r\n    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',\r\n    preflightContinue: false,\r\n    optionsSuccessStatus: 204,\r\n};\r\napp.use(cors(corsOptions));\r\napp.use(bodyParser.json());\r\nroutes_1[\"default\"](app);\r\nif (__webpack_require__.c[__webpack_require__.s] === module) {\r\n    // True if file is executed. (Required for unit testing)\r\n    app.listen(PORT, function () {\r\n        console.log('server started at http://localhost:' + PORT);\r\n    });\r\n}\r\nexports[\"default\"] = app;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar cashService_1 = __webpack_require__(/*! ./cashService */ \"./src/cashService.ts\");\r\nfunction setupRoutes(app) {\r\n    app.get('/', function (req, res) {\r\n        res.send({\r\n            message: 'hello from cash-machine api',\r\n            date: new Date(),\r\n        });\r\n    });\r\n    app.post('/withdraw/:cashAmount', function (req, resp) {\r\n        console.log('Request /withdraw/:cashAmount', req.params.cashAmount);\r\n        try {\r\n            var cashAmount = req.params.cashAmount;\r\n            var notes = cashService_1.calculateNotes(cashAmount);\r\n            resp.send({ data: notes });\r\n        }\r\n        catch (error) {\r\n            console.error(error);\r\n            resp.status(400).send({ error: error });\r\n        }\r\n    });\r\n}\r\nexports[\"default\"] = setupRoutes;\r\n\n\n//# sourceURL=webpack:///./src/routes.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ })

/******/ });