<?php
if(isset($_POST['submit'])){

    // echo "<pre>";
    // print_r($_FILES["image"]);
    // echo "</pre>";

    $file = $_FILES["image"];
    // echo $file["tmp_name"];

    $final_path = "uploads/" .$file["name"];

    if($file["size"]/1024 > 100){
        echo "File size is too large, Max size is 100kb";
    }else if($file["type"] != "image/png"){
        echo "File type is not png";

    }

    move_uploaded_file($file["tmp_name"], $final_path);
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="POST" enctype="multipart/form-data">
        <input type="file" name="image">
        <button type="submit" name="submit">Upload</button>
    </form>
</body>
</html>