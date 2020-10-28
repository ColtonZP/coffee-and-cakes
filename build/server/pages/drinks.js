module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("V6ee");


/***/ }),

/***/ "V6ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_add_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ntPd");
/* harmony import */ var _public_add_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_add_svg__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Drinks({
  coffee,
  bag
}) {
  const {
    API_URL
  } = process.env;
  const {
    addItem
  } = bag;

  const isBadge = coffee => {
    const day = new Date(coffee.published_at);
    day.setDate(day.getDate() + 30);

    if (coffee.seasonal) {
      return __jsx("span", {
        className: "badge"
      }, "Seasonal");
    } else if (day >= new Date()) {
      return __jsx("span", {
        className: "badge"
      }, "New");
    }
  };

  return __jsx("div", {
    className: "container"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Drinks"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), __jsx("main", {
    className: "drinks"
  }, __jsx("h1", null, "Coffee"), __jsx("div", {
    className: "item-grid"
  }, coffee.map(coffee => __jsx("div", {
    className: "item-card",
    key: coffee.name
  }, __jsx("img", {
    className: "photo",
    src: coffee.image && coffee.image.url,
    alt: coffee.name
  }), __jsx("h2", null, isBadge(coffee), " ", coffee.name), __jsx("p", null, coffee.description), __jsx("div", {
    className: "nutrition"
  }, __jsx("span", null, __jsx("b", null, "Calories"), " ", coffee.calories), __jsx("span", null, __jsx("b", null, "Caffeine"), " ", coffee.caffeine, "mg")), __jsx("span", {
    className: "price"
  }, "$", coffee.price.toFixed(2)), __jsx("button", {
    onClick: () => addItem(coffee)
  }, __jsx("img", {
    src: _public_add_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "add"
  }), " ", __jsx("span", null, "Add")))))));
}
async function getServerSideProps() {
  const {
    API_URL
  } = process.env;
  const res = await fetch(`${API_URL}/coffees`);
  const coffee = await res.json();
  return {
    props: {
      coffee
    }
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "nazx":
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "ntPd":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA1MCA1MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNTsiPjxlbGxpcHNlIGN4PSIyNC45NjIiIGN5PSIyNC45NjIiIHJ4PSIyMi44MTciIHJ5PSIyMi44MDUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuMTdweDsiLz48cGF0aCBkPSJNMjQuOTYyLDkuMzIybC0wLDMxLjI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0LjE3cHg7Ii8+PHBhdGggZD0iTTkuMzE0LDI0Ljk2MmwzMS4yOTYsMCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NC4xN3B4OyIvPjwvc3ZnPg=="

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });