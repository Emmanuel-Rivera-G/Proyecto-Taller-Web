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
        data = data.replace(`<br />
<b>Warning</b>:  Undefined array key "response" in <b>/var/www/public/src/db/control/tablaFunciones.php</b> on line <b>142</b><br />
<br />
<b>Warning</b>:  Trying to access array offset on null in <b>/var/www/public/src/db/control/tablaFunciones.php</b> on line <b>142</b><br />
<br />
<b>Warning</b>:  Trying to access array offset on null in <b>/var/www/public/src/db/control/tablaFunciones.php</b> on line <b>142</b><br />
<br />
<b>Warning</b>:  foreach() argument must be of type array|object, null given in <b>/var/www/public/src/db/control/tablaFunciones.php</b> on line <b>142</b><br />`, "");
        return JSON.parse(data);
    } catch (e) {
        console.error(e);

        return null;
    }
}

export const inicializarDatos = async () => {
    let datos = await obtenerDatosUsuarios('https://server-php-taller-programacion-web.zeabur.app/src/db/control/cargarDatosDB.php');
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