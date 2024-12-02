// Función anónima autoejecutable para evitar conflictos de variables globales
(function () {
    var actualizarHora = function () {
      // Obtenemos la fecha actual
      var fecha = new Date(),
        horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();
  
      // Referencias a elementos del DOM
      var pHoras = document.getElementById("horas"),
        pAMPM = document.getElementById("ampm"),
        pMinutos = document.getElementById("minutos"),
        pSegundos = document.getElementById("segundos"),
        pDiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pMes = document.getElementById("mes"),
        pYear = document.getElementById("year");
  
      // Actualización del día de la semana
      var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      pDiaSemana.textContent = semana[diaSemana];
  
      // Actualización del día, mes y año
      var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      pDia.textContent = dia;
      pMes.textContent = meses[mes];
      pYear.textContent = year;
  
      // Formato de 12 horas y AM/PM
      if (horas >= 12) {
        horas = horas - 12;
        ampm = "PM";
      } else {
        ampm = "AM";
      }
      if (horas == 0) horas = 12;
  
      // Actualización de hora, minutos y segundos
      pHoras.textContent = horas < 10 ? "0" + horas : horas;
      pAMPM.textContent = ampm;
      pMinutos.textContent = minutos < 10 ? "0" + minutos : minutos;
      pSegundos.textContent = segundos < 10 ? "0" + segundos : segundos;
    };
  
    // Llamamos la función cada segundo
    actualizarHora();
    setInterval(actualizarHora, 1000);
  })();