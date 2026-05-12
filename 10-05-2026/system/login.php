<?php

session_start();
// $_SESSION["id"]=10;
// unset($_SESSION["id"]);

$pass= "123";
$hash_pass = password_hash($pass, PASSWORD_DEFAULT);

if(isset($_POST["login"])){   

        if(password_verify($_POST["password"], $hash_pass)){
            $_SESSION["user_id"] = 1;
            header("Location: dashboard.php");
        } else {
            $msg = "Wrong Password";
        }

}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form action="" method="POST">
    <input type="text" name="username"> <br> <br>
    <input type="password" name="password"> <br> <br>
    <input type="submit" name="login" value="Login">
    </form>
    <p style="color:red"> <?php
       echo $msg ?? "";
    ?> </p>
</body>
</html>