document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    form.addEventListener('submit', getWeather);
  });
  
  async function getWeather(e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const response = await fetch(`http://localhost:3000/api/weather?city=${city}`);
    const data = await response.json();
    displayWeather(data);
  }
  
  function displayWeather(data) {
    const weatherData = document.getElementById('weather-data');
    weatherData.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  }
  