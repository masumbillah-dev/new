<?php

$arr = ["picture1.jpg", "picture10.jpg", "picture3.jpg","zimage4.jpg", "Picture5.jpg"];


echo "<pre>";
 print_r($arr);
echo "</pre>";

natsort($arr);
echo "<pre>";
 print_r($arr);
echo "</pre>";

natcasesort($arr);
echo "<pre>";
 print_r($arr);
echo "</pre>";




?>