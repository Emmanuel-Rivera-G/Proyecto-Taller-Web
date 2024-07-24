<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
include('./conex.php');
include('./controDB.php');
include('./clases.php');
header('Content-Type: application/json');

$formId = $_POST['formId'];

iniciarConexion();

switch ($formId) {
    case 'busqueda-empleado':
        manejarFormulario1();
        break;
    case 'creacion-usuario':
        manejarFormulario2($_POST);
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

function manejarFormulario2($datosDelPost) {
    global $formId;

    $empleado = new Empleado(
        rand(1, 50),
        $_POST['nombre-completo'],
        'indefinido',
        'indefinido',
        '0',
        ($_POST['rol-empleado'] ? $_POST['rol-empleado'] : '0'),
        '0',
        'u',
        '1',
        ($_POST['usuario'] ? $_POST['usuario'] : '0'),
        $_POST['contraseña'],
        '1'
    );

    $consulta = construirConsultaInsert('Empleado','nombre, apellidoPater, apellidoMater, DNI, email, telefono, genero, estado, usuario, contraseña, cod_contrato',[],[
        [
            'type' => 'text',
            'value' => $empleado->nombre	
        ],
        [
            'type' => 'text',
            'value' => $empleado->apellidoPater
        ],
        [
            'type' => 'text',
            'value' => $empleado->apellidoMater
        ],
        [
            'type' => 'text',
            'value' => $empleado->DNI
        ],
        [
            'type' => 'text',
            'value' => $empleado->email
        ],
        [
            'type' => 'text',
            'value' => $empleado->telefono
        ],
        [
            'type' => 'text',
            'value' => $empleado->genero
        ],
        [
            'type' => 'text',
            'value' => $empleado->estado
        ],
        [
            'type' => 'text',
            'value' => $empleado->usuario
        ],
        [
            'type' => 'text',
            'value' => $empleado->contraseña
        ],
        [
            'type' => 'text',
            'value' => $empleado->cod_contrato
        ]
    ]);

    $respuesta = enviarDatos($consulta);
    $datos = json_decode($respuesta, true);

    $respuesta .= $_POST['nombre-completo'];
    $respuesta .= $_POST['rol-empleado'];
    $respuesta .= $_POST['usuario'];
    $respuesta .= $_POST['contraseña'];
    cerrarConexion();

    if(isset($datos['results'])) {
        $dato = [
            'datos' => [
                'nombre' => 'formulario1',
                'campos' => [
                    'nombre',
                    'apellido'
                ],
                'estado' => 'OK',
                'datos' => $datos['results']
            ]
        ];
        http_response_code(200);
        echo json_encode($dato);
    } else {
        http_response_code(404);
        echo json_encode($respuesta);
    }
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
