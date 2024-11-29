var nuevoNombre = prompt("Ingrese su nombre");
var nuevoApellido = prompt("Ingresa tu apellido");

// Agregar mensaje de bienvenida
var infopag = document.getElementById("infopag");
infopag.innerHTML = `¡Bienvenido/a ${nuevoNombre}! Gracias por visitar nuestra página.`;

// Mostrar la cantidad de enlaces
var enlaces = document.getElementsByTagName("a").length;
var cantidadEnlaces = document.createElement("p");
cantidadEnlaces.innerHTML = `La cantidad de enlaces en esta página es: ${enlaces}`;
infopag.appendChild(cantidadEnlaces);

// Mostrar los elementos del array en id="primerParrafo"
var listaAlumnos = ["Jesus Chirinos", "Monica Figueredo", "Florencia Campagna", "Daniela Vallejos", "Facundo Morales"];
listaAlumnos.push(`${nuevoNombre} ${nuevoApellido}`);

var primerParrafo = document.getElementById("primerParrafo");
primerParrafo.innerHTML = listaAlumnos.join("<br>");

// Añadir nombre a la lista
function añadirNombre() {
    var lista = document.getElementById("alumnos");
    var nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = `${nuevoNombre} ${nuevoApellido}`;
    lista.appendChild(nuevoElemento);

    document.getElementById("bot1").style.display = "none";
    document.getElementById("bot2").style.display = "block";
}

// Retirar nombre de la lista
function retirarNombre() {
    var lista = document.getElementById("alumnos");
    var ultimoElemento = lista.lastChild;
    if (ultimoElemento) {
        lista.removeChild(ultimoElemento);
    }

    document.getElementById("bot2").style.display = "none";
    document.getElementById("bot1").style.display = "block";
}
