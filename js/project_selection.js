const projects = [
    "Sistema de Gestión de Tareas",
    "Plataforma de E-Learning",
    "Aplicación de Recordatorio de Medicamentos",
    "Sistema de Reservas para Restaurantes",
    "Base de Datos de Árboles Urbanos",
    "Sistema de Gestión de Inventarios",
    "Aplicación de Seguimiento de Hábitos",
    "Sistema de Registro de Mascotas Perdidas",
    "Base de Datos de Profesionales",
    "Plataforma de Encuestas y Análisis de Datos",
    "Aplicación de Gestión de Eventos",
    "Sistema de Registro de Donaciones",
    "Aplicación para Control de Gastos Personales",
    "Sistema de Gestión de Reservas de Hotel",
    "Aplicación de Menú Digital para Restaurantes",
    "Sistema de Gestión de Proyectos",
    "Plataforma de Networking Profesional",
    "Aplicación de Gestión de Recetas de Cocina",
    "Sistema de Gestión de Turnos en Clínicas",
    "Base de Datos de Obras Artísticas",
    "Sistema de Reservas de Canchas Deportivas",
    "Aplicación de Control de Salud Personal",
    "Sistema de Gestión de Almacenes",
    "Aplicación de Compras en Línea",
    "Sistema de Gestión de Bibliotecas",
    "Plataforma de Gestión de Cursos Online",
    "Aplicación de Guía Turística Interactiva",
    "Sistema de Gestión de Inventario de Libros",
    "Plataforma de Intercambio de Libros Usados",
    "Sistema de Registro de Visitas a Museos",
    "Aplicación de Gestión de Horarios de Clases",
    "Plataforma de Subastas en Línea",
    "Sistema de Control de Asistencia",
    "Aplicación de Gestión de Entrenamientos Deportivos",
    "Sistema de Gestión de Pedidos para Delivery",
    "Plataforma de Gestión de Proyectos Colaborativos",
    "Aplicación de Control de Gastos en Grupo",
    "Sistema de Gestión de Eventos Deportivos",
    "Aplicación de Gestión de Rutinas de Estudio",
    "Plataforma de Gestión de Reciclaje",
    "Sistema de Registro de Actividades Académicas",
    "Aplicación de Gestión de Tareas del Hogar",
    "Sistema de Gestión de Actividades Deportivas",
    "Aplicación de Gestión de Viajes",
    "Plataforma de Crowdfunding",
    "Sistema de Gestión de Servicios de Limpieza",
    "Aplicación de Control de Asignaciones Escolares",
    "Plataforma de Gestión de Programas de Voluntariado",
    "Sistema de Gestión de Espacios Culturales",
    "Aplicación de Seguimiento de Metas Personales",
    "Plataforma de Gestión de Inventarios",
    "Aplicación de Control de Hábitos",
    "Sistema de Gestión de Consultas Médicas",
    "Plataforma de Gestión de Bibliotecas",
    "Aplicación de Control de Calidad de Productos",
    "Sistema de Gestión de Transporte Público",
    "Plataforma de Gestión de Reservas de Eventos",
    "Aplicación de Gestión de Colecciones Personales",
    "Sistema de Gestión de Contratos",
    "Plataforma de Aprendizaje Colaborativo",
    "Aplicación de Gestión de Proyectos Personales",
    "Sistema de Gestión de Programas de Becas",
    "Plataforma de Gestión de Eventos de Networking",
    "Aplicación de Seguimiento de Lectura",
    "Sistema de Gestión de Reservas de Espacios Deportivos",
    "Plataforma de Gestión de Inscripciones en Talleres",
    "Aplicación de Gestión de Relaciones Comerciales",
    "Sistema de Gestión de Espacios de Coworking",
    "Plataforma de Gestión de Actividades de Voluntariado",
    "Aplicación de Gestión de Viajes de Negocios",
    "Sistema de Gestión de Donaciones",
    "Plataforma de Gestión de Almacenes",
    "Aplicación de Seguimiento de Metas de Fitness",
    "Sistema de Gestión de Reservas en Restaurantes",
    "Plataforma de Gestión de Entrenamientos en Línea",
    "Plataforma de Gestión de Encuestas y Satisfacción",
    "Aplicación de Gestión de Proyectos de Voluntariado",
    "Sistema de Gestión de Servicios de Reparación",
    "Plataforma de Gestión de Alianzas Estratégicas",
    "Aplicación de Seguimiento de Proyectos de Investigación",
    "Sistema de Gestión de Servicios de Cuidado Infantil",
    "Plataforma de Gestión de Eventos Deportivos",
    "Aplicación de Gestión de Gastos Personales",
    "Sistema de Gestión de Espacios de Estacionamiento",
    "Plataforma de Gestión de Programas de Fidelización",
    "Aplicación de Gestión de Menús para Restaurantes",
    "Sistema de Gestión de Inventarios para Comercio Electrónico",
    "Plataforma de Gestión de Consultorías Empresariales",
    "Aplicación de Gestión de Tareas Colaborativas",
    "Sistema de Gestión de Propiedades Inmobiliarias",
    "Plataforma de Gestión de Cursos en Línea",
    "Aplicación de Seguimiento de Actividades de Fitness",
    "Sistema de Gestión de Reclamos y Garantías",
    "Plataforma de Gestión de Servicios de Consultoría en TI",
    "Aplicación de Gestión de Rutinas de Estudio",
    "Sistema de Gestión de Proyectos de Investigación y Desarrollo",
    "Plataforma de Gestión de Reservas para Centros Deportivos",
    "Aplicación de Gestión de Compromisos Sociales",
    "Sistema de Gestión de Programas de Mentoría",
    "Plataforma de Gestión de Reservas en Centros Culturales"
];

let selectedProjects = [];
let selectedJustifications = {};

const projectsList = document.getElementById('projects-list');
const submitProjectsButton = document.getElementById('submit-projects');
const justificationModal = document.getElementById('justification-modal');
const justificationText = document.getElementById('justification-text');
const submitJustificationButton = document.getElementById('submit-justification');
let currentProjectIndex = null;

function renderProjects() {
    projectsList.innerHTML = projects.map((project, index) => `
        <div class="project-item" data-index="${index}">
            ${project}
        </div>
    `).join('');

    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', () => {
            const projectIndex = parseInt(item.dataset.index);

            if (!selectedProjects.includes(projectIndex) && selectedProjects.length < 3) {
                currentProjectIndex = projectIndex;
                justificationModal.classList.remove('hidden');
            } else if (selectedProjects.includes(projectIndex)) {
                alert('You have already selected this project.');
            } else {
                alert('You can only select 3 projects.');
            }
        });
    });
}

submitJustificationButton.addEventListener('click', () => {
    const justification = justificationText.value.trim();
    if (justification) {
        selectedProjects.push(currentProjectIndex);
        selectedJustifications[currentProjectIndex] = justification;

        document.querySelector(`.project-item[data-index="${currentProjectIndex}"]`).classList.add('selected');
        justificationText.value = '';
        justificationModal.classList.add('hidden');

        submitProjectsButton.disabled = selectedProjects.length !== 3;
    } else {
        alert('Please provide a justification.');
    }
});

submitProjectsButton.addEventListener('click', () => {
    localStorage.setItem('selectedProjects', JSON.stringify(selectedProjects));
    localStorage.setItem('selectedJustifications', JSON.stringify(selectedJustifications));
    window.location.href = 'dashboard.html';
});

renderProjects();