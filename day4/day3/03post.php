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

//连接数据库
$conn = mysqli_connect('localhost','root','','mydb');
//设置操作字符集
mysqli_query($conn, "SET　NAMES UTF8");
//执行一条SQL语句。插入数据库
$sql = "INSERT INTO xinwen(biaoti,neirong,riqi)VALUES ('{$title}','($date)','{$content}')";
echo $sql;
$result = mysqli_query($conn,$sql);
if($result == 1){
    echo "数据成功插入";
}else{
    echo "数据错误,请联系管理员";
}


echo "我们已经收到你的表单了";
echo $title . $content . $date;
mysqli_close($conn);
?>
</body>
</html>