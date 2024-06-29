function cambiarPeriodo() {
    var periodo = document.getElementById("periodo-select").value;
    var calendarioDiv = document.getElementById("calendario");
    calendarioDiv.innerHTML = ""; 

    switch (periodo) {
        case "primer-cuatrimestre":
            calendarioDiv.innerHTML = generarCalendarioPrimerCuatrimestre();
            break;
        case "segundo-cuatrimestre":
            calendarioDiv.innerHTML = generarCalendarioSegundoCuatrimestre();
            break;
        case "receso-invierno":
            calendarioDiv.innerHTML = generarCalendarioRecesoInvierno();
            break;
        case "examenes-finales":
            calendarioDiv.innerHTML = generarCalendarioExamenesFinales();
            break;
        default:
            calendarioDiv.innerHTML = "Selecciona un período válido";
    }
}

function generarCalendarioPrimerCuatrimestre() {
    return `
        <div class="periodo">
            <h3>Primer Cuatrimestre</h3>
            <div class="evento-container">
                <div class="evento-titulo">Desarrollo del Primer Cuatrimestre:</div>
                <div class="evento-fecha">25 de marzo al 13 de julio (16 semanas)</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Actualización de documentación de inscripción:</div>
                <div class="evento-fecha">15 al 20 de abril</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Inscripción a exámenes finales mayo:</div>
                <div class="evento-fecha">29 de abril al 4 de mayo</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Exámenes finales mayo:</div>
                <div class="evento-fecha">13 al 18 de mayo</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Inscripción a exámenes finales agosto:</div>
                <div class="evento-fecha">15 al 20 de julio</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Semana de Evaluación Integradora Primer cuatrimestre:</div>
                <div class="evento-fecha">22 al 27 de julio</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Exámenes finales agosto:</div>
                <div class="evento-fecha">29 de julio al 3 de agosto</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">3ra Solicitud de cambio o simultaneidad de carrera:</div>
                <div class="evento-fecha">1 al 4 de julio</div>
            </div>
        </div>
    `;
}

function generarCalendarioSegundoCuatrimestre() {
    return `
        <div class="periodo">
            <h3>Segundo Cuatrimestre</h3>
            <div class="evento-container">
                <div class="evento-titulo">Desarrollo del Segundo Cuatrimestre:</div>
                <div class="evento-fecha">12 de agosto al 30 de noviembre (16 semanas)</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Actualización de documentación de inscripción:</div>
                <div class="evento-fecha">9 al 14 de septiembre</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Inscripción a exámenes finales octubre:</div>
                <div class="evento-fecha">16 al 21 de septiembre</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Exámenes finales octubre:</div>
                <div class="evento-fecha">30 de septiembre al 5 de octubre</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Inscripción a exámenes finales diciembre 2024:</div>
                <div class="evento-fecha">2 al 7 de diciembre</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Semana de Evaluación Integradora Segundo cuatrimestre:</div>
                <div class="evento-fecha">9 al 14 de diciembre</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Exámenes finales diciembre:</div>
                <div class="evento-fecha">16 al 21 de diciembre</div>
            </div>
        </div>
    `;
}

function generarCalendarioRecesoInvierno() {
    return `
        <div class="periodo">
            <h3>Receso de Invierno</h3>
            <div class="evento-container">
                <div class="evento-titulo">Receso invernal:</div>
                <div class="evento-fecha">15 al 20 de julio</div>
            </div>
        </div>
    `;
}

function generarCalendarioExamenesFinales() {
    return `
        <div class="periodo">
            <h3>Exámenes Finales</h3>
            <div class="evento-container">
                <div class="evento-titulo">Exámenes finales marzo 2024:</div>
                <div class="evento-fecha">4 al 16 de marzo de 2024</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Exámenes finales agosto 2024:</div>
                <div class="evento-fecha">29 de julio al 3 de agosto</div>
            </div>
            <div class="evento-container">
                <div class="evento-titulo">Exámenes finales diciembre 2024:</div>
                <div class="evento-fecha">16 al 21 de diciembre</div>
            </div>
        </div>
    `;
}

cambiarPeriodo();