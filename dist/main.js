/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cityNameInput": () => (/* binding */ cityNameInput),
/* harmony export */   "h1": () => (/* binding */ h1),
/* harmony export */   "img": () => (/* binding */ img),
/* harmony export */   "imgDay": () => (/* binding */ imgDay),
/* harmony export */   "imgEvening": () => (/* binding */ imgEvening),
/* harmony export */   "imgMorning": () => (/* binding */ imgMorning),
/* harmony export */   "imgNight": () => (/* binding */ imgNight),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "searchBtn": () => (/* binding */ searchBtn),
/* harmony export */   "setBackgroundImg": () => (/* binding */ setBackgroundImg),
/* harmony export */   "textCityName": () => (/* binding */ textCityName),
/* harmony export */   "textMainFeelsLike": () => (/* binding */ textMainFeelsLike),
/* harmony export */   "textMainHumidity": () => (/* binding */ textMainHumidity),
/* harmony export */   "textMainRainChance": () => (/* binding */ textMainRainChance),
/* harmony export */   "textMainTemp": () => (/* binding */ textMainTemp),
/* harmony export */   "textMainUVIndex": () => (/* binding */ textMainUVIndex),
/* harmony export */   "textMainWindSpeed": () => (/* binding */ textMainWindSpeed)
/* harmony export */ });
/* eslint-disable no-use-before-define */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const searchBtn = document.getElementById('searchBtn');
const cityNameInput = document.getElementById('searchLocation');
const img = document.getElementById('imgTempToday');
const h1 = document.getElementById('descriptionToday');
const textCityName = document.getElementById('cityName');
const textMainTemp = document.getElementById('mainTemp');
const textMainFeelsLike = document.getElementById('feelsLikeText');
const textMainUVIndex = document.getElementById('UVIndexText');
const textMainRainChance = document.getElementById('rainChanceText');
const textMainHumidity = document.getElementById('humidityText');
const textMainWindSpeed = document.getElementById('windSpeedText');
const imgEvening = document.getElementById('imgEvening');
const imgDay = document.getElementById('imgDay');
const imgMorning = document.getElementById('imgMorning');
const imgNight = document.getElementById('imgNight');

function setBackgroundImg() {
  const localTime = new Date().getHours();

  if (localTime <= 5) {
    imgNight.className = 'showImg';
  } else if (localTime > 5 && localTime <= 10) {
    imgMorning.className = 'showImg';
  } else if (localTime > 10 && localTime <= 16) {
    imgDay.className = 'showImg';
  } else if (localTime > 16 && localTime <= 19) {
    imgEvening.className = 'showImg';
  } else if (localTime > 19) {
    imgNight.className = 'showImg';
  }
}

function render(cityData, cityNameHTML) {
  const day = new Date().getDay();
  const weatherIcon = cityData.current.weather[0].icon;

  img.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  upperCase(h1, cityData.current.weather[0].description);

  textCityName.innerHTML = cityNameHTML;
  textMainTemp.innerHTML = `${cityData.current.temp.toFixed()} °C`;
  textMainFeelsLike.innerHTML = `${cityData.current.feels_like.toFixed()} °C`;
  textMainUVIndex.innerHTML = cityData.current.uvi;
  textMainRainChance.innerHTML = `${cityData.hourly[0].pop * 100} %`;
  textMainHumidity.innerHTML = `${cityData.current.humidity} %`;
  textMainWindSpeed.innerHTML = `${cityData.current.wind_speed} km/h`;
}

function upperCase(target, sentence) {
  const mySentence = sentence;
  const words = mySentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  target.innerHTML = words.join(' ');
}

function setDayHTML(day) {}


/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */



function getData() {
  _DOM__WEBPACK_IMPORTED_MODULE_0__.searchBtn.addEventListener('click', weatherData);

  async function weatherData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${_DOM__WEBPACK_IMPORTED_MODULE_0__.cityNameInput.value}&appid=5c03868b4ff8a4e2369e3d53fc0f15c9&units=metric`,

        { mode: 'cors' }
      );
      const initialResponse = await response.json();
      const cityLat = initialResponse.coord.lat;
      const cityLon = initialResponse.coord.lon;

      const responseMain = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=minutely&appid=5c03868b4ff8a4e2369e3d53fc0f15c9&units=metric`,
        { mode: 'cors' }
      );

      const cityData = await responseMain.json();

      _DOM__WEBPACK_IMPORTED_MODULE_0__.render(cityData, _DOM__WEBPACK_IMPORTED_MODULE_0__.cityNameInput.value);

      console.log(cityData);

      if (!response.ok) throw new Error();
    } catch {
      alert('could not find city');
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);


/***/ }),

/***/ "./src/getDataOnLoad.js":
/*!******************************!*\
  !*** ./src/getDataOnLoad.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */


// eslint-disable-next-line consistent-return
function getPosition() {
  if (navigator.geolocation) {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  }
  alert('Geolocation is not supported by this browser.');
  return {
    coords: {
      latitude: -23.5475,
      longitude: -46.6361,
    },
  };
}

function getDataOnLoad() {
  (async function weatherData() {
    try {
      const cordsRespons = await getPosition();
      const lat = cordsRespons.coords.latitude;
      const lon = cordsRespons.coords.longitude;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=5c03868b4ff8a4e2369e3d53fc0f15c9&units=metric`,
        { mode: 'cors' }
      );
      const responseCityName = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=5c03868b4ff8a4e2369e3d53fc0f15c9`
      );

      const cityData = await response.json();
      const cityName = await responseCityName.json();
      const cityNameHTML = cityName[0].name;

      _DOM__WEBPACK_IMPORTED_MODULE_0__.render(cityData, cityNameHTML);

      console.log(cityData);
      console.log(cityNameHTML);

      if (!response.ok) throw new Error();
    } catch {
      alert('could not find city');
    }
  })();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDataOnLoad);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var _getDataOnLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDataOnLoad */ "./src/getDataOnLoad.js");




_DOM__WEBPACK_IMPORTED_MODULE_0__.setBackgroundImg();
(0,_getDataOnLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_getData__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLG1DQUFtQyxtQ0FBbUM7QUFDdEUseUNBQXlDLGdCQUFnQjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBLGdEQUFnRCxZQUFZOztBQUU1RDs7QUFFQTtBQUNBLDhCQUE4QixpQ0FBaUM7QUFDL0QsbUNBQW1DLHVDQUF1QztBQUMxRTtBQUNBLG9DQUFvQyw4QkFBOEI7QUFDbEUsa0NBQWtDLDJCQUEyQjtBQUM3RCxtQ0FBbUMsNkJBQTZCO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBOztBQUU2Qjs7QUFFN0I7QUFDQSxFQUFFLDREQUE4Qjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELHFEQUF1QixDQUFDOztBQUVyRixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrREFBK0QsUUFBUSxPQUFPLFFBQVE7QUFDdEYsVUFBVTtBQUNWOztBQUVBOztBQUVBLE1BQU0sd0NBQVUsV0FBVyxxREFBdUI7O0FBRWxEOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDdkI7QUFDQTtBQUM2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxJQUFJLE9BQU8sSUFBSTtBQUM5RSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLDZEQUE2RCxJQUFJLE9BQU8sSUFBSTtBQUM1RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSx3Q0FBVTs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7OztVQ2xEN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0c7QUFDWTs7QUFFNUMsa0RBQW9CO0FBQ3BCLDBEQUFhO0FBQ2Isb0RBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXREYXRhT25Mb2FkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludCBuby1wbHVzcGx1czogW1wiZXJyb3JcIiwgeyBcImFsbG93Rm9yTG9vcEFmdGVydGhvdWdodHNcIjogdHJ1ZSB9XSAqL1xuLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiBbXCJlcnJvclwiLCB7IFwicHJvcHNcIjogZmFsc2UgfV0gKi9cblxuZXhwb3J0IGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCdG4nKTtcbmV4cG9ydCBjb25zdCBjaXR5TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaExvY2F0aW9uJyk7XG5leHBvcnQgY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ1RlbXBUb2RheScpO1xuZXhwb3J0IGNvbnN0IGgxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uVG9kYXknKTtcbmV4cG9ydCBjb25zdCB0ZXh0Q2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eU5hbWUnKTtcbmV4cG9ydCBjb25zdCB0ZXh0TWFpblRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblRlbXAnKTtcbmV4cG9ydCBjb25zdCB0ZXh0TWFpbkZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVsc0xpa2VUZXh0Jyk7XG5leHBvcnQgY29uc3QgdGV4dE1haW5VVkluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1VWSW5kZXhUZXh0Jyk7XG5leHBvcnQgY29uc3QgdGV4dE1haW5SYWluQ2hhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhaW5DaGFuY2VUZXh0Jyk7XG5leHBvcnQgY29uc3QgdGV4dE1haW5IdW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eVRleHQnKTtcbmV4cG9ydCBjb25zdCB0ZXh0TWFpbldpbmRTcGVlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kU3BlZWRUZXh0Jyk7XG5leHBvcnQgY29uc3QgaW1nRXZlbmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdFdmVuaW5nJyk7XG5leHBvcnQgY29uc3QgaW1nRGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ0RheScpO1xuZXhwb3J0IGNvbnN0IGltZ01vcm5pbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nTW9ybmluZycpO1xuZXhwb3J0IGNvbnN0IGltZ05pZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ05pZ2h0Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRCYWNrZ3JvdW5kSW1nKCkge1xuICBjb25zdCBsb2NhbFRpbWUgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG5cbiAgaWYgKGxvY2FsVGltZSA8PSA1KSB7XG4gICAgaW1nTmlnaHQuY2xhc3NOYW1lID0gJ3Nob3dJbWcnO1xuICB9IGVsc2UgaWYgKGxvY2FsVGltZSA+IDUgJiYgbG9jYWxUaW1lIDw9IDEwKSB7XG4gICAgaW1nTW9ybmluZy5jbGFzc05hbWUgPSAnc2hvd0ltZyc7XG4gIH0gZWxzZSBpZiAobG9jYWxUaW1lID4gMTAgJiYgbG9jYWxUaW1lIDw9IDE2KSB7XG4gICAgaW1nRGF5LmNsYXNzTmFtZSA9ICdzaG93SW1nJztcbiAgfSBlbHNlIGlmIChsb2NhbFRpbWUgPiAxNiAmJiBsb2NhbFRpbWUgPD0gMTkpIHtcbiAgICBpbWdFdmVuaW5nLmNsYXNzTmFtZSA9ICdzaG93SW1nJztcbiAgfSBlbHNlIGlmIChsb2NhbFRpbWUgPiAxOSkge1xuICAgIGltZ05pZ2h0LmNsYXNzTmFtZSA9ICdzaG93SW1nJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGNpdHlEYXRhLCBjaXR5TmFtZUhUTUwpIHtcbiAgY29uc3QgZGF5ID0gbmV3IERhdGUoKS5nZXREYXkoKTtcbiAgY29uc3Qgd2VhdGhlckljb24gPSBjaXR5RGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbjtcblxuICBpbWcuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckljb259QDJ4LnBuZ2A7XG5cbiAgdXBwZXJDYXNlKGgxLCBjaXR5RGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuXG4gIHRleHRDaXR5TmFtZS5pbm5lckhUTUwgPSBjaXR5TmFtZUhUTUw7XG4gIHRleHRNYWluVGVtcC5pbm5lckhUTUwgPSBgJHtjaXR5RGF0YS5jdXJyZW50LnRlbXAudG9GaXhlZCgpfSDCsENgO1xuICB0ZXh0TWFpbkZlZWxzTGlrZS5pbm5lckhUTUwgPSBgJHtjaXR5RGF0YS5jdXJyZW50LmZlZWxzX2xpa2UudG9GaXhlZCgpfSDCsENgO1xuICB0ZXh0TWFpblVWSW5kZXguaW5uZXJIVE1MID0gY2l0eURhdGEuY3VycmVudC51dmk7XG4gIHRleHRNYWluUmFpbkNoYW5jZS5pbm5lckhUTUwgPSBgJHtjaXR5RGF0YS5ob3VybHlbMF0ucG9wICogMTAwfSAlYDtcbiAgdGV4dE1haW5IdW1pZGl0eS5pbm5lckhUTUwgPSBgJHtjaXR5RGF0YS5jdXJyZW50Lmh1bWlkaXR5fSAlYDtcbiAgdGV4dE1haW5XaW5kU3BlZWQuaW5uZXJIVE1MID0gYCR7Y2l0eURhdGEuY3VycmVudC53aW5kX3NwZWVkfSBrbS9oYDtcbn1cblxuZnVuY3Rpb24gdXBwZXJDYXNlKHRhcmdldCwgc2VudGVuY2UpIHtcbiAgY29uc3QgbXlTZW50ZW5jZSA9IHNlbnRlbmNlO1xuICBjb25zdCB3b3JkcyA9IG15U2VudGVuY2Uuc3BsaXQoJyAnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgd29yZHNbaV0gPSB3b3Jkc1tpXVswXS50b1VwcGVyQ2FzZSgpICsgd29yZHNbaV0uc3Vic3RyKDEpO1xuICB9XG5cbiAgdGFyZ2V0LmlubmVySFRNTCA9IHdvcmRzLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gc2V0RGF5SFRNTChkYXkpIHt9XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NJztcblxuZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgRE9NLnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdlYXRoZXJEYXRhKTtcblxuICBhc3luYyBmdW5jdGlvbiB3ZWF0aGVyRGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtET00uY2l0eU5hbWVJbnB1dC52YWx1ZX0mYXBwaWQ9NWMwMzg2OGI0ZmY4YTRlMjM2OWUzZDUzZmMwZjE1YzkmdW5pdHM9bWV0cmljYCxcblxuICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgICApO1xuICAgICAgY29uc3QgaW5pdGlhbFJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3QgY2l0eUxhdCA9IGluaXRpYWxSZXNwb25zZS5jb29yZC5sYXQ7XG4gICAgICBjb25zdCBjaXR5TG9uID0gaW5pdGlhbFJlc3BvbnNlLmNvb3JkLmxvbjtcblxuICAgICAgY29uc3QgcmVzcG9uc2VNYWluID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjaXR5TGF0fSZsb249JHtjaXR5TG9ufSZleGNsdWRlPW1pbnV0ZWx5JmFwcGlkPTVjMDM4NjhiNGZmOGE0ZTIzNjllM2Q1M2ZjMGYxNWM5JnVuaXRzPW1ldHJpY2AsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2VNYWluLmpzb24oKTtcblxuICAgICAgRE9NLnJlbmRlcihjaXR5RGF0YSwgRE9NLmNpdHlOYW1lSW5wdXQudmFsdWUpO1xuXG4gICAgICBjb25zb2xlLmxvZyhjaXR5RGF0YSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgYWxlcnQoJ2NvdWxkIG5vdCBmaW5kIGNpdHknKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5mdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcbiAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzLCByZWopO1xuICAgIH0pO1xuICB9XG4gIGFsZXJ0KCdHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3Nlci4nKTtcbiAgcmV0dXJuIHtcbiAgICBjb29yZHM6IHtcbiAgICAgIGxhdGl0dWRlOiAtMjMuNTQ3NSxcbiAgICAgIGxvbmdpdHVkZTogLTQ2LjYzNjEsXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YU9uTG9hZCgpIHtcbiAgKGFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJEYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb3Jkc1Jlc3BvbnMgPSBhd2FpdCBnZXRQb3NpdGlvbigpO1xuICAgICAgY29uc3QgbGF0ID0gY29yZHNSZXNwb25zLmNvb3Jkcy5sYXRpdHVkZTtcbiAgICAgIGNvbnN0IGxvbiA9IGNvcmRzUmVzcG9ucy5jb29yZHMubG9uZ2l0dWRlO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZleGNsdWRlPW1pbnV0ZWx5JmFwcGlkPTVjMDM4NjhiNGZmOGE0ZTIzNjllM2Q1M2ZjMGYxNWM5JnVuaXRzPW1ldHJpY2AsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICAgICk7XG4gICAgICBjb25zdCByZXNwb25zZUNpdHlOYW1lID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL3JldmVyc2U/bGF0PSR7bGF0fSZsb249JHtsb259JmxpbWl0PTUmYXBwaWQ9NWMwMzg2OGI0ZmY4YTRlMjM2OWUzZDUzZmMwZjE1YzlgXG4gICAgICApO1xuXG4gICAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IGNpdHlOYW1lID0gYXdhaXQgcmVzcG9uc2VDaXR5TmFtZS5qc29uKCk7XG4gICAgICBjb25zdCBjaXR5TmFtZUhUTUwgPSBjaXR5TmFtZVswXS5uYW1lO1xuXG4gICAgICBET00ucmVuZGVyKGNpdHlEYXRhLCBjaXR5TmFtZUhUTUwpO1xuXG4gICAgICBjb25zb2xlLmxvZyhjaXR5RGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhjaXR5TmFtZUhUTUwpO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGFsZXJ0KCdjb3VsZCBub3QgZmluZCBjaXR5Jyk7XG4gICAgfVxuICB9KSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhT25Mb2FkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBET00gZnJvbSAnLi9ET00nO1xuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9nZXREYXRhJztcbmltcG9ydCBnZXREYXRhT25Mb2FkIGZyb20gJy4vZ2V0RGF0YU9uTG9hZCc7XG5cbkRPTS5zZXRCYWNrZ3JvdW5kSW1nKCk7XG5nZXREYXRhT25Mb2FkKCk7XG5nZXREYXRhKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=