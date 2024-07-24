<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
function construirConsulta($tabla, $campos = '*', $condiciones = '', $orden = '', $nameArgs = [], $args = []) {
    $sql = "SELECT $campos FROM $tabla";

    if (!empty($condiciones)) {
        $sql .= " WHERE $condiciones";
    }

    if (!empty($orden)) {
        $sql .= " ORDER BY $orden";
    }

    $args = (!empty($nameArgs)) ? $nameArgs : $args;
    $argTag = (!empty($nameArgs)) ? "named_args" : "args";

    $consulta = [
        "requests" => [
            [
                "type" => "execute",
                "stmt" => [
                    "sql" => $sql,
                    $argTag => $args
                ]
            ],
            [
                "type" => "close"
            ]
        ]
    ];

    return $consulta;
}
?>