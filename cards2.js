 // Variables de juego
 let rondaActual = 1;
 let maximaApuesta = 0;

 // Función para iniciar una nueva ronda
 function iniciarNuevaRonda() {
   // Incrementar el número de ronda y actualizar la página
   rondaActual++;
   document.getElementById("rondaActual").textContent = rondaActual;

   // Establecer la cantidad máxima apostada en 0
   maximaApuesta = 0;
   document.getElementById("maximaApuesta").textContent = maximaApuesta;

   // Aquí puedes agregar la lógica para repartir cartas o realizar otras acciones de inicio de ronda.
 }

 // Agregar un evento de clic al botón "Iniciar Nueva Ronda"
 document.getElementById("iniciarRonda").addEventListener("click", iniciarNuevaRonda);




