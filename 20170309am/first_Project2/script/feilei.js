/**
 * Created by Administrator on 2017/3/22 0022.
 */

(function(){
//     //=======================================================搜索框
//     var ssBtn = document.getElementById("ssBtn");
//     var search = document.getElementById("search");
//     var input1 = document.getElementById("input1");
//     var isshow = false;
//     ssBtn.onclick = function () {
//         if (!isshow) {
//             input1.style.borderBottom = "4px solid #25292e";
//             $.animate(input1, {left: 0}, 500, "CircEaseOut");
//             isshow = true;
//         } else {
//             $.animate(input1, {left: 260}, 500, "CircEaseOut");
//             isshow = false;
//         }
//     };
// // =====================================================手指动画
//     var ofingerBox = document.getElementById("fingerBox");
//     var ofinger_box = document.getElementById("finger_box");
//     var lock = true;
//     ofingerBox.onmouseover = function () {
//         if (!lock)return;
//         lock = false;
//         $.animate(ofinger_box, {"left": -20}, 500, "Linear", function () {
//             $.animate(ofinger_box, {"left": 0}, 500, "Linear", function () {
//                 $.animate(ofinger_box, {"left": -20}, 500, "Linear", function () {
//                     $.animate(ofinger_box, {"left": 0}, 500, "Linear");
//                 });
//             });
//         });
//         setTimeout(function () {
//             lock = true;
//         }, 2100);
//     };

    /**
     * 获取广告位*/
    var doPosition = function (err, d) {
        if (err) {
            console.log(err);
            return;
        }
        if ($.isJSON(d)) {
            var dataJson = JSON.parse(d);
            if (dataJson.code == ucshop.CODE.success) {
                if (dataJson.data.length < 1) {
                    console.error("广告位是空");
                    return;
                }
                iPositionId = dataJson.data[0]['position_id'];
                getBanner();
            }
            console.log(dataJson);
        } else {
            console.error("这不是一个合法的JSON");
        }

        return false;
    };
    var getPosition = function () {
        $.get(
            ucshop.getPositionAddress(),
            {},
            doPosition
        )
    };
    /**
     * 获取热门商品
     */
    var getShop_arrange = function () {
        var oShop_arrange = document.getElementById("shop_arrange");
        var shop_arrange_template= document.getElementById("shop_arrange_template").innerHTML;
        $.get(
            ucshop.getGoodsAddress(),
            {"page": 2, "pagesize": 18},
            function (error, d) {
                if (error) {
                    console.log(error);
                    return;
                }
                if ($.isJSON(d)) {
                    var dataJSON = JSON.parse(d);
                    if (dataJSON.code == ucshop.CODE.success) {
                        $.each(dataJSON.data, function (item) {
                            var sLi = $.compile(shop_arrange_template, item);
                            oShop_arrange.innerHTML += sLi;
                        });
                    }
                } else {
                    console.error("不是一个合法的JSON");
                }
            }
        )
    };
//加载
    window.onload = function(){
        //获取广告位（轮播图）
        getPosition();
        //获取热门商品
        getShop_arrange();

    };
//获取分类数据
    $.get("http://h6.duchengjiu.top/shop/api_cat.php",{},function(err,d){
        try{
            var dataJson = JSON.parse(d);
            $.each(dataJson.data,function(item,index){
                var oUL =document.getElementById("shopping_GPS");
                oUL.innerHTML +="<li><a href =\"feilei.html?cat_id="
                    +item.cat_id+"\">"
                    +item.cat_name+"</a></li>";
            });
        }catch(e){
            console.log(e);
        }
    });
//============================================获取商品列表===========
});
