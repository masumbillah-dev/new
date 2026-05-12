<?php

$arr_assoc = [

"usa" => "New York",
"uk" => "London",
"canada" => "Toronto",
"bangladesh" => "Dhaka",
"pakistan" => "Islamabad",
"germany" => "Berlin",
];

echo "<pre>";
 print_r($arr_assoc);
echo "</pre>";

asort($arr_assoc);
echo "<pre>";
print_r($arr_assoc);
echo "</pre>";

arsort($arr_assoc);
echo "<pre>";
 print_r($arr_assoc);
echo "</pre>";

ksort($arr_assoc);
echo "<pre>";
 print_r($arr_assoc);
echo "</pre>";

krsort($arr_assoc);
echo "<pre>";
 print_r($arr_assoc);
echo "</pre>";


?>