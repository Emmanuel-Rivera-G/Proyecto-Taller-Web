<?php
$name = "Hola";
$idDev = true;
$age = 19;

var_dump($name);
var_dump($idDev);
var_dump($age); 
$arraydeobjetos = array("name" => "Hola", "idDev" => true, "age" => 19);
?>
<?= ($name)?>
<?php 
foreach ($arraydeobjetos as $key => $value) {
    echo $key . ': ' . $value . '<br>';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola Mundo</h1>
    <p>Esto es un test</p>
    <script>
        let age = 35
        age = age + 1;
        console.log(age);
    </script>
</body>
</html>