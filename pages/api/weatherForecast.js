/* Node.js imports */
import fs from 'fs';
import path from 'path';

const weatherForecast = async function weatherForecastDataRequest() {
  const axios = require('axios');
  require('dotenv').config();

  const integerIdentifier = Math.floor(Math.random() * 100000000);

  let cityCurrent = '';
  let regionCurrent = '';
  let locationCurrent = '';
  let iconWeather = '';
  let tempCurrent = 0;
  let humidityCurrent = 0;
  let weatherConditions = '';

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: '33.8,-84.4' },
    headers: {
      'X-RapidAPI-Key': process.env.WEATHER_API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);

    cityCurrent = response.data.location.name;
    regionCurrent = response.data.location.region;
    locationCurrent = cityCurrent + ', ' + regionCurrent;
    iconWeather = response.data.current.condition.icon;
    tempCurrent = response.data.current.temp_f;
    tempCurrent = Math.round(tempCurrent);
    humidityCurrent = response.data.current.humidity;
    weatherConditions = response.data.current.condition.text;

    console.log(integerIdentifier);
    console.log(cityCurrent);
    console.log(regionCurrent);
    console.log(locationCurrent);
    console.log(iconWeather);
    console.log(tempCurrent);
    console.log(humidityCurrent);
    console.log(weatherConditions);

    const weatherCurrent = {
      id: integerIdentifier,
      location: locationCurrent,
      icon: iconWeather,
      temp: tempCurrent,
      humidity: humidityCurrent,
      conditions: weatherConditions,
    };

    // store data in file
    const filePath = path.join(process.cwd(), 'data', 'weather-forecast.json');
    const fileData = fs.readFileSync(filePath);
    const weatherData = JSON.parse(fileData);
    weatherData.push(weatherCurrent);
    fs.writeFileSync(filePath, JSON.stringify(weatherData));
  } catch (error) {
    console.error(error);
  }
};

export default weatherForecast;
