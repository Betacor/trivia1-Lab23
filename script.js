function mostrarMensaje() {
  const nombre = document.getElementById("inputNombre").value;
  const seleccionTrivia = document.getElementById("seleccionTrivia");
  const opcionSeleccionada = seleccionTrivia.value;
  console.log(opcionSeleccionada);
  //const mensajeElement = document.getElementById("mensaje");
  
  if (nombre && opcionSeleccionada) {
  //const triviaSeleccionada = seleccionTrivia.options[seleccionTrivia.selectedIndex].text;
    //const triviaSeleccionada = opcionSeleccionada.value;
  
    const mensaje = `Hola ${nombre}, has ingresado a la trivia de ${opcionSeleccionada}. Mucha suerte!`;
    document.getElementById("mensaje").textContent = mensaje;
    sessionStorage.setItem("mensaje", mensaje); // Almacenar el mensaje en sessionStorage
    window.location.href = "paises.html";
  } else {
    // Mensaje alerta
    alert("Debes ingresar ambos datos para continuar.");
  }
}


//boton
const botonMostrarMensaje = document.getElementById("mostrarMensajeButton");

botonMostrarMensaje.addEventListener("click", mostrarMensaje);



/*document.addEventListener("DOMContentLoaded", function() {
  const mensajeElement = document.getElementById("mensaje");
  const mensaje = sessionStorage.getItem("mensaje");
  if (mensaje) {
    mensajeElement.textContent = mensaje;
  } else {
    mensajeElement.textContent = "Mensaje no encontrado.";
  }
});*/