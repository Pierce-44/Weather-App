/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
import * as DOM from './DOM';

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

      DOM.render(cityData, cityNameHTML);

      if (!response.ok) throw new Error();
    } catch {
      alert('could not find city');
    }
  })();
}

export default getDataOnLoad;
