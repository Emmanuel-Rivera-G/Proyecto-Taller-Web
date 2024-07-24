import { EMPLEADOS, CONTRATOS, CARGOS, DEPARTAMENTOS } from './USERDATA.js';

const $ = (el) => document.querySelector('#' + el);
const $tablaInicioTrabajadoresBody = $('tabla-trabajadores-body');
const $tablaContratosBody = $('tabla-contratos-body');

function crearFila(data) {
    const row = document.createElement('tr');
    Object.values(data).forEach((value) => {
        const cell = document.createElement('td');
        if(String(value).includes('button')) {
            cell.innerHTML = value;
        } else {
            cell.textContent = value;
        }
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

export function parsearEmpleadosTabla1(data) {
    const empleados = [];
    data.forEach((el) => {

        const empleado = {
            num: el.cod_empleado,
            nombre: el.nombre + (el.apellidoPater == 'undefined' ? '' : ' ' + el.apellidoPater) + (el.apellidoMater == 'undefined' ? '' : ' ' + el.apellidoMater),
            email: el.email,
            usuario: el.usuario,
            cargo: CARGOS.filter((cargo) => {
                return (cargo.cod_cargo ==
                (CONTRATOS.filter((contrato) => {
                    return contrato.cod_contrato == el.cod_contrato
                })
                .map((inter) => {
                    return inter.cod_cargo
                })))
            })[0].nom_puesto,
            dni: el.DNI,
            estado: (el.estado == 1 ? 'Activo' : 'Inactivo')
        };
        empleados.push(empleado);
    }); 
    return empleados;
}

function parsearEmpleadosTabla1Default() {
    return parsearEmpleadosTabla1(EMPLEADOS);
}

export function limpiarDatosEmpleadosTabla1() {
    $tablaInicioTrabajadoresBody.innerHTML = '';
}

function parsearContratos() {
    const contratos = [];
    EMPLEADOS.forEach((emp) => {
        CONTRATOS.filter(con => con.cod_contrato == emp.cod_contrato)
        .forEach((el) => {
        const contrato = {
            trabajador: emp.nombre + " " + emp.apellidoPater,
            fechaInicio: el.fecha_inicio,
            fechaFin: el.fecha_fin,
            cargo: CARGOS.filter(cargo => cargo.cod_cargo == CONTRATOS.filter(contrato => contrato.cod_contrato == emp.cod_contrato)[0].cod_cargo)[0].nom_puesto,
            salario: '$' + el.salario,
            boton: "<button class='boton-editar' data-id='" + el.cod_contrato + "'>Imprimir</button>"
        };
        contratos.push(contrato);
        });
    });
    return contratos;
}

export function llenarTabla1(el) {
    const data = parsearEmpleadosTabla1(el);
    llenarTabla($tablaInicioTrabajadoresBody, data);
}

export default async function llenarTablasUsuarios() {
    limpiarDatosEmpleadosTabla1();
    llenarTabla($tablaInicioTrabajadoresBody, parsearEmpleadosTabla1Default());
    llenarTabla($tablaContratosBody, parsearContratos());
}