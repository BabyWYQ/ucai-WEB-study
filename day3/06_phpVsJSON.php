<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
  $con =mysqli_connect('localhost','root','',"mydb");
  mysqli_query($con,"SET NAMES UTF8");
  $sql ="SELECT * FROM xinwen";
  $arr =array();
  $result =mysqli_query($con,$sql);
  while($row =mysqli_fetch_array($result)){
      array_push($arr,$row);
  }
  $json =json_encode($arr);
  print_r($json);
?>
</body>
</html>