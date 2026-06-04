<?php
require_once("db.php");
$result = $db->query("select * from products");
if ($result) {
    $row = $result->fetch_all(MYSQLI_ASSOC);
    // echo "<pre>";
    // print_r($row);
    // "</pre>";
}




?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products</title>
</head>

<body>
    <nav>
        <a href="manufacturer.php">Manufacturers</a> | |
        <a href="products.php">Products</a>
    </nav>

    <h1>Products List</h1>
    <table width="100%" border="1" cellspacing="0" cellpadding="10">

        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
        <?php foreach ( $row as $value) : ?>
        <tr>
            <td><?= $value['id'];?></td>
            <td><?= $value['name'];?></td>
            <td><?= $value['manufacturer_id'];?></td>
            <td><?= $value['price'];?></td>
            <!-- <td>
                <button>Delete</button>
            </td> -->

        </tr>
        <?php endforeach; ?>
    </table>

</body>

</html>