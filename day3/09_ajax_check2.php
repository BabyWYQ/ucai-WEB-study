<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .tip{
            display:none;
        }
        .wrong {
            background:yellow;
            color:red;
        }
        .correct{
            background:greenyellow;
            color:green;
        }
    </style>
</head>
<body>
<p>请输入你的用户名：<input type="text" id="yonghuming"></p>
<p id="tip" class="tip"></p>
<script>
    var oYonghuming = document.getElementById("yonghuming");
    var oTip=document.getElementById("tip");

    //监听文本框的blur事件，失去焦点
    oYonghuming.onblur = function(){
        //得到文本框的内容
        var yonghuming = oYonghuming.value;
        //Ajax大模板，就是那么几句固定的话
        var xhr = new XMLHttpRequest();
        console.log(xhr);

        xhr.onreadystatechange = function (){

            if(xhr.readyState == 4){

                //结果回来之后干啥
                if(xhr.responseText == "n"){
                    oTip.style.display = "block";
                    oTip.className = "tip wrong";
                    oTip.innerHTML = "对不起，用户名已被占用" ;
                }else{
                    oTip.style.display = "block";
                    oTip.className = "tip correct";
                    oTip.innerHTML = "恭喜，用户可以使用";
                }
            }
        };
        xhr.open("GET","php/check.php?yonghuming="+yonghuming,true);
        xhr.send(null);
    }

</script>
</body>
</html>