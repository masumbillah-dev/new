<?php
require_once "db-config.php";
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $result = $db->query("SELECT * FROM manufactures WHERE id = $id");
    if ($result) {
        $mfg = $result->fetch_assoc();
        // echo "<pre>";
        // print_r($mfg);
        // echo "</pre>";
    } else {
        echo $db->error;
    }
} else {
    echo "ID is required";
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Manufacturer Details</h2>
    <p>Name: <?php echo $mfg ['name'] ??  "" ; ?></p>
    <p>Address: <?php echo $mfg ['address'] ??  "" ; ?></p>
    <p>Status: <?php echo $mfg ['is_active'] ??  "" ; ?></p>
</body>
</html>
