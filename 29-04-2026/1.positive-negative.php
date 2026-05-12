<?php

$msg = "";
if (isset($_GET['submit_btn'])) {

    $num = isset($_GET["num"]) ? $_GET["num"] : null;

    if ($num > 0) {
        $msg = "{$num} is Positive";
    } elseif ($num < 0) {
        $msg = "{$num} is Negative";
    } else {
        $msg = "{$num} is Zero";
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positive, Negative</title>
</head>

<body>
    <form>
        <label for="num">Enter a Number</label><br>
        <input type="number" name="num" id="num"><br><br>
        <button type="submit" name="submit_btn">Submit</button>

        <h4><?= $msg ?></h4>
    </form>
</body>

</html>