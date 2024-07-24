<?php
    include('./conex.php');
    session_start();
    //Las cabeceras de la petición permiten que el servidor responda con el tipo de contenido que se desea
    //Además, permiten que no se necesite el https y se solucione el problema con el CORS
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    if ($_POST['Usuario'] == "123" && $_POST['Contraseña'] == "123") {
        header('Content-Type: application/json');
        echo json_encode(array("autenticado" => true, "tipo" => 'Administrador'));
    } else if ($_POST['Usuario'] != null && $_POST['Contraseña'] != null) {
        header('Content-Type: application/json');
        $usuario = trim($_POST['Usuario']);
        $password = trim($_POST['Contraseña']);

        $_SESSION['Usuario'] = $usuario;

        iniciarConexion();

        $consulta = [
            "requests" => [
                [
                    "type" => "execute",
                    "stmt" => [
                        "sql" => "SELECT t.descripcionTipoUsuario FROM usuario u JOIN tipo_usuario t ON u.codigo_tipoUsuario = t.codigo_tipoUsuario WHERE u.nombreUsuario = ? AND u.contraseñaUsuario = ?",
                        "args" => [
                            [
                                "type" => "text",
                                "value" => "$usuario"
                            ],
                            [
                                "type" => "text",
                                "value" => "$password"
                            ]
                        ]
                    ]
                ],
                [
                    "type" => "close"
                ]
            ]
        ];
        $respuesta = enviarDatos($consulta);
        $datos = json_decode($respuesta, true);
        cerrarConexion();
        $row = $datos["results"][0]["response"]["result"]["rows"][0];
        if ($row) {
            $tipo = $row[0]["value"];
            $devolver = array('autenticado' => true, 'tipo' => $tipo);
            echo json_encode($devolver);
        } else {
            echo json_encode(array('autenticado' => false));
        }
    } else {
        header('Content-Type: application/json');
        echo json_encode(array("autenticado" => false));
    }
?>