document.addEventListener('DOMContentLoaded', function() {
    // Sample data for demonstration
    const projectData = [
        { name: 'Sistema de Gestión de Tareas', count: 10 },
        { name: 'Plataforma de E-Learning', count: 15 },
        { name: 'Aplicación de Recordatorio de Medicamentos', count: 8 },
        { name: 'Sistema de Reservas para Restaurantes', count: 5 },
        { name: 'Base de Datos de Árboles Urbanos', count: 12 }
    ];
    
    const areaData = [
        { area: 'Productividad', count: 20 },
        { area: 'Educación', count: 25 },
        { area: 'Salud', count: 10 },
        { area: 'Gastronomía', count: 7 },
        { area: 'Medio Ambiente', count: 15 }
    ];

    const userResponses = [
        { user: 'Juan Pérez', project: 'Sistema de Gestión de Tareas', justification: 'Para mejorar la organización de tareas en equipo.' },
        { user: 'Ana López', project: 'Plataforma de E-Learning', justification: 'Para ofrecer recursos educativos en línea.' },
        { user: 'Pedro González', project: 'Aplicación de Recordatorio de Medicamentos', justification: 'Para no olvidar tomar mis medicamentos.' }
    ];

    // Fill summary cards
    document.getElementById('total-projects').textContent = projectData.length;
    document.getElementById('total-responses').textContent = userResponses.length;

    // Project Chart
    const projectChartCtx = document.getElementById('project-chart').getContext('2d');
    new Chart(projectChartCtx, {
        type: 'bar',
        data: {
            labels: projectData.map(data => data.name),
            datasets: [{
                label: 'Número de Selecciones',
                data: projectData.map(data => data.count),
                backgroundColor: '#6B3D52',
                borderColor: '#5a2b3a',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true }
            }
        }
    });

    // Area Chart
    const areaChartCtx = document.getElementById('area-chart').getContext('2d');
    new Chart(areaChartCtx, {
        type: 'pie',
        data: {
            labels: areaData.map(data => data.area),
            datasets: [{
                label: 'Número de Selecciones',
                data: areaData.map(data => data.count),
                backgroundColor: ['#6B3D52', '#C44E6D', '#F5A623', '#50C8FF', '#2D9CDB']
            }]
        },
        options: {
            responsive: true
        }
    });

    // Populate User Responses Table
    const responsesTableBody = document.querySelector('#responses-table tbody');
    userResponses.forEach(response => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${response.user}</td>
            <td>${response.project}</td>
            <td>${response.justification}</td>
        `;
        responsesTableBody.appendChild(row);
    });
});
