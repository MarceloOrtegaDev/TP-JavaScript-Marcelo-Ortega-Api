// URL de la API que proporciona datos aleatorios absurdos.
const url = fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
// Seleccioné el contenedor del html donde mostraré los datos.
const contenedor = document.getElementById("containerApi")

// Realicé una Función asincronica aprendidos en la clase anterior para obtener y procesar la respuesta de la API.
const obtenerPromesa = async ()=>{
    try {
        const respuesta = await url            // Espera la respuesta de la solicitud fetch.
        const dato = await respuesta.json()    // Convierte la respuesta a formato JSON.
            console.log(dato)
            mostrarPromesa(dato)        // Llama a la función mostrarPromesa para actualizar el HTML con los datos.
    } catch (error) {
        console.log("Hubo un error")       // Muestra un mensaje de error en la consola por si algo llega a fallar.
    }
}

obtenerPromesa() // Llama a la función obtenerPromesa para iniciar el proceso.


// Función para mostrar los datos obtenidos de la API en el HTML.
function mostrarPromesa (dato){
    const contenedor2 = document.createElement("div")             // Creé un nuevo div para que contenga los datos.
    contenedor2.innerHTML = `<h2 class="titulo">Api que cuenta datos absurdos</h2>
    <p class="miNombre">Ortega Marcelo David</p>
    <p class="id">ID del dato: ${dato.id}</p>
    <p class="lengua">Lenguaje: ${dato.language}</p>
    <p class="permalink">Permalink: ${dato.permalink}</p>
    <p class="fuente">Página fuente de los datos: ${dato.source_url}</p>
    <h3 class="datos">🤓 ${dato.text} 🤓</h3>`; // Inserté el HTML con los datos obtenidos de la API dentro del nuevo div.
    
    contenedor.appendChild(contenedor2)
};

//Creé un evento para que la página se reinicie al dar click en el botón y así presentar un nuevo dato.
const accion = document.getElementById("boton")

accion.addEventListener("click", ()=>{
    location.reload();
});
