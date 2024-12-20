var apiUrl = 'https://api.spacexdata.com/v4/launches';
var listaLanzamientos = document.getElementById("listaLanzamientos");
var toggleButton = document.getElementById("toggleButton");
var listaVisible = false;

function toggleLista() {
    if (listaVisible) {
        listaLanzamientos.style.display = "none";
        listaVisible = false;
        toggleButton.textContent = "Mostrar Lista de Lanzamientos";
    } else {
        listaLanzamientos.style.display = "block";
        listaVisible = true;
        toggleButton.textContent = "Ocultar los Lanzamientos";
    }
}


toggleButton.addEventListener("click", toggleLista);

fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
    
        data.forEach(function(launch) {
            var listItem = document.createElement("li");
            listItem.classList.add("texto-blanco"); // Agregar la clase CSS
            listItem.innerHTML = `<strong>Nombre de la misión:</strong> ${launch.name}<br>
                                  <strong>Fecha de lanzamiento:</strong> ${launch.date_utc}<br>
                                  <strong>Descripción:</strong> ${launch.details}<br><br>`;
            listaLanzamientos.appendChild(listItem);
        });
    })
    .catch(function(error) {
        console.log('Hubo un error al cargar los datos de SpaceX: ' + error.message);
    });





var dataContainer = document.getElementById('dataContainer');
var getLaunchDataButton = document.getElementById('getLaunchDataButton');
var isDataVisible = false;

getLaunchDataButton.addEventListener('click', toggleData);

function toggleData() {
    if (isDataVisible) {
        dataContainer.style.display = 'none'; // Ocultar el contenido
        isDataVisible = false;
    } else {
        fetch('https://api.spacexdata.com/v4/launches/latest')
            .then(response => response.json())
            .then(data => {
                dataContainer.innerText = 'El último lanzamiento de SpaceX fue: ' + data.name + ', y la descripción es: ' + data.details;
                dataContainer.style.display = 'block'; // Mostrar el contenido
                isDataVisible = true;
            })
            .catch(error => console.error('Error:', error));
    }
}