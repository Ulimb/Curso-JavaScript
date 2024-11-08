let alumnos = ["Jesus", "Alberto", "Ignacio", "Andres", "Lucia", "Laura", "Daniel", "Monica"];

let nombre = prompt("Ingrese su nombre con la primera letra en mayúscula:");

if (alumnos.includes(nombre)) {
    alert("Su nombre ya está incluido en la lista.");
} else {
    alumnos.push(nombre);
}

// Concatenar la lista con un mensaje personalizado usando un FOR
let mensaje = "Lista de alumnos:<br>";
for (let i = 0; i < alumnos.length; i++) {
    mensaje += (i + 1) + ". Alumno registrado con el nombre de: " + alumnos[i] + "<br>";
}

document.write(mensaje);