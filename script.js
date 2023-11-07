//INICIO
//Recupera datos desde el Session Storage
document.addEventListener("DOMContentLoaded", function() {
  const mensajeElement = document.getElementById("mensaje");
  const mensaje = sessionStorage.getItem("mensaje");
  if (mensaje) {
    mensajeElement.textContent = mensaje;
  } else {
    mensajeElement.textContent = "Mensaje no encontrado.";
  }
});




//recuperar datos ingresados, validacion y alerta
function mostrarMensaje() {
  const nombre = document.getElementById("inputNombre").value;
  const seleccionTrivia = document.getElementById("seleccionTrivia");
  const opcionSeleccionada = seleccionTrivia.value;
  console.log(opcionSeleccionada);
  //const mensajeElement = document.getElementById("mensaje");
  

  if (nombre && opcionSeleccionada) {
  //const triviaSeleccionada = seleccionTrivia.options[seleccionTrivia.selectedIndex].text;
    //const triviaSeleccionada = opcionSeleccionada.value;
    let redireccion = "";
    
    if (opcionSeleccionada === "Paises") {
      redireccion = "paises.html";
    } else if (opcionSeleccionada === "Princesas") {
      redireccion = "princesas.html";
    }
    
    if (redireccion) {
      const mensaje = `Hola ${nombre}, has ingresado a la trivia de ${opcionSeleccionada}. ¡Mucha suerte!`;
      //document.getElementById("mensaje").textContent = mensaje;
      sessionStorage.setItem("mensaje", mensaje); //guardar mensaje en sessionStorage
      window.location.href = redireccion; // redirigir a la pagina trivia
    } else {
      alert("Opción no válida. Debes seleccionar una trivia válida.");
    }
  } else {
    // Mensaje alerta
    alert("Debes ingresar ambos datos para continuar.");
  }
}

//boton
const botonMostrarMensaje = document.getElementById("mostrarMensajeButton");

botonMostrarMensaje.addEventListener("click", mostrarMensaje);



//TRIVIAS

//princesas
function respuestasPrincesas(){
  
}
