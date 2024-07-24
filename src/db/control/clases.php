<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
class Empleado {
    public $cod_empleado;
    public $nombre;
    public $apellidoPater;
    public $apellidoMater;
    public $DNI;
    public $email;
    public $telefono;
    public $genero;
    public $estado;
    public $usuario;
    public $contraseña;
    public $cod_contrato;

    // Constructor
    public function __construct($cod_empleado, $nombre, $apellidoPater, $apellidoMater, $DNI, $email, $telefono, $genero, $estado, $usuario, $contraseña, $cod_contrato) {
        $this->cod_empleado = $cod_empleado;
        $this->nombre = $nombre;
        $this->apellidoPater = $apellidoPater;
        $this->apellidoMater = $apellidoMater;
        $this->DNI = $DNI;
        $this->email = $email;
        $this->telefono = $telefono;
        $this->genero = $genero;
        $this->estado = $estado;
        $this->usuario = $usuario;
        $this->contraseña = $contraseña;
        $this->cod_contrato = $cod_contrato;
    }
}

class Contrato {
    public $cod_contrato;
    public $descripcion;
    public $fecha_inicio;
    public $fecha_fin;
    public $salario;
    public $cod_cargo;

    // Constructor
    public function __construct($cod_contrato, $descripcion, $fecha_inicio, $fecha_fin, $salario, $cod_cargo) {
        $this->cod_contrato = $cod_contrato;
        $this->descripcion = $descripcion;
        $this->fecha_inicio = $fecha_inicio;
        $this->fecha_fin = $fecha_fin;
        $this->salario = $salario;
        $this->cod_cargo = $cod_cargo;
    }
}

class Cargo {
    public $cod_cargo;
    public $nom_puesto;
    public $cod_departamento;

    // Constructor
    public function __construct($cod_cargo, $nom_puesto, $cod_departamento) {
        $this->cod_cargo = $cod_cargo;
        $this->nom_puesto = $nom_puesto;
        $this->cod_departamento = $cod_departamento;
    }
}

class Departamento {
    public $cod_departamento;
    public $npm_departamento;

    // Constructor
    public function __construct($cod_departamento, $npm_departamento) {
        $this->cod_departamento = $cod_departamento;
        $this->npm_departamento = $npm_departamento;
    }
}

class Pago {
    public $cod_pago;
    public $fecha_pago;
    public $monto_pago;
    public $total_pago;
    public $cod_detalle_pago;

    // Constructor
    public function __construct($cod_pago, $fecha_pago, $monto_pago, $total_pago, $cod_detalle_pago) {
        $this->cod_pago = $cod_pago;
        $this->fecha_pago = $fecha_pago;
        $this->monto_pago = $monto_pago;
        $this->total_pago = $total_pago;
        $this->cod_detalle_pago = $cod_detalle_pago;
    }
}

class DetallePago {
    public $cod_detalle_pago;
    public $bonificaciones;
    public $descuentos;
    public $horas_trabajadas;
    public $tipo_pago;

    // Constructor
    public function __construct($cod_detalle_pago, $bonificaciones, $descuentos, $horas_trabajadas, $tipo_pago) {
        $this->cod_detalle_pago = $cod_detalle_pago;
        $this->bonificaciones = $bonificaciones;
        $this->descuentos = $descuentos;
        $this->horas_trabajadas = $horas_trabajadas;
        $this->tipo_pago = $tipo_pago;
    }
}
?>