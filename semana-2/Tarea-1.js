// Pedimos los datos al usuario
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let edad = prompt("Ingrese su edad:");
let ciudad = prompt("Ingrese la ciudad donde vive:");

// Guardamos los datos en un arreglo
let datosPersonales = [nombre, apellido, edad, ciudad];

// Mostramos los datos en el documento
document.getElementById("info").innerHTML = `
            <p><strong>Nombre:</strong> ${datosPersonales[0]}</p>
            <p><strong>Apellido:</strong> ${datosPersonales[1]}</p>
            <p><strong>Edad:</strong> ${datosPersonales[2]}</p>
            <p><strong>Ciudad:</strong> ${datosPersonales[3]}</p>
        `;
