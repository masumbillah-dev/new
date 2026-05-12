<?php

class User{
    Public $name;
    public $age;
    public function __construct($_name, $_age){
        $this->name = $_name;
        $this->age = $_age;
    }
}

$user = new User("Raju", 20);
echo $user->name;
echo "<br>";
echo $user->age;

?>