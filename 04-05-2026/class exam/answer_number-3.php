<?php
$msg = "";

    $students = [
    "John"=> 80,
    "Jack"=> 90,
    "Jane"=> 100,
    "Rock"=> 60,
    "Ray"=>44
    ];

    $msg .= "<table border='1' cellpadding='5' cellspacing='0'>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>";

    foreach ($students as $name => $score) {
        $msg .= "<tr>
                    <td>$name</td>
                    <td>$score</td>
                </tr>";
    }

    $max = max($students);
    $top = array_search($max, $students);
 
    $msg .= " </table> Max Score: $max<br>";
    $msg .= "Top Student: $top ";
  

?>



<h3><?= $msg ?></h3>