<?php
session_start();
$_SESSION["id"]=10;
$_SESSION["name"]="Fahim";
$_SESSION["age"]=25;

// print_r($_SESSION);
unset($_SESSION["id"]);
// session_unset();
?>