<?php

$arr = [
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

echo next ($arr ). "<br>";
echo next ($arr). "<br>";
echo next ($arr). "<br>";
echo next ($arr). "<br>";
echo prev ($arr). "<br>";
echo current ($arr). "<br>";
echo end ($arr). "<br>";
echo prev ($arr). "<br>";
echo reset ($arr). "<br>";
echo end ($arr). "<br>";
echo current ($arr). "<br>";

echo sizeof ($arr). "<br>";
echo count ($arr). "<br>";

?>