<?php

$str = "Hello World! Welcome to the world of PHP";

echo substr($str, 6,5);
echo ("<br>");
echo strLen($str);
echo ("<br>");
echo strpos($str, "d");

echo ("<br>");echo ("<br>");
var_dump (strpos($str, "c"));
echo ("<br>");
var_dump (strpos($str, "e"));
echo ("<br>");
echo ("<br>");echo ("<br>");
echo str_replace("World", "PHP", $str);
echo ("<br>");
echo strtolower ($str);
echo ("<br>");
echo strtoupper ($str);
echo ("<br>");
echo ucfirst ($str);
echo ("<br>");
echo ucwords ($str);
echo ("<br>");
echo strrev($str);
echo ("<br>");
echo str_shuffle($str);
echo ("<br>");
echo str_shuffle($str);
echo ("<br>");
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

$html= htmlspecialchars("h1 style='color:red'>Hello 💕💕💕💕</h1>");
echo $html;

?>