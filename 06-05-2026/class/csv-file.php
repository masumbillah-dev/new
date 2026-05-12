<?php

$file = fopen ("students.csv","a+");

// fputcsv($file,array("id","name","email","phone"));


while($row = fgetcsv($file)){
    echo $row[0]."<br>";
    echo $row[1]."<br>";
    echo $row[2]."<br>";
    echo $row[3]."<br>";
    echo "<hr>";
}

fclose($file);


?>