<?php

$num = 49;

/* $isPrime = null;

for ($i = 2; $i < $num; $i++) {
    if ($num % $i === 0) {
        $isPrime = false;
        break;
    } else {
        $isPrime = true;
    }
}


if ($isPrime) {
    echo $num . " is prime";
} else {
    echo $num . " is not prime";
} */


$isPrime = true;

for ($i = 2; $i < $num; $i++) {
    if ($num % $i === 0) {
        $isPrime = false;
        break;
    }
}


if ($isPrime) {
    echo $num . " is prime";
} else {
    echo $num . " is not prime";
}
