<?php

interface iTest {
    public function viewInfo();
}

interface iTest2 {
    public function showText();
}

class Test implements iTest, iTest2 {
    public $name = "Rahim";
    public $email = "qRg1V@example.com";

    public function viewInfo() {
        echo "Name : $this->name <br> Email : $this->email <br>";
    }

    public function showText() {
        echo "A static message <br>";



    }
}

$test = new Test();
$test->viewInfo();
$test->showText();

?>