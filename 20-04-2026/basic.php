<?php
echo "<b>Php data type</b>";
echo "<br>";
echo "string";
echo "<br>";
echo "integer";
echo "<br>";
echo "float";
echo "<br>";
echo "boolean";
echo "<br>";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Php data type from HTML</h1>
    <h2><?php echo "php in html";?></h2>
    <h3><?= " new = php in html";?></h3>
</body>
</html>

<?php

#echo " <span>php top </span>",  "-", "php bottom ", "<br>" ; 



/*print ("php line 1" . "<br>" . "php line 2" . "<br>" . "php line 3" . "<br>" . "php line 4");
print "php line 2";

echo "<br>";echo "<br>";echo "<br>";echo "<br>";echo "<br>";*/

$arr = ["php","java","css",4,5];
// echo $arr;

print_r($arr);
echo "<br>";echo "<br>";
echo "<br>";
var_dump($arr);

echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";


$name = "Fahim Vai";
$age = 28;

printf("%s is %d years old.", $name, $age);
echo "<br>";
echo "<br>";
echo "<br>";

$str = sprintf("%s is %d years old.", $name, $age);

echo $str;

?>


<br>
<br>

<?= "PHP bottom";?>


<br>
<br>


<? echo "PHP bottom 2";?>