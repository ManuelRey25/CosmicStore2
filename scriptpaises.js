const countrySearch = document.getElementById('countrySearch');


const countryName = document.getElementById('countryName');
const countryCapital = document.getElementById('countryCapital');
const countryPopulation = document.getElementById('countryPopulation');
const countryArea = document.getElementById('countryArea');
const countryRegion = document.getElementById('countryRegion');
const countryLanguage = document.getElementById('countryLanguage');


const apiUrl = 'https://restcountries.com/v3.1/all';

// Función para cargar la información del país
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

// Manejar la búsqueda de país cuando se presiona Enter en el campo de búsqueda
countrySearch.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const searchTerm = countrySearch.value;
        loadCountryInfo(searchTerm);
    }
});
