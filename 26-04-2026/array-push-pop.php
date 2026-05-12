<?php
$arr = ["fahim","sakib","tamim","ratul","shuvo"];

echo "<pre>";
 print_r($arr);
echo "</pre>";

array_push ($arr,"new");
echo "<pre>";
 print_r($arr);
echo "</pre>";

array_pop ($arr);
array_pop ($arr);
echo "<pre>";
 print_r($arr);
echo "</pre>";

array_shift ($arr);
echo "<pre>";
 print_r($arr);
echo "</pre>";

array_unshift ($arr,"beginning");
echo "<pre>";
 print_r($arr);
echo "</pre>";
?>