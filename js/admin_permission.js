document.addEventListener('DOMContentLoaded', function() {
    // Sample data for demonstration
    const permissionsData = [
        { user: 'Juan Pérez', access: 'Dashboard', permissions: ['read', 'write'] },
        { user: 'Ana López', access: 'Respuestas', permissions: ['read'] },
        { user: 'Pedro González', access: 'Proyectos', permissions: ['read', 'write', 'delete'] }
    ];

    const permissionsTableBody = document.querySelector('#permissions-table tbody');
    permissionsData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.user}</td>
            <td>${entry.access}</td>
            <td>${entry.permissions.join(', ')}</td>
            <td>
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Eliminar</button>
            </td>
        `;
        permissionsTableBody.appendChild(row);
    });

    // Handle form submission
    document.getElementById('add-permission-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const access = document.getElementById('access').value;
        const permissions = Array.from(document.getElementById('permissions').selectedOptions).map(option => option.value);

        // Add new row to the table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${username}</td>
            <td>${access}</td>
            <td>${permissions.join(', ')}</td>
            <td>
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Eliminar</button>
            </td>
        `;
        permissionsTableBody.appendChild(newRow);

        // Clear the form
        document.getElementById('add-permission-form').reset();
    });

    // Handle row actions
    permissionsTableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            event.target.closest('tr').remove();
        }
        // Add logic for edit button if needed
    });
});
