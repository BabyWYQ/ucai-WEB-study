<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>首发</title>
</head>
<body>
<div>
    <ul>

    </ul>
</div>
<script src="js/myajax.js"></script>
<script>
    var Oul=document.getElementsByTagName("ul")[0];
    myajax.get("http://localhost/baijia/json/baijia0.json",{},function(err,data) {
        if (err) return;
        var obj = JSON.parse(data);
        //绑定DOM
        for (var i=0;i<obj.data.list.length;i++){
            var o =obj.data.list[i];
            console.log(o);
            Oul.innerHTML+=
            "<li>"+
            "<img src='"+o.m_image_url+"'>"+
            "<h3>"+o.m_title+"</h3>"+
            "<p>"+ o.m_summary+"</p>"+
            "</li>"
        }
    });




</script>
</body>
</html>