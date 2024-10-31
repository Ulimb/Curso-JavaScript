// Creación del array "participantes" con la lista inicial de nombres
let participantes = ["Andrea", "Jesús", "Laura", "Nahuel", "Mónica", "Paula", "María", "Leandro", "Susana"];

// Mostrar la lista inicial de participantes en el documento
document.write("Lista inicial de participantes:" + participantes.join(" - "));
document.write("<br><br>");

// Eliminar a "Susana" de la lista
participantes.pop(); 

// Agregar "Roberto" y "Claudia" después de "Jesús" y antes de "Laura"
participantes.splice(2, 0, "Roberto", "Claudia");

// Agregar a "Jose" como último en la lista
participantes.push("Jose");

// Mostrar la lista actualizada de participantes
document.write("Lista actualizada de participantes:" + participantes.join(" - "));
document.write("<br><br>");

// Imprimir la cantidad de elementos del array
document.write("Cantidad de participantes que entregaron la actividad: " + participantes.length);