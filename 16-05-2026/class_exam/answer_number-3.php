<?php
$student_arr = [
    "Rakib Al Hasan" => "80",
    "Hasan Al Mamun" => "75",
    "Imrul Kayes" => "90",
    "Kamal Hossain" => "68",
    "Sakib Al Hasan" => "95",
   
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table</title>
</head>
<body>
    <table border="1" cellpadding="10" cellspacing="0" width="80%">
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
        <?php foreach($student_arr as $name => $score) : ?>
        <tr>
            <td><?= $name; ?></td>
            <td><?= $score; ?></td>
        </tr>
        <?php endforeach;   ?>
    </table>
    <p>Maximum Score : <?= max($student_arr); ?></p>
    <p>Student Name : <?= array_search(max($student_arr), $student_arr); ?></p>
</body>
</html>