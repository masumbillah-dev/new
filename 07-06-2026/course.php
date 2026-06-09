<?php
require_once "db.php";

$sql = "
select c.*, t.name as teacher
from course c, teacher t
where c.teacher_id = t.id
";

// Show all Course

$result = $db->query($sql);
$courses = $result->fetch_all(MYSQLI_ASSOC);

// Show View Course

$result_view = $db->query("SELECT * FROM course_view");
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
    <title>Courses</title>
</head>
<body>


   <h2>View Courses</h2>
    <table border="1" cellspacing="0" cellpadding="10">
        <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Fee</th>
            <th>Teacher</th>
        </tr>
        <?php 
         foreach($rows_view as $item) :
         ?>
         <tr>
            <td><?= $item["id"] ?></td>
            <td><?= $item["course_name"] ?></td>
            <td><?= $item["fee"] ?></td>
            <td><?= $item["teacher_name"] ?></td>
         </tr>

         <?php endforeach ?>
    </table>

   <h2>Courses</h2>
    <table border="1" cellspacing="0" cellpadding="10">
        <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Fee</th>
            <th>Teacher</th>
        </tr>
        <?php 
         foreach( $courses as $item) :
         ?>
         <tr>
            <td><?= $item["id"] ?></td>
            <td><?= $item["course_name"] ?></td>
            <td><?= $item["fee"] ?></td>
            <td><?= $item["teacher"] ?></td>
         </tr>

         <?php endforeach ?>
    </table>
</body>
</html>