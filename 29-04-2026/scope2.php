<?php

class User
{
    public $name;
    public $age;
    protected $address = "Dhaka";
    private $password = "1234";
    static $country = "Bangladesh";
    public function __construct($_name, $_age)
    {
        $this->name = $_name;
        $this->age = $_age;
    }

    public function test()
    {
        echo "Test form parent class";
    }

    public function checkAge() {
        if ($this->age > 18) {
            return "{$this->name} is eligible to vote";
        } else {
             return "{$this->name} will do politics with Zaima Rahman";
        }
    }
}


class Trainee extends User
{
    public $course;
    public $year;

    public function __construct($_course, $_year, $_name, $_age)
    {
        parent::__construct($_name, $_age);
        $this->course = $_course;
        $this->year = $_year;
    }

    public function info()
    {
        echo "Name: {$this->name}<br>";
        echo "Age: {$this->age}<br>";
        echo "Course: {$this->course}<br>";
        echo "Year: {$this->year}<br>";
        echo "Address: {$this->address}<br>";
        echo "Password: {$this->password}<br>";
        
    }
}

$fahim = new Trainee("WDPF", 2026, "fahim", 15);
$faysal = new Trainee("WDPF", 2026, "faysal", 29);

$fahim->info();
echo "<br>";

$faysal->info();
echo "<br>";

echo $fahim->checkAge();
echo "<br>";
echo $faysal->checkAge();

