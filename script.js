const apiKey = "d71c12badebcf6f8ee50ee5ad22bbbf4"; // Replace with your actual API key
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const cityNameElement = document.getElementById('cityName');
const temperatureElement = document.getElementById('temperature');
const weatherDescriptionElement = document.getElementById('weatherDescription');
const weatherIconElement = document.getElementById('weatherIcon');

searchButton.addEventListener('click', () => {
    const cityName = cityInput.value;
    if (cityName.trim() !== '') {
        getWeatherData(cityName);
    }
});

async function getWeatherData(cityName) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        
        cityNameElement.textContent = data.name;
        temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
        weatherDescriptionElement.textContent = `Weather: ${data.weather[0].description}`;


        const weatherIconCode = data.weather[0].icon;
        console.log(weatherIconCode)
        weatherIconElement.src = `http://openweathermap.org/img/w/${weatherIconCode}.png`;
        weatherIconElement.alt = data.weather[0].main;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
