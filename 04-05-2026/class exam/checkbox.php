<?php
if (isset($_POST['submit_checkbox'])) {
    
    echo "<pre>";
    print_r($_POST['check']);
    echo "</pre>";
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
    <form action="" method="POST">

    <input type="checkbox" name="check[]" value="1">1
    <input type="checkbox" name="check[]" value="2">2            
    <input type="checkbox" name="check[]" value="3">3
    <input type="checkbox" name="check[]" value="4">4
    <input type="checkbox" name="check[]" value="5">5 <br> <br>
    <input type="submit" name="submit_checkbox" value="submit" style="background-color: green ; color: white; border:0px; border-radius: 5px; height: 20px; width: 100px"   >




    </form>
</body>
</html>