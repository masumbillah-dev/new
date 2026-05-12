<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="send-mail.php" method="POST">
        <label for="email">Email</label> <br>
        <input type="text" name= "email"> <br> <br>

        <label for="Subject">Subject</label> <br>
        <input type="text" name= "subject"> <br> <br>

        <label for="message">Message</label> <br>
        <textarea name="msg" id=""></textarea> <br> <br>

        <input type="submit" name="mail" value= "Send Mail">
        

    </form>
    <h4><?php echo $_GET['msg']??"";?></h4>

</body>
</html>