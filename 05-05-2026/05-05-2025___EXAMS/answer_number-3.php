<?php
$msg = "";

if (isset($_GET['submit'])) {
    $num = $_GET['num'];

    if ($num <= 1) {
        $msg = "$num is not a Prime Number";
    } else {
        $isPrime = true;
        for ($i = 2; $i <= sqrt($num); $i++) {
            if ($num % $i == 0) {
                $isPrime = false;
                break;
            }
        }
        $msg = $isPrime ? "$num is a Prime Number" : "$num is Not a Prime Number";
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
    
    <form>
        <p><br></p>
        <label for=""> Enter Number:  </label>
        <input type="number" name="num" required> <br> <br>
        <button name="submit">Check Prime or Not</button>
    </form>

<h3><?= $msg ?></h3>

</body>
</html>





