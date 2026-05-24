<?php
require_once "db-config.php";

// echo "Hello";

if(isset($_POST['add_mfg'])) {
    $name = $_POST['name'] . "<br>";
    $address = $_POST['address'] . "<br>";
    $active = isset($_POST['active']) ? 1 : 0;

    $db->query("INSERT INTO manufactures (name, address, is_active) VALUES ('$name', '$address', $active)");

}

if(isset($_POST['delete_id'])) {
    $id = $_POST['delete_id'];
    $db->query("DELETE FROM manufactures WHERE id = $id");
    echo "Delete id: $id";
    
}

// "SELECT * FROM manufacturers";

$result = $db->query("SELECT * FROM manufactures");

if ($result) {
    // echo "Successful";
    $mfg = $result->fetch_all(MYSQLI_ASSOC);
    // echo "<pre>";
    // print_r($mfg);
    // echo "</pre>";
} else {
    echo $db->error;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manufacturer</title>
</head>

<body>
    <nav>
        <a href="manufacturer.php">Manufacturer</a>|
        <a href="product.php">Product</a>
    </nav>
    <h2>Add New Manufacturer</h2>
    <form action="" method="post">
        <label for="name">Name</label><br>
        <input type="text" name="name" id="name">
        <br><br>
        <label for="address">Address</label><br>
        <textarea type="text" name="address" id="address"></textarea>
        <br><br>
        <input type="checkbox" name="active" id="active">
        <label for="active">Is active</label><br>
        <br><br>
        <button type="submit" name="add_mfg">Update</button>
    </form>

</body>

</html>