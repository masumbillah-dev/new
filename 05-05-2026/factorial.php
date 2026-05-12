<?php

if (isset($_GET['submit'])) {
    $num = $_GET['num'];
    $multi = 1;
    for($i = 1; $i <= $num; $i++) {
        $multi *= $i;
    }
    $msg = "factorial of $num is $multi";
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>factorial</title>
</head>

<body>
    <form>
        <label>Enter a number</label><br>
        <input type="number" name="num"><br><br>
        <button type="submit" name="submit">Submit</button>
        <p><?= $msg ?? ""; ?></p>
    </form>
</body>

</html>