/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */

import * as DOM from './DOM';

function getData() {
  DOM.searchBtn.addEventListener('click', weatherData);
  DOM.cityNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      weatherData();
    }
  });

  async function weatherData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${DOM.cityNameInput.value}&appid=5c03868b4ff8a4e2369e3d53fc0f15c9&units=metric`,

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

      DOM.render(cityData, DOM.cityNameInput.value);

      if (!response.ok) throw new Error();
    } catch {
      alert('could not find city');
    }
  }
}

export default getData;
