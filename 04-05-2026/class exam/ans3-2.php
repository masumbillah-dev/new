<?php

$arr = [
    "John"=> 80,
    "Jack"=> 90,
    "Jane"=> 100,
    "Rock"=> 60,
    "Ray"=>44
    ];




?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table border="1" cellpadding="10" cellspacing="0" width="60%">

        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>

        <tbody>
            <?php

        foreach ($arr as $name => $score): ?>

            <tr>
                <td><?php echo $name ?></td>
                <td><?php echo $score ?></td>
            </tr>

            <?php endforeach ?>
        </tbody>
    </table>

    <h4>Max Score: <?= max($arr) ?></h4>
    <h4>Top Student: <?= array_search(max($arr), $arr) ?> </h4>
</body>

</html>