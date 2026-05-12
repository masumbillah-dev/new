<?php
class PersonInfo{
    public $name = "John Doe";
    public $age = 30;

    public function info(){
        echo "Name: " . $this->name . "<br>";
        echo "Age: " . $this->age . "<br>";         
    }
}

$person = new PersonInfo();

echo $person-> info();
echo $person->age;
echo "<br>";echo "<br>";echo "<br>";
$person->name = "New John Doe";
echo $person->name;
?>