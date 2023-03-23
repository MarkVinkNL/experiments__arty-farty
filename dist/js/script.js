/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Good luck!
var options = [[0, 0, 0, 0], [1, 1, 1, 1], [0, 1, 1, 0], [0, 0, 1, 1], [1, 1, 0, 0], [1, 0, 0, 1], [1, 0, 0, 1], [1, 1, 0, 0], [0, 0, 1, 1], [0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1], [1, 0, 0, 0], [0, 1, 0, 0], [1, 1, 0, 1], [1, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1], [1, 1, 1, 1], [0, 0, 0, 0]];
_toConsumableArray(document.querySelectorAll("[arty]")).forEach(function (arty) {
  var row = arty.getAttribute("arty");
  var amount = row * row;
  var scrambleCount = 0;

  // console.log(options[0]);

  arty.style.setProperty("--count", row);
  for (var i = 0; i < amount; i++) {
    var div = document.createElement("div");
    arty.appendChild(div);
  }
  var map = [];
  // Seed array met dummy data
  for (var y = 0; y < row; y++) {
    yArray = [];
    for (var x = 0; x < row; x++) {
      yArray.push(1);
    }
    map.push(yArray);
  }
  //Seed eerste grid point met random waarde
  map[0][0] = Math.floor(Math.random() * 20);

  //console.log(map);

  // map.forEach((xArray, y) => {
  //   xArray.forEach((x) => {
  //     console.log(x);
  //   });
  // });

  // console.log("---------");
  // console.log(row);
  // console.log(amount);
  // console.log("---------");

  // console.log("---------");

  function scramble() {
    if (scrambleCount >= 5) {
      map[0][0] = Math.floor(Math.random() * 20);
      scrambleCount = 0;
    }
    var _loop = function _loop() {
      var y = Math.ceil((_i + 1) / row) - 1;
      var x = _i % row;

      //console.log("y:" + y + " - x:" + x);

      if (_i == 0) return "continue";
      var borderTop = "none";
      if (y - 1 >= 0) {
        borderTop = options[map[y - 1][x]][2];
      }

      // let borderRight = "none";
      // if (x + 1 < row) {
      //   borderRight = options[map[y][x + 1]][3];
      // }

      // let borderBottom = "none";
      // if (y + 1 < row) {
      //   borderBottom = options[map[y + 1][x]][0];
      // }

      var borderLeft = "none";
      if (x - 1 >= 0) {
        borderLeft = options[map[y][x - 1]][1];
      }

      //console.log({ borderTop, borderLeft });

      var figureOptionsSet = [];
      if ((borderTop == 0 || borderTop == 1) && (borderLeft == 0 || borderLeft == 1)) {
        // console.log({ borderTop, borderLeft });
        options.forEach(function (option, index) {
          if (option[3] == borderLeft && option[0] == borderTop) {
            figureOptionsSet.push(index);
          }
        });
      } else if (borderTop == 0 || borderTop == 1) {
        // console.log({ borderTop });
        options.forEach(function (option, index) {
          if (option[0] == borderTop) {
            figureOptionsSet.push(index);
          }
        });
      } else if (borderLeft == 0 || borderLeft == 1) {
        // console.log({ borderLeft });
        options.forEach(function (option, index) {
          if (option[3] == borderLeft) {
            figureOptionsSet.push(index);
          }
        });
      }

      // options.forEach((option, index) => {
      //   let checkTop = true;
      //   if (borderTop == 0 || borderTop == 1) {
      //     if (option[0] != borderTop) checkTop = false;
      //   }

      //   let checkRight = true;
      //   if (borderRight == 0 || borderRight == 1) {
      //     if (option[1] != borderRight) checkRight = false;
      //   }

      //   let checkBottom = true;
      //   if (borderBottom == 0 || borderBottom == 1) {
      //     if (option[0] != borderBottom) checkBottom = false;
      //   }

      //   let checkLeft = true;
      //   if (borderLeft == 0 || borderLeft == 1) {
      //     if (option[0] != borderLeft) checkLeft = false;
      //   }

      //   if (checkTop && checkRight && checkBottom && checkLeft) figureOptionsSet.push(index);
      // });

      var figureOptions = _toConsumableArray(new Set(figureOptionsSet));

      // console.log("---------");
      // console.log(figureOptions);

      map[y][x] = figureOptions[Math.floor(Math.random() * figureOptions.length)];
    };
    for (var _i = 0; _i < amount; _i++) {
      var _ret = _loop();
      if (_ret === "continue") continue;
    }
    scrambleCount++;
    _toConsumableArray(arty.childNodes).forEach(function (block, i) {
      var y = Math.ceil((i + 1) / row) - 1;
      var x = i % row;
      block.setAttribute("class", "arty__block block__variant-" + (map[y][x] + 1));
    });
  }
  console.log(arty);
  arty.addEventListener("click", function () {
    console.log("cl");
    scramble();
  });
  scramble();
  setInterval(function () {
    scramble();
  }, 5000);
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/script": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkarty"] = self["webpackChunkarty"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/js/script.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;