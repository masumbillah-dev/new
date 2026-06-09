<?php
require_once 'db.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manufacturer</title>
</head>
<body>
    <h3>Manufacturer</h3>
    <table border="1">
        <tr>
            <th>Manufacturer ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact Number</th>
        </tr>
        
        <?php
        // Database connection parameters
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "your_database_name";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // SQL query to fetch manufacturer data
        $sql = "SELECT manufacturer_id, name, address, contact_number FROM manufacturers";
        $result = $conn->query($sql);

        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<tr><td>" . $row["manufacturer_id"] . "</td><td>" . $row["name"] . "</td><td>" . $row["address"] . "</td><td>" . $row["contact_number"] . "</td></tr>";
            }
        } else {
            echo "<tr><td colspan='4'>No manufacturers found</td></tr>";
        }

        $conn->close();
        ?>
    </table>
</body>
</html>