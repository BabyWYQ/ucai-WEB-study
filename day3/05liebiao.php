<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<form action="04_biao.php">
    <select name="" id="" name="zhuangtai">
        <option <?php  if($zhuangtai=="满意"){echo "selected";}?>value="满意" >非常满意</option>
        <option <?php  if($zhuangtai=="一般"){echo "selected";}?> value="一般" >非常不满意</option>
        <option <?php  if($zhuangtai=="不满意"){echo "selected";}?> value="不满意">非常不满意</option>
    </select>
</form>

<script>
    var oSelect = document.getElementsByTagName("select")[0];
    oSelect.onchange = function(){
//        alert(this.value);
        //改变网址
        window.location = "03_getdeyongtu.php?zhuangtai=" + this.value;
    }
</script>

</body>
</html>