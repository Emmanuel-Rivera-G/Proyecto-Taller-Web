import { EMPLEADOS, CONTRATOS, CARGOS, DEPARTAMENTOS, PAGOS, DETALLEPAGOS, clearUser, clearEmployeesArray, clearContractsArray, clearCargosArray, clearDepartmentsArray, clearPagosArray, clearDetallePagosArray } from './USERDATA.js';

const obtenerDatosUsuarios = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let data = await response.text();
        
        return JSON.parse(data);
    } catch (e) {
        console.error(e);

        return null;
    }
}

export const inicializarDatos = async () => {
    let datos = await obtenerDatosUsuarios('http://localhost:8765/src/db/control/cargarDatosDB.php');
    if (datos) {
        EMPLEADOS.push(...datos.empleados);
        CONTRATOS.push(...datos.contratos);
        CARGOS.push(...datos.cargos);
        DEPARTAMENTOS.push(...datos.departamentos);
        PAGOS.push(...datos.pagos);
        DETALLEPAGOS.push(...datos.detallePagos);
    }
}

export const limpiarDados = async () => {
    clearUser();
    clearEmployeesArray();
    clearContractsArray();
    clearCargosArray();
    clearDepartmentsArray();
    clearPagosArray();
    clearDetallePagosArray();
}

if (EMPLEADOS.length == 0) {
    await inicializarDatos();
}