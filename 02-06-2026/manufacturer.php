<?php
require_once("db.php");


if (isset($_POST['add_mfg'])) {
    $name = $_POST['name'];
    $address = $_POST['address'];
//    echo $name. "<br>". $address;

   
    $db->query("call createManufacturer('$name', '$address')");
  
}

$result = $db->query("select * from manufactures");
// $rows = $result->fetch_all(MYSQLI_ASSOC);

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
    <title>Manufacturer</title>
</head>

<body>
    <nav>
        <a href="manufacturer.php">Manufacturers</a> | |
        <a href="products.php">Products</a>
    </nav>

    <h1>Add New Manufacturer</h1>
    <form method="post">
        <input type="text" name="name" placeholder="Name"> <br><br>
        <textarea name="address" placeholder="Address"></textarea> <br><br>
        <button type="submit" name="add_mfg" value="Add Manufacturer">Add Manufacturer</button>
    </form>

    <h1>Manufacturers List</h1>
    <table width="100%" border="1" cellspacing="0" cellpadding="10">

        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
        <?php foreach ($row as $value) : ?>
        <tr>
            <td><?= $value['id'];?></td>
            <td><?= $value['name'];?></td>
            <td><?= $value['address'];?></td>
            <td>
                <button>Delete</button>
            </td>

        </tr>
        <?php endforeach; ?>
    </table>

</body>

</html>