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

//aqui empieza otra opcion

/*
// Obtén una referencia al botón por su ID
const botonMostrarMensaje = document.getElementById("mostrarMensajeButton");

// Agrega un manejador de eventos al botón para llamar a la función mostrarMensaje
botonMostrarMensaje.addEventListener("click", mostrarMensaje);



function mostrarMensaje() {
  const nombre = document.getElementById("inputNombre").value;
  const seleccionTrivia = document.getElementById("seleccionTrivia");
  const opcionSeleccionada = seleccionTrivia.value;
  const mensajeElement = document.getElementById("mensaje");
  
  if (opcionSeleccionada) {
  const triviaSeleccionada = seleccionTrivia.options[seleccionTrivia.selectedIndex].text;
    //const triviaSeleccionada = opcionSeleccionada.value;
  
    const mensaje = `Hola ${nombre}, has ingresado a la trivia de ${opcionSeleccionada}. Mucha suerte!`;
    document.getElementById("mensaje").textContent = mensaje;
  } else {
    // Manejar el caso en el que no se ha seleccionado ninguna opción
    alert("Debes seleccionar una trivia para continuar.");
  }
}
document.getElementById("seleccionTrivia").addEventListener("change", mostrarMensaje);
*/


//otra opcion
function mostrarMensaje() {
  const nombre = document.getElementById("inputNombre").value;
  const seleccionTrivia = document.getElementById("seleccionTrivia");
  const triviaSeleccionada = seleccionTrivia.value;

  if (nombre && triviaSeleccionada) {
    // Verifica que se haya ingresado un nombre y se haya seleccionado una opción
    const mensaje = `Hola ${nombre}, has ingresado a la trivia de ${triviaSeleccionada}. Mucha suerte!`;
    document.getElementById("mensaje").textContent = mensaje;
  } else {
    // Manejar el caso en el que no se haya ingresado un nombre o seleccionado una opción
    document.getElementById("mensaje").textContent = ""; // Limpiar el mensaje
    alert("Debes ingresar un nombre y seleccionar una trivia antes de presionar 'Empezar a Jugar'.");
  }
}

// Obtén una referencia al botón por su ID
const botonMostrarMensaje = document.getElementById("mostrarMensajeButton");

// Agrega un manejador de eventos al botón para llamar a la función mostrarMensaje cuando se haga clic
botonMostrarMensaje.addEventListener("click", mostrarMensaje);