<?php
$countries = array(
    "Bangladesh" => "Dhaka",
    "USA" => "Washington D.C.",
    "UK" => "London",
    "Japan" => "Tokyo",
    "Russia" => "Moscow"
);

echo "Main Array:</br>"




ksort($countries);

echo "Sorted Country and Capitals:<br>";

foreach ($countries as $country => $capital) { 
    echo "$country : $capital <br>";
}
?>