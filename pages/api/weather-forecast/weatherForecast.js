// * node.js imports *
import fs from 'fs';
import path from 'path';

// * third party library imports *
const axios = require('axios');

const weatherForecast = async function weatherForecastDataRequest(req, res) {
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

    cityCurrent = response.data.location.name;
    regionCurrent = response.data.location.region;
    locationCurrent = `${cityCurrent}, ${regionCurrent}`;
    iconWeather = response.data.current.condition.icon;
    tempCurrent = response.data.current.temp_f;
    tempCurrent = Math.round(tempCurrent);
    weatherConditions = response.data.current.condition.text;

    const weatherCurrent = {
      id: integerIdentifier,
      location: locationCurrent,
      icon: iconWeather,
      temp: tempCurrent,
      conditions: weatherConditions,
    };

    // * store data by updating data/weather-forecast/weather-forecast.json *
    const filePath = path.join(process.cwd(), 'data', 'weather-forecast', 'weather-forecast.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const weatherData = JSON.parse(fileData);
    weatherData.splice(0, 1, weatherCurrent);
    fs.writeFileSync(filePath, JSON.stringify(weatherData));
    res.status(200).json(weatherData);
  } catch (error) {
    console.error(error);
  }
};

export default weatherForecast;
