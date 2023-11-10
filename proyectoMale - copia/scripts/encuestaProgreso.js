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
        
        <div class="container-fluid" >
		<form action="pagina.php" method="GET" style="margin: 13%; background-color:#F2F2F2; padding: 0%; margin-left: -10px;">
			<!-- primera fila -->
			<div class="form-group">
				<div class="row">
					
					<!-- primera columna -->
					<div class="col-md-3">
						<label style="color:#203c6c" for="validationTooltip01">Nombre</label>
						<input  class="form-control"type="text" name="nombres" pattern="[A-Za-z]+" title="Solo se permiten letras" placeholder="Ej. Martina"> 
					</div>
					<!-- segunda columna -->
					<div class="col-md-3">
						<label style="color:#203c6c" for="validationTooltip01">Apellido Paterno</label>
						<input  class="form-control"type="text" name="apellidoM" pattern="[A-Za-z]+" title="Solo se permiten letras" placeholder="Ej. Hernandez">
					</div>
					<!-- tercera columna -->
					<div class="col-md-3">
						<label style="color:#203c6c" for="validationTooltip01">Apellido Materno</label>
						<input  class="form-control"type="text" name="apellidoP" pattern="[A-Za-z]+" title="Solo se permiten letras" placeholder="Ej. Lopez">
					</div>
					<div class="col-md-3">
						<label style="color:#203c6c" for="validationTooltip01">Numero de control</label>
						<input  class="form-control"type="number" name="Ncontrol" min="8" max="8"  placeholder="Ej. 18230752" >
						
					</div>

					
				</div>
			</div>
			<!-- segunda fila -->
			<div class="form-group">
				<div class="row">
					<!-- primera columna -->
					<div class="col-md-3">
						<label style="color:#203c6c" for="validationTooltip01">Feha de nacimiento</label>
						<input  class="form-control"type="date" name="nacimiento" placeholder="Fecha de nacimiento">
					</div>
					<!-- segunda columna -->
					<div class="col-md-3" >
						<label style="color:#203c6c" for="validationTooltip01">CURP</label>
						<input  class="form-control"type="text" name="curp" placeholder="Ej. FEPM890204HASRRN08">
					</div>
					<!-- tercera columna -->
					<div class="col-md-3">
						<label style="color:#203c6c"  for="validationTooltip01">Sexo</label>
						<select class="form-control" >
							<option value="" selected disabled>Selecciona una opción</option>
							<option>Femenino</option>
							<option>Masculino</option>
						</select>
					</div>
					<!-- cuarta columna -->
					
					<div class="col-md-3">	
						<label style="color:#203c6c" for="validationTooltip01">Estado civil</label>
						<select class="form-control" >
							<option value="" selected disabled>Selecciona una opción</option>
							<option>Soltero(a)</option>
							<option>Casado(a)</option>
							<option>Otro</option>
						</select>
						
					</div>
				</div>
			</div>
			<!-- tercera fila -->
			<div class="form-group">
				<div class="row">
					<!-- primera columna -->
					<div class="col-md-3">
						<select  class="form-control">
							<option>Registro civil</option>
							<option>Tarjeta de identidad</option>
							<option>Cedula</option>
						</select>
					</div>
					<!-- segunda columna -->
					<div class="col-md-3">
						<input  class="form-control"type="number" name="ndocumento" placeholder="Numero de documentó">
					</div>
					<!-- tercera columna -->
					<div class="col-md-3">
						<input class="form-control" type="date" name="expedicion" placeholder="Expedición">
					</div>
				</div>
			</div>

				<!-- uarta fila -->
			<div class="form-group">
				<div class="row">
					
					<!-- primera columna -->
					<div class="col-md-3">
						<p>Nombre</p> 
						<input  class="form-control"type="text" name="nombres" placeholder="Nombres"> 
					</div>
					<!-- segunda columna -->
					<div class="col-md-3">
						<p>Apellido Paterno</p> 
						<input  class="form-control"type="text" name="apellidos" placeholder="Apellidos">
					</div>
					<!-- tercera columna -->
					<div class="col-md-3">
						<p>Apellido Materno</p> 
						<input  class="form-control"type="date" name="nacimiento" placeholder="Fecha de nacimiento">
					</div>
					<div class="col-md-3">
						<p>Numero de control</p> 
						<input  class="form-control"type="date" name="nacimiento" placeholder="Fecha de nacimiento">
					</div>

					
				</div>
			</div>
			<button class="btn btn-default" type="submit">Guardar</button>
		</form>
	</div>
        `;
    }
    else if (pagina === 4) {
        cuestionario.innerHTML = `
        <form action="pagina.php" method="GET" style="margin: 13%; background-color:#F2F2F2; padding: 0%; margin-left: -10px;">
            
        
        
        
        
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
