//función Saludo + Seleccion de Trivia

function mostrarMensaje() {
  const nombre = document.getElementById("inputNombre").value;
  const trivia = document.getElementById("triviaSeleccionada").textContent;
  
  
  const mensaje = `Hola ${nombre}, has ingresado a la trivia de ${trivia}. Mucha suerte!`;
  document.getElementById("mensaje").textContent = mensaje;
}


function seleccionarTrivia(trivia) {
  document.getElementById("triviaSeleccionada").textContent = trivia;
  mostrarMensaje();
}




