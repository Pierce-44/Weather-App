/* eslint-disable no-use-before-define */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

export const searchBtn = document.getElementById('searchBtn');
export const cityNameInput = document.getElementById('searchLocation');
export const img = document.getElementById('imgTempToday');
export const h1 = document.getElementById('descriptionToday');
export const textCityName = document.getElementById('cityName');
export const textMainTemp = document.getElementById('mainTemp');
export const textMainFeelsLike = document.getElementById('feelsLikeText');
export const textMainUVIndex = document.getElementById('UVIndexText');
export const textMainRainChance = document.getElementById('rainChanceText');
export const textMainHumidity = document.getElementById('humidityText');
export const textMainWindSpeed = document.getElementById('windSpeedText');
export const imgEvening = document.getElementById('imgEvening');
export const imgDay = document.getElementById('imgDay');
export const imgMorning = document.getElementById('imgMorning');
export const imgNight = document.getElementById('imgNight');
export const hourRow1 = document.querySelectorAll('.hourlyRow1');
export const row1 = document.getElementsByClassName('hourlyRow1');
export const hourRow2 = document.querySelectorAll('.hourlyRow2');
export const hourRow3 = document.querySelectorAll('.hourlyRow3');
export const dailyBtn = document.getElementById('weekForecast');
export const hourlyBtn = document.getElementById('hourlyForecast');
export const daysContent = document.querySelectorAll('.days');
export const arrows = document.querySelectorAll('.arrow');
export const arrowRight = document.getElementById('arrowRight');
export const arrowLeft = document.getElementById('arrowLeft');
export const carousel = document.querySelector('.carousel');
export const track = document.querySelector('.carousel__track');
export const prevButton = document.querySelector('#arrowLeft');
export const nextButton = document.querySelector('#arrowRight');

export function setBackgroundImg() {
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

export function render(cityData, cityNameHTML) {
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

  // renders the API weather data for the next 7 days
  for (let i = 0; i < 7; i++) {
    const dayTemp = document.getElementById(`day${i}Temp`);
    const nightTemp = document.getElementById(`night${i}Temp`);
    const icon = document.getElementById(`icon${i}`);
    const iconLink = cityData.daily[i].weather[0].icon;
    const iconSRC = `http://openweathermap.org/img/wn/${iconLink}@2x.png`;

    dayTemp.innerHTML = `${cityData.daily[i].temp.day.toFixed()} °C`;
    nightTemp.innerHTML = `${cityData.daily[i].temp.night.toFixed()} °C`;
    icon.src = iconSRC;
  }

  // renders the API weather data for the next 24 hours
  for (let i = 0; i < 24; i++) {
    const hourTemp = document.getElementById(`hourTemp${i}`);
    const hourIcon = document.getElementById(`hourIcon${i}`);
    const iconLink = cityData.hourly[i].weather[0].icon;
    const iconSRC = `http://openweathermap.org/img/wn/${iconLink}@2x.png`;

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

  for (let i = 0; i <= 24 - h; i++) {
    const getContainer = document.getElementById(`hour${i}`);

    getContainer.innerHTML = `${h + i}:00`;
  }

  for (let i = 0; i < h - 1; i++) {
    const hour = 25 - h + i;
    const getContainer = document.getElementById(`hour${hour}`);

    getContainer.innerHTML = `${i + 1}:00`;
  }
}
