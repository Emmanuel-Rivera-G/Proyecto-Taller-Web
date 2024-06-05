const employees = [
    { number: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', phone: '+1234567890', status: 'Activo' },
    { number: 2, name: 'María García', email: 'maria.garcia@example.com', phone: '+0987654321', status: 'Inactivo' }
];

const tableBody = document.getElementById('tabla-trabajadores-body');
employees.forEach(employee => {
    const row = document.createElement('tr');

    Object.values(employee).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
    });

    tableBody.appendChild(row);
});