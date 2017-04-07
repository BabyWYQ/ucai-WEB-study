
<?php
$xingming =$_GET['xingming'];
$zhuangtai = $_GET['timu1'];
$advice = $_GET['timu2'];
$teacher = $_GET['timu3'];

//连接数据库
$conn = mysqli_connect('localhost','root','','mydb');
//设置操作字符集
mysqli_query($conn, "SET NAMES UTF8");
//执行一条SQL语句。插入数据库
$sql = "INSERT INTO diaocha(xingming,zhuangtai,advice,teacher)VALUES ('{$xingming}','{$zhuangtai}','($advice)','{$teacher}')";
echo $sql;
$result = mysqli_query($conn,$sql);
if($result == 1){
    echo "数据成功插入";
}else{
    echo "数据错误,请联系管理员";
}
mysqli_close($conn);
?>
