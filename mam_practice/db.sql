<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "exam_mysql";

// Create connection
$conn = new mysqli($servername, $username, $password, $exam_mysql);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>