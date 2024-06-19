<?php
$formId = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formId = isset($_POST['formId']) ? $_POST['formId'] : '';

    switch ($formId) {
        case '1':
            manejarFormulario1();
            break;
        case '2':
            manejarFormulario2();
            break;
        default:
            echo json_encode(['mensaje' => 'No se ha procesado el formulario']);
    }
}

function manejarFormulario1() {
    global $formId;
    
    $respuesta = ['mensaje' => 'Formulario 1 procesado', 'formId' => $formId];
    echo json_encode($respuesta);
}

function manejarFormulario2() {
    global $formId;
    
    $respuesta = ['mensaje' => 'Formulario 2 procesado', 'formId' => $formId];
    echo json_encode($respuesta);
}
?>
