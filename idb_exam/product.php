<?php
require_once "db.php";

$sql = "
select p.*, m.name as mfg
from product p, manufacturer m
where p.manufacturer_id = m.id
";

// Show all Product

$result = $db->query($sql);
$products = $result->fetch_all(MYSQLI_ASSOC);

// Show View Product

$result_view = $db->query("SELECT * FROM product_view");
$rows_view = $result_view->fetch_all(MYSQLI_ASSOC);

// echo "<pre>";
// print_r($rows_view);
// echo "</pre>";


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products</title>
</head>
<body>


   <h2>View Products (More than 5000 Taka)</h2>
    <table border="1" cellspacing="0" cellpadding="10" style="width: 40%;">
        <tr style="background-color: #12d975;">
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Manufacturer</th>
        </tr>
        <?php 
         foreach($rows_view as $item) :
         ?>
         <tr>
            <td><?= $item["id"] ?></td>
            <td><?= $item["name"] ?></td>
            <td><?= $item["price"] ?></td>
            <td><?= $item["mfg"] ?></td>
         </tr>

         <?php endforeach ?>
    </table>

    <br><br>


   <h2>Products List</h2>
    <table border="1" cellspacing="0" cellpadding="10" style="width: 40%;">
        <tr style="background-color: #12d975;">
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Manufacturer</th>
        </tr>
        <?php 
         foreach($products as $item) :
         ?>
         <tr>
            <td><?= $item["id"] ?></td>
            <td><?= $item["name"] ?></td>
            <td><?= $item["price"] ?></td>
            <td><?= $item["mfg"] ?></td>
         </tr>

         <?php endforeach ?>
    </table>
</body>
</html>