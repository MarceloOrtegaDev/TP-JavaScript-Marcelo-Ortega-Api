### Trabajo práctico Apis/Fetch
- El proyecto tiene como fin entretener a los usuarios que ingresen a la página brindandoles divertidos datos que quizás no conocian a solo 1 click de distancia.
  
###Proceso del desarollo del trabajo práctico

- Primero se seleccionó una Api de mi interes del repositorio proporcionado por los profesores (https://github.com/public-apis/public-apis.git)

- La api que me llamó la atención fue una que te arroja datos de forma aleatorias o ramdoms que se encontraba en el apartado "Entretenimiento".

- La página donde se obtuvo la Api fue la siguiente: https://uselessfacts.jsph.pl/.

- Luego de seleccionar la Api procedí a copiar el url para hacer una solicitud HTTP y así devolver una promesa que representa la respuesta de esa solicitud de la siguiente forma: 
**const url = fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")**
- Luego realicé una constante para obtener el id del contenedor de mi HTML:
**const contenedor = document.getElementById("containerApi")**

- Realicé una Función asincronica aprendidos en la clase anterior para obtener y procesar la respuesta de la API.
```javascript
const obtenerPromesa = async ()=>{

    try {
	// Espera la respuesta de la solicitud fetch.
        const respuesta = await url 
	// Convierte la respuesta a formato JSON.
        const dato = await respuesta.json()
            console.log(dato)
	// Llama a la función mostrarPromesa para actualizar el HTML con los datos.
            mostrarPromesa(dato) 
    } catch (error) {
	// Muestra un mensaje de error en la consola por si algo llega a fallar.
        console.log("Hubo un error")
    }
}
obtenerPromesa()   //Llama a la función obtenerPromesa para iniciar el proceso.
```
- Luego creé una función para mostrar los datos obtenidos de la API en el HTML.

```Javascript
function mostrarPromesa (dato){
    const contenedor2 = document.createElement("div")   // Creé un nuevo div para que contenga los datos.
    contenedor2.innerHTML = `<h2 class="titulo">Api que cuenta datos absurdos</h2>
    <p class="miNombre">Ortega Marcelo David</p>
    <p class="id">ID del dato: ${dato.id}</p>
    <p class="lengua">Lenguaje: ${dato.language}</p>
    <p class="permalink">Permalink: ${dato.permalink}</p>
    <p class="fuente">Página fuente de los datos: ${dato.source_url}</p>
    <h3 class="datos">🤓 ${dato.text} 🤓</h3>`; 
	// Inserté el HTML con los datos obtenidos de la API dentro del nuevo div.
    contenedor.appendChild(contenedor2)
};
```
- Y por último creé un evento para que cuando el usuario le dé click al botón se reinicie la página y pueda leer un nuevo dato aleatorio.

```Javascript
const accion = document.getElementById("boton")

accion.addEventListener("click", ()=>{
    location.reload();
});
```
###HTML
- En cuanto al Html lo único que hice fue crear un contenedor en el cual se ingresaran los objetos que se obtuvo como respuesta de la Api:

####HTML code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctico_Api</title>
    <link rel="stylesheet" href="assets/styles/style.css">
</head>
<body>

    <div id="containerApi">
        <article> <!-- Creé un artículo donde pueda contener el botón e indicar lo que hay que hacer al usuario.-->
            <p style="display: flex; justify-content: center;">OPRIMA ⬇︎ AQUÍ</p>
            <button id="boton" class="recargar">Cambia de dato</button>
        </article>
    </div>

    <script src="assets/js/main.js"></script>
</body>
</html>
```
###Styles
- Se aplicaron los estilos a todos los elementos para que el contenido sea más estético y agradable para los usuarios.
```Css
/* SE ESTILIZARON LOS ELEMENTOS CREADOS, FUERON CREADOS CON SU PROPIA CLASE PARA FACILITAR EL PROCESO */

body{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blanchedalmond;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
}

.titulo{
    display: flex;
    justify-content: center;
}

.miNombre{
    display: flex;
    justify-content: center;
    color: blue;
}

.recargar{
    display: flex;
     border-radius: 15px;
     background-color: rgb(0, 0, 0);
     color: rgb(255, 255, 255);
     width: 140px;
     height: 35px;
     justify-content: center;
     align-items: center;
}

.recargar:hover{
    color: black;
    background-color: white;
    transition: 0.7s;
}

#containerApi{
    display: flex;
    padding: 30px;
    display: flex;
    background-color: whitesmoke;
    align-items: center;
    border-radius: 15px;
    flex-direction: column;
    border: solid 2px black;
}


.id{
    display: flex;
    justify-content: center;
}

.lengua{
    font-size: 16px;
}

.permalink{
    font-size: 16px;
}

.fuente{
    font-size: 16px;
}

.datos{
    display: flex;
    justify-content: center;
    color: rgb(209, 46, 87);
}
```

###Images
	Imágen ilustrativa del resultado final del trabajo
Image: ![captu](https://github.com/MarceloOrtegaDev/TP-JavaScript-Marcelo-Ortega-Api/assets/167462239/8df18bbf-ec38-40e5-880b-21e41126900d)


###FIN
