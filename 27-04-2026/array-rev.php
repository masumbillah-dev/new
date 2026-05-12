<?php

$arr = ["banana", "apple", "cherry", "honeydew","date", "elderberry", "fig", "grape",  "kiwi", "juice"];

echo "<pre>";
print_r(array_reverse($arr));
echo "</pre>";

$arr2 = [
    "a" => "apple",
    "b" => "banana",
    "c" => "cherry",
    "d" => "date",
    "e" => "elderberry",
    "f" => "fig",
    "g" => "grape",
    "h" => "honeydew",
    "i" => "kiwi",
    "j" => "juice",
];

echo "<pre>";
print_r(array_flip($arr2));
echo "</pre>";

echo "<pre>";
print_r(array_flip($arr));
echo "</pre>";




?>