<!-- 
// echo $_GET['username'];
// echo$_GET['email'];

// echo "<pre>";
// print_r($_GET);
// echo "</pre>";


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="submit.php" method="POST">
    <label for="">Username</label> <br>
    <input type="text" name="username"> <br> <br>
    <label for="">Email</label><br>
    <input type="text" name="email" ><br> <br> <br>

    <button type="submit" name="submit" value="signup">Submit</button>
    </form>
</body>
</html> -->

<br><br><br> <br>

<?php
$email = "";
if(isset($_POST["submit"])){

$email = $_POST["email"]; 
echo $_POST['username']; 
echo $_POST['email']; 

// echo "<pre>";
// print_r($_POST);
// echo "</pre>";


};



?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="POST">
    <label for="">Username</label> <br>
    <input type="text" name="username" value="<?= isset($_POST["username"]) ? $_POST["username"] : "";?>" > 

    <label for="">Email</label><br>
    <input type="text" name="email" value= "<?= $email?>">   <br> <br> <br>

    <button type="submit" name="submit">Submit</button>
    </form>
</body>
</html>