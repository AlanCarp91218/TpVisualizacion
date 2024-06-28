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
        <p><span class="evento">Desarrollo del Primer Cuatrimestre:</span> 25 de marzo al 13 de julio (16 semanas)</p>
        <p><span class="evento">Actualización de documentación de inscripción:</span> 15 al 20 de abril</p>
        <p><span class="evento">Inscripción a exámenes finales mayo:</span> 29 de abril al 4 de mayo</p>
        <p><span class="evento">Exámenes finales mayo:</span> 13 al 18 de mayo</p>
        <p><span class="evento">Inscripción a exámenes finales agosto:</span> 15 al 20 de julio</p>
        <p><span class="evento">Semana de Evaluación Integradora Primer cuatrimestre:</span> 22 al 27 de julio</p>
        <p><span class="evento">Exámenes finales agosto:</span> 29 de julio al 3 de agosto</p>
        <p><span class="evento">3ra Solicitud de cambio o simultaneidad de carrera:</span> 1 al 4 de julio</p>
    `;
}

function generarCalendarioSegundoCuatrimestre() {
    return `
        <p><span class="evento">Desarrollo del Segundo Cuatrimestre:</span> 12 de agosto al 30 de noviembre (16 semanas)</p>
        <p><span class="evento">Actualización de documentación de inscripción:</span> 9 al 14 de septiembre</p>
        <p><span class="evento">Inscripción a exámenes finales octubre:</span> 16 al 21 de septiembre</p>
        <p><span class="evento">Exámenes finales octubre:</span> 30 de septiembre al 5 de octubre</p>
        <p><span class="evento">Inscripción a exámenes finales diciembre 2024:</span> 2 al 7 de diciembre</p>
        <p><span class="evento">Semana de Evaluación Integradora Segundo cuatrimestre:</span> 9 al 14 de diciembre</p>
        <p><span class="evento">Exámenes finales diciembre:</span> 16 al 21 de diciembre</p>
    `;
}

function generarCalendarioRecesoInvierno() {
    return `
        <p><span class="evento">Receso invernal:</span> 15 al 20 de julio</p>
    `;
}

function generarCalendarioExamenesFinales() {
    return `
        <p><span class="evento">Exámenes finales marzo 2024:</span> 4 al 16 de marzo de 2024</p>
        <p><span class="evento">Exámenes finales agosto 2024:</span> 29 de julio al 3 de agosto</p>
        <p><span class="evento">Exámenes finales diciembre 2024:</span> 16 al 21 de diciembre</p>
    `;
}

cambiarPeriodo();
