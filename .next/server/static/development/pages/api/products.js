module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// Product Model

const {
  String,
  Number
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  productType: {
    type: String,
    required: true
  },
  sku: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
  },
  viewCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Product', ProductSchema));

/***/ }),

/***/ "./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Product */ "./models/Product.js");
/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/connectDb */ "./utils/connectDb.js");


Object(_utils_connectDb__WEBPACK_IMPORTED_MODULE_1__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    page,
    size,
    searchTerm
  } = req.query; // console.log(searchTerm)
  // string to number

  const pageNum = Number(page);
  const pageSize = Number(size);
  let products = [];
  let totalDocts;

  if (searchTerm) {
    totalDocts = await _models_Product__WEBPACK_IMPORTED_MODULE_0__["default"].countDocuments({
      $or: [{
        productType: {
          $regex: `^${searchTerm}`
        }
      }, {
        name: new RegExp(searchTerm, 'i')
      }]
    });
  } else {
    totalDocts = await _models_Product__WEBPACK_IMPORTED_MODULE_0__["default"].countDocuments();
  }

  const totalPages = Math.ceil(totalDocts / pageSize);

  if (searchTerm) {
    if (pageNum === 1) {
      products = await _models_Product__WEBPACK_IMPORTED_MODULE_0__["default"].find({
        $or: [{
          productType: {
            $regex: `^${searchTerm}`
          }
        }, {
          name: new RegExp(searchTerm, 'i')
        }]
      }).collation({
        locale: 'en',
        strength: 1
      }).sort({
        viewCount: 'desc'
      }).limit(pageSize);
    } else {
      const skips = pageSize * (pageNum - 1);
      products = await _models_Product__WEBPACK_IMPORTED_MODULE_0__["default"].find({
        $or: [{
          productType: {
            $regex: `^${searchTerm}`
          }
        }, {
          name: new RegExp(searchTerm, 'i')
        }]
      }).collation({
        locale: 'en',
        strength: 1
      }).sort({
        viewCount: 'desc'
      }).skip(skips).limit(pageSize);
    }
  } else {
    if (pageNum === 1) {
      products = await _models_Product__WEBPACK_IMPORTED_MODULE_0__["default"].find().sort({
        name: 'desc'
      }).limit(pageSize);
    } else {
      const skips = pageSize * (pageNum - 1);
      products = await _models_Product__WEBPACK_IMPORTED_MODULE_0__["default"].find().sort({
        name: 'desc'
      }).skip(skips).limit(pageSize);
    }
  } // const products = await Product.find();


  res.status(200).json({
    products,
    totalPages
  });
});

/***/ }),

/***/ "./utils/connectDb.js":
/*!****************************!*\
  !*** ./utils/connectDb.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};

const connectDb = async () => {
  if (connection.isConnected) {
    // Using existing database connection
    // console.log("Using existing connection")
    return;
  } //Use new database connection


  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://Paul:Mau5trap@cluster0-selxu.mongodb.net/test", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }); // console.log("DB Connected");

  connection.isConnected = db.connections[0].isReadyState;
};

/* harmony default export */ __webpack_exports__["default"] = (connectDb);

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/api/products.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\David\Desktop\shoponix\pages\api\products.js */"./pages/api/products.js");


/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Nvbm5lY3REYi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbIlN0cmluZyIsIk51bWJlciIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiVHlwZXMiLCJQcm9kdWN0U2NoZW1hIiwibmFtZSIsInR5cGUiLCJyZXF1aXJlZCIsInByaWNlIiwicHJvZHVjdFR5cGUiLCJza3UiLCJ1bmlxdWUiLCJkZXNjcmlwdGlvbiIsIm1lZGlhVXJsIiwidmlld0NvdW50IiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJQcm9kdWN0IiwibW9kZWwiLCJjb25uZWN0RGIiLCJyZXEiLCJyZXMiLCJwYWdlIiwic2l6ZSIsInNlYXJjaFRlcm0iLCJxdWVyeSIsInBhZ2VOdW0iLCJwYWdlU2l6ZSIsInByb2R1Y3RzIiwidG90YWxEb2N0cyIsImNvdW50RG9jdW1lbnRzIiwiJG9yIiwiJHJlZ2V4IiwiUmVnRXhwIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwiZmluZCIsImNvbGxhdGlvbiIsImxvY2FsZSIsInN0cmVuZ3RoIiwic29ydCIsImxpbWl0Iiwic2tpcHMiLCJza2lwIiwic3RhdHVzIiwianNvbiIsImNvbm5lY3Rpb24iLCJpc0Nvbm5lY3RlZCIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsImlzUmVhZHlTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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LFlBQVUsQ0FBQ0MsV0FBWCxHQUF5QkMsRUFBRSxDQUFDTyxXQUFILENBQWUsQ0FBZixFQUFrQkMsWUFBM0M7QUFDSCxDQWpCRDs7QUFtQmV0Qyx3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxxQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXBpXFxwcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIi8vIFByb2R1Y3QgTW9kZWxcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IHsgU3RyaW5nLCBOdW1iZXIgfSA9IG1vbmdvb3NlLlNjaGVtYS5UeXBlcztcblxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcHJpY2U6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcHJvZHVjdFR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc2t1OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBtZWRpYVVybDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB2aWV3Q291bnQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgfVxufSx7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdQcm9kdWN0JywgUHJvZHVjdFNjaGVtYSk7IiwiaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vbW9kZWxzL1Byb2R1Y3QnO1xuaW1wb3J0IGNvbm5lY3REYiBmcm9tICcuLi8uLi91dGlscy9jb25uZWN0RGInO1xuXG5jb25uZWN0RGIoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7cGFnZSwgc2l6ZSwgc2VhcmNoVGVybX0gPSByZXEucXVlcnk7XG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoVGVybSlcbiAgICAvLyBzdHJpbmcgdG8gbnVtYmVyXG4gICAgY29uc3QgcGFnZU51bSA9IE51bWJlcihwYWdlKTtcbiAgICBjb25zdCBwYWdlU2l6ZSA9IE51bWJlcihzaXplKTtcbiAgICBsZXQgcHJvZHVjdHMgPSBbXTtcbiAgICBsZXQgdG90YWxEb2N0cztcbiAgICBpZihzZWFyY2hUZXJtKXtcbiAgICAgICAgdG90YWxEb2N0cyA9IGF3YWl0IFByb2R1Y3QuY291bnREb2N1bWVudHMoXG4gICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICRvcjogWyBcbiAgICAgICAgICAgICAgICAgICAgeyBwcm9kdWN0VHlwZTogeyAkcmVnZXg6IGBeJHtzZWFyY2hUZXJtfWAgIH0gfSwgXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogbmV3IFJlZ0V4cChzZWFyY2hUZXJtLCAnaScpIH0gXG4gICAgICAgICAgICAgICAgXSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b3RhbERvY3RzID0gYXdhaXQgUHJvZHVjdC5jb3VudERvY3VtZW50cygpO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsRG9jdHMgLyBwYWdlU2l6ZSk7XG4gICAgaWYgKHNlYXJjaFRlcm0pe1xuICAgICAgICBpZihwYWdlTnVtID09PSAxKXtcbiAgICAgICAgICAgIHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKFxuICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICRvcjogWyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvZHVjdFR5cGU6IHsgJHJlZ2V4OiBgXiR7c2VhcmNoVGVybX1gICB9IH0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBuZXcgUmVnRXhwKHNlYXJjaFRlcm0sICdpJykgfSBcbiAgICAgICAgICAgICAgICAgICAgXSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY29sbGF0aW9uKCB7IGxvY2FsZTogJ2VuJywgc3RyZW5ndGg6IDEgfSApXG4gICAgICAgICAgICAuc29ydCh7dmlld0NvdW50OiAnZGVzYyd9KS5saW1pdChwYWdlU2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBza2lwcyA9IHBhZ2VTaXplICogKHBhZ2VOdW0gLSAxKVxuICAgICAgICAgICAgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoXG4gICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgJG9yOiBbIFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9kdWN0VHlwZTogeyAkcmVnZXg6IGBeJHtzZWFyY2hUZXJtfWAgIH0gfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IG5ldyBSZWdFeHAoc2VhcmNoVGVybSwgJ2knKSB9IFxuICAgICAgICAgICAgICAgICAgICBdIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jb2xsYXRpb24oIHsgbG9jYWxlOiAnZW4nLCBzdHJlbmd0aDogMSB9IClcbiAgICAgICAgICAgIC5zb3J0KHt2aWV3Q291bnQ6ICdkZXNjJ30pLnNraXAoc2tpcHMpLmxpbWl0KHBhZ2VTaXplKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKHBhZ2VOdW0gPT09IDEpe1xuICAgICAgICAgICAgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoKS5zb3J0KHtuYW1lOiAnZGVzYyd9KS5saW1pdChwYWdlU2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBza2lwcyA9IHBhZ2VTaXplICogKHBhZ2VOdW0gLSAxKVxuICAgICAgICAgICAgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoKS5zb3J0KHtuYW1lOiAnZGVzYyd9KS5za2lwKHNraXBzKS5saW1pdChwYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZCgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtwcm9kdWN0cywgdG90YWxQYWdlc30pXG59IiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fVxuXG5jb25zdCBjb25uZWN0RGIgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCl7XG4gICAgICAgIC8vIFVzaW5nIGV4aXN0aW5nIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJVc2luZyBleGlzdGluZyBjb25uZWN0aW9uXCIpXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy9Vc2UgbmV3IGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fU1JWLCB7XG4gICAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiREIgQ29ubmVjdGVkXCIpO1xuXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLmlzUmVhZHlTdGF0ZTtcbn0gXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9