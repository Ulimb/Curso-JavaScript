// Genera un número aleatorio dentro de un rango dado
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
  }
  
  // Calcula la distancia entre dos puntos (el clic del usuario y el tesoro)
  let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x; // Diferencia en el eje X
    let diffY = e.offsetY - target.y; // Diferencia en el eje Y
    return Math.sqrt((diffX * diffX) + (diffY * diffY)); // Distancia euclidiana
  }
  
  // Devuelve una pista en forma de cadena de texto dependiendo de la distancia
  let getDistanceHint = distance => {
    if (distance < 30) {
      return "¡Hirviendo!"; // Muy cerca
    } else if (distance < 40) {
      return "Muy caliente"; // Cerca
    } else if (distance < 60) {
      return "Caliente"; // No tan lejos
    } else if (distance < 100) {
      return "Tibio"; // Medio lejos
    } else if (distance < 180) {
      return "Frío"; // Lejos
    } else if (distance < 360) {
      return "Muy frío"; // Muy lejos
    } else {
      return "¡Helado!"; // Extremadamente lejos
    }
  }