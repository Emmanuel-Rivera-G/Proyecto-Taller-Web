<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$API_URL = "https://db-taller-web-emmanuel-rivera-g.turso.io/v2/pipeline";
$authToken = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjE3ODE1NzIsImlkIjoiMDJkYmNmNzQtNDA5MS00OGRlLTlkZDQtN2YzMTUzMmEwZGE4In0.GQPrdS2DsvQLdz9ksQAsHmnmbby1rDtH8wdOVZZB0KoCAhKeLezn5f9RyUONLa-PAxLXUS8Wrdsp7OHisO7_Dg";
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