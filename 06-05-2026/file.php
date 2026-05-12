<?php
// $file = fopen("file.txt", "r+");
// fwrite($file, "Hello world");
// fclose($file);

// $file = fopen("file.txt", "r+");
// echo fgets($file);
// fwrite($file, "Hello world 2");
// fclose($file);



$file = fopen('text.txt',"r+");
fwrite($file, "hello world");
fclose($file);

$file = fopen('text.txt',"r+");
echo fgets($file);
fwrite($file, " wellcome ");
fclose($file);





?>