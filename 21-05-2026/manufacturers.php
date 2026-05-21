<?php
require_once "db-config.php";
// $db->query("select * from  manufacturers");

$result = $db->query("select * from manufacturers");
if ($result){
    $mfg = $result->fetch_all(MYSQLI_ASSOC);
    echo "<pre>";
    print_r($mfg);
    echo "</pre>";

}else{
    echo "fail";
};
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>manufacturers</title>
</head>

<body>
    <nav>
        <a href="manufacturers.php">manufacturers</a> |
        <a href="product.php">Product</a>
    </nav>

    <h2>Add New manufacturers</h2>
    <form action="">
        <label for="name">Name</label> <br>
        <input type="text" name="name"> <br><br>
        <label for="address">Address</label><br>
        <textarea name="address" id="address"></textarea><br> <br><br>

        <input type="checkbox" name="active" id="active">
        <label for="">Is active</label>

        <br><br> <br>
        <button type="submit" name="add_mfg">Save</button>
    </form>

    <h2>manufacturers List</h>
        <table border=1 cellpadding=0, cellspacing=0 width=400px>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Address</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                <?php
                if(isset($mfg)):
                    foreach($mfg as $item):
                ?>
                <tr>
                    <td><?=$item["id"]?></td>
                    <td><?=$item["name"]?></td>
                    <td><?= $item["address"] ?></td>
                    <td><?=$item["is_active"]?></td>
                </tr>
                <?php
                endforeach;
                endif;
                ?>
            </tbody>
        </table>
</body>

</html>