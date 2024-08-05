<?php
class Class1{
    public $x = "fffff";

    public $z = "ggggg";

    public function set(){
        echo "the result is "; 
    }
}

$obj = new class1();

$obj->set();

$myx = $obj->x;

echo $myx;

$myz = $obj->z;

echo $myz;


class Another extends class1{
   
}

$obj2 = new Another();

$obj2->set();

?>