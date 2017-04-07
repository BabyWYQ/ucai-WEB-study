<?php
//得到GET传参的值
$zhuangtai = $_GET['zhuangtai'];
//连接数据库
//    $con = mysqli_connect('localhost','duchengj_web6','123456', "duchengj_web6");
$con = mysqli_connect('localhost','root','', "mydb");
//设置字符集
mysqli_query($con, "SET NAMES UTF8");
//写查询SQL语句
//    $sql = "SELECT * FROM quest WHERE `class` = '{$zhuangtai}'";
//    $sql = "SELECT * FROM quest ";
//    $sql = "SELECT * FROM xinwen WHERE  title = '{$zhuangtai}'";
$sql = "SELECT * FROM xinwen";
echo $sql;
//进行查询
$result = mysqli_query($con, $sql);
print_r($result);
?>
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
<table>
    <tr>
        <td>现状</td>
        <td>提议老师</td>
        <td>建议</td>
    </tr>
    <?php
    while($row = mysqli_fetch_array($result)){
        ?>
        <tr>
            <td><?php echo $row['biaoti'] ?></td>
            <td><?php echo $row['neirong'] ?></td>
            <td><?php echo $row['riqi'] ?></td>
        </tr>
        <?php
    }
    mysqli_close($con);
    ?>
</table>
</body>
</html>
