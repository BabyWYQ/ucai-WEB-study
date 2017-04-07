<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
   print_r($_POST);
   $title = $_POST['title'];
   $content = $_POST['content'];
   $date = $_POST['date'];

   echo "我们已经收到你的表单了";
   echo $title . $content . $date;

?>
</body>
</html>