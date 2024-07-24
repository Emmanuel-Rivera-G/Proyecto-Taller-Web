import { USER, clearUser, clearEmployeesArray, clearContractsArray, clearCargosArray, clearDepartmentsArray } from './USERDATA.js';

const usuarios = document.querySelector('#usuarios');
const planillas = document.querySelector('#planillas');
const contratos = document.querySelector('#contratos');

const nombreUsuario = document.querySelector('#nombreUsuario');

nombreUsuario.innerHTML = USER[USER.length - 1].usuario;


document.querySelector('#btn-cerrar-sesion').addEventListener('click', function () {
    clearUser();
    clearEmployeesArray();
    clearContractsArray();
    clearCargosArray();
    clearDepartmentsArray();
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