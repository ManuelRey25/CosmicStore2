const countrySearch = document.getElementById('countrySearch');


const countryName = document.getElementById('countryName');
const countryCapital = document.getElementById('countryCapital');
const countryPopulation = document.getElementById('countryPopulation');
const countryArea = document.getElementById('countryArea');
const countryRegion = document.getElementById('countryRegion');
const countryLanguage = document.getElementById('countryLanguage');


const apiUrl = 'https://restcountries.com/v3.1/all';


function loadCountryInfo(countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => response.json())
        .then(data => {
            const country = data[0];

            
            countryName.textContent = country.name.common;
            countryCapital.textContent = country.capital[0];
            countryPopulation.textContent = country.population.toLocaleString();
            countryArea.textContent = country.area.toLocaleString();
            countryRegion.textContent = country.region;
            countryLanguage.textContent = Object.values(country.languages).join(', ');
        })
        .catch(error => console.error('Error:', error));
}


countrySearch.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const searchTerm = countrySearch.value;
        loadCountryInfo(searchTerm);
    }
});





async function fetchAsteroids() {
    const apiKey = 'DEMO_KEY'; 
    const startDate = new Date().toISOString().split('T')[0]; 
    const endDate = new Date(new Date().setDate(new Date().getDate() + 7))
        .toISOString()
        .split('T')[0]; 

    try {
        const response = await fetch(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`
        );
        if (!response.ok) throw new Error('Error al obtener los datos de asteroides');
        const data = await response.json();
        displayAsteroids(data.near_earth_objects);
    } catch (error) {
        console.error('Error:', error);
    }
}


function displayAsteroids(asteroids) {
    const container = document.getElementById('asteroids-container');
    container.innerHTML = ''; // Limpiar el contenedor

    const dates = Object.keys(asteroids); 
    let allAsteroids = [];
    dates.forEach(date => {
        allAsteroids = [...allAsteroids, ...asteroids[date]];
    });

   
    renderAsteroids(allAsteroids, 4);

    
    container.addEventListener('click', () => {
        const currentCards = container.querySelectorAll('.asteroid-card');
        if (currentCards.length === 4) {
            renderAsteroids(allAsteroids); 
        } else {
            renderAsteroids(allAsteroids, 4); 
        }
    });
}


function renderAsteroids(asteroids, limit = asteroids.length) {
    const container = document.getElementById('asteroids-container');
    container.innerHTML = ''; 

    asteroids.slice(0, limit).forEach(asteroid => {
        const card = document.createElement('div');
        card.className = 'asteroid-card';

        card.innerHTML = `
            <h3>${asteroid.name}</h3>
            <p><strong>Fecha de aproximación:</strong> ${asteroid.close_approach_data[0].close_approach_date}</p>
            <p><strong>Distancia a la Tierra:</strong> ${parseFloat(
                asteroid.close_approach_data[0].miss_distance.kilometers
            ).toLocaleString()} km</p>
            <p><strong>Diámetro estimado:</strong> ${(
                asteroid.estimated_diameter.kilometers.estimated_diameter_max
            ).toFixed(2)} km</p>
            <p><strong>Peligroso:</strong> ${asteroid.is_potentially_hazardous_asteroid ? 'Sí' : 'No'}</p>
        `;
        container.appendChild(card);
    });
}


fetchAsteroids();



