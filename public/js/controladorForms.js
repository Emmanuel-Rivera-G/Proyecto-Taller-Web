const $ = (el) => document.querySelectorAll(el);
const FORMSIDS = {
    formulario1: {id:'#busqueda-empleado'},
    formulario2: {id:'#creacion-usuario'},
    formulario3: {id:'#busqueda-empleado-modal'},
    formulario4: {id:'#busqueda-planilla-principal-formulario'},
    formulario5: {id:'#busqueda-planilla-formulario-con-registro'},
    formulario6: {id:'#datos-contratados-registro-planilla-formulario-principal'},
}
const formulario1 = document.getElementById("busqueda-empleado");
const formulario2 = $(FORMSIDS.formulario2.id);
const formulario3 = $(FORMSIDS.formulario3.id);
const formulario4 = $(FORMSIDS.formulario4.id);
const formulario5 = $(FORMSIDS.formulario5.id);
const formulario6 = $(FORMSIDS.formulario6.id);

formulario1.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    //TODO: Agregar un elemento tipo form al formulario para que se puedan enviar los datos
    formData.append('formId', 'busqueda-empleado'); 
   

    let datos = fetch("http://localhost:8765/src/db/control/formRequest.php", {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => {
                throw new Error(`Hubo un problema con la solicitud: ${response.status} - ${response.statusText}. Respuesta del servidor: ${text}`);
            });
        }
        console.log(response);
        return response.text();
    })
    .then(text => {
        if (text) {
            try {
                const data = JSON.parse(text); // Intentar parsear el texto como JSON
                console.log('Respuesta del servidor:', data);
                // Manejar la respuesta JSON como sea necesario
            } catch (error) {
                console.error('Error al analizar JSON:', error, 'Texto de respuesta:', text);
            }
        } else {
            console.log('Respuesta vacía del servidor');
        }
    }).catch(error => {
        console.log(error);
    });

    console.log(datos);
    let nombre = formData.get('barra-busqueda') ?? '';
    employees.forEach(employee => {
        if (
            employee.name.toLowerCase().includes(nombre.toLowerCase())
            && tableBody?.children[0]?.children[0] != `<td>${employee.number}</td>`
        ) {
            console.log(tableBody?.children[0]?.children[0])
            llenarTablaTrabajadores(tableBody, [employee]);
        } else {
            return
        }
    });
});