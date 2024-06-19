const modalRegistrarPlanilla = document.querySelector('#dialog-planilla')

function cerrarModalPlanilla() {
    modalRegistrarPlanilla.close()
}

function cerrarModal() {
    let modal = document.querySelector(".modal")
    if (document.querySelector('.modal').hasAttribute('open')) {
        modal.close();
    } else {
        modal.showModal();
    }
}