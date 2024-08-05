<?php
class class1{
    public static $x = "fffff";

    public static $z = "ggggg";

    public static function set(){
        echo "the result is "; 
    }
}

$obj = new class1();

$obj->set();

echo class1::$x;



echo class1::$z;

 

?>