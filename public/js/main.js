const usuarios = document.querySelector('#usuarios');
const planillas = document.querySelector('#planillas');
const contratos = document.querySelector('#contratos');

document.querySelector('#btn-menu').addEventListener('click', function () {
    const menu = document.querySelector('menu');
    if (menu.hasAttribute('hidden')) {
        menu.removeAttribute('hidden');
    } else {
        menu.setAttribute('hidden', '');
    }
});

document.querySelector('.btn-usuario').addEventListener('click', function () {
    if (usuarios.hasAttribute('hidden')) {
        usuarios.removeAttribute('hidden');
        planillas.setAttribute('hidden', '');
        contratos.setAttribute('hidden', '');
    } else {
        if (!planillas.hasAttribute('hidden') && !contratos.hasAttribute('hidden')) {
            usuarios.setAttribute('hidden', '');
        }
    }
});
document.querySelector('.btn-planilla').addEventListener('click', function () {
    if (planillas.hasAttribute('hidden')) {
        planillas.removeAttribute('hidden');
        usuarios.setAttribute('hidden', '');
        contratos.setAttribute('hidden', '');
    } else {
        if (!usuarios.hasAttribute('hidden') && !contratos.hasAttribute('hidden')) {
            planillas.setAttribute('hidden', '');
        }
    }
});
document.querySelector('.btn-contrato').addEventListener('click', function () {
    if (contratos.hasAttribute('hidden')) {
        contratos.removeAttribute('hidden');
        usuarios.setAttribute('hidden', '');
        planillas.setAttribute('hidden', '');
    } else {
        if (!planillas.hasAttribute('hidden') && !usuarios.hasAttribute('hidden')) {
            contratos.setAttribute('hidden', '');
        }
    }
});