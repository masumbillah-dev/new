<?php

abstract class test{
    public $name = "Rahim";
    
    public function getName(){
        return $this->name. "<br>";
    }
    abstract public function getAge();
    abstract public function viewDetails();
}

class Person extends Test{
    public $age = 25;
    
    public function getAge(){
        echo $this->age. "<br>";
    }

    public function viewDetails(){
       echo "Name : " . $this->name ."<br> Age : " . $this->age. "<br>";
    }
}

$person = new Person();
echo $person->getName();
echo $person->getAge();
echo $person->viewDetails();

echo "</br>+++++++++++++++++++++++++++++++++++++++</br>";
echo $person->viewDetails();



?>