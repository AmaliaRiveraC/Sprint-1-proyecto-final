var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    //Estas lineas de codigo declaran la funcion prototipo del objeto estudiante.
    function Estudiante (nombre, puntostecnicos, puntosHSE) {
      this.nombre = nombre;
      this.puntostecnicos= puntostecnicos;
      this.puntosHSE= puntosHSE;
    }
    estudiante();

}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre = prompt("Ingresa el nombre completo del estudiante");
    var puntostecnicos = prompt("Ingresa puntos técnicos del estudiante");
    var puntosHSE = prompt("Ingresa puntos de Habilidades-Socio-Emocionales");
    var estudiante = {};
    estudiante.nombre = nombre;
    estudiante.puntostecnicos = puntostecnicos;
    estudiante.puntosHSE = puntosHSE;
    estudiantes.push(estudiante);
    //return getTopElement(estudiantes[i]);

}


function mostrar(estudiante, nombre) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + this.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + this.puntostecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + this.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    //var numeroEstudiantes = Object.keys(estudiantes);
    for(var i = 0; i < estudiantes.length; i++){
      resultado += "<p><strong>Nombre:</strong> " + this.nombre + "</p>";
      resultado += "<p><strong>Puntos Técnicos:</strong> " + this.puntostecnicos + "</p>";
      resultado += "<p><strong>Puntos HSE:</strong> " + this.hse + "</p>";
    }
    console.log(estudiantes);
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    nombre = "";
    var unificador = nombre.toLowerCase();
    var numeroEstudiantes = Object.keys(estudiantes);
    for(var indice = 0; indice < numeroEstudiantes; i++){
      if(nombre == estudiantes[i].nombre){
        return estudiantes[i];
      }
    }
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    //var numeroEstudiantes = Object.keys(estudiantes);

    //Esta línea de código pretende transformar la entrada de datos de puntostecnicos a un tipo de dato number.
    var transformadorDatos = estudiantes.puntostecnicos.map(function(item) {
      return parseInt(item, 10);
    })
    var temporal;
// Este ciclo burbuja pretende ordenar a los estudiantes en orden descendente según los valores de la propiedad puntostecnicos.
    for(var comparacion = 0; comparacion < estudiantes.length; comparacion++){
      for(var indice = 0; indice < numeroEstudiantes; indice++){
        if(transformadorDatos[i] < transformadorDatos[i + 1]){
          temporal = transformadorDatos[i];
          transformadorDatos[i] = transformadorDatos[i + 1];
          transformadorDatos[i + 1] = temporal;
        }
      }
    }
    return transformadorDatos;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    //var numeroEstudiantes = Object.keys(estudiantes);

    //Esta línea de código pretende transformar la entrada de datos de puntostecnicos a un tipo de dato number.
    var transformadorDatos = estudiantes.hse.map(function(item) {
      return parseInt(item, 10);
    })
    var temporal;
// Este ciclo burbuja pretende ordenar a los estudiantes en orden descendente según los valores de la propiedad puntosHSE.
    for (var comparacion = 0; comparacion < estudiantes.length; comparacion++) {
      for(var indice = 0; indice < numeroEstudiantes; indice++) {
        if(transformadorDatos[i] < transformadorDatos[i + 1]){
        temporal = transformadorDatos[i];
        transformadorDatos[i] = transformadorDatos [i + 1];
        transformadorDatos[i + 1] = temporal;
        }
      }
    }
    return transformadorDatos;
}
