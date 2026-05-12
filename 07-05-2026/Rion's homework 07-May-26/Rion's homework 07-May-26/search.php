<?php

require_once("files/student.class.php");

if (isset($_POST["search_btn"])) {
    $id = isset($_POST["id"]) ? $_POST["id"] : "";

    $search_result = "No student found";

    if (!empty($id)) {
        $search_result = $student->searchStudent($id);
    } else {
        $msg = "<p style='color:red;'>Plsease enter an ID</p>";
        $search_result = "";
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Student</title>
</head>

<body>
    <nav>
        <a href="create.php">New Student</a>
        |
        <a href="list.php">Students List</a>
        |
        <a href="search.php">Find Student</a>
    </nav>
    <h3>Find student by ID</h3>
    <form action="" method="POST">
        <input type="search" name="id" id="id">
        <button type="submit" name="search_btn">Search</button>
    </form>
    <p><?= $search_result ?? ""; ?></p>
    <p><?= $msg ?? ""; ?></p>
</body>

</html>