
<?php

if (isset($_POST['submit'])) {
    $file = $_FILES["file"];

    if (empty($file["tmp_name"])) {
        $fileMsg = '<p style="color:red;">Please select a image first.</p>';
    } else {
        $type = mime_content_type($file["tmp_name"]);

        $file_path = $file['name'];

        if ($file["size"] > (500 * 1024)) {
            $fileMsg = '<p style="color:red;">File size cannot be more than 500kb</p>';
        } elseif 
        (!($type == "image/jpeg" ||
         $type == "image/png" || 
         $type == "image/jpg" )) 
         {
            $fileMsg = '<p style="color:red;">File type must be jpg, jpeg or png.</p>';
        } else {
            move_uploaded_file($file['tmp_name'], $file_path);
            $imgPrev = "<img style='height:200px; width:auto;' src='{$file_path}'>";
        }
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
</head>

<body>
    <form action="" method="post" enctype="multipart/form-data">
        <label for="">Upload a Image </label>
        <input type="file" name="file" id=""><br><br>
        <button type="submit" name="submit">Upload</button>
    </form>
    <?= $fileMsg ?? "" ?>
    <?= $imgPrev ?? "" ?>

</body>

</html>