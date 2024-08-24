document.addEventListener('DOMContentLoaded', function() {
    // Sample data for demonstration
    const userResponses = [
        { user: 'Juan Pérez', project: 'Sistema de Gestión de Tareas', justification: 'Para mejorar la organización de tareas en equipo.' },
        { user: 'Ana López', project: 'Plataforma de E-Learning', justification: 'Para ofrecer recursos educativos en línea.' },
        { user: 'Pedro González', project: 'Aplicación de Recordatorio de Medicamentos', justification: 'Para no olvidar tomar mis medicamentos.' }
    ];

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
