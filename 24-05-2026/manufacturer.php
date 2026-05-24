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
        <button type="submit" name="add_mfg">Save</button>
    </form>

    <h3>Manufacturer List</h3>
    <table border="1" cellspacing="0" cellpadding="10">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        <tbody>
            <?php
            if (isset($mfg)) {
                foreach ($mfg as $item) { ?>
            <tr>
                <td><?= $item['id'] ?></td>
                <td><?= $item['name'] ?></td>
                <td><?= $item['address'] ?></td>
                <td><?= $item['is_active'] ? "Active" : "Inactive"; ?>
                </td>

                <td>
                    <form action="manufacturer-details.php" method="GET">

                        <input type="hidden" name="id" value="<?= $item['id'] ?>">
                        <button type="submit">Details</button>
                    </form> <hr>
                    <form method="POST">
                        <input type="hidden" name="delete_id" value="<?= $item['id'] ?>">
                        <button type="submit">Delete</button>
                    </form>
                </td>
            </tr>
            <?php
                }
            }
                ?>
        </tbody>
        </tbody>
    </table>
</body>

</html>