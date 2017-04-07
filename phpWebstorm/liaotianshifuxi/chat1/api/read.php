<?php
header("Content-Type: application/json");
$conn = mysqli_connect("localhost",  'duchengj_web6', '123456', 'duchengj_web6');
mysqli_query($conn, "SET NAMES UTF8");
$sql = "SELECT * FROM dcj_chat ORDER BY id DESC LIMIT 50";
$result = mysqli_query($conn, $sql);
$arr = array('result' => array());

while($row = mysqli_fetch_array($result)) {
    $row['create_time'] = date('Y-m-d H:i', $row['create_time']);
    array_push($arr['result'], $row);
}
$json = json_encode($arr);
print_r($json);
mysqli_close($conn);
