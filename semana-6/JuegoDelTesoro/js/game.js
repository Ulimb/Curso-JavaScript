// Coordenadas del tesoro
const WIDTH = 400; // Ancho del mapa
const HEIGH = 400; // Alto del mapa (hay un error tipográfico, debería ser HEIGHT)

let target = {
  // Genera una coordenada aleatoria para el tesoro dentro del tamaño del mapa
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH) // Debería ser HEIGHT
};

// Manejador de eventos para el clic en el mapa
let $map = document.querySelector('#map'); // Selecciona la imagen del mapa
let $distance = document.querySelector('#distance'); // Selecciona el párrafo donde se muestra la pista
let clicks = 0; // Contador de clics

$map.addEventListener('click', function (e) {
  console.log('click'); // Muestra en consola que se ha hecho clic
  clicks++; // Incrementa el contador de clics
  let distance = getDistance(e, target); // Calcula la distancia desde el clic hasta el tesoro
  let distanceHint = getDistanceHint(distance); // Obtiene una pista según la distancia
  $distance.innerHTML = `<h1>${distanceHint}</h1>`; // Muestra la pista en el párrafo

  // Si la distancia es menor a 20, el jugador encontró el tesoro
  if (distance < 20) {
    alert(`Found the treasure in ${clicks} clicks!`); // Muestra un mensaje de éxito
    location.reload(); // Recarga la página para reiniciar el juego
  }
});