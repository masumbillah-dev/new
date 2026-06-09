<?php
require_once "db.php";

    if(isset($_POST['add_mfg'])) {
        $name = $_POST['name'];
        $address = $_POST['address'];
        $contact = $_POST['contact'];
        

        $db->query("CALL add_manufacture('$name', '$address', '$contact');");
    }



// Delete manufacturer
if(isset($_POST["delete_btn"])) {
    $delete_id = $_POST["delete_id"];
    $db->query("DELETE FROM manufacturer WHERE id= $delete_id");
}


$result = $db->query("SELECT * FROM manufacturer ORDER BY id DESC");
$manufacturers = $result->fetch_all(MYSQLI_ASSOC);

/* echo "<pre>";
print_r($manufacturers);
echo "</pre>"; */



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Manufacturer</title>
</head>
<body>

<h1>Add Manufacturer</h1>
    <form action="" method="post">
        Manufacturer Name <br>
        <input type="text" name="name"><br><br>
        Address <br>
        <input type="text" name="address"><br><br>
        Contact No <br>
        <input type="text" name="contact"><br><br>
        <button type="submit" name="add_mfg">Add Manufacture</button>
    </form>




    <br>

    <h1>Manufacturers List</h1>
    <table border="1" cellspacing="0" cellpadding="10">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Action</th>
        </tr>
        <?php 
         foreach($manufacturers as $item) :
         ?>
         <tr>
            <td><?= $item["id"] ?></td>
            <td><?= $item["name"] ?></td>
            <td><?= $item["address"] ?></td>
            <td><?= $item["contact_no"] ?></td>
            <td><form method="POST">
                <input type="hidden" name="delete_id" value="<?= $item["id"] ?>">
                <button type="submit" name="delete_btn">Delete</button>
            </form></td>
         </tr>

         <?php endforeach ?>
    </table>
</body>
</html>