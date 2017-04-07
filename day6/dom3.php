<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p{
            width: 50px;
            height: 50px;
            background:yellow;
        }
    </style>

</head>
<body>
<div id="box">
    <p></p>
    <p></p>
    <p></p>
    <p>付荣</p>
    <p></p>
    <p>梦婷</p>
    <p>亚倩</p>
    <p id="lm">黎明</p>
    <p></p>
    <p></p>
</div>
<script>
    //返回obj的上一个兄弟
    function  prevSibling(obj) {
        var arr=[];
        var prev = obj;
        while(prev = prev.previousSibling){
            if( prev.nodeType == Node.ELEMENT_NODE){
                arr.push(prev);
            }
        }
        return arr;
    }
    var Olm = document.getElementById("lm");
    console.log(prevSibling(Olm));
</script>
</body>
</html>