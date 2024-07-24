import { EMPLEADOS } from "./USERDATA.js";
import { llenarTabla1, limpiarDatosEmpleadosTabla1 } from "./usuariosPageTablas.js";

const $ = (el) => document.querySelector('#' + el);
const FORMSIDS = {
    formulario1: {id:'busqueda-empleado'},
    formulario2: {id:'creacion-usuario'},
    formulario3: {id:'busqueda-empleado-modal'},
    formulario4: {id:'busqueda-planilla-principal-formulario'},
    formulario5: {id:'busqueda-planilla-formulario-con-registro'},
    formulario6: {id:'datos-contratados-registro-planilla-formulario-principal'},
}
const formulario1 = $(FORMSIDS.formulario1.id);
const formulario2 = $(FORMSIDS.formulario2.id);
const formulario3 = $(FORMSIDS.formulario3.id);
const formulario4 = $(FORMSIDS.formulario4.id);
const formulario5 = $(FORMSIDS.formulario5.id);
const formulario6 = $(FORMSIDS.formulario6.id);

const URL_Base = "http://localhost:8765"
const UBICACION = "/src/db/control/formRequest.php"
const URL = `${URL_Base}${UBICACION}`
formulario1.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    //TODO: Agregar un elemento tipo form al formulario para que se puedan enviar los datos
    formData.append('formId', FORMSIDS.formulario1.id); 

    let formularioName = formData.get('barra-busqueda');

    let newData = [];
   
    EMPLEADOS.forEach(e => {
        let empleadoNombreCompleto = e.nombre + ' ' + e.apellidoPater + ' ' + e.apellidoMater;
        console.log(empleadoNombreCompleto)
        if (empleadoNombreCompleto.toLowerCase().includes(formularioName.toLowerCase())) {
            newData.push(e);
        }
    });

    limpiarDatosEmpleadosTabla1();

    llenarTabla1(newData);

});