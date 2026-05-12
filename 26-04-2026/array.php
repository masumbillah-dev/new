<?php

// $arr1 = ["a",123,true,[1,2,3]];
// $arr2 = array("d","e","f","g");

// echo "<pre>";
// print_r($arr1);
// print_r($arr2);
// echo "</pre>";

// echo count($arr1);
// echo "<br>";
// echo count ($arr2);

// echo "<br>"; echo "<br>";echo "<br>";
// echo $arr1[3][2];
// echo "<br>"; echo "<br>";echo "<br>";


// $arr_num = ["a","b", false, 456];
// echo "<pre>";
// print_r($arr_num);
// var_dump($arr_num);
// echo "</pre>";

$arr_assoc = [
"name" => "John",
"age" => 30,
"email" => "example22@gmail.com",
];

// echo "<pre>";
// print_r($arr_assoc);
// var_dump($arr_assoc);
// echo "</pre>";


$arr_multi = [
    "name" => "John",
    "age" => 30,
    "email" => [
               "e1" =>"example22@gmail.com",
                "e2" => "example33@gmail.com",
    ],
    "address" => [
        "street" => "123 Main St",
        "city" => "New York",
        "state" => "NY",
    ],
];

echo "<pre>";
print_r($arr_multi);
var_dump($arr_multi);
echo "<br>";echo "<br>";echo "<br>";echo "<br>";echo "<br>";

echo $arr_multi["address"]["city"];
echo "<br>";echo "<br>";echo "<br>";echo "<br>";

echo $arr_multi["email"]["e1"];
echo "</pre>";
echo "<br>";echo "<br>";echo "<br>";echo "<br>";
echo $arr_multi["name"] = "Masum Billah";
echo "<br>";echo "<br>";echo "<br>";echo "<br>";
echo $arr_assoc ["name"] = "Masum Billah";

?>