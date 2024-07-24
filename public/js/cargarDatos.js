import { EMPLEADOS, CONTRATOS, CARGOS, DEPARTAMENTOS } from './USERDATA.js';

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

const inicializarDatos = async () => {
    let datos = await obtenerDatosUsuarios('http://localhost:8765/src/db/control/cargarDatosDB.php');
    if (datos) {
        EMPLEADOS.push(...datos.empleados);
        CONTRATOS.push(...datos.contratos);
        CARGOS.push(...datos.cargos);
        DEPARTAMENTOS.push(...datos.departamentos);
    }
}

inicializarDatos();