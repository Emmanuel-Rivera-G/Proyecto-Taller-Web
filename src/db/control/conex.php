<?php
$API_URL = "https://db-taller-web-emmanuel-rivera-g.turso.io/v2/pipeline";
$authToken = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTc1OTcxMDIsImlkIjoiMDJkYmNmNzQtNDA5MS00OGRlLTlkZDQtN2YzMTUzMmEwZGE4In0.ab7lh1H9omAugUK2fFgwVMHuVQixI2R5SPxqQV8CbNiDu4C5kIeOyVeIJLJ9Xb45wZxQjsduVfv12xfPOi4VDQ";

$ch = null;

function iniciarConexion(){
    global $ch;
    global $authToken;
    global $API_URL;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $API_URL);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer ". $authToken,
        "Content-Type: application/json"
    ]);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_exec($ch);
}

function verificarRespuesta($response){
    global $ch;
    if ($ch != null) {
        if ($response === false) {
            $error = curl_error($ch);
            $errorCode = curl_errno($ch);
            echo "Error en cURL: $error (Código: $errorCode)";
        } else {
            // Imprimir la respuesta
            echo 'Respuesta de la API: ' . $response;
        }
    }
}

function enviarDatos($data){
    global $ch;
    if ($ch != null) {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        $res = curl_exec($ch);
        return $res;
    }
    return false;
}

function cerrarConexion(){
    global $ch;
    if($ch){
        curl_close($ch);
    }
}

//$_conex = mysqli_connect("localhost","root", "", "db_usuario",3309);
?>