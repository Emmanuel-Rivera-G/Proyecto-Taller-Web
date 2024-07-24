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
            nombre: el.nombre + (el.apellidoPater == 'undefined' ? '' : ' ' + el.apellidoPater) + (el.apellidoMater == 'undefined' ? '' : ' ' + el.apellidoMater),
            email: el.email,
            usuario: el.usuario,
            cargo: CARGOS.filter(cargo => cargo.cod_cargo == CONTRATOS.filter(contrato => contrato.cod_contrato == el.cod_contrato)[0].cod_cargo)[0].nom_puesto,
            dni: el.DNI,
            estado: el.Estado
        };
        empleados.push(empleado);
    }); 
    return empleados;
}

function parsearContratos() {
    const contratos = [];
    EMPLEADOS.forEach((emp) => {
        CONTRATOS.filter(con => con.cod_contrato == emp.cod_contrato)
        .forEach((el) => {
        const contrato = {
            trabajador: emp.nombre + emp.apellidoPater,
            fechaInicio: el.fecha_inicio,
            fechaFin: el.fecha_fin,
            cargo: CARGOS.filter(cargo => cargo.cod_cargo == emp.cod_cargo)[0].nom_puesto,
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