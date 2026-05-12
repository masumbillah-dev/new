<?php
 function add(int $a, int $b): string{
    echo "<br>";
     return $a+$b . "<br>"; 
     
 }
//  echo add(2,3);
// //  echo "<br>";
//  echo add("50",70);

 function test(): void{
    echo "hello";

 }

echo "<pre>"
print_r(add(1,3));
var_dump(add("1",3));
echo "</pre>"



?>