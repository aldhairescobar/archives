/**
 * Weather App To-do List
 * DONE: Retrieve weather data (JSON)
 * DONE: Get user input and get data from that Input
 * DONE: Show the data in the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const weatherAPI = fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
  return weatherAPI.then((response) => {
    return response.json();
  })
}

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((resWeather) => {
    showWeatherData(resWeather);
  }).catch((error) => {
    console.log(error);
  })

}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  
  const weatherIcon = weatherData.weather[0].icon;
  document.getElementById('icon').setAttribute('src', `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
  
  document.getElementById('city-name').innerHTML = weatherData.name
  document.getElementById('weather-type').innerHTML = weatherData.weather[0].main
  document.getElementById('temp').innerHTML = weatherData.main.temp
  document.getElementById('min-temp').innerHTML =  weatherData.main.temp_min
  document.getElementById('max-temp').innerHTML = weatherData.main.temp_max
}


