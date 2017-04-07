<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/3/30 0030
 * Time: 14:42
 */
class Api{
    public $format ="json";
    public function show(){
        echo $this->format;
    }
}
$api = new Api();
$api->show();
?>