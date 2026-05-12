<?php

$var = 10;
$var2 =& $var1;
$var2 = 20;
$var1 = 30;

echo $var1;
?>