<?php
/* function displayText()
{
    echo "this is another text";
    return "This is a text";
} */

// displayText();

function addition($a, $b, $c)
{
    echo "this is a text from addition fucntion <br>";
    $additon = $a + $b;
    $mult = $additon * $c;
    return $mult;

    // erpor ja likhen useless

    $mult = $additon * 10;
    $mult = $additon * 45;
}

$calculation = addition(4, 5, 4);

echo "The addition of 4 and 5 is " . $calculation . "<br>";
// echo "ja iccha tai " . addition(4, 5, 4);
