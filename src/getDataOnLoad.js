/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
import * as DOM from './DOM';

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

      DOM.render(cityData, cityNameHTML);

      if (!response.ok) throw new Error();
    } catch {
      alert('could not find city');
    }
  })();
}

export default getDataOnLoad;
