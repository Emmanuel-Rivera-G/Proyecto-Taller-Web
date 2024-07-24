<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');

    include('./tablaFunciones.php');

    $finalResponse = [
        "empleados" => tablaEmpleados(),
        "contratos" => tablaContratos(),
        "cargos" => tablaCargo(),
        "departamentos" => tablaDepartamentos()
    ];

    echo json_encode($finalResponse);
}
?>