let pagina = 1; // Página actual (inicialmente, página 1)

// Función para cambiar al contenido de la siguiente página
function siguientePagina() {
    if (pagina < 5) { // Cambia el número según el número total de páginas
        pagina++;
        actualizarContenido();
    }
}

// Función para cambiar al contenido de la página anterior
function regresarPagina() {
    if (pagina > 1) {
        pagina--;
        actualizarContenido();
    }
}

// Función para actualizar dinámicamente el contenido según la página
function actualizarContenido() {
    const progressBar = document.getElementById('progress-bar');
    const cuestionario = document.getElementById('cuestionario');
    const footer = document.getElementById('footer');
    const totalPaginas = 5;
    // Actualizar la barra de progreso
    if (pagina === 1) {
        progressBar.innerHTML = `
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">01</span>
                    <span class="text-plano ">Preeliminar</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
            </div>
            <div class="line filled"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">02</span>
                    <span class="text-plano ">Instrucciones</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">03</span>
                    <span class="text-plano ">Perfil y calidad</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">04</span>
                    <span class="text-plano ">Ubicación laboral</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">05</span>
                    <span class="text-plano ">Desempeño y<br>espectativas</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
        `;
    } else if (pagina === 2) {
        progressBar.innerHTML = `
        <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">01</span>
                    <span class="text-plano ">Preeliminar</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
            </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">02</span>
                    <span class="text-plano ">Instrucciones</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">03</span>
                    <span class="text-plano ">Perfil y calidad</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">04</span>
                    <span class="text-plano ">Ubicación laboral</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">05</span>
                    <span class="text-plano ">Desempeño y<br>espectativas</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
        `;
    }
    else if (pagina === 3) {
        progressBar.innerHTML = `
        <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">01</span>
                    <span class="text-plano ">Preeliminar</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
            </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">02</span>
                    <span class="text-plano ">Instrucciones</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">03</span>
                    <span class="text-plano ">Perfil y calidad</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">04</span>
                    <span class="text-plano ">Ubicación laboral</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">05</span>
                    <span class="text-plano ">Desempeño y<br>espectativas</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
        `;
    }
    else if (pagina === 4) {
        progressBar.innerHTML = `
 
        <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">01</span>
                    <span class="text-plano ">Preeliminar</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
            </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">02</span>
                    <span class="text-plano ">Instrucciones</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">03</span>
                    <span class="text-plano ">Perfil y calidad</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">04</span>
                    <span class="text-plano ">Ubicación laboral</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">05</span>
                    <span class="text-plano ">Desempeño y<br>espectativas</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
        `;
    }
    else if (pagina === 5) {
        progressBar.innerHTML = `
        <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">01</span>
                    <span class="text-plano ">Preeliminar</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
            </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">02</span>
                    <span class="text-plano ">Instrucciones</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">03</span>
                    <span class="text-plano ">Perfil y calidad</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">04</span>
                    <span class="text-plano ">Ubicación laboral</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">05</span>
                    <span class="text-plano ">Desempeño y<br>espectativas</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
        `;
    }

    // Actualizar contenido del cuestionario
    if (pagina === 1) {
        cuestionario.innerHTML = `
        <form action="pagina.php" method="GET" style="margin:3%; background-color:withe; padding: 3%; margin-top: 0px; margin-left: -50px; ">
<div class="content-wrapper">
    <div class="text-content">
    <img src="https://sic.cultura.gob.mx/images/65091" class="side-image">
    <div class="linea"><p></p></div>
    <h1>Preeliminar</h1>

        <p>Instituto tecnologico de Minatitlán</p>
        <p>Fecha:</p>
        <p>Estimado Egresado:</p>
        <p>Los servicios educativos de este instituto tecnologico debe estar en mejora continua para
            asegurar la pertinencia de los conocimientos adquiridos y mejorar sistematicamente, para
            colaborar en la formacion integral de nuestros alumnos.
            para esto es indispensable tomarte en cuenta como factor de cambios y reformas, por lo que por
            este medio solicitamos tu valiosa
            participacion y cooperacion en esta investigacion del.</p>
        <p>Seguimiento de Egresados, que nos permitirá obtener informacion valiosa para analizar la
            problematica del mercado laboral y sus
            caracteristicas, asi como las competencias laborales de nuestros egresados.
            Las respuestas del cuestionario anexo seran tratadas con absoluta confidencialidad y con fines
            meramente estatidiscos.</p>
        <p>con nuestro agradecimiento por tu cooperación, recibe un cordial saludo.</p>
        <p>Atentamente</p>
        <p>SERGIO FERNANDO GARIBAY ARMENTA</p>
        <p>Director del plantel</p>
    </div>

</div>
        `;
    } else if (pagina === 2) {
        cuestionario.innerHTML = `
        <form action="pagina.php" method="GET" style="margin:3%; background-color:withe; padding: 3%; margin-top: -20px; margin-left: -50px; ">
            <div class="content-wrapper">
    <div class="text-content">
    <img src="https://sic.cultura.gob.mx/images/65091" class="side-image">
    <h1>Instrucciones</h1>
        <p>Por favor lea cuidadosamente y conteste este cuestionario de la siguiente manera, según sea el caso:</p>
        <p>
            <ol>
                <li> En el caso de preguntas cerradas, marque la que considere apropiada de esta
                manera: (x) </li>
                <li> En las preguntas de valoración se utiliza la escala del 1 al 5 en la que 1 es “muy malo” y 5 es “muy bueno”. </li>
                <li> En los casos de preguntas abiertas dejamos un espacio para que usted escriba con mayúscula una respuesta (______________________________). Si el espacio para su respuesta no es suficiente, por favor añada una hoja adicional al cuestionario. </li>
                <li> Al final anexamos un inciso para comentarios y sugerencias, le agradeceremos anote ahí lo que considere prudente para mejorar nuestro sistema educativo o bien los temas que, a su juicio, omitimos en el cuestionario. </li>
            </ol>
        .</p>
        <p>Gracias por su gentil colaboración.</p>
    </div>

        `;
    }
    else if (pagina === 3) {
        cuestionario.innerHTML = `
        <h1 style="color: #1B396A; padding: 40px;"></h1>
        <h1>Perfil y calidad</h1>
            <h4>II. Pertinencia y disponibilidad de medios y recursos para el aprendizaje</h4>
            <p>Califique la calidad de la educación profesional proporcionada por el personal docente, así como el Plan de
                Estudios de la <br> carrera que cursó y las condiciones del plantel en cuanto a infraestructura</p>
                
        <div class="container-fluid" >
		<form action="pagina.php" method="GET" style="margin: 13%; background-color:#F2F2F2; padding: 0%; margin-left: -10px; margin-top: 1%;">
        <div class="container">
        <div class="form-group">
            <div class="row">
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">1. Calidad de los docentes:</h6>
                    <select>
                        <option selected>Seleccione una opcion</option>
                        <option value="1">Muy buena</option>
                        <option value="2">Buena</option>
                        <option value="3">Regular</option>
                        <option value="4">Regular</option>
                    </select>
                </div>
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">2. Plan de estudios:</h6>
                    <select>
                        <option selected>Seleccione una opcion</option>
                        <option value="1">Muy buena</option>
                        <option value="2">Buena</option>
                        <option value="3">Regular</option>
                        <option value="4">Regular</option>
                    </select>
                </div>
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">3. Oportunidad de participar en proyectos
                        <br>de investigación y desarrollo:</h6>
                    <select>
                        <option selected>Seleccione una opcion</option>
                        <option value="1">Muy buena</option>
                        <option value="2">Buena</option>
                        <option value="3">Regular</option>
                        <option value="4">Regular</option>
                    </select>
                </div>
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">4. Enfasis que se le prestaba a la
                        investigación dentro del proceso de enseñanza:</h6>
                    <select>
                        <option selected>Seleccione una opcion</option>
                        <option value="1">Muy buena</option>
                        <option value="2">Buena</option>
                        <option value="3">Regular</option>
                        <option value="4">Regular</option>
                    </select>
                </div>
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">5. Satisfacción con las condiciones de
                        (infraestructura):</h6>
                    <select>
                        <option selected>Seleccione una opcion</option>
                        <option value="1">Muy buena</option>
                        <option value="2">Buena</option>
                        <option value="3">Regular</option>
                        <option value="4">Regular</option>
                    </select>
                </div>
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">6. Experiencia obtenida a través de la
                        residencia profesional:</h6>
                    <select>
                        <option selected>Seleccione una opcion</option>
                        <option value="1">Muy buena</option>
                        <option value="2">Buena</option>
                        <option value="3">Regular</option>
                        <option value="4">Regular</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
        `;
    }
    else if (pagina === 4) {
        cuestionario.innerHTML = `
        <h1 style="color: #1B396A; padding: 40px;"></h1>
        <h1>Desempeño y espectativas</h1>
<h4>IV. Desempeño profesional de los egresados</h4>
<h5>Marcar los campos que correspondan a su trayectoria profesional</h5>

        <form action="pagina.php" method="GET" style="margin: 13%; background-color:#F2F2F2; padding: 0%; margin-left: -10px; margin-top: 1%;">
            
        <div class="form-group1">
            <div class="row1">
      
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">1. Eficiencia para realizar las actividades
                     laborales,
                     en relación son su formación académica:</h6>
             <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">Muy eficiente</option>
              <option value="2">Eficiente</option>
              <option value="3">Poco eficiente</option>
              <option value="4">Deficiente</option>
            </select>
          </div>
      
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">2. Como califica su formación académica con
              respecto a su desempeño laboral:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">Excelente</option>
              <option value="2">Bueno</option>
              <option value="3">Regular</option>
              <option value="4">Malo</option>
              <option value="4">Pésimo</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">3. Utilidad de las residencias profesionales
              para su desarollo laboral y profesional:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">Excelente</option>
              <option value="2">Bueno</option>
              <option value="3">Regular</option>
              <option value="4">Malo</option>
              <option value="4">Pésimo</option>
            </select>
          </div>

          <h6>4. Aspectos que valora la empresa u organismo para la
            contratación de egresados. Llena el formulario, donde 1 es es poco y 5 mucho.</h6>

          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Área o campo de estudio:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Titulación:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Competencia laboral: análisis, aprendizaje,
              trabajo en equipo.</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Experiencia laboral/ Práctica (antes de
              egresar):</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Capacidad de liderazgo:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Conocimiento de idiomas extranjeros:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Posicionamiento de la institución de egreso:
            </h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Recomendaciones / Referencias:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Personalidad / Actitudes:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Otros aspectos:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
        </div>
      </div>
        `;
    }
    else if (pagina === 5) {
        cuestionario.innerHTML = `
        <form action="pagina.php" method="GET" style="margin: 13%; background-color:#F2F2F2; padding: 0%; margin-left: -10px;">






        
        <div class="content-wrapper">
        <div class="text-content">
        <img src="https://sic.cultura.gob.mx/images/65091" class="side-image">
        <h1>Desempeño y espectativas</h1>
            <p>Instituto tecnologico de minatitlán</p>
            <p>Fecha:</p>
            <p>Estimado Egresado:</p>
            <p>Los servicios educativos de este instituto tecnologico debe estar en mejora continua para
                asegurar la pertinencia de los conocimientos adquiridos y mejorar sistematicamente, para
                colaborar en la formacion integral de nuestros alumnos.
                para esto es indispensable tomarte en cuenta como factor de cambios y reformas, por lo que por
                este medio solicitamos tu valiosa
                participacion y cooperacion en esta investigacion del.</p>
            <p>Seguimiento de Egresados, que nos permitirá obtener informacion valiosa para analizar la
                problematica del mercado laboral y sus
                caracteristicas, asi como las competencias laborales de nuestros egresados.
                Las respuestas del cuestionario anexo seran tratadas con absoluta confidencialidad y con fines
                meramente estatidiscos.</p>
            <p>con nuestro agradecimiento por tu cooperación, recibe un cordial saludo.</p>
            <p>Atentamente</p>
            <p>SERGIO FERNANDO GARIBAY ARMENTA</p>
            <p>Director del plantel</p>
        </div>

        `;
    }

    if (pagina === 1) {
        footer.innerHTML = `
        <span class="page-counter1">${pagina}/${totalPaginas}</span>
        <button id="goForward" class="button-forward" onclick="siguientePagina()"></button>
        `;

    }
    else if (pagina === 5) {
        footer.innerHTML = `
        <button id="goBackward" class="button-backward" onclick="regresarPagina()"></button> 
        <span class="page-counter5">${pagina}/${totalPaginas}</span> 
        `;
    }
    else {
        footer.innerHTML = `
        <button id="goBackward" class="button-backward" onclick="regresarPagina()"></button>
        <span class="page-counter">${pagina}/${totalPaginas}</span>
        <button id="goForward" class="button-forward" onclick="siguientePagina()"></button>   
        `;
    }

}

window.onload = function () {
    actualizarContenido();
};
