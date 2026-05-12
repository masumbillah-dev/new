<?php

if(isset($_POST['submit'])) {
    // echo "<pre>";
    // print_r($_FILES["image"]);
    // echo "</pre>";
    $file = $_FILES["image"];
    // echo $file["size"];    
    $final_path = "uploads/".$file["name"];
    
    $type = !empty($file["tmp_name"]) ? mime_content_type($file["tmp_name"]) : "";
    
    // echo $type;
    
    
   if ($file["size"] == 0) {
    $msg = "Please select a file";

   }elseif ($file["size"] > (2 * 1024 * 1024)) {
        $msg3= "File size should be less than 2mb";
    }elseif((   $type == "image/jpeg" ||
                $type == "image/png" ||
                $type == "image/jpg" ||
                $type == "application/pdf" ||
                $type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document")== false) {

      $msg=  "File type not supported. Supported types: jpeg, png, jpg, pdf, docx";

    }
    
    else{
        $msg2= "File uploaded successfully";
        move_uploaded_file($file["tmp_name"], $final_path);
         $img_HTML = "<img class='pic' src='{$final_path}'>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .msg {
            color: red;
        }

        .msg2 {
            color: green;
        }

        .msg3 {
            color: red;
        }

        .pic {
            height: 200px;
            width: 200px;
        }
    </style>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data">
        <input type="file" name="image">
        <button type="submit" name="submit">Upload</button>
    </form>
    <p class="msg"><?php echo $msg ?? "" ?></p> 
    <p class="msg2"><?php echo $msg2 ?? "" ?></p>
    <p class="msg3"><?php echo $msg3 ?? "" ?></p>
    <p> <?php echo $img_HTML ?? ""  ?></p>

    
</body>
</html>