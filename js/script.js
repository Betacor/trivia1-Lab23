//INICIO
//recupera datos desde Session Storage
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








  //TRIVIA PRINCESA

  //princesas / alert respuestas
  function respuestasPrincesas(){
    const pregPrincesas1 = document.querySelector('input[name="pregPrincesas1"]:checked');
    const pregPrincesas2 = document.querySelector('input[name="pregPrincesas2"]:checked');
    const pregPrincesas3 = document.querySelector('input[name="pregPrincesas3"]:checked');
    //const colorRespuesta = "#c4ffeb";

    let resultadoPrincesa = `Respuestas seleccionadas:\n`;
    if (pregPrincesas1) {
      resultadoPrincesa += `Pregunta 1: ${pregPrincesas1.value}\n`;
    }

    if (pregPrincesas2) {
      resultadoPrincesa += `Pregunta 2: ${pregPrincesas2.value}\n`;
    }
    if (pregPrincesas3) {
      resultadoPrincesa += `Pregunta 3: ${pregPrincesas3.value}\n`;
    }
    console.log(respuestasPrincesas);

    

    //muestra una confirmación con los resultados
    const confirmarEnvio = confirm(resultadoPrincesa + "\n¿Estás seguro de continuar?");

    //verifica la respuesta del usuario
    if (confirmarEnvio) {

      //let puntajePrincesa = document.getElementById("puntajePrincesa");

      let contadorPrincesa = 0;

      console.log(pregPrincesas1.value);


      if (pregPrincesas1.value === "seis"){

        contadorPrincesa += 10;

        //contadorPrincesa += " Coronas";


        //const customRadio = document.querySelector(".custom-radio");
        //const respPreg1 = document.getElementById("respPreg1");
        //const pregunta1 = document.querySelector(".pregunta-1");
        //const seis = "pregprincesas1.value";


        //pregPrincesas1.setAttribute("style", "background-color:darkblue;");
        //pregPrincesas1.style.color='rgb(#c4ffeb)';
        //customRadio.setAttribute('style', 'background-color:#c4ffeb;');
        //pregPrincesas1.setAttribute('style', 'background:#c4ffeb;');
        //seis.setAttribute('style', 'background-color:#c4ffeb;');
        //pregPrincesas1.classList.add('style', 'background:#c4ffeb;');


      } if (pregPrincesas2.value === "rosa"){

        contadorPrincesa += 10;

      } if (pregPrincesas3.value === "eugene"){

        contadorPrincesa += 10;
      }

      console.log(contadorPrincesa);
      

      //ocultamos botón Responder
      document.getElementById("respPrincesasBtn").style.display = "none";


      //mostramos respuestas correctas y puntaje
      //mostrar mensaje con puntaje princesas
      const msjPuntajePrincesa = document.getElementById("msjPuntajePrincesa");

      const mensajeRespuestasPrincesa  = `Obtuviste ${contadorPrincesa} Coronas!`;
      //mensajeRespuestasPrincesa.style.background='#c4ffeb';
      //mensajeRespuestasPrincesa.classList.add('style', 'background:#c4ffeb;');
    //mensajeRespuestasPrincesa.setAttribute('style', 'background:#c4ffeb;');


      document.getElementById("msjPuntajePrincesa").textContent = mensajeRespuestasPrincesa;



      //botón para reiniciar  
      //function reiniciarTrivia(){
      const volverJugarButton = document.getElementById("volverJugarBtn");
      volverJugarButton.style.display = "block";
      volverJugarButton.addEventListener("click", function() {
        window.location.href = "index.html";
      });
    }
  }

  
  //TRIVIA PAISES

  //princesas / alert respuestas
  function respuestasPaises(){
    const pregPaises1 = document.querySelector('input[name="pregPaises1"]:checked');
    const pregPaises2 = document.querySelector('input[name="pregPaises2"]:checked');
    const pregPaises3 = document.querySelector('input[name="pregPaises3"]:checked');
    //const colorRespuesta = "#c4ffeb";

    let resultadoPaises = `Respuestas seleccionadas:\n`;
    if (pregPaises1) {
      resultadoPaises += `Pregunta 1: ${pregPaises1.value}\n`;
    }

    if (pregPaises2) {
      resultadoPaises += `Pregunta 2: ${pregPaises2.value}\n`;
    }
    if (pregPaises3) {
      resultadoPaises += `Pregunta 3: ${pregPaises3.value}\n`;
    }
    console.log(respuestasPaises);

    

    //muestra una confirmación con los resultados
    const confirmarEnvio = confirm(resultadoPaises + "\n¿Estás seguro de continuar?");

    //verifica la respuesta del usuario
    if (confirmarEnvio) {

      //let puntajePaises = document.getElementById("puntajePaises");

      let contadorPaises = 0;

      console.log(pregPaises1.value);


      if (pregPaises1.value === "seis"){

        contadorPaises += 10;

        //contadorPaises += " Coronas";


        //const customRadio = document.querySelector(".custom-radio");
        //const respPreg1 = document.getElementById("respPreg1");
        //const pregunta1 = document.querySelector(".pregunta-1");
        //const seis = "pregaises1.value";


        //pregPrincesas1.setAttribute("style", "background-color:darkblue;");
        //pregPrincesas1.style.color='rgb(#c4ffeb)';
        //customRadio.setAttribute('style', 'background-color:#c4ffeb;');
        //pregPrincesas1.setAttribute('style', 'background:#c4ffeb;');
        //seis.setAttribute('style', 'background-color:#c4ffeb;');
        //pregPrincesas1.classList.add('style', 'background:#c4ffeb;');


      } if (pregPaises2.value === "rosa"){

        contadorPaises += 10;

      } if (pregPaises3.value === "eugene"){

        contadorPaises += 10;
      }

      console.log(contadorPaises);
      

      //ocultamos botón Responder
      document.getElementById("respPaisesBtn").style.display = "none";


      //mostramos respuestas correctas y puntaje
      //mostrar mensaje con puntaje paises
      const msjPuntajePaises = document.getElementById("msjPuntajePaises");

      const mensajeRespuestasPaises  = `Obtuviste ${contadorPaises} Coronas!`;
      //mensajeRespuestasPrincesa.style.background='#c4ffeb';
      //mensajeRespuestasPrincesa.classList.add('style', 'background:#c4ffeb;');
    //mensajeRespuestasPrincesa.setAttribute('style', 'background:#c4ffeb;');


      document.getElementById("msjPuntajePaises").textContent = mensajeRespuestasPaises;



      //botón para reiniciar  
      //function reiniciarTrivia(){
      const volverJugarButton = document.getElementById("volverJugarBtn");
      volverJugarButton.style.display = "block";
      volverJugarButton.addEventListener("click", function() {
        window.location.href = "index.html";
      });
    }
  }





