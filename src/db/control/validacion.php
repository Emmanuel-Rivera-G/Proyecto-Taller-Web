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
        echo json_encode(array("autenticado" => true));
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
                        "sql" => "SELECT EXISTS(SELECT 1 FROM usuario WHERE nombreUsuario = ? AND contraseñaUsuario = ?)",
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
        if ($datos["results"][0]["response"]["result"]["rows"][0][0]["value"] == 1) {
            echo json_encode(array('autenticado' => true));
        } else {
            echo json_encode(array('autenticado' => false));
        }
    } else {
        header('Content-Type: application/json');
        echo json_encode(array("autenticado" => false));
    }
?>