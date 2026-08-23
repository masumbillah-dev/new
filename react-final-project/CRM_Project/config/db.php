<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "crm";

$db = new mysqli($host, $user, $password, $database);

if ($db->connect_error) {
    die("Database Connection Failed: " . $db->connect_error);
}

$db->set_charset("utf8mb4");

?>