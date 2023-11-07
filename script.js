//función Saludo + Seleccion de Trivia

/*function mostrarMensaje() {
  const nombre = document.getElementById("inputNombre").value;
  const trivia = document.getElementById("triviaSeleccionada").textContent;
  
  
  const mensaje = `Hola ${nombre}, has ingresado a la trivia de ${trivia}. Mucha suerte!`;
  document.getElementById("mensaje").textContent = mensaje;
}


function seleccionarTrivia(trivia) {
  document.getElementById("triviaSeleccionada").textContent = trivia;
  mostrarMensaje();
}*/




// Obtén una referencia al botón por su ID
const botonMostrarMensaje = document.getElementById("mostrarMensajeButton");

// Agrega un manejador de eventos al botón para llamar a la función mostrarMensaje
botonMostrarMensaje.addEventListener("click", mostrarMensaje);



function mostrarMensaje() {
  const nombre = document.getElementById("inputNombre").value;
  const seleccionTrivia = document.getElementById("seleccionTrivia");
  const triviaSeleccionada = seleccionTrivia.options[seleccionTrivia.selectedIndex].text;
  console.log(seleccionTrivia);
  
  if (triviaSeleccionada) {
    const triviaSeleccionada = triviaSeleccionada.value;
  
    const mensaje = `Hola ${nombre}, has ingresado a la trivia de ${seleccionTrivia}. Mucha suerte!`;
    document.getElementById("mensaje").textContent = mensaje;
  } else {
    // Manejar el caso en el que no se ha seleccionado ninguna opción
    alert("Debes seleccionar una trivia para continuar.");
  }
}

