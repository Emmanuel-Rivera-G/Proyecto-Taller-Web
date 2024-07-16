const employees = [
    { number: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', usuario: 'juanperez',rol: 'admin', fechaFin: '2024-12-31', status: 'Activo' },
    { number: 2, name: 'Maria García', email: 'maria.garcia@example.com', usuario: 'mariagarcia', rol: 'gerencia', fechaFin: '2024-09-27', status: 'Activo' },
];

const tableBody = document.getElementById('tabla-trabajadores-body');

function llenarTablaTrabajadores(tabla = tableBody, data) {
    data.forEach(element => {
        const row = document.createElement('tr');
        Object.values(element).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        tabla.appendChild(row);
    });
}

const creadorUsuario = document.querySelector('.creador-usuario');
const busquedaEmpleado = document.querySelector('.busqueda-empleado');
const titulosTrabajador = document.querySelector('.titulos-trabajador');
const botonCrearUsuario = document.querySelector('.btn-crear-usuario');
const botonRegresar = document.querySelector('#btn-regresar');
botonCrearUsuario.addEventListener('click', () => {
    creadorUsuario.removeAttribute('hidden');
    busquedaEmpleado.setAttribute('hidden', '');
    titulosTrabajador.setAttribute('hidden', '');
});

botonRegresar.addEventListener('click', () => {
    creadorUsuario.setAttribute('hidden', '');
    busquedaEmpleado.removeAttribute('hidden');
    titulosTrabajador.removeAttribute('hidden');
});

//Formularios
const $ = (selector) => document.querySelector(selector);
const busquedaEmpleadoForm = $('#busqueda-empleado');

busquedaEmpleadoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(busquedaEmpleadoForm);

    let nombre = formData.get('barra-busqueda') ?? '';
    employees.forEach(employee => {
        if (
            employee.name.toLowerCase().includes(nombre.toLowerCase())
            && tableBody?.children[0]?.children[0] != `<td>${employee.number}</td>`
        ) {
            console.log(tableBody?.children[0]?.children[0])
            llenarTablaTrabajadores(tableBody, [employee]);
        } else {
            return
        }
    });
});
