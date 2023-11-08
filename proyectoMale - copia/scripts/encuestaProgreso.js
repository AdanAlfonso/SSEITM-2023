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

<div class="content-wrapper">
    <div class="text-content">
    <img src="https://sic.cultura.gob.mx/images/65091" class="side-image">
    <div class="linea"><p>___________________________________________________________________________________________________________________</p></div>
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
        
            <div class="content-wrapper">
    <div class="text-content">
    <img src="https://sic.cultura.gob.mx/images/65091" class="side-image">
    <h1>Perfil y calidad</h1>
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
    else if (pagina === 4) {
        cuestionario.innerHTML = `
        
            <div class="content-wrapper">
    <div class="text-content">
    <img src="https://sic.cultura.gob.mx/images/65091" class="side-image">
    <h1>Ubicación laboral</h1>
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
    else if (pagina === 5) {
        cuestionario.innerHTML = `
        
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

    if (pagina===1){
        footer.innerHTML = `
        <span class="page-counter1">${pagina}/${totalPaginas}</span>
        <button id="goForward" class="button-forward" onclick="siguientePagina()"></button>
        `;

    }
    else if (pagina===5){
        footer.innerHTML = `
        <button id="goBackward" class="button-backward" onclick="regresarPagina()"></button> 
        <span class="page-counter5">${pagina}/${totalPaginas}</span> 
        `;
    }
    else{
        footer.innerHTML = `
        <button id="goBackward" class="button-backward" onclick="regresarPagina()"></button>
        <span class="page-counter">${pagina}/${totalPaginas}</span>
        <button id="goForward" class="button-forward" onclick="siguientePagina()"></button>   
        `;
    }
    
}

window.onload = function() {
actualizarContenido();
};
