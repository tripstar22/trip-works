// * third party library imports *
import axios from 'axios';

let dataCurrent = null;
let currentWeatherData = null;

const weatherData = async function requestWeatherData() {
  const integerIdentifier = Math.floor(Math.random() * 100000000);

  let cityCurrent = '';
  let regionCurrent = '';
  let locationCurrent = '';
  let iconWeather = '';
  let tempCurrent = 0;
  let weatherConditions = '';

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: '33.75,-84.4' },
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_WEATHER_API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    dataCurrent = response.data;

    cityCurrent = dataCurrent.location.name;
    regionCurrent = dataCurrent.location.region;
    locationCurrent = `${cityCurrent}, ${regionCurrent}`;
    iconWeather = dataCurrent.current.condition.icon;
    tempCurrent = dataCurrent.current.temp_f;
    tempCurrent = Math.round(tempCurrent);
    weatherConditions = dataCurrent.current.condition.text;

    const currentForecast = {
      id: integerIdentifier,
      location: locationCurrent,
      icon: iconWeather,
      temp: tempCurrent,
      conditions: weatherConditions,
    };

    currentWeatherData = [currentForecast];
  } catch (error) {
    console.error(error);
  }
};

weatherData();

const weatherForecast = async function storeWeatherForecast(req, res) {
  try {
    if (!currentWeatherData) {
      await weatherData();
    }
    // * return weather stored in memory *
    res.status(200).json(currentWeatherData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default weatherForecast;
