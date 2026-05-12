<?php
// if($_SERVER['REQUEST_METHOD'] == 'POST'){
//     echo $_POST['Email'];
// }elseif($_SERVER['REQUEST_METHOD'] == 'GET'){
//     echo $_GET['Email'];
// }

// $_GET['Email'];
// $msg="";

$name = $_POST['username'];
    $reg_name = '/^[a-zA-z0-9]{4,8}[@]{1}$/';



   

if(isset($_POST['form_email'])){
    // echo $_POST['email'];
    // echo "<br>";
    // echo $_POST['username'];
    $email = $_POST['email'];
    $reg_email = '/^[a-zA-z0-9_.]{3,60}[@]{1}[a-zA-z0-9-]{2,20}[.]{1}[a-zA-z]{2,6}$/';
    if(preg_match($reg_email,$email)){
        // $email_error = "Email is valid";
        $msg = "Email is valid from msg";
        
    }else{
        $email_error = "Email is not valid";
        
    } 


}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
 <style>
    .error-text{
        color: red;
    }
 </style>
</head>
<body>
    <form action="" method="POST">
        <label for="">UserName:</label>
        <input type="text" name="username" value="<?php echo $name ?? "masum"?>">
           <div class="error-text"><?= $username_error ?? ""; ?></div><br>

        <label for="">Email:</label>
        <input type="text" name="email" value="<?php echo $email ?? "masum2@gmail.com" ?>">
           <div class="error-text"><?= $email_error ?? "" ?></div><br>
     

        <input type="submit" name="form_email" value="submit">
        <h3 style="color: green;"><?php echo $msg ?? ""; ?></h3>
    </form>
</body>
</html>