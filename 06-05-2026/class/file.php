<?php


$file = fopen('text.txt',"r+");
fwrite($file, "hello world");
fclose($file);

$file = fopen('text.txt',"r+");
echo fgets($file);
fwrite($file, " wellcome ");
fclose($file);





?>