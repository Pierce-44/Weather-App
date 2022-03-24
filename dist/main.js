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
/* harmony export */   "arrowLeft": () => (/* binding */ arrowLeft),
/* harmony export */   "arrowRight": () => (/* binding */ arrowRight),
/* harmony export */   "arrows": () => (/* binding */ arrows),
/* harmony export */   "carousel": () => (/* binding */ carousel),
/* harmony export */   "cityNameInput": () => (/* binding */ cityNameInput),
/* harmony export */   "dailyBtn": () => (/* binding */ dailyBtn),
/* harmony export */   "daysContent": () => (/* binding */ daysContent),
/* harmony export */   "h1": () => (/* binding */ h1),
/* harmony export */   "hourRow1": () => (/* binding */ hourRow1),
/* harmony export */   "hourRow2": () => (/* binding */ hourRow2),
/* harmony export */   "hourRow3": () => (/* binding */ hourRow3),
/* harmony export */   "hourlyBtn": () => (/* binding */ hourlyBtn),
/* harmony export */   "img": () => (/* binding */ img),
/* harmony export */   "imgDay": () => (/* binding */ imgDay),
/* harmony export */   "imgEvening": () => (/* binding */ imgEvening),
/* harmony export */   "imgMorning": () => (/* binding */ imgMorning),
/* harmony export */   "imgNight": () => (/* binding */ imgNight),
/* harmony export */   "nextButton": () => (/* binding */ nextButton),
/* harmony export */   "prevButton": () => (/* binding */ prevButton),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "row1": () => (/* binding */ row1),
/* harmony export */   "searchBtn": () => (/* binding */ searchBtn),
/* harmony export */   "setBackgroundImg": () => (/* binding */ setBackgroundImg),
/* harmony export */   "textCityName": () => (/* binding */ textCityName),
/* harmony export */   "textMainFeelsLike": () => (/* binding */ textMainFeelsLike),
/* harmony export */   "textMainHumidity": () => (/* binding */ textMainHumidity),
/* harmony export */   "textMainRainChance": () => (/* binding */ textMainRainChance),
/* harmony export */   "textMainTemp": () => (/* binding */ textMainTemp),
/* harmony export */   "textMainUVIndex": () => (/* binding */ textMainUVIndex),
/* harmony export */   "textMainWindSpeed": () => (/* binding */ textMainWindSpeed),
/* harmony export */   "track": () => (/* binding */ track)
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
const hourRow1 = document.querySelectorAll('.hourlyRow1');
const row1 = document.getElementsByClassName('hourlyRow1');
const hourRow2 = document.querySelectorAll('.hourlyRow2');
const hourRow3 = document.querySelectorAll('.hourlyRow3');
const dailyBtn = document.getElementById('weekForecast');
const hourlyBtn = document.getElementById('hourlyForecast');
const daysContent = document.querySelectorAll('.days');
const arrows = document.querySelectorAll('.arrow');
const arrowRight = document.getElementById('arrowRight');
const arrowLeft = document.getElementById('arrowLeft');
const carousel = document.querySelector('.carousel');
const track = document.querySelector('.carousel__track');
const prevButton = document.querySelector('#arrowLeft');
const nextButton = document.querySelector('#arrowRight');

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
  const weatherIcon = cityData.current.weather[0].icon;

  img.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  upperCase(h1, cityData.current.weather[0].description);

  textCityName.innerHTML = cityNameHTML;
  textMainTemp.innerHTML = `${cityData.current.temp.toFixed()} °C`;
  textMainFeelsLike.innerHTML = `${cityData.current.feels_like.toFixed()} °C`;
  textMainUVIndex.innerHTML = cityData.current.uvi;
  textMainRainChance.innerHTML = `${cityData.hourly[0].pop * 100} %`;
  textMainHumidity.innerHTML = `${cityData.current.humidity} %`;
  textMainWindSpeed.innerHTML = `${cityData.current.wind_speed} km/h`;

  // renders the API weather data for the next 7 days
  for (let i = 0; i < 7; i++) {
    const dayTemp = document.getElementById(`day${i}Temp`);
    const nightTemp = document.getElementById(`night${i}Temp`);
    const icon = document.getElementById(`icon${i}`);
    const iconLink = cityData.daily[i].weather[0].icon;
    const iconSRC = `https://openweathermap.org/img/wn/${iconLink}@2x.png`;

    dayTemp.innerHTML = `${cityData.daily[i].temp.day.toFixed()} °C`;
    nightTemp.innerHTML = `${cityData.daily[i].temp.night.toFixed()} °C`;
    icon.src = iconSRC;
  }

  // renders the API weather data for the next 24 hours
  for (let i = 0; i < 24; i++) {
    const hourTemp = document.getElementById(`hourTemp${i}`);
    const hourIcon = document.getElementById(`hourIcon${i}`);
    const iconLink = cityData.hourly[i].weather[0].icon;
    const iconSRC = `https://openweathermap.org/img/wn/${iconLink}@2x.png`;

    hourTemp.innerHTML = `${cityData.hourly[i].temp.toFixed()} °C`;
    hourIcon.src = iconSRC;
  }

  renderDayNameHTML();
  renderHourTag();
}

function upperCase(target, sentence) {
  const mySentence = sentence;
  const words = mySentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  target.innerHTML = words.join(' ');
}

function renderDayNameHTML() {
  const d = new Date();
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  for (let i = 0; i < weekday.length - d.getDay(); i++) {
    const getContainer = document.getElementById(`day${i}`);
    const n = weekday[d.getDay() + i];

    getContainer.innerHTML = n;
  }

  for (let i = 0; i < d.getDay(); i++) {
    const day = 7 - d.getDay() + i;
    const getContainer = document.getElementById(`day${day}`);
    const n = weekday[i];

    getContainer.innerHTML = n;
  }
}

function renderHourTag() {
  const h = new Date().getHours();

  // having trouble when at midnight so added a quick fix
  if (h !== 0) {
    for (let i = 0; i <= 24 - h; i++) {
      const getContainer = document.getElementById(`hour${i}`);

      getContainer.innerHTML = `${h + i}:00`;
    }
  } else {
    for (let i = 0; i <= 23 - h; i++) {
      const getContainer = document.getElementById(`hour${i}`);

      getContainer.innerHTML = `${h + i}:00`;
    }
  }

  for (let i = 0; i < h - 1; i++) {
    const hour = 25 - h + i;
    const getContainer = document.getElementById(`hour${hour}`);

    getContainer.innerHTML = `${i + 1}:00`;
  }
}


/***/ }),

/***/ "./src/functionality.js":
/*!******************************!*\
  !*** ./src/functionality.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */


function functionality() {
  _DOM__WEBPACK_IMPORTED_MODULE_0__.dailyBtn.addEventListener('click', dailyDisplay);
  _DOM__WEBPACK_IMPORTED_MODULE_0__.hourlyBtn.addEventListener('click', hourlyDisplay);
}

function dailyDisplay() {
  const prevButton = document.querySelector('#arrowLeft');
  const nextButton = document.querySelector('#arrowRight');

  _DOM__WEBPACK_IMPORTED_MODULE_0__.hourlyBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.671)';
  _DOM__WEBPACK_IMPORTED_MODULE_0__.dailyBtn.style.backgroundColor = 'rgb(190, 242, 255)';

  _DOM__WEBPACK_IMPORTED_MODULE_0__.carousel.style.display = 'none';

  // this removes any previous event listeners
  prevButton.replaceWith(prevButton.cloneNode(true));
  nextButton.replaceWith(nextButton.cloneNode(true));

  _DOM__WEBPACK_IMPORTED_MODULE_0__.arrows.forEach((element) => {
    element.style.display = 'none';
  });

  _DOM__WEBPACK_IMPORTED_MODULE_0__.daysContent.forEach((element) => {
    element.style.display = 'flex';
  });

  _DOM__WEBPACK_IMPORTED_MODULE_0__.daysContent.forEach((element) => {
    element.style.animation = 'fade 0.15s ease-in-out 1 forwards';
  });
}

function hourlyDisplay() {
  _DOM__WEBPACK_IMPORTED_MODULE_0__.carousel.style.animation = 'fade 0.15s ease-in-out 1 forwards';
  _DOM__WEBPACK_IMPORTED_MODULE_0__.carousel.style.display = 'initial';
  _DOM__WEBPACK_IMPORTED_MODULE_0__.dailyBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.671)';
  _DOM__WEBPACK_IMPORTED_MODULE_0__.hourlyBtn.style.backgroundColor = 'rgb(190, 242, 255)';

  _DOM__WEBPACK_IMPORTED_MODULE_0__.daysContent.forEach((element) => {
    element.style.display = 'none';
  });

  _DOM__WEBPACK_IMPORTED_MODULE_0__.arrows.forEach((element) => {
    if (window.innerWidth > 600) {
      element.style.display = 'flex';
    } else if (window.innerWidth < 600) {
      element.style.display = 'none';
    }
  });
  carousel();
}

function carousel() {
  const slides = Array.from(_DOM__WEBPACK_IMPORTED_MODULE_0__.track.children);
  const slideWidth = slides[0].getBoundingClientRect().width;
  const prevButton = document.querySelector('#arrowLeft');
  const nextButton = document.querySelector('#arrowRight');

  slides[0].classList.add('current-slide');
  slides[1].classList.remove('current-slide');
  slides[2].classList.remove('current-slide');
  _DOM__WEBPACK_IMPORTED_MODULE_0__.track.style.transform = 'translateX(0)';

  // arrange the slides next to eachother
  const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  };
  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };

  // left arrow, move slides to the left
  prevButton.addEventListener('click', () => {
    const currentSlide = document.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(_DOM__WEBPACK_IMPORTED_MODULE_0__.track, currentSlide, prevSlide);
  });

  // right arrow, move slides to the right
  nextButton.addEventListener('click', () => {
    const currentSlide = document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(_DOM__WEBPACK_IMPORTED_MODULE_0__.track, currentSlide, nextSlide);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (functionality);


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
  _DOM__WEBPACK_IMPORTED_MODULE_0__.cityNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      weatherData();
    }
  });

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

      if (!response.ok) throw new Error();
    } catch (error) {
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
      function rej() {
        if (localStorage.getItem('geolocation') !== 'rejected') {
          localStorage.setItem('geolocation', 'rejected');
          location.reload();
        }
      }
    });
  }
  alert('Geolocation is not supported by this browser.');
}

function getDataOnLoad() {
  (async function weatherData() {
    try {
      // Trying to load a a default location when geolcation is rejected
      // Seems to be working but it definitely could be done better
      // Using a filler loaction in the HTML to be used when geolocation is rejected would have been more straightforward
      // -------------------------------------------------------------------------------------------------------
      let lat = -23.5475;
      let lon = -46.6361;

      navigator.permissions.query({ name: 'geolocation' }).then((status) => {
        localStorage.setItem('geolocation', 'accepted');
      });

      if (localStorage.getItem('geolocation') !== 'rejected') {
        const cordsRespons = await getPosition();
        lat = cordsRespons.coords.latitude;
        lon = cordsRespons.coords.longitude;
      }
      // -------------------------------------------------------------------------------------------------------
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=5c03868b4ff8a4e2369e3d53fc0f15c9&units=metric`,
        { mode: 'cors' }
      );
      const responseCityName = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=5c03868b4ff8a4e2369e3d53fc0f15c9`
      );

      const cityData = await response.json();
      const cityName = await responseCityName.json();
      const cityNameHTML = cityName[0].name;

      _DOM__WEBPACK_IMPORTED_MODULE_0__.render(cityData, cityNameHTML);

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
/* harmony import */ var _functionality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functionality */ "./src/functionality.js");





_DOM__WEBPACK_IMPORTED_MODULE_0__.setBackgroundImg();
(0,_getDataOnLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_getData__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_functionality__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7QUFDSDs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7VUM3RDdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDRztBQUNZO0FBQ0E7O0FBRTVDLGtEQUFvQjtBQUNwQiwwREFBYTtBQUNiLG9EQUFPO0FBQ1AsMERBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25hbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldERhdGFPbkxvYWQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50IG5vLXBsdXNwbHVzOiBbXCJlcnJvclwiLCB7IFwiYWxsb3dGb3JMb29wQWZ0ZXJ0aG91Z2h0c1wiOiB0cnVlIH1dICovXG4vKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IFtcImVycm9yXCIsIHsgXCJwcm9wc1wiOiBmYWxzZSB9XSAqL1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJ0bicpO1xuZXhwb3J0IGNvbnN0IGNpdHlOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoTG9jYXRpb24nKTtcbmV4cG9ydCBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nVGVtcFRvZGF5Jyk7XG5leHBvcnQgY29uc3QgaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25Ub2RheScpO1xuZXhwb3J0IGNvbnN0IHRleHRDaXR5TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5TmFtZScpO1xuZXhwb3J0IGNvbnN0IHRleHRNYWluVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluVGVtcCcpO1xuZXhwb3J0IGNvbnN0IHRleHRNYWluRmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzTGlrZVRleHQnKTtcbmV4cG9ydCBjb25zdCB0ZXh0TWFpblVWSW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVVZJbmRleFRleHQnKTtcbmV4cG9ydCBjb25zdCB0ZXh0TWFpblJhaW5DaGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbkNoYW5jZVRleHQnKTtcbmV4cG9ydCBjb25zdCB0ZXh0TWFpbkh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5VGV4dCcpO1xuZXhwb3J0IGNvbnN0IHRleHRNYWluV2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRTcGVlZFRleHQnKTtcbmV4cG9ydCBjb25zdCBpbWdFdmVuaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ0V2ZW5pbmcnKTtcbmV4cG9ydCBjb25zdCBpbWdEYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nRGF5Jyk7XG5leHBvcnQgY29uc3QgaW1nTW9ybmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdNb3JuaW5nJyk7XG5leHBvcnQgY29uc3QgaW1nTmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nTmlnaHQnKTtcbmV4cG9ydCBjb25zdCBob3VyUm93MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VybHlSb3cxJyk7XG5leHBvcnQgY29uc3Qgcm93MSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hvdXJseVJvdzEnKTtcbmV4cG9ydCBjb25zdCBob3VyUm93MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VybHlSb3cyJyk7XG5leHBvcnQgY29uc3QgaG91clJvdzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cmx5Um93MycpO1xuZXhwb3J0IGNvbnN0IGRhaWx5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtGb3JlY2FzdCcpO1xuZXhwb3J0IGNvbnN0IGhvdXJseUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VybHlGb3JlY2FzdCcpO1xuZXhwb3J0IGNvbnN0IGRheXNDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRheXMnKTtcbmV4cG9ydCBjb25zdCBhcnJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJyb3cnKTtcbmV4cG9ydCBjb25zdCBhcnJvd1JpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fycm93UmlnaHQnKTtcbmV4cG9ydCBjb25zdCBhcnJvd0xlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3dMZWZ0Jyk7XG5leHBvcnQgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKTtcbmV4cG9ydCBjb25zdCB0cmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fdHJhY2snKTtcbmV4cG9ydCBjb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fycm93TGVmdCcpO1xuZXhwb3J0IGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyb3dSaWdodCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QmFja2dyb3VuZEltZygpIHtcbiAgY29uc3QgbG9jYWxUaW1lID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuXG4gIGlmIChsb2NhbFRpbWUgPD0gNSkge1xuICAgIGltZ05pZ2h0LmNsYXNzTmFtZSA9ICdzaG93SW1nJztcbiAgfSBlbHNlIGlmIChsb2NhbFRpbWUgPiA1ICYmIGxvY2FsVGltZSA8PSAxMCkge1xuICAgIGltZ01vcm5pbmcuY2xhc3NOYW1lID0gJ3Nob3dJbWcnO1xuICB9IGVsc2UgaWYgKGxvY2FsVGltZSA+IDEwICYmIGxvY2FsVGltZSA8PSAxNikge1xuICAgIGltZ0RheS5jbGFzc05hbWUgPSAnc2hvd0ltZyc7XG4gIH0gZWxzZSBpZiAobG9jYWxUaW1lID4gMTYgJiYgbG9jYWxUaW1lIDw9IDE5KSB7XG4gICAgaW1nRXZlbmluZy5jbGFzc05hbWUgPSAnc2hvd0ltZyc7XG4gIH0gZWxzZSBpZiAobG9jYWxUaW1lID4gMTkpIHtcbiAgICBpbWdOaWdodC5jbGFzc05hbWUgPSAnc2hvd0ltZyc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihjaXR5RGF0YSwgY2l0eU5hbWVIVE1MKSB7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gY2l0eURhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb247XG5cbiAgaW1nLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVySWNvbn1AMngucG5nYDtcblxuICB1cHBlckNhc2UoaDEsIGNpdHlEYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG5cbiAgdGV4dENpdHlOYW1lLmlubmVySFRNTCA9IGNpdHlOYW1lSFRNTDtcbiAgdGV4dE1haW5UZW1wLmlubmVySFRNTCA9IGAke2NpdHlEYXRhLmN1cnJlbnQudGVtcC50b0ZpeGVkKCl9IMKwQ2A7XG4gIHRleHRNYWluRmVlbHNMaWtlLmlubmVySFRNTCA9IGAke2NpdHlEYXRhLmN1cnJlbnQuZmVlbHNfbGlrZS50b0ZpeGVkKCl9IMKwQ2A7XG4gIHRleHRNYWluVVZJbmRleC5pbm5lckhUTUwgPSBjaXR5RGF0YS5jdXJyZW50LnV2aTtcbiAgdGV4dE1haW5SYWluQ2hhbmNlLmlubmVySFRNTCA9IGAke2NpdHlEYXRhLmhvdXJseVswXS5wb3AgKiAxMDB9ICVgO1xuICB0ZXh0TWFpbkh1bWlkaXR5LmlubmVySFRNTCA9IGAke2NpdHlEYXRhLmN1cnJlbnQuaHVtaWRpdHl9ICVgO1xuICB0ZXh0TWFpbldpbmRTcGVlZC5pbm5lckhUTUwgPSBgJHtjaXR5RGF0YS5jdXJyZW50LndpbmRfc3BlZWR9IGttL2hgO1xuXG4gIC8vIHJlbmRlcnMgdGhlIEFQSSB3ZWF0aGVyIGRhdGEgZm9yIHRoZSBuZXh0IDcgZGF5c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGNvbnN0IGRheVRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGF5JHtpfVRlbXBgKTtcbiAgICBjb25zdCBuaWdodFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbmlnaHQke2l9VGVtcGApO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaWNvbiR7aX1gKTtcbiAgICBjb25zdCBpY29uTGluayA9IGNpdHlEYXRhLmRhaWx5W2ldLndlYXRoZXJbMF0uaWNvbjtcbiAgICBjb25zdCBpY29uU1JDID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb25MaW5rfUAyeC5wbmdgO1xuXG4gICAgZGF5VGVtcC5pbm5lckhUTUwgPSBgJHtjaXR5RGF0YS5kYWlseVtpXS50ZW1wLmRheS50b0ZpeGVkKCl9IMKwQ2A7XG4gICAgbmlnaHRUZW1wLmlubmVySFRNTCA9IGAke2NpdHlEYXRhLmRhaWx5W2ldLnRlbXAubmlnaHQudG9GaXhlZCgpfSDCsENgO1xuICAgIGljb24uc3JjID0gaWNvblNSQztcbiAgfVxuXG4gIC8vIHJlbmRlcnMgdGhlIEFQSSB3ZWF0aGVyIGRhdGEgZm9yIHRoZSBuZXh0IDI0IGhvdXJzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgIGNvbnN0IGhvdXJUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGhvdXJUZW1wJHtpfWApO1xuICAgIGNvbnN0IGhvdXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGhvdXJJY29uJHtpfWApO1xuICAgIGNvbnN0IGljb25MaW5rID0gY2l0eURhdGEuaG91cmx5W2ldLndlYXRoZXJbMF0uaWNvbjtcbiAgICBjb25zdCBpY29uU1JDID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb25MaW5rfUAyeC5wbmdgO1xuXG4gICAgaG91clRlbXAuaW5uZXJIVE1MID0gYCR7Y2l0eURhdGEuaG91cmx5W2ldLnRlbXAudG9GaXhlZCgpfSDCsENgO1xuICAgIGhvdXJJY29uLnNyYyA9IGljb25TUkM7XG4gIH1cblxuICByZW5kZXJEYXlOYW1lSFRNTCgpO1xuICByZW5kZXJIb3VyVGFnKCk7XG59XG5cbmZ1bmN0aW9uIHVwcGVyQ2FzZSh0YXJnZXQsIHNlbnRlbmNlKSB7XG4gIGNvbnN0IG15U2VudGVuY2UgPSBzZW50ZW5jZTtcbiAgY29uc3Qgd29yZHMgPSBteVNlbnRlbmNlLnNwbGl0KCcgJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgIHdvcmRzW2ldID0gd29yZHNbaV1bMF0udG9VcHBlckNhc2UoKSArIHdvcmRzW2ldLnN1YnN0cigxKTtcbiAgfVxuXG4gIHRhcmdldC5pbm5lckhUTUwgPSB3b3Jkcy5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRheU5hbWVIVE1MKCkge1xuICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgY29uc3Qgd2Vla2RheSA9IFtcbiAgICAnU3VuZGF5JyxcbiAgICAnTW9uZGF5JyxcbiAgICAnVHVlc2RheScsXG4gICAgJ1dlZG5lc2RheScsXG4gICAgJ1RodXJzZGF5JyxcbiAgICAnRnJpZGF5JyxcbiAgICAnU2F0dXJkYXknLFxuICBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2Vla2RheS5sZW5ndGggLSBkLmdldERheSgpOyBpKyspIHtcbiAgICBjb25zdCBnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGF5JHtpfWApO1xuICAgIGNvbnN0IG4gPSB3ZWVrZGF5W2QuZ2V0RGF5KCkgKyBpXTtcblxuICAgIGdldENvbnRhaW5lci5pbm5lckhUTUwgPSBuO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkLmdldERheSgpOyBpKyspIHtcbiAgICBjb25zdCBkYXkgPSA3IC0gZC5nZXREYXkoKSArIGk7XG4gICAgY29uc3QgZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRheSR7ZGF5fWApO1xuICAgIGNvbnN0IG4gPSB3ZWVrZGF5W2ldO1xuXG4gICAgZ2V0Q29udGFpbmVyLmlubmVySFRNTCA9IG47XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVySG91clRhZygpIHtcbiAgY29uc3QgaCA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcblxuICAvLyBoYXZpbmcgdHJvdWJsZSB3aGVuIGF0IG1pZG5pZ2h0IHNvIGFkZGVkIGEgcXVpY2sgZml4XG4gIGlmIChoICE9PSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjQgLSBoOyBpKyspIHtcbiAgICAgIGNvbnN0IGdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBob3VyJHtpfWApO1xuXG4gICAgICBnZXRDb250YWluZXIuaW5uZXJIVE1MID0gYCR7aCArIGl9OjAwYDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjMgLSBoOyBpKyspIHtcbiAgICAgIGNvbnN0IGdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBob3VyJHtpfWApO1xuXG4gICAgICBnZXRDb250YWluZXIuaW5uZXJIVE1MID0gYCR7aCArIGl9OjAwYDtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBob3VyID0gMjUgLSBoICsgaTtcbiAgICBjb25zdCBnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaG91ciR7aG91cn1gKTtcblxuICAgIGdldENvbnRhaW5lci5pbm5lckhUTUwgPSBgJHtpICsgMX06MDBgO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTSc7XG5cbmZ1bmN0aW9uIGZ1bmN0aW9uYWxpdHkoKSB7XG4gIERPTS5kYWlseUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRhaWx5RGlzcGxheSk7XG4gIERPTS5ob3VybHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob3VybHlEaXNwbGF5KTtcbn1cblxuZnVuY3Rpb24gZGFpbHlEaXNwbGF5KCkge1xuICBjb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fycm93TGVmdCcpO1xuICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fycm93UmlnaHQnKTtcblxuICBET00uaG91cmx5QnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcxKSc7XG4gIERPTS5kYWlseUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDE5MCwgMjQyLCAyNTUpJztcblxuICBET00uY2Fyb3VzZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAvLyB0aGlzIHJlbW92ZXMgYW55IHByZXZpb3VzIGV2ZW50IGxpc3RlbmVyc1xuICBwcmV2QnV0dG9uLnJlcGxhY2VXaXRoKHByZXZCdXR0b24uY2xvbmVOb2RlKHRydWUpKTtcbiAgbmV4dEJ1dHRvbi5yZXBsYWNlV2l0aChuZXh0QnV0dG9uLmNsb25lTm9kZSh0cnVlKSk7XG5cbiAgRE9NLmFycm93cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcblxuICBET00uZGF5c0NvbnRlbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfSk7XG5cbiAgRE9NLmRheXNDb250ZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLmFuaW1hdGlvbiA9ICdmYWRlIDAuMTVzIGVhc2UtaW4tb3V0IDEgZm9yd2FyZHMnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaG91cmx5RGlzcGxheSgpIHtcbiAgRE9NLmNhcm91c2VsLnN0eWxlLmFuaW1hdGlvbiA9ICdmYWRlIDAuMTVzIGVhc2UtaW4tb3V0IDEgZm9yd2FyZHMnO1xuICBET00uY2Fyb3VzZWwuc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcbiAgRE9NLmRhaWx5QnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcxKSc7XG4gIERPTS5ob3VybHlCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigxOTAsIDI0MiwgMjU1KSc7XG5cbiAgRE9NLmRheXNDb250ZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIERPTS5hcnJvd3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDYwMCkge1xuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPCA2MDApIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xuICBjYXJvdXNlbCgpO1xufVxuXG5mdW5jdGlvbiBjYXJvdXNlbCgpIHtcbiAgY29uc3Qgc2xpZGVzID0gQXJyYXkuZnJvbShET00udHJhY2suY2hpbGRyZW4pO1xuICBjb25zdCBzbGlkZVdpZHRoID0gc2xpZGVzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICBjb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fycm93TGVmdCcpO1xuICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fycm93UmlnaHQnKTtcblxuICBzbGlkZXNbMF0uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1zbGlkZScpO1xuICBzbGlkZXNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1zbGlkZScpO1xuICBzbGlkZXNbMl0uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1zbGlkZScpO1xuICBET00udHJhY2suc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xuXG4gIC8vIGFycmFuZ2UgdGhlIHNsaWRlcyBuZXh0IHRvIGVhY2hvdGhlclxuICBjb25zdCBzZXRTbGlkZVBvc2l0aW9uID0gKHNsaWRlLCBpbmRleCkgPT4ge1xuICAgIHNsaWRlLnN0eWxlLmxlZnQgPSBgJHtzbGlkZVdpZHRoICogaW5kZXh9cHhgO1xuICB9O1xuICBzbGlkZXMuZm9yRWFjaChzZXRTbGlkZVBvc2l0aW9uKTtcblxuICBjb25zdCBtb3ZlVG9TbGlkZSA9ICh0cmFjaywgY3VycmVudFNsaWRlLCB0YXJnZXRTbGlkZSkgPT4ge1xuICAgIHRyYWNrLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RhcmdldFNsaWRlLnN0eWxlLmxlZnR9KWA7XG4gICAgY3VycmVudFNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtc2xpZGUnKTtcbiAgICB0YXJnZXRTbGlkZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXNsaWRlJyk7XG4gIH07XG5cbiAgLy8gbGVmdCBhcnJvdywgbW92ZSBzbGlkZXMgdG8gdGhlIGxlZnRcbiAgcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1zbGlkZScpO1xuICAgIGNvbnN0IHByZXZTbGlkZSA9IGN1cnJlbnRTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgbW92ZVRvU2xpZGUoRE9NLnRyYWNrLCBjdXJyZW50U2xpZGUsIHByZXZTbGlkZSk7XG4gIH0pO1xuXG4gIC8vIHJpZ2h0IGFycm93LCBtb3ZlIHNsaWRlcyB0byB0aGUgcmlnaHRcbiAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1zbGlkZScpO1xuICAgIGNvbnN0IG5leHRTbGlkZSA9IGN1cnJlbnRTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICBtb3ZlVG9TbGlkZShET00udHJhY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uYWxpdHk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NJztcblxuZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgRE9NLnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdlYXRoZXJEYXRhKTtcbiAgRE9NLmNpdHlOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgd2VhdGhlckRhdGEoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJEYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke0RPTS5jaXR5TmFtZUlucHV0LnZhbHVlfSZhcHBpZD01YzAzODY4YjRmZjhhNGUyMzY5ZTNkNTNmYzBmMTVjOSZ1bml0cz1tZXRyaWNgLFxuXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBpbml0aWFsUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCBjaXR5TGF0ID0gaW5pdGlhbFJlc3BvbnNlLmNvb3JkLmxhdDtcbiAgICAgIGNvbnN0IGNpdHlMb24gPSBpbml0aWFsUmVzcG9uc2UuY29vcmQubG9uO1xuXG4gICAgICBjb25zdCByZXNwb25zZU1haW4gPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2NpdHlMYXR9Jmxvbj0ke2NpdHlMb259JmV4Y2x1ZGU9bWludXRlbHkmYXBwaWQ9NWMwMzg2OGI0ZmY4YTRlMjM2OWUzZDUzZmMwZjE1YzkmdW5pdHM9bWV0cmljYCxcbiAgICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICAgKTtcblxuICAgICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCByZXNwb25zZU1haW4uanNvbigpO1xuXG4gICAgICBET00ucmVuZGVyKGNpdHlEYXRhLCBET00uY2l0eU5hbWVJbnB1dC52YWx1ZSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydCgnY291bGQgbm90IGZpbmQgY2l0eScpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9ET00nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbmZ1bmN0aW9uIGdldFBvc2l0aW9uKCkge1xuICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXMsIHJlaik7XG4gICAgICBmdW5jdGlvbiByZWooKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2VvbG9jYXRpb24nKSAhPT0gJ3JlamVjdGVkJykge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnZW9sb2NhdGlvbicsICdyZWplY3RlZCcpO1xuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYWxlcnQoJ0dlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyLicpO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhT25Mb2FkKCkge1xuICAoYXN5bmMgZnVuY3Rpb24gd2VhdGhlckRhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRyeWluZyB0byBsb2FkIGEgYSBkZWZhdWx0IGxvY2F0aW9uIHdoZW4gZ2VvbGNhdGlvbiBpcyByZWplY3RlZFxuICAgICAgLy8gU2VlbXMgdG8gYmUgd29ya2luZyBidXQgaXQgZGVmaW5pdGVseSBjb3VsZCBiZSBkb25lIGJldHRlclxuICAgICAgLy8gVXNpbmcgYSBmaWxsZXIgbG9hY3Rpb24gaW4gdGhlIEhUTUwgdG8gYmUgdXNlZCB3aGVuIGdlb2xvY2F0aW9uIGlzIHJlamVjdGVkIHdvdWxkIGhhdmUgYmVlbiBtb3JlIHN0cmFpZ2h0Zm9yd2FyZFxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgbGV0IGxhdCA9IC0yMy41NDc1O1xuICAgICAgbGV0IGxvbiA9IC00Ni42MzYxO1xuXG4gICAgICBuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoeyBuYW1lOiAnZ2VvbG9jYXRpb24nIH0pLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2VvbG9jYXRpb24nLCAnYWNjZXB0ZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dlb2xvY2F0aW9uJykgIT09ICdyZWplY3RlZCcpIHtcbiAgICAgICAgY29uc3QgY29yZHNSZXNwb25zID0gYXdhaXQgZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgbGF0ID0gY29yZHNSZXNwb25zLmNvb3Jkcy5sYXRpdHVkZTtcbiAgICAgICAgbG9uID0gY29yZHNSZXNwb25zLmNvb3Jkcy5sb25naXR1ZGU7XG4gICAgICB9XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9bWludXRlbHkmYXBwaWQ9NWMwMzg2OGI0ZmY4YTRlMjM2OWUzZDUzZmMwZjE1YzkmdW5pdHM9bWV0cmljYCxcbiAgICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlQ2l0eU5hbWUgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL3JldmVyc2U/bGF0PSR7bGF0fSZsb249JHtsb259JmxpbWl0PTUmYXBwaWQ9NWMwMzg2OGI0ZmY4YTRlMjM2OWUzZDUzZmMwZjE1YzlgXG4gICAgICApO1xuXG4gICAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IGNpdHlOYW1lID0gYXdhaXQgcmVzcG9uc2VDaXR5TmFtZS5qc29uKCk7XG4gICAgICBjb25zdCBjaXR5TmFtZUhUTUwgPSBjaXR5TmFtZVswXS5uYW1lO1xuXG4gICAgICBET00ucmVuZGVyKGNpdHlEYXRhLCBjaXR5TmFtZUhUTUwpO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGFsZXJ0KCdjb3VsZCBub3QgZmluZCBjaXR5Jyk7XG4gICAgfVxuICB9KSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhT25Mb2FkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBET00gZnJvbSAnLi9ET00nO1xuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9nZXREYXRhJztcbmltcG9ydCBnZXREYXRhT25Mb2FkIGZyb20gJy4vZ2V0RGF0YU9uTG9hZCc7XG5pbXBvcnQgZnVuY3Rpb25hbGl0eSBmcm9tICcuL2Z1bmN0aW9uYWxpdHknO1xuXG5ET00uc2V0QmFja2dyb3VuZEltZygpO1xuZ2V0RGF0YU9uTG9hZCgpO1xuZ2V0RGF0YSgpO1xuZnVuY3Rpb25hbGl0eSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9