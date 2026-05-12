<?php
$arr = ["fahim","sakib","tamim","abubakar","ratul","shuvo","badol"];
$arr_num = [3,7,8,9,4,5,6,1,2];

echo "<pre>";
 print_r($arr);
echo "</pre>";

sort($arr);
echo "<pre>";
 print_r($arr);
echo "</pre>";

rsort($arr);
echo "<pre>";
 print_r($arr);
echo "</pre>";

sort($arr_num);
echo "<pre>";
 print_r($arr_num);
echo "</pre>";

rsort($arr_num);
echo "<pre>";
 print_r($arr_num);
echo "</pre>";

?>