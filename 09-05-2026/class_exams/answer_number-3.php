<?php
class Student{
    public $id;
    public $name;
    public $score;
    public $grade;
    
    function __construct($_id=null, $_name="", $_score="", $_grade="") {
        $this->id = $_id;
        $this->name = $_name;
        $this->score = $_score;
        $this->grade = $_grade;
    }    
   
    function result($_id){
        $file = fopen(__DIR__ . "/student.csv", "r");        
        while($row = fgetcsv($file)){
            if($row[0] == $_id){
                return "ID: $row[0]<br>
                Name: $row[1]<br>
                Score: $row[2] <br>
                Grade: $row[3]";
            }
        }
        fclose($file);
        return "Data not found!";
    }
  
}
$student = new Student;

?>

<?php

if(isset($_POST['id'])){
 
    $s = new Student();
    $res = $s->result($_POST['id']);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find Student</title>
</head>
<body>
    
    <h3>Find Student by ID</h3>
    <form action="" method="POST">
        <input type="search" name="id" id="id" required>
        <button type="submit">Search</button>
    </form>
    <p>
        <?php echo $res ?? ""; ?>
    </p>
</body>
</html>