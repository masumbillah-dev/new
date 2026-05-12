<?php
class Person{
    private $name;
    private $age;

    // public function __get($_pname){
    //     return $this->$_pname;
    // }
    // public function __set($_pname, $_pvalue){
    //     $this->$_pname = $_pvalue;
    // }

    public function getAge(){
        return $this->age;
    }

    public function setAge($_age){
        $this->age = $_age;


    }
}



$person = new Person();

// $person->name = "Rahim";

// $person->age = 20;
// echo $person->name;
// echo ("</br>");
// echo $person->age;

$person->setAge(20);
echo $person->getAge();



?>