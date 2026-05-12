<?php

$x = 10;

if($x > 5){
    echo "x is greater than 5";
}else{
    echo "x is less than 5";
}

echo "<br>=======================================<br>"; 

$y = 0;

if($y > 0){
    echo "y is positive number";
}elseif($y < 0){
    echo "y is negative number";
}else{
    echo "y is zero";
}

echo "<br>=======================================<br>"; 


$day = "Saturday";

switch($day){
    case "Friday":
        echo "Weekend day";
        break;
    case "Saturday":
        echo "First day of a week";
        break;
    default:
        echo "Regular day";
        break;
}



for ($i=0; $i < 5; $i++) { 
    echo $i;
    echo "<br>";
}


echo "<br>====================================<br>"; 
 

for ($i=0; $i < 5; $i++) { 
    if($i == 5){
        continue;
    }
    echo $i;
    echo "<br>";
}

echo "<br>===========================<br>"; 

$z = 5;
while($z > 1){
    echo $z;
    echo "<br>";
    $z--;
}


echo "<br>===================================<br>"; 

do {
    echo "z is " . $z;
    echo "<br>";
    $z--;
} while ($z > 0);

echo "<br>===========================<br>";


$arr = ["a", "b", "c", "d", "e", "z"];

foreach($arr as $key => $value) {
    echo $key . " : " . $value;
    echo "<br>";
}

echo "<br>===========================<br>"; 

foreach($arr as $value) {
    echo $value;
    echo "<br>";
}






?>



















<!-- <?php


// 1.conditional
//     a. if 
//     b. else 
//     c. if-else 
//     d. if-else-if

// 2.loops
//     a. while
//     b. do-while
//     c. for
//     d. foreach

// $x = 10;

// if($x > 5){
//     echo "x is greater than 5";
// }else{
//     echo "x is less than 5";
// }

// $y = 5;

// if($y > 0){
//     echo "y is positive number";
// }else if($y < 0){
//     echo "y is negative number";
// }else{
//     echo "y is zero";
// }


// 3.switch





?> -->