<?php

$arr = ["a", "b", "c", "d", "e", "f", "g"];
$str = "b";

echo is_array($arr) ? "Array" : "Not Array";
echo "<br>";
echo is_array($str) ? "Array" : "Not Array";
echo "<br>";echo "<br>";echo "<br>";
echo in_array("b", $arr) ? "Found" : "Not Found";
echo "<br>";echo "<br>";echo "<br>";
echo in_array("z", $arr) ? "Found" : "Not Found";
echo "<br>";echo "<br>";echo "<br>";



?>