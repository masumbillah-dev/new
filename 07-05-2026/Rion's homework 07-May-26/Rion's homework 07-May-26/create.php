<?php
require_once("files/student.class.php");

if (isset($_POST["submit"])) {
    $id = isset($_POST["id"]) ? $_POST["id"] : "";
    $name = isset($_POST["name"]) ? $_POST["name"] : "";
    $batch = isset($_POST["batch"]) ? $_POST["batch"] : "";

    if (!empty($id) && !empty($name) && !empty($batch)) {

        $msg = $student->addStudentList($id, $name, $batch);
    } else {
        $msg = "<p style='color:red;'>Please fill all the fields</p>";
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Student</title>
</head>

<body>
    <nav>
        <a href="create.php">New Student</a>
        |
        <a href="list.php">Students List</a>
        |
        <a href="search.php">Find Student</a>
    </nav>
    <h3>Add new student</h3>
    <form action="" method="POST">
        <label for="id">ID</label><br>
        <input type="text" name="id" id="id"><br><br>
        <label for="name">Name</label><br>
        <input type="text" name="name" id="name"><br><br>
        <label for="batch">Batch</label><br>
        <input type="text" name="batch" id="batch"><br><br>
        <?= $msg ?? "" ?>
        <button type="submit" name="submit">Save</button>
    </form>
</body>

</html>