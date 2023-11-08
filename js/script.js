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




// Resultados Trivia Paises

function mostrarResultadoPaises() {
  // Variables con las respuestas seleccionadas 
  const respuesta1 = document.querySelector('input[name="pregunta1"]:checked');
  const respuesta2 = document.querySelector('input[name="pregunta2"]:checked');
  const respuesta3 = document.querySelector('input[name="pregunta3"]:checked');

  // Mensaje de resultados para la alerta
  let mensajeResultado = `Respuestas seleccionadas:\n`;
  if (respuesta1) {
    mensajeResultado += `¿En qué país se ubica el Reino de Arendelle en Frozen?: ${respuesta1.value}\n`;
  }
  if (respuesta2) {
    mensajeResultado += `¿Cual princesa vive en un pueblo de la Polinesia?: ${respuesta2.value}\n`;
  }
  if (respuesta3) {
    mensajeResultado += `¿De cual país es la Princesa BlancaNieves?: ${respuesta3.value}\n`;
  }

  // Calcula el puntaje
  let puntaje = 0;
  if (respuesta1 && respuesta1.value === "Noruega") {
    puntaje++;
  }
  if (respuesta2 && respuesta2.value === "Moana") {
    puntaje++;
  }
  if (respuesta3 && respuesta3.value === "Alemania") {
    puntaje++;
  }

  // Muestra una alerta para confirmar o cancelar
  const confirmacion = confirm(mensajeResultado + "\n¿Estás seguro de continuar?");
  if (confirmacion) {
    // Si acepta el usuario, oculta el botón "responder y ver resultados"
    document.getElementById("responderPaises").style.display = "none";
    
    // Muestra las respuestas correctas y el puntaje
    const resultadoPreguntas = document.getElementById("resultadoPreguntas");
    resultadoPreguntas.style.display = "block";
    document.getElementById("respuestaPregunta1").textContent = `¿En qué país se ubica el Reino de Arendelle en Frozen?: Noruega`;
    document.getElementById("respuestaPregunta2").textContent = `¿Cual princesa vive en un pueblo de la Polinesia?: Moana`;
    document.getElementById("respuestaPregunta3").textContent = `¿De cual país es la Princesa BlancaNieves?: Alemania`;
    document.getElementById("puntaje").textContent = puntaje;

    // Agrega botón para reiniciar la Trivia
    const volverAJugarButton = document.getElementById("volverAJugar");
    volverAJugarButton.style.display = "block";
    volverAJugarButton.addEventListener("click", function() {
      window.location.href = "index.html";
    });
  }
}


