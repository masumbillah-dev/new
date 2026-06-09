<?php
require_once "db.php";

    if(isset($_POST['add_teacher'])) {
        $name = $_POST['name'];
        $qualification = $_POST['qualification'];
        $contact = $_POST['contact'];
        

        $db->query("CALL add_teacher('$name', '$qualification', '$contact');");
    }



// Delete teacher
if(isset($_POST["delete_btn"])) {
    $delete_id = $_POST["delete_id"];
    $db->query("DELETE FROM teacher WHERE id= $delete_id");
}


$result = $db->query("SELECT * FROM teacher ORDER BY id DESC");
$teachers = $result->fetch_all(MYSQLI_ASSOC);





?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Teacher</title>
</head>
<body>
   
    <form action="" method="post">
        Teacher Name <br>
        <input type="text" name="name"><br><br>
        Qualification <br>
        <input type="text" name="qualification"><br><br>
        Contact No <br>
        <input type="text" name="contact"><br><br>
        <button type="submit" name="add_teacher">Add Teacher</button>
    </form>
        <br>

     <h1>Teachers List</h1>


    <table border="1" cellspacing="0" cellpadding="10">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Qualification</th>
            <th>Contact</th>
            <th>Action</th>
        </tr>
        <?php 
         foreach($teachers as $item) :
         ?>
         <tr>
            <td><?= $item["id"] ?></td>
            <td><?= $item["name"] ?></td>
            <td><?= $item["qualification"] ?></td>
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