<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
   print_r($_GET);
   $age = $_GET['age'];

   if($age >= 22){
       echo "你可以结婚，老男人";
   }else{
       echo "你这个小男孩儿还不能结婚呢";
   }
?>
</body>
</html>