<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
include('./conex.php');
include('./controDB.php');
include('./clases.php');

function tablaEmpleados() {
    iniciarConexion();

    $empleados = [];

    $consulta = construirConsulta(
        'Empleado',
        'cod_empleado,nombre,apellidoPater,apellidoMater,DNI, email,telefono,genero,estado,usuario,contraseña,cod_contrato',
    );

    $respuesta = enviarDatos($consulta);
    $datos = json_decode($respuesta, true);
    cerrarConexion();

    foreach ($datos['results'][0]['response']['result']['rows'] as $rows) {
        $cod_empleado = $rows[0]['value'];
        $nombre = $rows[1]['value'];
        $apellidoPater = $rows[2]['value'];
        $apellidoMater = $rows[3]['value'];
        $DNI = $rows[4]['value'];
        $email = $rows[5]['value'];
        $telefono = $rows[6]['value'];
        $genero = $rows[7]['value'];
        $estado = $rows[8]['value'];
        $usuario = $rows[9]['value'];
        $contraseña = $rows[10]['value'];
        $cod_contrato = $rows[11]['value'];

        $empleado = new Empleado($cod_empleado, $nombre, $apellidoPater, $apellidoMater, $DNI, $email, $telefono, $genero, $estado, $usuario, $contraseña, $cod_contrato);

        $empleados[] = $empleado;
    }

    return $empleados;
}

function tablaContratos() {
    iniciarConexion();

    $contrato = [];

    $consulta = construirConsulta(
        'Contrato',
        'cod_contrato,descripcion,fecha_inicio,fecha_fin,salario,cod_cargo',
    );

    $respuesta = enviarDatos($consulta);
    $datos = json_decode($respuesta, true);
    cerrarConexion();

    foreach ($datos['results'][0]['response']['result']['rows'] as $rows) {
        $cod_contrato = $rows[0]['value'];
        $descripcion = $rows[1]['value'];
        $fecha_inicio = $rows[2]['value'];
        $fecha_fin = $rows[3]['value'];
        $salario = $rows[4]['value'];
        $cod_cargo = $rows[5]['value'];

        $contrato = new Contrato($cod_contrato, $descripcion, $fecha_inicio, $fecha_fin, $salario, $cod_cargo);

        $contratos[] = $contrato;
    }

    return $contratos;
}

function tablaCargo() {
    iniciarConexion();

    $cargos = [];

    $consulta = construirConsulta(
        'Cargo',
        'cod_cargo,nom_puesto,cod_departamento',
    );

    $respuesta = enviarDatos($consulta);
    $datos = json_decode($respuesta, true);
    cerrarConexion();

    foreach ($datos['results'][0]['response']['result']['rows'] as $rows) {
        $cod_cargo = $rows[0]['value'];
        $nom_puesto = $rows[1]['value'];
        $cod_departamento = $rows[2]['value'];

        $cargo = new Cargo($cod_cargo, $nom_puesto, $cod_departamento);

        $cargos[] = $cargo;
    }

    return $cargos;
}

function tablaDepartamentos() {
    iniciarConexion();

    $departamentos = [];

    $consulta = construirConsulta(
        'Departamento',
        'cod_departamento,npm_departamento',
    );

    $respuesta = enviarDatos($consulta);
    $datos = json_decode($respuesta, true);
    cerrarConexion();

    foreach ($datos['results'][0]['response']['result']['rows'] as $rows) {
        $cod_departamento = $rows[0]['value'];
        $npm_departamento = $rows[1]['value'];

        $departamento = new Departamento($cod_departamento, $npm_departamento);

        $departamentos[] = $departamento;
    }

    return $departamentos;
}

function tablaPagos() {
    iniciarConexion();

    $pagos = [];

    $consulta = construirConsulta(
        'Pagos',
        'cod_pago,fecha_pago,monto_pago,total_pago,cod_detalle_pago',
    );

    $respuesta = enviarDatos($consulta);
    $datos = json_decode($respuesta, true);
    cerrarConexion();

    foreach ($datos['results'][0]['response']['result']['rows'] as $rows) {
        $cod_pago = $rows[0]['value'];
        $fecha_pago = $rows[1]['value'];
        $monto_pago = $rows[2]['value'];
        $total_pago = $rows[3]['value'];
        $cod_detalle_pago = $rows[4]['value'];

        $pago = new Pago($cod_pago, $fecha_pago,$monto_pago,$total_pago,$cod_detalle_pago);

        $pagos[] = $pago;
    }

    return $pagos;
}

function tablaDetallePago() {
    iniciarConexion();

    $detallePagos = [];

    $consulta = construirConsulta(
        'DetallePago',
        'cod_detalle_pago,bonificaciones,descuentos,horas_trabajadas,tipo_pago',
    );

    $respuesta = enviarDatos($consulta);
    $datos = json_decode($respuesta, true);
    cerrarConexion();

    foreach ($datos['results'][0]['response']['result']['rows'] as $rows) {
        $cod_detalle_pago = $rows[0]['value'];
        $bonificaciones = $rows[1]['value'];
        $descuentos = $rows[2]['value'];
        $horas_trabajadas = $rows[3]['value'];
        $tipo_pago = $rows[4]['value'];

        $detallePago = new DetallePago($cod_detalle_pago, $bonificaciones,$descuentos,$horas_trabajadas,$tipo_pago);

        $detallePagos[] = $detallePago;
    }

    return $detallePagos;
}
?>