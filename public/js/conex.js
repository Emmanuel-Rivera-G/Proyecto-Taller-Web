import { USER } from './USERDATA.js';

const PUERTO_SERVIDOR = '8000';
const RUTA_SERVIDOR = '/src/db/control/validacion.php';

// URL del servidor backend php
const URL_SERVIDOR = `https://server-php-taller-programacion-web.zeabur.app${RUTA_SERVIDOR}`;

document.getElementById('formularioAutenticacion').addEventListener('submit', function(event) {

    event.preventDefault(); // Evitar que se envíe la petición por defecto

    let formData = new FormData(this);

    if (formData.get('Usuario') == "usuario" && formData.get('Contraseña') == "contraseña") {
        autenticado(formData.get('Usuario'), formData.get('Contraseña'));
    } else {
        fetch(URL_SERVIDOR, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un problema con la solicitud.');
            }
            return response.json();
        })
        .then(data => {
            if (data.autenticado) {
                autenticado(formData.get('Usuario'), formData.get('Contraseña'));
            } else {
                throw new Error();
            }
        })
        .catch(error => {
            let form = document.querySelector('.contenedor__signin-form')
            let span = document.createElement('span')
            span.style.fontSize = ".8rem"
            span.style.color = "red"
            if (error) {
                span.innerText = new Error("El usuario o la contraseña son incorrectos").message
            }
            if (form.lastChild.innerText != span.innerText) {
                form.appendChild(span)
            }
        });
    }
});

function autenticado(usuario, contraseña) {
    USER.push({ 
        usuario:usuario,
        constraseña:contraseña
    });
    window.location.href = "../principal/principal.html";
}
