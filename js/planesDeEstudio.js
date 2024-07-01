document.getElementById('carreraSelect').addEventListener('change', function() {
    const perfiles = document.querySelectorAll('.perfil');
    perfiles.forEach(perfil => perfil.style.display = 'none');

    const selectedValue = this.value;
    if (selectedValue) {
        document.getElementById(selectedValue).style.display = 'block';
        document.getElementById('tituloPerfil').style.display = 'block'; // Mostrar el título del perfil
        cargarPlanEstudio(selectedValue);
    } else {
        document.getElementById('tituloPerfil').style.display = 'none'; // Ocultar el título del perfil si no hay selección
    }
});
function cargarPlanEstudio(carrera) {
    const planEstudio = document.getElementById('planEstudio');
    planEstudio.style.display = 'block';
    switch (carrera) {
        case 'perfilDesarrolloWeb':
            planEstudio.innerHTML = `
                 <h2 class="titulo-cuatrimestre">Primer Año - Primer Cuatrimestre</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Régimen</th>
                        <th>Horas Semanales</th>
                    </tr>
                    <tr>
                        <td>2619</td>
                        <td>Programación Básica I</td>
                        <td>-</td>
                        <td>Cuatrimestral</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>2620</td>
                        <td>Informática General</td>
                        <td>-</td>
                        <td>Cuatrimestral</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2621</td>
                        <td>Matemática General</td>
                        <td>-</td>
                        <td>Cuatrimestral</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>2622</td>
                        <td>Inglés Técnico I</td>
                        <td>-</td>
                        <td>Cuatrimestral</td>
                        <td>4</td>
                    </tr>
                </table>

                <h2 class="titulo-cuatrimestre">Primer Año - Segundo Cuatrimestre</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Régimen</th>
                        <th>Horas Semanales</th>
                    </tr>
                    <tr>
                        <td>2623</td>
                        <td>Programación Básica II</td>
                        <td>2619</td>
                        <td>Cuatrimestral</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2624</td>
                        <td>Programación Web I</td>
                        <td>2619/2620</td>
                        <td>Cuatrimestral</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2625</td>
                        <td>Base de Datos I</td>
                        <td>2619/2620/2621</td>
                        <td>Cuatrimestral</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>2626</td>
                        <td>Introducción al Diseño Gráfico en la Web</td>
                        <td>2620</td>
                        <td>Cuatrimestral</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2627</td>
                        <td>Inglés Técnico II</td>
                        <td>2622</td>
                        <td>Cuatrimestral</td>
                        <td>4</td>
                    </tr>
                </table>

                <h2 class="titulo-cuatrimestre">Segundo Año - Primer Cuatrimestre</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Régimen</th>
                        <th>Horas Semanales</th>
                    </tr>
                    <tr>
                        <td>2628</td>
                        <td>Programación Web II</td>
                        <td>2623/2624/2625</td>
                        <td>Cuatrimestral</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>2629</td>
                        <td>Diseño de Aplicaciones Web</td>
                        <td>2623/2624/2625</td>
                        <td>Cuatrimestral</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>2630</td>
                        <td>Visualización e Interfaces</td>
                        <td>2624/2626</td>
                        <td>Cuatrimestral</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2631</td>
                        <td>Taller Web I</td>
                        <td>2623/2624/2625</td>
                        <td>Cuatrimestral</td>
                        <td>4</td>
                    </tr>
                </table>

                <h2 class="titulo-cuatrimestre">Segundo Año - Segundo Cuatrimestre</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Régimen</th>
                        <th>Horas Semanales</th>
                    </tr>
                    <tr>
                        <td>2632</td>
                        <td>Base de Datos II</td>
                        <td>2625/2629</td>
                        <td>Cuatrimestral</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2633</td>
                        <td>Programación Web III</td>
                        <td>2628/2629/2630</td>
                        <td>Cuatrimestral</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>2634</td>
                        <td>Tecnología de Redes</td>
                        <td>2630</td>
                        <td>Cuatrimestral</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2635</td>
                        <td>Taller Web II</td>
                        <td>2631</td>
                        <td>Cuatrimestral</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2636</td>
                        <td>Seguridad y Calidad en Aplicaciones Web</td>
                        <td>2628/2629</td>
                        <td>Cuatrimestral</td>
                        <td>4</td>
                    </tr>
                </table>

                <h2 class="titulo-cuatrimestre">Tercer Año - Primer Cuatrimestre</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Régimen</th>
                        <th>Horas Semanales</th>
                    </tr>
                    <tr>
                        <td>2637</td>
                        <td>Introducción a la Administración de Proyectos</td>
                        <td>2632/2633/2634</td>
                        <td>Cuatrimestral</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2638</td>
                        <td>Taller Práctico Integrador</td>
                        <td>2632/2633/2634/2635/2636</td>
                        <td>Cuatrimestral</td>
                        <td>8</td>
                    </tr>
                </table>`;
            break;
            case 'perfilIngenieriaInformatica':
                planEstudio.innerHTML = `
                    <h2 class="titulo-cuatrimestre">Primer Año - Primer Cuatrimestre</h2>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Asignatura</th>
                            <th>Correlatividad</th>
                            <th>Régimen</th>
                            <th>Horas Semanales</th>
                        </tr>
                        <tr>
                            <td>3001</td>
                            <td>Matemática I</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>3002</td>
                            <td>Introducción a la Programación</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>3003</td>
                            <td>Organización de Computadoras</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3004</td>
                            <td>Estructuras de Datos</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>8</td>
                        </tr>
                    </table>
        
                    <h2 class="titulo-cuatrimestre">Primer Año - Segundo Cuatrimestre</h2>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Asignatura</th>
                            <th>Correlatividad</th>
                            <th>Régimen</th>
                            <th>Horas Semanales</th>
                        </tr>
                        <tr>
                            <td>3005</td>
                            <td>Programación con Objetos I</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>3006</td>
                            <td>Bases de Datos</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3007</td>
                            <td>Inglés I</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>3008</td>
                            <td>Nuevos Entornos y Lenguajes</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>2</td>
                        </tr>
                    </table>
        
                    <h2 class="titulo-cuatrimestre">Segundo Año - Primer Cuatrimestre</h2>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Asignatura</th>
                            <th>Correlatividad</th>
                            <th>Régimen</th>
                            <th>Horas Semanales</th>
                        </tr>
                        <tr>
                            <td>3009</td>
                            <td>Matemática II</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>3010</td>
                            <td>Programación con Objetos II</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3011</td>
                            <td>Redes de Computadoras</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3012</td>
                            <td>Algoritmos</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                    </table>
        
                    <h2 class="titulo-cuatrimestre">Segundo Año - Segundo Cuatrimestre</h2>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Asignatura</th>
                            <th>Correlatividad</th>
                            <th>Régimen</th>
                            <th>Horas Semanales</th>
                        </tr>
                        <tr>
                            <td>3013</td>
                            <td>Sistemas Operativos</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3014</td>
                            <td>Programación Funcional</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>3015</td>
                            <td>Construcción de Interfaces de Usuario</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3016</td>
                            <td>Estrategias de Persistencia</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                    </table>
        
                    <h2 class="titulo-cuatrimestre">Tercer Año - Primer Cuatrimestre</h2>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Asignatura</th>
                            <th>Correlatividad</th>
                            <th>Régimen</th>
                            <th>Horas Semanales</th>
                        </tr>
                        <tr>
                            <td>3017</td>
                            <td>Análisis Matemático</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3018</td>
                            <td>Lógica y Programación</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3019</td>
                            <td>Elementos de Ingeniería de Software</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3020</td>
                            <td>Seguridad de la Información</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                    </table>
        
                    <h2 class="titulo-cuatrimestre">Tercer Año - Segundo Cuatrimestre</h2>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Asignatura</th>
                            <th>Correlatividad</th>
                            <th>Régimen</th>
                            <th>Horas Semanales</th>
                        </tr>
                        <tr>
                            <td>3021</td>
                            <td>Programación Concurrente</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>3022</td>
                            <td>Ingeniería de Requerimientos</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>3023</td>
                            <td>Desarrollo de Aplicaciones</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3024</td>
                            <td>Materia UNAHUR I</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>2</td>
                        </tr>
                    </table>
        
                    <h2 class="titulo-cuatrimestre">Cuarto Año - Primer Cuatrimestre</h2>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Asignatura</th>
                            <th>Correlatividad</th>
                            <th>Régimen</th>
                            <th>Horas Semanales</th>
                        </tr>
                        <tr>
                            <td>3025</td>
                            <td>Probabilidad y Estadística</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3026</td>
                            <td>Gestión de Proyectos de Desarrollo de Software</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>3027</td>
                            <td>Lenguajes Formales y Autómatas</td>
                            <td>-</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                                </table>`;

                break;

                case 'perfilEnfermeria':
                    planEstudio.innerHTML = `
                        <h2 class="titulo-cuatrimestre">Primer Año - Primer Cuatrimestre</h2>
                        <table>
                            <tr>
                                <th>Código</th>
                                <th>Asignatura</th>
                                <th>Correlatividad</th>
                                <th>Régimen</th>
                                <th>Horas Semanales</th>
                            </tr>
                            <tr>
                                <td>3056</td>
                                <td>Enfermería General</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>3068</td>
                                <td>Ciencias Biológicas I</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>3074</td>
                                <td>Sociología I</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3057</td>
                                <td>Enfermería en la Atención del Adulto I</td>
                                <td>3056</td>
                                <td>Cuatrimestral</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>3070</td>
                                <td>Microbiología</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                        </table>
            
                        <h2 class="titulo-cuatrimestre">Primer Año - Segundo Cuatrimestre</h2>
                        <table>
                            <tr>
                                <th>Código</th>
                                <th>Asignatura</th>
                                <th>Correlatividad</th>
                                <th>Régimen</th>
                                <th>Horas Semanales</th>
                            </tr>
                            <tr>
                                <td>3078</td>
                                <td>Epidemiología</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3079</td>
                                <td>Comunicación como Herramienta Profesional</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3072</td>
                                <td>Farmacología</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3071</td>
                                <td>Nutrición Aplicada a la Enfermería</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3073</td>
                                <td>Antropología</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                        </table>
            
                        <h2 class="titulo-cuatrimestre">Segundo Año - Primer Cuatrimestre</h2>
                        <table>
                            <tr>
                                <th>Código</th>
                                <th>Asignatura</th>
                                <th>Correlatividad</th>
                                <th>Régimen</th>
                                <th>Horas Semanales</th>
                            </tr>
                            <tr>
                                <td>3069</td>
                                <td>Ciencias Biológicas II</td>
                                <td>3068</td>
                                <td>Cuatrimestral</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>3058</td>
                                <td>Enfermería en la Atención del Adulto II</td>
                                <td>3056</td>
                                <td>Cuatrimestral</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>3059</td>
                                <td>Enfermería en Salud Mental</td>
                                <td>3056</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3060</td>
                                <td>Enfermería en Atención y Cuidados Obstétricos</td>
                                <td>3056</td>
                                <td>Cuatrimestral</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>3062</td>
                                <td>Enfermería en la Atención del Niño y el Adolescente I</td>
                                <td>3056</td>
                                <td>Cuatrimestral</td>
                                <td>6</td>
                            </tr>
                        </table>
            
                        <h2 class="titulo-cuatrimestre">Segundo Año - Segundo Cuatrimestre</h2>
                        <table>
                            <tr>
                                <th>Código</th>
                                <th>Asignatura</th>
                                <th>Correlatividad</th>
                                <th>Régimen</th>
                                <th>Horas Semanales</th>
                            </tr>
                            <tr>
                                <td>3061</td>
                                <td>Enfermería en la Atención del Recién Nacido</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3063</td>
                                <td>Introducción a la Administración de Servicios de Enfermería Comunitaria y Hospitalaria</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3064</td>
                                <td>Enfermería Comunitaria I</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3075</td>
                                <td>Psicología</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3076</td>
                                <td>Marcos Éticos y Legales del Ejercicio de la Enfermería</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                        </table>
            
                        <h2 class="titulo-cuatrimestre">Tercer Año - Primer Cuatrimestre</h2>
                        <table>
                            <tr>
                                <th>Código</th>
                                <th>Asignatura</th>
                                <th>Correlatividad</th>
                                <th>Régimen</th>
                                <th>Horas Semanales</th>
                            </tr>
                            <tr>
                                <td>3065</td>
                                <td>Enfermería en la Atención del Niño y el Adolescente II</td>
                                <td>3062</td>
                                <td>Cuatrimestral</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>3067</td>
                                <td>Filosofía</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3081</td>
                                <td>Inglés Nivel I</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>3082</td>
                                <td>Inglés Nivel II</td>
                                <td>3081</td>
                                <td>Cuatrimestral</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>3083</td>
                                <td>Investigación en Enfermería I</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                        </table>
            
                        <h2 class="titulo-cuatrimestre">Tercer Año - Segundo Cuatrimestre</h2>
                        <table>
                            <tr>
                                <th>Código</th>
                                <th>Asignatura</th>
                                <th>Correlatividad</th>
                                <th>Régimen</th>
                                <th>Horas Semanales</th>
                            </tr>
                            <tr>
                                <td>3084</td>
                                <td>Investigación en Enfermería II</td>
                                <td>3083</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3085</td>
                                <td>Filosofía y Ciencia Enfermera</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3086</td>
                                <td>Enfermería en la Atención del Paciente Crítico I</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3087</td>
                                <td>Enfermería Comunitaria II</td>
                                <td>3064</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3090</td>
                                <td>Inglés Nivel III</td>
                                <td>3082</td>
                                <td>Cuatrimestral</td>
                                <td>2</td>
                            </tr>
                        </table>
            
                        <h2 class="titulo-cuatrimestre">Cuarto Año - Primer Cuatrimestre</h2>
                        <table>
                            <tr>
                                <th>Código</th>
                                <th>Asignatura</th>
                                <th>Correlatividad</th>
                                <th>Régimen</th>
                                <th>Horas Semanales</th>
                            </tr>
                            <tr>
                                <td>3091</td>
                                <td>Inglés Nivel IV</td>
                                <td>3090</td>
                                <td>Cuatrimestral</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>3092</td>
                                <td>Investigación en Enfermería III</td>
                                <td>3084</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3093</td>
                                <td>Enfermería en la Atención del Paciente Crítico II</td>
                                <td>3086</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3094</td>
                                <td>Gestión de los Servicios de Enfermería Hospitalarios y Comunitarios I</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3095</td>
                                <td>Deontología en Enfermería</td>
                                <td>-</td>
                                <td>Cuatrimestral</td>
                                <td>4</td>
                            </tr>
                        </table>`
        break;

        case 'perfilAnatomia':
        planEstudio.innerHTML = `
            <h2 class="titulo-cuatrimestre">Primer Año - Primer Cuatrimestre</h2>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Asignatura</th>
                    <th>Correlatividad</th>
                    <th>Régimen</th>
                    <th>Horas Semanales</th>
                </tr>
                <tr>
                    <td>00901</td>
                    <td>Inglés Nivel I</td>
                    <td>-</td>
                    <td>Cuatrimestral</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>03600</td>
                    <td>Ciencias Biológicas I</td>
                    <td>-</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>03601</td>
                    <td>Química Inorgánica</td>
                    <td>-</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>03602</td>
                    <td>Principios de Matemática</td>
                    <td>-</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>03603</td>
                    <td>Técnicas de Laboratorio I</td>
                    <td>-</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
            </table>

            <h2 class="titulo-cuatrimestre">Primer Año - Segundo Cuatrimestre</h2>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Asignatura</th>
                    <th>Correlatividad</th>
                    <th>Régimen</th>
                    <th>Horas Semanales</th>
                </tr>
                <tr>
                    <td>00902</td>
                    <td>Inglés Nivel II</td>
                    <td>00901</td>
                    <td>Cuatrimestral</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>03604</td>
                    <td>Epidemiología y Bioseguridad</td>
                    <td>03601 - 03603</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>03605</td>
                    <td>Ciencias Biológicas II</td>
                    <td>03600</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>03606</td>
                    <td>Química Orgánica</td>
                    <td>03601</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>03607</td>
                    <td>Cito Histología</td>
                    <td>03600</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
            </table>

            <h2 class="titulo-cuatrimestre">Segundo Año - Primer Cuatrimestre</h2>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Asignatura</th>
                    <th>Correlatividad</th>
                    <th>Régimen</th>
                    <th>Horas Semanales</th>
                </tr>
                <tr>
                    <td>03608</td>
                    <td>Técnicas de Laboratorio II</td>
                    <td>03607 - 03603</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>03609</td>
                    <td>Habilidades Prácticas I</td>
                    <td>03608</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>00911</td>
                    <td>Computación Nivel I</td>
                    <td>-</td>
                    <td>Cuatrimestral</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>03610</td>
                    <td>Cito Patología I</td>
                    <td>03608</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>03611</td>
                    <td>Técnicas Citológicas</td>
                    <td>03608</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
            </table>

            <h2 class="titulo-cuatrimestre">Segundo Año - Segundo Cuatrimestre</h2>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Asignatura</th>
                    <th>Correlatividad</th>
                    <th>Régimen</th>
                    <th>Horas Semanales</th>
                </tr>
                <tr>
                    <td>03612</td>
                    <td>Técnicas Histológicas</td>
                    <td>03608 - 03609</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>03613</td>
                    <td>Histopatología</td>
                    <td>03608 - 03609</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>03614</td>
                    <td>Innovación en Biotecnología</td>
                    <td>03608</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>00912</td>
                    <td>Computación Nivel II</td>
                    <td>00911</td>
                    <td>Cuatrimestral</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>03615</td>
                    <td>Cito Patología II</td>
                    <td>03610</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
            </table>

            <h2 class="titulo-cuatrimestre">Tercer Año - Primer Cuatrimestre</h2>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Asignatura</th>
                    <th>Correlatividad</th>
                    <th>Régimen</th>
                    <th>Horas Semanales</th>
                </tr>
                <tr>
                    <td>03616</td>
                    <td>Prácticas Profesionalizantes en Citología</td>
                    <td>03615</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>03617</td>
                    <td>Prácticas Profesionalizantes en Histología</td>
                    <td>03612 - 03613</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>03618</td>
                    <td>Gestión de Servicios de Anatomía Patológica</td>
                    <td>03608</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>03619</td>
                    <td>Habilidades Prácticas II</td>
                    <td>03609</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>03620</td>
                    <td>Prácticas Profesionalizantes Integradas</td>
                    <td>03619 - 03617 - 03616</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
            </table>
        `;
        break;

        case 'perfilComercioInternacional':
            planEstudio.innerHTML = `
                <h2 class="titulo-cuatrimestre">Primer Año</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Carga Horaria</th>
                    </tr>
                    <tr>
                        <td>2400</td>
                        <td>Matemática I</td>
                        <td>***</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>2401</td>
                        <td>Contabilidad Básica</td>
                        <td>***</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>2402</td>
                        <td>Derecho Público</td>
                        <td>***</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2403</td>
                        <td>Introducción al Conocimiento Científico</td>
                        <td>***</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2404</td>
                        <td>Historia Económica Social y Contemporánea</td>
                        <td>***</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2405</td>
                        <td>Administración General</td>
                        <td>***</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>901</td>
                        <td>Inglés I</td>
                        <td>***</td>
                        <td>4</td>
                    </tr>
                </table>
    
                <h2 class="titulo-cuatrimestre">Segundo Año</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Carga Horaria</th>
                    </tr>
                    <tr>
                        <td>2407</td>
                        <td>Estadística</td>
                        <td>2400</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>2411</td>
                        <td>Economía General</td>
                        <td>2400 - 2404</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2440</td>
                        <td>Derecho Civil y Comercial</td>
                        <td>2402</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2441</td>
                        <td>Introducción al Comercio Internacional</td>
                        <td>***</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2416</td>
                        <td>Macroeconomía</td>
                        <td>2400 - 2411</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2443</td>
                        <td>Legislación Aduanera</td>
                        <td>2440 - 2441</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>902</td>
                        <td>Inglés II</td>
                        <td>901</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>911</td>
                        <td>Computación I</td>
                        <td>***</td>
                        <td>4</td>
                    </tr>
                </table>
    
                <h2 class="titulo-cuatrimestre">Tercer Año</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Carga Horaria</th>
                    </tr>
                    <tr>
                        <td>2439</td>
                        <td>Geografía Económica</td>
                        <td>***</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2444</td>
                        <td>Operatoria del Comercio Internacional</td>
                        <td>2443</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2445</td>
                        <td>Valoración y Clasificación Arancelaria</td>
                        <td>2443</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2446</td>
                        <td>Costos y Elementos de Finanzas</td>
                        <td>2401</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2448</td>
                        <td>Práctica Aduanera</td>
                        <td>2444 - 2445</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2449</td>
                        <td>Logística Internacional</td>
                        <td>2439 - 2444</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2450</td>
                        <td>Régimen Financiero del Comercio Internacional</td>
                        <td>2441 - 2446</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>912</td>
                        <td>Computación II</td>
                        <td>911</td>
                        <td>4</td>
                    </tr>
                </table>
    
                <h2 class="titulo-cuatrimestre">Cuarto Año</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Carga Horaria</th>
                    </tr>
                    <tr>
                        <td>2451</td>
                        <td>Comercialización</td>
                        <td>2405 - 2407 - 2441</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2452</td>
                        <td>Investigación de Mercados</td>
                        <td>2403 - 2407 - 2439</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2453</td>
                        <td>Integración Económica</td>
                        <td>2441 - 2416</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2454</td>
                        <td>Planeamiento y Evaluación de Proyectos</td>
                        <td>2407 - 2444 - 2446</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2455</td>
                        <td>Taller de Gestión Operativa del Comercio Internacional</td>
                        <td>2444 - 2446 - 2454</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2456</td>
                        <td>Economía Internacional</td>
                        <td>2453</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2461</td>
                        <td>Inglés Técnico I</td>
                        <td>903</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>903</td>
                        <td>Inglés III</td>
                        <td>902</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>904</td>
                        <td>Inglés IV</td>
                        <td>903</td>
                        <td>4</td>
                    </tr>
                </table>
    
                <h2 class="titulo-cuatrimestre">Quinto Año</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Carga Horaria</th>
                    </tr>
                    <tr>
                        <td>2457</td>
                        <td>Relaciones Económicas Internacionales</td>
                        <td>2456</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>2458</td>
                        <td>Práctica Profesional</td>
                        <td>2452 - 2455 - 2458</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>2459</td>
                        <td>Derecho Internacional</td>
                        <td>2443 - 2453</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2462</td>
                        <td>Inglés Técnico II</td>
                        <td>2461</td>
                        <td>4</td>
                    </tr>
                </table>
            `;
            break;

            case 'perfilContadorPublico':
        planEstudio.innerHTML = `
            <h2 class="titulo-cuatrimestre">Primer Año</h2>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Asignatura</th>
                    <th>Correlatividad</th>
                    <th>Régimen</th>
                    <th>Horas Semanales</th>
                </tr>
                <tr>
                    <td>2400</td>
                    <td>Matemática I</td>
                    <td>***</td>
                    <td>Cuatrimestral</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>2402</td>
                    <td>Derecho Público</td>
                    <td>***</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2403</td>
                    <td>Introducción al Conocimiento Científico</td>
                    <td>***</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2404</td>
                    <td>Historia Económica Social y Contemporánea</td>
                    <td>***</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2405</td>
                    <td>Administración General</td>
                    <td>***</td>
                    <td>Cuatrimestral</td>
                    <td>8</td>
                </tr>
            </table>
            
            <h2 class="titulo-cuatrimestre">Segundo Año</h2>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Asignatura</th>
                    <th>Correlatividad</th>
                    <th>Régimen</th>
                    <th>Horas Semanales</th>
                </tr>
                <tr>
                    <td>2406</td>
                    <td>Matemática II</td>
                    <td>2400</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>2409</td>
                    <td>Derecho Civil</td>
                    <td>2402</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2413</td>
                    <td>Derecho Comercial I</td>
                    <td>2409</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2416</td>
                    <td>Macroeconomía</td>
                    <td>2406 - 2411</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>902</td>
                    <td>Inglés II</td>
                    <td>901</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
            </table>
            
            <h2 class="titulo-cuatrimestre">Tercer Año</h2>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Asignatura</th>
                    <th>Correlatividad</th>
                    <th>Régimen</th>
                    <th>Horas Semanales</th>
                </tr>
                <tr>
                    <td>2407</td>
                    <td>Estadística</td>
                    <td>2400</td>
                    <td>Cuatrimestral</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>2412</td>
                    <td>Psicosociología de las Organizaciones</td>
                    <td>2403 - 2405</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2417</td>
                    <td>Derecho Laboral y Previsional</td>
                    <td>2409</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2418</td>
                    <td>Estados Contables</td>
                    <td>2410 - 2413</td>
                    <td>Cuatrimestral</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>2419</td>
                    <td>Matemática Financiera</td>
                    <td>2400</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
            </table>
            
            <h2 class="titulo-cuatrimestre">Cuarto Año</h2>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Asignatura</th>
                    <th>Correlatividad</th>
                    <th>Régimen</th>
                    <th>Horas Semanales</th>
                </tr>
                <tr>
                    <td>2415</td>
                    <td>Sistemas de Información</td>
                    <td>2405</td>
                    <td>Cuatrimestral</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>2430</td>
                    <td>Derecho Comercial II</td>
                    <td>2413</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2432</td>
                    <td>Costos y Actividades Especiales</td>
                    <td>2408 - 2418</td>
                    <td>Cuatrimestral</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>2433</td>
                    <td>Teoría y Técnica Impositiva I</td>
                    <td>2418 - 2431</td>
                    <td>Cuatrimestral</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>903</td>
                    <td>Inglés III</td>
                    <td>902</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
            </table>
            
            <h2 class="titulo-cuatrimestre">Quinto Año</h2>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Asignatura</th>
                    <th>Correlatividad</th>
                    <th>Régimen</th>
                    <th>Horas Semanales</th>
                </tr>
                <tr>
                    <td>2435</td>
                    <td>Teoría y Técnica Impositiva II</td>
                    <td>2418 - 2431</td>
                    <td>Cuatrimestral</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>2436</td>
                    <td>Auditoría</td>
                    <td>2425 - 2430 - 2432</td>
                    <td>Cuatrimestral</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>2530</td>
                    <td>Seminario de Práctica Prof. Adm. Contable</td>
                    <td>2412 - 2417 - 2434 - 2435 - 2436</td>
                    <td>Cuatrimestral</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>2534</td>
                    <td>Seminario de Práctica Prof. Jurídico Contable</td>
                    <td>2412 - 2417 - 2434 - 2435 - 2436</td>
                    <td>Cuatrimestral</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>904</td>
                    <td>Inglés IV</td>
                    <td>903</td>
                    <td>Cuatrimestral</td>
                    <td>4</td>
                </tr>
            </table>
        `;
        break;
        case 'perfilAbogacia':
            planHTML = `
                <h2 class="titulo-cuatrimestre">Primer Año</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Régimen</th>
                        <th>Horas Semanales</th>
                    </tr>
                    <tr>
                        <td>1000</td>
                        <td>INTRODUCCIÓN AL DERECHO</td>
                        <td>--</td>
                        <td>CU</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>HISTORIA DEL DERECHO Y DE LAS INSTITUCIONES</td>
                        <td>--</td>
                        <td>CU</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1002</td>
                        <td>DERECHO ROMANO</td>
                        <td>--</td>
                        <td>CU</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1003</td>
                        <td>PROCESOS POLÍTICOS Y ECONÓMICOS MUNDIALES</td>
                        <td>--</td>
                        <td>CU</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1004</td>
                        <td>ABOR.INTERDISCIPLINARIO DEL SUJ.DENTRO DE LA SOC. ACTUAL</td>
                        <td>--</td>
                        <td>CU</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1005</td>
                        <td>FILOSOFÍA DEL DERECHO</td>
                        <td>--</td>
                        <td>CU</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1006</td>
                        <td>SOCIOLOGÍA DEL DERECHO</td>
                        <td>--</td>
                        <td>CU</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1007</td>
                        <td>NOCIONES ELEMENTALES DE DERECHO PRIVADO</td>
                        <td>1000(C), 1002(C)</td>
                        <td>CU</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1008</td>
                        <td>DERECHO PENAL I</td>
                        <td>1000(C)</td>
                        <td>CU</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>1009</td>
                        <td>LÓGICA Y ARGUMENTACIÓN</td>
                        <td>--</td>
                        <td>CU</td>
                        <td>5</td>
                    </tr>
                </table>

                <h2 class="titulo-cuatrimestre">Segundo Año</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Régimen</th>
                        <th>Horas Semanales</th>
                    </tr>
                    <tr>
                        <td>1010</td>
                        <td>DERECHO COMERCIAL I</td>
                        <td>1007(A)</td>
                        <td>CU</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1011</td>
                        <td>DERECHO CONSTITUCIONAL</td>
                        <td>1000(A), 1001(C)</td>
                        <td>CU</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1012</td>
                        <td>DERECHO DE LAS OBLIGACIONES</td>
                        <td>1007(A)</td>
                        <td>AN</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>1013</td>
                        <td>DERECHO PENAL II</td>
                        <td>1008(A)</td>
                        <td>AN</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>1014</td>
                        <td>METODOLOGÍA DE LA INVESTIGACIÓN</td>
                        <td>1009(C)</td>
                        <td>CU</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1015</td>
                        <td>ÉTICA PROFESIONAL</td>
                        <td>1005(C)</td>
                        <td>CU</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1016</td>
                        <td>DERECHO INTERNACIONAL PÚBLICO</td>
                        <td>1003(C)</td>
                        <td>CU</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1017</td>
                        <td>CONTROL DE CONVENCIONALIDAD Y DERECHOS HUMANOS</td>
                        <td>1011(C)</td>
                        <td>CU</td>
                        <td>3</td>
                    </tr>
                </table>

                <h2 class="titulo-cuatrimestre">Tercer Año</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Régimen</th>
                        <th>Horas Semanales</th>
                    </tr>
                    <tr>
                        <td>1018</td>
                        <td>DERECHO LABORAL Y DE LA SEGURIDAD SOCIAL</td>
                        <td>1012(U)</td>
                        <td>CU</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1019</td>
                        <td>DERECHO COMERCIAL II</td>
                        <td>1010(C)</td>
                        <td>CU</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1020</td>
                        <td>CONTRATOS CIVILES Y COMERCIALES</td>
                        <td>1012(A)</td>
                        <td>AN</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>1021</td>
                        <td>DERECHO PROCESAL PENAL</td>
                        <td>1013(A)</td>
                        <td>CU</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1022</td>
                        <td>DERECHO FINANCIERO Y TRIBUTARIO</td>
                        <td>1011(C)</td>
                        <td>CU</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1023</td>
                        <td>DERECHO ADMINISTRATIVO</td>
                        <td>1011(C), 1020(U)</td>
                        <td>CU</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1024</td>
                        <td>DERECHO AMBIENTAL DE LOS RECURSOS NATURALES</td>
                        <td>1011(A), 1012(U)</td>
                        <td>CU</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1025</td>
                        <td>DERECHO PROCESAL CIVIL Y COMERCIAL</td>
                        <td>1019(C), 1020(U)</td>
                        <td>CU</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>1026</td>
                        <td>DERECHO DEL USUARIO Y DEL CONSUMIDOR</td>
                        <td>1012(U)</td>
                        <td>CU</td>
                        <td>3</td>
                    </tr>
                </table>

                <h2 class="titulo-cuatrimestre">Cuarto Año</h2>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Asignatura</th>
                        <th>Correlatividad</th>
                        <th>Régimen</th>
                        <th>Horas Semanales</th>
                    </tr>
                    <tr>
                        <td>1027</td>
                        <td>PRÁCTICA PROCESAL PÚBLICO Y PRIVADO</td>
                        <td>1021(C), 1025(C)</td>
                        <td>CU</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>1028</td>
                        <td>DERECHOS REALES</td>
                        <td>1020(C)</td>
                        <td>CU</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>1029</td>
                        <td>NEGOC.Y MEDIOS ALTERN.DE RESOLUCIÓN DE CONFLICTOS</td>
                        <td>1004(A), 1021(C), 1025(C)</td>
                        <td>CU</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1030</td>
                        <td>DERECHO PÚB.PARA EL DESARRO.DE LOS GOB.LOCALES</td>
                        <td>1011(A), 1022(C), 1023(C)</td>
                        <td>CU</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1031</td>
                        <td>PRÁCTICA PROFESIONAL SUPERVISADA I</td>
                        <td>1009(A), 1018(A), 1021(A), 1023(C)</td>
                        <td>CU</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1032</td>
                        <td>DERECHO INTERNACIONAL PRIVADO</td>
                        <td>1025(C)</td>
                        <td>CU</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1033</td>
                        <td>DERECHO DE FAMILIA Y DE LAS SUCESIONES</td>
                        <td>1028(C)</td>
                        <td>CU</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>1034</td>
                        <td>DERECHO DE TRANSPORTE</td>
                        <td>1020(A), 1028(C)</td>
                        <td>CU</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1035</td>
                        <td>PRÁCTICA PROFESIONAL SUPERVISADA II</td>
                        <td>1009(A), 1018(A), 1025(A), 1027(C)</td>
                        <td>CU</td>
                        <td>4</td>
                    </tr>
                </table>
            `;
            break;
            case 'perfilCienciaPolitica':
                planHTML = `
                    <h2 class="titulo-cuatrimestre">Primer Año - Primer Cuatrimestre</h2>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Asignatura</th>
                            <th>Correlatividad</th>
                            <th>Régimen</th>
                            <th>Horas Semanales</th>
                        </tr>
                        <tr>
                            <td>2351</td>
                            <td>Elementos de Filosofía</td>
                            <td>--</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2352</td>
                            <td>Procesos Sociohistóricos Mundiales</td>
                            <td>--</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2353</td>
                            <td>Elementos de Sociología</td>
                            <td>--</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2354</td>
                            <td>Introducción a la Ciencia Política</td>
                            <td>--</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                    </table>
    
                    <h2 class="titulo-cuatrimestre">Primer Año - Segundo Cuatrimestre</h2>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Asignatura</th>
                            <th>Correlatividad</th>
                            <th>Régimen</th>
                            <th>Horas Semanales</th>
                        </tr>
                        <tr>
                            <td>2355</td>
                            <td>Taller de Integración</td>
                            <td>2353-2354</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>2362</td>
                            <td>Teoría Política I</td>
                            <td>2354</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>2357</td>
                            <td>Elementos de Economía</td>
                            <td>--</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2358</td>
                            <td>Elementos de Administración</td>
                            <td>--</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                    </table>
    
                    <h2 class="titulo-cuatrimestre">Segundo Año - Primer Cuatrimestre</h2>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Asignatura</th>
                            <th>Correlatividad</th>
                            <th>Régimen</th>
                            <th>Horas Semanales</th>
                        </tr>
                        <tr>
                            <td>2359</td>
                            <td>Metodología de la Investigación I</td>
                            <td>2355</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2360</td>
                            <td>Teoría Sociológica</td>
                            <td>2353-2354</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2361</td>
                            <td>Economía I</td>
                            <td>2357</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2356</td>
                            <td>Procesos Sociohistóricos Argentinos</td>
                            <td>2352</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                    </table>
    
                    <h2 class="titulo-cuatrimestre">Segundo Año - Segundo Cuatrimestre</h2>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Asignatura</th>
                            <th>Correlatividad</th>
                            <th>Régimen</th>
                            <th>Horas Semanales</th>
                        </tr>
                        <tr>
                            <td>2379</td>
                            <td>Historia Política Americana</td>
                            <td>2362</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2364</td>
                            <td>Economía II</td>
                            <td>2361</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2365</td>
                            <td>Teoría Política II</td>
                            <td>2362 - 2360</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>2366</td>
                            <td>Administración Pública</td>
                            <td>2358</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                    </table>
    
                    <h2 class="titulo-cuatrimestre">Tercer Año - Primer Cuatrimestre</h2>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Asignatura</th>
                            <th>Correlatividad</th>
                            <th>Régimen</th>
                            <th>Horas Semanales</th>
                        </tr>
                        <tr>
                            <td>2367</td>
                            <td>Metodología de la Investigación II</td>
                            <td>2359</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2368</td>
                            <td>Derecho Constitucional</td>
                            <td>--</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2369</td>
                            <td>Demografía Social</td>
                            <td>2365</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2370</td>
                            <td>Política y Comunicación</td>
                            <td>2365</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                    </table>
    
                    <h2 class="titulo-cuatrimestre">Tercer Año - Segundo Cuatrimestre</h2>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Asignatura</th>
                            <th>Correlatividad</th>
                            <th>Régimen</th>
                            <th>Horas Semanales</th>
                        </tr>
                        <tr>
                            <td>2371</td>
                            <td>Economía Política Argentina</td>
                            <td>2369</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2372</td>
                            <td>Sistemas Políticos Comparados</td>
                            <td>2369</td>
                            <td>Cuatrimestral</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2373</td>
                            <td>Teoría Política Contemporánea</td>
                            <td>2367-2368-2370</td>
                            <td>Cuatrimestral</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>2374</td>
                            <td>Gestión de Políticas Públicas</td>
                            <td>2364-2365-2366</td>
                            <td>6</td>
                        </tr>
                        </table>`;

        break;
        
        default:
            planEstudio.innerHTML = `<p>Plan de estudio no disponible.</p>`;
    }
    }