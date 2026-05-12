<?php

$arr = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];

echo "<pre>";
 print_r($arr);
echo "</pre>";

usort($arr, function ($a, $b) {
    return strlen($a) - strlen($b);
});
echo "<pre>";
 print_r($arr);
echo "</pre>";

echo "<br>";echo "<br>";echo "<br>";

usort($arr, function ($a, $b) {
    return strlen($b) - strlen($a);
});
echo "<pre>";
 print_r($arr);
echo "</pre>";

echo "<br>";echo "<br>";echo "<br>";

?>