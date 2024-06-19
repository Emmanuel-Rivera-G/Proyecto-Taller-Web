import { USER } from './USERDATA.js';

const usuarios = document.querySelector('#usuarios');
const planillas = document.querySelector('#planillas');
const contratos = document.querySelector('#contratos');

const nombreUsuario = document.querySelector('#nombreUsuario');

nombreUsuario.innerHTML = USER[USER.length - 1].usuario;


console.log(USER);
document.querySelector('#btn-cerrar-sesion').addEventListener('click', function () {
    window.location.href = "../../../index.html";
});

document.querySelector('#btn-menu').addEventListener('click', function () {
    const menu = document.querySelector('menu');
    if (menu.hasAttribute('hidden')) {
        menu.style.display = 'grid';
        menu.removeAttribute('hidden');
    } else {
        menu.style.display = 'none';
        menu.setAttribute('hidden', '');
    }
});
function comprobarSection(uno, dos, tres) {
    if (uno.hasAttribute('hidden')) {
        uno.removeAttribute('hidden');
        dos.setAttribute('hidden', '');
        tres.setAttribute('hidden', '');
    } else {
        if (!dos.hasAttribute('hidden') && !tres.hasAttribute('hidden')) {
            uno.setAttribute('hidden', '');
        }
    }
}
document.querySelector('.btn-usuario').addEventListener('click', function () {
    comprobarSection(usuarios, planillas, contratos);
});
document.querySelector('.btn-planilla').addEventListener('click', function () {
    comprobarSection(planillas, usuarios, contratos);
});
document.querySelector('.btn-contrato').addEventListener('click', function () {
    comprobarSection(contratos, usuarios, planillas);
});

document.querySelector('.abrir-ventana').addEventListener('click', function () {
    cerrarModal();
});


const formulario1 = document.querySelector('#busqueda-empleado');
const formulario2 = document.querySelector('#creacion-usuario');
const formulario3 = document.querySelector('#busqueda-empleado-modal');
const formulario4 = document.querySelector('#busqueda-planilla-principal-formulario');
const formulario5 = document.querySelector('#busqueda-planilla-formulario-con-registro');
const formulario6 = document.querySelector('#datos-contratados-registro-planilla-formulario-principal');