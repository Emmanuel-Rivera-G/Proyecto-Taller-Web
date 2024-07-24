<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
include('./conex.php');
include('./controDB.php');

$formId = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formId = isset($_POST['formId']) ? $_POST['formId'] : 'creacion-usuario';
    header('Content-Type: application/json');

    iniciarConexion();

    switch ($formId) {
        case 'busqueda-empleado':
            manejarFormulario1();
            break;
        case 'creacion-usuario':
            manejarFormulario2();
            break;
        case 'busqueda-empleado-modal':
            manejarFormulario3();
            break;
        case 'busqueda-planilla-principal-formulario':
            manejarFormulario4();
            break;
        case 'busqueda-planilla-formulario-con-registro':
            manejarFormulario5();
            break;
        case 'datos-contratados-registro-planilla-formulario-principal':
            manejarFormulario6();
            break;
        default:
            echo json_encode(['mensaje' => 'No se ha procesado el formulario']);
    }
}

function manejarFormulario1() {
    global $formId;
    
    $text = $_POST['barra-busqueda'];

    $consulta = construirConsulta('Empleado','*');
    $respuesta = enviarDatos(json_encode($consulta));
    $datos = json_decode($respuesta, true);
    $datos = [
        'mensaje' => 'Formulario 1 procesado',
        'formId' => $formId,
        'datos' => [
            'nombre' => 'formulario1',
            'campos' => [
                'nombre',
                'apellido'
            ],
        ]
    ];

    cerrarConexion();
    echo json_encode($datos);
}

function manejarFormulario2() {
    global $formId;
    
    $respuesta = ['mensaje' => 'Formulario 2 procesado', 'formId' => $formId];
    enviarDatos(json_encode($respuesta));
}

function manejarFormulario3() {
    global $formId;
    
    $respuesta = ['mensaje' => 'Formulario 3 procesado', 'formId' => $formId];
    enviarDatos(json_encode($respuesta));
}

function manejarFormulario4() {
    global $formId;
    
    $respuesta = ['mensaje' => 'Formulario 4 procesado', 'formId' => $formId];
    echo json_encode($respuesta);
}

function manejarFormulario5() {
    global $formId;
    
    $respuesta = ['mensaje' => 'Formulario 5 procesado', 'formId' => $formId];
    echo json_encode($respuesta);
}

function manejarFormulario6() {
    global $formId;
    
    $respuesta = ['mensaje' => 'Formulario 6 procesado', 'formId' => $formId];
    echo json_encode($respuesta);
}
?>
