<?php
    include('./conex.php');
    session_start();

    if (isset($_POST['Usuario']) && isset($_POST['Contraseña'])) {
        $_usuario = trim($_POST['Usuario']);
        $_password = trim($_POST['Contraseña']);

        $_SESSION['Usuario'] = $_usuario;

        $_consulta = "SELECT * FROM usuario WHERE nombreUsuario='$_usuario' AND contraseñaUsuario='$_password'";
        $_resultado = mysqli_query($_conex, $_consulta);

        //esta variable sirve para almacenar el resultado
        $_filas = mysqli_fetch_array($_resultado);

        if ($_filas) {
            if($_filas['codigo_tipoUsuario']==1)//Administrador
            {
                header("location: ../../public/pages/principal/principal.html");   //link a la pagina del administrador
            }
            else if($_filas['codigo_tipoUsuario']==2){ //cliente
                header("location: ../../public/pages/principal/principal.html");   //link a la pagina del Empleado1
            }
        } else {
            include('../../../public/pages/login/login_php.html');
            echo '
            <div style="display: flex; justify-content: center;">
            <h2>Error en la autenticacion</h2>
            </div>';
        }

        //para mostrar el resultado
        mysqli_free_result($_resultado);
        mysqli_close($_conex);
    } else {
        include('../../../public/pages/login/login_php.html');
        echo '
        <div style="display: flex; justify-content: center;">
        <h2>Por favor, ingrese su usuario y contraseña</h2>
        </div>';
    }
?>
