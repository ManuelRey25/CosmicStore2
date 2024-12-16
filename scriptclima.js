const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherData = document.getElementById('weatherData');
const apiKey = '7133013f1726303beb9dbf2103d3db3b'; 

weatherForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const cityName = cityInput.value;

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const city = data.name;

            // Mostrar los datos del clima en el elemento weatherData
            weatherData.innerHTML = `
                <h2 class="producto-title">Clima en ${city}</h2>
                <p class="producto-price">Temperatura: ${temperature}°C</p>
                <p class="producto-price">Descripción: ${weatherDescription}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            weatherData.innerHTML = '<p class="producto-price">No se pudo obtener el clima para esta ciudad.</p>';
        });
});