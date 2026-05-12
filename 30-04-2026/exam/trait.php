<?php

trait Calculate{
    public function add($a, $b){
        return $a + $b;
    }
    public function sub($a, $b){
        return $a - $b;
    }
    public function mul($a, $b){
        return $a * $b;
    }
    public function div($a, $b){
        return $a / $b;
    }
}
trait operators{
    public function power($a, $b){
        return $a ** $b;
    }
    public function mod($a, $b){
        return $a % $b;
    }
}

class Calculator{
    use Calculate;
    use operators;
}

$cal = new Calculator();
echo $cal->add(10, 5) . "<br>";
echo $cal->sub(10, 5) . "<br>";
echo $cal->mul(10, 5) . "<br>";
echo $cal->div(10, 5) . "<br>";
echo $cal->power(10, 5) . "<br>";
echo $cal->mod(10, 5) . "<br>";

?>