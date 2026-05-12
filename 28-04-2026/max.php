<?php
$msg="";
if (isset($_POST["submit"])){
    $number1 = $_POST['number1'];
    $number2 = $_POST['number2'];
    $number3 = $_POST['number3'];


if ($number1 > $number2 && $number1 > $number3){
    $msg = $number1." is the Largest number";
} else if ($number2 > $number1 && $number2 > $number3){
    $msg = $number2. "is the Largest number";
} else{
    $msg = $number3." is the Largest number";
}


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
    <form method="POST">

    <input type="number" name="number1">
    <input type="number" name="number2">
    <input type="number" name="number3">
    <button type="submit" name="submit">submit</button>
   

    </form>
    <h1> <?php echo $msg; ?> </h1>
</body>
</html>