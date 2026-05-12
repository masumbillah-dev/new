<?php

$students = [
    "Jack" => 87,
    "John" => 90,
    "Rahil" => 84,
    "Shahin" => 70,
    "Mahbub"  => 65
];


$maxScore = 0;
$topStudent = "";

foreach ($students as $name => $score) {
    if ($score > $maxScore) {
        $maxScore = $score;
        $topStudent = $name;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <style>
        table { border-collapse: collapse; width: 50%; margin: 20px 0; font-family: sans-serif; }
        th, td { border: 1px solid #e69b9b; padding: 12px; text-align: left; }
        th { background-color: #aff6ed; }
        .highlight { background-color: #89e79f; font-weight: bold; }
    </style>
</head>
<body>

    <h2>Student Result Sheet</h2>

    
    <table border="1">
        <thead>
            <tr>
                <th>Student Name</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($students as $name => $score): ?>
                <tr class="<?php echo ($name == $topStudent) ? 'highlight' : ''; ?>">
                    <td><?php echo $name; ?></td>
                    <td><?php echo $score; ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

    
    <p>
        <strong>Maximum Score:</strong> <?php echo $maxScore; ?> <br>
        <strong>Student Name:</strong> <?php echo $topStudent; ?>
    </p>

</body>
</html>