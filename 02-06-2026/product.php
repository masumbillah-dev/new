<?php
require_once("db.php");
$sql = "
select p.*, m.name as mfg
from products as p, manufactures as m
where p.manufacturer_id = m.id";
$result = $db->query($sql);
$rows = $result->fetch_all(MYSQLI_ASSOC);
// if ($result) {
//     $row = $result->fetch_all(MYSQLI_ASSOC);
    // echo "<pre>";
    // print_r($row);
//     // "</pre>";
// }

$result = $db->query("select * from vw_product_list");
$view_rows = $result->fetch_all(MYSQLI_ASSOC);




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
            <th>Manufacturer</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        <?php foreach ( $view_rows as $value) : ?>
        <tr>
            <td><?= $value['id'];?></td>
            <td><?= $value['name'];?></td>
            <td><?= $value['mfg'];?></td>
            <td><?= $value['price'];?></td>
            <!-- <td>
                <button>Delete</button>
            </td> -->

        </tr>
        <?php endforeach; ?>
    </table>

</body>

</html>