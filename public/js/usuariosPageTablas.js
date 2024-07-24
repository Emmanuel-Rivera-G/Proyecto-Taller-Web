import { EMPLEADOS, CONTRATOS, CARGOS, DEPARTAMENTOS } from './USERDATA.js';

const $ = (el) => document.querySelector('#' + el);
const $tablaInicioTrabajadoresBody = $('tabla-trabajadores-body');
const $tablaContratosBody = $('tabla-contratos-body');

function crearFila(data) {
    const row = document.createElement('tr');
    Object.values(data).forEach((value) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
    });
    return row;
}

function llenarTabla(tabla, dataBase) {
    dataBase.forEach((obj) => {
        const fila = crearFila(obj);
        tabla.appendChild(fila);
    });
}

function parsearEmpleadosTabla1() {
    const empleados = [];
    EMPLEADOS.forEach((el) => {
        const empleado = {
            num: el.cod_empleado,
            nombre: el.nombre + " " + el.apalleidoPater + " " + el.apalleidoMater,
            email: el.email,
            usuario: el.usuario,
            cargo: el.Cargo,
            dni: el.DNI
        };
        empleados.push(empleado);
    }); 
    return empleados;
}

function parsearContratos() {
    const contratos = [];
    EMPLEADOS.forEach((emp) => {
        CONTRATOS.filter(con => con.cod_empleado == emp.cod_empleado)
        .forEach((el) => {
        const contrato = {
            trabajador: emp.nombre + emp.apellidoPater,
            fechaInicio: el.fecha_inicio,
            fechaFin: el.fecha_fin,
            cargo: emp.cargo,
            salario: el.salario
        };
        contratos.push(contrato);
        });
    });
    return contratos;
}

export default function llenarTablasUsuarios() {
    llenarTabla($tablaInicioTrabajadoresBody, parsearEmpleadosTabla1());
    llenarTabla($tablaContratosBody, parsearContratos());
}