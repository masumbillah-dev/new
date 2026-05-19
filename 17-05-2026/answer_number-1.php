<?php
$countries = [
    "Pakistan"   => "Islamabad",
    "Sri Lanka"  => "Colombo",
    "Nepal"      => "Kathmandu",
    "Maldives"   => "Male",
    "Bangladesh" => "Dhaka",
];
echo "Array Before Sorting -";
echo "<pre>";
print_r($countries);
echo "</pre>";

ksort($countries);

echo "<hr>";

echo "Array After Sorting -";
echo "<pre>";
print_r($countries);
echo "</pre>";



