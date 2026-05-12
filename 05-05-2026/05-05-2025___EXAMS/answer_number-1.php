<?php
$msg = "";

if (isset($_GET['submit'])) {
        $n1 = $_GET['num1'];
        $n2 = $_GET['num2'];
        $n3 = $_GET['num3'];

    $largest = max($n1, $n2, $n3);
    $msg = "The Largest Number is : $largest";
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
    
    <form>
          <p><br></p>

        First Number : <input type="number" name="num1"> <br> <br>
        Second Number: <input type="number" name="num2"> <br> <br>
        Third Number: <input type="number" name="num3"> <br> <br>
    
        <button name="submit">Find The Largest Number</button>

</form>

<h2><?= $msg ?></h2>

</body>
</html>

